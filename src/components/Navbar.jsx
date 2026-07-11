import { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#journey', label: 'Journey' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800/50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
          Garvit<span className="text-cyan-400">.dev</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-400 transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="/resume/Garvit_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          id="navbar-resume-btn"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-cyan-400 border border-cyan-400/30 rounded-md hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-200"
        >
          <FileText size={15} />
          Resume
        </a>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800/50 px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-zinc-300 hover:text-cyan-400 transition-colors duration-200 font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume/Garvit_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 font-semibold border border-cyan-400/30 rounded-md px-4 py-2 w-fit hover:bg-cyan-400/10 transition-all"
          >
            <FileText size={15} />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
