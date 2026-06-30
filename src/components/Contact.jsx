import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { PROFILE } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) {
    errors.message = 'Please write a short message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) {
      setErrors(validate({ ...values, [name]: value }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    // Simulate a network request — wire this up to your backend / email service.
    setTimeout(() => {
      setStatus('success')
      setValues({ name: '', email: '', message: '' })
      setTouched({})
    }, 900)
  }

  const fieldClass = (field) =>
    `w-full rounded-lg border bg-base-900 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 transition-colors focus:outline-none focus:ring-1 ${
      touched[field] && errors[field]
        ? 'border-red-400/50 focus:border-red-400/70 focus:ring-red-400/30'
        : 'border-white/10 focus:border-violet-400/50 focus:ring-violet-400/30'
    }`

  return (
    <section id="contact" aria-label="Contact" className="relative py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="eyebrow justify-center flex">Get In Touch</p>
          <h2 className="section-title">Let's build something.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink-400">
            Have a role, a project, or just want to talk shop? My inbox is
            always open — I try to reply within a day or two.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Direct links */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="glass-panel flex flex-col justify-between rounded-2xl p-8"
          >
            <div>
              <h3 className="font-display text-lg font-semibold text-ink-100">
                Direct Contact
              </h3>
              <p className="mt-2 text-sm text-ink-400">
                Prefer email or social? Reach me directly below.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-200 transition-colors hover:border-violet-400/40 hover:text-violet-400"
                >
                  <Mail size={16} /> {PROFILE.email}
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-200 transition-colors hover:border-violet-400/40 hover:text-violet-400"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-200 transition-colors hover:border-violet-400/40 hover:text-violet-400"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href={PROFILE.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-200 transition-colors hover:border-violet-400/40 hover:text-violet-400"
                >
                  <Twitter size={16} /> LeetCode
                </a>
              </div>
            </div>

            <p className="mt-8 font-mono text-xs text-ink-500">
              currently based in {PROFILE.location}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            onSubmit={handleSubmit}
            noValidate
            className="glass-panel rounded-2xl p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(touched.name && errors.name)}
                  aria-describedby="name-error"
                  placeholder="Jane Doe"
                  className={fieldClass('name')}
                />
                {touched.name && errors.name && (
                  <p id="name-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(touched.email && errors.email)}
                  aria-describedby="email-error"
                  placeholder="jane@company.com"
                  className={fieldClass('email')}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(touched.message && errors.message)}
                  aria-describedby="message-error"
                  placeholder="Tell me a bit about your project or role..."
                  className={`${fieldClass('message')} resize-none`}
                />
                {touched.message && errors.message && (
                  <p id="message-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === 'submitting' ? (
                'Sending…'
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="mt-4 flex items-center gap-2 text-sm text-mint-400"
              >
                <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
