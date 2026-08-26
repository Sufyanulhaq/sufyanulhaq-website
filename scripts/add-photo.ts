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
  const photoPath = process.argv[2];
  if (!photoPath) throw new Error("Usage: tsx scripts/add-photo.ts <path>");

  console.log("Uploading photo...");
  const asset = await client.assets.upload("image", fs.readFileSync(photoPath), {
    filename: "sufyan-portrait.jpg",
  });

  console.log("Attaching to site settings...");
  await client
    .patch("siteSettings")
    .set({
      photo: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
      },
    })
    .commit();

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
