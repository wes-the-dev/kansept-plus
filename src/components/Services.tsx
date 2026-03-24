"use client";

import React from "react";
import { TransitionLink } from "./TransitionLink";
import { motion } from "motion/react";
import { ArrowRight, Check, Building2, PaintBucket, Hammer, ClipboardCheck } from "lucide-react";
import type { SanityService, SanitySettings } from "@/sanity/lib/queries";
import { resolveMediaAsset } from "@/sanity/lib/imageUrl";

const FALLBACK_HERO = "/images/services-hero.jpg";

const FALLBACK_SERVICES = [
  {
    id: "interior-design",
    tagline: "Interior Design",
    heading: "Curating Spaces with Character",
    description: "Our interior design service is rooted in a deep understanding of how people live. We create bespoke environments that reflect your personality while maximizing functionality. From residential havens to inspiring commercial workspaces, every detail is considered.",
    serviceItems: ["Residential Design", "Commercial & Office Spaces", "Hospitality Design", "Space Planning", "Furniture Sourcing (FF&E)", "Lighting Design", "Custom Joinery", "Art Curation"],
    mainImage: "/images/services-interior.jpg",
    secondaryImage: "/images/services-blueprint.jpg",
    icon: "paint",
    dark: true,
  },
  {
    id: "renovations",
    tagline: "Renovations",
    heading: "Renovations & Remodeling",
    description: "We specialize in breathing new life into existing spaces. Whether it's a historic restoration or a modern update, our team handles complete structural overhauls and detailed remodeling with precision and care.",
    serviceItems: ["Complete Home Renovations", "Kitchen & Bath Remodeling", "Space Reconfiguration", "Extensions & Additions"],
    mainImage: "/images/services-renovation.jpg",
    secondaryImage: null,
    icon: "hammer",
    dark: false,
  },
  {
    id: "project-management",
    tagline: "Management",
    heading: "Project Management",
    description: "From concept to handover, we ensure your project is delivered on time, within budget, and to the highest quality standards. Our experienced managers coordinate all aspects of the construction process.",
    serviceItems: ["Timeline & Schedule Management", "Budget Planning & Cost Control", "Quality Assurance", "Contractor Coordination"],
    mainImage: "/images/services-project-mgmt.jpg",
    secondaryImage: null,
    icon: "clipboard",
    dark: true,
  },
  {
    id: "structural-works",
    tagline: "Engineering",
    heading: "Structural Works",
    description: "The backbone of every great building. We provide expert structural engineering and construction services to ensure stability, safety, and longevity for your investment.",
    serviceItems: ["Foundation Works", "Reinforced Concrete Structures", "Steel Construction", "Load-bearing Wall Modifications"],
    mainImage: "/images/services-structural.jpg",
    secondaryImage: null,
    icon: "building",
    dark: false,
  },
];

const ICONS: Record<string, React.ReactNode> = {
  paint: <PaintBucket size={24} />,
  hammer: <Hammer size={24} />,
  clipboard: <ClipboardCheck size={24} />,
  building: <Building2 size={24} />,
};

interface ServicesProps {
  sanityServices?: SanityService[] | null;
  settings?: SanitySettings | null;
}

