import { defineField, defineType } from "sanity";
import { Settings } from "lucide-react";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: Settings,
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: 'e.g. "Web Developer" — shown as the H1 and browser tab title.',
      validation: (rule) => rule.required().max(60).warning("Keep it short — this is also the page title."),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 2,
      description: "One confident sentence used on the homepage hero.",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "aboutText",
      title: "About Text",
      type: "text",
      rows: 8,
      description: "Plain text. Leave a blank line between paragraphs.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
      description: "International format, digits only, e.g. 447469753723",
      validation: (rule) =>
        rule
          .regex(/^\d+$/, { name: "digits only" })
          .warning("Digits only, no spaces, +, or dashes — e.g. 447469753723."),
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
      description: "Shown in Google search results. Aim for 120–158 characters.",
      validation: (rule) =>
        rule
          .required()
          .max(160)
          .warning("Google truncates search snippets past ~158 characters."),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
