// Fallback content used whenever no Sanity project is configured yet
// (see lib/content.ts). Keep this in sync with what a fresh Sanity
// dataset should be seeded with. It's the same honest content either way.
import type {
  SiteSettings,
  Project,
  SkillGroup,
  Service,
  Experience,
  Education,
} from "@/lib/content-types";

export const seedSiteSettings: SiteSettings = {
  headline: "Python Software Developer",
  tagline:
    "Python and TypeScript developer building web applications and the AI features that go inside them, from chat assistants to automation.",
  aboutParagraphs: [
    "I'm Sufyan Ul Haq, a software developer based in Liverpool, UK. I work mainly in Python, TypeScript and PHP. I build web applications with Next.js, React and Laravel, and I add AI features to them: chat assistants that answer from a company's own documents, automation between the tools a business already uses, and integrations with the Claude and OpenAI APIs.",
    "I like turning practical problems into software, and I care about how something is built as much as whether it works. That means clean structure, sensible architecture, tests where they matter, and code I can explain and defend.",
    "I'm open to software, web, and AI leaning developer roles, freelance projects, and technical collaborations. Below is what I've built, what I'm building now, and what I'm working on next.",
  ],
  email: "hello@sufyanulhaq.com",
  location: "Liverpool, UK",
  githubUrl: "https://github.com/Sufyanulhaq",
  linkedinUrl: "https://www.linkedin.com/in/sufyanulhaq/",
  whatsapp: "447469753723",
  seoDescription:
    "Sufyan Ul Haq, a Python software developer in Liverpool, UK. Web apps with Next.js and Laravel, plus AI chat assistants and automation with Claude and OpenAI.",
};

export const seedServices: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    summary: "Modern, responsive, professional websites built from scratch.",
    whoFor:
      "Individuals, freelancers, and small businesses who need a real website, not a template with their name on it.",
    includes: [
      "Custom design and build",
      "Responsive layout for mobile, tablet, and desktop",
      "SEO foundation: metadata, sitemap, semantic HTML",
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
    summary: "Custom web applications and business systems, more than static pages.",
    whoFor:
      "Businesses that need something interactive: bookings, accounts, a dashboard, or a workflow specific to how they operate.",
    includes: [
      "Custom functionality built around your real process",
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
    slug: "ai-chat-assistants-integrations",
    title: "AI Chat Assistants & Integrations",
    summary:
      "Chat assistants that answer from your own documents, and AI features added to the software you already run.",
    whoFor:
      "Businesses with documentation or support content that customers or staff keep asking about, or an existing app that could use a summarising, sorting or drafting step.",
    includes: [
      "Chat assistants that answer from your own docs, with the source shown for every answer",
      "AI steps inside an existing app, such as summarising, sorting or drafting",
      "Connecting the Claude or OpenAI APIs to your back end",
      "Input checks, rate limiting and a clear answer when the docs have nothing relevant",
    ],
    deliverables: [
      "A working assistant or feature, deployed and tested",
      "Source code you own and a short guide to adding or changing content",
    ],
    technologies: ["Python", "FastAPI", "Claude API", "OpenAI API", "Next.js"],
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
    deliverables: ["A faster, cleaner, more usable site with the same content"],
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
    slug: "ai-docs-assistant",
    name: "AI Docs Assistant",
    status: "completed",
    tag: "Code on GitHub, no live demo",
    summary:
      "A chat assistant that answers questions from your own documentation and shows which passages each answer came from. Python and FastAPI back end, Next.js front end, works with Claude, OpenAI or offline.",
    problem:
      "Documentation bots often sound confident while making things up, and it is hard to see where an answer came from. A team needs an assistant it can trust to stay inside its own content and to admit when the answer is not there.",
    solution:
      'Built a retrieval based assistant. The Python back end splits documents by heading, finds the passages that match a question with BM25 search, and streams the answer back as it is written. The Next.js front end shows clickable citations next to every answer. A question with nothing relevant in the docs never reaches the model and gets an honest "could not find it" reply instead of a guess.',
    architecture: ["Browser", "Next.js", "FastAPI", "BM25 search", "Claude, OpenAI or offline"],
    techStack: ["Python", "FastAPI", "Next.js", "TypeScript", "BM25", "Claude API", "OpenAI API", "pytest"],
    keyFeatures: [
      "Answers stream live with clickable source citations",
      "A relevance check keeps off topic questions away from the model",
      "Works with Claude, OpenAI, or an offline mode that needs no API key",
      "Short follow up questions use the conversation history",
      "Input validation, rate limiting and API keys kept on the server",
      "58 automated tests, including a retrieval accuracy check on 18 questions",
    ],
    whatILearned:
      'Search quality decides answer quality, so I tested retrieval on its own against real questions before connecting any model. That caught a stemming bug that would have hidden some documents. A browser test also caught a message like "tell me a joke" inheriting the previous question\'s topic, which now has a regression test.',
    githubUrl: "https://github.com/Sufyanulhaq/ai-docs-assistant",
  },
  {
    slug: "pulse",
    name: "Pulse",
    status: "completed",
    tag: "Personal concept, UI and motion",
    summary:
      "An animation-heavy landing page concept for a fictional focus-tracking app, built to explore scroll-linked motion design and accessible animation.",
    problem:
      "Heavily animated landing pages often become inaccessible or janky in practice. Motion that looks impressive on a fast desktop can break down on mobile, ignore users who have asked for reduced motion, or feel like a demo reel instead of a considered interface.",
    solution:
      "Built a fully animated marketing landing page for a fictional focus-tracking product: scroll-linked reveal animations, a staggered hero entrance with an animated stat panel, and a working waitlist form with inline validation. It has full prefers-reduced-motion support throughout, so the experience degrades gracefully instead of breaking.",
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
      "Building animation that respects accessibility settings by default rather than as an afterthought, and how much timing and staggering affect whether motion feels polished or just busy.",
    githubUrl: "https://github.com/Sufyanulhaq/pulse",
    demoUrl: "https://pulse-sufyanulhaq.vercel.app",
  },
  {
    slug: "hotel-booking-website",
    name: "Hotel Booking Website",
    status: "completed",
    tag: "Code on GitHub, no live demo",
    summary:
      "A full-stack hotel booking application covering room search, booking, and a sandbox payment integration.",
    problem:
      "Hotel booking flows involve more moving parts than they first appear: searching availability, holding a room selection, collecting payment, and confirming or refunding a booking without losing data along the way.",
    solution:
      "Built a multi-page PHP application backed by a MySQL database, covering the full booking lifecycle: room search and detail pages, a booking and confirmation flow, and a payment integration built against Instamojo's test and sandbox API, including a webhook-verified confirmation step and a refund flow. No real money moves through it. It's a working integration, not a live payment processor.",
    architecture: [
      "Browser",
      "PHP (server-rendered pages)",
      "MySQL database",
      "Payment webhook (sandbox)",
      "Hosting",
    ],
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    keyFeatures: [
      "Room search and detail pages",
      "Booking and confirmation flow",
      "Payment integration via Instamojo's sandbox API, with HMAC-verified webhook confirmation",
      "Refund flow via Instamojo's test API",
      "Contact and newsletter forms",
    ],
    whatILearned:
      "Structuring a multi-page PHP application around a relational schema, keeping a multi-step flow (search, book, pay, confirm) consistent when any step can fail, and integrating a third-party payment API end to end, including webhook signature verification.",
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
    tag: "Live and deployed",
    summary:
      "A Laravel-based content platform reviewing roofing materials, built with a proper MVC structure and test coverage.",
    problem:
      "Content-driven sites need a maintainable structure behind them, not a pile of static pages. That means routing, data models, and a way to verify changes don't break existing behaviour.",
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
      "Working inside a framework's conventions instead of building everything from scratch (routing, ORM, migrations), and writing tests alongside the application code.",
    githubUrl: "https://github.com/Sufyanulhaq/ROOF",
    demoUrl: "https://www.roof.info",
  },
  {
    slug: "butcher-shop",
    name: "Butcher Shop",
    status: "completed",
    tag: "Code on GitHub, no live demo",
    summary:
      "An e-commerce site for an online butcher shop, including customer accounts, cart/checkout, and an admin panel.",
    problem:
      "An online shop needs more than a product list. It needs accounts, a cart that persists through checkout, and a way for the shop owner to manage products without editing code.",
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
    // No demoUrl: same issue as Hotel Booking, served as raw PHP, not executed.
  },
  {
    slug: "sufyanulhaq-com",
    name: "This Website",
    status: "completed",
    tag: "Live and deployed",
    summary:
      "This site itself: a production personal website built with Next.js, TypeScript, and an embedded headless CMS.",
    problem:
      "A portfolio needs to be easy to keep up to date. Adding a project or updating skills shouldn't mean editing React components.",
    solution:
      "Built with Next.js (App Router) and TypeScript, with content managed through an embedded Sanity Studio so every section (projects, skills, experience, writing) can be updated without touching code.",
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
      "Designing a content model that's simple enough to maintain, and the Next.js App Router patterns for combining static generation with CMS-driven content.",
    githubUrl: "https://github.com/Sufyanulhaq/sufyanulhaq-website",
    demoUrl: "https://sufyanulhaq.com",
  },
];

