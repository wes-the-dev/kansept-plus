"use client";

import React, { useEffect } from "react";
import { TransitionLink } from "./TransitionLink";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projectsList: Record<string, { title: string; category: string; image: string }> = {
  "1": { title: "Project A", category: "Hotel & Beverage, Hotels", image: "/images/project-a.jpg" },
  "2": { title: "Project B", category: "Hotels", image: "/images/project-b.jpg" },
  "3": { title: "Project C", category: "Hotels", image: "/images/project-c.jpg" },
  "4": { title: "Project D", category: "Private Residential", image: "/images/project-d.jpg" },
  "5": { title: "Project E", category: "Private Residential", image: "/images/project-e.jpg" },
  "6": { title: "Project F", category: "Private Residential", image: "/images/project-f.jpg" },
};

const getProjectData = (id: string) => {
  const baseData = projectsList[id] || {
    title: `Project ${id.toUpperCase()}`,
    category: "Architecture & Design",
    image: "/images/project-detail-hero.jpg"
  };

  return {
    id,
    title: baseData.title,
    category: baseData.category,
    description: [
      "A young entrepreneurial couple with two children approached the design team with a vision: a dramatic transformation of a traditional English-style house and gardens into a contemporary and elegant compound that embraces natural light while seamlessly connecting the interior to the outdoor landscaping.",
      "The result is a harmonious blend of classic architecture and modern living, where every room tells a story of sophistication and comfort.",
    ],
    details: [
      { label: "Location", value: "Location Placeholder" },
      { label: "Architect", value: "Name Placeholder" },
      { label: "Landscape Architect", value: "Name Placeholder" },
      { label: "Builder", value: "Name Placeholder" },
      { label: "Photographer", value: "Name Placeholder" },
      { label: "Lighting Consultant", value: "Name Placeholder" },
      { label: "Press", value: "Publication Placeholder" },
      { label: "Team Members", value: "Name Placeholder, Name Placeholder" },
    ],
    heroImage: baseData.image,
    gallery: [
      { type: "full", src: "/images/project-gallery-1.jpg" },
      {
        type: "split",
        images: [
          "/images/project-gallery-2.jpg",
          "/images/project-gallery-3.jpg",
        ],
      },
      { type: "full", src: "/images/project-gallery-4.jpg" },
      {
        type: "split",
        images: [
          "/images/project-gallery-5.jpg",
          "/images/project-detail-hero.jpg",
        ],
      },
      { type: "full", src: "/images/project-gallery-1.jpg" },
    ],
  };
};

interface ProjectDetailProps {
  id: string;
}


export const ProjectDetail = ({ id }: ProjectDetailProps) => {
  const projectData = getProjectData(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <img
            src={projectData.heroImage}
            alt={projectData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 opacity-80"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[2px]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-white/50 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
              animate={{ top: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      </section >

      {/* DESCRIPTION SECTION */}
      < section className="px-6 md:px-[60px] py-20 md:py-32 max-w-[1800px] mx-auto" >
        {/* Back Button */}
        < div className="mb-12" >
          <TransitionLink href="/projects" className="text-[#1a3749] hover:text-[#1a3749]/60 transition-colors inline-flex items-center gap-2 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[11px] uppercase tracking-[2px]">Back to Projects</span>
          </TransitionLink>
        </div >

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-32"
        >
          {/* Left Column: Title & Description */}
          <div className="lg:w-1/2">
            <span className="block text-[11px] uppercase tracking-[2px] text-[#1a3749]/60 mb-6">
              {projectData.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a3749] mb-12">
              {projectData.title}
            </h1>
            <div className="space-y-6 text-[#1a3749]/80 font-light leading-relaxed text-lg">
              {projectData.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Project Metadata */}
          <div className="lg:w-1/2 lg:pt-12">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-6 text-[13px] leading-relaxed">
              {projectData.details.map((detail, idx) => (
                <React.Fragment key={idx}>
                  <div className="uppercase tracking-[1.5px] font-medium text-[#1a3749]">{detail.label}</div>
                  <div className="font-light text-[#1a3749]/70">{detail.value}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </section >

      {/* GALLERY SECTION */}
      < section className="w-full pb-32" >
        <div className="flex flex-col gap-1 md:gap-1">
          {projectData.gallery.map((item, idx) => (
            <React.Fragment key={idx}>
              {item.type === "full" ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-[60vh] md:h-[90vh] overflow-hidden"
                >
                  <img
                    src={item.src}
                    alt={`Project Gallery ${idx}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                  />
                </motion.div>
              ) : (
                <div className="flex flex-col md:flex-row w-full gap-1 md:gap-1 h-auto md:h-[80vh]">
                  {item.images?.map((imgSrc, imgIdx) => (
                    <motion.div
                      key={imgIdx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8, delay: imgIdx * 0.2 }}
                      className="w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden"
                    >
                      <img
                        src={imgSrc}
                        alt={`Project Gallery ${idx}-${imgIdx}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section >

      {/* NEXT PROJECT NAVIGATION */}
      < section className="px-6 md:px-[60px] pb-20 pt-10 border-t border-[#1a3749]/10 mx-6 md:mx-[60px]" >
        <div className="flex justify-between items-center">
          <TransitionLink href="/projects" className="text-[11px] uppercase tracking-[2px] text-[#1a3749]/50 hover:text-[#1a3749] transition-colors">
            All Projects
          </TransitionLink>
          <TransitionLink href="/projects/next" className="text-[11px] uppercase tracking-[2px] text-[#1a3749] hover:opacity-60 transition-opacity flex items-center gap-2">
            Next Project <ArrowRight size={16} />
          </TransitionLink>
        </div>
      </section >

    </div >
  );
};
