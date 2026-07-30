import { motion } from "framer-motion";

/**
 * Shared Card component — the bordered, hover-lift container used across
 * Projects, Team, and Values grids.
 *
 * hoverLift: applies the -6px lift on hover (used in Team/Values cards)
 * delay: stagger delay for scroll-in reveal
 */
export default function Card({
  children,
  hoverLift = false,
  delay = 0,
  className = "",
  as: Component = motion.div,
  ...props
}) {
  return (
    <Component
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={hoverLift ? { y: -6 } : undefined}
      className={`rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}