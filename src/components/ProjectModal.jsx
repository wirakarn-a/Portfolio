import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 editorial-border rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-110 transition-transform"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Category Pill */}
        <span className="inline-block px-4 py-1.5 bg-black dark:bg-white text-white dark:text-black font-sans font-black text-[10px] uppercase tracking-wider rounded-full mb-4">
          {project.category}
        </span>

        <h3 className="font-sans font-black text-3xl sm:text-4xl text-black dark:text-white uppercase leading-tight mb-4">
          {project.title}
        </h3>

        {/* Featured Image */}
        <div className="relative w-full h-64 sm:h-80 rounded-xl editorial-border overflow-hidden mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="font-sans font-bold text-xs text-zinc-500 uppercase tracking-wider mb-3">
            TECH STACK
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full border-2 border-black dark:border-white text-black dark:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-sans font-black text-xs uppercase tracking-wider hover:scale-105 transition-transform"
          >
            <ExternalLink className="w-4 h-4" />
            LIVE DEMO
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-full font-sans font-black text-xs uppercase tracking-wider border-2 border-black dark:border-white hover:scale-105 transition-transform"
          >
            <GithubIcon className="w-4 h-4" />
            SOURCE CODE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
