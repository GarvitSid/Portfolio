import { useEffect, useState } from 'react';

/**
 * Animates a number from 0 to `target` using requestAnimationFrame when `enabled` is true.
 */
export function useCountUp(target, { enabled = true, duration = 1100, decimals = 0 } = {}) {
  const [value, setValue] = useState(() => (enabled ? 0 : target));

  useEffect(() => {
    if (!enabled) return undefined;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || duration <= 0) {
      setValue(target);
      return undefined;
    }

    let rafId = null;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setValue(Number(current.toFixed(decimals)));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    setValue(0);
    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [target, enabled, duration, decimals]);

  return value.toFixed(decimals);
}

