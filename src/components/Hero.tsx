import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';
import profileAvatar from '../assets/images/rakhi_avatar_1780749514315.png';

interface HeroProps {
  onScrollToSection: (id: string) => void;
  onOpenResume: () => void;
}

export default function Hero({ onScrollToSection, onOpenResume }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-[#FAFAFA] dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Decorative dot matrix background for modern minimalist vibe */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />

      {/* Subtle lighting overlay */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10 w-full">
        {/* Intro Info Left Column */}
        <div className="md:col-span-7 flex flex-col items-start gap-5">
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40 font-mono text-xs font-medium"
          >
            <Sparkles size={13} />
            <span>Welcome to my professional space</span>
          </motion.div>

          {/* Name & Title */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-500">{personalInfo.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase flex flex-wrap gap-x-2 items-center"
            >
              {personalInfo.title.split('•').map((part, index, arr) => (
                <span key={index} className="flex items-center gap-2">
                  <span>{part.trim()}</span>
                  {index < arr.length - 1 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-600" />
                  )}
                </span>
              ))}
            </motion.p>
          </div>

          {/* Core Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-sans text-sm sm:text-base text-gray-600 dark:text-slate-300 leading-relaxed max-w-xl text-left"
          >
            {personalInfo.description}
          </motion.p>

          {/* Aspiration Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pl-4 border-l-2 border-blue-500/60 dark:border-blue-500/40 text-left"
          >
            <span className="block font-mono text-[11px] font-semibold tracking-wider text-gray-400 dark:text-slate-500 uppercase mb-1">
              My Goal & Aspiration
            </span>
            <p className="font-sans text-xs sm:text-sm italic text-gray-500 dark:text-slate-400 leading-relaxed max-w-md">
              "{personalInfo.aspiration}"
            </p>
          </motion.div>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3 w-full mt-2"
          >
            <button
              onClick={() => onScrollToSection('projects')}
              className="px-5 py-2.5 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-sans font-medium text-sm flex items-center gap-2 shadow-md shadow-blue-500/10 hover:bg-blue-700 dark:hover:bg-blue-600 active:scale-98 transition-all cursor-pointer"
            >
              View Projects
              <ArrowRight size={15} />
            </button>

            <button
              onClick={onOpenResume}
              className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-100 border border-gray-200 dark:border-slate-700 font-sans font-medium text-sm flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-slate-700/60 active:scale-98 transition-all cursor-pointer"
            >
              <FileText size={15} />
              View Resume
            </button>

            <button
              onClick={() => onScrollToSection('contact')}
              className="px-5 py-2.5 rounded-xl bg-transparent text-gray-600 dark:text-slate-300 border border-transparent hover:border-gray-200 dark:hover:border-slate-700 font-sans font-medium text-sm flex items-center justify-center active:scale-98 transition-all cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 mt-4"
          >
            <span className="font-mono text-xs text-gray-400 dark:text-slate-500">Connect:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub Link"
            >
              <Github size={18} />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Link"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-1.5 text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email Link"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Profile Avatar Right Column */}
        <div className="md:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Soft decorative background rings */}
            <div className="absolute -inset-4 rounded-full border border-gray-200/40 dark:border-slate-800/20 [box-shadow:0_0_50px_rgba(37,99,235,0.05)] select-none pointer-events-none animate-spin-slow" />
            <div className="absolute -inset-8 rounded-full border border-dashed border-gray-200/20 dark:border-slate-800/10 select-none pointer-events-none" />

            {/* Main Avatar Wrapper */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-white dark:bg-slate-800">
              <img
                src={profileAvatar}
                alt="Rakhi Tiwari Profile Avatar"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Corner Decorative Code Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-md font-mono text-[10px] font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Python/ML Role</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
