import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: 'e.g. "Web Developer"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 2,
      description: "One confident sentence used on the homepage hero.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "aboutText",
      title: "About Text",
      type: "text",
      rows: 8,
      description: "Plain text. Leave a blank line between paragraphs.",
    }),
    defineField({ name: "email", title: "Contact Email", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "githubUrl", title: "GitHub URL", type: "url" }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
      description: "International format, digits only, e.g. 447469753723",
    }),
    defineField({
      name: "cvFile",
      title: "CV File",
      type: "file",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "seoDescription",
      title: "Default SEO Description",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
