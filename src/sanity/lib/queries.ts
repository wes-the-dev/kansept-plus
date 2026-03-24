import { sanityFetch } from "./client";

// ─── Types ───────────────────────────────────────────────────────────────────

/** Raw image reference (still used for Portable Text content images inside insights) */
export interface SanityImageRef {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
}

/** Resolved media asset — returned from GROQ with asset URL already expanded */
export interface SanityMediaAsset {
  mediaType?: "image" | "video";
  image?: {
    _type: "image";
    asset?: { url: string; _id: string };
    hotspot?: { x: number; y: number; height: number; width: number };
  };
  video?: { asset: { url: string; _id: string } };
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  mainImage?: SanityMediaAsset;
  description?: string[];
  details?: { label: string; value: string }[];
  gallery?: Array<{
    layout: "full" | "split";
    images: SanityMediaAsset[];
  }>;
  order?: number;
}

export interface SanityInsight {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  category?: string;
  author?: string;
  publishedAt?: string;
  readTime?: string;
  mainImage?: SanityMediaAsset;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[];
}

export interface SanityTeamMember {
  _id: string;
  name: string;
  role?: string;
  photo?: SanityMediaAsset;
  order?: number;
}

export interface SanityService {
  _id: string;
  title: string;
  slug?: { current: string };
  tagline?: string;
  heading?: string;
  description?: string;
  serviceItems?: string[];
  mainImage?: SanityMediaAsset;
  secondaryImage?: SanityMediaAsset;
  order?: number;
}

export interface SanityGalleryImage {
  _id: string;
  mediaType?: "image" | "video";
  image?: SanityMediaAsset["image"];
  video?: { asset: { url: string; _id: string } };
  alt?: string;
  order?: number;
}

export interface SanitySettings {
  homepage?: {
    heroImage?: SanityMediaAsset;
    heroTagline?: string;
    studioBody?: string;
    checkerboardImage1?: SanityMediaAsset;
    checkerboardInteriorText?: string;
    checkerboardImage2?: SanityMediaAsset;
    imageQuote?: string;
    imageQuoteImage?: SanityMediaAsset;
    dualImage1?: SanityMediaAsset;
    dualImage2?: SanityMediaAsset;
  };
  whoWeAre?: {
    topImage?: SanityMediaAsset;
    introParagraph1?: string;
    introParagraph2?: string;
    establishedYear?: string;
    aboutPhoto?: SanityMediaAsset;
    aboutQuote?: string;
    aboutBody?: string;
    leadDesignerName?: string;
    leadDesignerFocus?: string;
    teamSectionHeading?: string;
    teamSectionSubtext?: string;
    processSectionHeading?: string;
    processSteps?: Array<{
      number: string;
      title: string;
      description: string;
      bullets?: string[];
      quote?: string;
      image?: SanityMediaAsset;
    }>;
  };
  servicesPage?: {
    heroImage?: SanityMediaAsset;
    heroHeadline?: string;
    heroSubheadline?: string;
    heroDescription?: string;
    ctaHeadline?: string;
    ctaBody?: string;
  };
  contact?: {
    address?: string;
    email?: string;
    phone?: string;
    hours?: string;
    contactImage1?: SanityMediaAsset;
    contactImage2?: SanityMediaAsset;
  };
  projectsPage?: {
    heroImage?: SanityMediaAsset;
    introHeadline?: string;
    introBody?: string;
  };
  galleryPage?: {
    heading?: string;
    subheading?: string;
  };
  global?: {
    navbarLogo?: SanityMediaAsset;
    footerTagline?: string;
    footerCtaBody?: string;
    instagramUrl?: string;
    linkedinUrl?: string;
    pinterestUrl?: string;
  };
}

// ─── GROQ fragment helpers ────────────────────────────────────────────────────

const MEDIA_FIELDS = `{
  mediaType,
  image { asset->{ url, _id }, hotspot },
  video { asset->{ url, _id } }
}`;

// ─── Queries ─────────────────────────────────────────────────────────────────

