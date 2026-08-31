import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Palette, Wrench } from 'lucide-react';
import { skills } from '../data/portfolioData';

const categoryTabs = [
  { id: 'frontend', label: 'Frontend & 3D', icon: Code2 },
  { id: 'backend', label: 'Backend & Data', icon: Server },
  { id: 'creative', label: 'UI/UX & Creative', icon: Palette },
  { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
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

        {/* Two-column layout: Left = categories, Right = stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Left: Category tabs as editorial list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`
                    w-full text-left flex items-center gap-4 px-6 py-4 rounded-xl border-2 font-sans font-bold text-base transition-all cursor-pointer
                    ${isActive
                      ? 'bg-white text-black border-white dark:bg-black dark:text-white dark:border-black shadow-lg scale-[1.02]'
                      : 'bg-transparent text-zinc-400 dark:text-zinc-500 border-zinc-700 dark:border-zinc-300 hover:border-white dark:hover:border-black hover:text-white dark:hover:text-black'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="tracking-wider uppercase">{tab.label}</span>
                  <span className="ml-auto text-xs font-mono opacity-50">{skills[tab.id].length} skills</span>
                </button>
              );
            })}
          </motion.div>

          {/* Right: Stats / Analytics cards (Image 2 style charts area) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-zinc-900 dark:bg-zinc-100 border-2 border-zinc-700 dark:border-zinc-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <span className="font-sans font-black text-4xl text-white dark:text-black">75K</span>
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mt-1">Lines of Code</span>
            </div>
            <div className="bg-zinc-900 dark:bg-zinc-100 border-2 border-zinc-700 dark:border-zinc-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <span className="font-sans font-black text-4xl text-white dark:text-black">25K</span>
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mt-1">Contributions</span>
            </div>
            <div className="bg-zinc-900 dark:bg-zinc-100 border-2 border-zinc-700 dark:border-zinc-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <span className="font-sans font-black text-4xl text-white dark:text-black">150K</span>
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mt-1">Page Views</span>
            </div>
            <div className="bg-zinc-900 dark:bg-zinc-100 border-2 border-zinc-700 dark:border-zinc-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <span className="font-sans font-black text-4xl text-white dark:text-black">85%</span>
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mt-1">Client Satisfaction</span>
            </div>
          </motion.div>
        </div>

        {/* Active skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills[activeCategory].map((skill) => (
            <div
              key={skill.name}
              className="bg-zinc-900 dark:bg-zinc-100 border border-zinc-700 dark:border-zinc-300 rounded-xl p-5 card-lift group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 border border-zinc-600 dark:border-zinc-400"
                style={{ backgroundColor: skill.color + '20' }}
              >
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: skill.color }} />
              </div>
              <h4 className="font-sans font-bold text-sm text-white dark:text-black leading-tight mb-1">
                {skill.name}
              </h4>
              <span className="text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-500 uppercase">
                {skill.level >= 90 ? 'EXPERT' : skill.level >= 85 ? 'ADVANCED' : 'PROFICIENT'}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
