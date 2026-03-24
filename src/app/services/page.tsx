import { ServicesPage } from "@/components/ServicesPage";
import { getServices, getSiteSettings } from "@/sanity/lib/queries";

export default async function Page() {
  const [sanityServices, settings] = await Promise.all([
    getServices(),
    getSiteSettings(),
  ]);
  return <ServicesPage sanityServices={sanityServices} settings={settings} />;
}
