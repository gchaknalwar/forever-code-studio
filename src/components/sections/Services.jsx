import { Code2, Smartphone, Palette, Search } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Marketing sites, dashboards, and full-stack web apps built in React, Next.js, or your stack of choice.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform apps shipped to iOS and Android from a single React Native codebase.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    icon: Palette,
    title: "Brand & Product Design",
    description:
      "Identity systems, design systems, and UI/UX for products that need to look as good as they work.",
    tags: ["Figma", "Design Systems"],
  },
  {
    icon: Search,
    title: "Audits & Performance",
    description:
      "Speed, SEO, and accessibility audits for existing sites — with a prioritized fix list, not just a report.",
    tags: ["Lighthouse", "SEO", "a11y"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0B0D12] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="What we do"
          heading="Services built around shipping, not just scoping."
          className="max-w-xl mb-16"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <Card key={service.title} hoverLift delay={i * 0.08} className="p-7">
              <div className="w-11 h-11 rounded-xl bg-[#5B6CFF]/10 flex items-center justify-center mb-6">
                <service.icon className="w-5 h-5 text-[#5B6CFF]" />
              </div>
              <h3 className="font-['Space_Grotesk'] font-semibold text-white text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] uppercase tracking-wide text-white/40 border border-white/10 rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}