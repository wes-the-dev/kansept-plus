import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Images / Videos",
  type: "document",
  fields: [
    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "image",
      description: "Choose whether this gallery item is a photo or a video.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      description: "Upload the photo for this gallery item. Only required when Media Type is set to Image.",
    }),
    defineField({
      name: "video",
      title: "Video File",
      type: "file",
      options: {
        accept: "video/mp4,video/webm,video/ogg",
      },
      description: "Upload a video file (MP4, WebM, or Ogg). Only required when Media Type is set to Video. Recommended format is MP4 for universal compatibility.",
    }),
    defineField({
      name: "alt",
      title: "Alt Text / Caption",
      type: "string",
      description: "Briefly describe the content of this image or video (e.g. 'Living room with custom joinery'). Used for accessibility and hover captions.",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the position of this item in the gallery. Lower numbers appear first. Leave blank to append at the end.",
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
    select: { title: "alt", media: "image", mediaType: "mediaType" },
    prepare({ title, media, mediaType }) {
      return {
        title: title || (mediaType === "video" ? "Video Item" : "Gallery Image"),
        media,
      };
    },
  },
});
