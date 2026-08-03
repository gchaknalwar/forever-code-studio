import { motion } from "framer-motion";
import Button from "../common/Button";

/**
 * Shared CTA banner — the "Want to work together?" style closing section,
 * reused at the bottom of Home, AboutPage, and ProjectDetail instead of
 * being copy-pasted with slightly different wording each time.
 */
export default function CTA({
  eyebrow,
  heading = "Want to work together?",
  buttonLabel = "Start a project",
  buttonTo = "/contact",
  className = "",
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-4xl mx-auto px-6 md:px-10 py-24 text-center border-t border-white/10 ${className}`}
    >
      {eyebrow && (
        <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-['Space_Grotesk'] font-semibold text-white text-3xl md:text-4xl tracking-tight mb-8">
        {heading}
      </h2>
      <Button as="link" to={buttonTo} variant="primary">
        {buttonLabel}
      </Button>
    </motion.section>
  );
}