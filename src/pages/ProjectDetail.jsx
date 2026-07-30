import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { PROJECTS, getProjectById } from '../data/projects'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  useEffect(() => {
    if (project) document.title = `${project.title} — Forever Code Studio`
    window.scrollTo(0, 0)
  }, [id, project])

  if (!project) return <NotFound />

  const currentIndex = PROJECTS.findIndex((p) => p.id === id)
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length]

  return (
    <main className="bg-[#0B0D12] pt-32">
      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-5xl px-6 md:px-10"
      >
        <Link
          to="/#work"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors duration-200 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        <p className="mb-3 text-sm font-medium tracking-widest text-white/40 uppercase">
          {project.category} &middot; {project.year}
        </p>
        <h1 className="mb-6 max-w-3xl font-['Space_Grotesk'] text-4xl font-semibold tracking-tight text-white md:text-6xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/50">{project.summary}</p>

        {/* Meta row */}
        <div className="mt-12 grid max-w-2xl grid-cols-2 gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
          <div>
            <p className="mb-1 text-xs tracking-widest text-white/30 uppercase">Client</p>
            <p className="font-medium text-white">{project.client}</p>
          </div>
          <div>
            <p className="mb-1 text-xs tracking-widest text-white/30 uppercase">Role</p>
            <p className="font-medium text-white">{project.role}</p>
          </div>
          <div>
            <p className="mb-1 text-xs tracking-widest text-white/30 uppercase">Stack</p>
            <p className="font-medium text-white">{project.tags.join(', ')}</p>
          </div>
        </div>
      </motion.div>

      {/* ================= HERO IMAGE PLACEHOLDER ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        className={`relative mx-auto mt-16 h-[50vh] max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br md:h-[65vh] ${project.gradient}`}
      >
        <span className="absolute inset-0 flex items-center justify-center font-['Space_Grotesk'] text-[10rem] font-bold text-white/10 select-none">
          {project.number}
        </span>
      </motion.div>

      {/* ================= DESCRIPTION + OUTCOMES ================= */}
      <div className="mx-auto grid max-w-5xl gap-16 px-6 py-24 md:grid-cols-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="md:col-span-3"
        >
          <h2 className="mb-5 font-['Space_Grotesk'] text-2xl font-semibold text-white">
            The project
          </h2>
          <p className="text-base leading-relaxed text-white/50">{project.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="md:col-span-2"
        >
          <h2 className="mb-5 font-['Space_Grotesk'] text-2xl font-semibold text-white">
            Outcomes
          </h2>
          <ul className="flex flex-col gap-4">
            {project.outcomes.map((outcome, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 text-sm leading-relaxed text-white/60"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B6FF3B]" />
                {outcome}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ================= NEXT PROJECT ================= */}
      <Link
        to={`/work/${nextProject.id}`}
        className="group relative block border-t border-white/10 py-16 md:py-24"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 md:px-10">
          <div>
            <p className="mb-3 text-sm tracking-widest text-white/40 uppercase">Next project</p>
            <h3 className="font-['Space_Grotesk'] text-3xl font-semibold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">
              {nextProject.title}
            </h3>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B0D12]">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </Link>
    </main>
  )
}
