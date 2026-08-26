import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
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
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 2,
      description: "One or two sentences shown on project cards.",
    }),
    defineField({ name: "problem", title: "Problem", type: "text", rows: 3 }),
    defineField({ name: "solution", title: "Solution", type: "text", rows: 3 }),
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
    }),
    defineField({
      name: "keyFeatures",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "whatILearned",
      title: "What I Learned",
      type: "text",
      rows: 3,
    }),
    defineField({ name: "githubUrl", title: "GitHub URL", type: "url" }),
    defineField({ name: "demoUrl", title: "Live Demo URL", type: "url" }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "status" },
  },
});
