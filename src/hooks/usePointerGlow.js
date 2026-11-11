import { useEffect, useRef } from 'react';

/**
 * Sets rAF-throttled `--pointer-x`, `--pointer-y`, `--pointer-nx`, `--pointer-ny`, and
 * `--pointer-active` CSS variables directly on the target container for 60fps pointer glow / tilt.
 * Inactive on touch devices and when prefers-reduced-motion is enabled.
 */
export function usePointerGlow({ maxTilt = 0 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === 'undefined') return undefined;

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || reducedMotion) return undefined;

    let rafId = null;
    let latestEvent = null;

    const update = () => {
      rafId = null;
      if (!latestEvent || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = latestEvent.clientX - rect.left;
      const y = latestEvent.clientY - rect.top;
      const nx = (x / rect.width) * 2 - 1; // -1 to 1
      const ny = (y / rect.height) * 2 - 1; // -1 to 1

      ref.current.style.setProperty('--pointer-x', `${x.toFixed(1)}px`);
      ref.current.style.setProperty('--pointer-y', `${y.toFixed(1)}px`);
      ref.current.style.setProperty('--pointer-active', '1');

      if (maxTilt > 0) {
        const rotateY = (nx * maxTilt).toFixed(2);
        const rotateX = (-ny * maxTilt).toFixed(2);
        ref.current.style.setProperty('--tilt-x', `${rotateX}deg`);
        ref.current.style.setProperty('--tilt-y', `${rotateY}deg`);
      }
    };

    const handleMove = (e) => {
      latestEvent = e;
      if (rafId === null) {
        rafId = requestAnimationFrame(update);
      }
    };

    const handleLeave = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (!ref.current) return;
      ref.current.style.setProperty('--pointer-active', '0');
      if (maxTilt > 0) {
        ref.current.style.setProperty('--tilt-x', '0deg');
        ref.current.style.setProperty('--tilt-y', '0deg');
      }
    };

    node.addEventListener('pointermove', handleMove, { passive: true });
    node.addEventListener('pointerleave', handleLeave, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      node.removeEventListener('pointermove', handleMove);
      node.removeEventListener('pointerleave', handleLeave);
    };
  }, [maxTilt]);

  return ref;
}

