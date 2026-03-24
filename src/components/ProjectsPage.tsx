"use client";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { Projects } from "./Projects";
import { Footer } from "./Footer";
import type { SanityProject, SanitySettings } from "@/sanity/lib/queries";

interface ProjectsPageProps {
  sanityProjects?: SanityProject[] | null;
  settings?: SanitySettings | null;
}

export const ProjectsPage = ({ sanityProjects, settings }: ProjectsPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFF3EB] min-h-[100vh] text-[#1a3749]">
      <Header />

      <main>
        <Projects sanityProjects={sanityProjects} settings={settings} />
      </main>

      <Footer settings={settings} />
    </div>
  );
};
