import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, ArrowDown, FileText } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { usePointerGlow } from '../hooks/usePointerGlow';
import StatCounter from './ui/StatCounter';

const roleWords = ['MERN', 'AI-Integrated', 'Secure'];

const heroStats = [
  { value: 4, suffix: '', decimals: 0, label: 'Full-Stack Projects' },
  { value: 45, suffix: '', decimals: 0, label: 'Backend CI Tests' },
  { value: 99.55, suffix: '%', decimals: 2, label: 'ML Model Accuracy' },
];

const Hero = () => {
  const [viewRef, inView] = useInView({ threshold: 0, rootMargin: '100px', once: false });
  const pointerRef = usePointerGlow();
  const orbPrimaryRef = useRef(null);
  const orbSecondaryRef = useRef(null);

  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const [statsReady, setStatsReady] = useState(false);

  // Merge refs on the hero section
  const setHeroRef = (node) => {
    viewRef.current = node;
    pointerRef.current = node;
  };

  // Trigger hero stat count-ups in sync with the 1.6s intro reveal
  useEffect(() => {
    const timer = setTimeout(() => setStatsReady(true), 1550);
    return () => clearTimeout(timer);
  }, []);

  // Rotate role keyword cleanly using only opacity + transform
  useEffect(() => {
    if (!inView) return undefined;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    let swapTimer;
    const interval = setInterval(() => {
      setRoleVisible(false);
      swapTimer = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roleWords.length);
        setRoleVisible(true);
      }, 220);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(swapTimer);
    };
  }, [inView]);

  // Subtle GPU parallax on ambient glow orbs while scrolling
  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    let rafId = null;

    const updateParallax = () => {
      rafId = null;
      const y = window.scrollY;
      if (y > window.innerHeight * 1.4) return;
      if (orbPrimaryRef.current) {
        orbPrimaryRef.current.style.transform = `translate3d(0, ${(y * 0.18).toFixed(1)}px, 0)`;
      }
      if (orbSecondaryRef.current) {
        orbSecondaryRef.current.style.transform = `translate3d(0, ${(y * -0.12).toFixed(1)}px, 0)`;
      }
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section
      ref={setHeroRef}
      id="hero"
      className={`min-h-screen bg-zinc-950 flex flex-col justify-center items-center px-6 pt-24 pb-20 relative overflow-hidden ${
        inView ? '' : 'anim-paused'
      }`}
    >
      {/* Ambient glow orbs with parallax wrappers & drift */}
      <div
        ref={orbPrimaryRef}
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform"
      >
        <div className="w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full animate-drift" />
      </div>
      <div
        ref={orbSecondaryRef}
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 pointer-events-none will-change-transform"
      >
        <div className="w-72 h-72 bg-sky-500/10 blur-[110px] rounded-full animate-drift-slow" />
      </div>

      {/* Base grid texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Pointer-following grid spotlight (desktop fine pointers only) */}
      <div
        aria-hidden="true"
        className="pointer-fine-only absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: 'calc(var(--pointer-active, 0) * 0.16)',
          backgroundImage: `linear-gradient(rgba(34,211,238,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          WebkitMaskImage:
            'radial-gradient(280px circle at var(--pointer-x, 50%) var(--pointer-y, 40%), black, transparent 75%)',
          maskImage:
            'radial-gradient(280px circle at var(--pointer-x, 50%) var(--pointer-y, 40%), black, transparent 75%)',
        }}
      />

      <div className="max-w-4xl text-center z-10">
        {/* Availability badge (0.05s) */}
        <div
          style={{ animationDelay: '0.05s' }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 mb-6 animate-slide-up"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping2" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Open to full-stack &amp; AI roles
        </div>

        {/* Intro tag typed with steps() and blinking caret (0.2s) */}
        <div className="mb-5 flex justify-center">
          <p className="inline-flex items-center text-cyan-400 font-mono text-xs sm:text-sm md:text-base tracking-widest uppercase">
            <span className="hero-type inline-block whitespace-nowrap">
              &gt; Hello, World — my name is
            </span>
            <span
              aria-hidden="true"
              className="ml-1 inline-block w-2 h-4 md:h-5 bg-cyan-400 animate-blink"
            />
          </p>
        </div>

        {/* Gradient Name with shifting gradient (0.5s) */}
        <h1
          style={{ animationDelay: '0.5s' }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 animate-slide-up"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-zinc-400 bg-[length:200%_auto] animate-gradient-shift">
            Garvit Singh.
          </span>
        </h1>

        {/* Role with word rotator (0.9s) */}
        <h2
          style={{ animationDelay: '0.9s' }}
          className="text-2xl md:text-4xl font-bold text-zinc-400 mb-6 animate-slide-up"
        >
          Full-Stack{' '}
          <span
            className={`inline-block text-cyan-400 transition-[transform,opacity] duration-200 ease-out ${
              roleVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-2'
            }`}
          >
            {roleWords[roleIndex]}
          </span>{' '}
          Developer.
        </h2>

        {/* Sub-headline (1.2s) */}
        <p
          style={{ animationDelay: '1.2s' }}
          className="text-base md:text-lg text-zinc-400 mb-9 max-w-2xl mx-auto leading-relaxed animate-slide-up"
        >
          Engineering secure backend architectures, robust REST APIs, and modern AI
          integrations — turning complex problems into clean, production-ready code.
        </p>

        {/* Social links + CTAs (1.45s) */}
        <div
          style={{ animationDelay: '1.45s' }}
          className="animate-slide-up"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="https://github.com/GarvitSid"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-link"
              aria-label="GitHub Profile"
              className="flex items-center gap-2 text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-4 py-2 rounded-md transition-[color,border-color,transform] duration-200 hover:-translate-y-0.5 text-sm font-medium"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/garvit-singh-22605a246"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-link"
              aria-label="LinkedIn Profile"
              className="flex items-center gap-2 text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-4 py-2 rounded-md transition-[color,border-color,transform] duration-200 hover:-translate-y-0.5 text-sm font-medium"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              id="hero-view-projects-btn"
              className="px-8 py-3.5 rounded-md bg-cyan-500 text-zinc-950 font-bold hover:bg-cyan-400 transition-[background-color,box-shadow,transform] duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              View My Projects
            </a>
            <a
              href="/resume/Garvit_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-resume-btn"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-md border border-zinc-700 text-zinc-300 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-[color,border-color,transform] duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <FileText size={16} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Stat strip under CTAs (1.65s) */}
        <div
          style={{ animationDelay: '1.65s' }}
          className="mt-12 pt-8 border-t border-zinc-800/70 grid grid-cols-3 gap-4 max-w-xl mx-auto animate-slide-up"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-white font-mono">
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  enabled={statsReady}
                  duration={1200}
                />
              </p>
              <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator (fixed aria-label -> About section) */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-500 animate-bounce hover:text-cyan-400 transition-colors cursor-pointer"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
};

export default Hero;
