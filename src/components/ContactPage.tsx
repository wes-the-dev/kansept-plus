"use client";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import type { SanitySettings } from "@/sanity/lib/queries";

interface ContactPageProps {
  settings?: SanitySettings | null;
}

export const ContactPage = ({ settings }: ContactPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header />
      <main>
        <Contact settings={settings} />
      </main>
      <Footer settings={settings} />
    </div>
  );
};
