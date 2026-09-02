import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Layout, Palette, Cloud, Sparkles, Award, 
  ExternalLink, ArrowUpRight, Plus, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { certificates, additionalCertificates } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

const iconMap = {
  code: Code2,
  layout: Layout,
  palette: Palette,
  cloud: Cloud,
  sparkles: Sparkles,
};

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertId, setSelectedCertId] = useState(null);

  const totalCount = certificates.length + additionalCertificates.length;

  const handleOpenCert = (id) => {
    setSelectedCertId(id);
    setModalOpen(true);
  };

  const handleOpenOthers = () => {
    setSelectedCertId(additionalCertificates[0]?.id || certificates[0]?.id);
    setModalOpen(true);
  };

  return (
    <section id="certificates" className="relative w-full bg-[#f5f0eb] dark:bg-[#0a0a0a] py-20 px-4 transition-colors duration-300">
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
              verified achievements
            </span>
            <div className="flex-1 h-[2px] bg-black dark:bg-white" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-sans font-black text-5xl sm:text-6xl text-black dark:text-white uppercase tracking-tight">
              CERTIFICATES
            </h2>
            <div className="flex items-center gap-2">
              <span className="px-4 py-1.5 bg-black text-white dark:bg-white dark:text-black font-mono font-black text-xs uppercase tracking-wider rounded-full shadow-sm">
                ✦ {totalCount} VERIFIED CREDENTIALS
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Grid: Left side editorial spotlight / Right side user image list layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Editorial Info Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white dark:bg-zinc-900 editorial-border rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                  CONTINUOUS LEARNING & MASTERY
                </span>
              </div>

              <h3 className="font-sans font-black text-2xl sm:text-3xl text-black dark:text-white uppercase leading-tight mb-4">
                VALIDATED <span className="font-serif italic font-bold">Expertise</span> & TECHNICAL STANDARDS
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                A curated track record of specialized software engineering programs, frontend architecture certificates, design systems mastery, and cloud essentials.
              </p>

              {/* Highlights badge list */}
              <div className="space-y-3 mb-8 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center text-xs flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-sans font-bold text-xs uppercase tracking-wide text-zinc-800 dark:text-zinc-200">
                    Junior Software Developer — Generation TH
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center text-xs flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-sans font-bold text-xs uppercase tracking-wide text-zinc-800 dark:text-zinc-200">
                    Google Career Professional UX Certification
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center text-xs flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-sans font-bold text-xs uppercase tracking-wide text-zinc-800 dark:text-zinc-200">
                    AWS Academy Cloud Architecture Fundamentals
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button to view all */}
            <button
              onClick={() => handleOpenOthers()}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-black text-white dark:bg-white dark:text-black rounded-full font-sans font-black text-xs sm:text-sm uppercase tracking-wider hover:scale-[1.02] active:scale-98 transition-transform shadow-lg cursor-pointer"
            >
              <Award className="w-4 h-4" />
              EXPLORE ALL CERTIFICATES ({totalCount})
            </button>
          </motion.div>

          {/* Right Column: Clean Vertical List following the Reference Image Design (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-zinc-900 editorial-border rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            {/* Header label matching reference image */}
            <div className="flex items-center justify-between pb-5 mb-5 border-b-2 border-black dark:border-white">
              <span className="font-mono font-black text-xs tracking-[0.25em] uppercase text-zinc-500 dark:text-zinc-400">
                CREDENTIALS
              </span>
              <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                CLICK TO VIEW DETAILS
              </span>
            </div>

            {/* List of Certificates matching image design */}
            <div className="space-y-6 sm:space-y-7">
              {certificates.map((cert, index) => {
                const Icon = iconMap[cert.iconType] || Award;
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    onClick={() => handleOpenCert(cert.id)}
                    className="group flex items-start gap-4 sm:gap-5 p-3 sm:p-4 -mx-3 rounded-2xl hover:bg-[#f5f0eb]/70 dark:hover:bg-zinc-800/70 transition-all duration-200 cursor-pointer"
                  >
                    {/* Left Circular Icon Badge */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#18181b] dark:bg-white text-white dark:text-black border-2 border-black dark:border-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-pink-500 dark:group-hover:bg-pink-400 group-hover:text-white dark:group-hover:text-black group-hover:border-pink-500 transition-all duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-sans font-black text-sm sm:text-base text-black dark:text-white uppercase tracking-wider group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                          {cert.title}
                        </h4>
                        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                      </div>

                      <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider uppercase mt-0.5">
                        {cert.issuer} • {cert.date}
                      </p>

                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1 line-clamp-2">
                        {cert.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              {/* LAST ITEM: "OTHERS" to view more certificates as requested */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: certificates.length * 0.08 }}
                onClick={handleOpenOthers}
                className="group flex items-start gap-4 sm:gap-5 p-3.5 sm:p-4 -mx-3 rounded-2xl bg-black/5 dark:bg-white/5 border-2 border-dashed border-black/30 dark:border-white/30 hover:border-black dark:hover:border-white hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                {/* Left Circular Badge for OTHERS */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-pink-500 dark:group-hover:bg-pink-400 group-hover:text-white dark:group-hover:text-black group-hover:border-pink-500 transition-all duration-300">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-sans font-black text-sm sm:text-base text-black dark:text-white uppercase tracking-wider group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                        OTHERS
                      </h4>
                      <span className="px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black font-mono font-black text-[9px] uppercase tracking-wider rounded-full">
                        +{additionalCertificates.length} MORE
                      </span>
                    </div>
                    <div className="flex items-center gap-1 font-mono text-xs font-bold text-black dark:text-white group-hover:translate-x-1 transition-transform">
                      <span>VIEW ALL</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider uppercase mt-0.5">
                    SPECIALIZED COURSES, WORKSHOPS & ARCHIVED HONORS
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1">
                    JavaScript Algorithms, Modern React 19 / Next.js, PostgreSQL Database Design, GitHub Actions CI/CD & Three.js 3D Web.
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Certificate Detail & Full Catalog Modal */}
      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCertId={selectedCertId}
      />
    </section>
  );
};

export default Certificates;
