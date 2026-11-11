import { useInView } from '../../hooks/useInView';

/**
 * Standardized section header with numbered eyebrow and scaleX animated underline.
 */
const SectionHeader = ({ number, label, title, accent, description }) => {
  const [ref, seen] = useInView({ threshold: 0.2, once: true });

  return (
    <div ref={ref} className="mb-14">
      <p
        className={`text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-2 transition-[transform,opacity] duration-500 ease-out ${
          seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {number} / {label}
      </p>

      <h2
        style={{ transitionDelay: '80ms' }}
        className={`text-3xl md:text-4xl font-bold text-white mb-3 transition-[transform,opacity] duration-600 ease-out ${
          seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {title} <span className="text-cyan-400">{accent}</span>
      </h2>

      <div
        style={{ transitionDelay: '180ms' }}
        className={`w-16 h-0.5 bg-cyan-500 rounded-full origin-left transition-transform duration-700 ease-out ${
          seen ? 'scale-x-100' : 'scale-x-0'
        } ${description ? 'mb-4' : ''}`}
      />

      {description && (
        <p
          style={{ transitionDelay: '240ms' }}
          className={`text-zinc-400 text-sm max-w-xl transition-[transform,opacity] duration-600 ease-out ${
            seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

