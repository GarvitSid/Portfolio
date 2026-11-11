import { Code2, Zap } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';
import Marquee from './ui/Marquee';
import TiltCard from './ui/TiltCard';

const marqueeRowOne = [
  { name: 'React.js', group: 'Frontend' },
  { name: 'TypeScript', group: 'Language' },
  { name: 'JavaScript (ES6+)', group: 'Language' },
  { name: 'Tailwind CSS', group: 'Styling' },
  { name: 'Node.js', group: 'Backend' },
  { name: 'Express.js', group: 'Backend' },
  { name: 'MongoDB Atlas', group: 'Database' },
  { name: 'Supabase PostgreSQL', group: 'Database' },
  { name: 'REST APIs', group: 'Architecture' },
  { name: 'HTML5 & CSS3', group: 'Frontend' },
];

const marqueeRowTwo = [
  { name: 'Google Gemini API', group: 'AI' },
  { name: 'Pinecone Vector DB', group: 'RAG' },
  { name: 'OpenAI API', group: 'AI' },
  { name: 'Python Flask', group: 'Microservice' },
  { name: 'Scikit-Learn', group: 'ML' },
  { name: 'JWT Auth & RBAC', group: 'Security' },
  { name: 'Bcrypt & Rate Limiting', group: 'Security' },
  { name: 'Jest & Supertest', group: 'Testing' },
  { name: 'Docker & GitHub Actions', group: 'DevOps' },
  { name: 'Git, Postman & Vercel', group: 'Tooling' },
];

const exploring = [
  'Advanced React Patterns',
  'TypeScript Architecture',
  'System Design Fundamentals',
  'Production RAG & AI Agents',
];

const SkillChip = ({ item }) => (
  <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-zinc-900/90 text-zinc-200 rounded-lg border border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 text-sm font-mono whitespace-nowrap cursor-default">
    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0" />
    <span>{item.name}</span>
    <span className="text-[11px] text-zinc-500 border-l border-zinc-800 pl-2">
      {item.group}
    </span>
  </span>
);

const AboutSkills = () => {
  return (
    <>
      {/* ── ABOUT ME ─────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-zinc-900 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="01"
            label="About"
            title="Behind The"
            accent="Code"
          />

          {/* Bento grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* About narrative — 2 cols */}
            <Reveal delay={0} className="lg:col-span-2">
              <TiltCard
                as="div"
                maxTilt={0}
                ambientGlow
                className="h-full bg-zinc-950/70 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors duration-300"
                innerClassName="p-8"
              >
                <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2 relative z-10">
                  <Code2 size={20} className="text-cyan-400" />
                  Engineering Focus
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed mb-4 relative z-10">
                  I am a Full-Stack MERN Developer passionate about building{' '}
                  <span className="text-zinc-200 font-medium">
                    secure, scalable, and user-friendly
                  </span>{' '}
                  applications. I don&apos;t just follow tutorials — I focus on
                  engineering real-world solutions, from designing robust REST APIs and
                  implementing JWT authentication, to crafting responsive frontend
                  experiences with React.
                </p>
                <p className="text-zinc-400 text-base leading-relaxed relative z-10">
                  When I&apos;m not writing code, I&apos;m analyzing system architectures,
                  writing automated failure-path tests, or orchestrating RAG and ML
                  pipelines (Gemini, Pinecone, Scikit-Learn) for practical,
                  production-grade use cases.
                </p>
              </TiltCard>
            </Reveal>

            {/* Currently Exploring — 1 col */}
            <Reveal delay={120}>
              <TiltCard
                as="div"
                maxTilt={0}
                className="h-full bg-zinc-950/70 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors duration-300"
                innerClassName="p-8"
              >
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 relative z-10">
                  <Zap size={18} className="text-cyan-400" />
                  Currently Exploring
                </h3>
                <ul className="space-y-4 relative z-10">
                  {exploring.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-zinc-400 group"
                    >
                      <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform duration-200" />
                      <span className="text-sm font-medium group-hover:text-white transition-colors cursor-default">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SKILLS MATRIX (DUAL MARQUEE) ─────────────────────────── */}
      <section id="skills" className="py-24 bg-zinc-900 px-6 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="02"
            label="Skills"
            title="Technical"
            accent="Arsenal"
            description="Core technologies used across full-stack MERN applications, RAG pipelines, and containerized ML microservices — hover any row to pause."
          />

          <Reveal delay={80}>
            <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-5 hover:border-zinc-700/80 transition-colors duration-300">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest px-1">
                <span>Frontend · Backend · Databases</span>
                <span className="hidden sm:inline text-cyan-500/70">Hover to inspect</span>
              </div>

              <Marquee
                items={marqueeRowOne}
                renderItem={(item, idx, isClone) => (
                  <SkillChip
                    key={`${isClone ? 'c1' : 'r1'}-${item.name}-${idx}`}
                    item={item}
                  />
                )}
              />

              <div className="h-px bg-zinc-800/70" />

              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest px-1">
                <span>AI Integration · ML · Security &amp; CI</span>
              </div>

              <Marquee
                items={marqueeRowTwo}
                reverse
                renderItem={(item, idx, isClone) => (
                  <SkillChip
                    key={`${isClone ? 'c2' : 'r2'}-${item.name}-${idx}`}
                    item={item}
                  />
                )}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default AboutSkills;
