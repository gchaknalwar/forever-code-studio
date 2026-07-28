import { motion } from 'framer-motion'
import logo from '../assets/forever-code-logo.png'

export default function ComingSoon() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-96 w-96 animate-pulse rounded-full bg-white/10 blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 animate-pulse rounded-full bg-gray-400/10 blur-[150px]" />
      </div>

      {/* Floating Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Forever Code Studio"
          className="mx-auto mb-8 h-32 w-32 object-contain drop-shadow-[0_0_40px_white]"
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        />

        {/* Brand */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-2 text-center text-lg uppercase tracking-[8px] text-gray-400"
        >
          Forever Code Studio
        </motion.h2>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center text-5xl font-extrabold text-white"
        >
          Coming Soon
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mx-auto mt-6 h-[3px] rounded-full bg-white"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-8 max-w-md text-center leading-8 text-gray-400"
        >
          Crafting premium websites, AI solutions, modern applications, and digital experiences.
          <br />
          <span className="font-semibold text-white">Launching Something Extraordinary.</span>
        </motion.p>

        Status
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_20px_#4ade80]" />
          <span className="tracking-wider text-gray-300">Website Under Development</span>
        </motion.div>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{ scale: 0.96 }}
          className="group relative mt-10 w-full overflow-hidden rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
        >
          {/* Shine Effect */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <span className="relative flex items-center justify-center gap-3">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
            Launching Soon
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </span>
        </motion.button>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 animate-ping rounded-full bg-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
