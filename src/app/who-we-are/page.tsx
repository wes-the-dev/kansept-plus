import { WhoWeArePage } from "@/components/WhoWeArePage";
import { getTeamMembers, getSiteSettings } from "@/sanity/lib/queries";

export default async function Page() {
  const [sanityTeam, settings] = await Promise.all([
    getTeamMembers(),
    getSiteSettings(),
  ]);
  return <WhoWeArePage sanityTeam={sanityTeam} settings={settings} />;
}
