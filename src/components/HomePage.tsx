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
import type { SanityGalleryImage, SanitySettings } from "@/sanity/lib/queries";

interface HomePageProps {
  sanityGallery?: SanityGalleryImage[] | null;
  settings?: SanitySettings | null;
}

export const HomePage = ({ sanityGallery, settings }: HomePageProps) => {
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
        <Hero settings={settings} />
        <StudioDescription settings={settings} />
        <Checkerboard settings={settings} />
        <DualImages settings={settings} />
        <ImageQuote settings={settings} />
        <Gallery sanityImages={sanityGallery} />
      </main>

      <Footer settings={settings} />
    </div>
  );
};
