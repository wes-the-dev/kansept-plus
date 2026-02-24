"use client";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { WhoWeAre } from "./WhoWeAre";
import { Footer } from "./Footer";

export const WhoWeArePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header />

      <main>
        <WhoWeAre />
      </main>

      <Footer />
    </div>
  );
};
