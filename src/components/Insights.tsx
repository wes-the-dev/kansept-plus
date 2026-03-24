"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { TransitionLink } from "./TransitionLink";
import { ArrowRight, Search, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import type { SanityInsight } from "@/sanity/lib/queries";
import { resolveMediaAsset } from "@/sanity/lib/imageUrl";

const categories = ["All", "Interior Design", "Construction", "Design Trends", "Wellness"];

interface InsightsProps {
  sanityInsights?: SanityInsight[] | null;
}

function sanityToPost(p: SanityInsight) {
  const media = resolveMediaAsset(p.mainImage, 800);
  return {
    id: p.slug.current,
    title: p.title,
    excerpt: p.excerpt || "",
    category: p.category || "Design Trends",
    author: p.author || "",
    date: p.publishedAt ? new Date(p.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "",
    readTime: p.readTime || "",
    image: media?.url || "/images/blog-1.jpg",
    isVideo: media?.isVideo ?? false,
  };
}

export const Insights = ({ sanityInsights }: InsightsProps) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const allPosts =
    sanityInsights && sanityInsights.length > 0
      ? sanityInsights.map(sanityToPost)
      : blogPosts.map((p) => ({ ...p, id: String(p.id), isVideo: false }));

  const filteredPosts = activeCategory === "All"
    ? allPosts
    : allPosts.filter((post) => post.category === activeCategory);

  const featuredPost = allPosts[0];
  const remainingPosts = filteredPosts.filter((post) => post.id !== featuredPost.id);

  return (
    <div className="bg-[#FFF3EB] text-[#1a3749] min-h-screen pt-[100px]">

      {/* HERO SECTION */}
      <section className="px-6 md:px-[60px] py-16 md:py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-[11px] font-medium uppercase tracking-[4px] text-[#b5754d] mb-6">The Journal</h1>
          <h2 className="text-4xl md:text-6xl font-light mb-8">Insights &amp; Perspectives</h2>
          <p className="text-[16px] font-light max-w-2xl mx-auto opacity-80 leading-relaxed">
            Exploring the intersection of design, architecture, and living.
            Stay updated with our latest thoughts, project stories, and industry trends.
          </p>
        </motion.div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && (
        <section className="px-6 md:px-[60px] mb-20">
          <TransitionLink href={`/insights/${featuredPost.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 group cursor-pointer"
            >
              <div className="h-[400px] lg:h-[600px] overflow-hidden">
                {featuredPost.isVideo ? (
                  <video src={featuredPost.image} autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                )}
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[11px] uppercase tracking-[2px] text-[#b5754d] font-medium mb-4">{featuredPost.category}</span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 group-hover:text-[#b5754d] transition-colors">{featuredPost.title}</h3>
                <p className="text-[15px] font-light leading-relaxed text-[#1a3749]/70 mb-8">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-[12px] text-[#1a3749]/60">
                  <div className="flex items-center gap-2"><Clock size={14} /><span>{featuredPost.readTime}</span></div>
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2 mt-8 text-[11px] uppercase tracking-[2px] text-[#b5754d] font-medium">
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          </TransitionLink>
        </section>
      )}

      {/* SEARCH + FILTER */}
      <section className="px-6 md:px-[60px] mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-b border-[#1a3749]/10 py-6">
          <div className="flex gap-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] uppercase tracking-[2px] transition-colors ${activeCategory === cat ? "text-[#b5754d] font-medium" : "text-[#1a3749]/50 hover:text-[#1a3749]"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-[#1a3749]/40">
            <Search size={16} />
            <span className="text-[11px] uppercase tracking-[2px]">Search</span>
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="px-6 md:px-[60px] pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {remainingPosts.map((post, index) => (
            <TransitionLink href={`/insights/${post.id}`} key={post.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="h-[280px] overflow-hidden mb-6">
                  {post.isVideo ? (
                    <video src={post.image} autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  )}
                </div>
                <span className="text-[10px] uppercase tracking-[2px] text-[#b5754d] font-medium">{post.category}</span>
                <h3 className="text-[18px] font-light mt-3 mb-3 leading-snug group-hover:text-[#b5754d] transition-colors">{post.title}</h3>
                <p className="text-[13px] font-light leading-relaxed text-[#1a3749]/60 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-[11px] text-[#1a3749]/50">
                  <div className="flex items-center gap-1"><Clock size={12} /><span>{post.readTime}</span></div>
                  <span>{post.date}</span>
                </div>
              </motion.div>
            </TransitionLink>
          ))}
        </div>
      </section>

    </div>
  );
};
