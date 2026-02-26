"use client";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { StudioDescription } from "./StudioDescription";
import { Checkerboard } from "./Checkerboard";
import { DualImages } from "./DualImages";
import { ImageQuote } from "./ImageQuote";
import { Gallery } from "./Gallery";
import { Footer } from "./Footer";

export const HomePage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="bg-[#FFF3EB] min-h-[100vh] text-[#1a3749]">
      <Header />

      <main>
        <Hero />
        <StudioDescription />
        <Checkerboard />
        <DualImages />
        <ImageQuote />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
};
