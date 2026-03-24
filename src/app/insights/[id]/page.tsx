import type { Metadata } from "next";
import { BlogPost } from "@/components/BlogPost";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getInsightBySlug, getSiteSettings } from "@/sanity/lib/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getInsightBySlug(id);

  if (!post) {
    return {
      title: "Design Insight — Kansept Plus Lagos",
      description: "Interior design insights and inspiration from Kansept Plus Lagos, Nigeria.",
    };
  }

  const description =
    post.excerpt ?? `${post.title} — interior design insight from Kansept Plus Lagos, Nigeria.`;

  const imageUrl = (post.mainImage as { asset?: { url?: string } } | undefined)?.asset?.url;

  return {
    title: post.title,
    description,
    alternates: { canonical: `https://www.kanseptplus.com/insights/${id}` },
    openGraph: {
      type: "article",
      url: `https://www.kanseptplus.com/insights/${id}`,
      title: `${post.title} | Kansept Plus`,
      description,
      ...(post.publishedAt ? { publishedTime: post.publishedAt } : {}),
      ...(post.author ? { authors: [post.author] } : {}),
      ...(imageUrl ? { images: [{ url: imageUrl, alt: post.title }] } : {}),
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [sanityPost, settings] = await Promise.all([getInsightBySlug(id), getSiteSettings()]);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header settings={settings} />
      <main>
        <BlogPost id={id} sanityPost={sanityPost} />
      </main>
      <Footer />
    </div>
  );
}
