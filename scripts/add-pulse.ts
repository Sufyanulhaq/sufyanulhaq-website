// One-off script to add the Pulse project and reorder featured projects.
// Run with: npx tsx scripts/add-pulse.ts
import fs from "node:fs";
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
  console.log("Uploading Pulse screenshot...");
  const screenshotPath = "/tmp/shots/pulse-cropped.png";
  const asset = await client.assets.upload(
    "image",
    fs.readFileSync(screenshotPath),
    { filename: "pulse.png" },
  );

  console.log("Creating Pulse project...");
  await client.createOrReplace({
    _id: "project-pulse",
    _type: "project",
    name: "Pulse",
    slug: { _type: "slug", current: "pulse" },
    status: "completed",
    summary:
      "An animation-heavy landing page concept for a fictional focus-tracking app, built to explore scroll-linked motion design and accessible animation.",
    problem:
      "Heavily animated landing pages often become inaccessible or janky in practice — motion that looks impressive on a fast desktop can break down on mobile, ignore users who've asked for reduced motion, or just feel like a demo reel instead of a considered interface.",
    solution:
      "Built a fully animated marketing landing page for a fictional focus-tracking product: scroll-linked reveal animations, a staggered hero entrance with an animated stat panel, and a working waitlist form with inline validation — with complete prefers-reduced-motion support throughout, so the experience degrades gracefully instead of breaking.",
    architecture: ["Browser", "React 19", "Motion (animation)", "Vite (static build)", "Hosting"],
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
    order: 0,
    screenshot: {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
    },
  });

  console.log("Reordering existing projects...");
  const reorder: [string, number][] = [
    ["project-roof-info", 1],
    ["project-hotel-booking-website", 2],
    ["project-butcher-shop", 3],
    ["project-sufyanulhaq-com", 4],
  ];
  for (const [id, order] of reorder) {
    await client.patch(id).set({ order }).commit();
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
