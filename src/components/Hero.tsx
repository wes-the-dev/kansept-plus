"use client";

import React from "react";
import { motion } from "motion/react";
import type { SanitySettings } from "@/sanity/lib/queries";
import { resolveMediaAsset } from "@/sanity/lib/imageUrl";

interface HeroProps {
  settings?: SanitySettings | null;
}

export const Hero = ({ settings }: HeroProps) => {
  const heroMedia = resolveMediaAsset(settings?.homepage?.heroImage);
  const heroUrl = heroMedia?.url ?? "/images/hero-home.png";
  const isVideo = heroMedia?.isVideo ?? false;
  const tagline = settings?.homepage?.heroTagline ?? "Imagine | Design | Build";

  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      {isVideo ? (
        <video
          src={heroUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroUrl}
          alt="Kansept Plus Interior Design Project"
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute bottom-10 left-6 md:bottom-20 md:left-[60px] z-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-[#b5754d] text-white px-3 py-1.5 md:px-4 md:py-2 inline-block shadow-lg"
        >
          <h1 className="text-xs md:text-sm font-medium uppercase tracking-[2px] md:tracking-[3px]">
            {tagline}
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
