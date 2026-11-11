import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';

/**
 * Animated count-up metric that triggers on viewport entry or explicit `enabled` flag.
 */
const StatCounter = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1100,
  enabled,
  className = '',
}) => {
  const [ref, seen] = useInView({ threshold: 0.25, once: true });
  const isReady = enabled !== undefined ? enabled : seen;
  const formatted = useCountUp(value, { enabled: isReady, duration, decimals });

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export default StatCounter;

