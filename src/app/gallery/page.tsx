import type { Metadata } from "next";
import { GalleryPage } from "@/components/GalleryPage";
import { getGalleryImages, getSiteSettings } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Gallery — Kansept Plus",
  description:
    "Browse the full gallery of Kansept Plus's interior design work — hotels, residences, and commercial spaces.",
  alternates: { canonical: "https://www.kanseptplus.com/gallery" },
  openGraph: {
    url: "https://www.kanseptplus.com/gallery",
    title: "Gallery | Kansept Plus",
    description:
      "Browse the full gallery of Kansept Plus's interior design work.",
  },
};

export default async function Page() {
  const [sanityImages, settings] = await Promise.all([
    getGalleryImages(),
    getSiteSettings(),
  ]);
  return <GalleryPage sanityImages={sanityImages} settings={settings} />;
}
