import { defineField, defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { FolderGit2 } from "lucide-react";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: FolderGit2,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "project" }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In Development", value: "in-development" },
          { title: "Learning", value: "learning" },
        ],
      },
      initialValue: "completed",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag (optional badge)",
      type: "string",
      description:
        'Short label shown next to the project name, e.g. "Personal Concept · UI & Motion" for a fictional/practice project that isn\'t real client work.',
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 2,
      description: "One or two sentences shown on project cards.",
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "problem",
      title: "Problem",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "architecture",
      title: "Architecture Stages",
      type: "array",
      of: [{ type: "string" }],
      description: 'Ordered stages, e.g. "Browser", "PHP", "MySQL", "Hosting".',
    }),
    defineField({
      name: "techStack",
      title: "Technology",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "keyFeatures",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "whatILearned",
      title: "What I Learned",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "demoUrl", title: "Live Demo URL", type: "url" }),
    defineField({
      name: "screenshot",
      title: "Screenshot",
      type: "image",
      description: "A real screenshot of the live project.",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "status", media: "screenshot" },
  },
});
