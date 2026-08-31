import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles } from 'lucide-react';

const additionalExperiences = [
  {
    id: 1,
    title: 'Hackathon Bangkok 2024',
    subtitle: 'Junction Asia × Google',
    description: 'แข่งขัน Hackathon 48 ชั่วโมง พัฒนา AI-powered Web App ติดอันดับ Top 5',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    tag: 'HACKATHON',
  },
  {
    id: 2,
    title: 'React Advanced Workshop',
    subtitle: 'React Thailand Community',
    description: 'เข้าร่วม Workshop เชิงลึก Advanced React Patterns & Performance',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    tag: 'WORKSHOP',
  },
  {
    id: 3,
    title: 'Tech for Community',
    subtitle: 'Code for Thailand',
    description: 'อาสาสมัครสอน Coding ให้เยาวชนด้อยโอกาส ในโครงการ Digital Literacy',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
    tag: 'VOLUNTEER',
  },
  {
    id: 4,
    title: 'DevFest Bangkok 2024',
    subtitle: 'Google Developer Groups',
    description: 'เข้าร่วม Conference ด้าน Cloud, AI/ML และ Web Technologies',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    tag: 'CONFERENCE',
  },
  {
    id: 5,
    title: 'UX/UI Design Sprint',
    subtitle: 'Figma Community Thailand',
    description: 'ร่วมทีมออกแบบ Design Sprint 5 วัน สร้าง Prototype แอพสุขภาพ',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    tag: 'DESIGN SPRINT',
  },
  {
    id: 6,
    title: 'Open Source Contribution',
    subtitle: 'Hacktoberfest 2024',
    description: 'Contribute ให้ Open Source Projects ทั้ง React, Node.js และ Tools ต่างๆ',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80',
    tag: 'OPEN SOURCE',
  },
];

const AdditionalExperience = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="additional-experience"
      className="relative w-full bg-[#f5f0eb] dark:bg-[#0a0a0a] py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-handwriting text-2xl text-zinc-500 dark:text-zinc-400">
              highlights & activities
            </span>
            <div className="flex-1 h-[2px] bg-black dark:bg-white" />
          </div>
          <h2 className="font-sans font-black text-5xl sm:text-6xl text-black dark:text-white uppercase tracking-tight">
            ADDITIONAL
          </h2>
          <h2 className="font-sans font-black text-5xl sm:text-6xl text-black dark:text-white uppercase tracking-tight -mt-2">
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Photo Gallery Grid — matching the reference design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {additionalExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              style={{ aspectRatio: '4/5' }}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image */}
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Subtle gradient overlay — always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500" />

              {/* Tag Badge — top left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block px-3 py-1 text-[9px] font-black uppercase tracking-[0.15em] rounded-full bg-white/90 text-black dark:bg-black/80 dark:text-white backdrop-blur-sm border border-black/10 dark:border-white/20">
                  {exp.tag}
                </span>
              </div>

              {/* Hover Overlay — full info */}
              <AnimatePresence>
                {hoveredId === exp.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/85 via-black/50 to-black/20"
                  >
                    {/* Activity Name */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.35, delay: 0.05 }}
                    >
                      <h3 className="font-sans font-black text-xl sm:text-2xl text-white uppercase leading-tight mb-1">
                        {exp.title}
                      </h3>
                      <p className="font-serif italic text-sm text-zinc-300 mb-2">
                        {exp.subtitle}
                      </p>
                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                        {exp.description}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom info — visible when NOT hovering */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-300 ${
                  hoveredId === exp.id ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <h3 className="font-sans font-bold text-sm text-white uppercase tracking-wide truncate">
                  {exp.title}
                </h3>
                <p className="font-serif italic text-xs text-zinc-300 mt-0.5 truncate">
                  {exp.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative strip */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="flex-1 h-[2px] bg-black/15 dark:bg-white/10" />
          <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
            <Camera className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              Moments & Milestones
            </span>
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1 h-[2px] bg-black/15 dark:bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalExperience;
