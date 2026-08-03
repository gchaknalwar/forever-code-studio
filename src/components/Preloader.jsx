import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Full-screen intro loading animation — shows on every page load for
 * ~2 seconds before revealing the site. A minimal geometric "bot" built
 * from brand shapes (not a generic clipart robot) with blinking eyes and
 * a pulsing infinity core, plus a live percentage counter.
 */
export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [blink, setBlink] = useState(false)

  useEffect(() => {
    const duration = 2000
    const start = performance.now()

    let raf
    const tick = (now) => {
      const elapsed = now - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (elapsed < duration) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(onComplete, 250)
      }
    }
    raf = requestAnimationFrame(tick)

    const blinkInterval = setInterval(() => {
      setBlink(true)
      setTimeout(() => setBlink(false), 140)
    }, 1300)

    return () => {
      cancelAnimationFrame(raf)
      clearInterval(blinkInterval)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0B0D12]"
    >
      {/* ================= BOT FACE ================= */}
      <div className="relative h-28 w-28 md:h-32 md:w-32">
        {/* Antenna */}
        <motion.div
          className="absolute -top-6 left-1/2 h-6 w-[2px] -translate-x-1/2 bg-white/20"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -top-8 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#B6FF3B]"
          animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Head */}
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03]">
          {/* Pulsing infinity core, faint, behind the eyes */}
          <svg viewBox="0 0 240 118" className="absolute w-20 opacity-[0.12]">
            <motion.path
              d="M72 26C57.088 26 45 38.088 45 53C45 67.912 57.088 80 72 80C82.5 80 89.5 73 96 63L102 53L108 43C114.5 33 121.5 26 132 26C146.912 26 159 38.088 159 53C159 67.912 146.912 80 132 80C121.5 80 114.5 73 108 63L102 53L96 43C89.5 33 82.5 26 72 26Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="6"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>

          {/* Eyes */}
          <div className="relative flex items-center gap-4">
            <motion.span
              className="block h-5 w-3.5 rounded-full bg-[#5B6CFF]"
              animate={{ scaleY: blink ? 0.1 : 1 }}
              transition={{ duration: 0.12 }}
            />
            <motion.span
              className="block h-5 w-3.5 rounded-full bg-[#5B6CFF]"
              animate={{ scaleY: blink ? 0.1 : 1 }}
              transition={{ duration: 0.12 }}
            />
          </div>
        </div>
      </div>

      {/* ================= PROGRESS ================= */}
      <div className="mt-10 flex w-48 flex-col items-center gap-3">
        <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-mono text-xs tracking-widest text-white/40">{progress}%</span>
      </div>

      <p className="mt-6 font-['Space_Grotesk'] text-xs tracking-[0.3em] text-white/30 uppercase">
        Forever Code Studio
      </p>
    </motion.div>
  )
}
