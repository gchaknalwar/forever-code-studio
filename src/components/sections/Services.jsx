import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Smartphone, Palette, Search, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

const SERVICES = [
  {
    index: '01',
    icon: Code2,
    title: 'Web Development',
    description:
      'Marketing sites, dashboards, and full-stack web apps built in React, Next.js, or your stack of choice.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    index: '02',
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Cross-platform apps shipped to iOS and Android from a single React Native codebase.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    index: '03',
    icon: Palette,
    title: 'Brand & Product Design',
    description:
      'Identity systems, design systems, and UI/UX for products that need to look as good as they work.',
    tags: ['Figma', 'Design Systems'],
  },
  {
    index: '04',
    icon: Search,
    title: 'Audits & Performance',
    description:
      'Speed, SEO, and accessibility audits for existing sites — with a prioritized fix list, not just a report.',
    tags: ['Lighthouse', 'SEO', 'a11y'],
  },
]

function ServiceCard({ service, i }) {
  const [hover, setHover] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative rounded-2xl p-[1px] transition-all duration-500"
      style={{
        background: hover
          ? 'linear-gradient(135deg, rgba(91,108,255,0.6), rgba(182,255,59,0.5))'
          : 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
      }}
    >
      {/* ambient glow behind card on hover */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: 'radial-gradient(circle, #5B6CFF, transparent 70%)' }}
      />

      <div className="relative h-full overflow-hidden rounded-2xl bg-[#0B0D12] p-7 md:p-8">
        {/* faint oversized index number, watermark-style */}
        <span className="pointer-events-none absolute -top-3 right-4 font-['Space_Grotesk'] text-7xl font-bold text-white/[0.03] transition-colors duration-500 group-hover:text-white/[0.06] md:text-8xl">
          {service.index}
        </span>

        <div className="relative z-10 flex items-start justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-500"
            style={{
              borderColor: hover ? 'rgba(91,108,255,0.4)' : 'rgba(255,255,255,0.08)',
              background: hover
                ? 'linear-gradient(135deg, rgba(91,108,255,0.18), rgba(182,255,59,0.1))'
                : 'rgba(91,108,255,0.08)',
            }}
          >
            <Icon
              className="h-5 w-5 transition-colors duration-500"
              style={{ color: hover ? '#B6FF3B' : '#5B6CFF' }}
            />
          </div>

          <motion.span
            animate={{
              opacity: hover ? 1 : 0,
              x: hover ? 0 : -6,
              rotate: hover ? 0 : -45,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60"
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </div>

        <h3 className="relative z-10 mt-6 font-['Space_Grotesk'] text-xl font-semibold tracking-tight text-white">
          {service.title}
        </h3>
        <p className="relative z-10 mt-3 max-w-md text-sm leading-relaxed text-white/50">
          {service.description}
        </p>

        <div className="relative z-10 mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white/40 uppercase transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* bottom accent line, sweeps in on hover */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden bg-white/5">
          <motion.div
            initial={false}
            animate={{ x: hover ? '0%' : '-100%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-full w-full bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B]"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#0B0D12] py-28 md:py-36">
      {/* ambient background grid + glow, matches premium sections elsewhere */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#5B6CFF]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            heading="Services built around shipping, not just scoping."
            className="max-w-xl"
          />
          <span className="hidden font-mono text-xs tracking-widest text-white/25 uppercase md:block">
            04 disciplines &middot; one point of contact
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
