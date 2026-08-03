import { motion } from 'framer-motion'
import { Quote, Sparkles } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

export default function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-[#0B0D12] py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        {/* ================= HEADER ================= */}
        <SectionHeading
          eyebrow="Testimonials"
          heading="Don't just take our word for it."
          align="center"
          className="mb-16"
        />

        {/* ================= EMPTY STATE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-16 text-center md:px-16"
        >
          <Quote className="absolute -top-6 left-1/2 h-16 w-16 -translate-x-1/2 text-white/[0.04]" />

          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
            <Sparkles className="h-5 w-5 text-[#B6FF3B]" />
          </div>

          <p className="font-['Space_Grotesk'] text-xl leading-relaxed tracking-tight text-white md:text-2xl">
            We're just getting started.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/40">
            Forever Code Studio is taking on its first projects right now. Once we deliver, client
            testimonials will show up right here — real names, real feedback.
          </p>

          <div className="mt-8 flex items-center gap-2 text-xs font-medium tracking-wide text-white/30 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B6FF3B] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B6FF3B]" />
            </span>
            Currently onboarding early clients
          </div>
        </motion.div>
      </div>
    </section>
  )
}
