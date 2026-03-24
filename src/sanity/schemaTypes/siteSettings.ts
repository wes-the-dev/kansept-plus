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
        {
          name: "heroImage",
          title: "Hero Image / Video",
          type: "mediaAsset",
          description: "The large full-screen background displayed on the homepage when visitors first land on the site. Can be a photo or a video.",
        },
        {
          name: "heroTagline",
          title: "Hero Tagline",
          type: "string",
          description: "Short label shown inside the orange badge at the bottom-left of the hero (e.g. 'Imagine | Design | Build').",
        },
        {
          name: "studioBody",
          title: "Studio Description",
          type: "text",
          rows: 4,
          description: "One paragraph of text displayed below the hero image that introduces Kansept Plus to visitors.",
        },
        {
          name: "checkerboardImage1",
          title: "Checkerboard — Interior Design Image / Video",
          type: "mediaAsset",
          description: "The media displayed on the left side of the 'Interior Design' panel in the two-block section below the studio description.",
        },
        {
          name: "checkerboardInteriorText",
          title: "Checkerboard — Interior Design Text",
          type: "text",
          rows: 4,
          description: "The paragraph of text shown in the dark 'Interior Design' panel. Describes your interior design philosophy briefly.",
        },
        {
          name: "checkerboardImage2",
          title: "Checkerboard — Who We Are Image / Video",
          type: "mediaAsset",
          description: "The media displayed on the right side of the 'Who We Are' panel in the two-block section.",
        },
        {
          name: "imageQuote",
          title: "Image Quote Text",
          type: "string",
          description: "An inspiring quote shown beside an image in the middle of the homepage.",
        },
        {
          name: "imageQuoteImage",
          title: "Image Quote — Background Image / Video",
          type: "mediaAsset",
          description: "The media displayed to the left of the homepage quote block.",
        },
        {
          name: "dualImage1",
          title: "Dual Images — Left Image / Video",
          type: "mediaAsset",
          description: "Left media item in the two-image side-by-side block near the bottom of the homepage.",
        },
        {
          name: "dualImage2",
          title: "Dual Images — Right Image / Video",
          type: "mediaAsset",
          description: "Right media item in the two-image side-by-side block near the bottom of the homepage.",
        },
      ],
    }),

    // ── WHO WE ARE PAGE ───────────────────────────────────────────
    defineField({
      name: "whoWeAre",
      title: "Who We Are Page",
      type: "object",
      fields: [
        {
          name: "topImage",
          title: "Intro Section — Image / Video",
          type: "mediaAsset",
          description: "Large media displayed on the right side of the opening 'Who We Are' section.",
        },
        {
          name: "introParagraph1",
          title: "Intro — First Paragraph",
          type: "text",
          rows: 3,
          description: "The main introductory paragraph in the opening section. Also used on the homepage 'Who We Are' panel.",
        },
        {
          name: "introParagraph2",
          title: "Intro — Second Paragraph",
          type: "text",
          rows: 3,
          description: "A supporting paragraph shown below the first intro paragraph on the Who We Are page.",
        },
        {
          name: "establishedYear",
          title: "Established Year",
          type: "string",
          description: "The year Kansept Plus was founded (e.g. '2015'). Displayed as 'Established 2015 • Lagos'.",
        },
        {
          name: "aboutPhoto",
          title: "About Kansept — Photo / Video",
          type: "mediaAsset",
          description: "Media displayed in the dark 'About Kansept' section. Typically a studio or project image.",
        },
        {
          name: "aboutQuote",
          title: "About Kansept — Quote",
          type: "text",
          rows: 3,
          description: "Short inspiring quote shown as the heading of the dark 'About Kansept' section.",
        },
        {
          name: "aboutBody",
          title: "About Kansept — Body Paragraph",
          type: "text",
          rows: 4,
          description: "Paragraph of text below the quote in the 'About Kansept' dark section. Describes the studio's history and growth.",
        },
        {
          name: "leadDesignerName",
          title: "Lead Designer — Name",
          type: "string",
          description: "Name of the lead designer, shown in the stat grid at the bottom of the About Kansept section.",
        },
        {
          name: "leadDesignerFocus",
          title: "Lead Designer — Focus Area",
          type: "string",
          description: "The design speciality of the lead designer (e.g. 'Residential'). Shown alongside the name.",
        },
        {
          name: "teamSectionHeading",
          title: "Team Section — Main Heading",
          type: "string",
          description: "Large heading in the team members section (e.g. 'Meet the Minds Behind Kansept').",
        },
        {
          name: "teamSectionSubtext",
          title: "Team Section — Subtext",
          type: "text",
          rows: 3,
          description: "Supporting paragraph shown below the team section heading, describing the team composition.",
        },
        {
          name: "processSectionHeading",
          title: "Process Section — Heading",
          type: "string",
          description: "The large heading shown above the process steps timeline (e.g. 'How We Work').",
        },
        {
          name: "processSteps",
          title: "Process Steps",
          type: "array",
          description: "Each step represents a phase in your design and build process. They appear in a vertical timeline on the Who We Are page.",
          of: [
            {
              type: "object",
              fields: [
                { name: "number", title: "Step Number", type: "string", description: "Display number for this step (e.g. '01', '02')." },
                { name: "title", title: "Step Title", type: "string", description: "Short name for this phase in uppercase (e.g. 'DISCOVERY VISIT')." },
                { name: "description", title: "Description", type: "text", rows: 3, description: "One or two sentences explaining what happens during this step." },
                { name: "bullets", title: "Bullet Points", type: "array", description: "Optional list of specific activities or deliverables for this step.", of: [{ type: "string" }] },
                { name: "quote", title: "Step Quote", type: "string", description: "Optional short italicised quote displayed inside a callout box for this step." },
                { name: "image", title: "Step Image / Video", type: "mediaAsset", description: "Media representing this process step — displayed alongside the step text in the timeline." },
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
        {
          name: "heroImage",
          title: "Hero Image / Video",
          type: "mediaAsset",
          description: "The media displayed on the right side of the Services page hero section.",
        },
        {
          name: "heroHeadline",
          title: "Hero Headline",
          type: "string",
          description: "Main headline for the Services page (e.g. 'Comprehensive Design'). Displayed in large text.",
        },
        {
          name: "heroSubheadline",
          title: "Hero Subheadline (italic)",
          type: "string",
          description: "Italic accent line below the headline (e.g. '& Build Solutions'). Displayed in the brand orange colour.",
        },
        {
          name: "heroDescription",
          title: "Hero Description",
          type: "text",
          rows: 3,
          description: "Short paragraph below the hero headline that summarises what Kansept Plus offers.",
        },
        {
          name: "ctaHeadline",
          title: "CTA Section — Headline",
          type: "string",
          description: "Headline for the orange call-to-action banner at the bottom of the Services page (e.g. 'Ready to Build Your Vision?').",
        },
        {
          name: "ctaBody",
          title: "CTA Section — Body Text",
          type: "text",
          rows: 2,
          description: "Supporting text below the CTA headline, inviting visitors to get in touch.",
        },
      ],
    }),

    // ── CONTACT / GET IN TOUCH ────────────────────────────────────
    defineField({
      name: "contact",
      title: "Contact Information",
      type: "object",
      description: "These details appear on the Contact page and in the website footer.",
      fields: [
        {
          name: "address",
          title: "Studio Address",
          type: "string",
          description: "Full street address of the studio. Use a newline (Enter) to split across two lines if needed.",
        },
        {
          name: "email",
          title: "Email Address",
          type: "string",
          description: "The main contact email address (e.g. info@kanseptplus.com).",
        },
        {
          name: "phone",
          title: "Phone Number",
          type: "string",
          description: "Primary phone number including country code (e.g. +234 123 456 7890).",
        },
        {
          name: "hours",
          title: "Business Hours",
          type: "string",
          description: "Studio opening hours (e.g. 'Mon – Fri  9:00am – 5:00pm'). Use a newline to add a second line.",
        },
        {
          name: "contactImage1",
          title: "Contact Image / Video 1",
          type: "mediaAsset",
          description: "First decorative media shown alongside the contact form on the Contact page and Who We Are page.",
        },
        {
          name: "contactImage2",
          title: "Contact Image / Video 2",
          type: "mediaAsset",
          description: "Second decorative media shown beside the contact form on the Contact page and Who We Are page.",
        },
      ],
    }),

    // ── PROJECTS PAGE ─────────────────────────────────────────────
    defineField({
      name: "projectsPage",
      title: "Projects Page",
      type: "object",
      fields: [
        {
          name: "heroImage",
          title: "Hero Image / Video",
          type: "mediaAsset",
          description: "Full-screen background media for the Projects page hero section.",
        },
        {
          name: "introHeadline",
          title: "Intro Headline",
          type: "text",
          rows: 2,
          description: "Large headline shown below the hero on the Projects page.",
        },
        {
          name: "introBody",
          title: "Intro Body Paragraph",
          type: "text",
          rows: 3,
          description: "Supporting paragraph below the intro headline on the Projects page.",
        },
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
          description: "Main heading displayed on the Gallery page (e.g. 'A Glimpse of Kansept Plus').",
        },
        {
          name: "subheading",
          title: "Page Subheading",
          type: "string",
          description: "Short descriptive line shown beside the heading on the Gallery page.",
        },
      ],
    }),

    // ── FOOTER / GLOBAL ───────────────────────────────────────────
    defineField({
      name: "global",
      title: "Global / Footer",
      type: "object",
      fields: [
        {
          name: "navbarLogo",
          title: "Navbar Logo",
          type: "mediaAsset",
          description: "Upload the logo image or video displayed in the centre of the navigation bar. Recommended: transparent PNG.",
        },
        {
          name: "footerTagline",
          title: "Footer Tagline",
          type: "string",
          description: "Small tagline displayed beneath the studio name in the footer (e.g. 'Imagine | Design | Build').",
        },
        {
          name: "footerCtaBody",
          title: "Footer — CTA Body Text",
          type: "text",
          rows: 2,
          description: "Short paragraph in the footer's 'Start Your Project' column that encourages visitors to get in touch.",
        },
        {
          name: "instagramUrl",
          title: "Instagram URL",
          type: "url",
          description: "Full URL to the Kansept Plus Instagram profile.",
        },
        {
          name: "linkedinUrl",
          title: "LinkedIn URL",
          type: "url",
          description: "Full URL to the Kansept Plus LinkedIn page.",
        },
        {
          name: "pinterestUrl",
          title: "Pinterest / YouTube URL",
          type: "url",
          description: "Full URL to the Kansept Plus Pinterest or YouTube channel (third social icon in the footer).",
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
