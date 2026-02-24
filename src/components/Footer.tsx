"use client";

import React from "react";
import { Instagram, Linkedin, Youtube, MapPin } from "lucide-react";
import { TransitionLink } from "./TransitionLink";

export const Footer = () => {
  return (
    <footer className="bg-[#1a3749] text-[#FFF3EB] pt-20 pb-10 px-6 md:px-[60px]" id="enquire">
      {/* Logo Section */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-medium tracking-[3px] mb-2">Kansept Plus</h2>
        <p className="text-[11px] font-light tracking-[3px] uppercase text-[#b5754d]">Imagine | Design | Build</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-[60px] max-w-[1400px] mx-auto mb-20">

        {/* CTA */}
        <div className="flex flex-col items-start">
          <h3 className="text-[10px] font-medium uppercase tracking-[2.5px] mb-6">Start Your Project</h3>
          <p className="text-base font-light leading-relaxed mb-8 max-w-[320px]">
            Transform your space with exceptional interior design and expert civil works.
          </p>
          <TransitionLink href="/contact" className="inline-block px-8 py-3.5 bg-[#b5754d] text-[#FFF3EB] text-[11px] font-medium uppercase tracking-[2px] hover:bg-[#9d6441] transition-colors">
            Enquire Now
          </TransitionLink>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-[10px] font-medium uppercase tracking-[2.5px] mb-6">Address</h3>
          <address className="not-italic text-[13px] font-light leading-[1.8] opacity-80">
            <p>3C Olumegbon Street</p>
            <p className="mb-2">Ikoyi, Lagos, Nigeria 2341</p>
            <a href="mailto:koncept09@gmail.com" className="hover:text-[#b5754d] transition-colors">koncept09@gmail.com</a>
          </address>
        </div>

        {/* Main Links */}
        <div>
          <h3 className="text-[10px] font-medium uppercase tracking-[2.5px] mb-6">Main</h3>
          <nav className="flex flex-col gap-3 text-[13px] font-light leading-[1.8] opacity-80">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/who-we-are" },
              { label: "Services", href: "/services" },
              { label: "Projects", href: "/projects" },
              { label: "Insights", href: "/insights" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <TransitionLink key={link.label} href={link.href} className="hover:text-[#b5754d] transition-colors">
                {link.label}
              </TransitionLink>
            ))}
          </nav>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-[10px] font-medium uppercase tracking-[2.5px] mb-6">Support</h3>
          <nav className="flex flex-col gap-3 text-[13px] font-light leading-[1.8] opacity-80">
            {["Privacy Policy", "Terms & Conditions", "FAQ"].map((link) => (
              <a key={link} href="#" className="hover:text-[#b5754d] transition-colors">
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Social & Bottom */}
      <div className="flex justify-center gap-8 mb-8">
        <a href="#" className="opacity-70 hover:opacity-100 hover:text-[#b5754d] transition-all"><Linkedin size={20} /></a>
        <a href="#" className="opacity-70 hover:opacity-100 hover:text-[#b5754d] transition-all"><Instagram size={20} /></a>
        <a href="#" className="opacity-70 hover:opacity-100 hover:text-[#b5754d] transition-all"><Youtube size={20} /></a>
      </div>

      <div className="text-center mb-6 opacity-60 flex items-center justify-center gap-2 text-[11px] font-light tracking-[2px]">
        <MapPin size={12} />
        <p>6.4541° N, 3.4245° E</p>
      </div>

      <div className="text-center pt-8 border-t border-[#FFF3EB]/10">
        <p className="text-[9px] font-light tracking-[1.5px] uppercase opacity-50">
          &copy;2025. All Right Reserved | By Kansept Plus
        </p>
      </div>
    </footer>
  );
};
