import React from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Terminal,
  MapPin,
  Globe,
  Server,
  Lock,
  Database,
  GitBranch,
} from 'lucide-react'
import { PROFILE, SKILLS } from '../data'

const ICONS = {
  Languages: Code2,
  Frontend: Globe,
  Backend: Server,
  Security: Lock,
  Database: Database,
  Tools: GitBranch,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-grid bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="section-shell relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left: Terminal Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="glass-card overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-violet-400" />
                  <span className="font-mono text-xs text-ink-400">whoami.sh</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-mint-500/50" />
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-5 font-mono text-sm space-y-4">
                <div>
                  <span className="text-violet-400">$</span>{' '}
                  <span className="text-ink-300">whoami</span>
                  <div className="mt-1 text-ink-100">
                    {PROFILE.name} - Software Engineer
                  </div>
                </div>

                <div>
                  <span className="text-violet-400">$</span>{' '}
                  <span className="text-ink-300">cat mission.txt</span>
                  <div className="mt-1 text-ink-300 italic border-l-2 border-violet-500/30 pl-3">
                    "Turn ambiguous problems into reliable, elegant software - and
                    enjoy the craft along the way."
                  </div>
                </div>

                <div>
                  <span className="text-violet-400">$</span>{' '}
                  <span className="text-ink-300">location --show</span>
                  <div className="mt-1 flex items-center gap-2 text-mint-400">
                    <MapPin size={14} />
                    {PROFILE.location}
                  </div>
                </div>

                <div>
                  <span className="text-violet-400">$</span>{' '}
                  <span className="text-ink-300">skills --list</span>
                  <div className="mt-2 grid grid-cols-2 gap-1.5">
                    {SKILLS.slice(0, 4).map((group) => {
                      const Icon = ICONS[group.category] ?? Code2
                      return (
                        <div
                          key={group.category}
                          className="flex items-center gap-1.5 text-xs text-ink-400"
                        >
                          <Icon size={12} className="text-violet-400" />
                          {group.category}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-violet-400">
                  <span>$</span>
                  <span className="inline-block w-2 h-4 bg-violet-400 animate-blink" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-mint-400 animate-pulse" />
                <span className="eyebrow">Technical Arsenal</span>
              </div>
              <h2 className="section-title">Core Technical Skills</h2>
              <p className="mt-3 text-ink-400 max-w-lg">
                My toolkit spans the full stack - from JVM-based backends to modern frontend frameworks.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {SKILLS.map((group) => {
                const Icon = ICONS[group.category] ?? Code2
                return (
                  <motion.div
                    key={group.category}
                    variants={item}
                    className="dashboard-card p-5 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-display font-semibold text-ink-100">
                        {group.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-ink-300 hover:border-violet-500/30 hover:text-violet-300 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
