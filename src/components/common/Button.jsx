import { Link } from "react-router-dom";
import { ArrowUpRight, Loader2 } from "lucide-react";

/**
 * Shared Button component.
 *
 * as: "button" (default) | "a" (renders <a>, pass href) | "link" (react-router Link, pass to)
 * variant: "primary" (white bg, gradient hover-reveal) | "secondary" (outlined ghost)
 * showArrow: shows the arrow-up-right icon (default true for primary)
 * loading: shows spinner + disables the button
 */
export default function Button({
  children,
  variant = "primary",
  as = "button",
  href,
  to,
  showArrow = variant === "primary",
  loading = false,
  className = "",
  ...props
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold overflow-hidden transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-white text-[#0B0D12] pl-6 pr-5 py-3.5",
    secondary:
      "border border-white/15 text-white/80 hover:text-white hover:border-white/30 px-6 py-3.5 bg-transparent",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          children
        )}
        {!loading && showArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-[#5B6CFF] to-[#B6FF3B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      )}
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (as === "a") {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  if (as === "link") {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={loading} {...props}>
      {content}
    </button>
  );
}