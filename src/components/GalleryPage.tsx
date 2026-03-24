"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { SanityGalleryImage, SanitySettings } from "@/sanity/lib/queries";

const FALLBACK_IMAGES = [
  { src: "/images/staircase.jpg", alt: "Modern staircase interior design" },
  { src: "/images/bedroom.jpg", alt: "Luxury bedroom interior design" },
  { src: "/images/minimalist-detail.jpg", alt: "Minimalist interior design detail" },
  { src: "/images/dark-moody.jpg", alt: "Dark moody interior design" },
  { src: "/images/modern-chair.jpg", alt: "Modern chair furniture design" },
];

interface GalleryPageProps {
  sanityImages?: SanityGalleryImage[] | null;
  settings?: SanitySettings | null;
}

type MediaItem = { src: string; alt: string; isVideo: boolean };

export const GalleryPage = ({ sanityImages, settings }: GalleryPageProps) => {
  const [modalImage, setModalImage] = useState<MediaItem | null>(null);
  const images: MediaItem[] =
    sanityImages && sanityImages.length > 0
      ? sanityImages.map((g) => ({
          src:
            g.mediaType === "video"
              ? g.video?.asset?.url || ""
              : g.image?.asset?.url || "/images/staircase.jpg",
          alt: g.alt || "Gallery image",
          isVideo: g.mediaType === "video",
        }))
      : FALLBACK_IMAGES.map((img) => ({ ...img, isVideo: false }));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalImage ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalImage]);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header settings={settings} />

      {/* Page heading */}
      <section className="pt-40 pb-16 px-6 md:px-[60px] max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="text-[11px] font-medium tracking-[2.5px] uppercase text-[#1a3749]/65 mb-4">
              Gallery
            </p>
            <h1 className="text-[40px] md:text-[64px] font-light text-[#1a3749] tracking-[1px]">
              {settings?.galleryPage?.heading ?? "A Glimpse of Kansept Plus"}
            </h1>
          </div>
          <p className="text-[13px] font-light text-[#1a3749]/60 max-w-xs leading-relaxed pb-2">
            {settings?.galleryPage?.subheading ?? "A curated collection of spaces we\u2019ve imagined, designed, and built."}
          </p>
        </motion.div>
      </section>

      {/* 3-column grid */}
      <section className="px-6 md:px-[60px] pb-32 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              className="aspect-[4/3] overflow-hidden cursor-pointer group"
              onClick={() => setModalImage(image)}
            >
              {image.isVideo ? (
                <video
                  src={image.src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer settings={settings} />

      {/* Full-image modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setModalImage(null)}
          >
            {modalImage.isVideo ? (
              <motion.video
                src={modalImage.src}
                controls
                autoPlay
                playsInline
                className="max-w-[90vw] max-h-[90vh] object-contain"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.img
                src={modalImage.src}
                alt={modalImage.alt}
                className="max-w-[90vw] max-h-[90vh] object-contain"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={() => setModalImage(null)}
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
