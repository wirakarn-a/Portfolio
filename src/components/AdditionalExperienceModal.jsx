import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, Sparkles, 
  Calendar, Building2, Tag, ArrowUpRight, Award, Compass 
} from 'lucide-react';

const AdditionalExperienceModal = ({ isOpen, onClose, activities, initialActivityId = null }) => {
  const [selectedId, setSelectedId] = useState(initialActivityId || activities[0]?.id);

  useEffect(() => {
    if (initialActivityId) {
      setSelectedId(initialActivityId);
    }
  }, [initialActivityId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, selectedId]);

  if (!isOpen) return null;

  const currentIndex = activities.findIndex((a) => a.id === selectedId);
  const currentActivity = activities[currentIndex] || activities[0];

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % activities.length;
    setSelectedId(activities[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + activities.length) % activities.length;
    setSelectedId(activities[prevIdx].id);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#faf8f5] dark:bg-zinc-950 editorial-border rounded-3xl p-5 sm:p-8 max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-black dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                ✦ HIGHLIGHTS & COMMUNITY ✦
              </span>
              <h3 className="font-sans font-black text-xl sm:text-2xl text-black dark:text-white uppercase tracking-tight leading-none">
                ACTIVITIES & EXPERIENCES ({activities.length})
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Active Activity Detail */}
        <div className="overflow-y-auto flex-1 pr-1 space-y-6">
          
          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Image Showcase (5 cols) */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden editorial-border min-h-[260px] md:min-h-[340px] bg-zinc-900 group">
              <img
                src={currentActivity.image}
                alt={currentActivity.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Tag Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 text-[10px] font-mono font-black uppercase tracking-wider rounded-full bg-white text-black dark:bg-black dark:text-white border border-black/10 dark:border-white/20 shadow-md">
                  {currentActivity.tag}
                </span>
              </div>

              {/* Index counter overlay */}
              <div className="absolute bottom-3 right-3 font-mono text-xs font-bold text-white/90 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                {currentIndex + 1} / {activities.length}
              </div>
            </div>

            {/* Right Details (7 cols) */}
            <div className="md:col-span-7 bg-white dark:bg-zinc-900 editorial-border rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                {/* Meta info tags */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] font-bold border border-zinc-200 dark:border-zinc-700">
                    <Building2 className="w-3.5 h-3.5 text-black dark:text-white" />
                    {currentActivity.subtitle}
                  </span>
                  {currentActivity.period && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
                      <Calendar className="w-3.5 h-3.5" />
                      {currentActivity.period}
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-black text-2xl sm:text-3xl text-black dark:text-white uppercase leading-tight mb-2">
                  {currentActivity.title}
                </h3>

                <p className="font-serif italic text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                  {currentActivity.role || currentActivity.subtitle}
                </p>

                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-5">
                  {currentActivity.fullDescription || currentActivity.description}
                </p>

                {/* Highlights / Skills tags */}
                {currentActivity.skills && (
                  <div className="mb-4">
                    <h5 className="font-mono text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                      KEY TAKEAWAYS & SKILLS
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {currentActivity.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-lg border border-black/20 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800 mt-2">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-mono text-xs font-bold transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  PREV
                </button>

                <span className="font-mono text-xs text-zinc-400">
                  {currentIndex + 1} OF {activities.length}
                </span>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-1 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-mono text-xs font-bold transition-all cursor-pointer"
                >
                  NEXT
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Bottom Thumbnails List Selector */}
          <div>
            <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
              ✦ ALL ACTIVITIES ({activities.length})
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
              {activities.map((item) => {
                const isSelected = item.id === currentActivity.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`
                      text-left p-2 rounded-xl border-2 transition-all cursor-pointer flex flex-col group
                      ${isSelected
                        ? 'bg-white dark:bg-zinc-900 border-black dark:border-white shadow-md scale-102'
                        : 'bg-zinc-100/80 dark:bg-zinc-900/60 border-transparent hover:border-zinc-300 dark:hover:border-zinc-700'
                      }
                    `}
                  >
                    <div className="w-full h-16 rounded-lg overflow-hidden mb-1.5 relative bg-zinc-800">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover transition-all ${isSelected ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
                      />
                      <span className="absolute top-1 left-1 px-1.5 py-0.5 text-[8px] font-mono font-black uppercase rounded bg-black/80 text-white">
                        {item.tag}
                      </span>
                    </div>
                    <span className="font-sans font-bold text-[11px] text-black dark:text-white truncate uppercase">
                      {item.title}
                    </span>
                    <span className="font-mono text-[9px] text-zinc-400 truncate">
                      {item.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdditionalExperienceModal;
