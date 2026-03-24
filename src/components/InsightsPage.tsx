"use client";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { Insights } from "./Insights";
import { Footer } from "./Footer";
import type { SanityInsight } from "@/sanity/lib/queries";

interface InsightsPageProps {
  sanityInsights?: SanityInsight[] | null;
}

export const InsightsPage = ({ sanityInsights }: InsightsPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header />

      <main>
        <Insights sanityInsights={sanityInsights} />
      </main>

      <Footer />
    </div>
  );
};
