import { InsightsPage } from "@/components/InsightsPage";
import { getInsights } from "@/sanity/lib/queries";

export default async function Page() {
  const sanityInsights = await getInsights();
  return <InsightsPage sanityInsights={sanityInsights} />;
}
