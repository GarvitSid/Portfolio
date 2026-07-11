import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-800/60 px-6 py-14">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
          Garvit<span className="text-cyan-400">.dev</span>
        </a>

        {/* Sign-off */}
        <p className="text-zinc-400 text-base text-center max-w-md leading-relaxed">
          Open to full-stack developer roles and internship opportunities.
          Let&apos;s build something great together.
        </p>

        {/* Contact links */}
        <div className="flex items-center gap-5">
          <a
            href="mailto:garvitsingh.connect@gmail.com"
            id="footer-email-link"
            aria-label="Send Email"
            className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors duration-200"
          >
            <Mail size={16} />
            garvitsingh.connect@gmail.com
          </a>
        </div>

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
              className="p-2.5 text-zinc-500 hover:text-cyan-400 border border-zinc-800 hover:border-cyan-400/40 rounded-lg transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800/60" />

        {/* Copyright */}
        <p className="text-xs text-zinc-600 font-mono flex items-center gap-1.5">
          © 2026 Garvit Singh. Built with React &amp; Tailwind CSS.
          <Heart size={11} className="text-cyan-500 fill-cyan-500" />
        </p>

      </div>
    </footer>
  );
};

export default Footer;
