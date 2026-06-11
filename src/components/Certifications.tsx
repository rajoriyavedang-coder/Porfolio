import { motion } from 'motion/react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 bg-[#FAFAFA] dark:bg-slate-900 transition-colors duration-300 relative"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Industry Credentials
          </span>
          <h2 className="text-3xl font-bold font-sans text-gray-900 dark:text-white tracking-tight mt-1">
            Certifications &amp; Badges
          </h2>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-2 max-w-xl">
            My verified industrial knowledge certified by leading tech organizations including Cisco Networking Academy and Google Cloud.
          </p>
        </div>

        {/* Clean Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-gray-200/50 dark:border-slate-700/60 flex flex-col justify-between hover:shadow-md hover:border-gray-300 dark:hover:border-slate-600 transition-all text-left relative group"
            >
              {/* Badge visual wrapper */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {cert.badgeUrl ? (
                    <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img
                        src={cert.badgeUrl}
                        alt={`${cert.name} Credly Badge`}
                        className="w-12 h-12 object-contain group-hover:scale-105 transition-transform select-none"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Award size={22} />
                    </div>
                  )}

                  {cert.date && (
                    <span className="font-mono text-[10px] bg-gray-50 dark:bg-slate-900 text-gray-400 dark:text-slate-500 py-0.5 px-1.5 rounded">
                      {cert.date}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-gray-950 dark:text-white leading-tight min-h-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="font-sans text-[11px] text-gray-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Direct verification action link footer */}
              <div className="mt-5 pt-3.5 border-t border-gray-100 dark:border-slate-700/50 flex items-center justify-between">
                <span className="flex items-center gap-1 font-mono text-[9px] text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 px-1.5 py-0.5 rounded border border-emerald-100/10">
                  <CheckCircle size={9} /> Verified ID
                </span>

                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-sans text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  Verify
                  <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
