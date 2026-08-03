import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'

const MILESTONES = [
  {
    year: '2026',
    title: 'The studio begins',
    description:
      'Forever Code Studio launches — one developer, one laptop, and a promise to never ship sloppy code.',
  },
  {
    year: 'Today',
    title: 'Taking on first clients',
    description:
      'Onboarding early projects — SaaS dashboards, landing pages, and full-stack builds, all built hands-on, no juniors, no handoffs.',
  },
  {
    year: 'Next',
    title: 'Building a track record',
    description:
      'Every project shipped adds to a real portfolio — and every client gets full attention because there is no queue yet.',
  },
  {
    year: 'Later',
    title: 'Growing, staying senior',
    description:
      'If the studio grows, it grows slow and senior-first — small team, high craft, never a rotating cast of juniors.',
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
        <SectionHeading
          eyebrow="Our story"
          heading="Just getting started — and that's the point."
          className="mb-20 max-w-xl"
        />

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