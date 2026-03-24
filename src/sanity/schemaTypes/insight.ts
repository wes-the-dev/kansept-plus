import { defineField, defineType } from "sanity";

export const insight = defineType({
  name: "insight",
  title: "Insights (Blog Posts)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Post Title",
      type: "string",
      description: "The headline of the blog post as it appears on the Insights page and the post itself.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL path)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "Auto-generated from the post title. Forms the URL for this post (e.g. /insights/the-art-of-layering-light). Click 'Generate' to create it.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short 1–2 sentence summary of the post, shown on the Insights listing page beneath the title. Keep it under 160 characters for best results.",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Select the category that best fits this post. Used to filter posts on the Insights page.",
      options: {
        list: [
          { title: "Interior Design", value: "Interior Design" },
          { title: "Construction", value: "Construction" },
          { title: "Design Trends", value: "Design Trends" },
          { title: "Wellness", value: "Wellness" },
          { title: "Architecture", value: "Architecture" },
        ],
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      description: "The name of the person who wrote this post (e.g. 'Kansept Plus Team' or a specific team member's name).",
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      description: "The date and time this post was or will be published. Displayed on the post page and used to sort posts (newest first).",
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: "Estimated reading time shown on the post card and post page (e.g. '5 min read').",
    }),
    defineField({
      name: "mainImage",
      title: "Cover Image / Video",
      type: "mediaAsset",
      description: "The main media shown at the top of the post and as the thumbnail on the Insights listing page.",
    }),
    defineField({
      name: "content",
      title: "Post Content",
      type: "array",
      description: "Write the full body of the blog post here. Use H2 / H3 for section headings, Blockquote for pull quotes, and the image button to insert images within the text.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        },
        { type: "image", options: { hotspot: true } },
      ],
    }),
  ],
  orderings: [
    {
      title: "Published Date (Newest First)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "mainImage", subtitle: "category" },
  },
});
