"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Instagram, Linkedin, Youtube, MapPin, Mail, Phone, Clock } from "lucide-react";
import type { SanitySettings } from "@/sanity/lib/queries";
import { resolveImageUrl } from "@/sanity/lib/imageUrl";

interface ContactProps {
  settings?: SanitySettings | null;
}

type FormState = "idle" | "submitting" | "success" | "error";

export const Contact = ({ settings }: ContactProps) => {
  const contact = settings?.contact;
  const global = settings?.global;

  const contactImg = resolveImageUrl(contact?.contactImage1) ?? "/images/contact_img.jpg";
  const address = contact?.address ?? "3C Olumegbon Street\nIkoyi, Lagos, Nigeria";
  const email = contact?.email ?? "koncept09@gmail.com";
  const phone = contact?.phone ?? "+234 123 456 7890";
  const hours = contact?.hours ?? "Mon – Fri   9:00am – 5:00pm\nSaturday   By appointment";
  const instagramUrl = global?.instagramUrl ?? "#";
  const linkedinUrl = global?.linkedinUrl ?? "#";

  const [formState, setFormState] = useState<FormState>("idle");
  const [consent, setConsent] = useState(false);
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    projectLocation: "",
    message: "",
  });

  const set = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "contact", ...fields }),
      });
      if (!res.ok) throw new Error("Request failed");
      setFormState("success");
      setFields({ firstName: "", lastName: "", email: "", phone: "", projectType: "", projectLocation: "", message: "" });
      setConsent(false);
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="text-[#1a3749]">

      {/* ── SECTION 1: SPLIT HERO ── */}
      <section className="flex flex-col md:flex-row min-h-screen">

        {/* Left — image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[55%] h-[50vh] md:h-auto relative overflow-hidden"
        >
          <img
            src={contactImg}
            alt="Kansept Plus Studio"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right — contact info */}
        <div className="w-full md:w-[45%] bg-[#1a3749] text-[#FFF3EB] flex items-center px-10 md:px-16 lg:px-24 py-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full max-w-sm"
          >
            <p className="text-[11px] font-medium uppercase tracking-[3px] text-[#b5754d] mb-10">Contact</p>

            <h1 className="text-[38px] md:text-[50px] lg:text-[58px] font-light leading-[1.1] tracking-[-0.5px] mb-14">
              Let&rsquo;s Create<br />Something<br />Beautiful.
            </h1>

            <div className="space-y-8 text-[13px] font-light">

              <div className="flex gap-4">
                <MapPin size={15} className="text-[#b5754d] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-[#FFF3EB]/40 mb-1">Address</p>
                  <p className="text-[#FFF3EB]/80 leading-relaxed whitespace-pre-line">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={15} className="text-[#b5754d] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-[#FFF3EB]/40 mb-1">Email</p>
                  <a href={`mailto:${email}`} className="text-[#FFF3EB]/80 hover:text-[#b5754d] transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={15} className="text-[#b5754d] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-[#FFF3EB]/40 mb-1">Phone</p>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-[#FFF3EB]/80 hover:text-[#b5754d] transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={15} className="text-[#b5754d] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-[#FFF3EB]/40 mb-1">Studio Hours</p>
                  <p className="text-[#FFF3EB]/80 leading-relaxed whitespace-pre-line">
                    {hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-14">
              <a href={instagramUrl} className="text-[#FFF3EB]/40 hover:text-[#b5754d] transition-colors"><Instagram size={18} /></a>
              <a href={linkedinUrl} className="text-[#FFF3EB]/40 hover:text-[#b5754d] transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="text-[#FFF3EB]/40 hover:text-[#b5754d] transition-colors"><Youtube size={18} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: PROJECT ENQUIRY FORM ── */}
      <section className="bg-[#FFF3EB] px-6 md:px-[60px] lg:px-[100px] py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-[11px] font-medium uppercase tracking-[3px] text-[#b5754d] mb-6">Project Enquiry</p>
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-light leading-[1.1] text-[#1a3749] mb-8">
              Start Your<br />Project
            </h2>
            <p className="text-[15px] font-light leading-relaxed text-[#1a3749]/60 max-w-xs">
              Tell us about your vision and we&rsquo;ll be in touch within two business days.
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <form className="space-y-10" onSubmit={handleSubmit}>

                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="border-b border-[#1a3749]/20 pb-3">
                    <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/40 mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      value={fields.firstName}
                      onChange={set("firstName")}
                      className="w-full bg-transparent border-none focus:outline-none p-0 text-[15px] text-[#1a3749] placeholder:text-[#1a3749]/20 font-light"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="border-b border-[#1a3749]/20 pb-3">
                    <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/40 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={fields.lastName}
                      onChange={set("lastName")}
                      className="w-full bg-transparent border-none focus:outline-none p-0 text-[15px] text-[#1a3749] placeholder:text-[#1a3749]/20 font-light"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                {/* Contact row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="border-b border-[#1a3749]/20 pb-3">
                    <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/40 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={fields.email}
                      onChange={set("email")}
                      className="w-full bg-transparent border-none focus:outline-none p-0 text-[15px] text-[#1a3749] placeholder:text-[#1a3749]/20 font-light"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="border-b border-[#1a3749]/20 pb-3">
                    <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/40 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={fields.phone}
                      onChange={set("phone")}
                      className="w-full bg-transparent border-none focus:outline-none p-0 text-[15px] text-[#1a3749] placeholder:text-[#1a3749]/20 font-light"
                      placeholder="+234 000 000 0000"
                    />
                  </div>
                </div>

                {/* Project type */}
                <div className="border-b border-[#1a3749]/20 pb-3">
                  <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/40 mb-2">Project Type</label>
                  <select
                    value={fields.projectType}
                    onChange={set("projectType")}
                    className="w-full bg-transparent border-none focus:outline-none p-0 text-[15px] text-[#1a3749] font-light appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Interior Design</option>
                    <option>Civil Construction</option>
                    <option>Interior Design &amp; Construction</option>
                    <option>Consultation</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Location */}
                <div className="border-b border-[#1a3749]/20 pb-3">
                  <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/40 mb-2">Project Location</label>
                  <input
                    type="text"
                    value={fields.projectLocation}
                    onChange={set("projectLocation")}
                    className="w-full bg-transparent border-none focus:outline-none p-0 text-[15px] text-[#1a3749] placeholder:text-[#1a3749]/20 font-light"
                    placeholder="City, Country"
                  />
                </div>

                {/* Message */}
                <div className="border-b border-[#1a3749]/20 pb-3">
                  <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/40 mb-2">Tell Us About Your Project</label>
                  <textarea
                    rows={4}
                    value={fields.message}
                    onChange={set("message")}
                    className="w-full bg-transparent border-none focus:outline-none p-0 text-[15px] text-[#1a3749] placeholder:text-[#1a3749]/20 font-light resize-none"
                    placeholder="Describe your vision, space, or any specific requirements…"
                  />
                </div>

                {/* Consent + Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="w-4 h-4 rounded-none border border-[#1a3749]/30 text-[#b5754d] focus:ring-0 accent-[#b5754d]"
                    />
                    <span className="text-[11px] font-light text-[#1a3749]/50 leading-relaxed">
                      I agree to the processing of my personal data.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!consent || formState === "submitting" || formState === "success"}
                    className="shrink-0 px-10 py-4 bg-[#1a3749] text-[#FFF3EB] text-[11px] uppercase tracking-[3px] font-medium hover:bg-[#b5754d] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? "Sending…" : formState === "success" ? "Submitted" : "Send Enquiry"}
                  </button>
                </div>

                {formState === "error" && (
                  <p className="text-[12px] text-red-600 font-light">Something went wrong. Please try again or email us directly.</p>
                )}
              </form>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
