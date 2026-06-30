import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import TypingRoles from './TypingRoles'
import { PROFILE } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[400px] rounded-full bg-mint-500/10 blur-[100px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-shell relative z-10 grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]"
      >
        <div>
          <motion.p variants={item} className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-400 animate-pulse" />
            Available for new opportunities
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-bold leading-[1.1] text-ink-100 sm:text-5xl lg:text-6xl"
          >
            Hi, I'm {PROFILE.name.split(' ')[0]}.
            <br />
            I build software that{' '}
            <span className="bg-gradient-to-r from-violet-400 to-mint-400 bg-clip-text text-transparent">
              just works.
            </span>
          </motion.h1>

          <motion.div variants={item} className="mt-5 h-7 font-mono text-base sm:text-lg">
            <TypingRoles roles={PROFILE.roles} />
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-ink-400">
            {PROFILE.blurb}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            {[
              { href: PROFILE.github, icon: Github, label: 'GitHub' },
              { href: PROFILE.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${PROFILE.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-ink-400 transition-all hover:border-violet-400/40 hover:text-violet-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Terminal-style decorative card */}
        <motion.div variants={item} className="hidden md:block">
          <div className="glass-panel rounded-2xl p-1 shadow-glow">
            <div className="rounded-xl bg-base-900 p-5 font-mono text-xs leading-relaxed text-ink-400">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-mint-400/70" />
              </div>
              <p><span className="text-violet-400">const</span> engineer = {'{'}</p>
              <p className="pl-4">name: <span className="text-mint-400">"{PROFILE.name}"</span>,</p>
              <p className="pl-4">role: <span className="text-mint-400">"Full-Stack Engineer"</span>,</p>
              <p className="pl-4">based: <span className="text-mint-400">"{PROFILE.location}"</span>,</p>
              <p className="pl-4">focus: [<span className="text-mint-400">"DX"</span>, <span className="text-mint-400">"performance"</span>, <span className="text-mint-400">"scale"</span>],</p>
              <p>{'}'};</p>
              <p className="mt-3 text-ink-500">// always shipping <span className="animate-blink">▍</span></p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-500"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
