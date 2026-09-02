import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Hero3D = () => {
  return (
    <section id="hero" className="relative w-full bg-[#f5f0eb] dark:bg-[#0a0a0a] py-16 sm:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top: Simple text nav breadcrumb */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-12 text-xs font-sans font-bold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400">
          <a href="#hero" className="hover:text-black dark:hover:text-white transition-colors">ABOUT ME</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">EXPERIENCE</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">PROJECTS</a>
          <a href="#education" className="hover:text-black dark:hover:text-white transition-colors">EDUCATION</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">SKILLS</a>
          <a href="#languages" className="hover:text-black dark:hover:text-white transition-colors">LANGUAGES</a>
          <a href="#certificates" className="hover:text-black dark:hover:text-white transition-colors">CERTIFICATES</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">CONTACT</a>
        </div>

        {/* Main Hero Grid: Photo left + Name/CTA right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: Hero Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Right: Name + Tagline + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-start gap-4"
          >
            {/* Large editorial name */}
            <div>
              <h2 className="font-serif italic font-bold text-5xl sm:text-7xl text-black dark:text-white leading-none tracking-tight">
                {personalInfo.name.split(' ')[0]}
              </h2>
              <h2 className="font-handwriting text-4xl sm:text-6xl text-black dark:text-white leading-none -mt-1">
                {personalInfo.name.split(' ').slice(1).join(' ')}
              </h2>
              <p className="font-sans font-bold text-sm sm:text-base text-zinc-500 dark:text-zinc-400 tracking-[0.15em] uppercase mt-2">
                UGC PORTFOLIO
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-black text-white dark:bg-white dark:text-black font-sans font-black text-sm tracking-wider rounded-full border-2 border-black dark:border-white hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md"
            >
              WORK WITH ME :-)
            </a>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 mt-2">
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:opacity-60 transition-opacity">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:opacity-60 transition-opacity">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:opacity-60 transition-opacity">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:opacity-60 transition-opacity">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip: "HEY, I'M ..." intro + stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch"
        >
          {/* About text card */}
          <div className="md:col-span-5 bg-white dark:bg-zinc-900 editorial-border rounded-2xl p-6 flex flex-col justify-center card-lift">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-handwriting text-2xl sm:text-3xl text-black dark:text-white">welcome</span>
              <div className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-black uppercase tracking-wider rounded-full">
                HERE'S WHY YOU NEED ME
              </div>
            </div>
            <h3 className="font-sans font-black text-2xl sm:text-3xl text-black dark:text-white uppercase leading-tight mb-3">
              HEY, I'M {personalInfo.name.split(' ')[0].toUpperCase()}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Stats cards */}
          <div className="md:col-span-4 grid grid-cols-3 gap-3">
            <div className="bg-white dark:bg-zinc-900 editorial-border rounded-2xl p-4 flex flex-col items-center justify-center text-center card-lift">
              <span className="font-sans font-black text-3xl text-black dark:text-white">10+</span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-1">Projects</span>
            </div>
            <div className="bg-white dark:bg-zinc-900 editorial-border rounded-2xl p-4 flex flex-col items-center justify-center text-center card-lift">
              <span className="font-sans font-black text-3xl text-black dark:text-white">3yrs+</span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-1">Experience</span>
            </div>
            <div className="bg-white dark:bg-zinc-900 editorial-border rounded-2xl p-4 flex flex-col items-center justify-center text-center card-lift">
              <span className="font-sans font-black text-3xl text-black dark:text-white">500+</span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-1">Commits</span>
            </div>
          </div>

          {/* Backed by brands card */}
          <div className="md:col-span-3 bg-black dark:bg-white editorial-border rounded-2xl p-6 flex flex-col items-center justify-center text-center card-lift">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mb-1">BACKED BY</span>
            <span className="font-serif italic font-bold text-3xl text-white dark:text-black">Global</span>
            <span className="font-sans font-black text-xl text-white dark:text-black uppercase tracking-wider">BRANDS</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero3D;
