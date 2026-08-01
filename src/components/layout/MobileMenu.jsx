import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

/**
 * Full-screen mobile nav overlay — extracted out of Navbar so the menu
 * markup/animation lives in its own file instead of being inlined.
 *
 * Props:
 *  - isOpen: whether the overlay is shown
 *  - links: [{ name, href }]
 *  - onNavigate(linkName): called when a link is tapped (closes menu, sets active tab)
 *  - whatsappLink: full wa.me URL for the "Let's talk" CTA
 */
export default function MobileMenu({ isOpen, links, onNavigate, whatsappLink }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col justify-center bg-[#0B0D12] px-8 md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {links.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4, ease: 'easeOut' }}
              >
                <Link
                  to={link.href}
                  onClick={() => onNavigate(link.name)}
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
            className="mt-10 flex flex-col gap-5"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-fit items-center justify-center gap-1.5 overflow-hidden rounded-full bg-white py-3.5 pr-5 pl-6 text-sm font-semibold text-[#0B0D12]"
            >
              <span className="relative z-10">Let's talk</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B] transition-transform duration-300 group-hover:translate-y-0" />
            </a>

            <div className="flex items-center gap-2 text-sm text-white/50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B6FF3B] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B6FF3B]" />
              </span>
              Available for freelance work
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
