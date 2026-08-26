// Fallback content used whenever no Sanity project is configured yet
// (see lib/content.ts). Keep this in sync with what a fresh Sanity
// dataset should be seeded with — it's the same honest content either way.
import type {
  SiteSettings,
  Project,
  SkillGroup,
  Experience,
  Education,
} from "@/lib/content-types";

export const seedSiteSettings: SiteSettings = {
  headline: "Web Developer",
  tagline:
    "Web Developer focused on modern web applications and continuously expanding into cloud technologies and automation.",
  aboutParagraphs: [
    "I'm Sufyan Ul Haq, a web developer based in Liverpool, UK. I build web applications with HTML, CSS, JavaScript, and PHP, and more recently TypeScript and Next.js, and I'm continuously expanding into cloud technologies and automation.",
    "I enjoy turning practical problems into software, and I care about how something is built as much as whether it works — clean structure, sensible architecture, and code I can explain and defend.",
    "I'm open to developer roles, internships, and freelance web projects. Below is what I've built, what I'm building now, and what I'm working on next.",
  ],
  email: "hello@sufyanulhaq.com",
  location: "Liverpool, UK",
  githubUrl: "https://github.com/Sufyanulhaq",
  linkedinUrl: "https://www.linkedin.com/in/sufyanulhaq/",
  seoDescription:
    "Sufyan Ul Haq is a web developer based in Liverpool, UK, building modern web applications and expanding into cloud computing and automation.",
};

