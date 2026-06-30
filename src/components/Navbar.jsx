import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`section-shell flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-base-900/70 backdrop-blur-xl shadow-lg shadow-black/20'
            : 'border-transparent bg-transparent'
        }`}
      >
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 font-display text-lg font-semibold text-ink-100"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-violet-400">
            <Terminal size={16} strokeWidth={2.5} />
          </span>
          ashutosh<span className="text-violet-400">.</span>dev
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`relative rounded-lg px-4 py-2 font-mono text-sm transition-colors ${
                  active === link.id
                    ? 'text-ink-100'
                    : 'text-ink-400 hover:text-ink-200'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/10"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav('contact')}
          className="hidden md:inline-flex btn-secondary !px-4 !py-2 text-xs"
        >
          Let's Talk
        </button>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink-200"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-shell mt-2 md:hidden"
        >
          <div className="glass-panel flex flex-col gap-1 rounded-2xl p-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`rounded-lg px-4 py-3 text-left font-mono text-sm ${
                  active === link.id
                    ? 'bg-white/[0.06] text-ink-100'
                    : 'text-ink-400'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
