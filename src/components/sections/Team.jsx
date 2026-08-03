import { motion } from 'framer-motion'
import { Users, Sparkles } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

// lucide-react dropped brand icons in some versions — using inline SVGs to be safe.
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
  </svg>
)
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
)
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 1.5h3.68l-8.04 9.19L24 22.5h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.5h7.6l5.24 6.93 6.06-6.93zm-1.3 18.78h2.04L6.5 3.6H4.3l13.3 16.68z" />
  </svg>
)

// TODO: swap in your real name, role, and socials
const FOUNDER = {
  name: 'Govind Chaknalwar',
  role: 'Founder & Full-Stack Developer',
  gradient: 'from-[#5B6CFF]/30 to-[#B6FF3B]/20',
  socials: {
    github: 'https://github.com/gchaknalwar',
    linkedin: 'https://www.linkedin.com/in/govind-chaknalwar-b35278215/?skipRedirect=true',
    twitter: 'https://x.com/255_Boss',
  },
}

export default function Team() {
  return (
    <section id="team" className="relative bg-[#0B0D12] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="The team"
          heading="One senior hand today. Growing soon."
          className="mb-16 max-w-xl"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* ================= FOUNDER CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <div className={`relative h-64 bg-gradient-to-br ${FOUNDER.gradient} overflow-hidden`}>
              <span className="absolute inset-0 flex items-center justify-center font-['Space_Grotesk'] text-7xl font-bold text-white/20 transition-transform duration-500 select-none group-hover:scale-110">
                {FOUNDER.name.charAt(0)}
              </span>

              <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-3 bg-gradient-to-t from-black/70 to-transparent py-4 transition-transform duration-300 group-hover:translate-y-0">
                {[
                  { Icon: GithubIcon, href: FOUNDER.socials.github },
                  { Icon: LinkedinIcon, href: FOUNDER.socials.linkedin },
                  { Icon: TwitterIcon, href: FOUNDER.socials.twitter },
                ].map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight text-white">
                {FOUNDER.name}
              </h3>
              <p className="mt-1 text-sm text-white/40">{FOUNDER.role}</p>
            </div>
          </motion.div>

          {/* ================= HIRING SOON PLACEHOLDER CARDS ================= */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.08 * (i + 1), ease: 'easeOut' }}
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.015] px-6 py-16 text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <Users className="h-5 w-5 text-white/30" />
              </div>
              <p className="text-sm font-medium text-white/50">Open seat</p>
              <p className="mt-2 max-w-[180px] text-xs leading-relaxed text-white/25">
                Hiring senior designers &amp; engineers as the studio grows
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= FOOTNOTE ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-2 text-xs font-medium tracking-wide text-white/30 uppercase"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#B6FF3B]" />
          Currently solo — hiring senior talent as demand grows
        </motion.div>
      </div>
    </section>
  )
}