export const Services = ({ sanityServices, settings }: ServicesProps) => {
  const heroMedia = resolveMediaAsset(settings?.servicesPage?.heroImage);
  const heroUrl = heroMedia?.url ?? FALLBACK_HERO;
  const heroIsVideo = heroMedia?.isVideo ?? false;

  const heroHeadline = settings?.servicesPage?.heroHeadline || "Comprehensive Design";
  const heroSubheadline = settings?.servicesPage?.heroSubheadline || "& Build Solutions";
  const heroDescription = settings?.servicesPage?.heroDescription || "At Kansept Plus, we bridge the gap between imagination and reality. Our multidisciplinary team delivers seamless execution across interior design, renovations, and structural engineering.";
  const ctaHeadline = settings?.servicesPage?.ctaHeadline || "Ready to Build Your Vision?";
  const ctaBody = settings?.servicesPage?.ctaBody || "Whether you need a full renovation or a design refresh, our team is ready to help you create a space that inspires.";

  const services =
    sanityServices && sanityServices.length > 0
      ? sanityServices.map((s, i) => {
          const main = resolveMediaAsset(s.mainImage, 900);
          const secondary = resolveMediaAsset(s.secondaryImage, 900);
          return {
            id: s.slug?.current || s._id,
            tagline: s.tagline || s.title,
            heading: s.heading || s.title,
            description: s.description || "",
            serviceItems: s.serviceItems || [],
            mainUrl: main?.url ?? FALLBACK_SERVICES[i % FALLBACK_SERVICES.length].mainImage,
            mainIsVideo: main?.isVideo ?? false,
            secondaryUrl: secondary?.url ?? null,
            secondaryIsVideo: secondary?.isVideo ?? false,
            icon: ["paint", "hammer", "clipboard", "building"][i % 4],
            dark: i % 2 === 0,
          };
        })
      : FALLBACK_SERVICES.map((s) => ({
          ...s,
          mainUrl: s.mainImage,
          mainIsVideo: false,
          secondaryUrl: s.secondaryImage ?? null,
          secondaryIsVideo: false,
        }));

  return (
    <div className="bg-[#FFF3EB] text-[#1a3749] overflow-hidden pt-[100px]">

      {/* SECTION 1: HERO */}
      <section className="px-6 md:px-[60px] py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-[11px] font-medium uppercase tracking-[3px] mb-6 text-[#b5754d]">What We Do</h1>
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
              {heroHeadline} <br />
              <span className="italic text-[#b5754d]">{heroSubheadline}</span>
            </h2>
            <p className="text-[16px] md:text-[18px] font-light leading-relaxed mb-8 max-w-lg">{heroDescription}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="h-[400px] md:h-[600px] w-full relative">
            <div className="absolute inset-0 bg-[#1a3749]/10 z-10" />
            {heroIsVideo ? (
              <video src={heroUrl} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            ) : (
              <img src={heroUrl} alt="Luxury Interior Detail" className="w-full h-full object-cover" />
            )}
          </motion.div>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      {services.map((svc, index) => {
        const isDark = svc.dark;
        const isFirst = index === 0;
        const textColor = isDark ? "text-[#FFF3EB]" : "text-[#1a3749]";
        const subTextColor = isDark ? "text-[#FFF3EB]/80" : "text-[#1a3749]/80";
        const bgColor = isDark ? "bg-[#1a3749]" : index === 2 ? "bg-[#EBE5DE]" : "bg-[#FFF3EB]";
        const iconBg = isDark ? "bg-[#b5754d]/20" : "bg-[#1a3749]/10";
        const iconColor = isDark ? "text-[#b5754d]" : "text-[#1a3749]";

        const mainMediaEl = svc.mainIsVideo ? (
          <video src={svc.mainUrl} autoPlay muted loop playsInline className="w-full h-full object-cover" />
        ) : (
          <img src={svc.mainUrl} alt={svc.heading} className="w-full h-full object-cover" />
        );

        const imgEl = (
          <motion.div
            initial={{ opacity: 0, x: isDark ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`h-[400px] md:h-[600px] w-full relative ${isDark ? "order-2 md:order-1" : "order-2"}`}
          >
            {isFirst && svc.secondaryUrl ? (
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="w-full h-[300px] mt-12 overflow-hidden">
                  {mainMediaEl}
                </div>
                <div className="w-full h-[300px] overflow-hidden">
                  {svc.secondaryIsVideo ? (
                    <video src={svc.secondaryUrl} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  ) : (
                    <img src={svc.secondaryUrl} alt={svc.heading} className="w-full h-full object-cover" />
                  )}
                </div>
              </div>
            ) : (
              mainMediaEl
            )}
          </motion.div>
        );

        const textEl = (
          <motion.div
            initial={{ opacity: 0, x: isDark ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={isDark ? "order-1 md:order-2" : "order-1"}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 ${iconBg} rounded-full ${iconColor}`}>{ICONS[svc.icon] || <PaintBucket size={24} />}</div>
              <h2 className="text-[11px] font-medium uppercase tracking-[3px] text-[#b5754d]">{svc.tagline}</h2>
            </div>
            <h3 className={`text-3xl md:text-4xl font-light leading-tight mb-6 ${textColor}`}>{svc.heading}</h3>
            <p className={`text-[15px] font-light leading-relaxed ${subTextColor} mb-8`}>{svc.description}</p>
            {svc.serviceItems.length > 0 && (
              <ul className={`${isFirst ? "grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8" : "space-y-4"} mb-10`}>
                {svc.serviceItems.map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 text-[14px] font-light ${isDark ? "opacity-90" : subTextColor}`}>
                    {isFirst ? <span className="w-1.5 h-1.5 bg-[#b5754d] rounded-full" /> : <Check size={16} className="text-[#b5754d]" />}
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        );

        return (
          <section key={svc.id} className={`${bgColor} ${textColor} px-6 md:px-[60px] py-20 md:py-32`} id={svc.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
              {isDark ? <>{imgEl}{textEl}</> : <>{textEl}{imgEl}</>}
            </div>
          </section>
        );
      })}

      {/* CTA SECTION */}
      <section className="bg-[#b5754d] text-white px-6 md:px-[60px] py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-5xl font-light mb-6">{ctaHeadline}</h2>
          <p className="text-[16px] font-light opacity-90 mb-10 max-w-2xl mx-auto">{ctaBody}</p>
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
