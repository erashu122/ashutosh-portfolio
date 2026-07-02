import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Heart, ArrowUp } from 'lucide-react'
import { PROFILE } from '../data'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-white/[0.06]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="section-shell">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Terminal size={16} className="text-violet-400" />
            </div>
            <div>
              <span className="font-display font-bold text-ink-100">
                Ashutosh<span className="text-violet-400">.</span>
              </span>
              <p className="text-xs text-ink-500 mt-0.5">
                Built with <Heart size={10} className="inline text-red-400" /> and lots of coffee
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm text-ink-400">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-violet-300 transition-colors">
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-violet-300 transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-violet-300 transition-colors">
              Email
            </a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-ink-400 hover:text-violet-300 hover:border-violet-500/30 transition-all text-sm"
          >
            <ArrowUp size={14} />
            Top
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-xs text-ink-600 font-mono">
            &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
