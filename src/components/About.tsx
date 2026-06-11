import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, BookOpen, Clock } from 'lucide-react';
import { education } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative border-y border-gray-100 dark:border-slate-800/40"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Section Heading */}
        <div className="mb-12 text-center md:text-left">
          
          <h2 className="text-3xl font-bold font-sans text-gray-900 dark:text-white tracking-tight mt-1">
            Education ; 
          </h2>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-2 max-w-xl">
            My engineering journey centers around computer science, core system algorithms, and smart applications.
          </p>
        </div>

        {/* Clean 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Column 1: Timeline & Institution details */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-lg font-bold font-sans text-gray-800 dark:text-slate-200 flex items-center gap-2">
              <GraduationCap className="text-blue-600" size={20} />
              Academic History
            </h3>

            {/* Timeline element */}
            <div className="relative pl-6 border-l border-gray-200 dark:border-slate-800 space-y-8">
              {/* Timeline dot */}
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white dark:border-slate-950" />

              <div className="space-y-3">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    {education.institution}
                  </h4>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-mono text-[10px] font-semibold uppercase tracking-wider self-start sm:self-center">
                    Current Student
                  </span>
                </div>

                <p className="text-sm font-medium text-gray-700 dark:text-slate-300">
                  {education.degree}
                </p>

                {/* Meta details (Dates / Map) */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} />
                    Indore, Madhya Pradesh, India
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {education.expectedGraduation}
                  </span>
                </div>

                {/* Score panel */}
                <div className="inline-flex items-center gap-3 p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-slate-900 border border-gray-200/60 dark:border-slate-800/60 mt-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-mono font-bold text-sm sm:text-base flex items-center justify-center">
                    {education.cgpa}
                  </div>
                  <div>
                    <span className="block font-sans text-xs text-gray-400 dark:text-slate-500 font-medium">
                      Current Cumulative CGPA
                    </span>
                    <span className="block font-sans text-xs font-semibold text-gray-700 dark:text-slate-300">
                    
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Relevant Coursework */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-lg font-bold font-sans text-gray-800 dark:text-slate-200 flex items-center gap-2">
              <BookOpen className="text-blue-600" size={19} />
              Relevant Coursework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {education.relevantCoursework.map((course, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-slate-900 border border-gray-200/60 dark:border-slate-800/60 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all text-left group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                    <span className="font-sans font-medium text-xs sm:text-sm text-gray-800 dark:text-slate-300">
                      {course}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick recruiter note badge */}
            <div className="p-4 rounded-xl bg-orange-50/50 dark:bg-amber-950/20 border border-orange-100/60 dark:border-amber-900/40 text-left">
              <div className="flex gap-2">
                <Clock className="text-orange-500 shrink-0 mt-0.5" size={14} />
                <p className="font-sans text-[11px] leading-relaxed text-orange-700 dark:text-amber-400">
                  <strong>Expected Graduation June 2027:</strong> Available for Summer 2026/2027 internships, cooperative projects, or immediate entry-level remote engineering collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
