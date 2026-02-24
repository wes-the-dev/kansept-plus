import { BlogPost } from "@/components/BlogPost";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header />
      <main>
        <BlogPost id={id} />
      </main>
      <Footer />
    </div>
  );
}
