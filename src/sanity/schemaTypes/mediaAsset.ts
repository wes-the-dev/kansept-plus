import { defineType } from "sanity";

/**
 * Reusable media field that accepts either an image or a video.
 * Use `type: "mediaAsset"` in place of `type: "image"` throughout the schema.
 */
export const mediaAsset = defineType({
  name: "mediaAsset",
  title: "Media (Image or Video)",
  type: "object",
  fields: [
    {
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
      description: "Choose whether to upload a photo or a video for this slot.",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      description: "Upload a photo. Only used when Media Type is set to Image.",
    },
    {
      name: "video",
      title: "Video File",
      type: "file",
      options: {
        accept: "video/mp4,video/webm,video/ogg",
      },
      description: "Upload a video (MP4, WebM, or Ogg). Only used when Media Type is set to Video. Recommended format is MP4 for universal compatibility.",
    },
  ],
  preview: {
    select: { media: "image", mediaType: "mediaType" },
    prepare({ media, mediaType }) {
      return {
        title: mediaType === "video" ? "Video" : "Image",
        media,
      };
    },
  },
});
