// Fallback content used whenever no Sanity project is configured yet
// (see lib/content.ts). Keep this in sync with what a fresh Sanity
// dataset should be seeded with — it's the same honest content either way.
import type {
  SiteSettings,
  Project,
  SkillGroup,
  Service,
  Experience,
  Education,
} from "@/lib/content-types";

export const seedSiteSettings: SiteSettings = {
  headline: "Software Developer",
  tagline:
    "Software developer with a growing focus on cloud computing, automation, and modern digital systems.",
  aboutParagraphs: [
    "I'm Sufyan Ul Haq, a software developer based in Liverpool, UK. My strongest background is in web development — HTML, CSS, JavaScript, PHP, and more recently TypeScript, React, and Next.js — and I'm continuously expanding into cloud computing, automation, and modern infrastructure.",
    "I enjoy turning practical problems into software, and I care about how something is built as much as whether it works — clean structure, sensible architecture, and code I can explain and defend.",
    "I'm open to software, web, and cloud-leaning developer roles, internships, and freelance projects. Below is what I've built, what I'm building now, and what I'm working on next.",
  ],
  email: "hello@sufyanulhaq.com",
  location: "Liverpool, UK",
  githubUrl: "https://github.com/Sufyanulhaq",
  linkedinUrl: "https://www.linkedin.com/in/sufyanulhaq/",
  whatsapp: "447469753723",
  seoDescription:
    "Sufyan Ul Haq is a software developer based in Liverpool, UK, building modern web applications and expanding into cloud computing, automation, and infrastructure.",
};

export const seedServices: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    summary: "Modern, responsive, professional websites built from scratch.",
    whoFor:
      "Individuals, freelancers, and small businesses who need a real website — not a template with their name on it.",
    includes: [
      "Custom design and build",
      "Responsive layout for mobile, tablet, and desktop",
      "SEO foundation — metadata, sitemap, semantic HTML",
      "Content structured for easy updates",
    ],
    deliverables: [
      "A live, deployed website",
      "Source code you own",
      "Basic documentation for making content changes",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    summary: "Custom web applications and business systems, not just static pages.",
    whoFor:
      "Businesses that need something interactive — bookings, accounts, a dashboard, or a workflow specific to how they operate.",
    includes: [
      "Custom functionality built around your actual process",
      "Database design and data handling",
      "User accounts, forms, or booking-style flows where needed",
    ],
    deliverables: [
      "A working application, deployed and tested",
      "A clear handover of how it's structured",
    ],
    technologies: ["React", "Next.js", "PHP", "MySQL", "REST APIs"],
  },
  {
    slug: "api-integration-automation",
    title: "API Integration & Automation",
    summary: "Connect the tools you already use and automate the repetitive parts.",
    whoFor:
      "Anyone whose team is manually doing something a script or an API connection could handle instead.",
    includes: [
      "Connecting third-party APIs (email, payments, data services)",
      "Scripting repetitive tasks",
      "Data syncing between systems",
    ],
    deliverables: [
      "A working integration or script",
      "Documentation of what it does and how to change it",
    ],
    technologies: ["Node.js", "REST APIs", "Scripting"],
  },
  {
    slug: "deployment-technical-setup",
    title: "Deployment & Technical Setup",
    summary: "Get an application properly deployed, with a real domain and working infrastructure.",
    whoFor: "Projects that are built but not live, or live in the wrong place.",
    includes: [
      "Hosting and deployment setup (Vercel or similar)",
      "Domain and DNS configuration",
      "Environment variables and production setup",
    ],
    deliverables: ["A live, working deployment on your own domain"],
    technologies: ["Vercel", "DNS", "AWS Fundamentals"],
  },
  {
    slug: "website-improvements",
    title: "Website Improvements",
    summary: "Performance, responsiveness, and UI/UX fixes for an existing site.",
    whoFor:
      "Sites that already exist but load slowly, look broken on mobile, or need a design refresh.",
    includes: [
      "Performance audit and fixes",
      "Mobile responsiveness fixes",
      "UI/UX improvements",
      "Accessibility fixes",
    ],
    deliverables: ["A faster, cleaner, more usable site — same content, better execution"],
    technologies: ["HTML/CSS", "JavaScript", "Next.js"],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    summary: "Ongoing updates and technical support after launch.",
    whoFor: "Anyone who wants their site kept up to date without hiring in-house.",
    includes: [
      "Regular updates and small fixes",
      "Monitoring for issues",
      "Content or feature additions as needed",
    ],
    deliverables: ["A site that keeps working, with a point of contact when something needs to change"],
    technologies: [],
  },
];

