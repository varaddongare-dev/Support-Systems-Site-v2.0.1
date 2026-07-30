"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

const individualBulletPoints = [
  "100% confidential",
  "No trial and error",
  "Neuropsychologist-led",
  "Free initial consultation"
];

const howItWorksSteps = [
  {
    step: "01",
    title: "Reach out",
    desc: "Fill our short intake form or WhatsApp us. No lengthy questionnaires."
  },
  {
    step: "02",
    title: "Brief conversation",
    desc: "A free 20-minute call with our team. We listen — your history, preferences, and what you need."
  },
  {
    step: "03",
    title: "Your matched therapist",
    desc: "We introduce you to 1–2 specifically chosen therapists. Start with confidence, not guesswork."
  }
];

const matchCriteria = [
  {
    title: "Location",
    desc: "Online, in-person or hybrid based on your city and comfort."
  },
  {
    title: "Language",
    desc: "Sessions in your preferred language — because nuance matters."
  },
  {
    title: "Cultural fit",
    desc: "A therapist who understands your context and background."
  },
  {
    title: "Comfort & gender",
    desc: "Your comfort level and gender preference are always respected."
  },
  {
    title: "Affordability",
    desc: "We match within your real budget without compromising on quality."
  },
  {
    title: "Format",
    desc: "Individual, couples, family, or specialist therapy available."
  }
];

