import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const timeline = [
  {
    year: '2026',
    title: 'AI Systems, RAG & Containerized ML Microservices',
    event:
      'Built ChatMind AI College — a zero-hallucination RAG student portal powered by Pinecone & Google Gemini with 45 CI-tested backend suites — and AgroInOne, a dual-stage Random Forest AgriTech platform backed by Python Flask and Supabase PostgreSQL.',
    tags: ['ChatMind AI College', 'AgroInOne', 'Pinecone & Gemini', 'Flask & Docker'],
    current: true,
  },
  {
    year: '2025',
    title: 'Full-Stack MERN & AI Integrations',
    event:
      'Built and shipped production MERN applications including VoxNode (real-time Web Speech API to OpenAI hierarchical mindmaps) and Jobby App (zero-reload SPA with JWT stateless authentication and custom Express middleware).',
    tags: ['VoxNode', 'Jobby App', 'Node.js & Express', 'JWT & MongoDB'],
    current: false,
  },
  {
    year: '2024',
    title: 'Web Development & Engineering Foundations',
    event:
      'Discovered web development, mastered modern JavaScript (ES6+), React component architecture, and RESTful API design while shifting from tutorials to end-to-end problem solving.',
    tags: ['React.js', 'JavaScript ES6+', 'REST APIs', 'Tailwind CSS'],
    current: false,
  },
];

const TimelineRow = ({ item, index }) => {
  const [nodeRef, seen] = useInView({ threshold: 0.3, once: true });

  return (
    <div ref={nodeRef} className="relative pl-12 md:pl-14">
      {/* Node marker popping in on viewport entry */}
      <div
        className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 transition-transform duration-500 ease-out ${seen ? 'scale-100' : 'scale-0 motion-reduce:scale-100'
          } ${item.current
            ? 'border-cyan-400 bg-zinc-900 shadow-[0_0_16px_rgba(34,211,238,0.45)]'
            : 'border-zinc-700 bg-zinc-900'
          }`}
      >
        <div
          className={`w-2.5 h-2.5 rounded-full ${item.current ? 'bg-cyan-400 animate-pulse' : 'bg-zinc-500'
            }`}
        />
      </div>

      <Reveal delay={index * 110}>
        <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6 md:p-7 hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-xs font-mono font-semibold text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 tracking-widest">
              {item.year}
            </span>
            {item.current && (
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                Latest Milestone
              </span>
            )}
          </div>

          <h3 className="text-lg md:text-xl font-bold text-white mb-2">
            {item.title}
          </h3>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
            {item.event}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

const Journey = () => {
  const [lineRef, lineSeen] = useInView({ threshold: 0.15, once: true });
  const [supportsViewTimeline] = useState(() =>
    typeof CSS !== 'undefined' && CSS.supports?.('animation-timeline', 'view()')
  );

  return (
    <section id="journey" className="py-24 bg-zinc-900 px-6 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="04"
          label="Journey"
          title="My"
          accent="Journey"
          description="Progression from foundational frontend craft to production MERN systems, RAG pipelines, and containerized machine learning services."
        />

        <div ref={lineRef} className="relative">
          {/* Base rail */}
          <div
            aria-hidden="true"
            className="absolute left-[15px] top-2 bottom-2 w-px bg-zinc-800"
          />

          {/* Animated vertical progress rail: CSS view-timeline or IO fallback */}
          <div
            aria-hidden="true"
            className={`absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-cyan-500/70 to-zinc-700 origin-top ${supportsViewTimeline
              ? 'timeline-line-css'
              : `transition-transform duration-1000 ease-out ${lineSeen ? 'scale-y-100' : 'scale-y-0 motion-reduce:scale-y-100'
              }`
              }`}
          />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <TimelineRow key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
