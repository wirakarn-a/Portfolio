import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="relative w-full bg-[#f5f0eb] dark:bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-handwriting text-2xl text-zinc-500 dark:text-zinc-400">academic background</span>
            <div className="flex-1 h-[2px] bg-black dark:bg-white" />
          </div>
          <h2 className="font-sans font-black text-5xl sm:text-6xl text-black dark:text-white uppercase tracking-tight">
            EDUCATION
          </h2>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`
                editorial-border rounded-2xl p-6 sm:p-8 card-lift relative overflow-hidden
                ${index === 0 ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white dark:bg-zinc-900 text-black dark:text-white'}
              `}
            >
              {/* Decorative number */}
              <div className={`absolute top-4 right-6 font-sans font-black text-8xl leading-none ${index === 0 ? 'text-zinc-800 dark:text-zinc-200' : 'text-zinc-100 dark:text-zinc-800'}`}>
                0{index + 1}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Badge */}
                <span className={`
                  inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-full border-2 mb-4
                  ${index === 0
                    ? 'bg-white text-black border-white dark:bg-black dark:text-white dark:border-black'
                    : 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                  }
                `}>
                  <GraduationCap className="w-3 h-3 inline mr-1" />
                  {edu.badge}
                </span>

                <h3 className="font-sans font-black text-xl sm:text-2xl uppercase leading-tight mb-2">
                  {edu.degree}
                </h3>

                <p className={`font-serif italic text-base mb-3 ${index === 0 ? 'text-zinc-300 dark:text-zinc-600' : 'text-zinc-500 dark:text-zinc-400'}`}>
                  {edu.institution}
                </p>

                <div className="flex items-center gap-4 text-xs font-mono font-bold mb-4 pb-4 border-b border-dashed border-current/20">
                  <span className={`
                    px-3 py-1 rounded-full border
                    ${index === 0 ? 'border-zinc-500 dark:border-zinc-400' : 'border-black dark:border-white'}
                  `}>
                    🗓 {edu.period}
                  </span>
                  <span className={`
                    px-3 py-1 rounded-full border
                    ${index === 0 ? 'border-zinc-500 dark:border-zinc-400' : 'border-black dark:border-white'}
                  `}>
                    ⭐ {edu.gpa}
                  </span>
                </div>

                <p className={`text-sm leading-relaxed ${index === 0 ? 'text-zinc-300 dark:text-zinc-600' : 'text-zinc-600 dark:text-zinc-400'}`}>
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
