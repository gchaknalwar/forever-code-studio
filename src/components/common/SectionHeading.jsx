import { motion } from "framer-motion";

/**
 * Shared SectionHeading — the "eyebrow label + big heading" pattern
 * repeated at the top of Projects, Story, Team, Testimonials, and Contact.
 *
 * align: "left" (default) | "center" (used in Testimonials)
 */
export default function SectionHeading({
  eyebrow,
  heading,
  align = "left",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-['Space_Grotesk'] font-semibold text-white text-4xl md:text-5xl tracking-tight">
        {heading}
      </h2>
    </motion.div>
  );
}