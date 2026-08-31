import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Briefcase, GraduationCap, Code2, Folder, Mail, Paperclip, Music, Heart } from 'lucide-react';
import Hero3D from './Hero3D';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { personalInfo } from '../data/portfolioData';

const FolderBinder = () => {
  return (
    <div className="w-full min-h-screen pt-20 pb-16 px-2 sm:px-6 md:px-10 max-w-7xl mx-auto space-y-16">
      
      {/* ---------------- SECTION 1: HERO / EDITORIAL LANYARD ID (Image 2 Top Header) ---------------- */}
      <section id="hero" className="relative w-full bg-white dark:bg-zinc-950 border-3 border-black dark:border-pink-400 rounded-[2.5rem] p-4 sm:p-8 shadow-2xl overflow-hidden">
        <Hero3D onNavigate={(tabId) => {
          const el = document.getElementById(tabId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
      </section>


      {/* ---------------- SECTION 2: EXPERIENCE (Image 2 Folder Sheet 1 - BLACK SHEET) ---------------- */}
      <section id="experience" className="relative w-full">
        {/* Folder Tab Header */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-black text-pink-300 border-t-3 border-x-3 border-black rounded-t-2xl font-display font-black text-sm shadow-md">
          <Briefcase className="w-4 h-4 text-pink-400" />
          <span>EXPERIENCE ARCHIVE // 01</span>
        </div>

        {/* Folder Sheet Window (Black Sheet) */}
        <div className="bg-black text-white border-3 border-black rounded-b-3xl rounded-tr-3xl p-4 sm:p-8 shadow-2xl">
          <Experience />
        </div>
      </section>


      {/* ---------------- SECTION 3: EDUCATION (Image 2 Folder Sheet 2 - SOFT PINK SHEET) ---------------- */}
      <section id="education" className="relative w-full">
        {/* Folder Tab Header */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#FCE7F3] text-black border-t-3 border-x-3 border-black rounded-t-2xl font-display font-black text-sm shadow-md">
          <GraduationCap className="w-4 h-4 text-pink-600" />
          <span>EDUCATION & DEGREES // 02</span>
        </div>

        {/* Folder Sheet Window (Soft Pink Sheet) */}
        <div className="bg-[#FCE7F3] text-black border-3 border-black rounded-b-3xl rounded-tr-3xl p-4 sm:p-8 shadow-2xl">
          <Education />
        </div>
      </section>


      {/* ---------------- SECTION 4: SKILLS (Image 2 Folder Sheet 3 - WHITE SHEET) ---------------- */}
      <section id="skills" className="relative w-full">
        <div className="flex items-center justify-between">
          {/* Folder Tab Header */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-t-3 border-x-3 border-black rounded-t-2xl font-display font-black text-sm shadow-md">
            <Code2 className="w-4 h-4 text-pink-500" />
            <span>TECHNICAL SKILLS // 03</span>
          </div>

          {/* Cassette Tape & Binder Clip sticker decor matching Image 2 */}
          <div className="hidden sm:flex items-center gap-3 pr-4">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-black text-white border-2 border-black rounded-lg shadow-sm text-xs font-mono font-bold">
              <Music className="w-4 h-4 text-pink-400 animate-bounce" />
              <span>SKILLS_TAPE.cassette</span>
            </div>
            {/* Black Binder Clip */}
            <div className="w-8 h-8 bg-black rounded-md border border-pink-400 shadow-md flex items-center justify-center text-white text-xs font-bold">
              📎
            </div>
          </div>
        </div>

        {/* Folder Sheet Window (White Sheet) */}
        <div className="bg-white text-black border-3 border-black rounded-b-3xl rounded-tr-3xl p-4 sm:p-8 shadow-2xl">
          <Skills />
        </div>
      </section>


      {/* ---------------- SECTION 5: PROJECTS (Image 2 Folder Sheet 4 - BLACK SHEET) ---------------- */}
      <section id="projects" className="relative w-full">
        <div className="flex items-center justify-between">
          {/* Folder Tab Header */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black text-pink-300 border-t-3 border-x-3 border-black rounded-t-2xl font-display font-black text-sm shadow-md">
            <Folder className="w-4 h-4 text-pink-400" />
            <span>FEATURED PROJECTS // 04</span>
          </div>

          {/* Barcode Sticker Badge matching Image 2 */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white text-black border-2 border-black rounded-lg shadow-sm font-mono text-xs font-bold">
            <span>║▌║█║▌│║▌║▌ WIRAKARN_PROJECTS</span>
          </div>
        </div>

        {/* Folder Sheet Window (Black Sheet) */}
        <div className="bg-black text-white border-3 border-black rounded-b-3xl rounded-tr-3xl p-4 sm:p-8 shadow-2xl">
          <Projects />
        </div>
      </section>


      {/* ---------------- SECTION 6: CONTACT (Image 2 Folder Sheet 5 - SOFT PINK SHEET) ---------------- */}
      <section id="contact" className="relative w-full">
        {/* Folder Tab Header */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#FCE7F3] text-black border-t-3 border-x-3 border-black rounded-t-2xl font-display font-black text-sm shadow-md">
          <Mail className="w-4 h-4 text-pink-600" />
          <span>CONTACT & GET IN TOUCH // 05</span>
        </div>

        {/* Folder Sheet Window (Soft Pink Sheet) */}
        <div className="bg-[#FCE7F3] text-black border-3 border-black rounded-b-3xl rounded-tr-3xl p-4 sm:p-8 shadow-2xl">
          <Contact />
        </div>
      </section>

    </div>
  );
};

export default FolderBinder;
