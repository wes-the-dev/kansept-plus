"use client";

import React from "react";
import { TransitionLink } from "./TransitionLink";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Project A",
    category: "Hotel & Beverage, Hotels",
    image: "/images/project-a.jpg",
  },
  {
    id: 2,
    title: "Project B",
    category: "Hotels",
    image: "/images/project-b.jpg",
  },
  {
    id: 3,
    title: "Project C",
    category: "Hotels",
    image: "/images/project-c.jpg",
  },
  {
    id: 4,
    title: "Project D",
    category: "Private Residential",
    image: "/images/project-d.jpg",
  },
  {
    id: 5,
    title: "Project E",
    category: "Private Residential",
    image: "/images/project-e.jpg",
  },
  {
    id: 6,
    title: "Project F",
    category: "Private Residential",
    image: "/images/project-f.jpg",
  },
];

export const Projects = () => {
  return (
    <div className="bg-[#FFF3EB] text-[#1a3749] min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full mb-20 md:mb-32">
        <img
          src="/images/hero-projects.png"
          alt="Kansept Project Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-20 left-6 md:left-[60px]">
          <h1 className="text-white text-5xl md:text-7xl">Our Projects</h1>
        </div>

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
      </section>

      {/* INTRO TEXT */}
      <section className="px-6 md:px-[60px] mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-8">
            Immersive spaces that stir senses, invite exploration, and spark emotion.
          </h2>
          <p className="text-[15px] md:text-[16px] font-normal leading-relaxed text-[#1a3749]/70 max-w-3xl">
            Our global body of work transcends time zones, markets, and mediums, giving us the freedom to create a diverse array of spaces — from intimate pied-à-terres and superyachts to high-performance workplaces and award-winning resorts.
          </p>
        </motion.div>
      </section>

      {/* PROJECT GRID */}
      <section className="w-full mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0.5 gap-y-16">
          {projects.map((project) => (
            <TransitionLink href={`/projects/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="overflow-hidden aspect-[4/5] w-full relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className="pt-6 text-center">
                  <h3 className="text-[13px] uppercase tracking-[2px] font-medium text-[#1a3749]">
                    {project.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[1.5px] text-[#1a3749]/60 mt-1">{project.category}</p>
                </div>
              </motion.div>
            </TransitionLink>
          ))}
        </div>

        <div className="flex justify-center mt-24">
          <button className="text-[10px] uppercase tracking-[3px] text-[#b5754d] hover:text-[#1a3749] transition-colors border-b border-[#b5754d] pb-1 hover:border-[#1a3749]">
            Load More
          </button>
        </div>
      </section>

    </div>
  );
};
