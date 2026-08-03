import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Mail, CheckCircle2, XCircle, Loader2 } from 'lucide-react'

const PROJECT_TYPES = ['Web App', 'Mobile App', 'E-commerce', 'Branding', 'Other']

const initialForm = { name: '', email: '', projectType: 'Web App', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.message.trim()) next.message = 'Tell us a bit about your project'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')

    try {
      // ---------------------------------------------------------------
      // BACKEND HOOKUP: replace the block below with your real API call
      // once the backend is ready, e.g.:
      //
      // const res = await fetch("https://your-api.com/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Request failed");
      // ---------------------------------------------------------------
      await new Promise((resolve) => setTimeout(resolve, 1400))

      setStatus('success')
      setForm(initialForm)
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="relative border-t border-white/5 bg-[#0B0D12] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* ================= LEFT: PITCH ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-2"
          >
            <p className="mb-3 text-sm font-medium tracking-widest text-white/40 uppercase">
              Get in touch
            </p>
            <h2 className="mb-6 font-['Space_Grotesk'] text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Let's build something worth shipping.
            </h2>
            <p className="mb-10 leading-relaxed text-white/50">
              Tell us about your project and timeline. We reply within one business day — usually a
              lot sooner.
            </p>

            <a
              href="mailto:forevercodestudio@gmail.com"
              className="group inline-flex flex-wrap items-center gap-2 font-medium md:gap-3"
            >
              <Mail className="h-4 w-4 shrink-0 text-white/40" />
              <span className="relative text-base break-all text-white sm:text-lg sm:break-normal">
                forevercodestudio@gmail.com
                <span className="absolute -bottom-0.5 left-0 h-px w-full overflow-hidden bg-white/20">
                  <span className="block h-full w-full -translate-x-full bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B] transition-transform duration-500 group-hover:translate-x-0" />
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="mt-10 flex items-center gap-2 text-xs text-white/50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B6FF3B] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B6FF3B]" />
              </span>
              Currently available for new projects
            </div>
          </motion.div>

          {/* ================= RIGHT: FORM ================= */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col gap-5 lg:col-span-3"
            noValidate
          >
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-white transition-colors duration-200 outline-none placeholder:text-white/30 ${
                  errors.name ? 'border-red-500/60' : 'border-white/10 focus:border-[#5B6CFF]/60'
                }`}
              />
              {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-white transition-colors duration-200 outline-none placeholder:text-white/30 ${
                  errors.email ? 'border-red-500/60' : 'border-white/10 focus:border-[#5B6CFF]/60'
                }`}
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
            </div>

            {/* Project type */}
            <div className="flex flex-wrap gap-2">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setForm({ ...form, projectType: type })}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                    form.projectType === type
                      ? 'border-white bg-white text-[#0B0D12]'
                      : 'border-white/15 text-white/60 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`w-full resize-none rounded-xl border bg-white/[0.03] px-4 py-3.5 text-white transition-colors duration-200 outline-none placeholder:text-white/30 ${
                  errors.message ? 'border-red-500/60' : 'border-white/10 focus:border-[#5B6CFF]/60'
                }`}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-white py-3.5 text-sm font-semibold text-[#0B0D12] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="relative z-10 flex items-center gap-2">
                <AnimatePresence mode="wait">
                  {status === 'loading' ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </motion.span>
                  ) : status === 'success' ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-green-600"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Message sent!
                    </motion.span>
                  ) : status === 'error' ? (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-red-600"
                    >
                      <XCircle className="h-4 w-4" />
                      Something went wrong
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Send message
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
              <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B] transition-transform duration-300 group-hover:translate-y-0" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
