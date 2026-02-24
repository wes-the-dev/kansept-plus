"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, animate, useMotionValue, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const images = [
  { src: "/images/staircase.jpg", alt: "Modern staircase interior design" },
  { src: "/images/bedroom.jpg", alt: "Luxury bedroom interior design" },
  { src: "/images/minimalist-detail.jpg", alt: "Minimalist interior design detail" },
  { src: "/images/dark-moody.jpg", alt: "Dark moody interior design" },
  { src: "/images/modern-chair.jpg", alt: "Modern chair furniture design" },
];

const GAP = 20;
const AUTO_ADVANCE_MS = 4000;

// Heights per distance from the active (centre) image
const HEIGHTS_DESKTOP = [580, 420, 320] as const; // [centre, ±1, ±2+]
const HEIGHTS_MOBILE = [360, 270, 210] as const;

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(420);
  const [isOverStrip, setIsOverStrip] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [modalImage, setModalImage] = useState<string | null>(null);

  const wasDragged = useRef(false);
  const x = useMotionValue(0);
  const stride = itemWidth + GAP;

  // Set item width after mount (avoids SSR mismatch)
  useEffect(() => {
    const update = () => setItemWidth(window.innerWidth < 768 ? 280 : 420);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const heightFor = (index: number) => {
    const dist = Math.abs(index - activeIndex);
    const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
    const table = isMobile ? HEIGHTS_MOBILE : HEIGHTS_DESKTOP;
    return table[Math.min(dist, table.length - 1)];
  };

  const snapTo = useCallback(
    (index: number) => {
      setActiveIndex(index);
      animate(x, -index * stride, { type: "spring", stiffness: 260, damping: 30 });
    },
    [x, stride]
  );

  const handleDragEnd = useCallback(() => {
    const raw = -x.get() / stride;
    const newIndex = Math.max(0, Math.min(images.length - 1, Math.round(raw)));
    snapTo(newIndex);
    // Keep wasDragged true briefly so the click handler doesn't fire
    setTimeout(() => { wasDragged.current = false; }, 50);
  }, [x, stride, snapTo]);

  // Escape key to close modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Left / right padding to keep the active image visually centred
  const sidePad = `calc(50vw - ${itemWidth / 2}px)`;

  return (
    <section className="bg-[#FFF3EB] py-20 relative overflow-hidden" id="projects">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-[60px]">
        <p className="text-[11px] font-medium tracking-[2.5px] uppercase text-[#1a3749]/65 mb-4">Gallery</p>
        <h2 className="text-[28px] md:text-[42px] font-medium tracking-[1px] text-[#1a3749]">
          A Glimpse of Kansept Plus
        </h2>
      </div>

      {/* Image strip — cursor events scoped here only */}
      <div
        className="overflow-hidden"
        onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
        onMouseEnter={() => setIsOverStrip(true)}
        onMouseLeave={() => setIsOverStrip(false)}
      >
        <motion.div
          style={{ x, paddingLeft: sidePad, paddingRight: sidePad }}
          drag="x"
          dragConstraints={{ right: 0, left: -(images.length - 1) * stride }}
          dragElastic={0.08}
          dragMomentum={false}
          onDragStart={() => { wasDragged.current = true; }}
          onDragEnd={handleDragEnd}
          className="flex items-center"
        >
          {images.map((image, i) => (
            <motion.div
              key={i}
              className="shrink-0 overflow-hidden cursor-pointer"
              style={{
                width: itemWidth,
                marginRight: i < images.length - 1 ? GAP : 0,
              }}
              animate={{ height: heightFor(i) }}
              transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
              onClick={() => {
                if (!wasDragged.current) setModalImage(image.src);
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover pointer-events-none select-none"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Progress-bar indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => snapTo(i)}
            className={`h-0.5 relative overflow-hidden transition-all duration-300 ${i === activeIndex ? "w-8 bg-[#1a3749]/20" : "w-4 bg-[#1a3749]/30"
              }`}
          >
            {i === activeIndex && (
              <motion.div
                key={activeIndex}
                className="absolute inset-0 bg-[#1a3749] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                onAnimationComplete={() => {
                  snapTo((activeIndex + 1) % images.length);
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Custom drag cursor — only visible when over the image strip */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: cursorPos.x - 40,
          y: cursorPos.y - 40,
          opacity: isOverStrip ? 1 : 0,
          scale: isOverStrip ? 1 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-20 h-20 bg-[#1a3749]/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl">
          <span className="text-[#FFF3EB] text-xs font-medium">DRAG</span>
        </div>
      </motion.div>

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
            <motion.img
              src={modalImage}
              alt="Full view"
              className="max-w-[90vw] max-h-[90vh] object-contain"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={() => setModalImage(null)}
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
