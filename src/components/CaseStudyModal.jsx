import { useEffect } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Shield,
  Server,
  TrendingUp,
  Lightbulb,
  ChevronRight,
} from 'lucide-react';

const CaseStudyModal = ({ project, onClose }) => {
  // ── Modal UX: Scroll lock + Escape key listener ──────────────
  useEffect(() => {
    // Lock body scroll while modal is open
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Restore scroll on unmount
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-zinc-950/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case Study: ${project.title}`}
    >
      {/* Modal panel — stop click propagation so clicking inside doesn't close */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-700/60 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.6)] animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── Header ─────────────────────────────────────── */}
        <div className="sticky top-0 z-10 flex items-start justify-between p-6 bg-zinc-900 border-b border-zinc-800">
          <div>
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
              Case Study
            </p>
            <h2 className="text-2xl font-extrabold text-white">{project.title}</h2>
            <p className="text-sm text-zinc-400 mt-0.5">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            id="modal-close-btn"
            aria-label="Close case study"
            className="shrink-0 p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all duration-200 ml-4"
          >
            <X size={20} />
          </button>
        </div>

        {/* ── Body ───────────────────────────────────────── */}
        <div className="p-6 space-y-8">

          {/* Tech + Links */}
          <div className="flex flex-wrap items-center justify-between gap-4">
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
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 px-4 py-2 rounded-md transition-all duration-200"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                id={`modal-github-${project.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white px-4 py-2 rounded-md transition-all duration-200"
              >
                <Github size={14} /> Source
              </a>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-3">Overview</h3>
            <p className="text-zinc-300 text-base leading-relaxed">{project.overview}</p>
          </div>

          {/* Problem → Solution → Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'The Problem', text: project.problem, color: 'border-red-500/30 bg-red-500/5' },
              { label: 'The Solution', text: project.solution, color: 'border-cyan-500/30 bg-cyan-500/5' },
              { label: 'The Outcome', text: project.outcome, color: 'border-emerald-500/30 bg-emerald-500/5' },
            ].map(({ label, text, color }) => (
              <div key={label} className={`rounded-xl border p-5 ${color}`}>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">{label}</p>
                <p className="text-zinc-300 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Architecture */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">
              <Server size={14} className="text-cyan-400" /> Architecture & Data Flow
            </h3>
            <div className="bg-zinc-950/70 rounded-xl border border-zinc-800 p-5 font-mono text-sm">
              {project.architecture.map((line, i) => (
                <div key={i} className="flex items-start gap-2 text-zinc-400 mb-1 last:mb-0">
                  <ChevronRight size={14} className="text-cyan-500 mt-0.5 shrink-0" />
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div>
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
          </div>

          {/* Metrics */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">
              <TrendingUp size={14} className="text-cyan-400" /> Professional Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div key={i} className="bg-zinc-950/60 border border-zinc-800 rounded-xl p-4">
                  <p className="text-zinc-300 text-sm leading-relaxed">{metric}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Work */}
          <div>
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
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-800 flex justify-between items-center">
          <p className="text-xs font-mono text-zinc-600">Press Esc to close</p>
          <button
            onClick={onClose}
            className="text-sm text-zinc-400 hover:text-white transition-colors font-medium"
          >
            Close ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
