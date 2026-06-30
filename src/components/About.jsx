import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Wrench, Layers } from 'lucide-react'
import { SKILLS, PROFILE } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const ICONS = {
  Languages: Code2,
  Frameworks: Layers,
  Databases: Database,
  'Tools & Cloud': Wrench,
}

export default function About() {
  return (
    <section id="about" aria-label="About me" className="relative py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="eyebrow">About</p>
          <h2 className="section-title">Who I am, in short.</h2>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: terminal-style summary */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="glass-panel sticky top-28 rounded-2xl p-1">
              <div className="rounded-xl bg-base-900 p-6 font-mono text-sm leading-loose text-ink-400">
                <div className="mb-4 flex items-center gap-1.5 border-b border-white/5 pb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-mint-400/70" />
                  <span className="ml-2 text-xs text-ink-500">whoami.sh</span>
                </div>
                <p><span className="text-mint-400">$</span> whoami</p>
                <p className="text-ink-200">{PROFILE.name} — Software Engineer</p>
                <p className="mt-3"><span className="text-mint-400">$</span> cat mission.txt</p>
                <p className="text-ink-200">
                  "Turn ambiguous problems into reliable, elegant software — and
                  enjoy the craft along the way."
                </p>
                <p className="mt-3"><span className="text-mint-400">$</span> location --show</p>
                <p className="text-ink-200">{PROFILE.location}</p>
                <p className="mt-3"><span className="text-mint-400">$</span> <span className="animate-blink">▍</span></p>
              </div>
            </div>
          </motion.div>

          {/* Right: narrative + skills grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex flex-col gap-10"
          >
            <div className="space-y-4 text-ink-400 leading-relaxed">
              <p>
                I'm a full-stack engineer with a passion for taking products from
                a rough idea to something real users rely on every day. I enjoy
                untangling hard problems — whether that's a gnarly data model, a
                race condition under load, or an interface that just feels
                <em className="text-ink-200 not-italic"> right</em>.
              </p>
              <p>
                My background spans building consumer-facing dashboards,
                designing event-driven backend systems, and operating
                infrastructure at scale. I care equally about the user-facing
                pixel and the database index three layers down.
              </p>
              <p>
                Outside of work, I contribute to open-source tooling, write
                about distributed systems, and am usually mid-way through
                refactoring a personal project that didn't need refactoring.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-ink-100">
                Core Technical Skills
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SKILLS.map((group) => {
                  const Icon = ICONS[group.category] ?? Code2
                  return (
                    <div
                      key={group.category}
                      className="glass-panel rounded-xl p-5 transition-colors hover:border-violet-400/30"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-violet-400">
                          <Icon size={16} />
                        </span>
                        <h4 className="font-mono text-sm font-medium text-ink-200">
                          {group.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="tag-chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
