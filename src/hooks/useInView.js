import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Tracks whether a referenced element has entered (or is currently inside) the viewport.
 * Supports passing a numeric threshold or an options object `{ threshold, rootMargin, once }`.
 */
export function useInView(options = 0.15) {
  const normalized =
    typeof options === 'number'
      ? { threshold: options, rootMargin: '0px', once: true }
      : { threshold: 0.15, rootMargin: '0px', once: true, ...options };

  const { threshold, rootMargin, once } = normalized;
  const ref = useRef(null);
  const [inView, setInView] = useState(() => (once && prefersReducedMotion()));

  useEffect(() => {
    if (once && prefersReducedMotion()) {
      setInView(true);
      return undefined;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}

