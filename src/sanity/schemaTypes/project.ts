import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Name",
      type: "string",
      description: "The full name of the project as it will appear on the website (e.g. 'The Lagos Penthouse').",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL path)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "Auto-generated from the project name. This forms the URL for the project detail page (e.g. /projects/the-lagos-penthouse). Click 'Generate' to create it.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Select the category that best describes this project. Used for filtering on the projects page.",
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
      title: "Thumbnail Image / Video",
      type: "mediaAsset",
      description: "The cover media shown on the projects listing page and as the hero at the top of the project detail page.",
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "array",
      of: [{ type: "text" }],
      description: "Write a description of the project. Add one block per paragraph — each item you add becomes a separate paragraph on the project detail page.",
    }),
    defineField({
      name: "details",
      title: "Project Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              description: "The name of the detail (e.g. 'Location', 'Architect', 'Builder', 'Year').",
            },
            {
              name: "value",
              title: "Value",
              type: "string",
              description: "The corresponding value (e.g. 'Ikoyi, Lagos', '2023').",
            },
          ],
        },
      ],
      description: "Key facts about the project shown in a table on the detail page (e.g. Location, Architect, Builder, Photographer, Year).",
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      description: "Add gallery sections to build the visual showcase below the project description. Each section can be full-width or a side-by-side split of two images.",
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
              description: "'Full Width' displays one large image. 'Split (2 images)' displays two images side by side.",
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
              description: "Upload one image for Full Width layout, or two images for the Split layout.",
              of: [{ type: "mediaAsset" }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the position of this project in the projects grid. Lower numbers appear first (e.g. enter '1' to show this project first).",
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