export async function getProjects(): Promise<SanityProject[] | null> {
  return sanityFetch<SanityProject[]>(
    `*[_type == "project"] | order(order asc) {
      _id, title, slug, category,
      mainImage ${MEDIA_FIELDS},
      order
    }`
  );
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  return sanityFetch<SanityProject>(
    `*[_type == "project" && slug.current == $slug][0] {
      _id, title, slug, category,
      mainImage ${MEDIA_FIELDS},
      description,
      details,
      gallery[] {
        layout,
        images[] ${MEDIA_FIELDS}
      }
    }`,
    { slug }
  );
}

export async function getInsights(): Promise<SanityInsight[] | null> {
  return sanityFetch<SanityInsight[]>(
    `*[_type == "insight"] | order(publishedAt desc) {
      _id, title, slug, excerpt, category, author, publishedAt, readTime,
      mainImage ${MEDIA_FIELDS}
    }`
  );
}

export async function getInsightBySlug(slug: string): Promise<SanityInsight | null> {
  return sanityFetch<SanityInsight>(
    `*[_type == "insight" && slug.current == $slug][0] {
      _id, title, slug, excerpt, category, author, publishedAt, readTime,
      mainImage ${MEDIA_FIELDS},
      content[] {
        ...,
        _type == "image" => { ..., asset-> }
      }
    }`,
    { slug }
  );
}

export async function getTeamMembers(): Promise<SanityTeamMember[] | null> {
  return sanityFetch<SanityTeamMember[]>(
    `*[_type == "teamMember"] | order(order asc) {
      _id, name, role,
      photo ${MEDIA_FIELDS},
      order
    }`
  );
}

export async function getServices(): Promise<SanityService[] | null> {
  return sanityFetch<SanityService[]>(
    `*[_type == "service"] | order(order asc) {
      _id, title, slug, tagline, heading, description, serviceItems,
      mainImage ${MEDIA_FIELDS},
      secondaryImage ${MEDIA_FIELDS},
      order
    }`
  );
}

export async function getGalleryImages(): Promise<SanityGalleryImage[] | null> {
  return sanityFetch<SanityGalleryImage[]>(
    `*[_type == "galleryImage"] | order(order asc) {
      _id,
      mediaType,
      image { asset->{ url, _id } },
      video { asset->{ url, _id } },
      alt, order
    }`
  );
}

export async function getSiteSettings(): Promise<SanitySettings | null> {
  return sanityFetch<SanitySettings>(
    `*[_type == "siteSettings"][0] {
      homepage {
        heroImage ${MEDIA_FIELDS},
        heroTagline,
        studioBody,
        checkerboardImage1 ${MEDIA_FIELDS},
        checkerboardInteriorText,
        checkerboardImage2 ${MEDIA_FIELDS},
        imageQuote,
        imageQuoteImage ${MEDIA_FIELDS},
        dualImage1 ${MEDIA_FIELDS},
        dualImage2 ${MEDIA_FIELDS}
      },
      whoWeAre {
        topImage ${MEDIA_FIELDS},
        introParagraph1, introParagraph2,
        establishedYear,
        aboutPhoto ${MEDIA_FIELDS},
        aboutQuote, aboutBody,
        leadDesignerName, leadDesignerFocus,
        teamSectionHeading, teamSectionSubtext,
        processSectionHeading,
        processSteps[] {
          number, title, description, bullets, quote,
          image ${MEDIA_FIELDS}
        }
      },
      servicesPage {
        heroImage ${MEDIA_FIELDS},
        heroHeadline, heroSubheadline, heroDescription,
        ctaHeadline, ctaBody
      },
      contact {
        address, email, phone, hours,
        contactImage1 ${MEDIA_FIELDS},
        contactImage2 ${MEDIA_FIELDS}
      },
      projectsPage {
        heroImage ${MEDIA_FIELDS},
        introHeadline, introBody
      },
      galleryPage { heading, subheading },
      global {
        navbarLogo ${MEDIA_FIELDS},
        footerTagline, footerCtaBody,
        instagramUrl, linkedinUrl, pinterestUrl
      }
    }`
  );
}
