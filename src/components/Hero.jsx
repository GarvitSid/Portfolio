import { Github, Linkedin, ArrowDown, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-zinc-950 flex flex-col justify-center items-center px-6 relative overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-4xl text-center z-10 animate-slide-up">

        {/* Intro tag */}
        <p className="text-cyan-400 font-mono text-sm md:text-base tracking-widest mb-5 uppercase">
          &gt; Hello, World — my name is
        </p>

        {/* Gradient Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
            Garvit Singh.
          </span>
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-4xl font-bold text-zinc-400 mb-6">
          Full-Stack <span className="text-cyan-400">MERN</span> Developer.
        </h2>

        {/* Sub-headline */}
        <p className="text-base md:text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Engineering secure backend architectures, robust REST APIs, and modern AI
          integrations — turning complex problems into clean, production-ready code.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <a
            href="https://github.com/GarvitSid"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-github-link"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium"
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
            className="flex items-center gap-2 text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            id="hero-view-projects-btn"
            className="px-8 py-3.5 rounded-md bg-cyan-500 text-zinc-950 font-bold hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            View My Projects
          </a>
          <a
            href="/resume/Garvit_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-resume-btn"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-md border border-zinc-700 text-zinc-300 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
          >
            <FileText size={16} />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 animate-bounce">
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
};

export default Hero;
