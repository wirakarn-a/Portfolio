import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Palette, Wrench, HeartHandshake } from 'lucide-react';
import { skills } from '../data/portfolioData';

const categoryTabs = [
  { id: 'frontend', label: 'Frontend & 3D', icon: Code2 },
  { id: 'backend', label: 'Backend & Data', icon: Server },
  { id: 'creative', label: 'UI/UX & Creative', icon: Palette },
  { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
  { id: 'soft', label: 'Soft Skills & Leadership', icon: HeartHandshake },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section id="skills" className="relative w-full bg-black dark:bg-white py-20 px-4 text-white dark:text-black">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-handwriting text-2xl text-zinc-400 dark:text-zinc-500">let's dive in</span>
            <div className="flex-1 h-[2px] bg-white dark:bg-black" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-sans font-black text-5xl sm:text-6xl uppercase tracking-tight">
              NICHES &<br />SERVICES
            </h2>
            {/* Content that performs pill */}
            <div className="flex items-center gap-3">
              <span className="font-sans font-black text-3xl sm:text-4xl">CONTENT</span>
              <span className="font-sans font-black text-3xl sm:text-4xl">THAT</span>
              <span className="font-serif italic text-3xl sm:text-4xl">Performs</span>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10"
        >
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`
                  flex items-center gap-2.5 px-5 py-3 rounded-full border-2 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer shadow-sm
                  ${isActive
                    ? 'bg-white text-black border-white dark:bg-black dark:text-white dark:border-black shadow-md scale-105'
                    : 'bg-zinc-900/80 dark:bg-zinc-100/80 text-zinc-400 dark:text-zinc-600 border-zinc-700 dark:border-zinc-300 hover:border-white dark:hover:border-black hover:text-white dark:hover:text-black'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-zinc-800 dark:bg-zinc-200 text-zinc-400 dark:text-zinc-600'}`}>
                  {skills[tab.id]?.length || 0}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Active skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills[activeCategory]?.map((skill) => (
            <div
              key={skill.name}
              className="bg-zinc-900 dark:bg-zinc-100 border border-zinc-700 dark:border-zinc-300 rounded-2xl p-5 card-lift group flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 border border-zinc-600 dark:border-zinc-400"
                  style={{ backgroundColor: skill.color + '20' }}
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: skill.color }} />
                </div>
                <h4 className="font-sans font-bold text-sm sm:text-base text-white dark:text-black leading-tight mb-2">
                  {skill.name}
                </h4>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-zinc-800 dark:border-zinc-200">
                <span className="text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">
                  PROFICIENCY
                </span>
                <span className="text-[10px] font-mono font-black text-zinc-300 dark:text-zinc-700 uppercase">
                  {skill.level >= 90 ? 'EXPERT' : skill.level >= 85 ? 'ADVANCED' : 'PROFICIENT'}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
