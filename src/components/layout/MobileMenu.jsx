import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'

export default function MobileMenu({ isOpen, links, onNavigate, whatsappLink, onClose }) {
  useEffect(() => {
    if (!isOpen) return

    // Prevent body scrolling
    document.body.style.overflow = 'hidden'

    // Close on ESC
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-50 flex flex-col justify-center bg-[#0B0D12] px-8 md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:rotate-90 hover:bg-white/10"
              aria-label="Close Menu"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Navigation */}
            <ul className="flex flex-col gap-3">
              {links.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.45,
                  }}
                >
                  <Link
                    to={link.href}
                    onClick={() => onNavigate(link.name)}
                    className="group flex items-center justify-between border-b border-white/10 py-4 font-['Space_Grotesk'] text-4xl font-semibold text-white transition-colors duration-300 hover:text-[#B6FF3B]"
                  >
                    {link.name}

                    <ArrowUpRight className="h-6 w-6 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.4,
              }}
              className="mt-12 flex flex-col gap-6"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-fit items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B0D12]"
              >
                <span className="relative z-10">Let's talk</span>

                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B] transition-transform duration-300 group-hover:translate-y-0" />
              </a>

              <div className="flex items-center gap-3 text-sm text-white/60">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B6FF3B] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#B6FF3B]" />
                </span>
                Available for freelance work
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
