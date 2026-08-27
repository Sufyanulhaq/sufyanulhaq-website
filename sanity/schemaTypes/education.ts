import { defineField, defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
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
    defineField({ name: "year", title: "Year", type: "string" }),
  ],
  preview: {
    select: { title: "degree", subtitle: "org" },
  },
});
