import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { id: 'hero', name: 'ABOUT ME' },
  { id: 'experience', name: 'EXPERIENCE' },
  { id: 'projects', name: 'PROJECTS' },
  { id: 'education', name: 'EDUCATION' },
  { id: 'skills', name: 'SKILLS' },
  { id: 'languages', name: 'LANGUAGES' },
  { id: 'contact', name: 'CONTACT' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800'
        : 'bg-transparent'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-sans font-black text-sm text-black dark:text-white tracking-wider uppercase cursor-pointer"
        >
          {personalInfo.name.split(' ')[0]}
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-[11px] font-sans font-bold text-zinc-500 dark:text-zinc-400 tracking-[0.15em] uppercase hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black dark:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-14 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 p-4 space-y-1 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left py-3 px-4 text-sm font-sans font-bold text-black dark:text-white tracking-wider uppercase hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
