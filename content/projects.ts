export type Project = {
  slug: string;
  name: string;
  type: "Personal Project" | "Learning Project";
  summary: string;
  purpose: string;
  role: string;
  learned: string;
  stack: string[];
  github: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "hotel-booking-website",
    name: "Hotel Booking Website",
    type: "Personal Project",
    summary:
      "A web app for searching and booking hotel rooms online, built to practice full-stack development with a real relational database.",
    purpose:
      "Built to practice a common real-world use case: letting a user search availability, view rooms, and complete a booking flow end to end.",
    role:
      "Built the front end and back end, designed the MySQL schema, and wired up the booking logic.",
    learned:
      "Structuring a multi-page PHP application, working with a relational database, and keeping a booking flow usable and easy to navigate.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Sufyanulhaq/Hotel-Booking-Website-Working-Code-master",
    demo: "https://hotel-booking-website-working-code-master.vercel.app",
    featured: true,
  },
  {
    slug: "roof-info",
    name: "Roof.info",
    type: "Personal Project",
    summary:
      "An informational platform reviewing different types of roof shingles, built with Laravel to practice a framework-based content site.",
    purpose:
      "Built to get hands-on with Laravel's structure and conventions, and to practice building a content-driven site rather than a simple static page.",
    role:
      "Built the site with Laravel, Bootstrap, and MySQL, covering routing, views, and basic data handling.",
    learned:
      "Working within an MVC framework (Laravel), structuring views with Bootstrap, and organising a content-focused site.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/Sufyanulhaq/ROOF",
    demo: "https://www.roof.info",
    featured: true,
  },
  {
    slug: "butcher-shop",
    name: "Butcher Shop",
    type: "Personal Project",
    summary:
      "An e-commerce style site for an online butcher shop, built to practice product listings, search, and a shopping-style user flow.",
    purpose:
      "Built to practice core e-commerce patterns: browsing products, filtering, and a checkout-style user journey.",
    role:
      "Built the front end and back end using PHP and MySQL, including product listing and filtering.",
    learned:
      "Handling product data, building filtering/search on the front end, and keeping an e-commerce layout clear and easy to use.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sufyanulhaq/butcher-shop",
    demo: "https://butcher-shop.vercel.app",
    featured: true,
  },
  {
    slug: "sufyanulhaq-com",
    name: "This Website",
    type: "Personal Project",
    summary:
      "This site itself — built with Next.js, TypeScript, and Tailwind CSS as a hands-on way to practice the modern stack currently being developed.",
    purpose:
      "Built to have a real, live project using Next.js and TypeScript rather than just reading about them, and to give recruiters and clients one clean place to see the work.",
    role:
      "Designed and built the whole site: layout, content structure, SEO foundation, and the contact flow.",
    learned:
      "The Next.js App Router, TypeScript in a real project, and what goes into a proper SEO setup (metadata, sitemap, structured data).",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Sufyanulhaq/sufyanulhaq-website",
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
