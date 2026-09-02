import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, Award, Check, Copy, Code2, Layout, 
  Palette, Cloud, Database, GitBranch, Sparkles, Layers, ShieldCheck, ChevronRight 
} from 'lucide-react';
import { certificates, additionalCertificates } from '../data/portfolioData';

const allCertificates = [...certificates, ...additionalCertificates];

const categoryIcons = {
  code: Code2,
  layout: Layout,
  palette: Palette,
  cloud: Cloud,
  database: Database,
  git: GitBranch,
  sparkles: Sparkles,
  layers: Layers,
};

const CertificateModal = ({ isOpen, onClose, initialCertId = null }) => {
  const [selectedId, setSelectedId] = useState(initialCertId || allCertificates[0]?.id);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    if (initialCertId) {
      setSelectedId(initialCertId);
    }
  }, [initialCertId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = ['ALL', 'Development', 'Frontend', 'Design', 'Cloud', 'Database', 'Tools'];

  const filteredCerts = activeCategory === 'ALL'
    ? allCertificates
    : allCertificates.filter((c) => c.category.toLowerCase() === activeCategory.toLowerCase());

  const currentCert = allCertificates.find((c) => c.id === selectedId) || filteredCerts[0] || allCertificates[0];

  const handleCopyId = (credId) => {
    navigator.clipboard.writeText(credId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const IconComponent = categoryIcons[currentCert?.iconType] || Award;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#faf8f5] dark:bg-zinc-950 editorial-border rounded-3xl p-5 sm:p-8 max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-black dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                ✦ CREDENTIALS REPOSITORY ✦
              </span>
              <h3 className="font-sans font-black text-xl sm:text-2xl text-black dark:text-white uppercase tracking-tight leading-none">
                ALL CERTIFICATIONS & HONORS ({allCertificates.length})
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-md"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
          {categories.map((cat) => {
            const count = cat === 'ALL'
              ? allCertificates.length
              : allCertificates.filter((c) => c.category.toLowerCase() === cat.toLowerCase()).length;
            if (count === 0) return null;
            const isCatActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-3.5 py-1.5 rounded-full text-xs font-sans font-black tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer
                  ${isCatActive
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
                    : 'bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700'
                  }
                `}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Main Content Area (Two Columns on large screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-y-auto flex-1 pr-1">
          
          {/* Left: Certificate List (5 columns) */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[280px] lg:max-h-full overflow-y-auto pr-1">
            {filteredCerts.map((cert) => {
              const isSelected = cert.id === currentCert?.id;
              const RowIcon = categoryIcons[cert.iconType] || Award;
              return (
                <button
                  key={cert.id}
                  onClick={() => setSelectedId(cert.id)}
                  className={`
                    w-full text-left p-3.5 rounded-2xl border-2 transition-all flex items-start gap-3 cursor-pointer group
                    ${isSelected
                      ? 'bg-white dark:bg-zinc-900 border-black dark:border-white shadow-md translate-x-1'
                      : 'bg-transparent border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-white/50 dark:hover:bg-zinc-900/50'
                    }
                  `}
                >
                  <div
                    className={`
                      w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center border transition-transform
                      ${isSelected
                        ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white scale-105'
                        : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 group-hover:scale-105'
                      }
                    `}
                  >
                    <RowIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider truncate">
                        {cert.issuer}
                      </span>
                      <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex-shrink-0">
                        {cert.date}
                      </span>
                    </div>
                    <h4 className="font-sans font-black text-xs sm:text-sm text-black dark:text-white uppercase leading-snug truncate mt-0.5">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                      {cert.subtitle}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-2 flex-shrink-0 ${isSelected ? 'text-black dark:text-white' : 'text-zinc-300 dark:text-zinc-700'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Certificate Showcase Detail (7 columns) */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 editorial-border rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
            <div>
              {/* Header tags */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-dashed border-zinc-300 dark:border-zinc-700">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black font-sans font-black text-[10px] uppercase tracking-wider rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400 dark:text-emerald-600" />
                    {currentCert.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400">
                    ISSUED {currentCert.date}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
                  <span className="font-bold">ID:</span>
                  <span className="font-mono">{currentCert.credentialId}</span>
                  <button
                    onClick={() => handleCopyId(currentCert.credentialId)}
                    className="ml-1 text-black dark:text-white hover:opacity-70 cursor-pointer"
                    title="Copy Credential ID"
                  >
                    {copiedId ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>

              {/* Title & Issuer */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center flex-shrink-0 shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-black dark:text-white uppercase leading-tight">
                    {currentCert.title}
                  </h3>
                  <p className="font-serif italic text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {currentCert.subtitle} • <span className="font-sans font-bold not-italic">{currentCert.issuer}</span>
                  </p>
                </div>
              </div>

              {/* Certificate Image Preview */}
              <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden mb-4 border-2 border-black dark:border-zinc-700 group bg-zinc-950">
                <img
                  src={currentCert.image}
                  alt={currentCert.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-white">
                    <span className="font-mono text-[10px] tracking-widest uppercase bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                      ✦ VERIFIED CREDENTIAL PREVIEW ✦
                    </span>
                    <span className="font-mono text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                {currentCert.description}
              </p>

              {/* Skill Tags */}
              <div className="mb-4">
                <h5 className="font-mono text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                  COMPETENCIES & STACK
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {currentCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg border border-black dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <a
                href={currentCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-sans font-black text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                VERIFY CREDENTIAL
              </a>
              <button
                onClick={() => handleCopyId(currentCert.credentialId)}
                className="flex items-center gap-2 px-5 py-3 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white rounded-full font-sans font-bold text-xs uppercase tracking-wider border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedId ? 'COPIED ID' : 'COPY ID'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CertificateModal;
