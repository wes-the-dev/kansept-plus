import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Members",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      description: "The team member's full name as it will appear on the Who We Are page.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      description: "Their job title or role within the studio (e.g. 'Lead Interior Designer', 'Construction Manager').",
    }),
    defineField({
      name: "photo",
      title: "Photo / Video",
      type: "mediaAsset",
      description: "A professional portrait photo or short video of the team member. Portrait orientation works best.",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the position of this person in the team grid. Lower numbers appear first (e.g. '1' for the first person shown).",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
