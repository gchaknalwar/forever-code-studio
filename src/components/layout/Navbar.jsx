import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { name: 'Work', href: '/#work' },
  { name: 'Story', href: '/#story' },
  { name: 'Team', href: '/#team' },
  { name: 'Reviews', href: '/#reviews' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Work')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/10 bg-[#0B0D12]/80 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-lg'
            : 'border-b border-transparent bg-transparent py-6'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          {/* ================= LOGO ================= */}
          <Link to="/" className="group flex items-center">
            <Logo
              variant="light"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105 md:h-14"
            />
          </Link>

          {/* ================= DESKTOP NAV LINKS ================= */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => setActive(link.name)}
                  className="relative px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {link.name}
                  {active === link.name && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute right-4 -bottom-0.5 left-4 h-[2px] rounded-full bg-[#5B6CFF]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* ================= RIGHT SIDE: availability + CTA ================= */}
          <div className="hidden items-center gap-5 md:flex">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B6FF3B] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B6FF3B]" />
              </span>
              Available for work
            </div>

            <Link
              to="/#contact"
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white py-2 pr-3 pl-4 text-sm font-semibold text-[#0B0D12]"
            >
              <span className="relative z-10">Let's talk</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B] transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[60] text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-center bg-[#0B0D12] px-8 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: 'easeOut' }}
                >
                  <Link
                    to={link.href}
                    onClick={() => {
                      setActive(link.name)
                      setMenuOpen(false)
                    }}
                    className="block py-3 font-['Space_Grotesk'] text-4xl font-semibold text-white/90"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex items-center gap-2 text-sm text-white/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B6FF3B] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B6FF3B]" />
              </span>
              Available for freelance work
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
