// One-off script to load the site's honest content into Sanity.
// Run with: npx tsx scripts/seed.ts
// Safe to re-run: uses deterministic _ids and createOrReplace throughout.
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@sanity/client";
import {
  seedSiteSettings,
  seedProjects,
  seedSkillGroups,
  seedExperience,
  seedEducation,
} from "../sanity/seed-data";

process.loadEnvFile(path.join(__dirname, "..", ".env.local"));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const SCREENSHOTS_DIR = "/tmp/shots";
const CV_PATH = path.join(
  process.env.HOME || "",
  "Downloads",
  "MuhammadSufyanUl_Haq.pdf",
);

const projectScreenshots: Record<string, string> = {
  "roof-info": path.join(SCREENSHOTS_DIR, "roof-cropped.png"),
  "sufyanulhaq-com": path.join(SCREENSHOTS_DIR, "sufyanulhaq-website.png"),
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function uploadImage(filePath: string) {
  const buffer = fs.readFileSync(filePath);
  const asset = await client.assets.upload("image", buffer, {
    filename: path.basename(filePath),
  });
  return asset;
}

async function uploadFile(filePath: string) {
  const buffer = fs.readFileSync(filePath);
  const asset = await client.assets.upload("file", buffer, {
    filename: path.basename(filePath),
  });
  return asset;
}

async function main() {
  console.log(`Seeding project ${projectId} (dataset: ${dataset})`);

  // Site settings + CV
  let cvAssetId: string | undefined;
  if (fs.existsSync(CV_PATH)) {
    console.log("Uploading CV...");
    const cvAsset = await uploadFile(CV_PATH);
    cvAssetId = cvAsset._id;
  } else {
    console.log(`No CV found at ${CV_PATH}, skipping.`);
  }

  console.log("Writing site settings...");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    headline: seedSiteSettings.headline,
    tagline: seedSiteSettings.tagline,
    aboutText: seedSiteSettings.aboutParagraphs.join("\n\n"),
    email: seedSiteSettings.email,
    location: seedSiteSettings.location,
    githubUrl: seedSiteSettings.githubUrl,
    linkedinUrl: seedSiteSettings.linkedinUrl,
    seoDescription: seedSiteSettings.seoDescription,
    ...(cvAssetId && {
      cvFile: {
        _type: "file",
        asset: { _type: "reference", _ref: cvAssetId },
      },
    }),
  });

  // Projects
  console.log("Writing projects...");
  for (const [index, project] of seedProjects.entries()) {
    const screenshotPath = projectScreenshots[project.slug];
    let screenshotAssetId: string | undefined;
    if (screenshotPath && fs.existsSync(screenshotPath)) {
      console.log(`  Uploading screenshot for ${project.slug}...`);
      const asset = await uploadImage(screenshotPath);
      screenshotAssetId = asset._id;
    }

    await client.createOrReplace({
      _id: `project-${project.slug}`,
      _type: "project",
      name: project.name,
      slug: { _type: "slug", current: project.slug },
      status: project.status,
      summary: project.summary,
      problem: project.problem,
      solution: project.solution,
      architecture: project.architecture,
      techStack: project.techStack,
      keyFeatures: project.keyFeatures,
      whatILearned: project.whatILearned,
      githubUrl: project.githubUrl,
      demoUrl: project.demoUrl,
      order: index,
      ...(screenshotAssetId && {
        screenshot: {
          _type: "image",
          asset: { _type: "reference", _ref: screenshotAssetId },
        },
      }),
    });
  }

  // Skill groups
  console.log("Writing skill groups...");
  for (const [index, group] of seedSkillGroups.entries()) {
    await client.createOrReplace({
      _id: `skillGroup-${slugify(group.title)}`,
      _type: "skillGroup",
      title: group.title,
      description: group.description,
      skills: group.skills,
      isCurrentlyLearning: group.isCurrentlyLearning,
      order: index,
    });
  }

  // Experience
  console.log("Writing experience...");
  for (const [index, job] of seedExperience.entries()) {
    await client.createOrReplace({
      _id: `experience-${slugify(job.role)}-${index}`,
      _type: "experience",
      role: job.role,
      org: job.org,
      location: job.location,
      bullets: job.bullets,
      order: index,
    });
  }

  // Education
  console.log("Writing education...");
  for (const [index, item] of seedEducation.entries()) {
    await client.createOrReplace({
      _id: `education-${slugify(item.degree)}-${index}`,
      _type: "education",
      degree: item.degree,
      org: item.org,
      year: item.year,
      order: index,
    });
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
