"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "I am looking for a therapist",
    message: ""
  });

  useEffect(() => {
  const lenis = new Lenis({
    autoRaf: true,
  });

  lenis.on("scroll", ScrollTrigger.update);
  ScrollTrigger.refresh();

  window.scrollTo(0, 0);
  lenis.scrollTo(0, { immediate: true });

  return () => {
    lenis.destroy();
  };
}, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      
      if (heroRef.current) {
        tl.fromTo(
          heroRef.current.querySelectorAll(".animate-hero-item"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power4.out" }
        );
      }

      if (contentRef.current) {
        tl.fromTo(
          contentRef.current.querySelectorAll(".animate-content-block"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" },
          "-=0.4"
        );
      }
    },
    { scope: containerRef, dependencies: [] }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `Hello Support Systems, %0AMy name is ${encodeURIComponent(formData.name)}.%0AEmail: ${encodeURIComponent(formData.email)}.%0ARegarding: ${encodeURIComponent(formData.topic)}.%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/919740746668?text=${whatsappText}`, "_blank");
  };

  return (
    <div ref={containerRef} className="bg-[#faf8f3] w-full min-h-screen relative">
      
      <section 
        ref={heroRef}
        className="relative min-h-[45vh] w-full bg-[#faf8f3] flex items-center overflow-hidden pt-32 pb-12 border-b border-[#11698e]/5"
      >
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#11698e]/[0.02] blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#59c36a]/[0.02] blur-3xl" />
        </div>

        <div className="w-full max-w-4xl px-6 mx-auto text-center relative z-10">
          <span className="animate-hero-item text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a] block mb-4">
            Get In Touch
          </span>
          
          <h1 className="animate-hero-item font-serif text-5xl md:text-6xl lg:text-7xl text-[#11698e] tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            We are here to help.
          </h1>
          
          <p className="animate-hero-item text-base md:text-lg text-[#5c6b68] max-w-2xl mx-auto leading-relaxed font-light">
            Whether you are looking for support, want to partner with us, or just have a question — reach out. We are always listening.
          </p>
        </div>
      </section>

      <section ref={contentRef} className="py-20 w-full relative z-10">
        <div className="w-full max-w-5xl px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 flex flex-col gap-10">
              
              <div className="animate-content-block flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#59c36a]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#59c36a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#11698e] font-semibold mb-1">WhatsApp</h3>
                  <p className="text-xs text-[#59c36a] font-semibold tracking-wide uppercase mb-2">The fastest way to reach us</p>
                  <p className="text-sm text-[#5c6b68] font-light leading-relaxed mb-3">We typically reply within a few hours.</p>
                  <a href="https://wa.me/919740746668" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-[#11698e] hover:text-[#59c36a] transition-colors">
                    +91 97407 46668
                  </a>
                </div>
              </div>

              <div className="animate-content-block flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#11698e]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#11698e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#11698e] font-semibold mb-1">Email</h3>
                  <p className="text-xs text-[#11698e]/60 font-semibold tracking-wide uppercase mb-2">For partnerships &amp; inquiries</p>
                  <p className="text-sm text-[#5c6b68] font-light leading-relaxed mb-3">For partnerships, general inquiries, or detailed questions.</p>
                  <a href="mailto:contact.ssystems25@gmail.com" className="text-base font-medium text-[#11698e] hover:text-[#59c36a] transition-colors break-all">
                    contact.ssystems25@gmail.com
                  </a>
                </div>
              </div>

              <div className="animate-content-block flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#1995ad]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1995ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#11698e] font-semibold mb-1">LinkedIn</h3>
                  <p className="text-xs text-[#1995ad] font-semibold tracking-wide uppercase mb-2">Follow our journey</p>
                  <p className="text-sm text-[#5c6b68] font-light leading-relaxed mb-3">Follow our journey and professional updates.</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-[#11698e] hover:text-[#59c36a] transition-colors">
                    Support Systems
                  </a>
                </div>
              </div>

            </div>

            <div className="lg:col-span-7 w-full animate-content-block">
              <form 
                onSubmit={handleSubmit}
                className="w-full bg-white border border-black/[0.04] rounded-[32px] p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.01)] flex flex-col gap-6"
              >
                <div className="text-left border-b border-black/[0.03] pb-4 mb-2">
                  <h2 className="font-serif text-2xl text-[#11698e] tracking-tight">Send a message</h2>
                </div>

                <div className="flex flex-col text-left gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#5c6b68]">Your name</label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-black/[0.08] focus:border-[#11698e]/40 focus:outline-none text-sm text-[#37474F] bg-[#faf8f3]/30 font-light transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col text-left gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#5c6b68]">Email address</label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-black/[0.08] focus:border-[#11698e]/40 focus:outline-none text-sm text-[#37474F] bg-[#faf8f3]/30 font-light transition-colors"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="flex flex-col text-left gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#5c6b68]">What is this regarding?</label>
                  <select 
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-black/[0.08] focus:border-[#11698e]/40 focus:outline-none text-sm text-[#37474F] bg-[#faf8f3]/30 font-light transition-colors appearance-none cursor-pointer"
                  >
                    <option value="I am looking for a therapist">I am looking for a therapist</option>
                    <option value="I am a doctor looking to refer">I am a doctor looking to refer</option>
                    <option value="I am a therapist looking to join">I am a therapist looking to join</option>
                    <option value="Corporate partnership">Corporate partnership</option>
                    <option value="General inquiry">General inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col text-left gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#5c6b68]">Your message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl border border-black/[0.08] focus:border-[#11698e]/40 focus:outline-none text-sm text-[#37474F] bg-[#faf8f3]/30 font-light transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    className="group w-full h-14 bg-[#11698e] hover:bg-[#0f5a7a] text-white font-medium rounded-xl shadow-lg shadow-[#11698e]/10 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between px-6"
                  >
                    <span className="text-base">Send Message</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform group-hover:translate-x-0.5 transition-transform duration-300"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}