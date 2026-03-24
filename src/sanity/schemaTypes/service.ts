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
      description: "The internal name for this service (e.g. 'Interior Design', 'Renovations'). Also used as a fallback display title.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (Anchor ID)",
      type: "slug",
      options: { source: "title" },
      description: "Auto-generated from the title. Used as the anchor link so visitors can scroll directly to this service section (e.g. #interior-design). Click 'Generate' to create it.",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short label shown in small uppercase text above the section heading (e.g. 'Interior Design'). Acts as a category label.",
    }),
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      description: "The larger heading displayed inside this service section (e.g. 'Curating Spaces with Character').",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "A paragraph explaining what this service involves and the value it provides to clients.",
    }),
    defineField({
      name: "serviceItems",
      title: "Service Items (Bullet List)",
      type: "array",
      of: [{ type: "string" }],
      description: "List the specific deliverables or sub-services included. Each item appears as a bullet point in the section (e.g. 'Residential Design', 'Furniture Sourcing (FF&E)').",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image / Video",
      type: "mediaAsset",
      description: "The primary media displayed in this service section.",
    }),
    defineField({
      name: "secondaryImage",
      title: "Secondary Image / Video (optional)",
      type: "mediaAsset",
      description: "An optional second media item. When provided, the first service section displays both side by side in a split layout.",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the order in which services appear on the page. Lower numbers appear first (e.g. enter '1' for the first service).",
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
