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

const aboutText = [
  "I'm Sufyan Ul Haq, a software developer based in Liverpool, UK. My strongest background is in web development — HTML, CSS, JavaScript, PHP, and more recently TypeScript, React, and Next.js — and I'm continuously expanding into cloud computing, automation, and modern infrastructure.",
  "I enjoy turning practical problems into software, and I care about how something is built as much as whether it works — clean structure, sensible architecture, and code I can explain and defend.",
  "I'm open to software, web, and cloud-leaning developer roles, internships, and freelance projects. Below is what I've built, what I'm building now, and what I'm working on next.",
].join("\n\n");

client
  .patch("siteSettings")
  .set({ aboutText })
  .commit()
  .then(() => console.log("done"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
