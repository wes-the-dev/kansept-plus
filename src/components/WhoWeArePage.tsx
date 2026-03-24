"use client";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { WhoWeAre } from "./WhoWeAre";
import { Footer } from "./Footer";
import type { SanityTeamMember, SanitySettings } from "@/sanity/lib/queries";

interface WhoWeArePageProps {
  sanityTeam?: SanityTeamMember[] | null;
  settings?: SanitySettings | null;
}

export const WhoWeArePage = ({ sanityTeam, settings }: WhoWeArePageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFF3EB] min-h-screen text-[#1a3749]">
      <Header settings={settings} />

      <main>
        <WhoWeAre sanityTeam={sanityTeam} settings={settings} />
      </main>

      <Footer settings={settings} />
    </div>
  );
};
