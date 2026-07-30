import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found — Forever Code Studio'
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0B0D12] px-6">
      {/* Ambient glow */}
      <motion.div
        className="absolute h-[30rem] w-[30rem] rounded-full bg-[#5B6CFF]/15 blur-[120px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Broken infinity mark — signature 404 moment */}
      <motion.svg
        viewBox="0 0 240 118"
        className="relative mb-8 h-auto w-64 md:w-80"
        initial="hidden"
        animate="show"
      >
        <motion.path
          d="M72 26C57.088 26 45 38.088 45 53C45 67.912 57.088 80 72 80C82.5 80 89.5 73 96 63L100 56"
          fill="none"
          stroke="#5B6CFF"
          strokeWidth="9"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <motion.path
          d="M108 43C114.5 33 121.5 26 132 26C146.912 26 159 38.088 159 53C159 67.912 146.912 80 132 80C121.5 80 114.5 73 108 63L104 56"
          fill="none"
          stroke="#B6FF3B"
          strokeWidth="9"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: 'easeInOut' }}
        />
      </motion.svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
        className="relative text-center"
      >
        <h1 className="mb-4 font-['Space_Grotesk'] text-6xl font-semibold tracking-tight text-white md:text-7xl">
          404
        </h1>
        <p className="mx-auto mb-10 max-w-sm text-lg text-white/50">
          This page went off the loop. Let's get you back to something that actually works.
        </p>

        <Link
          to="/"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white py-3.5 pr-6 pl-5 text-sm font-semibold text-[#0B0D12]"
        >
          <ArrowLeft className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="relative z-10">Back to home</span>
          <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B] transition-transform duration-300 group-hover:translate-y-0" />
        </Link>
      </motion.div>
    </main>
  )
}
