import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { getSiteSettings } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Contact Us — Kansept Plus Interior Design Lagos",
  description:
    "Get in touch with Kansept Plus — Lagos's premier interior design and civil works studio. Located in Ikoyi, Lagos. Let's bring your space to life.",
  alternates: { canonical: "https://www.kanseptplus.com/contact" },
  openGraph: {
    url: "https://www.kanseptplus.com/contact",
    title: "Contact Kansept Plus — Interior Design Lagos",
    description:
      "Reach out to Lagos's premier interior design studio. Located in Ikoyi, Lagos, Nigeria.",
  },
};

export default async function Page() {
  const settings = await getSiteSettings();
  return <ContactPage settings={settings} />;
}
