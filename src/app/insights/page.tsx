import type { Metadata } from "next";
import { InsightsPage } from "@/components/InsightsPage";
import { getInsights, getSiteSettings } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Design Insights & Trends — Kansept Plus Lagos",
  description:
    "Read the latest interior design insights, trends, and inspiration from Kansept Plus — Lagos, Nigeria's premier interior design studio.",
  alternates: { canonical: "https://www.kanseptplus.com/insights" },
  openGraph: {
    url: "https://www.kanseptplus.com/insights",
    title: "Design Insights & Trends — Kansept Plus Lagos",
    description:
      "Interior design inspiration, trends, and ideas from Kansept Plus Lagos, Nigeria.",
  },
};

export default async function Page() {
  const [sanityInsights, settings] = await Promise.all([getInsights(), getSiteSettings()]);
  return <InsightsPage sanityInsights={sanityInsights} settings={settings} />;
}
