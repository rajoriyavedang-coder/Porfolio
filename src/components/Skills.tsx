import { motion } from 'motion/react';
import { Code2, Library, BrainCircuit, Network, Wrench } from 'lucide-react';
import { skillCategories } from '../data';

// Map icon name string to Lucide React component
const iconMap: Record<string, any> = {
  Code2: Code2,
  Library: Library,
  BrainCircuit: BrainCircuit,
  Network: Network,
  Wrench: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-[#FAFAFA] dark:bg-slate-900 transition-colors duration-300 relative"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Technical Stack
          </span>
          <h2 className="text-3xl font-bold font-sans text-gray-900 dark:text-white tracking-tight mt-1">
            Skills &amp; Expertise
          </h2>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-2 max-w-xl">
            A comprehensive overview of my technical capabilities spanning core programming, intelligent systems, and enterprise networks.
          </p>
        </div>

        {/* Bento/Grid Layout of Modern Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200/60 dark:border-slate-700/65 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-slate-600 flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-sans font-bold text-base text-gray-950 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tag List */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 text-xs font-sans text-gray-700 dark:text-slate-300 font-medium hover:border-blue-500/30 hover:bg-blue-50/20 dark:hover:border-blue-400/20 dark:hover:bg-blue-950/10 cursor-default transition-all"
                      >
                        <div className="flex items-center gap-1.5">
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="font-mono text-[9px] font-semibold text-blue-500 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/50 px-1 py-0.5 rounded border border-blue-100/30">
                              {skill.level}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer details / line indicator showing system completeness */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-700/50 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-gray-400 dark:text-slate-500 uppercase tracking-wider">
                    {category.skills.length} Items verified
                  </span>
                  <div className="h-1 w-12 rounded-full bg-blue-600/30 group-hover:bg-blue-600 group-hover:w-16 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
