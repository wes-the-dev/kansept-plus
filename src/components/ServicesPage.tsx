"use client";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { Services } from "./Services";
import { Footer } from "./Footer";

export const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header />

      <main>
        <Services />
      </main>

      <Footer />
    </div>
  );
};
