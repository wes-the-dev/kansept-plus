"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePageTransition } from "./PageTransitionProvider";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Who We Are", href: "/who-we-are" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { navigate } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);

      if (y > 100) {
        setIsHidden(y > lastY);
      } else {
        setIsHidden(false);
      }
      setLastY(y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith("#")) {
      if (pathname === "/") {
        const element = document.getElementById(href.substring(1));
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + href);
      }
    } else {
      navigate(href);
    }
  };

  const isDarkPage = ["/who-we-are", "/services", "/insights", "/contact"].includes(pathname);

  // Hamburger bar color: dark when scrolled, menu open, or on a light-header page
  const barColor =
    isMenuOpen || isScrolled || isDarkPage ? "bg-[#1a3749]" : "bg-white";

  return (
    <>
      {/* Header sits above the menu overlay */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-70 transition-all duration-300 ${
          isScrolled ? "bg-[#FFF3EB]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: 0 }}
        animate={{ y: isHidden && !isMenuOpen ? "-100%" : 0 }}
      >
        <div className="flex justify-between items-center px-6 py-6 md:px-15">
          {/* Hamburger / X toggle */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="flex flex-col gap-2 p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Top bar — rotates to 45° and shifts down */}
            <motion.span
              className={`block w-9 h-0.5 origin-center ${barColor} transition-colors duration-300`}
              animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            />
            {/* Bottom bar — rotates to -45° and shifts up */}
            <motion.span
              className={`block w-9 h-0.5 origin-center ${barColor} transition-colors duration-300`}
              animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className={`absolute left-1/2 -translate-x-1/2 text-base font-medium uppercase tracking-[3px] transition-colors duration-300 ${
              isScrolled || isMenuOpen || isDarkPage ? "text-[#1a3749]" : "text-white"
            }`}
          >
            Kansept Plus
          </Link>

          {/* CTA */}
          <button
            onClick={() => handleLinkClick("/contact")}
            className="hidden md:block bg-[#b5754d] text-[#FFF3EB] text-[11px] font-medium uppercase tracking-[2px] px-6 py-3 hover:bg-[#9d6441] transition-colors"
          >
            Enquire Now
          </button>
        </div>
      </motion.header>

      {/* Fullscreen menu — slides in from the left, sits below the header */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-60 bg-[#FFF3EB] flex flex-col items-center justify-center"
          >
            <motion.nav
              className="flex flex-col gap-10 items-center"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.25 },
                },
                hidden: {
                  transition: { staggerChildren: 0.04, staggerDirection: -1 },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
                    },
                  }}
                >
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="text-4xl md:text-5xl font-medium uppercase tracking-[4px] text-[#1a3749] relative hover:text-[#b5754d] transition-colors after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.75 after:bg-[#b5754d] after:transition-all hover:after:w-full"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
