import type { Metadata } from "next";
import { WhoWeArePage } from "@/components/WhoWeArePage";
import { getTeamMembers, getSiteSettings } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "About Us — Interior Designers in Lagos, Nigeria",
  description:
    "Meet the team behind Kansept Plus — a Lagos-based interior design studio crafting exceptional residential and commercial spaces across Nigeria with a passion for detail and purpose.",
  alternates: { canonical: "https://www.kanseptplus.com/who-we-are" },
  openGraph: {
    url: "https://www.kanseptplus.com/who-we-are",
    title: "About Us — Interior Designers in Lagos, Nigeria | Kansept Plus",
    description:
      "Meet the Lagos-based team at Kansept Plus — interior designers crafting exceptional spaces across Nigeria.",
  },
};

export default async function Page() {
  const [sanityTeam, settings] = await Promise.all([
    getTeamMembers(),
    getSiteSettings(),
  ]);
  return <WhoWeArePage sanityTeam={sanityTeam} settings={settings} />;
}
