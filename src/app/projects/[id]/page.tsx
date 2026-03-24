import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProjectBySlug, getSiteSettings } from "@/sanity/lib/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectBySlug(id);

  if (!project) {
    return {
      title: "Project — Interior Design Lagos",
      description: "Explore interior design and civil works projects by Kansept Plus in Lagos, Nigeria.",
    };
  }

  const description =
    project.description?.[0] ??
    `${project.title} — an interior design project by Kansept Plus in Lagos, Nigeria.`;

  const imageUrl = (project.mainImage as { asset?: { url?: string } } | undefined)?.asset?.url;

  return {
    title: `${project.title} — Interior Design Lagos`,
    description,
    alternates: { canonical: `https://www.kanseptplus.com/projects/${id}` },
    openGraph: {
      url: `https://www.kanseptplus.com/projects/${id}`,
      title: `${project.title} | Kansept Plus Lagos`,
      description,
      ...(imageUrl ? { images: [{ url: imageUrl, alt: project.title }] } : {}),
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [sanityProject, settings] = await Promise.all([getProjectBySlug(id), getSiteSettings()]);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header settings={settings} />
      <main>
        <ProjectDetail id={id} sanityProject={sanityProject} />
      </main>
      <Footer />
    </div>
  );
}
