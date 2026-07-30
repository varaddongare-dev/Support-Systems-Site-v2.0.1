"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

const resistanceItems = [
  "Repeated Screening Calls",
  "Fee Negotiations",
  "Scheduling Back-and-Forth",
  "Dropouts Due to Mismatch",
  "Pressure to Convince Clients"
];

const processSteps = [
  {
    num: "1",
    title: "Client Reaches Us",
    desc: "Individuals looking for clarity come through our centralized access layers."
  },
  {
    num: "2",
    title: "We Understand the Client",
    desc: "We screen for readiness, expectations, clinical context, and structural limits."
  },
  {
    num: "3",
    title: "We Align the Client to You",
    desc: "Based on our match matrix, we introduce them to your specific practice profile."
  },
  {
    num: "4",
    title: "Therapy Begins",
    desc: "Your first session launches smoothly with alignment and clear expectations."
  },
  {
    num: "5",
    title: "We Stay in the Background",
    desc: "We manage long-term touchpoints and consistency without micromanagement."
  }
];

const advantageItems = [
  "Clients are pre-understood and aligned",
  "No logistical burden",
  "Better engagement from the start",
  "Structured follow-ups without micromanagement",
  "Professional buffer for difficult situations"
];

export default function ProfessionalsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const resistanceRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const advantageRef = useRef<HTMLDivElement>(null);

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

      if (resistanceRef.current) {
        gsap.fromTo(
          resistanceRef.current.querySelectorAll(".animate-resistance"),
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: resistanceRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out"
          }
        );
      }

      if (stepsRef.current) {
        gsap.fromTo(
          stepsRef.current.querySelectorAll(".animate-step-card"),
          { opacity: 0, y: 35 },
          {
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out"
          }
        );
      }

      if (advantageRef.current) {
        gsap.fromTo(
          advantageRef.current.querySelectorAll(".animate-advantage"),
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: advantageRef.current,
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
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div ref={containerRef} className="bg-[#faf8f3] w-full min-h-screen relative">
      
      {/* HERO HERO CONTAINER BLOCK */}
      <section 
        ref={heroRef}
        className="relative min-h-[85vh] w-full bg-[#faf8f3] flex items-center overflow-hidden pt-36 pb-16"
      >
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#11698e]/[0.02] blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#59c36a]/[0.02] blur-3xl" />
        </div>

        <div className="w-full max-w-6xl px-6 mx-auto relative z-10 flex flex-col items-center">
          <div className="w-full max-w-4xl text-center flex flex-col items-center">
            <span className="animate-hero text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a] block mb-4">
              Who We Are
            </span>
            
            <h1 className="animate-hero font-serif text-5xl md:text-6xl lg:text-7xl text-[#11698e] tracking-tight leading-[1.08] max-w-4xl mb-8">
              The Guiding Layer
            </h1>
            
            <p className="animate-hero text-lg md:text-xl text-[#5c6b68] max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Support System is often the first point of contact in a client’s mental health journey. Think of us as the guiding layer that helps individuals understand what they need and connects them to the right professional with clarity and structure.
            </p>

            <div className="animate-hero p-8 w-full max-w-3xl rounded-[40px] bg-white border border-black/[0.03] shadow-[0_15px_50px_rgba(17,105,142,0.03)] flex flex-col md:flex-row justify-between items-center gap-6 text-left">
              <div className="max-w-md">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#59c36a] block mb-1">Our Invitation</span>
                <p className="text-base font-medium text-[#11698e] leading-snug">
                  We will take care of everything so you can focus on therapy. Work with clients who are already understood, aligned, and ready.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
                <Link
                  href="/contact?regarding=provider"
                  className="px-6 py-3.5 bg-[#11698e] text-white text-sm font-medium rounded-full shadow-md hover:bg-[#0f5a7a] transition-all duration-300 text-center"
                >
                  Join our network
                </Link>
                <Link
                  href="/contact?regarding=provider"
                  className="px-6 py-3.5 border border-[#11698e]/20 bg-[#faf8f3]/60 text-[#11698e] text-sm font-medium rounded-full hover:bg-white transition-all duration-300 text-center"
                >
                  Apply to work with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE SOLVE SECTION */}
      <section 
        ref={resistanceRef}
        className="relative overflow-hidden py-24 md:py-32 flex items-center justify-center border-t border-[#11698e]/5 bg-white/40 backdrop-blur-sm"
      >
        <div className="w-full max-w-6xl px-6 mx-auto relative z-10 flex items-center justify-center">
          <div className="relative w-full overflow-hidden rounded-[40px] bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_20px_80px_rgba(17,105,142,0.06)] p-8 md:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
              
              <div className="lg:col-span-5 text-left">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#59c36a] block mb-2">
                  What We Solve For Therapists
                </span>
                <h2 className="animate-resistance font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight leading-[1.1]">
                  We Handle the Resistance
                </h2>
                <div className="animate-resistance mt-10 flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-[#59c36a]" />
                  <span className="text-sm font-medium text-[#11698e]">
                    Protecting Your Practice
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-4 w-full">
                {resistanceItems.map((item) => (
                  <div 
                    key={item}
                    className="animate-resistance flex gap-5 p-5 rounded-2xl bg-white/80 border border-black/[0.02] shadow-sm items-center"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#59c36a]/10 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#59c36a]" />
                    </div>
                    <span className="text-base font-light text-[#3c4a47]">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY CARD SLOTS */}
      <section ref={stepsRef} className="py-24 md:py-32 w-full border-t border-[#11698e]/5">
        <div className="w-full max-w-5xl px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a] block mb-3">
              Methodology
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div 
                key={step.num}
                className="animate-step-card flex flex-col bg-white border border-black/[0.03] rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)] text-left hover:shadow-[0_15px_40px_rgba(17,105,142,0.03)] transition-all duration-300"
              >
                <span className="font-serif text-3xl font-bold text-[#59c36a]/30 block mb-4">
                  {step.num}
                </span>
                <h3 className="font-serif text-base font-semibold text-[#11698e] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5c6b68] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGE COMPONENT FLOW */}
      <section 
        ref={advantageRef}
        className="relative overflow-hidden py-24 md:py-32 border-t border-[#11698e]/5 bg-white/70 backdrop-blur-xl"
      >
        <div className="w-full max-w-6xl px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a]">
                Why Join Support System
              </span>
              <h2 className="animate-advantage mt-3 font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight leading-tight">
                The Professional Advantage
              </h2>
              <p className="animate-advantage mt-6 text-base text-[#5c6b68] leading-relaxed font-light">
                Therapy should focus on healing, not logistics. We make sure everything around therapy is taken care of so you can focus on what matters most.
              </p>
              
              <div className="animate-advantage mt-8 pt-6 border-t border-black/[0.04]">
                <p className="text-xl font-serif italic text-[#11698e] leading-relaxed">
                  &ldquo;We don’t believe in random referrals. We believe in getting it right from the start.&rdquo;
                </p>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#59c36a] mt-2 block">
                  — Support Systems Coordination Insight
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4 w-full">
              {advantageItems.map((item) => (
                <div 
                  key={item}
                  className="animate-advantage flex gap-5 p-5 rounded-2xl bg-white border border-black/[0.02] shadow-sm items-center hover:border-[#11698e]/15 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#11698e]/5 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#11698e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[15px] font-light text-[#3c4a47]">{item}</span>
                </div>
              ))}

              <div className="animate-advantage p-6 rounded-3xl bg-[#11698e]/5 border border-[#11698e]/10 text-left mt-2">
                <p className="text-base font-medium text-[#11698e] leading-relaxed">
                  We act as a clinical anchor, ensuring better alignment, continuity, and outcomes.
                </p>
              </div>
            </div>

          </div>

          <div className="animate-advantage mt-24 text-center w-full max-w-xl mx-auto bg-[#11698e] rounded-3xl p-8 md:p-12 shadow-lg shadow-[#11698e]/10 animate-fade-in">
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight mb-2">
              Want to work with us?
            </h3>
            <p className="text-white/80 text-sm mb-8 font-light max-w-sm mx-auto leading-relaxed">
              Submit your credentials and profile to apply to join our vetted clinical network.
            </p>
            <Link
              href="/contact?regarding=provider"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#59c36a] hover:bg-[#4cb05c] text-white font-medium rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
            >
              Apply to join our network
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}