import { motion } from 'framer-motion'

/**
 * Shared Card component — the bordered, hover-lift container used across
 * Projects, Team, and Values grids.
 *
 * hoverLift: applies the -6px lift on hover (used in Team/Values cards)
 * delay: stagger delay for scroll-in reveal
 */
/**
 * Shared Card component — the bordered, hover-lift container used across
 * Projects, Team, and Values grids.
 *
 * hoverLift: applies the -6px lift on hover (used in Team/Values cards)
 * delay: stagger delay for scroll-in reveal
 * animate: set to false when a parent already handles the reveal animation
 *          (e.g. Projects.jsx wraps Card in its own motion.div for the
 *          filter transition) — avoids double-animating and invalid DOM props
 */
export default function Card({
  children,
  hoverLift = false,
  delay = 0,
  animate = true,
  className = '',
  ...props
}) {
  const motionProps = animate
    ? {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.5, delay, ease: 'easeOut' },
      }
    : {}

  return (
    <motion.div
      {...motionProps}
      whileHover={hoverLift ? { y: -6 } : undefined}
      className={`overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
