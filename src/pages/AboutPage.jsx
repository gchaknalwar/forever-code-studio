import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Target, Users, Sparkles, ArrowUpRight } from 'lucide-react'

const VALUES = [
  {
    icon: Zap,
    title: 'Move fast, break nothing',
    description:
      'We ship quickly without cutting corners on quality — tested code, not rushed code.',
  },
  {
    icon: Target,
    title: 'Senior hands, every time',
    description:
      'No handoffs to juniors. The person who scopes your project is the person who builds it.',
  },
  {
    icon: Users,
    title: 'Real communication',
    description:
      'Daily updates, honest timelines, no disappearing for two weeks then dropping a surprise.',
  },
  {
    icon: Sparkles,
    title: 'Obsessed with details',
    description:
      'The 5% everyone skips — loading states, empty states, animations — is where we spend extra time.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Discovery call',
    description:
      'We learn your goals, constraints, and timeline in a 30-minute call — no sales pitch.',
  },
  {
    step: '02',
    title: 'Scope & quote',
    description: 'A clear proposal with milestones and pricing, usually within 48 hours.',
  },
  {
    step: '03',
    title: 'Build in public',
    description:
      'Weekly demos and a shared project board so you always know exactly where things stand.',
  },
  {
    step: '04',
    title: 'Launch & support',
    description:
      'We stay on for 30 days post-launch to fix anything that surfaces in the real world.',
  },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About — Forever Code Studio'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-[#0B0D12] pt-32">
      {/* ================= HERO ================= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-4xl px-6 pb-20 text-center md:px-10"
      >
        <p className="mb-4 text-sm font-medium tracking-widest text-white/40 uppercase">About us</p>
        <h1 className="mb-6 font-['Space_Grotesk'] text-4xl leading-tight font-semibold tracking-tight text-white md:text-6xl">
          We're a small studio that builds like it's our own product.
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
          Forever Code Studio started as one freelancer who got tired of agencies overpromising and
          underdelivering. Today we're a small, senior team — and we've kept it that way on purpose.
        </p>
      </motion.div>

      {/* ================= VALUES ================= */}
      <section className="mx-auto max-w-6xl border-t border-white/10 px-6 py-20 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12 font-['Space_Grotesk'] text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          How we work
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#5B6CFF]/10">
                <value.icon className="h-5 w-5 text-[#5B6CFF]" />
              </div>
              <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-white">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="mx-auto max-w-6xl border-t border-white/10 px-6 py-20 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12 font-['Space_Grotesk'] text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          How a project actually goes
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-4">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="relative border-t-2 border-white/10 pt-6"
            >
              <span className="mb-3 block font-['Space_Grotesk'] text-sm font-semibold text-[#5B6CFF]">
                {p.step}
              </span>
              <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-4xl border-t border-white/10 px-6 py-24 text-center md:px-10"
      >
        <h2 className="mb-8 font-['Space_Grotesk'] text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Want to work together?
        </h2>
        <Link
          to="/contact"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white py-3.5 pr-5 pl-6 text-sm font-semibold text-[#0B0D12]"
        >
          <span className="relative z-10">Start a project</span>
          <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B] transition-transform duration-300 group-hover:translate-y-0" />
        </Link>
      </motion.section>
    </main>
  )
}
