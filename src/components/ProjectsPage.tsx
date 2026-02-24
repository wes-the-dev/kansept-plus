"use client";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { Projects } from "./Projects";
import { Footer } from "./Footer";

export const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header />

      <main>
        <Projects />
      </main>

      <Footer />
    </div>
  );
};
