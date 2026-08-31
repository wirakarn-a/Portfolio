import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Star } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="relative w-full bg-white dark:bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-handwriting text-2xl text-zinc-500 dark:text-zinc-400">selected works</span>
            <div className="flex-1 h-[2px] bg-black dark:bg-white" />
          </div>
          <h2 className="font-sans font-black text-5xl sm:text-6xl text-black dark:text-white uppercase tracking-tight">
            PROJECTS
          </h2>
        </motion.div>

        {/* Projects Grid — editorial masonry-like */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, index) => {
            // First project takes full row, others take half
            const isWide = index === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  group editorial-border rounded-2xl overflow-hidden card-lift bg-[#f5f0eb] dark:bg-zinc-900
                  ${isWide ? 'md:col-span-12' : 'md:col-span-6'}
                `}
              >
                {/* Image */}
                <div className={`relative w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 ${isWide ? 'h-72 sm:h-96' : 'h-56 sm:h-72'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Overlay badges */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-wider rounded-full">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold rounded-full border border-black/10">
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {project.stats.views}</span>
                    <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {project.stats.stars}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-black dark:text-white uppercase leading-tight mb-2 group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full border-2 border-black dark:border-white text-black dark:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="flex items-center justify-between pt-4 border-t border-dashed border-zinc-300 dark:border-zinc-700">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-sans font-bold text-black dark:text-white underline underline-offset-4 hover:no-underline transition-all"
                    >
                      VIEW DETAILS →
                    </button>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-110 transition-transform"
                        aria-label="GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-black uppercase tracking-wider hover:scale-105 transition-transform"
                      >
                        LIVE DEMO
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

export default Projects;
