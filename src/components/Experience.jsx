import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, ChevronRight } from 'lucide-react'
import { EXPERIENCE } from '../data'

const ICONS = {
  'B.Tech in Information Technology': GraduationCap,
  'Certifications': Award,
  'Additional Certifications': Award,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-grid bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse-glow" />
            <span className="eyebrow">My Journey</span>
          </div>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="mt-3 text-ink-400 max-w-xl">
            Building expertise through academic rigor and continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-mint-500/30 to-transparent" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, idx) => {
              const Icon = ICONS[exp.role] ?? Briefcase
              return (
                <motion.div
                  key={exp.role + idx}
                  variants={item}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-6 top-1 w-5 h-5 rounded-full bg-base-900 border-2 border-violet-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  </div>

                  <div className="dashboard-card p-6 group">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-ink-100 text-lg">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-ink-400">{exp.company}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-ink-400 shrink-0">
                        <ChevronRight size={12} className="text-violet-400" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point, pidx) => (
                        <li
                          key={pidx}
                          className="flex items-start gap-3 text-sm text-ink-300"
                        >
                          <span className="w-1 h-1 rounded-full bg-violet-400 mt-2 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
