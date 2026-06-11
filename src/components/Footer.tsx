import { FileText, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200/50 dark:border-slate-800/50 py-12 transition-colors duration-300 text-left">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        {/* Identity & Copyright */}
        <div className="space-y-1.5 text-center md:text-left">
          <p className="font-sans font-bold text-base text-gray-950 dark:text-white">
            Rakhi Tiwari
          </p>
          <p className="font-sans text-xs text-gray-500 dark:text-slate-400">
            © {new Date().getFullYear()} • Engineered for performance. All rights reserved.
          </p>
        </div>

        {/* Action Panel Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-650 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
          >
            <FileText size={13} />
            <span>Resume</span>
          </button>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-650 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
          >
            <Github size={13} />
            <span>GitHub</span>
          </a>

          <a
            href={`https://${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-650 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
          >
            <Linkedin size={13} />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-650 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
          >
            <Mail size={13} />
            <span>Email</span>
          </a>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={handleScrollTop}
          className="p-2.5 rounded-xl border border-gray-200 dark:border-slate-800 text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-900 cursor-pointer transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
}
