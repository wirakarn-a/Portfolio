import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, MapPin, Sparkles, ArrowUpRight, 
  Briefcase, Compass, Code2, Layers 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Hero3D = () => {
  return (
    <section id="hero" className="relative w-full bg-[#f5f0eb] dark:bg-[#0a0a0a] py-16 sm:py-24 px-4 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Top: Text nav breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden sm:flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-12 text-xs font-sans font-bold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400"
        >
          <a href="#hero" className="hover:text-black dark:hover:text-white transition-colors">ABOUT ME</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">EXPERIENCE</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">PROJECTS</a>
          <a href="#education" className="hover:text-black dark:hover:text-white transition-colors">EDUCATION</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">SKILLS</a>
          <a href="#languages" className="hover:text-black dark:hover:text-white transition-colors">LANGUAGES</a>
          <a href="#certificates" className="hover:text-black dark:hover:text-white transition-colors">CERTIFICATES</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">CONTACT</a>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-handwriting text-2xl text-zinc-500 dark:text-zinc-400">
              profile & background
            </span>
            <div className="flex-1 h-[2px] bg-black dark:bg-white" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-sans font-black text-5xl sm:text-6xl text-black dark:text-white uppercase tracking-tight">
              ABOUT ME
            </h2>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-black dark:text-white" />
              <span>{personalInfo.location.toUpperCase()}</span>
            </div>
          </div>
        </motion.div>

        {/* Main Grid: Left Portrait Photo + Right Editorial Narrative Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Left: Hero Photo & Identity Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative w-full h-[400px] sm:h-[460px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden editorial-border shadow-xl group bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />

              {/* Status Badge overlay at top */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3.5 py-1.5 bg-black/80 dark:bg-white/90 backdrop-blur-md text-white dark:text-black font-mono font-black text-[10px] tracking-wider uppercase rounded-full border border-white/20 dark:border-black/20 shadow-lg">
                  {personalInfo.status}
                </span>
                <span className="w-8 h-8 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center font-black text-xs shadow-lg">
                  ✦
                </span>
              </div>

              {/* Bottom gradient name tag */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <span className="font-mono text-[10px] tracking-[0.25em] text-pink-400 uppercase font-bold mb-1">
                  ✦ {personalInfo.title}
                </span>
                <h3 className="font-serif italic font-bold text-3xl sm:text-4xl leading-tight">
                  {personalInfo.name.split(' ')[0]}
                </h3>
                <h4 className="font-handwriting text-2xl sm:text-3xl text-zinc-300 leading-none -mt-1">
                  {personalInfo.name.split(' ').slice(1).join(' ')}
                </h4>
              </div>
            </div>
          </motion.div>

          {/* Right: Redesigned Editorial About Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-white dark:bg-zinc-900 editorial-border rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-dashed border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <span className="font-handwriting text-3xl text-black dark:text-white">welcome</span>
                  <div className="px-3.5 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-black uppercase tracking-wider rounded-full">
                    HERE'S WHY YOU NEED ME
                  </div>
                </div>
              </div>

              {/* Main Headline */}
              <h3 className="font-sans font-black text-3xl sm:text-4xl text-black dark:text-white uppercase leading-tight mb-4">
                HEY, I'M <span className="underline decoration-pink-500 decoration-4 underline-offset-4">{personalInfo.name.split(' ')[0].toUpperCase()}</span>
              </h3>

              {/* Bio Narrative */}
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                {personalInfo.bio}
              </p>

              {/* Core Strengths & Focus Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="p-4 rounded-2xl bg-[#f5f0eb]/70 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-sans font-black text-xs uppercase tracking-wider text-black dark:text-white">
                      Operations & Product
                    </h5>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
                      Cross-functional coordination, strategic planning & execution
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f5f0eb]/70 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-sans font-black text-xs uppercase tracking-wider text-black dark:text-white">
                      Full-Stack & UX Engineering
                    </h5>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
                      React, TypeScript, Node.js, modern web design & interactive 3D
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions & Social Row */}
            <div className="pt-6 border-t-2 border-black dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white dark:bg-white dark:text-black font-sans font-black text-xs sm:text-sm tracking-wider uppercase rounded-full border-2 border-black dark:border-white hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  WORK WITH ME :-)
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-transparent text-black dark:text-white font-sans font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full border-2 border-black dark:border-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  EMAIL ME
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a 
                  href={personalInfo.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-110 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a 
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-110 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a 
                  href={personalInfo.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-110 transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero3D;
