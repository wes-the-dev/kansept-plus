"use client";

import React from "react";
import { TransitionLink } from "./TransitionLink";
import { motion } from "motion/react";
import { ArrowRight, Check, Building2, PaintBucket, Hammer, ClipboardCheck } from "lucide-react";

const heroImage = "/images/services-hero.jpg";
const interiorImage = "/images/services-interior.jpg";
const blueprintImage = "/images/services-blueprint.jpg";
const renovationImage = "/images/services-renovation.jpg";
const projectMgmtImage = "/images/services-project-mgmt.jpg";
const structuralImage = "/images/services-structural.jpg";

export const Services = () => {
  return (
    <div className="bg-[#FFF3EB] text-[#1a3749] overflow-hidden pt-[100px]">

      {/* SECTION 1: HERO */}
      <section className="px-6 md:px-[60px] py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[11px] font-medium uppercase tracking-[3px] mb-6 text-[#b5754d]">What We Do</h1>
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
              Comprehensive Design <br />
              <span className="italic text-[#b5754d]">&amp; Build Solutions</span>
            </h2>
            <p className="text-[16px] md:text-[18px] font-light leading-relaxed mb-8 max-w-lg">
              At Kansept Plus, we bridge the gap between imagination and reality.
              Our multidisciplinary team delivers seamless execution across interior design,
              renovations, and structural engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] md:h-[600px] w-full relative"
          >
            <div className="absolute inset-0 bg-[#1a3749]/10 z-10" />
            <img
              src={heroImage}
              alt="Luxury Interior Detail"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: INTERIOR DESIGN */}
      <section className="bg-[#1a3749] text-[#FFF3EB] px-6 md:px-[60px] py-20 md:py-32" id="interiors">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src={interiorImage} alt="Interior Design" className="w-full h-[300px] object-cover mt-12" />
              <img src={blueprintImage} alt="Blueprints" className="w-full h-[300px] object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#b5754d]/20 rounded-full text-[#b5754d]">
                <PaintBucket size={24} />
              </div>
              <h2 className="text-[11px] font-medium uppercase tracking-[3px] text-[#b5754d]">Interior Design</h2>
            </div>

            <h3 className="text-3xl md:text-4xl font-light leading-tight mb-6">
              Curating Spaces with Character
            </h3>
            <p className="text-[15px] font-light leading-relaxed text-[#FFF3EB]/80 mb-8">
              Our interior design service is rooted in a deep understanding of how people live.
              We create bespoke environments that reflect your personality while maximizing functionality.
              From residential havens to inspiring commercial workspaces, every detail is considered.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {[
                "Residential Design",
                "Commercial & Office Spaces",
                "Hospitality Design",
                "Space Planning",
                "Furniture Sourcing (FF&E)",
                "Lighting Design",
                "Custom Joinery",
                "Art Curation",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] font-light opacity-90">
                  <span className="w-1.5 h-1.5 bg-[#b5754d] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: RENOVATIONS & REMODELING */}
      <section className="px-6 md:px-[60px] py-20 md:py-32" id="renovations">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#1a3749]/10 rounded-full text-[#1a3749]">
                <Hammer size={24} />
              </div>
              <h2 className="text-[11px] font-medium uppercase tracking-[3px] text-[#1a3749]">Renovations</h2>
            </div>

            <h3 className="text-3xl md:text-4xl font-light leading-tight mb-6 text-[#1a3749]">
              Renovations & Remodeling
            </h3>
            <p className="text-[15px] font-light leading-relaxed text-[#1a3749]/80 mb-8">
              We specialize in breathing new life into existing spaces. Whether it&apos;s a historic restoration or a modern update,
              our team handles complete structural overhauls and detailed remodeling with precision and care.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Complete Home Renovations",
                "Kitchen & Bath Remodeling",
                "Space Reconfiguration",
                "Extensions & Additions",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] text-[#1a3749]/80 font-light">
                  <Check size={16} className="text-[#b5754d]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] md:h-[600px] w-full relative order-2"
          >
            <img
              src={renovationImage}
              alt="Renovation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: PROJECT MANAGEMENT */}
      <section className="bg-[#EBE5DE] px-6 md:px-[60px] py-20 md:py-32" id="project-management">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] md:h-[600px] w-full relative order-2 md:order-1"
          >
            <img
              src={projectMgmtImage}
              alt="Project Management"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-full text-[#1a3749]">
                <ClipboardCheck size={24} />
              </div>
              <h2 className="text-[11px] font-medium uppercase tracking-[3px] text-[#1a3749]">Management</h2>
            </div>

            <h3 className="text-3xl md:text-4xl font-light leading-tight mb-6 text-[#1a3749]">
              Project Management
            </h3>
            <p className="text-[15px] font-light leading-relaxed text-[#1a3749]/80 mb-8">
              From concept to handover, we ensure your project is delivered on time, within budget, and to the highest quality standards.
              Our experienced managers coordinate all aspects of the construction process.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Timeline & Schedule Management",
                "Budget Planning & Cost Control",
                "Quality Assurance",
                "Contractor Coordination",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] text-[#1a3749]/80 font-light">
                  <Check size={16} className="text-[#b5754d]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: STRUCTURAL WORKS */}
      <section className="px-6 md:px-[60px] py-20 md:py-32" id="structural-works">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#1a3749]/10 rounded-full text-[#1a3749]">
                <Building2 size={24} />
              </div>
              <h2 className="text-[11px] font-medium uppercase tracking-[3px] text-[#1a3749]">Engineering</h2>
            </div>

            <h3 className="text-3xl md:text-4xl font-light leading-tight mb-6 text-[#1a3749]">
              Structural Works
            </h3>
            <p className="text-[15px] font-light leading-relaxed text-[#1a3749]/80 mb-8">
              The backbone of every great building. We provide expert structural engineering and construction services to ensure stability, safety, and longevity for your investment.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Foundation Works",
                "Reinforced Concrete Structures",
                "Steel Construction",
                "Load-bearing Wall Modifications",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] text-[#1a3749]/80 font-light">
                  <Check size={16} className="text-[#b5754d]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] md:h-[600px] w-full relative order-2"
          >
            <img
              src={structuralImage}
              alt="Structural Works"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#b5754d] text-white px-6 md:px-[60px] py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6">Ready to Build Your Vision?</h2>
          <p className="text-[16px] font-light opacity-90 mb-10 max-w-2xl mx-auto">
            Whether you need a full renovation or a design refresh, our team is ready to help you create a space that inspires.
          </p>
          <TransitionLink
            href="/#enquire"
            className="inline-flex items-center gap-2 bg-white text-[#b5754d] px-8 py-4 text-[11px] font-medium uppercase tracking-[3px] hover:bg-[#1a3749] hover:text-white transition-all duration-300"
          >
            Start Your Project <ArrowRight size={16} />
          </TransitionLink>
        </motion.div>
      </section>

    </div>
  );
};
