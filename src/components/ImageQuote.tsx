"use client";

import React from "react";
import { motion } from "motion/react";

export const ImageQuote = () => {
  return (
    <section className="bg-[#FFF3EB] px-6 md:px-[60px] py-4 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-[400px] md:h-auto"
      >
        <img
          src="/images/image-quote.png"
          alt="Interior Design Project Detail"
          className="w-full h-full object-cover block"
        />
      </motion.div>

      <div className="flex flex-col justify-center px-6 py-10 md:p-[80px_60px]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[80px] md:text-[120px] font-bold leading-[0.8] text-[#1a3749]/65 mb-6 block"
        >
          &ldquo;
        </motion.span>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[460px]"
        >
          <p className="text-[17px] md:text-[20px] font-light italic leading-relaxed mb-7 text-[#1a3749]">
            We don&apos;t just design spaces, we build dreams. Every project is a journey from imagination to reality,
            where design meets craftsmanship.
          </p>
          <cite className="block text-[11px] font-medium not-italic uppercase tracking-[2.5px] text-[#1a3749]/65">
            Kansept Plus Philosophy
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
};
