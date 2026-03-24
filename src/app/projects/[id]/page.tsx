import { ProjectDetail } from "@/components/ProjectDetail";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProjectBySlug } from "@/sanity/lib/queries";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Try to find a Sanity project by slug (Sanity) — numeric IDs fall back inside the component
  const sanityProject = await getProjectBySlug(id);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header />
      <main>
        <ProjectDetail id={id} sanityProject={sanityProject} />
      </main>
      <Footer />
    </div>
  );
}
