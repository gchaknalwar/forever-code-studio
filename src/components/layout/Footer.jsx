import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, ArrowUp, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'

// lucide-react dropped brand/logo icons (Github, Twitter, Linkedin) in newer
// versions due to trademark reasons — using lightweight inline SVGs instead.
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
  </svg>
)
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
)
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 1.5h3.68l-8.04 9.19L24 22.5h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.5h7.6l5.24 6.93 6.06-6.93zm-1.3 18.78h2.04L6.5 3.6H4.3l13.3 16.68z" />
  </svg>
)

const SOCIALS = [
  { icon: GithubIcon, href: 'https://github.com/forevercodestudio', label: 'GitHub' },
  {
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/forever-code-studio-5192b6425/?skipRedirect=true',
    label: 'LinkedIn',
  },
  { icon: TwitterIcon, href: 'https://x.com/forevercodestud', label: 'Twitter' },
  { icon: Mail, href: 'mailto:forevercodestudio@gmail.com', label: 'Email' },
]

const FOOTER_LINKS = [
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#work' },
  { name: 'Story', href: '/#story' },
  { name: 'Team', href: '/#team' },
  { name: 'Reviews', href: '/#reviews' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

function useLocalTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      )
    }
    update()
    const id = setInterval(update, 1000 * 30)
    return () => clearInterval(id)
  }, [])

  return time
}

export default function Footer() {
  const localTime = useLocalTime()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0B0D12]">
      {/* ================= MARQUEE TICKER ================= */}
      <div className="relative overflow-hidden border-b border-white/10 py-3 whitespace-nowrap">
        <motion.div
          className="flex gap-8 font-['Space_Grotesk'] text-sm font-medium tracking-widest text-white/30 uppercase"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 gap-8">
              {Array.from({ length: 6 }).map((_, j) => (
                <span key={j} className="flex items-center gap-8">
                  Available for work
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B6FF3B]" />
                  Let's build something
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5B6CFF]" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= MAIN CTA ================= */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-8 border-b border-white/10 pb-14 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 text-sm font-medium tracking-wide text-white/40">
              Got a project in mind?
            </p>
            <a
              href="mailto:forevercodestudio@gmail.com"
              className="group inline-flex flex-wrap items-center gap-2 font-['Space_Grotesk'] font-semibold tracking-tight text-white sm:gap-3"
            >
              <span className="relative text-2xl break-all sm:text-4xl sm:break-normal md:text-6xl">
                @forevercodestudio
                <span className="absolute -bottom-1 left-0 h-[2px] w-full overflow-hidden bg-white/20">
                  <span className="block h-full w-full -translate-x-full bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                </span>
              </span>
              <ArrowUpRight className="h-6 w-6 shrink-0 text-white/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white sm:h-8 sm:w-8 md:h-10 md:w-10" />
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-xs text-white/50">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B6FF3B] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B6FF3B]" />
            </span>
            Hyderabad, IN &middot; {localTime || '--:--'} local time
          </div>
        </motion.div>

        {/* ================= LINKS + SOCIALS ROW ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-col gap-8 pt-10 md:flex-row md:items-center md:justify-between"
        >
          {/* Logo + tagline */}
          <div>
            <Link to="/" className="group flex w-fit items-center">
              <Logo
                variant="light"
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-white/30">
              Designing and building products for founders who move fast.
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-sm font-medium text-white/50 transition-colors duration-200 hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                <span className="absolute inset-0 rounded-full bg-[#5B6CFF]/0 transition-colors duration-300 group-hover:bg-[#5B6CFF]/10" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/5 pt-6 md:flex-row">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Forever Code Studio &middot; All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-medium text-white/40 transition-colors duration-200 hover:text-white"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-white/30">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
