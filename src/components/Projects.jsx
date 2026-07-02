import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Github,
  ExternalLink,
  Dumbbell,
  User,
  Cloud,
  ShoppingCart,
  LayoutDashboard,
  Brain,
  MessageSquare,
  BarChart3,
  Globe,
  Filter,
  Grid3X3,
  List,
  ChevronRight,
  CircleDot,
  Layers,
  Calendar,
  Code2,
} from 'lucide-react'
import { PROJECTS } from '../data'

const ICON_MAP = {
  dumbbell: Dumbbell,
  user: User,
  cloud: Cloud,
  shopping: ShoppingCart,
  kanban: LayoutDashboard,
  brain: Brain,
  message: MessageSquare,
  chart: BarChart3,
  globe: Globe,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const filtered =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.status === filter)

  const stats = {
    total: PROJECTS.length,
    completed: PROJECTS.filter((p) => p.status === 'completed').length,
    inProgress: PROJECTS.filter((p) => p.status === 'in-progress').length,
    technologies: [...new Set(PROJECTS.flatMap((p) => p.stack))].length,
  }

  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid bg-[size:40px_40px] opacity-30 pointer-events-none" />

      <div className="section-shell relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse-glow" />
            <span className="eyebrow">Project Dashboard</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="mt-3 text-ink-400 max-w-xl">
            A curated collection of my work — from e-commerce platforms to microservices architecture and AI-powered tools.
          </p>
        </motion.div>

        {/* Dashboard Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
        >
          {[
            { label: 'Total Projects', value: stats.total, icon: Layers, color: 'violet' },
            { label: 'Completed', value: stats.completed, icon: CircleDot, color: 'mint' },
            { label: 'In Progress', value: stats.inProgress, icon: Code2, color: 'cyan' },
            { label: 'Technologies', value: stats.technologies, icon: Filter, color: 'violet' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="dashboard-card p-4 flex items-center gap-3"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  stat.color === 'violet'
                    ? 'bg-violet-500/10 text-violet-400'
                    : stat.color === 'mint'
                    ? 'bg-mint-500/10 text-mint-400'
                    : 'bg-cyan-500/10 text-cyan-400'
                }`}
              >
                <stat.icon size={18} />
              </div>
              <div>
                <div className="text-xl font-display font-bold text-ink-100">{stat.value}</div>
                <div className="text-[10px] font-mono text-ink-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Filter & View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
        >
          <div className="flex items-center gap-2">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'completed', label: 'Completed' },
              { key: 'in-progress', label: 'In Progress' },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === f.key
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                    : 'text-ink-400 hover:text-ink-200 border border-transparent hover:border-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-base-800/50 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${
                viewMode === 'grid'
                  ? 'bg-violet-500/20 text-violet-400'
                  : 'text-ink-500 hover:text-ink-300'
              }`}
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all ${
                viewMode === 'list'
                  ? 'bg-violet-500/20 text-violet-400'
                  : 'text-ink-500 hover:text-ink-300'
              }`}
            >
              <List size={16} />
            </button>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter + viewMode}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
                : 'flex flex-col gap-4'
            }
          >
            {filtered.map((project, idx) => {
              const Icon = ICON_MAP[project.icon] ?? Code2
              const isViolet = project.accent === 'violet'

              if (viewMode === 'grid') {
                return (
                  <motion.div
                    key={project.title}
                    variants={item}
                    layout
                    className="dashboard-card group"
                  >
                    {/* Card Header */}
                    <div className="p-5 pb-0">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            isViolet
                              ? 'bg-violet-500/10 text-violet-400'
                              : 'bg-mint-500/10 text-mint-400'
                          }`}
                        >
                          <Icon size={22} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`status-badge ${project.status}`}>
                            <CircleDot size={8} />
                            {project.status === 'in-progress' ? 'In Progress' : 'Completed'}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-display text-lg font-semibold text-ink-100 mb-2 group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-ink-400 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="px-5 pb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="tag-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-5 py-4 border-t border-white/[0.04] flex items-center justify-between">
                      <div className="flex items-center gap-3 text-ink-500 text-xs font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {project.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-ink-400 hover:text-ink-100 hover:bg-white/[0.05] transition-all"
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-ink-400 hover:text-ink-100 hover:bg-white/[0.05] transition-all"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                        isViolet ? 'shadow-card-hover' : 'shadow-glow-mint'
                      }`}
                    />
                  </motion.div>
                )
              }

              // List View
              return (
                <motion.div
                  key={project.title}
                  variants={item}
                  layout
                  className="dashboard-card group flex flex-col md:flex-row md:items-center gap-4 p-5"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isViolet
                        ? 'bg-violet-500/10 text-violet-400'
                        : 'bg-mint-500/10 text-mint-400'
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display font-semibold text-ink-100 group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`status-badge ${project.status}`}>
                        <CircleDot size={8} />
                        {project.status === 'in-progress' ? 'In Progress' : 'Completed'}
                      </span>
                    </div>
                    <p className="text-sm text-ink-400 line-clamp-1 mb-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span key={tech} className="tag-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono text-ink-500">{project.year}</span>
                    <div className="flex items-center gap-1">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-ink-400 hover:text-ink-100 hover:bg-white/[0.05] transition-all"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      <ChevronRight size={16} className="text-ink-600" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Code2 size={40} className="mx-auto text-ink-600 mb-4" />
            <p className="text-ink-400">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
