import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full bg-[#f5f0eb] dark:bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Big CTA Card — "LET'S Collaborate TOGETHER" (Image 2 bottom section) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black dark:bg-white editorial-border rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative corner arrows */}
          <div className="absolute top-6 right-6">
            <svg className="w-6 h-6 text-zinc-500 dark:text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </div>
          <div className="absolute bottom-6 left-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-8 h-8 text-zinc-500 dark:text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 11-6.219-8.56" />
              </svg>
            </motion.div>
          </div>

          {/* Main heading */}
          <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white dark:text-black uppercase leading-tight mb-2">
            LET'S <span className="font-serif italic font-bold normal-case">Collaborate</span>
          </h2>
          <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white dark:text-black uppercase tracking-tight mb-6">
            TOGETHER
          </h2>

          {/* Email CTA */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 rounded-full mb-6">
            <span className="font-mono text-sm text-zinc-300 dark:text-zinc-700 truncate max-w-[250px] sm:max-w-none">
              {personalInfo.email}
            </span>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-white dark:bg-black text-black dark:text-white rounded-full text-xs font-black uppercase tracking-wider hover:scale-105 transition-transform cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedEmail ? 'COPIED!' : 'COPY'}
            </button>
          </div>

          {/* Action button */}
          <div className="mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-black text-black dark:text-white rounded-full font-sans font-black text-sm uppercase tracking-wider border-2 border-white dark:border-black hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all shadow-lg"
            >
              LET'S START A CONVERSATION
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black rounded-full hover:scale-110 transition-transform">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black rounded-full hover:scale-110 transition-transform">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href={personalInfo.socials.line} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black rounded-full hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Phone */}
          <div className="mt-6 flex items-center justify-center gap-2 text-zinc-400 dark:text-zinc-600 text-sm font-mono">
            <Phone className="w-4 h-4" />
            <span>{personalInfo.phone}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
