import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  X,
  ExternalLink,
  Github,
  Shield,
  Server,
  TrendingUp,
  Lightbulb,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import StatCounter from './ui/StatCounter';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const CaseStudyModal = ({
  project,
  onClose,
  onSelectProject,
  projects = [],
}) => {
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [slideDir, setSlideDir] = useState(0);

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const hasMultiple = projects.length > 1 && currentIndex !== -1;

  const goToRelative = useCallback(
    (delta) => {
      if (!hasMultiple) return;
      setSlideDir(delta);
      const nextIndex = (currentIndex + delta + projects.length) % projects.length;
      onSelectProject?.(projects[nextIndex]);
    },
    [currentIndex, hasMultiple, onSelectProject, projects]
  );

  // Focus close button on mount, lock body scroll, handle Escape/Arrow/Focus Trap
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move initial focus to close button
    const focusTimer = requestAnimationFrame(() => {
      closeBtnRef.current?.focus();
    });

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'ArrowLeft' && hasMultiple) {
        e.preventDefault();
        goToRelative(-1);
        return;
      }

      if (e.key === 'ArrowRight' && hasMultiple) {
        e.preventDefault();
        goToRelative(1);
        return;
      }

      if (e.key === 'Tab' && panelRef.current) {
        const focusables = Array.from(
          panelRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(focusTimer);
      document.body.style.overflow = prevOverflow || 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, hasMultiple, goToRelative]);

  // Reset scroll to top of modal panel when switching projects
  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [project.id]);

  return (
    <motion.div
      key="case-study-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-zinc-950/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
    >
      <motion.div
        ref={panelRef}
        key="case-study-panel"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-700/60 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.65)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ─────────────────────────────────────── */}
        <div className="sticky top-0 z-20 flex items-start justify-between p-6 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800">
          <div className="min-w-0 pr-4">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Case Study
              </p>
              {hasMultiple && (
                <span className="text-[11px] font-mono text-zinc-500">
                  · {currentIndex + 1} / {projects.length}
                </span>
              )}
            </div>
            <h2
              id="case-study-modal-title"
              className="text-2xl font-extrabold text-white truncate"
            >
              {project.title}
            </h2>
            <p className="text-sm text-zinc-400 mt-0.5">{project.subtitle}</p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={() => goToRelative(-1)}
                  aria-label="Previous case study"
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => goToRelative(1)}
                  aria-label="Next case study"
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              id="modal-close-btn"
              aria-label="Close case study"
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ml-1"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* ── Body (horizontal slide when switching prev/next) ── */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              x: slideDir === 0 ? 0 : slideDir > 0 ? 28 : -28,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: slideDir === 0 ? 0 : slideDir > 0 ? -28 : 28,
            }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 space-y-8"
          >
            {/* Tech + Links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.04 }}
              className="flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`modal-live-${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-md transition-colors duration-200"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`modal-github-${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white px-4 py-2 rounded-md transition-colors duration-200"
                >
                  <Github size={14} /> Source
                </a>
              </div>
            </motion.div>

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-3">
                Overview
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed">
                {project.overview}
              </p>
            </motion.div>

            {/* Problem -> Solution -> Outcome (left-to-right narrative reveal) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  label: 'The Problem',
                  text: project.problem,
                  color: 'border-red-500/30 bg-red-500/5',
                },
                {
                  label: 'The Solution',
                  text: project.solution,
                  color: 'border-cyan-500/30 bg-cyan-500/5',
                },
                {
                  label: 'The Outcome',
                  text: project.outcome,
                  color: 'border-emerald-500/30 bg-emerald-500/5',
                },
              ].map(({ label, text, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.32, delay: 0.14 + i * 0.07 }}
                  className={`rounded-xl border p-5 ${color}`}
                >
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    {label}
                  </p>
                  <p className="text-zinc-300 text-sm leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>

            {/* Architecture & Data Flow with traveling cyan pulse */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.22 }}
            >
              <h3 className="flex items-center gap-2 text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">
                <Server size={14} className="text-cyan-400" /> Architecture &amp; Data Flow
              </h3>
              <div className="relative bg-zinc-950/75 rounded-xl border border-zinc-800 p-5 font-mono text-sm overflow-hidden">
                {/* Vertical connector rail + traveling pulse */}
                <div
                  aria-hidden="true"
                  className="absolute left-[27px] top-7 bottom-7 w-px bg-zinc-800 overflow-hidden"
                >
                  <div className="w-full h-10 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse-travel" />
                </div>

                <div className="space-y-3 relative">
                  {project.architecture.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.28, delay: 0.26 + i * 0.06 }}
                      className="flex items-start gap-3 text-zinc-300"
                    >
                      <span className="relative z-10 mt-1 w-3.5 h-3.5 rounded-full bg-zinc-900 border border-cyan-500/60 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      </span>
                      <span className="leading-relaxed">{line}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.32 }}
            >
              <h3 className="flex items-center gap-2 text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">
                <Shield size={14} className="text-cyan-400" /> Security Implementations
              </h3>
              <ul className="space-y-2.5">
                {project.security.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Metrics (structured count-ups + text cards) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.38 }}
            >
              <h3 className="flex items-center gap-2 text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">
                <TrendingUp size={14} className="text-cyan-400" /> Professional Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {project.metrics.map((metric, i) =>
                  typeof metric === 'object' ? (
                    <div
                      key={metric.label}
                      className="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4"
                    >
                      <p className="text-xl font-extrabold font-mono text-cyan-400 mb-1">
                        <StatCounter
                          value={metric.value}
                          prefix={metric.prefix}
                          suffix={metric.suffix}
                          decimals={metric.decimals ?? 0}
                          enabled
                          duration={900}
                        />
                      </p>
                      <p className="text-xs font-mono text-white mb-1">
                        {metric.label}
                      </p>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {metric.detail}
                      </p>
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="bg-zinc-950/60 border border-zinc-800 rounded-xl p-4"
                    >
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {metric}
                      </p>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Future Work */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.44 }}
            >
              <h3 className="flex items-center gap-2 text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">
                <Lightbulb size={14} className="text-cyan-400" /> Future Improvements
              </h3>
              <ul className="space-y-2">
                {project.futureWork.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-800 flex flex-wrap justify-between items-center gap-3">
          <p className="text-xs font-mono text-zinc-500">
            Esc to close{hasMultiple ? ' · ← / → to switch case studies' : ''}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-zinc-300 hover:text-white transition-colors font-medium px-3 py-1 rounded hover:bg-zinc-800"
          >
            Close ×
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyModal;
