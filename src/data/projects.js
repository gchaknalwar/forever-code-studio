export const PROJECTS = [
  {
    id: "nimbus",
    number: "01",
    title: "Nimbus — SaaS Dashboard",
    category: "Web",
    tags: ["React", "Dashboard"],
    gradient: "from-[#5B6CFF] to-[#2C3475]",
    client: "Nimbus Inc.",
    year: "2025",
    role: "Full-stack development",
    summary:
      "A real-time analytics dashboard rebuilt from the ground up for speed, clarity, and a much lighter codebase.",
    description:
      "Nimbus came to us with a dashboard that took over 6 seconds to load and a design system that had grown inconsistent across 40+ screens. We rebuilt the front end in React with a proper component library, moved data fetching to a streaming API, and cut load time to under 800ms. The result: a dashboard their sales team now uses as a demo tool, not just an internal one.",
    outcomes: ["Load time cut from 6s to 0.8s", "40+ screens unified into one design system", "Zero critical bugs in first 90 days post-launch"],
  },
  {
    id: "orbit",
    number: "02",
    title: "Orbit — Booking Platform",
    category: "Product",
    tags: ["Next.js", "Marketplace"],
    gradient: "from-[#B6FF3B] to-[#4C5C1E]",
    client: "Orbit",
    year: "2025",
    role: "Product design & engineering",
    summary:
      "A two-sided booking marketplace connecting service providers with customers, built for scale from day one.",
    description:
      "Orbit needed a marketplace that could handle both discovery and transactions without feeling like two different products stitched together. We designed a unified booking flow, built the platform on Next.js for SEO-friendly provider pages, and integrated payments end to end. Launched with 200+ providers on day one.",
    outcomes: ["200+ providers onboarded at launch", "Sub-second search across listings", "Stripe Connect payments handling split payouts"],
  },
  {
    id: "kindred",
    number: "03",
    title: "Kindred — Brand Identity",
    category: "Branding",
    tags: ["Identity", "Design System"],
    gradient: "from-[#FF6B9D] to-[#5B2C4A]",
    client: "Kindred",
    year: "2024",
    role: "Brand & web design",
    summary:
      "A full identity system — logo, type, color, and a marketing site — for a wellness startup entering a crowded market.",
    description:
      "Kindred needed to stand out in a market full of soft pastels and stock photography. We built a bolder identity system with a distinctive type pairing and a marketing site that converts visitors into waitlist sign-ups at a noticeably higher rate than their previous landing page.",
    outcomes: ["3x waitlist conversion vs. old landing page", "Full brand guidelines delivered", "Design system reused across 3 product surfaces"],
  },
  {
    id: "lattice",
    number: "04",
    title: "Lattice — E-commerce Storefront",
    category: "Web",
    tags: ["Shopify", "Performance"],
    gradient: "from-[#3BC9DB] to-[#1B4A52]",
    client: "Lattice Goods",
    year: "2024",
    role: "Storefront development",
    summary:
      "A custom Shopify storefront built for speed, with every unnecessary script stripped out.",
    description:
      "Lattice's existing store was running a dozen third-party apps that were quietly killing performance. We rebuilt the storefront on a lean custom theme, replaced heavy apps with lightweight custom code, and optimized checkout — directly improving their conversion rate within the first month.",
    outcomes: ["Lighthouse performance score: 38 → 96", "Checkout conversion up 22%", "12 third-party apps removed"],
  },
  {
    id: "pulse",
    number: "05",
    title: "Pulse — Fitness App",
    category: "Product",
    tags: ["React Native", "Mobile"],
    gradient: "from-[#FFA94D] to-[#5C3B1E]",
    client: "Pulse Fitness",
    year: "2024",
    role: "Mobile app development",
    summary:
      "A cross-platform fitness tracking app shipped to both iOS and Android from a single React Native codebase.",
    description:
      "Pulse wanted to ship on both platforms without maintaining two separate codebases. We built the app in React Native with native modules where performance mattered most (workout tracking, background sync), keeping one shared codebase for everything else.",
    outcomes: ["Shipped to iOS and Android simultaneously", "4.7★ average rating at launch", "One shared codebase, two native experiences"],
  },
  {
    id: "aster",
    number: "06",
    title: "Aster — Portfolio System",
    category: "Branding",
    tags: ["Webflow", "Motion"],
    gradient: "from-[#845EF7] to-[#2E2159]",
    client: "Aster Studio",
    year: "2023",
    role: "Design & motion",
    summary:
      "A portfolio site template system for creative studios, built with reusable motion patterns.",
    description:
      "Aster needed a portfolio site that felt as crafted as the work inside it. We built a Webflow-based system with custom interactions and motion patterns that stayed consistent across every case study page, so new work could be added without breaking the site's rhythm.",
    outcomes: ["Reusable case-study template system", "Consistent motion language across 15+ pages", "CMS-driven, no-code content updates"],
  },
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}