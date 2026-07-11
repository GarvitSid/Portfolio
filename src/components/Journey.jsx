import { MapPin } from 'lucide-react';

const timeline = [
  { year: '2026', event: 'Learning AI Integration & Advanced Backend Concepts' },
  { year: '2025', event: 'Built Full-Stack MERN Projects — Jobby App & VoxNode' },
  { year: '2024', event: 'Discovered Web Development & Started Building' },
];

const exploring = [
  'Advanced React Patterns',
  'TypeScript',
  'System Design Fundamentals',
  'AI-Powered Applications',
];

const Journey = () => {
  return (
    <section id="journey" className="py-24 bg-zinc-900 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <div className="w-16 h-0.5 bg-cyan-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Timeline */}
          <div>
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Timeline</h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800" />

              <div className="space-y-8">
                {timeline.map(({ year, event }, i) => (
                  <div key={year} className="flex items-start gap-6 relative">
                    {/* Dot */}
                    <div className={`shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10
                      ${i === 0
                        ? 'border-cyan-400 bg-zinc-900 shadow-[0_0_10px_rgba(34,211,238,0.4)]'
                        : 'border-zinc-700 bg-zinc-900'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-cyan-400' : 'bg-zinc-600'}`} />
                    </div>

                    <div className="pt-1">
                      <span className="text-xs font-mono text-cyan-400 tracking-widest">{year}</span>
                      <p className="text-zinc-300 text-sm mt-1 leading-relaxed">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Currently Exploring */}
          <div>
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">
              Currently Exploring
            </h3>
            <div className="space-y-3">
              {exploring.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-zinc-950/60 border border-zinc-800 rounded-xl px-5 py-3.5
                             hover:border-cyan-500/30 hover:bg-zinc-950/80 transition-all duration-200 group"
                >
                  <MapPin size={14} className="text-cyan-500 shrink-0" />
                  <span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;
