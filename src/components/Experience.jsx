import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'
import { EXPERIENCE } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="relative py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="eyebrow">My Journey</p>
          <h2 className="section-title">Education & Certifications.</h2>
        </motion.div>

        <ol className="relative mt-14 ml-3 border-l border-white/10 sm:ml-6">
          {EXPERIENCE.map((exp, i) => (
            <motion.li
              key={exp.company}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="relative pb-14 pl-8 last:pb-0 sm:pl-12"
            >
              <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-violet-400/50 bg-base-950">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              </span>

              <div className="glass-panel rounded-2xl p-6 transition-colors hover:border-violet-400/30">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink-100">
                    {exp.role}
                  </h3>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-ink-500">
                    <Calendar size={13} /> {exp.period}
                  </span>
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-violet-400">
                  <GraduationCap size={14} /> {exp.company}
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2 text-sm leading-relaxed text-ink-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
