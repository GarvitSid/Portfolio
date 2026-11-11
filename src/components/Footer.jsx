import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Heart, Copy, Check } from 'lucide-react';
import Reveal from './ui/Reveal';

const EMAIL = 'garvitsingh.connect@gmail.com';

const Footer = () => {
  const magneticRef = useRef(null);
  const [copied, setCopied] = useState(false);

  // Subtle magnetic pull on fine pointers
  useEffect(() => {
    const node = magneticRef.current;
    if (!node || typeof window === 'undefined') return undefined;

    const isFine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFine || reduced) return undefined;

    let rafId = null;

    const handleMove = (e) => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!magneticRef.current) return;
        const rect = magneticRef.current.getBoundingClientRect();
        const dx = ((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * 8;
        const dy = ((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * 5;
        magneticRef.current.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
      });
    };

    const handleLeave = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (magneticRef.current) {
        magneticRef.current.style.transform = 'translate3d(0, 0, 0)';
      }
    };

    node.addEventListener('pointermove', handleMove, { passive: true });
    node.addEventListener('pointerleave', handleLeave, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      node.removeEventListener('pointermove', handleMove);
      node.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2400);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      // Fallback for restricted clipboard contexts
      const textarea = document.createElement('textarea');
      textarea.value = EMAIL;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
    }
  };

  return (
    <footer
      id="contact"
      className="relative bg-zinc-950 border-t border-zinc-800/60 px-6 py-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        {/* Large CTA Headline */}
        <Reveal className="text-center">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-[0.22em] mb-3">
            05 / Contact
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-zinc-400 bg-[length:200%_auto] animate-gradient-shift">
              Let&apos;s build something.
            </span>
          </h2>
          <p className="text-zinc-400 text-base text-center max-w-md mx-auto leading-relaxed">
            Open to full-stack developer roles and internship opportunities.
            Reach out directly or copy my email below.
          </p>
        </Reveal>

        {/* Primary magnetic email button + copy action */}
        <Reveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              ref={magneticRef}
              href={`mailto:${EMAIL}`}
              id="footer-email-link"
              aria-label="Send Email"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-cyan-500 text-zinc-950 font-bold text-sm hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-[transform,background-color,box-shadow] duration-200 will-change-transform"
            >
              <Mail size={16} />
              {EMAIL}
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              id="footer-copy-email"
              aria-label="Copy email address"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-900/70 text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors duration-200 text-sm font-mono"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={15} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </Reveal>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {[
            {
              href: 'https://github.com/GarvitSid',
              icon: <Github size={18} />,
              label: 'GitHub',
              id: 'footer-github',
            },
            {
              href: 'https://linkedin.com/in/garvit-singh-22605a246',
              icon: <Linkedin size={18} />,
              label: 'LinkedIn',
              id: 'footer-linkedin',
            },
          ].map(({ href, icon, label, id }) => (
            <a
              key={id}
              href={href}
              id={id}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 text-zinc-400 hover:text-cyan-400 border border-zinc-800 hover:border-cyan-400/40 rounded-lg transition-[color,border-color,transform] duration-200 hover:-translate-y-0.5"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800/60" />

        {/* Copyright */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <a
            href="#"
            className="text-base font-sans font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
          >
            Garvit<span className="text-cyan-400">.dev</span>
          </a>
          <p className="flex items-center gap-1.5">
            © 2026 Garvit Singh. Built with React &amp; Tailwind CSS.
            <Heart size={11} className="text-cyan-500 fill-cyan-500" />
          </p>
        </div>
      </div>

      {/* Accessible copy toast */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-[90] pointer-events-none transition-[transform,opacity] duration-300 ease-out ${
          copied
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3'
        }`}
      >
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-emerald-500/40 text-zinc-100 text-xs font-mono shadow-xl">
          <Check size={14} className="text-emerald-400" />
          Email copied to clipboard
        </div>
      </div>
    </footer>
  );
};

export default Footer;
