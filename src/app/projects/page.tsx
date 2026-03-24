import type { Metadata } from "next";
import { ProjectsPage } from "@/components/ProjectsPage";
import { getProjects, getSiteSettings } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Interior Design Portfolio — Projects in Lagos",
  description:
    "Browse Kansept Plus's portfolio of completed interior design and civil works projects across Lagos, Nigeria — residential, commercial, and hospitality spaces.",
  alternates: { canonical: "https://www.kanseptplus.com/projects" },
  openGraph: {
    url: "https://www.kanseptplus.com/projects",
    title: "Interior Design Portfolio — Projects in Lagos | Kansept Plus",
    description:
      "See our completed interior design and civil works projects across Lagos, Nigeria.",
  },
};

export default async function Page() {
  const [sanityProjects, settings] = await Promise.all([
    getProjects(),
    getSiteSettings(),
  ]);
  return <ProjectsPage sanityProjects={sanityProjects} settings={settings} />;
}
