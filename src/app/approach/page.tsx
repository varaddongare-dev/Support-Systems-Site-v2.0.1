"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

const approachSteps = [
  {
    phase: "Phase 01",
    title: "Deep Listening & Discovery",
    tagline: "Understanding the human behind the symptoms.",
    description: "We start with an initial clinical assessment that goes beyond simple diagnostic checklists. We sit down to understand your emotional context, financial parameters, language comforts, and past clinical experiences.",
    accent: "#59c36a"
  },
  {
    phase: "Phase 02",
    title: "Precision Matching Matrix",
    tagline: "Intentional alignment, not random directories.",
    description: "Instead of letting you filter through thousands of unverified portfolios, our clinical coordinators manually analyze your data points against our trusted network of psychologists and psychiatrists to find the right therapeutic fit.",
    accent: "#1995ad"
  },
  {
    phase: "Phase 03",
    title: "Structured Onboarding",
    tagline: "Setting up a safe runway.",
    description: "Before your first formal session begins, we prep both you and your matched specialist with explicit alignment guidelines. We bridge your expectations so that the first hour feels productive, safe, and collaborative.",
    accent: "#11698e"
  },
  {
    phase: "Phase 04",
    title: "Continuous Care Management",
    tagline: "We stay with you throughout.",
    description: "A clinical path isn't fixed; it evolves. We provide ongoing touchpoints post-session to monitor your comfort, review your therapy goals, and manage your treatment continuity dynamically over time.",
    accent: "#59c36a"
  }
];

const networkFeatures = [
  {
    title: "Professionally vetted",
    description: "Every therapist undergoes thorough vetting before acceptance into our network."
  },
  {
    title: "Verified qualifications",
    description: "Degrees, registrations, and ethical standing confirmed independently."
  },
  {
    title: "Diverse expertise",
    description: "Experience across a wide range of psychiatric presentations and therapy modalities."
  },
  {
    title: "Mild to complex cases",
    description: "Our network covers the full clinical spectrum — from everyday support to complex presentations."
  }
];

