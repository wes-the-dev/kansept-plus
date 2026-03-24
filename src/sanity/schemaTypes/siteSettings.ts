import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    // ── HOMEPAGE ──────────────────────────────────────────────────
    defineField({
      name: "homepage",
      title: "Homepage",
      type: "object",
      fields: [
        { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },
        { name: "heroTagline", title: "Hero Tagline", type: "string", description: "Small label above the headline (e.g. 'Interior Design & Construction')" },
        { name: "studioTitle", title: "Studio Description Title", type: "string" },
        { name: "studioBody", title: "Studio Description Body", type: "text", rows: 4 },
        { name: "checkerboardImage1", title: "Checkerboard Image 1", type: "image", options: { hotspot: true } },
        { name: "checkerboardImage2", title: "Checkerboard Image 2", type: "image", options: { hotspot: true } },
        { name: "imageQuote", title: "Image Quote Text", type: "string" },
        { name: "imageQuoteImage", title: "Image Quote Background", type: "image", options: { hotspot: true } },
        { name: "dualImage1", title: "Dual Image 1", type: "image", options: { hotspot: true } },
        { name: "dualImage2", title: "Dual Image 2", type: "image", options: { hotspot: true } },
      ],
    }),

    // ── WHO WE ARE PAGE ───────────────────────────────────────────
    defineField({
      name: "whoWeAre",
      title: "Who We Are Page",
      type: "object",
      fields: [
        { name: "topImage", title: "Top Section Image", type: "image", options: { hotspot: true } },
        { name: "introParagraph1", title: "Intro Paragraph 1", type: "text", rows: 3 },
        { name: "introParagraph2", title: "Intro Paragraph 2", type: "text", rows: 3 },
        { name: "establishedYear", title: "Established Year", type: "string" },
        { name: "aboutPhoto", title: "About Kansept Photo", type: "image", options: { hotspot: true } },
        { name: "aboutQuote", title: "About Section Quote", type: "text", rows: 3 },
        { name: "aboutBody", title: "About Section Body Paragraph", type: "text", rows: 4 },
        { name: "leadDesignerName", title: "Lead Designer Name", type: "string" },
        { name: "leadDesignerFocus", title: "Lead Designer Focus", type: "string" },
        {
          name: "processSteps",
          title: "Process Steps",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "number", title: "Step Number", type: "string" },
                { name: "title", title: "Step Title", type: "string" },
                { name: "description", title: "Description", type: "text", rows: 3 },
                {
                  name: "bullets",
                  title: "Bullet Points",
                  type: "array",
                  of: [{ type: "string" }],
                },
                { name: "quote", title: "Step Quote", type: "string" },
                { name: "image", title: "Step Image", type: "image", options: { hotspot: true } },
              ],
            },
          ],
        },
      ],
    }),

    // ── SERVICES PAGE ─────────────────────────────────────────────
    defineField({
      name: "servicesPage",
      title: "Services Page",
      type: "object",
      fields: [
        { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },
        { name: "heroHeadline", title: "Hero Headline", type: "string" },
        { name: "heroSubheadline", title: "Hero Subheadline (italic)", type: "string" },
        { name: "heroDescription", title: "Hero Description", type: "text", rows: 3 },
        { name: "ctaHeadline", title: "CTA Section Headline", type: "string" },
        { name: "ctaBody", title: "CTA Section Body", type: "text", rows: 2 },
      ],
    }),

    // ── CONTACT / GET IN TOUCH ────────────────────────────────────
    defineField({
      name: "contact",
      title: "Contact Information",
      type: "object",
      fields: [
        { name: "address", title: "Address", type: "string" },
        { name: "email", title: "Email", type: "string" },
        { name: "phone", title: "Phone", type: "string" },
        { name: "hours", title: "Business Hours", type: "string" },
        { name: "contactImage1", title: "Contact Image 1", type: "image", options: { hotspot: true } },
        { name: "contactImage2", title: "Contact Image 2", type: "image", options: { hotspot: true } },
      ],
    }),

    // ── PROJECTS PAGE ─────────────────────────────────────────────
    defineField({
      name: "projectsPage",
      title: "Projects Page",
      type: "object",
      fields: [
        { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },
        { name: "introHeadline", title: "Intro Headline", type: "text", rows: 2 },
        { name: "introBody", title: "Intro Body Paragraph", type: "text", rows: 3 },
      ],
    }),

    // ── GALLERY PAGE ──────────────────────────────────────────────
    defineField({
      name: "galleryPage",
      title: "Gallery Page",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Page Heading",
          type: "string",
          description: "Main heading displayed on the gallery page (e.g. 'A Glimpse of Kansept Plus').",
        },
        {
          name: "subheading",
          title: "Page Subheading",
          type: "string",
          description: "Short descriptive line shown beside the heading.",
        },
      ],
    }),

    // ── FOOTER / GLOBAL ───────────────────────────────────────────
    defineField({
      name: "global",
      title: "Global / Footer",
      type: "object",
      fields: [
        { name: "navbarLogo", title: "Navbar Logo", type: "image", options: { hotspot: true }, description: "Upload the logo image displayed in the centre of the navigation bar." },
        { name: "footerTagline", title: "Footer Tagline", type: "string" },
        { name: "instagramUrl", title: "Instagram URL", type: "url" },
        { name: "linkedinUrl", title: "LinkedIn URL", type: "url" },
        { name: "pinterestUrl", title: "Pinterest URL", type: "url" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
