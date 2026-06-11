import { motion } from 'motion/react';
import { Users, Camera, FileEdit, Award, Sparkles, PencilLine } from 'lucide-react';
import { leadership } from '../data';

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative border-y border-gray-100 dark:border-slate-800/40"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Campus Influence
          </span>
          <h2 className="text-3xl font-bold font-sans text-gray-900 dark:text-white tracking-tight mt-1">
            Leadership &amp; Clubs
          </h2>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-2 max-w-xl">
            My collegiate activities represent active commitments, creative videography/content, and collaborative startup organizing.
          </p>
        </div>

        {/* Timeline representation */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-gray-100 dark:border-slate-800 space-y-12">
          {leadership.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative relative-timeline-element text-left"
            >
              {/* Connected node circles */}
              <div className="absolute -left-10 sm:-left-12 top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 flex items-center justify-center text-blue-600 shadow-sm">
                {idx === 0 ? <Camera size={14} /> : <PencilLine size={14} />}
              </div>

              {/* Entry details container */}
              <div className="p-6 bg-[#FAFAFA] dark:bg-slate-900/60 rounded-3xl border border-gray-200/60 dark:border-slate-800/80 hover:border-gray-300 dark:hover:border-slate-700/80 transition-all flex flex-col sm:flex-row gap-4 justify-between items-start">
                <div className="space-y-4 max-w-xl">
                  {/* Meta heading */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {item.role}
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-gray-900 dark:text-white leading-tight">
                      {item.organization}
                    </h3>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-1">
                    <span className="block font-mono text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider">
                      Key Activities:
                    </span>
                    <ul className="space-y-2.5">
                      {item.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Duration chip */}
                <span className="shrink-0 px-3 py-1 rounded-full bg-gray-200/40 dark:bg-slate-800 border border-gray-200/30 dark:border-slate-700/30 text-gray-700 dark:text-slate-300 font-mono text-xs font-semibold">
                  {item.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
