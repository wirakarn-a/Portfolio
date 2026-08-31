import React from 'react';
import { motion } from 'framer-motion';

const languages = [
  {
    id: 1,
    name: 'THAI',
    nameLocal: 'ภาษาไทย',
    level: 'NATIVE',
    proficiency: 'Native Speaker',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=400&q=80',
    details: [
      { label: 'SPEAKING', value: 'FLUENT' },
      { label: 'READING', value: 'FLUENT' },
      { label: 'WRITING', value: 'FLUENT' },
      { label: 'LISTENING', value: 'FLUENT' },
    ],
    note: 'ภาษาแม่',
  },
  {
    id: 2,
    name: 'ENGLISH',
    nameLocal: 'ภาษาอังกฤษ',
    level: 'PROFESSIONAL',
    proficiency: 'Professional Working',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80',
    details: [
      { label: 'SPEAKING', value: 'ADVANCED' },
      { label: 'READING', value: 'ADVANCED' },
      { label: 'WRITING', value: 'INTERMEDIATE' },
      { label: 'LISTENING', value: 'ADVANCED' },
    ],
    note: 'TOEIC / IELTS Ready',
  },
  {
    id: 3,
    name: 'JAPANESE',
    nameLocal: 'ภาษาญี่ปุ่น',
    level: 'ELEMENTARY',
    proficiency: 'Basic Conversational',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=400&q=80',
    details: [
      { label: 'SPEAKING', value: 'BASIC' },
      { label: 'READING', value: 'BASIC' },
      { label: 'WRITING', value: 'BEGINNER' },
      { label: 'LISTENING', value: 'BASIC' },
    ],
    note: 'Self-study / N5 Level',
  },
];

const Languages = () => {
  return (
    <section id="languages" className="relative w-full bg-[#f5f0eb] dark:bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-handwriting text-2xl text-zinc-500 dark:text-zinc-400">communication</span>
            <div className="flex-1 h-[2px] bg-black dark:bg-white" />
          </div>
          <h2 className="font-sans font-black text-5xl sm:text-6xl text-black dark:text-white uppercase tracking-tight">
            LANGUAGES
          </h2>
        </motion.div>

        {/* Receipt Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.id}
              initial={{ opacity: 0, y: 30, rotate: index === 0 ? -2 : index === 2 ? 2 : 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: index === 0 ? -2 : index === 2 ? 2 : 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center"
            >
              {/* Pink Pin */}
              <div className="relative z-20 w-5 h-5 rounded-full bg-zinc-400 dark:bg-zinc-500 border-2 border-zinc-500 dark:border-zinc-400 shadow-md -mb-3" />

              {/* Receipt Card */}
              <div className="relative bg-[#faf8f5] dark:bg-zinc-900 w-full max-w-xs mx-auto shadow-xl overflow-hidden">
                
                {/* Dotted top border */}
                <div className="w-full border-t-2 border-dashed border-zinc-300 dark:border-zinc-700" />

                {/* Receipt Header */}
                <div className="px-5 pt-5 pb-3 text-center">
                  <p className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 tracking-[0.3em] uppercase mb-1">
                    ✦ WIRAKARN PORTFOLIO ✦
                  </p>
                  <h3 className="font-sans font-black text-lg tracking-[0.2em] uppercase text-black dark:text-white border-y-2 border-black dark:border-white py-2">
                    {lang.name}
                  </h3>
                  <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider mt-1">
                    {lang.nameLocal}
                  </p>
                </div>

                {/* Decorative dashed line */}
                <div className="mx-4 border-t border-dashed border-zinc-300 dark:border-zinc-700" />

                {/* Image Section */}
                <div className="px-4 py-3">
                  <div className="w-full h-40 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    <img
                      src={lang.image}
                      alt={lang.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Decorative dashed line */}
                <div className="mx-4 border-t border-dashed border-zinc-300 dark:border-zinc-700" />

                {/* Proficiency Title */}
                <div className="px-5 py-3 text-center">
                  <h4 className="font-sans font-black text-sm tracking-[0.15em] uppercase text-black dark:text-white">
                    {lang.proficiency}
                  </h4>
                </div>

                {/* Decorative dashed line */}
                <div className="mx-4 border-t border-dashed border-zinc-300 dark:border-zinc-700" />

                {/* Detail Items — receipt line items */}
                <div className="px-5 py-3 space-y-2">
                  {lang.details.map((detail) => (
                    <div key={detail.label} className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {detail.label}
                      </span>
                      <span className="font-mono text-[11px] font-bold text-black dark:text-white tracking-wider">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative dashed line */}
                <div className="mx-4 border-t border-dashed border-zinc-300 dark:border-zinc-700" />

                {/* Level badge */}
                <div className="px-5 py-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase">LEVEL</span>
                  <span className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black font-mono font-black text-[10px] tracking-wider rounded-full">
                    {lang.level}
                  </span>
                </div>

                {/* Decorative dashed line */}
                <div className="mx-4 border-t border-dashed border-zinc-300 dark:border-zinc-700" />

                {/* Note footer */}
                <div className="px-5 py-4 text-center">
                  <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider">
                    {lang.note}
                  </p>
                  <p className="font-mono text-[8px] text-zinc-300 dark:text-zinc-600 tracking-widest mt-2 uppercase">
                    ║▌║█║▌│║▌║▌│ {lang.name}_CERT
                  </p>
                </div>

                {/* Torn bottom edge */}
                <div className="w-full h-6 relative overflow-hidden">
                  <svg viewBox="0 0 400 24" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      d="M0,0 L10,8 L20,2 L30,10 L40,4 L50,12 L60,3 L70,9 L80,5 L90,11 L100,2 L110,8 L120,4 L130,10 L140,3 L150,9 L160,5 L170,11 L180,2 L190,8 L200,4 L210,10 L220,3 L230,9 L240,5 L250,11 L260,2 L270,8 L280,4 L290,10 L300,3 L310,9 L320,5 L330,11 L340,2 L350,8 L360,4 L370,10 L380,3 L390,9 L400,5 L400,24 L0,24 Z"
                      className="fill-[#faf8f5] dark:fill-zinc-900"
                    />
                  </svg>
                </div>
              </div>

              {/* Card shadow on the wall */}
              <div className="w-[90%] h-4 bg-gradient-to-b from-black/5 to-transparent dark:from-white/5 rounded-b-full -mt-1" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Languages;
