import { Code2, Zap } from 'lucide-react';

const skills = {
  frontend: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express.js', 'MongoDB Atlas', 'REST APIs'],
  tools: ['Git & GitHub', 'JWT Auth', 'Bcrypt', 'Postman', 'Vercel', 'Render'],
};

const exploring = [
  'Advanced React Patterns',
  'TypeScript Fundamentals',
  'System Design Basics',
  'AI-Powered Applications',
];

const AboutSkills = () => {
  return (
    <>
      {/* ── ABOUT ME ─────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-zinc-900 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Behind The <span className="text-cyan-400">Code</span>
            </h2>
            <div className="w-16 h-0.5 bg-cyan-500 rounded-full" />
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* ── About narrative — 2 cols ── */}
            <div className="lg:col-span-2 bg-zinc-950/60 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-500 pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <Code2 size={20} className="text-cyan-400" />
                My Journey
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-4">
                I am a Full-Stack MERN Developer passionate about building{' '}
                <span className="text-zinc-200 font-medium">
                  secure, scalable, and user-friendly
                </span>{' '}
                applications. I don&apos;t just follow tutorials — I focus on
                engineering real-world solutions, from designing robust REST APIs and
                implementing JWT authentication, to crafting responsive frontend
                experiences with React.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed">
                When I&apos;m not writing code, I&apos;m analyzing system architectures or
                figuring out how to leverage AI APIs (like OpenAI) for practical,
                production-grade use cases.
              </p>
            </div>

            {/* ── Currently Exploring — 1 col ── */}
            <div className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors duration-300">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Zap size={18} className="text-cyan-400" />
                Currently Exploring
              </h3>
              <ul className="space-y-4">
                {exploring.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-400">
                    <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <span className="text-sm font-medium hover:text-white transition-colors cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── SKILLS MATRIX ────────────────────────────────────────── */}
      <section id="skills" className="py-24 bg-zinc-900 px-6 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Technical <span className="text-cyan-400">Arsenal</span>
            </h2>
            <div className="w-16 h-0.5 bg-cyan-500 rounded-full" />
          </div>

          <div className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {[
                { label: 'Frontend', items: skills.frontend },
                { label: 'Backend & Database', items: skills.backend },
                { label: 'Tools & Security', items: skills.tools },
              ].map(({ label, items }) => (
                <div key={label}>
                  <h4 className="text-xs font-mono text-zinc-500 mb-4 uppercase tracking-widest">
                    {label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-zinc-800/60 text-zinc-300 rounded-md border border-zinc-700/60 text-sm font-mono hover:border-cyan-500/60 hover:text-cyan-400 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutSkills;
