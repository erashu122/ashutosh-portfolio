import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'
import { PROFILE } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = 'Invalid email'
    if (!formData.message.trim()) errs.message = 'Message is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
    { icon: MapPin, label: 'Location', value: PROFILE.location, href: null },
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: PROFILE.github },
    { icon: Linkedin, label: 'LinkedIn', href: PROFILE.linkedin },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-grid bg-[size:40px_40px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-mint-400 animate-pulse-glow" />
            <span className="eyebrow">Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="mt-3 text-ink-400 max-w-xl">
            Have a project in mind or want to collaborate? Drop me a message — I am always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left: Contact Info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  variants={item}
                  className="dashboard-card p-4 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                    <info.icon size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-ink-500 uppercase tracking-wider">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-ink-200 hover:text-violet-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-sm text-ink-200">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={item} className="dashboard-card p-5">
              <h3 className="font-display font-semibold text-ink-100 mb-4">
                Connect Online
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-ink-300 hover:border-violet-500/30 hover:text-violet-300 hover:bg-violet-500/5 transition-all text-sm"
                  >
                    <social.icon size={16} />
                    {social.label}
                    <ArrowUpRight size={12} className="opacity-50" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="dashboard-card p-6 md:p-8 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <Send size={16} className="text-violet-400" />
                <span className="font-mono text-sm text-ink-300">send_message.sh</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-ink-500 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-ink-100 placeholder:text-ink-600 transition-all focus:outline-none focus:border-violet-500/50 ${
                      errors.name ? 'border-red-500/50' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-mono text-ink-500 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-ink-100 placeholder:text-ink-600 transition-all focus:outline-none focus:border-violet-500/50 ${
                      errors.email ? 'border-red-500/50' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-ink-500 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-ink-100 placeholder:text-ink-600 transition-all focus:outline-none focus:border-violet-500/50 resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-white/[0.08]'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full btn-primary justify-center ${
                  submitted ? 'bg-mint-600' : ''
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
