"use client";

import React from "react";
import { motion } from "motion/react";
import { TransitionLink } from "./TransitionLink";

export const Checkerboard = () => {
  return (
    <section className="bg-[#FFF3EB] mt-10 md:mt-20">
      {/* Row 1: Dark Image Left | Dark Text Right */}
      <div className="grid grid-cols-1 md:grid-cols-[58%_42%]" id="interiors">
        <div className="bg-[#1a3749] min-h-[300px] md:min-h-[540px] flex items-center justify-center p-8 md:p-[60px]">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="/images/checkerboard-interior.png"
            alt="Interior Design Project"
            className="w-full h-full object-cover max-h-[700px]"
          />
        </div>
        <div className="bg-[#1a3749] text-[#FFF3EB] p-10 md:p-[100px_80px] flex items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[400px]"
          >
            <h2 className="text-[11px] font-medium uppercase tracking-[3px] mb-7">Interior Design</h2>
            <p className="text-[15px] leading-relaxed mb-9 text-gray-300">
              At Kansept Plus, we believe that great spaces tell stories. Our interior design approach combines
              functionality with aesthetic excellence, creating environments that reflect your unique style
              while enhancing daily living. From residential homes to commercial spaces, we bring imagination
              to life.
            </p>
            <TransitionLink href="/projects" className="text-[13px] underline decoration-[#b5754d] decoration-1 underline-offset-4 hover:text-[#b5754d] transition-colors font-medium">
              Explore our Interiors
            </TransitionLink>
          </motion.div>
        </div>
      </div>

      {/* Row 2: Cream Text Left | Cream Image Right */}
      <div className="grid grid-cols-1 md:grid-cols-[42%_58%] items-stretch" id="who-we-are">
        <div className="bg-[#FFF3EB] text-[#1a3749] p-10 md:p-[80px] flex items-start md:justify-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[400px]"
          >
            <h2 className="text-[11px] font-medium uppercase tracking-[3px] mb-7">Who We Are</h2>
            <p className="text-[15px] leading-relaxed mb-9 text-[#1a3749]/65">
              Kansept Plus is an established interior design studio based in Ikoyi, Lagos. We specialize in
              both interior design and civil construction, offering comprehensive solutions from concept to
              completion. Our integrated approach ensures seamless project execution, delivering spaces that
              are both beautifully designed and expertly built.
            </p>
            <TransitionLink href="/who-we-are" className="text-[13px] underline decoration-[#b5754d] decoration-1 underline-offset-4 hover:text-[#b5754d] transition-colors font-medium">
              About the Studio
            </TransitionLink>
          </motion.div>
        </div>
        <div className="bg-[#FFF3EB] p-8 md:p-[80px]">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/images/checkerboard-who-we-are.png"
            alt="Interior Design Detail"
            className="w-full h-full object-cover min-h-[300px] md:min-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};
