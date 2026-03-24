"use client";

import React from "react";
import { motion } from "motion/react";
import type { SanitySettings } from "@/sanity/lib/queries";
import { resolveImageUrl } from "@/sanity/lib/imageUrl";

interface DualImagesProps {
  settings?: SanitySettings | null;
}

export const DualImages = ({ settings }: DualImagesProps) => {
  const img1 = resolveImageUrl(settings?.homepage?.dualImage1) ?? "/images/staircase.jpg";
  const img2 = resolveImageUrl(settings?.homepage?.dualImage2) ?? "/images/bedroom.jpg";

  return (
    <section className="bg-[#FFF3EB] px-6 md:px-[60px] pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <img
          src={img1}
          alt="Interior Design Project"
          className="w-full h-[350px] md:h-[680px] object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
      >
        <img
          src={img2}
          alt="Residential Interior Design"
          className="w-full h-[350px] md:h-[680px] object-cover"
        />
      </motion.div>
    </section>
  );
};
