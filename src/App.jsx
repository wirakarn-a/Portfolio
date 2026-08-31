import React, { useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import LandingCover from './components/LandingCover';
import Hero3D from './components/Hero3D';
import Experience from './components/Experience';
import AdditionalExperience from './components/AdditionalExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const mainRef = useRef(null);

  return (
    <ThemeProvider>
      <div
        ref={mainRef}
        className="min-h-screen bg-[#f5f0eb] text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300 overflow-x-hidden"
      >
        {/* Navbar - fixed at top */}
        <Navbar />

        {/* SECTION 1: Full-screen Landing (Image 1 style) */}
        <LandingCover />

        {/* SECTION 2: Hero / About Me (Image 2 top section) */}
        <Hero3D />

        {/* SECTION 3: Experience */}
        <Experience />

        {/* SECTION 3.5: Additional Experience — Photo Gallery */}
        <AdditionalExperience />

        {/* SECTION 4: Projects */}
        <Projects />

        {/* SECTION 5: Education */}
        <Education />

        {/* SECTION 6: Skills / Services */}
        <Skills />

        {/* SECTION 7: Languages */}
        <Languages />

        {/* SECTION 7: Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
