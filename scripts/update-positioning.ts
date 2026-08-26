// One-off: broader positioning, restructured skills, honest experience rewrite.
import path from "node:path";
import { createClient } from "@sanity/client";

process.loadEnvFile(path.join(__dirname, "..", ".env.local"));

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function main() {
  console.log("Updating site settings (positioning)...");
  await client.patch("siteSettings").set({
    headline: "Software Developer",
    tagline:
      "Software developer with a growing focus on cloud computing, automation, and modern digital systems.",
    seoDescription:
      "Sufyan Ul Haq is a software developer based in Liverpool, UK, building modern web applications and expanding into cloud computing, automation, and infrastructure.",
  }).commit();

  console.log("Deleting old skill groups...");
  const oldGroups = [
    "skillGroup-web-development",
    "skillGroup-programming-data",
    "skillGroup-tools",
    "skillGroup-currently-learning",
  ];
  for (const id of oldGroups) {
    await client.delete(id);
  }

  console.log("Creating new skill groups...");
  const newGroups = [
    {
      _id: "skillGroup-development",
      title: "Development",
      description: "Core languages and frameworks used day to day.",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "PHP", "HTML/CSS", "Responsive Web Development"],
      isCurrentlyLearning: false,
      order: 0,
    },
    {
      _id: "skillGroup-cloud-infrastructure",
      title: "Cloud & Infrastructure",
      description: "Deployment and infrastructure fundamentals.",
      skills: ["AWS Fundamentals", "Linux Fundamentals", "Vercel Deployment"],
      isCurrentlyLearning: false,
      order: 1,
    },
    {
      _id: "skillGroup-apis-automation",
      title: "APIs & Automation",
      description: "Connecting services and automating repetitive work.",
      skills: ["REST APIs", "API Integration", "Scripting", "Automation"],
      isCurrentlyLearning: false,
      order: 2,
    },
    {
      _id: "skillGroup-tools-data",
      title: "Tools & Data",
      description: "Version control, workflow, and data.",
      skills: ["Git", "GitHub", "SQL", "MySQL"],
      isCurrentlyLearning: false,
      order: 3,
    },
  ];
  for (const group of newGroups) {
    await client.createOrReplace({ _type: "skillGroup", ...group });
  }

  console.log("Rewriting education...");
  await client.patch("education-bsc-computer-science-1").set({
    org: "FUUST, ISB",
  }).commit();

  console.log("Rewriting experience (no dates, broader framing)...");
  await client.createOrReplace({
    _id: "experience-junior-web-developer-0",
    _type: "experience",
    role: "Junior Web Developer",
    org: "NextTech Solutions",
    location: "Rawalpindi, Pakistan",
    startDate: "",
    endDate: "",
    bullets: [
      "Built and maintained web applications end to end — frontend UI, backend logic, and database-driven features using HTML, CSS, JavaScript, and PHP.",
      "Integrated APIs and handled data flow between the frontend and backend to support real application features.",
      "Debugged production issues and shipped fixes, working directly with a team rather than in isolation.",
      "Worked from client requirements through to a deployed, working feature — the same problem-solving approach I bring to software and automation work now.",
    ],
    order: 0,
  });

  await client.createOrReplace({
    _id: "experience-web-designing-intern-1",
    _type: "experience",
    role: "Web Designing Intern",
    org: "NextTech Solutions",
    location: "Islamabad, Pakistan",
    startDate: "",
    endDate: "",
    bullets: [
      "Converted visual designs into working, responsive HTML/CSS interfaces.",
      "Defined technical requirements for e-commerce functionality, translating client needs into buildable site concepts.",
      "Got early, hands-on exposure to the gap between design intent and technical implementation — a lesson that still shapes how I approach UI work.",
    ],
    order: 1,
  });

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
