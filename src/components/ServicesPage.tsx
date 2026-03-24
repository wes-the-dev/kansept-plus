"use client";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { Services } from "./Services";
import { Footer } from "./Footer";
import type { SanityService, SanitySettings } from "@/sanity/lib/queries";

interface ServicesPageProps {
  sanityServices?: SanityService[] | null;
  settings?: SanitySettings | null;
}

export const ServicesPage = ({ sanityServices, settings }: ServicesPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header />

      <main>
        <Services sanityServices={sanityServices} settings={settings} />
      </main>

      <Footer settings={settings} />
    </div>
  );
};
