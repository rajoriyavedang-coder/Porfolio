import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  FileSpreadsheet, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles, 
  Zap,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  onOpenDemoSimulation: (project: Project) => void;
}

export default function Projects({ onOpenDemoSimulation }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'ml' | 'dev'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const filterTabs = [
    { label: 'All Projects', id: 'all' as const },
    { label: 'Machine Learning', id: 'ml' as const },
    { label: 'Software & Network Systems', id: 'dev' as const },
  ];

  // Map indexes to cool dynamic icons for steps/features
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap size={20} className="text-primary-400 text-blue-500" />;
      case 1:
        return <Layers size={20} className="text-primary-400 text-indigo-500" />;
      case 2:
        return <ShieldCheck size={20} className="text-primary-400 text-purple-500" />;
      default:
        return <Sparkles size={20} className="text-primary-400 text-pink-500" />;
    }
  };

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu size={20} className="text-primary-400 text-blue-500" />;
      case 1:
        return <TrendingUp size={20} className="text-primary-400 text-indigo-500" />;
      case 2:
        return <CheckCircle2 size={20} className="text-primary-400 text-emerald-500" />;
      default:
        return <Sparkles size={20} className="text-primary-400 text-purple-500" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-dark-700 transition-colors duration-300 relative border-b border-gray-100 dark:border-slate-800/40"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 dark:text-primary-400 uppercase">
            Work Showcase
          </span>
          <h2 className="text-4xl font-bold font-sans text-gray-900 dark:text-white tracking-tight mt-1">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
              Projects &amp; Work
            </span>
          </h2>
          
        </div>

        

        {/* Projects Cards Column */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.01, y: -4 }}
                className="bg-gray-50/70 dark:bg-dark-600/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xs dark:shadow-xl border border-gray-100 dark:border-slate-800/80 p-6 sm:p-8 hover:shadow-md transition-all text-left"
              >
                {/* Visual Header / Title */}
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 font-mono text-[9px] uppercase tracking-wider">
                        {project.category === 'ml' ? 'ML Pipeline' : 'Software & Sys'}
                      </span>
                      <span className="font-mono text-[10px] text-gray-400 dark:text-slate-500">
                        PROJECT 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-sans text-gray-900 dark:text-white tracking-tight bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-primary-400 dark:to-secondary-400 bg-clip-text dark:text-transparent">
                      {project.title}
                    </h3>
                  </div>

                  {project.results && (
                    <div className="flex items-center gap-1.5 bg-white dark:bg-dark-700 border border-gray-100 dark:border-slate-800 px-3 py-1.5 rounded-2xl">
                      <Code2 size={13} className="text-indigo-500" />
                      <span className="font-mono text-[10px] font-semibold text-gray-500 dark:text-slate-400">
                        {project.results.accuracy || project.results.f1Score}
                      </span>
                    </div>
                  )}
                </div>

                {/* Subtitle / Description */}
                <p className="font-sans text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* STEPS GRID (if defined, like cryptocurrency project) */}
                {project.steps && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {project.steps.map((step, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-dark-700/50 rounded-2xl p-5 border border-gray-100 dark:border-slate-800/40 hover:bg-gray-50 dark:hover:bg-dark-600/50 transition-colors"
                      >
                        <div className="flex items-center mb-3 gap-2.5">
                          {getStepIcon(i)}
                          <h4 className="text-gray-900 dark:text-white font-semibold text-sm">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* FEATURES GRID (if defined, like voice recorder and other apps) */}
                {project.features && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {project.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-dark-700/50 rounded-2xl p-5 border border-gray-100 dark:border-slate-800/40 hover:bg-gray-50 dark:hover:bg-dark-600/50 transition-colors"
                      >
                        <div className="flex items-center mb-3 gap-2.5">
                          {getFeatureIcon(i)}
                          <h4 className="text-gray-900 dark:text-white font-semibold text-sm">
                            {feature.title}
                          </h4>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Achievements List (Fallback/Details) */}
                <div className="mb-6 space-y-2">
                  <span className="block font-mono text-[9px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                    Core Metrics &amp; Implementations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-slate-300 border border-gray-100/50 dark:border-slate-800 font-mono text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions / Links Panel */}
                <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-gray-200/50 dark:border-slate-800/50">
                  <button
                    onClick={() => onOpenDemoSimulation(project)}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-primary-400 dark:hover:bg-primary-300 text-white dark:text-dark-700 font-sans font-semibold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <ExternalLink size={14} />
                    Simulate Sandbox Demo
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white dark:bg-dark-700 text-gray-700 dark:text-slate-200 border border-gray-200 dark:border-slate-700/80 font-sans font-medium text-xs sm:text-sm flex items-center gap-1.5 hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors"
                    >
                      <Github size={14} />
                      GitHub Repo
                    </a>
                  )}

                  {project.docUrl && (
                    <a
                      href={project.docUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white dark:bg-dark-700 text-gray-700 dark:text-slate-200 border border-gray-200 dark:border-slate-700/80 font-sans font-medium text-xs sm:text-sm flex items-center gap-1.5 hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors mr-auto"
                    >
                      <FileSpreadsheet size={14} />
                      Architecture / Docs
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
