import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MousePointer2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const LandingCover = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 0.15], [0, -120]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <motion.section
      id="landing"
      style={{ opacity: opacityFade }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#f5f0eb] dark:bg-[#0a0a0a]"
    >
      {/* Repeating watermark text rows */}
      <div className="absolute inset-0 flex flex-col justify-start pt-4 pointer-events-none select-none overflow-hidden opacity-60">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="watermark-text whitespace-nowrap">
            {Array(8).fill(`DESIGNS POR AQUI CRIADOS AQUI `).join('')}
          </div>
        ))}
      </div>

      {/* Center content with parallax */}
      <motion.div
        style={{ y: yParallax }}
        className="relative z-10 flex flex-col items-center gap-8 px-4"
      >
        {/* Dark folder icon with scattered cards inside */}
        <div className="relative w-72 h-52 sm:w-96 sm:h-64">
          {/* Main dark rounded folder */}
          <div className="absolute inset-0 bg-[#1a1a1a] dark:bg-[#1c1c1c] rounded-[2rem] shadow-2xl border border-zinc-700/30" />

          {/* Scattered photo cards inside the folder */}
          <motion.div
            initial={{ rotate: -12, opacity: 0 }}
            animate={{ rotate: -12, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute top-4 left-6 w-32 h-40 sm:w-40 sm:h-48 bg-white rounded-xl shadow-xl overflow-hidden border border-zinc-200 z-10"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              alt="Portfolio Preview 1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ rotate: 8, opacity: 0 }}
            animate={{ rotate: 8, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-2 right-4 w-36 h-44 sm:w-44 sm:h-52 bg-white rounded-xl shadow-xl overflow-hidden border border-zinc-200 z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
              alt="Portfolio Preview 2"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ rotate: -3, opacity: 0 }}
            animate={{ rotate: -3, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-36 sm:w-36 sm:h-44 bg-white rounded-xl shadow-xl overflow-hidden border border-zinc-200 z-30"
          >
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
              alt="Portfolio Preview 3"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Large script typography "Postfólio" style */}
        <div className="text-center mt-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="font-serif italic font-bold text-6xl sm:text-8xl md:text-9xl text-black dark:text-white tracking-tight leading-none"
          >
            Portfolio
          </motion.h1>

          {/* Cursor icon decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="inline-flex items-center gap-1 mt-1"
          >
            <MousePointer2 className="w-8 h-8 text-black dark:text-white" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="font-sans font-black text-xl sm:text-2xl md:text-3xl text-black dark:text-white tracking-[0.25em] uppercase mt-2"
          >
            {personalInfo.title}
          </motion.p>

          {/* Expand icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex items-center justify-end mt-1"
          >
            <svg className="w-6 h-6 text-black dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 mt-6"
        >
          <span className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-black dark:text-white" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LandingCover;
