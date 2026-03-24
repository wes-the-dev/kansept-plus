"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { SanityTeamMember, SanitySettings } from "@/sanity/lib/queries";
import { resolveMediaAsset } from "@/sanity/lib/imageUrl";

const FALLBACK_STEPS = [
  {
    number: "01",
    title: "DISCOVERY VISIT",
    description: "We start with a discovery visit to learn how you can live, work, and move through your space.",
    bullets: ["Client lifestyle & needs", "Space measurements & constraints", "Budget & timeline", "Visual Ideas: Floor plans, Site photos"],
    quote: "Understanding our clients vision is a key part of delivering excellent result",
    image: "/images/project-d.jpg",
    isVideo: false,
  },
  {
    number: "02",
    title: "DESIGN DIRECTION",
    description: "We review the brief, the space, and all constraints, then edit, prioritise, and refine ideas until a single, strong direction emerges.",
    bullets: [],
    quote: "By deciding the direction early, the project moves forward with confidence, consistency, and purpose",
    image: "/images/step2.jpg",
    isVideo: false,
  },
  {
    number: "03",
    title: "CONCEPTUALIZATION",
    description: "We create and communicate a clear design direction with mood, style, and inspiration.",
    bullets: ["Moodboards", "Sketches", "CGI renders", "3D models"],
    quote: "To bring the design direction to life, we use advanced visualization and conceptual tools",
    image: "/images/step3.jpg",
    isVideo: false,
  },
  {
    number: "04",
    title: "SOURCING",
    description: "We carefully source furniture, lighting, finishes, fabrics, and custom pieces.",
    bullets: [],
    quote: "Selecting materials that align with the design, quality, and budget.",
    image: "/images/step4.jpg",
    isVideo: false,
  },
  {
    number: "05",
    title: "EXECUTION & STYLING",
    description: "We oversee the transformation from concept to completed space.",
    bullets: ["Site coordination and quality control", "Installation and finishing", "Final styling and handover"],
    quote: "",
    image: "/images/execution_styling_sharp.jpg",
    isVideo: false,
  },
];

const contactImg1Default = "/images/contact1.jpg";
const contactImg2Default = "/images/contact2.jpg";

const FALLBACK_TEAM = [
  { name: "Name Placeholder", role: "Lead Architect", url: null as string | null, isVideo: false },
  { name: "Name Placeholder", role: "Senior Interior Designer", url: null as string | null, isVideo: false },
  { name: "Name Placeholder", role: "Creative Director", url: null as string | null, isVideo: false },
  { name: "Name Placeholder", role: "Construction Manager", url: null as string | null, isVideo: false },
];

interface WhoWeAreProps {
  sanityTeam?: SanityTeamMember[] | null;
  settings?: SanitySettings | null;
}

type FormState = "idle" | "submitting" | "success" | "error";

