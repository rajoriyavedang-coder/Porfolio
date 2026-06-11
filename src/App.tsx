import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import DemoModal from './components/DemoModal';
import { Project } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or default to light mode
    const saved = localStorage.getItem('theme-mode');
    if (saved) return saved === 'dark';
    return false; // Default light-first as requested
  });

  const [resumeOpen, setResumeOpen] = useState(false);
  const [demoProject, setDemoProject] = useState<Project | null>(null);

  // Sync dark class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-mode', 'light');
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 64; // Offset height of the navbar
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenDemo = (project: Project) => {
    setDemoProject(project);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-slate-900 transition-colors duration-300 antialiased overflow-x-hidden selection:bg-blue-500/20 selection:text-blue-600">
      
      {/* Dynamic Navigation */}
      <Navbar />

      {/* Main Single Page Contents */}
      <main className="relative">
        <Hero
          onScrollToSection={scrollToSection}
          onOpenResume={() => setResumeOpen(true)}
        />
        
        <About />

        <Skills />

        <Projects onOpenDemoSimulation={handleOpenDemo} />

        <Certifications />

        <Leadership />

        <Contact />
      </main>

      {/* Polished Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Persistent Modals (Interactions) */}
      <AnimatePresence>
        {resumeOpen && (
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {demoProject && (
          <DemoModal
            isOpen={!!demoProject}
            project={demoProject}
            onClose={() => setDemoProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
