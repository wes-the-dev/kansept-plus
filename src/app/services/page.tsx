import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";
import { getServices, getSiteSettings } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Interior Design & Civil Works Services in Lagos",
  description:
    "Explore Kansept Plus's full range of services: interior design, renovations & remodelling, project management, and structural works — all delivered across Lagos, Nigeria.",
  alternates: { canonical: "https://www.kanseptplus.com/services" },
  openGraph: {
    url: "https://www.kanseptplus.com/services",
    title: "Interior Design & Civil Works Services in Lagos | Kansept Plus",
    description:
      "From residential interior design to full structural works — Kansept Plus delivers premium design services across Lagos, Nigeria.",
  },
};

export default async function Page() {
  const [sanityServices, settings] = await Promise.all([
    getServices(),
    getSiteSettings(),
  ]);
  return <ServicesPage sanityServices={sanityServices} settings={settings} />;
}