export const WhoWeAre = ({ sanityTeam, settings }: WhoWeAreProps) => {
  const wwa = settings?.whoWeAre;

  const topMedia = resolveMediaAsset(wwa?.topImage);
  const topUrl = topMedia?.url || "/images/who-we-are-top.png";
  const topIsVideo = topMedia?.isVideo ?? false;

  const introParagraph1 = wwa?.introParagraph1 || "Kansept Plus is an established interior design studio based in Ikoyi, Lagos. We specialize in both interior design and civil construction, offering comprehensive solutions from concept to completion.";
  const introParagraph2 = wwa?.introParagraph2 || "Our integrated approach ensures seamless project execution, delivering spaces that are both beautifully designed and expertly built. We believe that great design is not just about aesthetics, but about creating environments that enhance the way we live and work.";
  const establishedYear = wwa?.establishedYear || "xxxx";

  const aboutMedia = resolveMediaAsset(wwa?.aboutPhoto);
  const aboutUrl = aboutMedia?.url || null;
  const aboutIsVideo = aboutMedia?.isVideo ?? false;

  const aboutQuote = wwa?.aboutQuote || "Kansept Plus began with a simple vision: to create spaces that inspire. Every project is a new story.";
  const aboutBody = wwa?.aboutBody || "Founded by our lead designer, the studio has grown into a multidisciplinary practice handling projects across Nigeria and internationally. Our team brings together diverse expertise in architecture, interior design, and project management.";
  const leadDesignerName = wwa?.leadDesignerName || "Name Placeholder";
  const leadDesignerFocus = wwa?.leadDesignerFocus || "Residential";
  const teamSectionHeading = wwa?.teamSectionHeading || "Meet the Minds Behind Kansept";
  const teamSectionSubtext = wwa?.teamSectionSubtext || "Our strength lies in our diversity. We are a collective of architects, designers, and project managers united by a passion for exceptional craftsmanship and detail.";
  const processSectionHeading = wwa?.processSectionHeading || "How We Work";

  const team =
    sanityTeam && sanityTeam.length > 0
      ? sanityTeam.map((m) => {
          const media = resolveMediaAsset(m.photo, 600);
          return { name: m.name, role: m.role || "", url: media?.url || null, isVideo: media?.isVideo ?? false };
        })
      : FALLBACK_TEAM;

  const processSteps = wwa?.processSteps && wwa.processSteps.length > 0
    ? wwa.processSteps.map((s) => {
        const media = resolveMediaAsset(s.image);
        return { ...s, image: media?.url || "", isVideo: media?.isVideo ?? false };
      })
    : FALLBACK_STEPS;

  const contactMedia1 = resolveMediaAsset(settings?.contact?.contactImage1);
  const contactUrl1 = contactMedia1?.url || contactImg1Default;
  const contactIsVideo1 = contactMedia1?.isVideo ?? false;

  const contactMedia2 = resolveMediaAsset(settings?.contact?.contactImage2);
  const contactUrl2 = contactMedia2?.url || contactImg2Default;
  const contactIsVideo2 = contactMedia2?.isVideo ?? false;

  const [formState, setFormState] = useState<FormState>("idle");
  const [consent, setConsent] = useState(false);
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Project Inquiry",
    message: "",
  });

  const set = (key: keyof typeof fields) => (e: { target: { value: string } }) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!consent) return;
    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "who-we-are", ...fields }),
      });
      if (!res.ok) throw new Error("Request failed");
      setFormState("success");
      setFields({ firstName: "", lastName: "", email: "", subject: "Project Inquiry", message: "" });
      setConsent(false);
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="bg-[#FFF3EB] text-[#1a3749] overflow-hidden pt-[100px]">

      {/* SECTION 1: WHO WE ARE (Intro) */}
      <section className="px-6 md:px-[60px] py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-[11px] font-medium uppercase tracking-[3px] mb-8 text-[#b5754d]">Who We Are</h2>
          <p className="text-[16px] md:text-[18px] font-light leading-relaxed mb-8">{introParagraph1}</p>
          <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-[#1a3749]/70 mb-8">{introParagraph2}</p>
          <div className="text-[12px] font-medium uppercase tracking-[2px]">
            <p className="mt-2 text-[#b5754d]">Established {establishedYear} • Lagos</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-[500px] md:h-[700px] w-full">
          {topIsVideo ? (
            <video src={topUrl} autoPlay muted loop playsInline className="w-full h-full object-cover" />
          ) : (
            <img src={topUrl} alt="Interior Design Detail" className="w-full h-full object-cover" />
          )}
        </motion.div>
      </section>

      {/* SECTION 2: ABOUT KANSEPT (Dark Section) */}
      <section className="bg-[#1A3749] text-[#FFF3EB] px-6 md:px-[60px] py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 md:order-1 h-[400px] md:h-[600px] w-full">
          {aboutUrl ? (
            aboutIsVideo ? (
              <video src={aboutUrl} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            ) : (
              <img src={aboutUrl} alt="About Kansept" className="w-full h-full object-cover" />
            )
          ) : (
            <div className="w-full h-full bg-[#FFF3EB]/10 flex items-center justify-center">
              <span className="text-[#FFF3EB]/30 text-[11px] uppercase tracking-[2px]">Photo Placeholder</span>
            </div>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 md:order-2">
          <h2 className="text-[11px] font-medium uppercase tracking-[3px] mb-8 text-[#b5754d]">About Kansept</h2>
          <h3 className="text-2xl md:text-3xl font-light leading-tight mb-8">&ldquo;{aboutQuote}&rdquo;</h3>
          <p className="text-[15px] font-light leading-relaxed text-[#FFF3EB]/80 mb-8">{aboutBody}</p>
          <div className="grid grid-cols-2 gap-8 text-[12px] uppercase tracking-[2px] text-[#b5754d]">
            <div><p className="mb-2 text-white">Lead Design</p><p className="opacity-70">{leadDesignerName}</p></div>
            <div><p className="mb-2 text-white">Focus</p><p className="opacity-70">{leadDesignerFocus}</p></div>
          </div>
        </motion.div>
      </section>

      {/* SECTION: THE TEAM */}
      <section className="px-6 md:px-[60px] py-20 md:py-32 bg-[#FFF3EB]">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <h2 className="text-[11px] font-medium uppercase tracking-[3px] text-[#b5754d] mb-6">The Team</h2>
          <h3 className="text-3xl md:text-5xl font-light text-[#1a3749] mb-8">{teamSectionHeading}</h3>
          <p className="text-[16px] font-light leading-relaxed text-[#1a3749]/80">{teamSectionSubtext}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {team.map((member, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group">
              <div className="h-[400px] w-full overflow-hidden mb-6 bg-[#1a3749]/10 relative flex items-center justify-center">
                {member.url ? (
                  member.isVideo ? (
                    <video src={member.url} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  ) : (
                    <img src={member.url} alt={member.name} className="w-full h-full object-cover" />
                  )
                ) : (
                  <span className="text-[#1a3749]/25 text-[11px] uppercase tracking-[2px]">Photo Placeholder</span>
                )}
              </div>
              <h4 className="text-[18px] font-medium text-[#1a3749] mb-1">{member.name}</h4>
              <p className="text-[11px] uppercase tracking-[2px] text-[#b5754d]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: TIMELINE (Process) */}
      <section className="px-6 md:px-[60px] py-20 md:py-32 relative bg-[#FFF3EB]">
        <div className="mb-20 md:mb-32 text-center relative z-10 bg-[#FFF3EB] py-4">
          <h2 className="text-[11px] font-medium uppercase tracking-[3px] text-[#b5754d] mb-4">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-light text-[#1a3749]">{processSectionHeading}</h3>
        </div>

        <div className="relative">
          <div className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#1a3749]/20 -translate-x-1/2 hidden md:block" />

          {processSteps.map((step, index) => {
            const isEven = index % 2 === 1;
            const isLast = index === processSteps.length - 1;

            const imgEl = (
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={isEven ? "order-2" : "order-2 md:order-1"}>
                {step.isVideo ? (
                  <video src={step.image} autoPlay muted loop playsInline className="w-full h-[300px] md:h-[500px] object-cover" />
                ) : (
                  <img src={step.image} alt={step.title} className="w-full h-[300px] md:h-[500px] object-cover" />
                )}
              </motion.div>
            );

            const textEl = (
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className={isEven ? "md:text-right pr-0 md:pr-16 order-1 flex flex-col items-start md:items-end" : "pl-0 md:pl-16 order-1 md:order-2"}>
                <div className="text-[40px] font-light text-[#b5754d] mb-4">{step.number}</div>
                <h3 className={`text-[14px] font-bold uppercase tracking-[2px] mb-2 bg-[#B5754D] inline-block px-2 py-1 transform ${isEven ? "rotate-1" : "-rotate-1"} text-white`}>{step.title}</h3>
                <p className="text-[15px] font-light leading-relaxed text-[#1a3749]/80 mb-6 mt-4">{step.description}</p>
                {step.bullets && step.bullets.length > 0 && (
                  <ul className="space-y-2 text-[14px] text-[#1a3749]/70 mb-6 list-disc list-inside">
                    {step.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                )}
                {step.quote && (
                  <div className={`bg-[#FFF3EB] p-4 ${isEven ? "border-r-2 md:border-l-0 border-l-2 md:text-right" : "border-l-2"} border-[#b5754d] italic text-[13px] text-[#1a3749]/60`}>
                    &ldquo;{step.quote}&rdquo;
                  </div>
                )}
              </motion.div>
            );

            return (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 ${isLast ? "" : "mb-20 md:mb-32"} relative items-center`}>
                <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-[#b5754d] rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />
                {isEven ? <>{textEl}{imgEl}</> : <>{imgEl}{textEl}</>}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: GET IN TOUCH */}
      <section className="bg-[#EBE5DE] px-6 md:px-[60px] py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-[11px] font-medium uppercase tracking-[3px] mb-12 text-[#b5754d]">Get In Touch</h2>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-b border-[#1a3749]/20 pb-2">
                  <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/50 mb-1">First Name</label>
                  <input type="text" required value={fields.firstName} onChange={set("firstName")} className="w-full bg-transparent border-none focus:ring-0 p-0 text-[#1a3749] placeholder-[#1a3749]/30" />
                </div>
                <div className="border-b border-[#1a3749]/20 pb-2">
                  <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/50 mb-1">Last Name</label>
                  <input type="text" value={fields.lastName} onChange={set("lastName")} className="w-full bg-transparent border-none focus:ring-0 p-0 text-[#1a3749] placeholder-[#1a3749]/30" />
                </div>
              </div>
              <div className="border-b border-[#1a3749]/20 pb-2">
                <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/50 mb-1">Email Address</label>
                <input type="email" required value={fields.email} onChange={set("email")} className="w-full bg-transparent border-none focus:ring-0 p-0 text-[#1a3749] placeholder-[#1a3749]/30" />
              </div>
              <div className="border-b border-[#1a3749]/20 pb-2">
                <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/50 mb-1">Subject</label>
                <select value={fields.subject} onChange={set("subject")} className="w-full bg-transparent border-none focus:ring-0 p-0 text-[#1a3749]">
                  <option>Project Inquiry</option>
                  <option>Press</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="border-b border-[#1a3749]/20 pb-2">
                <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/50 mb-1">Your Message</label>
                <textarea rows={3} value={fields.message} onChange={set("message")} className="w-full bg-transparent border-none focus:ring-0 p-0 text-[#1a3749] placeholder-[#1a3749]/30 resize-none" />
              </div>
              <div className="flex items-center gap-3 pt-4">
                <input type="checkbox" id="wwa-consent" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="rounded-none border-[#1a3749]/30 text-[#b5754d] focus:ring-[#b5754d]" />
                <label htmlFor="wwa-consent" className="text-[11px] text-[#1a3749]/60">I agree to the processing of my data.</label>
              </div>
              <button type="submit" disabled={!consent || formState === "submitting" || formState === "success"} className="bg-[#3E2723] text-white px-10 py-4 text-[11px] uppercase tracking-[3px] hover:bg-[#1a3749] transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                {formState === "submitting" ? "Sending…" : formState === "success" ? "Submitted" : "Send Request"}
              </button>
              {formState === "error" && (
                <p className="text-[12px] text-red-600 font-light">Something went wrong. Please try again or email us directly.</p>
              )}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-2 gap-4 h-full content-center">
            {contactIsVideo1 ? (
              <video src={contactUrl1} autoPlay muted loop playsInline className="w-full h-full object-cover max-h-[400px]" />
            ) : (
              <img src={contactUrl1} alt="Interior Detail" className="w-full h-full object-cover max-h-[400px]" />
            )}
            {contactIsVideo2 ? (
              <video src={contactUrl2} autoPlay muted loop playsInline className="w-full h-full object-cover max-h-[400px] mt-12" />
            ) : (
              <img src={contactUrl2} alt="Interior Detail" className="w-full h-full object-cover max-h-[400px] mt-12" />
            )}
          </motion.div>
        </div>
      </section>

    </div>
  );
};
