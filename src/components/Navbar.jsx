import { useEffect, useRef, useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { id: 'about', href: '#about', label: 'About' },
  { id: 'skills', href: '#skills', label: 'Skills' },
  { id: 'projects', href: '#projects', label: 'Projects' },
  { id: 'journey', href: '#journey', label: 'Journey' },
];

const sectionIds = navLinks.map((link) => link.id);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [supportsScrollTimeline] = useState(() =>
    typeof CSS !== 'undefined' && CSS.supports?.('animation-timeline', 'scroll()')
  );
  const progressRef = useRef(null);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    let rafId = null;

    const updateOnScroll = () => {
      rafId = null;
      const y = window.scrollY;
      setScrolled(y > 40);

      if (!supportsScrollTimeline && progressRef.current) {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(Math.max(y / docHeight, 0), 1) : 0;
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateOnScroll);
      }
    };

    updateOnScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
    };
  }, [supportsScrollTimeline]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-[background-color,border-color,box-shadow] duration-300 ${scrolled
        ? 'bg-zinc-950/90 border-zinc-800/80 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
        : 'bg-zinc-950/70 border-zinc-800/40'
        }`}
    >
      {/* Top 2px scroll progress indicator (GPU scaleX only) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[2px] bg-zinc-900/60 overflow-hidden"
      >
        <div
          ref={progressRef}
          className={`h-full w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 origin-left ${supportsScrollTimeline ? 'scroll-progress-css' : ''
            }`}
          style={supportsScrollTimeline ? undefined : { transform: 'scaleX(0)' }}
        />
      </div>

      <div
        className={`max-w-6xl mx-auto px-6 flex justify-between items-center transition-[padding] duration-300 ${scrolled ? 'py-3' : 'py-4'
          }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
        >
          Garvit<span className="text-cyan-400">.dev</span>
        </a>

        {/* Desktop Nav Links with Scrollspy */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`relative py-1 transition-colors duration-200 group ${isActive ? 'text-cyan-400' : 'text-zinc-400 hover:text-cyan-400'
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 w-full h-0.5 rounded-full bg-cyan-400 origin-left transition-transform duration-300 ${isActive
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                />
              </a>
            );
          })}
        </div>

        {/* Resume Button */}
        <a
          href="/resume/Garvit_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          id="navbar-resume-btn"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-cyan-400 border border-cyan-400/30 rounded-md hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-[background-color,border-color,color] duration-200"
        >
          <FileText size={15} />
          Resume
        </a>

        {/* Mobile Hamburger */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown — animated grid collapse + staggered links */}
      <div
        id="mobile-nav-drawer"
        aria-hidden={!mobileOpen}
        className={`md:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-out ${mobileOpen
          ? 'grid-rows-[1fr] opacity-100 border-t border-zinc-800/50'
          : 'grid-rows-[0fr] opacity-0 pointer-events-none'
          }`}
      >
        <div className="overflow-hidden bg-zinc-950/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link, index) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  tabIndex={mobileOpen ? 0 : -1}
                  onClick={() => setMobileOpen(false)}
                  style={{ transitionDelay: mobileOpen ? `${index * 55}ms` : '0ms' }}
                  className={`font-medium py-1.5 transition-[transform,opacity,color] duration-300 ${mobileOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-3 opacity-0'
                    } ${isActive
                      ? 'text-cyan-400'
                      : 'text-zinc-300 hover:text-cyan-400'
                    }`}
                >
                  <span className="font-mono text-xs text-cyan-500/70 mr-2">
                    0{index + 1}.
                  </span>
                  {link.label}
                </a>
              );
            })}
            <a
              href="/resume/Garvit_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={mobileOpen ? 0 : -1}
              style={{
                transitionDelay: mobileOpen ? `${navLinks.length * 55}ms` : '0ms',
              }}
              className={`mt-2 inline-flex items-center gap-2 text-cyan-400 font-semibold border border-cyan-400/30 rounded-md px-4 py-2 w-fit hover:bg-cyan-400/10 transition-[transform,opacity,background-color] duration-300 ${mobileOpen
                ? 'translate-x-0 opacity-100'
                : '-translate-x-3 opacity-0'
                }`}
            >
              <FileText size={15} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
