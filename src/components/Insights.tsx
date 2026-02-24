"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { TransitionLink } from "./TransitionLink";
import { ArrowRight, Search, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogData";

const categories = ["All", "Interior Design", "Construction", "Design Trends", "Wellness"];

export const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = blogPosts[0];
  const remainingPosts = filteredPosts.filter((post) => post.id !== featuredPost.id);

  return (
    <div className="bg-[#FFF3EB] text-[#1a3749] min-h-screen pt-[100px]">

      {/* HERO SECTION */}
      <section className="px-6 md:px-[60px] py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[11px] font-medium uppercase tracking-[4px] text-[#b5754d] mb-6">The Journal</h1>
          <h2 className="text-4xl md:text-6xl font-light mb-8">Insights &amp; Perspectives</h2>
          <p className="text-[16px] font-light max-w-2xl mx-auto opacity-80 leading-relaxed">
            Exploring the intersection of design, architecture, and living.
            Stay updated with our latest thoughts, project stories, and industry trends.
          </p>
        </motion.div>
      </section>

      {/* FEATURED POST */}
      <section className="px-6 md:px-[60px] mb-20 md:mb-32">
        <TransitionLink href={`/insights/${featuredPost.id}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer relative overflow-hidden h-[500px] md:h-[600px] w-full"
          >
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3749]/90 via-[#1a3749]/40 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-[#FFF3EB] max-w-4xl">
              <div className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[2px] mb-4 text-[#b5754d]">
                <span>{featuredPost.category}</span>
                <span className="w-1 h-1 bg-white rounded-full opacity-50" />
                <span className="text-white opacity-70">{featuredPost.date}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-light leading-tight mb-4 group-hover:text-[#b5754d] transition-colors duration-300">
                {featuredPost.title}
              </h3>
              <p className="text-[15px] font-light opacity-80 mb-8 max-w-2xl line-clamp-2 md:line-clamp-none">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-medium group-hover:gap-4 transition-all duration-300">
                Read Article <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        </TransitionLink>
      </section>

      {/* FILTER & SEARCH */}
      <section className="px-6 md:px-[60px] mb-12 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-[#1a3749]/10 pb-8">

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] uppercase tracking-[2px] transition-all pb-1 border-b-2 ${
                activeCategory === cat
                  ? "border-[#b5754d] text-[#b5754d]"
                  : "border-transparent text-[#1a3749]/60 hover:text-[#1a3749]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-[300px]">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-transparent border border-[#1a3749]/20 px-4 py-2 pl-10 text-[13px] focus:outline-none focus:border-[#b5754d] transition-colors placeholder-[#1a3749]/40"
          />
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1a3749]/40" />
        </div>
      </section>

      {/* POST GRID */}
      <section className="px-6 md:px-[60px] pb-20 md:pb-32">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-16"
          layout
        >
          {remainingPosts.map((post) => (
            <TransitionLink href={`/insights/${post.id}`} key={post.id}>
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="overflow-hidden h-[300px] md:h-[400px] w-full mb-6 relative">
                  <div className="absolute top-4 left-4 bg-[#FFF3EB] px-3 py-1 text-[10px] uppercase tracking-[1.5px] font-medium z-10">
                    {post.category}
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center gap-3 text-[11px] text-[#1a3749]/50 mb-3 font-light tracking-[1px]">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-light leading-snug mb-3 group-hover:text-[#b5754d] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[14px] font-light text-[#1a3749]/70 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-[#1a3749]/10 flex items-center justify-between text-[11px] uppercase tracking-[2px] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Read More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </TransitionLink>
          ))}
        </motion.div>

        {remainingPosts.length === 0 && (
          <div className="text-center py-20 opacity-50">
            <p className="text-lg font-light">No other articles found in this category.</p>
          </div>
        )}
      </section>

      {/* NEWSLETTER */}
      {/* <section className="bg-[#1a3749] text-[#FFF3EB] py-20 md:py-32 px-6 md:px-[60px] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Stay Inspired</h2>
          <p className="text-[15px] font-light opacity-70 mb-10 leading-relaxed">
            Join our community of design enthusiasts. Receive curated insights, project reveals, and expert advice directly to your inbox.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 border border-white/20 px-6 py-4 text-[13px] placeholder-white/40 focus:outline-none focus:bg-white/20 transition-all"
            />
            <button type="submit" className="bg-[#b5754d] text-white px-8 py-4 text-[11px] uppercase tracking-[2px] font-medium hover:bg-[#9d6441] transition-colors">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] opacity-40 mt-4 font-light tracking-[1px]">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section> */}

    </div>
  );
};
