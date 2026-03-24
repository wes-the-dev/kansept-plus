import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (for anchor links)",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short label shown above the title (e.g. 'Interior Design')",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Larger heading shown in the section (e.g. 'Curating Spaces with Character')",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "serviceItems",
      title: "Service Items",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet list of specific services offered.",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "secondaryImage",
      title: "Secondary Image (optional)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
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
    select: { title: "title", media: "mainImage" },
  },
});
