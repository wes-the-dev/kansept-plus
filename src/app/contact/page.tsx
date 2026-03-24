import { ContactPage } from "@/components/ContactPage";
import { getSiteSettings } from "@/sanity/lib/queries";

export default async function Page() {
  const settings = await getSiteSettings();
  return <ContactPage settings={settings} />;
}
