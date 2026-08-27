import { defineField, defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { GraduationCap } from "lucide-react";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
  icon: GraduationCap,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "education" }),
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "org",
      title: "Institution",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "degree", subtitle: "org" },
  },
});
