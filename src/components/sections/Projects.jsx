import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../../data/projects'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'

const FILTERS = ['All', 'Web', 'Product', 'Branding']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="work" className="relative bg-[#0B0D12] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* ================= HEADER ================= */}
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            heading="A few projects we're proud to have shipped."
            className="max-w-xl"
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="relative px-4 py-2 text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white"
              >
                {f}
                {active === f && (
                  <motion.span
                    layoutId="filter-underline"
                    className="absolute right-4 -bottom-0.5 left-4 h-[2px] rounded-full bg-[#5B6CFF]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ================= GRID ================= */}
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              >
                <Card animate={false} className="group">
                  <Link to={`/work/${project.id}`} className="block">
                    {/* Image placeholder */}
                    <div
                      className={`relative h-64 bg-gradient-to-br md:h-72 ${project.gradient} overflow-hidden`}
                    >
                      <span className="absolute -right-2 -bottom-6 font-['Space_Grotesk'] text-[8rem] leading-none font-bold text-white/10 transition-transform duration-500 select-none group-hover:scale-110 group-hover:-rotate-3">
                        {project.number}
                      </span>

                      <span className="absolute top-5 right-5 flex h-10 w-10 -translate-y-2 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                      </span>

                      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                    </div>

                    {/* Info */}
                    <div className="flex items-start justify-between gap-4 p-6">
                      <div>
                        <h3 className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight text-white">
                          {project.title}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] tracking-wide text-white/40 uppercase"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="shrink-0 font-['Space_Grotesk'] text-sm text-white/30">
                        {project.number}
                      </span>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
