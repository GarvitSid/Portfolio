import { useEffect, useState } from 'react';

/**
 * Tracks the currently active section id while scrolling using IntersectionObserver.
 */
export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState('');
  const idsKey = sectionIds.join(',');

  useEffect(() => {
    const ids = idsKey.split(',').filter(Boolean);
    if (!ids.length || typeof IntersectionObserver === 'undefined') return undefined;

    const visibleRatios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = '';
        let bestRatio = 0;
        ids.forEach((id) => {
          const ratio = visibleRatios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestRatio > 0) {
          setActiveId(bestId);
        }
      },
      {
        rootMargin: '-25% 0px -50% 0px',
        threshold: [0, 0.15, 0.35, 0.6],
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleTopClear = () => {
      if (window.scrollY < 160) {
        setActiveId('');
      }
    };
    window.addEventListener('scroll', handleTopClear, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleTopClear);
    };
  }, [idsKey]);

  return activeId;
}

