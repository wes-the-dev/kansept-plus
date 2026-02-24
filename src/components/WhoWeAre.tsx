"use client";

import React from "react";
import { motion } from "motion/react";

const founderImage = "/images/team-founder.jpg";
const step1Image = "/images/project-d.jpg";
const step2Image = "/images/step2.jpg";
const step3Image = "/images/step3.jpg";
const step4Image = "/images/step4.jpg";
const step5Image = "/images/step5.jpg";

const contactImg1 = "/images/contact1.jpg";
const contactImg2 = "/images/contact2.jpg";

const moreImg1 = "/images/more1.jpg";
const moreImg2 = "/images/more2.jpg";
const moreImg3 = "/images/more3.jpg";

export const WhoWeAre = () => {
  return (
    <div className="bg-[#FFF3EB] text-[#1a3749] overflow-hidden pt-[100px]">

      {/* SECTION 1: WHO WE ARE (Intro) */}
      <section className="px-6 md:px-[60px] py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[11px] font-medium uppercase tracking-[3px] mb-8 text-[#b5754d]">Who We Are</h2>
          <p className="text-[16px] md:text-[18px] font-light leading-relaxed mb-8">
            Kansept Plus is an established interior design studio based in Ikoyi, Lagos. We specialize in
            both interior design and civil construction, offering comprehensive solutions from concept to
            completion.
          </p>
          <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-[#1a3749]/70 mb-8">
            Our integrated approach ensures seamless project execution, delivering spaces that are both
            beautifully designed and expertly built. We believe that great design is not just about
            aesthetics, but about creating environments that enhance the way we live and work.
          </p>
          <div className="text-[12px] font-medium uppercase tracking-[2px]">
            <p className="mt-2 text-[#b5754d]">Established xxxx • Lagos</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[500px] md:h-[700px] w-full"
        >
          <img
            src="/images/who-we-are-top.png"
            alt="Interior Design Detail"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* SECTION 2: ABOUT KANSEPT (Dark Section) */}
      <section className="bg-[#1A3749] text-[#FFF3EB] px-6 md:px-[60px] py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 h-[400px] md:h-[600px] w-full"
        >
          <div className="w-full h-full bg-[#FFF3EB]/10 flex items-center justify-center">
            <span className="text-[#FFF3EB]/30 text-[11px] uppercase tracking-[2px]">Photo Placeholder</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >
          <h2 className="text-[11px] font-medium uppercase tracking-[3px] mb-8 text-[#b5754d]">About Kansept</h2>
          <h3 className="text-2xl md:text-3xl font-light leading-tight mb-8">
            &ldquo;Kansept Plus began with a simple vision: to create spaces that inspire. Every project is a new story.&rdquo;
          </h3>
          <p className="text-[15px] font-light leading-relaxed text-[#FFF3EB]/80 mb-8">
            Founded by our lead designer, the studio has grown into a multidisciplinary
            practice handling projects across Nigeria and internationally.
            Our team brings together diverse expertise in architecture, interior design,
            and project management.
          </p>

          <div className="grid grid-cols-2 gap-8 text-[12px] uppercase tracking-[2px] text-[#b5754d]">
            <div>
              <p className="mb-2 text-white">Lead Design</p>
              <p className="opacity-70">Name Placeholder</p>
            </div>
            <div>
              <p className="mb-2 text-white">Focus</p>
              <p className="opacity-70">Residential</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION: THE TEAM */}
      <section className="px-6 md:px-[60px] py-20 md:py-32 bg-[#FFF3EB]">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <h2 className="text-[11px] font-medium uppercase tracking-[3px] text-[#b5754d] mb-6">The Team</h2>
          <h3 className="text-3xl md:text-5xl font-light text-[#1a3749] mb-8">Meet the Minds Behind Kansept</h3>
          <p className="text-[16px] font-light leading-relaxed text-[#1a3749]/80">
            Our strength lies in our diversity. We are a collective of architects, designers, and project managers united by a passion for exceptional craftsmanship and detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            { name: "Name Placeholder", role: "Lead Architect" },
            { name: "Name Placeholder", role: "Senior Interior Designer" },
            { name: "Name Placeholder", role: "Creative Director" },
            { name: "Name Placeholder", role: "Construction Manager" },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-[400px] w-full overflow-hidden mb-6 bg-[#1a3749]/10 relative flex items-center justify-center">
                <span className="text-[#1a3749]/25 text-[11px] uppercase tracking-[2px]">Photo Placeholder</span>
              </div>
              <h4 className="text-[18px] font-medium text-[#1a3749] mb-1">{member.name}</h4>
              <p className="text-[11px] uppercase tracking-[2px] text-[#b5754d]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: TIMELINE (Process) */}
      <section className="px-6 md:px-[60px] py-20 md:py-32 relative bg-[#FFF3EB]">

        {/* Process Header */}
        <div className="mb-20 md:mb-32 text-center relative z-10 bg-[#FFF3EB] py-4">
          <h2 className="text-[11px] font-medium uppercase tracking-[3px] text-[#b5754d] mb-4">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-light text-[#1a3749]">How We Work</h3>
        </div>

        <div className="relative">
          <div className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#1a3749]/20 -translate-x-1/2 hidden md:block" />

          {/* Step 01: DISCOVERY VISIT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-20 md:mb-32 relative items-center">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-[#3E2723] rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <img src={step1Image} alt="Discovery" className="w-full h-[300px] md:h-[500px] object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pl-0 md:pl-16 order-1 md:order-2"
            >
              <div className="text-[40px] font-light text-[#b5754d] mb-4">01</div>
              <h3 className="text-[14px] font-bold uppercase tracking-[2px] mb-2 bg-[#B5754D] inline-block px-2 py-1 transform -rotate-1 text-white">DISCOVERY VISIT</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#1a3749]/80 mb-6 mt-4">
                We start with a discovery visit to learn how you can live, work, and move through your space.
              </p>
              <ul className="space-y-2 text-[14px] text-[#1a3749]/70 mb-6 list-disc list-inside">
                <li>Client lifestyle &amp; needs</li>
                <li>Space measurements &amp; constraints</li>
                <li>Budget &amp; timeline</li>
                <li>Visual Ideas: Floor plans, Site photos</li>
              </ul>
              <div className="bg-[#FFF3EB] p-4 border-l-2 border-[#b5754d] italic text-[13px] text-[#1a3749]/60">
                &ldquo;Understanding our clients vision is a key part of delivering excellent result&rdquo;
              </div>
            </motion.div>
          </div>

          {/* Step 02: DESIGN DIRECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-20 md:mb-32 relative items-center">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-[#b5754d] rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:text-right pr-0 md:pr-16 order-1 flex flex-col items-start md:items-end"
            >
              <div className="text-[40px] font-light text-[#b5754d] mb-4">02</div>
              <h3 className="text-[14px] font-bold uppercase tracking-[2px] mb-2 bg-[#B5754D] inline-block px-2 py-1 transform rotate-1 text-white">DESIGN DIRECTION</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#1a3749]/80 mb-6 mt-4">
                We review the brief, the space, and all constraints, then edit, prioritise, and refine ideas until a single, strong direction emerges.
              </p>
              <div className="bg-[#FFF3EB] p-4 border-r-2 md:border-r-2 md:border-l-0 border-l-2 border-[#b5754d] italic text-[13px] text-[#1a3749]/60 md:text-right">
                &ldquo;By deciding the direction early, the project moves forward with confidence, consistency, and purpose&rdquo;
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2"
            >
              <img src={step2Image} alt="Design Direction" className="w-full h-[300px] md:h-[500px] object-cover" />
            </motion.div>
          </div>

          {/* Step 03: CONCEPTUALIZATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-20 md:mb-32 relative items-center">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-[#1a3749] rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <img src={step3Image} alt="Conceptualization" className="w-full h-[300px] md:h-[500px] object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pl-0 md:pl-16 order-1 md:order-2"
            >
              <div className="text-[40px] font-light text-[#b5754d] mb-4">03</div>
              <h3 className="text-[14px] font-bold uppercase tracking-[2px] mb-2 bg-[#B5754D] inline-block px-2 py-1 transform -rotate-1 text-white">CONCEPTUALIZATION</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#1a3749]/80 mb-6 mt-4">
                We create and communicate a clear design direction with mood, style, and inspiration.
              </p>
              <ul className="space-y-2 text-[14px] text-[#1a3749]/70 mb-6 list-disc list-inside">
                <li>Moodboards</li>
                <li>Sketches</li>
                <li>CGI renders</li>
                <li>3D models</li>
              </ul>
              <div className="bg-[#FFF3EB] p-4 border-l-2 border-[#b5754d] italic text-[13px] text-[#1a3749]/60">
                &ldquo;To bring the design direction to life, we use advanced visualization and conceptual tools&rdquo;
              </div>
            </motion.div>
          </div>

          {/* Step 04: SOURCING */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-20 md:mb-32 relative items-center">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-[#3E2723] rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:text-right pr-0 md:pr-16 order-1 flex flex-col items-start md:items-end"
            >
              <div className="text-[40px] font-light text-[#b5754d] mb-4">04</div>
              <h3 className="text-[14px] font-bold uppercase tracking-[2px] mb-2 bg-[#B5754D] inline-block px-2 py-1 transform rotate-1 text-white">SOURCING</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#1a3749]/80 mb-6 mt-4">
                We carefully source furniture, lighting, finishes, fabrics, and custom pieces.
              </p>
              <div className="bg-[#FFF3EB] p-4 border-r-2 md:border-r-2 md:border-l-0 border-l-2 border-[#b5754d] italic text-[13px] text-[#1a3749]/60 md:text-right">
                &ldquo;Selecting materials that align with the design, quality, and budget.&rdquo;
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2"
            >
              <img src={step4Image} alt="Sourcing" className="w-full h-[300px] md:h-[500px] object-cover" />
            </motion.div>
          </div>

          {/* Step 05: EXECUTION & STYLING */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 relative items-center">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-[#b5754d] rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <img src={step5Image} alt="Execution" className="w-full h-[300px] md:h-[500px] object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pl-0 md:pl-16 order-1 md:order-2"
            >
              <div className="text-[40px] font-light text-[#b5754d] mb-4">05</div>
              <h3 className="text-[14px] font-bold uppercase tracking-[2px] mb-2 bg-[#B5754D] inline-block px-2 py-1 transform -rotate-1 text-white">EXECUTION &amp; STYLING</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#1a3749]/80 mb-6 mt-4">
                We oversee the transformation from concept to completed space.
              </p>
              <ul className="space-y-2 text-[14px] text-[#1a3749]/70 mb-6 list-disc list-inside">
                <li>Site coordination and quality control</li>
                <li>Installation and finishing</li>
                <li>Final styling and handover</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GET IN TOUCH */}
      <section className="bg-[#EBE5DE] px-6 md:px-[60px] py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[11px] font-medium uppercase tracking-[3px] mb-12 text-[#b5754d]">Get In Touch</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-b border-[#1a3749]/20 pb-2">
                  <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/50 mb-1">First Name</label>
                  <input type="text" className="w-full bg-transparent border-none focus:ring-0 p-0 text-[#1a3749] placeholder-[#1a3749]/30" />
                </div>
                <div className="border-b border-[#1a3749]/20 pb-2">
                  <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/50 mb-1">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-none focus:ring-0 p-0 text-[#1a3749] placeholder-[#1a3749]/30" />
                </div>
              </div>
              <div className="border-b border-[#1a3749]/20 pb-2">
                <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/50 mb-1">Email Address</label>
                <input type="email" className="w-full bg-transparent border-none focus:ring-0 p-0 text-[#1a3749] placeholder-[#1a3749]/30" />
              </div>
              <div className="border-b border-[#1a3749]/20 pb-2">
                <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/50 mb-1">Subject</label>
                <select className="w-full bg-transparent border-none focus:ring-0 p-0 text-[#1a3749]">
                  <option>Project Inquiry</option>
                  <option>Press</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="border-b border-[#1a3749]/20 pb-2">
                <label className="block text-[10px] uppercase tracking-[2px] text-[#1a3749]/50 mb-1">Your Message</label>
                <textarea rows={3} className="w-full bg-transparent border-none focus:ring-0 p-0 text-[#1a3749] placeholder-[#1a3749]/30 resize-none"></textarea>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <input type="checkbox" id="consent" className="rounded-none border-[#1a3749]/30 text-[#b5754d] focus:ring-[#b5754d]" />
                <label htmlFor="consent" className="text-[11px] text-[#1a3749]/60">I agree to the processing of my data.</label>
              </div>

              <button type="submit" className="bg-[#3E2723] text-white px-10 py-4 text-[11px] uppercase tracking-[3px] hover:bg-[#1a3749] transition-colors mt-4">
                Send Request
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 h-full content-center"
          >
            <img src={contactImg1} alt="Interior Detail" className="w-full h-full object-cover max-h-[400px]" />
            <img src={contactImg2} alt="Interior Detail" className="w-full h-full object-cover max-h-[400px] mt-12" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: MORE FROM US */}
      {/* <section className="px-6 md:px-[60px] py-16">
        <h2 className="text-[11px] font-medium uppercase tracking-[3px] mb-10 text-[#1a3749]">More From Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="h-[300px] overflow-hidden mb-4">
              <img src={moreImg1} alt="News 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-[10px] uppercase tracking-[2px] text-[#b5754d] mb-2">Projects</p>
            <p className="text-sm font-light">See our latest residential work in Ikoyi.</p>
          </div>
          <div>
            <div className="h-[300px] overflow-hidden mb-4">
              <img src={moreImg2} alt="News 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-[10px] uppercase tracking-[2px] text-[#b5754d] mb-2">Process</p>
            <p className="text-sm font-light">How we select the perfect materials.</p>
          </div>
          <div>
            <div className="h-[300px] overflow-hidden mb-4">
              <img src={moreImg3} alt="News 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-[10px] uppercase tracking-[2px] text-[#b5754d] mb-2">Studio</p>
            <p className="text-sm font-light">Behind the scenes at Kansept Plus.</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};
