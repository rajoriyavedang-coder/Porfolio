import { motion } from 'motion/react';
import { X, Mail, Phone, MapPin, Github, Linkedin, Download, Printer, Copy, Check, FileText } from 'lucide-react';
import { useState } from 'react';
import { personalInfo, education, skillCategories, certifications, leadership } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const textToCopy = `
RAKHI TIWARI
${personalInfo.title}
Phone: ${personalInfo.phone} | Email: ${personalInfo.email} | ${personalInfo.location}
LinkedIn: linkedin.com/in/rakhi-tiwari | GitHub: github.com/rakhiT19
    `;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={onClose} />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white dark:bg-slate-900 w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-800 z-10 flex flex-col max-h-[95vh]"
      >
        {/* Action Header bar */}
        <div className="px-6 py-4 border-b border-gray-200/60 dark:border-slate-800/60 bg-gray-50 dark:bg-slate-950 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="font-mono text-xs font-semibold text-gray-500 dark:text-slate-400">
              Professional Resume
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 font-sans text-xs font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              <span>{copied ? 'Copied!' : 'Copy Info'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 font-sans text-xs font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer size={13} />
              <span>Print</span>
            </button>

            <a
              href="/cisco_rakhi_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 font-sans text-xs font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FileText size={13} />
              <span>View PDF</span>
            </a>

            <a
              href="/cisco_rakhi_resume.pdf"
              download="Rakhi_Tiwari_Resume.pdf"
              className="px-4 py-1.5 rounded-lg bg-blue-600 text-white font-sans text-xs font-semibold hover:bg-blue-700 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-800 dark:text-slate-500 transition-colors cursor-pointer ml-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto print:p-2 bg-gray-50 dark:bg-slate-950">
          <div className="bg-white dark:bg-slate-900 border border-gray-200/60 dark:border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-sm text-left font-sans max-w-4xl mx-auto space-y-4 print:border-none print:shadow-none print:p-0 print:space-y-3">
            
            {/* Header */}
            <div className="text-center pb-3 border-b border-gray-200 dark:border-slate-800 print:pb-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 mt-0.5">
                {personalInfo.title}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-2 text-[11px] text-gray-600 dark:text-slate-400 print:text-[9px] print:gap-1.5">
                <span className="flex items-center gap-0.5">
                  <Phone size={11} />
                  {personalInfo.phone || '+91-XXXXXXXXXX'}
                </span>
                <span>|</span>
                <span className="flex items-center gap-0.5">
                  <Mail size={11} />
                  {personalInfo.email}
                </span>
                <span>|</span>
                <span className="flex items-center gap-0.5">
                  <MapPin size={11} />
                  {personalInfo.location || 'Indore, MP, India'}
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="print:pb-1">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1.5 print:mb-1 print:text-[10px]">
                Professional Summary
              </h2>
              <p className="text-xs text-gray-700 dark:text-slate-300 leading-relaxed print:text-[9px]">
                {personalInfo.description}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="print:pb-1">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 print:mb-1 print:text-[10px]">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 print:grid-cols-3 print:gap-1.5">
                {skillCategories.map(cat => (
                  <div key={cat.title} className="print:pb-0">
                    <span className="block text-[11px] font-semibold text-gray-900 dark:text-white mb-1 print:mb-0.5 print:text-[9px]">
                      {cat.title}:
                    </span>
                    <p className="text-[10px] text-gray-600 dark:text-slate-300 leading-snug print:text-[8px]">
                      {cat.skills.map(s => s.name).join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="print:pb-1">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1.5 print:mb-1 print:text-[10px]">
                Education
              </h2>
              <div className="space-y-1.5 print:space-y-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-[11px] font-bold text-gray-900 dark:text-white print:text-[9px]">
                      {education.institution}
                    </h3>
                    <span className="text-[10px] text-gray-500 dark:text-slate-400 print:text-[8px]">
                      {education.expectedGraduation}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-600 dark:text-slate-300 print:text-[8px]">
                    {education.degree} | CGPA: {education.cgpa}
                  </p>
                  <p className="text-[10px] text-gray-600 dark:text-slate-300 print:text-[8px] mt-1">
                    <span className="font-semibold">Coursework:</span> {education.relevantCoursework.join(', ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="print:pb-1">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1.5 print:mb-1 print:text-[10px]">
                Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 print:grid-cols-2 print:gap-0.5">
                {certifications.map(cert => (
                  <div key={cert.name} className="flex justify-between items-start">
                    <span className="text-[10px] text-gray-700 dark:text-slate-300 print:text-[8px]">
                      • {cert.name}
                    </span>
                    <span className="text-[9px] text-gray-500 dark:text-slate-400 shrink-0 ml-1 print:text-[7px]">
                      {cert.issuer.split(' ')[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div className="print:pb-1">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1.5 print:mb-1 print:text-[10px]">
                Leadership & Co-Curricular
              </h2>
              <div className="space-y-1 print:space-y-0.5">
                {leadership.map(club => (
                  <div key={club.id}>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[11px] font-bold text-gray-900 dark:text-white print:text-[9px]">
                        {club.role} — {club.organization}
                      </h4>
                      <span className="text-[10px] text-gray-500 dark:text-slate-400 shrink-0 print:text-[8px]">
                        {club.duration}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-600 dark:text-slate-300 leading-snug print:text-[8px]">
                      {club.activities.join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