export const seedSkillGroups: SkillGroup[] = [
  {
    title: "Development",
    description: "Core languages and frameworks used day to day.",
    skills: [
      "Python",
      "FastAPI",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "PHP",
      "Laravel",
      "HTML/CSS",
      "Responsive Web Development",
    ],
    isCurrentlyLearning: false,
  },
  {
    title: "Cloud & Deployment",
    description: "Deployment and infrastructure fundamentals.",
    skills: ["AWS Fundamentals", "Linux Fundamentals", "Deployment", "DNS", "Vercel"],
    isCurrentlyLearning: false,
  },
  {
    title: "AI, APIs & Automation",
    description: "Connecting services, adding AI features and automating repetitive work.",
    skills: [
      "REST APIs",
      "API Integration",
      "Claude and OpenAI APIs",
      "AI Chat Assistants",
      "n8n",
      "Scripting",
      "Automation",
    ],
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
      "Built and maintained web applications end to end: frontend UI, backend logic, and database-driven features using HTML, CSS, JavaScript, and PHP.",
      "Integrated APIs and handled data flow between the frontend and backend to support real application features.",
      "Debugged production issues and shipped fixes, working directly with a team rather than in isolation.",
      "Took features from client requirements through to a deployed, working release in a live production environment.",
    ],
  },
  {
    role: "IT Support Technician",
    org: "NextTech Solutions",
    location: "Islamabad, Pakistan",
    bullets: [
      "Converted visual designs into working, responsive HTML/CSS interfaces.",
      "Defined technical requirements for e-commerce functionality, translating client needs into buildable site concepts.",
      "Worked directly with developers on design-to-implementation handoff, an early grounding in how technical constraints shape UI decisions.",
      "Provided first-line IT support, troubleshooting hardware and software issues, setting up computers and user accounts, and helping users with day-to-day IT queries.",
      "Managed user accounts, passwords, and access permissions.",
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