export default function MatchingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const criteriaRef = useRef<HTMLDivElement>(null);
  const pathwaysRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    language: "Select a language",
    format: "Online",
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
      gsap.registerPlugin(ScrollTrigger);

      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll(".animate-hero"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power4.out" }
        );
      }

      if (workflowRef.current) {
        gsap.fromTo(
          workflowRef.current.querySelectorAll(".animate-workflow-item"),
          { opacity: 0, y: 45 },
          {
            scrollTrigger: {
              trigger: workflowRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out"
          }
        );
      }

      if (criteriaRef.current) {
        gsap.fromTo(
          criteriaRef.current.querySelectorAll(".animate-criteria"),
          { opacity: 0, y: 35 },
          {
            scrollTrigger: {
              trigger: criteriaRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out"
          }
        );
      }

      if (pathwaysRef.current) {
        gsap.fromTo(
          pathwaysRef.current.querySelectorAll(".animate-pathway-card"),
          { opacity: 0, y: 35 },
          {
            scrollTrigger: {
              trigger: pathwaysRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out"
          }
        );
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current.querySelectorAll(".animate-form"),
          { opacity: 0, y: 40 },
          {
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
          }
        );
      }

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    },
    { scope: containerRef, dependencies: [] }
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `Hello Support Systems, %0AMy name is ${encodeURIComponent(formData.name)}.%0APhone: ${encodeURIComponent(formData.phone)}.%0AEmail: ${encodeURIComponent(formData.email)}.%0ALanguage: ${encodeURIComponent(formData.language)}.%0AFormat: ${encodeURIComponent(formData.format)}.%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/919740746668?text=${whatsappText}`, "_blank");
  };

  const handleJourneyLaunch = () => {
    const contextTag = selectedPathway ? `Pathway Selected: ${selectedPathway}. ` : "";
    const whatsappText = `Hello Support Systems, %0AI want to start my matching journey.%0A${encodeURIComponent(contextTag)}I would like to schedule my free initial consultation.`;
    window.open(`https://wa.me/919740746668?text=${whatsappText}`, "_blank");
  };

  return (
    <div ref={containerRef} className="bg-[#faf8f3] w-full min-h-screen relative">
      
      {/* HERO SECTION */}
      <section
  ref={heroRef}
  className="relative min-h-screen bg-[#faf8f3] flex items-center justify-center overflow-hidden px-6"
>
  {/* Ambient Background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#11698e]/[0.025] blur-3xl" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#59c36a]/[0.02] blur-3xl" />
  </div>

<div className="relative z-10 max-w-7xl mx-auto text-center">
      <span className="animate-hero text-xs font-semibold tracking-[0.3em] uppercase text-[#59c36a] block mb-6">
      For Individuals
    </span>

    <h1 className="animate-hero font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-[#11698e]">
      Finding the right therapist
      <br />
      <span className="italic font-normal text-[#59c36a]">
        should not be this hard.
      </span>
    </h1>

    <div className="animate-hero mt-10 max-w-3xl mx-auto">
      <p className="text-lg md:text-xl text-[#5c6b68] leading-relaxed font-light">
        Most therapy does not fail because of the person. It fails because
        of the match. Support Systems takes the guesswork out — so you get
        the support you deserve.
      </p>
    </div>

    <div className="animate-hero flex flex-wrap justify-center gap-3 mt-12 max-w-3xl mx-auto">
      {individualBulletPoints.map((point) => (
        <span
          key={point}
          className="px-5 py-2.5 bg-white border border-black/[0.04] text-sm font-medium tracking-wide text-[#11698e] rounded-full shadow-sm hover:shadow-md transition-all duration-300"
        >
          {point}
        </span>
      ))}
    </div>

    <div className="animate-hero mt-12">
      <Link
        href="/matching"
        className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#11698e] text-white font-medium shadow-md hover:bg-[#0f5a7a] transition-all duration-300 hover:-translate-y-1"
      >
        Find Your Match
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  </div>
</section>

      {/* HOW IT WORKS SECTION */}
      <section ref={workflowRef} className="relative overflow-hidden py-24 md:py-32 border-t border-[#11698e]/5 bg-white/40 backdrop-blur-sm">
        <div className="w-full max-w-6xl px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 text-left">
              <span className="animate-workflow-item text-xs font-semibold tracking-[0.2em] uppercase text-[#59c36a] block mb-2">Process Workflow</span>
              <h2 className="animate-workflow-item font-serif text-4xl text-[#11698e] tracking-tight leading-tight">How it works</h2>
              <p className="animate-workflow-item text-sm text-[#5c6b68] leading-relaxed font-light mt-4">From first message to first session—designed to feel guided, clear, and safe.</p>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-6 w-full">
              {howItWorksSteps.map((step) => (
                <div key={step.step} className="animate-workflow-item flex flex-col sm:flex-row gap-6 p-8 rounded-[32px] bg-white border border-black/[0.03] shadow-[0_10px_35px_rgba(0,0,0,0.01)] text-left hover:shadow-[0_15px_45px_rgba(17,105,142,0.03)] transition-all duration-300">
                  <div className="font-serif text-4xl font-bold text-[#59c36a]/30 flex-shrink-0 sm:pt-1">{step.step}</div>
                  <div className="flex flex-col">
                    <h3 className="font-serif text-2xl text-[#11698e] tracking-tight mb-2">{step.title}</h3>
                    <p className="text-base text-[#5c6b68] font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MATCH CRITERIA SECTION */}
      <section ref={criteriaRef} className="relative overflow-hidden py-24 md:py-32 border-t border-[#11698e]/5 bg-white/40 backdrop-blur-sm">
        <div className="w-full max-w-6xl px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-5 flex flex-col">
              <span className="animate-criteria text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a] block mb-3">Parameters</span>
              <h2 className="animate-criteria font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight leading-tight">What we match on</h2>
              <p className="animate-criteria text-base text-[#5c6b68] leading-relaxed font-light mt-6 max-w-sm">Every detail matters to us. We evaluate across multi-dimensional criteria to lock in the perfect clinical match.</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {matchCriteria.map((item) => (
                <div key={item.title} className="animate-criteria bg-white p-8 rounded-3xl border border-black/[0.03] shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_45px_rgba(17,105,142,0.03)] transition-all duration-300">
                  <h3 className="font-serif text-xl text-[#11698e] tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm text-[#5c6b68] leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PATHWAYS SPLIT CHOOSE LAYER */}
      <section ref={pathwaysRef} className="relative overflow-hidden py-24 border-t border-[#11698e]/5 bg-white/70 backdrop-blur-xl">
        <div className="w-full max-w-5xl px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#59c36a] block mb-2">The Starting Point</span>
            <h2 className="font-serif text-4xl text-[#11698e] tracking-tight">Select your current baseline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full max-w-4xl mx-auto">
            <div onClick={() => setSelectedPathway("First Step")} className={`animate-pathway-card relative overflow-hidden rounded-[40px] p-8 md:p-10 bg-white border text-left cursor-pointer transition-all duration-500 flex flex-col ${selectedPathway === "First Step" ? "border-[#59c36a] ring-1 ring-[#59c36a]/20 shadow-[0_20px_50px_rgba(89,195,106,0.06)]" : "border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(17,105,142,0.03)]"}`}>
              <div className="flex justify-between items-center mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${selectedPathway === "First Step" ? "bg-[#59c36a]/10 text-[#59c36a]" : "bg-[#f6f8f8] text-[#11698e]"}`}><span className="font-serif text-xl font-bold">A</span></div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${selectedPathway === "First Step" ? "border-[#59c36a] bg-[#59c36a]" : "border-black/20"}`}>{selectedPathway === "First Step" && <div className="w-1.5 h-1.5 rounded-full bg-white" />}</div>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#11698e] tracking-tight mb-4">I am taking my first step</h3>
              <p className="text-base text-[#5c6b68] leading-relaxed font-light">You know something is not right, but the options feel overwhelming. You need someone to help you find the right support.</p>
            </div>
            <div onClick={() => setSelectedPathway("Therapy Failed Before")} className={`animate-pathway-card relative overflow-hidden rounded-[40px] p-8 md:p-10 bg-white border text-left cursor-pointer transition-all duration-500 flex flex-col ${selectedPathway === "Therapy Failed Before" ? "border-[#11698e] ring-1 ring-[#11698e]/20 shadow-[0_20px_50px_rgba(17,105,142,0.06)]" : "border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(17,105,142,0.03)]"}`}>
              <div className="flex justify-between items-center mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${selectedPathway === "Therapy Failed Before" ? "bg-[#11698e]/10 text-[#11698e]" : "bg-[#f6f8f8] text-[#11698e]"}`}><span className="font-serif text-xl font-bold">B</span></div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${selectedPathway === "Therapy Failed Before" ? "border-[#11698e] bg-[#11698e]" : "border-black/20"}`}>{selectedPathway === "Therapy Failed Before" && <div className="w-1.5 h-1.5 rounded-full bg-white" />}</div>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#11698e] tracking-tight mb-4">Therapy did not work before</h3>
              <p className="text-base text-[#5c6b68] leading-relaxed font-light">You tried. It did not click. You stopped believing. We exist for exactly this — the right match makes all the difference.</p>
            </div>
          </div>
          <div className="mt-16 text-center w-full max-w-xl mx-auto animate-pathway-card">
            <button onClick={handleJourneyLaunch} className="group w-full h-16 bg-[#11698e] hover:bg-[#0f5a7a] text-white font-medium rounded-2xl shadow-lg shadow-[#11698e]/10 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between px-8">
              <span className="text-lg md:text-xl font-serif tracking-wide">Start My Journey</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 group-hover:translate-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></div>
            </button>
          </div>
        </div>
      </section>

      {/* FINAL INTAKE FORM SECTION */}
      <section ref={formRef} className="py-24 md:py-32 w-full border-t border-[#11698e]/5 bg-[#faf8f3]">
        <div className="w-full max-w-5xl px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 text-left flex flex-col">
              <span className="animate-form text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a] block mb-4">Final Step</span>
              <h2 className="animate-form font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight leading-tight">Let’s find your match</h2>
              <p className="animate-form text-lg text-[#5c6b68] leading-relaxed font-light mt-6">Share a little about yourself. We will reach out within 24 hours to schedule your free consultation call.</p>
              <div className="animate-form mt-10 p-6 rounded-3xl bg-white border border-[#11698e]/5 shadow-sm">
                <p className="text-xs text-[#5c6b68]/70 leading-relaxed font-light">Your information is completely confidential and used only to find your match.</p>
              </div>
            </div>

            <div className="lg:col-span-7 w-full animate-form">
              <form onSubmit={handleFormSubmit} className="w-full bg-white border border-black/[0.04] rounded-[40px] p-8 md:p-12 shadow-[0_20px_80px_rgba(17,105,142,0.03)] flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col text-left gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#5c6b68]">Your name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full h-12 px-4 rounded-xl border border-black/[0.08] focus:border-[#11698e]/40 focus:outline-none text-sm text-[#37474F] bg-[#faf8f3]/40 transition-colors" placeholder="Full Name" />
                  </div>
                  <div className="flex flex-col text-left gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#5c6b68]">Phone number</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full h-12 px-4 rounded-xl border border-black/[0.08] focus:border-[#11698e]/40 focus:outline-none text-sm text-[#37474F] bg-[#faf8f3]/40 transition-colors" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="flex flex-col text-left gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#5c6b68]">Email address</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full h-12 px-4 rounded-xl border border-black/[0.08] focus:border-[#11698e]/40 focus:outline-none text-sm text-[#37474F] bg-[#faf8f3]/40 transition-colors" placeholder="name@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col text-left gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#5c6b68]">Preferred language</label>
                    <select value={formData.language} onChange={(e) => setFormData({ ...formData, language: e.target.value })} className="w-full h-12 px-4 rounded-xl border border-black/[0.08] focus:border-[#11698e]/40 focus:outline-none text-sm text-[#37474F] bg-[#faf8f3]/40 transition-colors appearance-none cursor-pointer">
                      <option disabled>Select a language</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Kannada">Kannada</option>
                      <option value="Tamil">Tamil</option>
                      <option value="Telugu">Telugu</option>
                      <option value="Marathi">Marathi</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col text-left gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#5c6b68]">Session format</label>
                    <select value={formData.format} onChange={(e) => setFormData({ ...formData, format: e.target.value })} className="w-full h-12 px-4 rounded-xl border border-black/[0.08] focus:border-[#11698e]/40 focus:outline-none text-sm text-[#37474F] bg-[#faf8f3]/40 transition-colors appearance-none cursor-pointer">
                      <option value="Online">Online</option>
                      <option value="In-person">In-person</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col text-left gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#5c6b68]">Tell us what you are looking for</label>
                  <textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full p-4 rounded-xl border border-black/[0.08] focus:border-[#11698e]/40 focus:outline-none text-sm text-[#37474F] bg-[#faf8f3]/40 transition-colors resize-none" placeholder="Briefly describe your requirements or concerns..." />
                </div>

                <button type="submit" className="group mt-2 w-full h-14 bg-[#59c36a] hover:bg-[#4cb05c] text-white font-medium rounded-2xl shadow-lg shadow-[#59c36a]/10 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between px-8">
                  <span className="text-base font-serif tracking-wide">Request My Match</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}