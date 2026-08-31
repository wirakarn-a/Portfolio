import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-white dark:bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-handwriting text-2xl text-zinc-500 dark:text-zinc-400">work history</span>
            <div className="flex-1 h-[2px] bg-black dark:bg-white" />
          </div>
          <h2 className="font-sans font-black text-5xl sm:text-6xl text-black dark:text-white uppercase tracking-tight">
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Experience Cards — editorial grid style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                editorial-border rounded-2xl p-6 sm:p-8 card-lift
                ${index === 0 ? 'bg-black text-white dark:bg-white dark:text-black md:col-span-2' : 'bg-white dark:bg-zinc-900 text-black dark:text-white'}
              `}
            >
              {/* Top row: Badge + Period */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className={`
                  inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-full border-2
                  ${index === 0
                    ? 'bg-white text-black border-white dark:bg-black dark:text-white dark:border-black'
                    : 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                  }
                `}>
                  {exp.type}
                </span>
                <div className="flex items-center gap-3 text-xs font-mono font-bold opacity-60">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Role & Company */}
              <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase leading-tight mb-1">
                {exp.role}
              </h3>
              <p className={`font-serif italic text-lg mb-4 ${index === 0 ? 'text-zinc-300 dark:text-zinc-600' : 'text-zinc-500 dark:text-zinc-400'}`}>
                {exp.company}
              </p>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-5 ${index === 0 ? 'text-zinc-300 dark:text-zinc-600' : 'text-zinc-600 dark:text-zinc-400'}`}>
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-5">
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${index === 0 ? 'text-zinc-400 dark:text-zinc-500' : 'text-black dark:text-white'}`} />
                    <span className={index === 0 ? 'text-zinc-300 dark:text-zinc-600' : 'text-zinc-700 dark:text-zinc-300'}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-dashed border-current/20">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`
                      px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full border
                      ${index === 0
                        ? 'border-zinc-500 text-zinc-300 dark:border-zinc-400 dark:text-zinc-600'
                        : 'border-black dark:border-white text-black dark:text-white'
                      }
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
