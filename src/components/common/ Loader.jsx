import { Loader2 } from "lucide-react";

/**
 * Shared Loader — for when the backend is wired up and pages/sections
 * need to show a loading state while fetching real data.
 *
 * variant: "inline" (small spinner, e.g. inside a button)
 *          "section" (centered spinner filling a section's height)
 *          "fullscreen" (covers the viewport, e.g. initial page load)
 */
export default function Loader({ variant = "section", label = "Loading..." }) {
  if (variant === "inline") {
    return <Loader2 className="w-4 h-4 animate-spin" />;
  }

  if (variant === "fullscreen") {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-3 bg-[#0B0D12]">
        <Loader2 className="w-6 h-6 text-white/60 animate-spin" />
        <span className="text-white/40 text-sm">{label}</span>
      </div>
    );
  }

  // "section" — default
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24">
      <Loader2 className="w-6 h-6 text-white/60 animate-spin" />
      <span className="text-white/40 text-sm">{label}</span>
    </div>
  );
}

/**
 * CardSkeleton — placeholder shimmer block matching the Project/Team card
 * shape, for use while real data (e.g. from a CMS or API) is loading.
 */
export function CardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] animate-pulse">
      <div className="h-64 md:h-72 bg-white/5" />
      <div className="p-6 space-y-3">
        <div className="h-4 w-2/3 bg-white/10 rounded" />
        <div className="h-3 w-1/3 bg-white/5 rounded" />
      </div>
    </div>
  );
}