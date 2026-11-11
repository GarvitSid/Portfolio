import { useInView } from '../../hooks/useInView';

/**
 * Scroll-reveal wrapper animating only transform and opacity for 60fps.
 */
const Reveal = ({
  children,
  delay = 0,
  threshold = 0.15,
  className = '',
  as: Component = 'div',
}) => {
  const [ref, seen] = useInView({ threshold, once: true });

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[transform,opacity] duration-700 ease-out motion-reduce:transition-none ${
        seen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0'
      } ${className}`}
    >
      {children}
    </Component>
  );
};

export default Reveal;

