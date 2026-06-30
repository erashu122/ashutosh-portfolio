import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, FolderGit2, Dumbbell, UserRound, CloudSun } from 'lucide-react'
import { PROJECTS } from '../data'

const ICONS = {
  dumbbell: Dumbbell,
  user: UserRound,
  cloud: CloudSun,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function ProjectCard({ project, index }) {
  const accent = project.accent === 'mint' ? 'mint' : 'violet'
  const Icon = ICONS[project.icon] || FolderGit2
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ delay: (index % 2) * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-base-850/60 backdrop-blur-xl transition-all duration-300 hover:shadow-glow ${
        accent === 'mint' ? 'hover:border-mint-400/30' : 'hover:border-violet-400/30'
      }`}
    >
      {/* Visual header */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-base-800 to-base-900">
        <div
          className={`absolute -right-6 -top-6 h-32 w-32 rounded-full blur-2xl transition-opacity duration-500 ${
            accent === 'mint' ? 'bg-mint-500/20' : 'bg-violet-500/20'
          }`}
        />
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
            accent === 'mint' ? 'bg-mint-500/10' : 'bg-violet-500/10'
          }`}
        />
        <div
          className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border backdrop-blur-md transition-transform duration-300 group-hover:scale-110 ${
            accent === 'mint'
              ? 'border-mint-400/30 bg-mint-500/10'
              : 'border-violet-400/30 bg-violet-500/10'
          }`}
        >
          <Icon
            size={30}
            strokeWidth={1.8}
            className={accent === 'mint' ? 'text-mint-400' : 'text-violet-400'}
          />
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-ink-100">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="tag-chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-white/[0.06] pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 transition-colors hover:text-ink-100"
          >
            <Github size={16} /> Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                accent === 'mint'
                  ? 'text-mint-400 hover:text-mint-400/80'
                  : 'text-violet-400 hover:text-violet-400/80'
              }`}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="relative py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-title">Projects I've shipped.</h2>
          </div>
          <p className="max-w-xs text-sm text-ink-500">
            A mix of production systems and side projects — built end-to-end,
            from schema to ship.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
