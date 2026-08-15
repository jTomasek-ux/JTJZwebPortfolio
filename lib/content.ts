export const STUDIO = {
  name: "KUBIC STUDIO",
  mark: "KUBIC STUDIO",
  tagline: "DIGITAL-FIRST DESIGN STUDIO",
  lockup: "KUBIC STUDIO DIGITAL-FIRST DESIGN STUDIO",
  copyright: "©2026 ALL RIGHTS RESERVED",
  founded: "C.2026",
  hero: [
    "Vy navrhujete skvělou architekturu.",
    "My stavíme weby, které ji konečně reflektují.",
  ],
  since: "(SINCE 2024)",
  email: "hello@kubic.studio",
} as const;

export const NAV = [
  { href: "/", label: "HOME" },
  { href: "/work", label: "WORK" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
] as const;

export const PROJECTS = [
  {
    name: "JTomasek",
    field: "Architecture",
    year: "2026",
    services: ["Brand Identity", "Web Design"],
    image: "/images/jtomasekCaseStudy/Main.webp",
  },
  {
    name: "JT Interior",
    field: "Interiors",
    year: "2026",
    services: ["Brand Identity", "Web Design"],
    image: "/images/jt-interiorCaseStudy/main.webp",
  },
] as const;

export const SERVICES = [
  { name: "Brand Identity", detail: "Naming, marks, systems" },
  { name: "Web Design", detail: "Sites, platforms, e-com" },
  { name: "Art Direction", detail: "Campaigns, look, feel" },
  { name: "Motion", detail: "Film, loops, product" },
  { name: "Digital Products", detail: "Apps, tools, interfaces" },
] as const;

export const BELIEFS = {
  statement:
    "Jsme Studio Kubic. Sídlíme v Praze a navrhujeme weby výhradně pro architektonické kanceláře a tvoříme funkční weby tak, aby vaše portfolio prodávalo samo.",
} as const;
