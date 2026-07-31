import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

const TESTIMONIALS = [
  {
    name: 'Aditi Rao',
    role: 'Founder, Nimbus SaaS',
    quote:
      'Forever Code Studio shipped our dashboard faster than agencies twice their size quoted us. Communication was clear every single day.',
    rating: 5,
  },
  {
    name: 'Marcus Webb',
    role: 'CEO, Orbit',
    quote:
      "They didn't just build what we asked for — they pushed back on ideas that wouldn't scale and saved us months of rework.",
    rating: 5,
  },
  {
    name: 'Priya Shah',
    role: 'Head of Product, Kindred',
    quote:
      'Rare to find a freelance team this senior. Every pull request felt like it came from someone who actually cared about the product.',
    rating: 5,
  },
  {
    name: 'Daniel Osei',
    role: 'Founder, Lattice',
    quote:
      "From kickoff to launch in three weeks. The animations and polish alone made our storefront feel like a funded startup's site.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection)
    setIndex((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [isPaused, paginate])

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x * velocity.x
    if (swipe < -1000) paginate(1)
    else if (swipe > 1000) paginate(-1)
  }

  const current = TESTIMONIALS[index]

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

        {/* ================= CAROUSEL ================= */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Quote className="absolute -top-6 left-1/2 h-16 w-16 -translate-x-1/2 text-white/[0.04]" />

          <div className="relative flex min-h-[280px] items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full cursor-grab px-4 text-center active:cursor-grabbing"
              >
                <div className="mb-6 flex justify-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.08, type: 'spring', stiffness: 300 }}
                    >
                      <Star className="h-4 w-4 fill-[#B6FF3B] text-[#B6FF3B]" />
                    </motion.div>
                  ))}
                </div>

                <p className="mx-auto max-w-2xl font-['Space_Grotesk'] text-xl leading-relaxed tracking-tight text-white md:text-2xl">
                  "{current.quote}"
                </p>

                <div className="mt-8">
                  <p className="text-sm font-semibold text-white">{current.name}</p>
                  <p className="mt-0.5 text-sm text-white/40">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= CONTROLS ================= */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors duration-200 hover:border-white/30 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="relative h-1.5 overflow-hidden rounded-full bg-white/15 transition-all duration-300"
                  style={{ width: i === index ? 28 : 8 }}
                >
                  {i === index && (
                    <motion.span
                      layoutId="dot-fill"
                      className="absolute inset-0 bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B]"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors duration-200 hover:border-white/30 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