export const seedProjects: Project[] = [
  {
    slug: "hotel-booking-website",
    name: "Hotel Booking Website",
    status: "completed",
    summary:
      "A full-stack hotel booking application covering room search, booking, and payment handling.",
    problem:
      "Hotel booking flows involve more moving parts than they first appear — searching availability, holding a room selection, collecting payment, and confirming or refunding a booking without losing data along the way.",
    solution:
      "Built a multi-page PHP application backed by a MySQL database, covering the full booking lifecycle: room search and detail pages, a booking and confirmation flow, and payment handling including a refund path.",
    architecture: [
      "Browser",
      "PHP (server-rendered pages)",
      "MySQL database",
      "Payment webhook",
      "Hosting",
    ],
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    keyFeatures: [
      "Room search and detail pages",
      "Booking and confirmation flow",
      "Payment processing with a webhook handler",
      "Refund handling",
      "Contact and newsletter forms",
    ],
    whatILearned:
      "Structuring a multi-page PHP application around a relational schema, and keeping a multi-step flow — search, book, pay, confirm — consistent when any step can fail.",
    githubUrl:
      "https://github.com/Sufyanulhaq/Hotel-Booking-Website-Working-Code-master",
    demoUrl: "https://hotel-booking-website-working-code-master.vercel.app",
  },
  {
    slug: "roof-info",
    name: "Roof.info",
    status: "completed",
    summary:
      "A Laravel-based content platform reviewing roofing materials, built with a proper MVC structure and test coverage.",
    problem:
      "Content-driven sites need a maintainable structure behind them, not just static pages — routing, data models, and a way to verify changes don't break existing behaviour.",
    solution:
      "Built with Laravel's MVC architecture: routes and controllers handle requests, Eloquent models manage the underlying MySQL data, and the front end is bundled with Vite. Includes a PHPUnit test suite.",
    architecture: [
      "Browser",
      "Laravel routes / controllers",
      "Eloquent models",
      "MySQL database",
      "Hosting",
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Vite"],
    keyFeatures: [
      "Laravel MVC routing and controllers",
      "Eloquent data models with migrations",
      "PHPUnit test suite",
      "Vite-bundled front-end assets",
    ],
    whatILearned:
      "Working inside a framework's conventions instead of building everything from scratch — routing, ORM, migrations — and writing tests alongside the application code.",
    githubUrl: "https://github.com/Sufyanulhaq/ROOF",
    demoUrl: "https://www.roof.info",
  },
  {
    slug: "butcher-shop",
    name: "Butcher Shop",
    status: "completed",
    summary:
      "An e-commerce site for an online butcher shop, including customer accounts, cart/checkout, and an admin panel.",
    problem:
      "An online shop needs more than a product list — accounts, a cart that persists through checkout, and a way for the shop owner to manage products without editing code.",
    solution:
      "Built a PHP and MySQL e-commerce site with customer registration and login, a shopping cart and checkout flow, and a separate admin panel for managing products and orders.",
    architecture: [
      "Browser",
      "PHP (customer-facing + admin)",
      "MySQL database",
      "Hosting",
    ],
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    keyFeatures: [
      "Customer registration and login",
      "Shopping cart and checkout flow",
      "Order history for customers",
      "Admin panel for product management",
    ],
    whatILearned:
      "Handling stateful flows like a cart across multiple pages, and separating customer-facing and admin functionality within the same codebase.",
    githubUrl: "https://github.com/Sufyanulhaq/butcher-shop",
    demoUrl: "https://butcher-shop.vercel.app",
  },
  {
    slug: "sufyanulhaq-com",
    name: "This Website",
    status: "completed",
    summary:
      "This site itself: a production personal website built with Next.js, TypeScript, and an embedded headless CMS.",
    problem:
      "A portfolio needs to be easy to keep up to date — adding a project or updating skills shouldn't mean editing React components.",
    solution:
      "Built with Next.js (App Router) and TypeScript, with content managed through an embedded Sanity Studio so every section — projects, skills, experience, writing — can be updated without touching code.",
    architecture: [
      "Browser",
      "Next.js (App Router, static generation)",
      "Sanity CMS",
      "Hosting",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    keyFeatures: [
      "Content fully separated from code via an embedded CMS",
      "SEO foundation: sitemap, structured data, per-page metadata",
      "Statically generated for performance",
      "Accessible, responsive layout",
    ],
    whatILearned:
      "Designing a content model that's simple enough to actually maintain, and the Next.js App Router patterns for combining static generation with CMS-driven content.",
  },
];

export const seedSkillGroups: SkillGroup[] = [
  {
    title: "Web Development",
    description: "Core technologies used day to day.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Responsive Design"],
    isCurrentlyLearning: false,
  },
  {
    title: "Programming & Data",
    description: "Languages and data tools used in projects.",
    skills: ["PHP", "SQL", "MySQL"],
    isCurrentlyLearning: false,
  },
  {
    title: "Tools",
    description: "Day-to-day development tools.",
    skills: ["Git", "GitHub", "VS Code"],
    isCurrentlyLearning: false,
  },
  {
    title: "Currently Learning",
    description:
      "Areas I'm actively developing skills in as I expand beyond core web development.",
    skills: [
      "Cloud Computing (AWS fundamentals)",
      "Next.js & React",
      "Linux basics",
      "Automation with APIs and scripts",
    ],
    isCurrentlyLearning: true,
  },
];

export const seedExperience: Experience[] = [
  {
    role: "Junior Web Developer",
    org: "NextTech Solutions",
    location: "Rawalpindi, Pakistan",
    startDate: "Mar 2021",
    endDate: "Mar 2022",
    bullets: [
      "Developed and maintained web applications using HTML, CSS, JavaScript, and PHP.",
      "Worked with the team to build functional, user-friendly features.",
      "Diagnosed and fixed bugs to keep development and testing running smoothly.",
    ],
  },
  {
    role: "Web Designing Intern",
    org: "NextTech Solutions",
    location: "Islamabad, Pakistan",
    startDate: "Jul 2020",
    endDate: "Nov 2020",
    bullets: [
      "Designed visuals in Photoshop and converted them into working HTML/CSS pages.",
      "Helped define coding requirements for e-commerce functionality.",
      "Translated client requirements into site concepts during project planning.",
    ],
  },
];

export const seedEducation: Education[] = [
  {
    degree: "MSc Digital Marketing",
    org: "University of Chester",
    year: "2025",
  },
  {
    degree: "BSc Computer Science",
    org: "Federal Urdu University of Arts, Sciences and Technology, Islamabad",
    year: "2023",
  },
];
