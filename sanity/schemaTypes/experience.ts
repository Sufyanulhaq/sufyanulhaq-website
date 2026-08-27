import { defineField, defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { Building2 } from "lucide-react";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: Building2,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "experience" }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "org",
      title: "Organisation",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "startDate", title: "Start", type: "string" }),
    defineField({ name: "endDate", title: "End", type: "string" }),
    defineField({
      name: "bullets",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "role", subtitle: "org" },
  },
});
