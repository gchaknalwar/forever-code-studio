import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

const STATS = [
  { value: '40+', label: 'Projects shipped' },
  { value: '25+', label: 'Happy clients' },
  { value: '3+', label: 'Years building' },
  { value: '98%', label: 'On-time delivery' },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const line = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0B0D12]"
    >
      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#5B6CFF]/20 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[#B6FF3B]/10 blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Faint dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Signature: self-drawing infinity mark, faint, brand tie-in */}
        <svg
          viewBox="0 0 240 118"
          className="absolute top-1/2 left-1/2 h-auto w-[42rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
        >
          <motion.path
            d="M72 26C57.088 26 45 38.088 45 53C45 67.912 57.088 80 72 80C82.5 80 89.5 73 96 63L102 53L108 43C114.5 33 121.5 26 132 26C146.912 26 159 38.088 159 53C159 67.912 146.912 80 132 80C121.5 80 114.5 73 108 63L102 53L96 43C89.5 33 82.5 26 72 26Z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
          />
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 md:px-10"
      >
        {/* Eyebrow badge */}
        <motion.div
          variants={line}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B6FF3B] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B6FF3B]" />
          </span>
          Available for new projects
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
            variants={line}
            className="max-w-4xl font-['Space_Grotesk'] text-5xl leading-[1.05] font-semibold tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            We build products
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            variants={line}
            className="max-w-4xl font-['Space_Grotesk'] text-5xl leading-[1.05] font-semibold tracking-tight md:text-7xl lg:text-8xl"
          >
            that{' '}
            <span className="bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B] bg-clip-text text-transparent">
              outlast trends.
            </span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          variants={line}
          className="mt-8 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl"
        >
          Forever Code Studio partners with founders and teams to design and ship fast, reliable web
          products — from first line of code to launch day.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={line} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white py-3.5 pr-5 pl-6 text-sm font-semibold text-[#0B0D12]"
          >
            <span className="relative z-10">Start a project</span>
            <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B] transition-transform duration-300 group-hover:translate-y-0" />
          </a>

          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
          >
            See our work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={line}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-['Space_Grotesk'] text-3xl font-semibold text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/40">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
