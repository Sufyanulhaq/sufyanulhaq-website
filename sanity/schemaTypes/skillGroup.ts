import { defineField, defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export const skillGroup = defineType({
  name: "skillGroup",
  title: "Skill Group",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "skillGroup" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "description", title: "Description", type: "string" }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isCurrentlyLearning",
      title: "Is this the 'Currently Learning' group?",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