export default function ApproachPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);
  const foundersRef = useRef<HTMLDivElement>(null);

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
          heroRef.current.querySelectorAll(".animate-text"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power4.out" }
        );
        gsap.fromTo(
          heroRef.current.querySelector(".animate-graphic"),
          { opacity: 0, scale: 0.95, x: 20 },
          { opacity: 1, scale: 1, x: 0, duration: 0.9, ease: "power3.out" }
        );
      }

      if (philosophyRef.current) {
        gsap.fromTo(
          philosophyRef.current.querySelectorAll(".animate-philosophy"),
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: philosophyRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          }
        );
      }

      if (stepsRef.current) {
        const structuralCards = stepsRef.current.querySelectorAll(".animate-approach-card");
        structuralCards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            }
          );
        });
      }

      if (networkRef.current) {
        gsap.fromTo(
          networkRef.current.querySelectorAll(".animate-network"),
          { opacity: 0, y: 35 },
          {
            scrollTrigger: {
              trigger: networkRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          }
        );
      }

      if (foundersRef.current) {
        gsap.fromTo(
          foundersRef.current.querySelectorAll(".animate-founder-card, .animate-founder-title"),
          { opacity: 0, y: 40 },
          {
            scrollTrigger: {
              trigger: foundersRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          }
        );
      }

      ScrollTrigger.refresh();
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div ref={containerRef} className="bg-[#faf8f3] w-full min-h-screen relative">
      
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-[#faf8f3] flex items-center justify-center overflow-hidden px-6"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#11698e]/[0.03] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="animate-text text-xs font-semibold tracking-[0.3em] uppercase text-[#59c36a] block mb-6">
            Our Core Philosophy
          </span>

          <h1 className="animate-text font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-[#11698e]">
            The right match
            <br />
            <span className="italic font-normal text-[#59c36a]">
              changes everything.
            </span>
          </h1>

          <div className="animate-text mt-10 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-[#5c6b68] leading-relaxed font-light">
              Support Systems was built on a single insight — most therapy
              fails not because of the person or the treatment, but because
              of the match. We exist to fix that.
            </p>
          </div>

          <div className="animate-text mt-12 flex justify-center">
            <Link
              href="/matching"
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                px-8
                py-4
                font-medium
                text-white
                bg-gradient-to-r
                from-[#11698e]
                to-[#0f5a7a]
                shadow-[0_10px_30px_rgba(17,105,142,0.25)]
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:shadow-[0_15px_40px_rgba(17,105,142,0.35)]
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-transform
                  duration-1000
                  group-hover:translate-x-full
                "
              />

              <span className="relative z-10">Find Your Match</span>

              <span
                className="
                  relative
                  z-10
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:bg-white/20
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section 
        ref={philosophyRef}
        className="relative overflow-hidden py-24 md:py-32 flex items-center justify-center border-t border-[#11698e]/5"
      >
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#11698e]/[0.03] blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#59c36a]/[0.04] blur-3xl" />
        </div>

        <div className="w-full max-w-6xl px-6 mx-auto relative z-10 flex items-center justify-center">
          <div className="relative w-full overflow-hidden rounded-[40px] bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_20px_80px_rgba(17,105,142,0.06)] p-8 md:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
              
              <div className="lg:col-span-5">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a]">
                  Our Philosophy
                </span>

                <h2 className="animate-philosophy mt-4 font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight leading-[1.1]">
                  Intentional referrals. <br />
                  Better fit. Better outcomes.
                </h2>

                <div className="animate-philosophy mt-10 flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-[#59c36a]" />
                  <span className="text-sm font-medium text-[#11698e]">
                    Care Over Convenience
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6">
                
                <div className="animate-philosophy p-8 rounded-3xl bg-white border border-[#11698e]/5 shadow-[0_15px_40px_rgba(17,105,142,0.03)]">
                  <p className="text-xl md:text-2xl font-serif italic text-[#11698e] leading-relaxed">
                    &ldquo;Most treatment plans do not fail because of the diagnosis. They fail because consistent, supportive therapy is missing.&rdquo;
                  </p>
                  <p className="text-xs font-semibold tracking-wider text-[#59c36a] uppercase mt-4 block">
                    — The founding insight behind Support Systems
                  </p>
                </div>

                <div className="animate-philosophy flex gap-5 p-6 rounded-3xl bg-white/50 border border-black/[0.02]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#59c36a]/10 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-[#59c36a]" />
                  </div>
                  <div>
                    <p className="text-base text-[#5c6b68] leading-relaxed font-light">
                      We screen before we refer. Before therapy begins, we assess a patient&apos;s readiness, expectations, comfort level, and context — so the match is made with care, not convenience.
                    </p>
                  </div>
                </div>

                <div className="animate-philosophy flex gap-5 p-6 rounded-3xl bg-white/50 border border-black/[0.02]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#11698e]/10 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-[#11698e]" />
                  </div>
                  <div>
                    <p className="text-base text-[#5c6b68] leading-relaxed font-light">
                      Better alignment leads to better engagement, which leads to better outcomes. Therapy supports your treatment plan — rather than working against it.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY STEPS SECTION */}
      <section ref={stepsRef} className="py-24 md:py-32 w-full">
        <div className="w-full max-w-5xl px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a] block mb-3">
              The Framework
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight">
              Our Methodology
            </h2>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {approachSteps.map((step) => (
              <div
                key={step.phase}
                className="animate-approach-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white border border-black/[0.03] rounded-[32px] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(17,105,142,0.04)]"
              >
                <div className="lg:col-span-3 flex lg:flex-col justify-between items-baseline lg:items-start border-b lg:border-b-0 lg:border-r border-black/[0.05] pb-4 lg:pb-0 lg:pr-6">
                  <span 
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.phase}
                  </span>
                </div>

                <div className="lg:col-span-9 flex flex-col">
                  <h2 className="font-serif text-2xl md:text-3xl text-[#11698e] tracking-tight">
                    {step.title}
                  </h2>
                  <p 
                    className="text-sm font-semibold mt-1 mb-4 italic"
                    style={{ color: step.accent }}
                  >
                    {step.tagline}
                  </p>
                  <p className="text-base text-[#5c6b68] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE NETWORK SECTION */}
      <section 
        ref={networkRef}
        className="relative overflow-hidden py-24 md:py-32 flex items-center justify-center border-t border-[#11698e]/5"
      >
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#59c36a]/[0.02] blur-3xl" />
        </div>

        <div className="w-full max-w-6xl px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            
            <div className="lg:col-span-5 flex flex-col">
              <span className="animate-network text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a] block mb-3">
                The Network
              </span>
              <h2 className="animate-network font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight leading-tight">
                Reliable, vetted, trusted.
              </h2>
              <p className="animate-network text-base text-[#5c6b68] leading-relaxed font-light mt-6 max-w-sm">
                Every therapist in our network is carefully verified. No hoping a referral works — we make sure it does.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {networkFeatures.map((feat) => (
                <div 
                  key={feat.title}
                  className="animate-network bg-white p-8 rounded-3xl border border-black/[0.03] shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_45px_rgba(17,105,142,0.03)] transition-all duration-300"
                >
                  <h3 className="font-serif text-xl text-[#11698e] tracking-tight mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[#5c6b68] leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section
        ref={foundersRef}
        className="relative overflow-hidden min-h-screen py-24 flex items-center justify-center border-t border-[#11698e]/5"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[#11698e]/[0.03] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-[#59c36a]/[0.03] blur-3xl" />
        </div>

        <div className="w-full max-w-5xl px-6 mx-auto relative z-10 flex flex-col items-center">
          <div className="text-center mb-16 animate-founder-title">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a] block mb-3">
              The Founders
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight">
              Built by people who understand both the brain and the person.
            </h2>
          </div>

          <div className="flex flex-col gap-10 w-full max-w-5xl mx-auto px-4">
            
            {/* Founder 1: Hrutuja Dongare */}
            <div
              className="
                animate-founder-card
                relative
                w-full
                overflow-hidden
                rounded-[40px]
                bg-white
                border
                border-black/[0.04]
                shadow-[0_15px_50px_rgba(0,0,0,0.02)]
                p-8
                md:p-12
                pb-0
                md:pb-0
                grid
                grid-cols-1
                md:grid-cols-12
                gap-8
                items-end
              "
            >
              {/* Text Section (6 Cols) */}
              <div className="md:col-span-6 flex flex-col justify-center text-left pb-8 md:pb-12">
                <h3 className="font-serif text-3xl md:text-4xl text-[#11698e] tracking-tight">
                  Hrutuja Dongare
                </h3>
                <p className="text-sm font-semibold tracking-wide text-[#59c36a] mt-1.5 mb-6 uppercase">
                  Founder &bull; Neuropsychologist
                </p>
                <p className="text-[15px] leading-relaxed text-[#5c6b68] mb-8 font-light">
                  Hrutuja founded Support Systems after years of clinical work in neuropsychology, where she observed firsthand how often patients received the wrong therapeutic match — not for lack of options, but for lack of structured guidance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-[#f6f8f8] text-[#11698e] text-xs font-medium rounded-full border border-black/[0.03]">
                    Neuro-Rehab & Assessment
                  </span>
                  <span className="px-4 py-1.5 bg-[#f6f8f8] text-[#11698e] text-xs font-medium rounded-full border border-black/[0.03]">
                    rTMS
                  </span>
                  <span className="px-4 py-1.5 bg-[#f6f8f8] text-[#11698e] text-xs font-medium rounded-full border border-black/[0.03]">
                    Biofeedback
                  </span>
                </div>
              </div>
              
              {/* Force Container Height & Zoom via Inline CSS */}
              <div 
                className="md:col-span-6 flex justify-center md:justify-end relative w-full self-end overflow-visible"
                style={{ height: "480px" }}
              >
                <Image
                  src="/assets/hd.png"
                  alt="Hrutuja Dongare - Founder & Neuropsychologist"
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-contain object-bottom select-none pointer-events-none origin-bottom"
                  style={{ transform: "scale(1.55)" }}
                  priority
                />
              </div>
            </div>

            {/* Founder 2: Archee Gupte */}
            <div
              className="
                animate-founder-card
                relative
                w-full
                overflow-hidden
                rounded-[40px]
                bg-white
                border
                border-black/[0.04]
                shadow-[0_15px_50px_rgba(0,0,0,0.02)]
                p-8
                md:p-12
                pb-0
                md:pb-0
                grid
                grid-cols-1
                md:grid-cols-12
                gap-8
                items-end
              "
            >
              {/* Text Section (6 Cols) */}
              <div className="md:col-span-6 flex flex-col justify-center text-left pb-8 md:pb-12">
                <h3 className="font-serif text-3xl md:text-4xl text-[#11698e] tracking-tight">
                  Archee Gupte
                </h3>
                <p className="text-sm font-semibold tracking-wide text-[#59c36a] mt-1.5 mb-6 uppercase">
                  Co-Founder &bull; Neuropsychologist & Researcher
                </p>
                <p className="text-[15px] leading-relaxed text-[#5c6b68] mb-8 font-light">
                  Archee brings a research lens to everything Support Systems does — ensuring that the matching methodology is grounded in clinical evidence and continuously refined based outcomes and patient feedback.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-[#f6f8f8] text-[#11698e] text-xs font-medium rounded-full border border-black/[0.03]">
                    Sensory Research & Analysis
                  </span>
                  <span className="px-4 py-1.5 bg-[#f6f8f8] text-[#11698e] text-xs font-medium rounded-full border border-black/[0.03]">
                    Neuropsychology
                  </span>
                </div>
              </div>

              {/* Force Container Height & Zoom via Inline CSS */}
              <div 
                className="md:col-span-6 flex justify-center md:justify-end relative w-full self-end overflow-visible"
                style={{ height: "480px" }}
              >
                <Image
                  src="/assets/ag.PNG"
                  alt="Archee Gupte - Co-Founder & Neuropsychologist"
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-contain object-bottom select-none pointer-events-none origin-bottom"
                  style={{ transform: "scale(1.55)" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}