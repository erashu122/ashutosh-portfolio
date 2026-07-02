import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = NAV_LINKS.map((l) => l.id)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-base-950/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="section-shell">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNav('home')
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                <Terminal size={16} className="text-violet-400" />
              </div>
              <span className="font-display font-bold text-ink-100 text-lg">
                Ashutosh<span className="text-violet-400">.</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.id
                      ? 'text-violet-300'
                      : 'text-ink-400 hover:text-ink-200'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-violet-500/10 border border-violet-500/20 rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-ink-400 hover:text-ink-100 hover:bg-white/[0.05] transition-all"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="section-shell">
              <div className="glass-card p-4 space-y-1 mt-2">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === link.id
                        ? 'bg-violet-500/10 text-violet-300 border border-violet-500/20'
                        : 'text-ink-400 hover:text-ink-200 hover:bg-white/[0.03]'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
