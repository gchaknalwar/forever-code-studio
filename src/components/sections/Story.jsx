import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MILESTONES = [
  {
    year: '2022',
    title: 'The studio begins',
    description:
      'Started freelancing solo — one laptop, one client, and a promise to never ship sloppy code.',
  },
  {
    year: '2023',
    title: 'First team hire',
    description:
      'Brought on a designer and a second engineer. Forever Code Studio officially became a team.',
  },
  {
    year: '2024',
    title: '25+ projects shipped',
    description:
      'Crossed our first big milestone — SaaS dashboards, e-commerce stores, and mobile apps, all in production.',
  },
  {
    year: '2025',
    title: 'Studio, not agency',
    description:
      'Doubled down on staying small and senior — every project gets the founders, not a rotating junior team.',
  },
  {
    year: 'Now',
    title: 'Building with you',
    description:
      'Still hands-on, still shipping fast, still obsessed with the details clients actually notice.',
  },
]

export default function Story() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="story" className="relative bg-[#0B0D12] py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-20"
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-white/40 uppercase">
            Our story
          </p>
          <h2 className="max-w-xl font-['Space_Grotesk'] text-4xl font-semibold tracking-tight text-white md:text-5xl">
            From one laptop to a studio that ships.
          </h2>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div ref={containerRef} className="relative pl-10 md:pl-14">
          {/* Track (static, faint) */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-white/10" />

          {/* Fill (scroll-linked) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-0 w-[2px] origin-top bg-gradient-to-b from-[#5B6CFF] to-[#B6FF3B]"
          />

          <div className="flex flex-col gap-16">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative"
              >
                {/* Node dot */}
                <span className="absolute top-1 -left-10 h-3 w-3 rounded-full border-2 border-[#5B6CFF] bg-[#0B0D12] md:-left-14" />

                <span className="mb-2 inline-block font-['Space_Grotesk'] text-sm font-semibold tracking-wide text-[#5B6CFF]">
                  {m.year}
                </span>
                <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {m.title}
                </h3>
                <p className="max-w-lg text-base leading-relaxed text-white/50">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
