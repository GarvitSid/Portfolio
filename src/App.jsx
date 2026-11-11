import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import { projectsData } from './data/projectsData';

function findProjectFromHash() {
  if (typeof window === 'undefined') return null;
  const slug = window.location.hash.replace(/^#/, '');
  if (!slug) return null;
  return projectsData.find((p) => p.slug === slug) ?? null;
}

function App() {
  const [activeProject, setActiveProject] = useState(findProjectFromHash);
  const triggerElRef = useRef(null);
  const cursorGlowRef = useRef(null);

  // Sync URL hash to deep-link case studies cleanly
  useEffect(() => {
    const onHashChange = () => {
      setActiveProject(findProjectFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Subtle global cursor ambient glow on fine pointers (desktop only)
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const isFine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFine || reduced) return undefined;

    let rafId = null;
    let lastEvent = null;

    const updateGlow = () => {
      rafId = null;
      if (!lastEvent || !cursorGlowRef.current) return;
      cursorGlowRef.current.style.setProperty('--cursor-x', `${lastEvent.clientX}px`);
      cursorGlowRef.current.style.setProperty('--cursor-y', `${lastEvent.clientY}px`);
      cursorGlowRef.current.style.opacity = '1';
    };

    const handleMove = (e) => {
      lastEvent = e;
      if (rafId === null) {
        rafId = requestAnimationFrame(updateGlow);
      }
    };

    const handleLeave = () => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const handleOpenCase = useCallback((project, triggerElement) => {
    if (triggerElement) {
      triggerElRef.current = triggerElement;
    } else {
      triggerElRef.current = document.querySelector(
        `[data-project-slug="${project.slug}"]`
      );
    }
    setActiveProject(project);
    if (project.slug && window.location.hash !== `#${project.slug}`) {
      window.history.replaceState(null, '', `#${project.slug}`);
    }
  }, []);

  const handleSelectProject = useCallback((project) => {
    setActiveProject(project);
    if (project?.slug) {
      window.history.replaceState(null, '', `#${project.slug}`);
    }
  }, []);

  const handleCloseCase = useCallback(() => {
    setActiveProject(null);
    if (findProjectFromHash()) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }
    requestAnimationFrame(() => {
      triggerElRef.current?.focus();
    });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-zinc-950 text-zinc-300 relative">
        {/* Global atmosphere: subtle noise overlay & desktop cursor glow */}
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[60] pointer-events-none opacity-[0.025] bg-noise"
        />
        <div
          ref={cursorGlowRef}
          aria-hidden="true"
          className="pointer-fine-only fixed inset-0 z-[55] pointer-events-none opacity-0 transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(460px circle at var(--cursor-x, -999px) var(--cursor-y, -999px), rgba(34, 211, 238, 0.045), transparent 65%)',
          }}
        />

        <Navbar />

        <main>
          <Hero />
          <AboutSkills />
          <Projects onOpenCase={handleOpenCase} />
          <Journey />
        </main>

        <Footer />

        {/* Case Study Modal with AnimatePresence enter/exit */}
        <AnimatePresence>
          {activeProject && (
            <CaseStudyModal
              key="case-study-modal"
              project={activeProject}
              projects={projectsData}
              onSelectProject={handleSelectProject}
              onClose={handleCloseCase}
            />
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}

export default App;
