import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Hotel & Beverage", value: "Hotel & Beverage" },
          { title: "Hotels", value: "Hotels" },
          { title: "Private Residential", value: "Private Residential" },
          { title: "Commercial", value: "Commercial" },
          { title: "Architecture & Design", value: "Architecture & Design" },
        ],
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main Image (used on listing page)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "array",
      of: [{ type: "text" }],
      description: "Each item is a paragraph in the project detail page.",
    }),
    defineField({
      name: "details",
      title: "Project Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
          ],
        },
      ],
      description: "e.g. Location, Architect, Builder, Photographer, etc.",
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "object",
          name: "gallerySection",
          title: "Gallery Section",
          fields: [
            {
              name: "layout",
              title: "Layout",
              type: "string",
              options: {
                list: [
                  { title: "Full Width", value: "full" },
                  { title: "Split (2 images)", value: "split" },
                ],
              },
            },
            {
              name: "images",
              title: "Images",
              type: "array",
              of: [{ type: "image", options: { hotspot: true } }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
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
    select: { title: "title", media: "mainImage", subtitle: "category" },
  },
});
