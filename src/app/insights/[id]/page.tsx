import { BlogPost } from "@/components/BlogPost";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getInsightBySlug } from "@/sanity/lib/queries";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Try to find a Sanity insight by slug — numeric IDs fall back inside the component
  const sanityPost = await getInsightBySlug(id);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header />
      <main>
        <BlogPost id={id} sanityPost={sanityPost} />
      </main>
      <Footer />
    </div>
  );
}
