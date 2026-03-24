"use client";

import React from "react";
import { motion } from "motion/react";
import type { SanitySettings } from "@/sanity/lib/queries";

interface StudioDescriptionProps {
  settings?: SanitySettings | null;
}

export const StudioDescription = ({ settings }: StudioDescriptionProps) => {
  const body = settings?.homepage?.studioBody ??
    "Kansept Plus is a premier interior design studio in Lagos, specializing in creating exceptional spaces through innovative design and quality civil works. We transform visions into reality by seamlessly blending creative interior solutions with expert construction, delivering projects that inspire and endure.";

  return (
    <section className="bg-[#FFF3EB] px-6 py-20 md:py-[100px] md:px-[60px] flex justify-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[780px] text-lg md:text-[19px] font-light leading-relaxed text-center text-[#1a3749]"
      >
        {body}
      </motion.p>
    </section>
  );
};
