import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-sm text-ink-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React &amp; Tailwind CSS.</p>
        <div className="flex items-center gap-4">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-ink-200">
            <Github size={16} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-ink-200">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="hover:text-ink-200">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