export const seedProjects: Project[] = [
  {
    slug: "pulse",
    name: "Pulse",
    status: "completed",
    summary:
      "An animation-heavy landing page concept for a fictional focus-tracking app, built to explore scroll-linked motion design and accessible animation.",
    problem:
      "Heavily animated landing pages often become inaccessible or janky in practice — motion that looks impressive on a fast desktop can break down on mobile, ignore users who've asked for reduced motion, or just feel like a demo reel instead of a considered interface.",
    solution:
      "Built a fully animated marketing landing page for a fictional focus-tracking product: scroll-linked reveal animations, a staggered hero entrance with an animated stat panel, and a working waitlist form with inline validation — with complete prefers-reduced-motion support throughout, so the experience degrades gracefully instead of breaking.",
    architecture: [
      "Browser",
      "React 19",
      "Motion (animation)",
      "Vite (static build)",
      "Hosting",
    ],
    techStack: ["React", "Vite", "Motion", "JavaScript"],
    keyFeatures: [
      "Scroll-linked reveal animations across every section",
      "Staggered hero entrance with an animated stat panel",
      "Full prefers-reduced-motion support throughout",
      "Working waitlist form with inline validation and success state",
      "Fully responsive, no horizontal scroll from 375px up",
    ],
    whatILearned:
      "Building animation that respects accessibility settings by default rather than as an afterthought, and how much timing and staggering affect whether motion feels premium or just busy.",
    githubUrl: "https://github.com/Sufyanulhaq/pulse",
    demoUrl: "https://pulse-sufyanulhaq.vercel.app",
  },
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
    // No demoUrl: the Vercel deployment serves the raw .php source instead
    // of executing it (no PHP runtime configured there), so there's no
    // working live demo to link to honestly.
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
    // No demoUrl: same issue as Hotel Booking — served as raw PHP, not executed.
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
    githubUrl: "https://github.com/Sufyanulhaq/sufyanulhaq-website",
  },
];

export const seedSkillGroups: SkillGroup[] = [
  {
    title: "Development",
    description: "Core languages and frameworks used day to day.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "PHP",
      "HTML/CSS",
      "Responsive Web Development",
    ],
    isCurrentlyLearning: false,
  },
  {
    title: "Cloud & Infrastructure",
    description: "Deployment and infrastructure fundamentals.",
    skills: ["AWS Fundamentals", "Linux Fundamentals", "Vercel Deployment"],
    isCurrentlyLearning: false,
  },
  {
    title: "APIs & Automation",
    description: "Connecting services and automating repetitive work.",
    skills: ["REST APIs", "API Integration", "Scripting", "Automation"],
    isCurrentlyLearning: false,
  },
  {
    title: "Tools & Data",
    description: "Version control, workflow, and data.",
    skills: ["Git", "GitHub", "SQL", "MySQL"],
    isCurrentlyLearning: false,
  },
];

export const seedExperience: Experience[] = [
  {
    role: "Junior Web Developer",
    org: "NextTech Solutions",
    location: "Rawalpindi, Pakistan",
    bullets: [
      "Built and maintained web applications end to end — frontend UI, backend logic, and database-driven features using HTML, CSS, JavaScript, and PHP.",
      "Integrated APIs and handled data flow between the frontend and backend to support real application features.",
      "Debugged production issues and shipped fixes, working directly with a team rather than in isolation.",
      "Worked from client requirements through to a deployed, working feature — the same problem-solving approach I bring to software and automation work now.",
    ],
  },
  {
    role: "Web Designing Intern",
    org: "NextTech Solutions",
    location: "Islamabad, Pakistan",
    bullets: [
      "Converted visual designs into working, responsive HTML/CSS interfaces.",
      "Defined technical requirements for e-commerce functionality, translating client needs into buildable site concepts.",
      "Got early, hands-on exposure to the gap between design intent and technical implementation — a lesson that still shapes how I approach UI work.",
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
    org: "FUUST, ISB",
    year: "2023",
  },
];
