import { HomePage } from "@/components/HomePage";
import { getGalleryImages, getSiteSettings } from "@/sanity/lib/queries";

export default async function Page() {
  const [sanityGallery, settings] = await Promise.all([
    getGalleryImages(),
    getSiteSettings(),
  ]);

  return <HomePage sanityGallery={sanityGallery} settings={settings} />;
}
