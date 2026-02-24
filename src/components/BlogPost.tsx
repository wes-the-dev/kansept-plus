"use client";

import React, { useEffect } from "react";
import { TransitionLink } from "./TransitionLink";
import { motion } from "motion/react";
import { ArrowLeft, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { blogPosts } from "@/data/blogData";

interface BlogPostProps {
  id: string;
}

export const BlogPost = ({ id }: BlogPostProps) => {
  const post = blogPosts.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF3EB] text-[#1a3749]">
        <h2 className="text-3xl font-light mb-4">Article Not Found</h2>
        <TransitionLink href="/insights" className="text-[#b5754d] hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Insights
        </TransitionLink>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF3EB] text-[#1a3749] min-h-screen pt-[100px]">
      <article className="max-w-4xl mx-auto px-6 md:px-10 py-10 md:py-20">

        {/* Back Link */}
        <TransitionLink href="/insights" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] text-[#1a3749]/60 hover:text-[#b5754d] transition-colors mb-10">
          <ArrowLeft size={14} /> Back to Insights
        </TransitionLink>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 text-[12px] uppercase tracking-[2px] text-[#b5754d] font-medium mb-6">
            <span>{post.category}</span>
            <span className="w-1 h-1 bg-[#1a3749]/20 rounded-full" />
            <span className="text-[#1a3749]/60">{post.date}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-[#1a3749]">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-t border-b border-[#1a3749]/10 py-6">
            <div className="flex items-center gap-6 text-[13px] text-[#1a3749]/70 font-light">
              <div className="flex items-center gap-2">
                <User size={16} className="text-[#b5754d]" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#b5754d]" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[#1a3749]/40">
              <Share2 size={18} className="hover:text-[#b5754d] cursor-pointer transition-colors" />
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[400px] md:h-[600px] overflow-hidden mb-16"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="prose prose-lg prose-headings:font-light prose-headings:text-[#1a3749] prose-p:text-[#1a3749]/80 prose-p:font-light prose-p:leading-loose">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-8 text-[18px]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share Footer */}
          <div className="mt-16 pt-8 border-t border-[#1a3749]/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[14px] font-medium text-[#1a3749]">Share this article:</p>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full border border-[#1a3749]/20 flex items-center justify-center text-[#1a3749]/60 hover:bg-[#1a3749] hover:text-white transition-all">
                <Facebook size={16} />
              </button>
              <button className="w-10 h-10 rounded-full border border-[#1a3749]/20 flex items-center justify-center text-[#1a3749]/60 hover:bg-[#1a3749] hover:text-white transition-all">
                <Twitter size={16} />
              </button>
              <button className="w-10 h-10 rounded-full border border-[#1a3749]/20 flex items-center justify-center text-[#1a3749]/60 hover:bg-[#1a3749] hover:text-white transition-all">
                <Linkedin size={16} />
              </button>
            </div>
          </div>
        </motion.div>

      </article>
    </div>
  );
};
