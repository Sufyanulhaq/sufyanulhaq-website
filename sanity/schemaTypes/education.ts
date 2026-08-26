import { defineField, defineType } from "sanity";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
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
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "degree", subtitle: "org" },
  },
});
