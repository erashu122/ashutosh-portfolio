import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Zap,
  Shield,
  Database,
  Code2,
  Sparkles,
} from 'lucide-react'
import TypingRoles from './TypingRoles'
import { PROFILE, STATS } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const STAT_ICONS = {
  folder: Code2,
  code: Zap,
  star: Sparkles,
  git: Database,
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-glow bg-[size:60px_60px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mint-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-shell relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Main Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            <motion.div variants={item} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                Available for new opportunities
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ink-100 leading-[1.1]"
            >
              Hi, I am{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-mint-400 glow-text">
                {PROFILE.name.split(' ')[0]}
              </span>
              .
            </motion.h1>

            <motion.div variants={item} className="mt-4">
              <TypingRoles
                roles={[
                  "Full Stack Developer",
                  "Java Backend Developer",
                  "Python Developer",
                  "React Developer",
                  "DevOps Learner",
                ]}
              />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-ink-400 text-base md:text-lg leading-relaxed"
            >
              {PROFILE.blurb}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="btn-primary group"
              >
                <Zap size={16} className="group-hover:animate-pulse" />
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={16} />
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={item}
              className="mt-8 flex items-center gap-3"
            >
              {[
                { href: PROFILE.github, icon: Github, label: 'GitHub' },
                { href: PROFILE.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${PROFILE.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] text-ink-400 transition-all duration-200 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Dashboard Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="glass-card p-6 space-y-5">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-violet-400" />
                    <span className="font-mono text-sm text-ink-300">dev_profile.sh</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-mint-500/60" />
                  </div>
                </div>

                {/* Code Block */}
                <div className="font-mono text-sm space-y-1.5">
                  <div className="text-ink-500">
                    <span className="text-violet-400">const</span>{' '}
                    <span className="text-mint-400">engineer</span>{' '}
                    <span className="text-ink-500">=</span>{' '}
                    <span className="text-cyan-400">{'{'}</span>
                  </div>
                  {[
                    { key: 'name', value: `"${PROFILE.name}"`, color: 'text-mint-400' },
                    { key: 'role', value: '"Full-Stack Engineer"', color: 'text-violet-400' },
                    { key: 'based', value: `"${PROFILE.location}"`, color: 'text-mint-400' },
                    { key: 'focus', value: '["DX", "performance", "scale"]', color: 'text-violet-400' },
                  ].map((field) => (
                    <div key={field.key} className="pl-4 text-ink-400">
                      <span className="text-cyan-400">{field.key}</span>
                      <span className="text-ink-500">: </span>
                      <span className={field.color}>{field.value}</span>
                      <span className="text-ink-500">,</span>
                    </div>
                  ))}
                  <div className="text-cyan-400">{'}'}</div>
                  <div className="text-ink-500">
                    <span className="text-violet-400">//</span> always shipping
                    <span className="inline-block w-2 h-4 bg-violet-400 ml-1 animate-blink" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {STATS.map((stat) => {
                    const Icon = STAT_ICONS[stat.icon] ?? Code2
                    return (
                      <div
                        key={stat.label}
                        className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 hover:border-violet-500/20 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon size={14} className="text-violet-400" />
                          <span className="text-[10px] font-mono text-ink-500 uppercase tracking-wider">
                            {stat.label}
                          </span>
                        </div>
                        <div className="text-xl font-display font-bold text-ink-100">
                          {stat.value}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <Shield size={12} className="text-mint-400" />
                    <span className="text-[10px] font-mono text-mint-400">System Online</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-mint-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-ink-500">Active</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-violet-500/20 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-mint-500/20 rounded-xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-ink-500 hover:text-violet-400 transition-colors"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
