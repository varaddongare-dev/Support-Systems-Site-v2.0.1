"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

const problemsList = [
  { num: "01", title: "Uncertain Alignment", desc: "The right therapist for a specific patient isn’t always obvious." },
  { num: "02", title: "Dropout Risks", desc: "Trial-and-error referrals lead to dropouts." },
  { num: "03", title: "Treatment Mismatch", desc: "Therapy may not align with treatment plans." },
  { num: "04", title: "Availability Gaps", desc: "Therapist availability varies across locations." },
  { num: "05", title: "Coordination Load", desc: "Managing coordination adds to clinical load." }
];

const processesList = [
  { step: "1", title: "Referral or Intake" },
  { step: "2", title: "Clinical Understanding" },
  { step: "3", title: "Therapist Matching" },
  { step: "4", title: "Therapy Begins" },
  { step: "5", title: "Ongoing Coordination" }
];

const advantagesList = [
  "Better therapy outcomes",
  "Improved patient adherence",
  "Fewer dropouts",
  "Reduced coordination stress",
  "Confidence in every referral"
];

export default function DoctorsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

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

      if (problemRef.current) {
        gsap.fromTo(
          problemRef.current.querySelectorAll(".animate-problem"),
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: problemRef.current,
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

      if (actionRef.current) {
        gsap.fromTo(
          actionRef.current.querySelectorAll(".animate-action"),
          { opacity: 0, y: 35 },
          {
            scrollTrigger: {
              trigger: actionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out"
          }
        );
      }

      if (stepsRef.current) {
        gsap.fromTo(
          stepsRef.current.querySelectorAll(".animate-step"),
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: stepsRef.current,
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

      if (benefitsRef.current) {
        gsap.fromTo(
          benefitsRef.current.querySelectorAll(".animate-benefit"),
          { opacity: 0, y: 35 },
          {
            scrollTrigger: {
              trigger: benefitsRef.current,
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
      
      {/* HERO SECTION */}
      <section 
  ref={heroRef}
  className="relative min-h-[85vh] w-full bg-[#faf8f3] flex items-center overflow-hidden pt-36 pb-16"
>
  <div className="absolute inset-0 pointer-events-none opacity-30">
    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#11698e]/[0.02] blur-3xl" />
    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#59c36a]/[0.02] blur-3xl" />
  </div>

  <div className="w-full max-w-7xl px-6 mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left Box">
      <span className="animate-hero text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a] block mb-4">
        For Referring Doctors
      </span>
      
      <h1 className="animate-hero font-serif text-4xl md:text-5xl lg:text-6xl text-[#11698e] tracking-tight leading-[1.1] max-w-2xl mb-6">
        You know many psychologists. <br />
        <span className="italic tracking-wide font-normal text-[#59c36a]">But finding the right fit for each patient isn’t always simple.</span>
      </h1>
      
      <p className="animate-hero text-base md:text-lg text-[#5c6b68] max-w-xl leading-relaxed font-light mb-8">
        We ensure your patients are matched with the right therapist so your treatment plans are supported, not disrupted.
      </p>

      <div className="animate-hero flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
        <Link
          href="/contact?regarding=doctor"
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 min-w-[200px] bg-gradient-to-r from-[#11698e] to-[#0f5a7a] text-white text-sm font-medium tracking-[0.02em] shadow-[0_10px_30px_rgba(17,105,142,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(17,105,142,0.28)]"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          <span className="relative z-10">Partner with us</span>
          <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">→</span>
        </Link>
        <Link
          href="/contact?regarding=doctor"
          className="group relative inline-flex items-center justify-center gap-3 min-w-[200px] overflow-hidden rounded-full px-8 py-4 bg-white/90 backdrop-blur-md border border-[#11698e]/12 text-[#11698e] text-sm font-medium tracking-[0.02em] shadow-[0_10px_30px_rgba(17,105,142,0.06)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:border-[#59c36a]/30 hover:shadow-[0_15px_40px_rgba(17,105,142,0.12)]"
        >
          <span className="absolute left-0 top-0 h-full w-0 bg-[#59c36a] transition-all duration-500 group-hover:w-1.5" />
          <span className="relative z-10">Refer a patient</span>
          <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#11698e]/5 transition-all duration-300 group-hover:bg-[#59c36a]/10 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>

    <div className="animate-hero w-full flex justify-center lg:justify-end items-center self-center">
      <img 
        src="assets/doc.png" 
        alt="Matching Doctors and Patients Illustration" 
        className="w-full max-w-md lg:max-w-xl h-auto object-contain object-center block" 
      />
    </div>
  </div>
</section>

      {/* THE PATHWAY SECTION */}
      <section
        ref={actionRef}
        className="relative py-32 md:py-40 overflow-hidden border-t border-[#11698e]/5"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#11698e]/[0.02] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="animate-action text-xs font-semibold tracking-[0.3em] uppercase text-[#59c36a] block mb-5">
              How It Works
            </span>

            <h2 className="animate-action font-serif text-5xl md:text-6xl lg:text-7xl text-[#11698e] tracking-tight leading-[1.05]">
              The path to the
              <span className="italic text-[#59c36a] font-normal">
                {" "}right therapist
              </span>
            </h2>

            <p className="animate-action mt-8 text-lg md:text-xl text-[#5c6b68] leading-relaxed font-light">
              We create a structured clinical pathway that removes uncertainty
              from the therapy process and improves the likelihood of a
              successful therapeutic relationship.
            </p>
          </div>

          <div className="relative mt-24 max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 hidden md:block">
              <div className="relative h-full w-px bg-[#11698e]/10">
                <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[#59c36a]/0 via-[#59c36a]/50 to-[#59c36a]/0" />
              </div>
            </div>

            <div className="space-y-24">
              {/* STEP 1 */}
              <div className="animate-action flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-16">
                  <div className="bg-white rounded-[32px] p-8 border border-black/[0.03] shadow-[0_20px_60px_rgba(17,105,142,0.05)] hover:-translate-y-1 transition-all duration-500">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#59c36a] font-semibold">
                      STEP 01
                    </span>
                    <h3 className="mt-3 font-serif text-3xl text-[#11698e]">
                      Patient reaches out
                    </h3>
                    <p className="mt-4 text-[#5c6b68] leading-relaxed">
                      Every journey begins with understanding the individual,
                      their concerns, expectations, and personal context.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-16 justify-center">
                  <div className="h-5 w-5 rounded-full bg-[#59c36a] ring-8 ring-[#59c36a]/10" />
                </div>
                <div className="hidden md:block w-1/2" />
              </div>

              {/* STEP 2 */}
              <div className="animate-action flex flex-col md:flex-row items-center">
                <div className="hidden md:block w-1/2" />
                <div className="hidden md:flex w-16 justify-center">
                  <div className="h-5 w-5 rounded-full bg-[#59c36a] ring-8 ring-[#59c36a]/10" />
                </div>
                <div className="w-full md:w-1/2 md:pl-16">
                  <div className="bg-white rounded-[32px] p-8 border border-black/[0.03] shadow-[0_20px_60px_rgba(17,105,142,0.05)] hover:-translate-y-1 transition-all duration-500">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#59c36a] font-semibold">
                      STEP 02
                    </span>
                    <h3 className="mt-3 font-serif text-3xl text-[#11698e]">
                      Clinical guidance
                    </h3>
                    <p className="mt-4 text-[#5c6b68] leading-relaxed">
                      When appropriate, referrals and clinical recommendations
                      provide additional context to guide the matching process.
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 3 FEATURED MATCH LAYER */}
              <div className="animate-action relative flex justify-center">
                <div className="absolute inset-0 flex justify-center">
                  <div className="w-[500px] h-[300px] bg-[#59c36a]/5 blur-3xl rounded-full" />
                </div>
                <div className="relative max-w-2xl w-full bg-white rounded-[40px] p-10 md:p-14 border border-[#59c36a]/15 shadow-[0_40px_100px_rgba(17,105,142,0.10)] text-center">
                  <span className="text-xs uppercase tracking-[0.35em] text-[#59c36a] font-semibold">
                    THE MATCH LAYER
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl text-[#11698e] mt-4">
                    Support System
                  </h3>
                  <p className="mt-6 text-[#5c6b68] text-lg leading-relaxed">
                    We assess therapeutic goals, personality fit, readiness,
                    communication preferences, clinical needs, and practical
                    considerations before recommending a therapist.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <span className="px-4 py-2 rounded-full bg-[#11698e]/5 text-[#11698e] text-sm">
                      Readiness
                    </span>
                    <span className="px-4 py-2 rounded-full bg-[#11698e]/5 text-[#11698e] text-sm">
                      Preferences
                    </span>
                    <span className="px-4 py-2 rounded-full bg-[#11698e]/5 text-[#11698e] text-sm">
                      Personality Fit
                    </span>
                    <span className="px-4 py-2 rounded-full bg-[#11698e]/5 text-[#11698e] text-sm">
                      Clinical Context
                    </span>
                  </div>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="animate-action flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-16">
                  <div className="bg-white rounded-[32px] p-8 border border-black/[0.03] shadow-[0_20px_60px_rgba(17,105,142,0.05)] hover:-translate-y-1 transition-all duration-500">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#59c36a] font-semibold">
                      STEP 03
                    </span>
                    <h3 className="mt-3 font-serif text-3xl text-[#11698e]">
                      Therapist recommendation
                    </h3>
                    <p className="mt-4 text-[#5c6b68] leading-relaxed">
                      Rather than endless searching, patients receive carefully
                      considered recommendations aligned with their needs.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-16 justify-center">
                  <div className="h-5 w-5 rounded-full bg-[#59c36a] ring-8 ring-[#59c36a]/10" />
                </div>
                <div className="hidden md:block w-1/2" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS BLOCK */}
      <section ref={stepsRef} className="py-24 md:py-32 w-full border-t border-[#11698e]/5 bg-white/30">
        <div className="w-full max-w-5xl px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a] block mb-3">
              Workflow
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processesList.map((proc) => (
              <div key={proc.step} className="animate-step">
                <span className="font-serif text-3xl font-bold text-[#59c36a]/30 block mb-4">
                  {proc.step}
                </span>
                <h3 className="font-serif text-base font-semibold text-[#11698e] tracking-tight">
                  {proc.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS PARTNERSHIP BLOCK */}
      <section 
        ref={benefitsRef}
        className="relative overflow-hidden py-24 md:py-32 border-t border-[#11698e]/5 bg-white/70 backdrop-blur-xl"
      >
        <div className="w-full max-w-6xl px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a]">
                Why partner with Support System
              </span>
              <h2 className="animate-benefit mt-3 font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight leading-tight">
                Why Doctors Choose Us
              </h2>
              <p className="animate-benefit mt-6 text-base text-[#5c6b68] leading-relaxed font-light">
                We strengthen your clinical judgment, ensuring the therapy layer works in alignment. Right alignment leads to better outcomes.
              </p>
              
              <div className="animate-benefit mt-8 pt-6 border-t border-black/[0.04]">
                <p className="text-xl font-serif italic text-[#11698e] leading-relaxed">
                  &ldquo;We don’t believe in random referrals. We believe in getting it right from the start.&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4 w-full">
              {advantagesList.map((adv) => (
                <div 
                  key={adv}
                  className="animate-benefit flex gap-5 p-5 rounded-2xl bg-white border border-black/[0.02] shadow-sm items-center hover:border-[#11698e]/15 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#59c36a]/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#59c36a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[15px] font-light text-[#3c4a47]">{adv}</span>
                </div>
              ))}
            </div>

          </div>

          <div className="animate-benefit mt-24 text-center w-full max-w-xl mx-auto bg-[#11698e] rounded-3xl p-8 md:p-12 shadow-lg shadow-[#11698e]/10">
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight mb-2">
              Want to work with us?
            </h3>
            <p className="text-white/80 text-sm mb-8 font-light max-w-sm mx-auto leading-relaxed">
              Connect our clinical coordination desk to transition your patients into intentional therapy care channels.
            </p>
            <Link
              href="/contact?regarding=doctor"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#59c36a] hover:bg-[#4cb05c] text-white font-medium rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
            >
              Partner with us
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}