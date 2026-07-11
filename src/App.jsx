import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';

function App() {
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenCase = (project) => setActiveProject(project);
  const handleCloseCase = () => setActiveProject(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      <Navbar />

      <main>
        <Hero />
        <AboutSkills />
        <Projects onOpenCase={handleOpenCase} />
        <Journey />
      </main>

      <Footer />

      {/* Case Study Modal — rendered at the App level so it sits above everything */}
      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={handleCloseCase} />
      )}
    </div>
  );
}

export default App;
