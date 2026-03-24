import { sanityFetch } from "./client";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SanityImageRef {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  mainImage?: SanityImageRef;
  description?: string[];
  details?: { label: string; value: string }[];
  gallery?: Array<{
    layout: "full" | "split";
    images: SanityImageRef[];
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
  mainImage?: SanityImageRef;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[];
}

export interface SanityTeamMember {
  _id: string;
  name: string;
  role?: string;
  photo?: SanityImageRef;
  bio?: string;
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
  mainImage?: SanityImageRef;
  secondaryImage?: SanityImageRef;
  order?: number;
}

export interface SanityGalleryImage {
  _id: string;
  image: SanityImageRef;
  alt?: string;
  order?: number;
}

export interface SanitySettings {
  homepage?: {
    heroImage?: SanityImageRef;
    heroTagline?: string;
    studioTitle?: string;
    studioBody?: string;
    checkerboardImage1?: SanityImageRef;
    checkerboardImage2?: SanityImageRef;
    imageQuote?: string;
    imageQuoteImage?: SanityImageRef;
    dualImage1?: SanityImageRef;
    dualImage2?: SanityImageRef;
  };
  whoWeAre?: {
    topImage?: SanityImageRef;
    introParagraph1?: string;
    introParagraph2?: string;
    establishedYear?: string;
    aboutPhoto?: SanityImageRef;
    aboutQuote?: string;
    aboutBody?: string;
    leadDesignerName?: string;
    leadDesignerFocus?: string;
    processSteps?: Array<{
      number: string;
      title: string;
      description: string;
      bullets?: string[];
      quote?: string;
      image?: SanityImageRef;
    }>;
  };
  servicesPage?: {
    heroImage?: SanityImageRef;
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
    contactImage1?: SanityImageRef;
    contactImage2?: SanityImageRef;
  };
  projectsPage?: {
    heroImage?: SanityImageRef;
    introHeadline?: string;
    introBody?: string;
  };
  global?: {
    navbarLogo?: SanityImageRef;
    footerTagline?: string;
    instagramUrl?: string;
    linkedinUrl?: string;
    pinterestUrl?: string;
  };
}

// ─── Queries ─────────────────────────────────────────────────────────────────

const IMAGE_FIELDS = `{ asset->{ url, _id } }`;

export async function getProjects(): Promise<SanityProject[] | null> {
  return sanityFetch<SanityProject[]>(
    `*[_type == "project"] | order(order asc) {
      _id, title, slug, category,
      mainImage ${IMAGE_FIELDS},
      order
    }`
  );
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  return sanityFetch<SanityProject>(
    `*[_type == "project" && slug.current == $slug][0] {
      _id, title, slug, category,
      mainImage ${IMAGE_FIELDS},
      description,
      details,
      gallery[] {
        layout,
        images[] ${IMAGE_FIELDS}
      }
    }`,
    { slug }
  );
}

export async function getInsights(): Promise<SanityInsight[] | null> {
  return sanityFetch<SanityInsight[]>(
    `*[_type == "insight"] | order(publishedAt desc) {
      _id, title, slug, excerpt, category, author, publishedAt, readTime,
      mainImage ${IMAGE_FIELDS}
    }`
  );
}

export async function getInsightBySlug(slug: string): Promise<SanityInsight | null> {
  return sanityFetch<SanityInsight>(
    `*[_type == "insight" && slug.current == $slug][0] {
      _id, title, slug, excerpt, category, author, publishedAt, readTime,
      mainImage ${IMAGE_FIELDS},
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
      photo ${IMAGE_FIELDS},
      bio, order
    }`
  );
}

export async function getServices(): Promise<SanityService[] | null> {
  return sanityFetch<SanityService[]>(
    `*[_type == "service"] | order(order asc) {
      _id, title, slug, tagline, heading, description, serviceItems,
      mainImage ${IMAGE_FIELDS},
      secondaryImage ${IMAGE_FIELDS},
      order
    }`
  );
}

export async function getGalleryImages(): Promise<SanityGalleryImage[] | null> {
  return sanityFetch<SanityGalleryImage[]>(
    `*[_type == "galleryImage"] | order(order asc) {
      _id,
      image ${IMAGE_FIELDS},
      alt, order
    }`
  );
}

export async function getSiteSettings(): Promise<SanitySettings | null> {
  return sanityFetch<SanitySettings>(
    `*[_type == "siteSettings"][0] {
      homepage {
        heroImage ${IMAGE_FIELDS},
        heroTagline,
        studioTitle, studioBody,
        checkerboardImage1 ${IMAGE_FIELDS},
        checkerboardImage2 ${IMAGE_FIELDS},
        imageQuote,
        imageQuoteImage ${IMAGE_FIELDS},
        dualImage1 ${IMAGE_FIELDS},
        dualImage2 ${IMAGE_FIELDS}
      },
      whoWeAre {
        topImage ${IMAGE_FIELDS},
        introParagraph1, introParagraph2,
        establishedYear,
        aboutPhoto ${IMAGE_FIELDS},
        aboutQuote, aboutBody,
        leadDesignerName, leadDesignerFocus,
        processSteps[] {
          number, title, description, bullets, quote,
          image ${IMAGE_FIELDS}
        }
      },
      servicesPage {
        heroImage ${IMAGE_FIELDS},
        heroHeadline, heroSubheadline, heroDescription,
        ctaHeadline, ctaBody
      },
      contact {
        address, email, phone, hours,
        contactImage1 ${IMAGE_FIELDS},
        contactImage2 ${IMAGE_FIELDS}
      },
      projectsPage {
        heroImage ${IMAGE_FIELDS},
        introHeadline, introBody
      },
      global { navbarLogo ${IMAGE_FIELDS}, footerTagline, instagramUrl, linkedinUrl, pinterestUrl }
    }`
  );
}
