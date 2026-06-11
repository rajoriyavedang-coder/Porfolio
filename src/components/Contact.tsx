import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-[#FAFAFA] dark:bg-slate-900 transition-colors duration-300 relative"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Let's Collaborate
          </span>
          <h2 className="text-3xl font-bold font-sans text-gray-900 dark:text-white tracking-tight mt-1">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-2 max-w-xl">
            I am open to summer internship opportunities, entry-level Python/ML developer gigs, or open-source computer networking projects.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Column: Fast Channels information (Centered) */}
          <div className="flex flex-col space-y-8 text-center items-center">
            <div className="space-y-4 w-full">
              <h3 className="text-xl font-bold font-sans text-gray-800 dark:text-slate-200">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
                Feel free to email me directly or check out my active profiles across developer networks!
              </p>

              {/* Direct Link Grid Info (Centered Column / Row) */}
              <div className="space-y-4 pt-4 text-left max-w-md mx-auto w-full">
                {/* Email Channel */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200/50 dark:border-slate-800/80 hover:border-blue-500/50 hover:shadow-xs group transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block font-mono text-[9px] font-bold text-gray-400 dark:text-slate-500 uppercase">
                      Official Email Address
                    </span>
                    <span className="block font-sans text-xs sm:text-sm font-semibold text-gray-800 dark:text-slate-200 truncate pr-1">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn Channel */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200/50 dark:border-slate-800/80 hover:border-blue-500/50 hover:shadow-xs group transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Linkedin size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block font-mono text-[9px] font-bold text-gray-400 dark:text-slate-500 uppercase">
                      LinkedIn Network
                    </span>
                    <span className="block font-sans text-xs sm:text-sm font-semibold text-gray-800 dark:text-slate-200 truncate">
                      linkedin.com/in/rakhi-tiwari-aaa302319
                    </span>
                  </div>
                </a>

                {/* GitHub Channel */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200/50 dark:border-slate-800/80 hover:border-blue-500/50 hover:shadow-xs group transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Github size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block font-mono text-[9px] font-bold text-gray-400 dark:text-slate-500 uppercase">
                      GitHub Codespace
                    </span>
                    <span className="block font-sans text-xs sm:text-sm font-semibold text-gray-800 dark:text-slate-200 truncate">
                      github.com/rakhiT19
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Simulated verification tag */}
            <div className="pt-4 border-t border-gray-100 dark:border-slate-800/50 w-full text-center">
              <p className="font-mono text-[10px] text-gray-400 dark:text-slate-500 leading-normal">
                📍 Based in Indore, MP, India <br />
                💼 Open to standard hybrid, remote, or physical cooperative roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
