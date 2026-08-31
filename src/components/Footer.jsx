import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-4 bg-black dark:bg-white border-t border-zinc-800 dark:border-zinc-200 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Name */}
        <div className="text-center sm:text-left">
          <div className="font-sans font-black text-lg text-white dark:text-black tracking-wider uppercase">
            {personalInfo.name}
          </div>
          <p className="font-serif italic text-sm text-zinc-400 dark:text-zinc-600 mt-0.5">
            Software Engineer & Creative Developer
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-500 text-center tracking-wider uppercase">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>

        {/* Right: Scroll To Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-3 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black rounded-full hover:scale-110 transition-transform"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
