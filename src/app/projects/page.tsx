import { ProjectsPage } from "@/components/ProjectsPage";
import { getProjects, getSiteSettings } from "@/sanity/lib/queries";

export default async function Page() {
  const [sanityProjects, settings] = await Promise.all([
    getProjects(),
    getSiteSettings(),
  ]);
  return <ProjectsPage sanityProjects={sanityProjects} settings={settings} />;
}
