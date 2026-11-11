import { useInView } from '../../hooks/useInView';

/**
 * Infinite horizontal marquee that pauses on hover and when scrolled off-screen.
 */
const Marquee = ({ items, reverse = false, renderItem, className = '' }) => {
  const [ref, inView] = useInView({ threshold: 0, rootMargin: '120px', once: false });

  return (
    <div
      ref={ref}
      className={`marquee-group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${
        inView ? '' : 'anim-paused'
      } ${className}`}
    >
      <div
        className={`marquee-track flex w-max gap-3 py-1 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full`}
      >
        <div className="flex shrink-0 items-center gap-3">
          {items.map((item, idx) => renderItem(item, idx, false))}
        </div>
        <div
          className="flex shrink-0 items-center gap-3 motion-reduce:hidden"
          aria-hidden="true"
        >
          {items.map((item, idx) => renderItem(item, idx, true))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;

