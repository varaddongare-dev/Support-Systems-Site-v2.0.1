"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

const hooksData = [
  {
    text: "Felt confused about which therapist to choose or trust?",
    url: "https://wa.me/919740746668?text=Trust%20me%2C%20we%20understand%20that%20it%20can%20be%20overwhelming%20and%20difficult.%20So%2C%20let%20us%20take%20care%20of%20it%20for%20you.%20Our%20team%20will%20get%20in%20touch%20with%20you%20shortly.%20We%E2%80%99re%20here%20for%20you.",
  },
  {
    text: "Tried therapy, but it didn't feel right?",
    url: "https://wa.me/919740746668?text=We%E2%80%99re%20sorry%20you%20had%20to%20go%20through%20that.%20This%20happens%20more%20often%20than%20you%20think%2C%20that%E2%80%99s%20why%20we%E2%80%99re%20here%20to%20get%20you%20the%20right%20person%20for%20you.%20Our%20team%20will%20get%20in%20touch%20with%20you%20shortly.%20We%E2%80%99re%20here%20for%20you.",
  },
  {
    text: "Not sure if you need therapy, medication, or both?",
    url: "https://wa.me/919740746668?text=It%E2%80%99s%20a%20fair%20confusion%2C%20let%E2%80%99s%20figure%20it%20out%20together.%20Our%20team%20will%20get%20in%20touch%20with%20you%20shortly.%20We%E2%80%99re%20here%20for%20you.",
  },
  {
    text: "Felt the need to talk to somebody about your feelings, judgment-free?",
    url: "https://wa.me/919740746668?text=We%E2%80%99re%20glad%20you%20reached%20out!%20Our%20team%20will%20get%20in%20touch%20with%20you%20shortly.%20We%E2%80%99re%20here%20for%20you.",
  },
  {
    text: "Felt the need to understand myself better?",
    url: "https://wa.me/919740746668?text=We%E2%80%99re%20glad%20you%20reached%20out!%20Our%20team%20will%20get%20in%20touch%20with%20you%20shortly.%20We%E2%80%99re%20here%20for%20you.",
  },
  {
    text: "Or JUST anything else?",
    url: "https://wa.me/919740746668?text=We%E2%80%99re%20glad%20you%20reached%20out!%20Our%20team%20will%20get%20in%20touch%20with%20you%20shortly.%20We%E2%80%99re%20here%20for%20you.",
  },
];

const testimonials = [
  {
    name: "Mohit, Bangalore, 27yrs",
    text: "I struggled to find the right therapist on my own. Support Systems made it easy by matching me with trusted professionals who fit my needs and budget."
  },
  {
    name: "Ananya, Aurangabad, 23yrs",
    text: "The support system has been incredibly helpful, especially as a bridge between me, my therapist, and my psychiatrist. Everything from scheduling to coordination and regular updates is handled smoothly, which made the whole process much easier. What stands out is the constant support. Even outside sessions, I know I have someone to reach out to, which feels very reassuring. I’ve also seen real improvement in my life and have been able to open up more than I expected. Overall, the experience has been smooth and supportive, and I would definitely recommend it to others."
  },
  {
    name: "Arjun, Mumbai, 24yrs",
    text: "Support Systems made the entire process effortless by matching me with the right therapist based on my needs, without me having to figure it out on my own. The sessions have been genuinely helpful, and I’ve felt more relieved and self-aware since starting. Their quick communication, reminders, and smooth handling of scheduling take away all the stress of managing therapy. Having a coordinator in between also removes any awkwardness around rescheduling or admin tasks. Overall, it’s been a very comfortable and positive experience, and I’d highly recommend it to anyone looking for easy and effective access to therapy."
  },
  {
    name: "Karan (Caregiver), Bangalore, 28yrs",
    text: "Support Systems makes it easy to find the right therapist, especially when previous options haven’t worked. Both a friend and a relative of mine were able to connect with professionals who truly suited their needs, even in situations where access and privacy were concerns. A unique benefit is the guidance offered to family and friends, helping us better support our loved ones in everyday life. That’s something you don’t usually get elsewhere. Overall, the experience has been smooth, effective, and better than expected. I would definitely recommend it to others."
  },
  {
    name: "Kriti, Mumbai, 24yrs",
    text: "Support Systems has been incredibly helpful during a difficult phase in my life. They matched me with a therapist who has been genuinely supportive, and I’ve already seen a noticeable improvement. What stands out is how proactive the team is, from helping with therapy to assisting with psychiatry and medication support. Having a coordinator makes the entire process smooth and stress-free. Finding the right therapist on your own can be overwhelming, but this makes it simple, reliable, and tailored to your needs. I would definitely recommend it to others."
  },
  {
    name: "Manish, Thane, 25yrs",
    text: "My experience working with Support Systems has been very smooth and comfortable throughout. The professionalism and support they provide make communication, scheduling, and even last-minute changes much easier to handle without added stress. It creates a healthier dynamic with the counsellor, where you can focus more on the therapeutic process itself and less on the logistical side of things."
  },
  {
    name: "Rohan, Pune, 26yrs",
    text: "I was highly skeptical about therapy after a bad experience with a random platform. Support Systems took the time to understand exactly what went wrong previously and matched me with someone specialized in my specific challenges. The transition was seamless, and the level of personalized care they provide is unparalleled."
  },
  {
    name: "Sneha, Delhi, 29yrs",
    text: "Managing a high-pressure job while dealing with burnout made finding clinical help feel like just another exhausting chore. Having a dedicated coordinator handle the initial filtering, matching, and scheduling was a lifesaver. It completely stripped away the administrative fatigue from mental healthcare."
  },
  {
    name: "Vikram, Hyderabad, 25yrs",
    text: "The integration between therapy and psychiatric care here is what makes it work so well. Instead of me carrying updates back and forth between two different professionals, the internal coordination team keeps everyone on the same page. It feels like a cohesive medical unit working for my recovery."
  },
  {
    name: "Pooja, Chennai, 22yrs",
    text: "As a student on a tight budget, I assumed quality mental healthcare was out of reach. They genuinely respected my financial constraints without compromising on the expertise of the professionals they assigned to me. The transparency regarding pricing and session structures was incredibly refreshing."
  },
  {
    name: "Aditya, Kolkata, 28yrs",
    text: "What I value most is the absolute discretion and professional boundary management. The portal makes it very easy to request adjustments or ask logistical questions without any of that awkward back-and-forth directly with your therapist. It keeps the actual therapy sessions entirely focused on healing."
  }
];

function TestimonialCard({ text, name }: { text: string; name: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLimit = 130;
  const requiresTruncation = text.length > maxLimit;

  const visibleText = requiresTruncation && !isExpanded
    ? `${text.substring(0, maxLimit)}...`
    : text;

  return (
    <figure className="testimonial-card flex-none w-[290px] sm:w-[350px] p-6 bg-white rounded-3xl border border-[#11698e]/10 shadow-[0_10px_30px_rgba(17,105,142,0.02)] flex flex-col justify-between items-center transition-all duration-200">
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        <blockquote className="text-sm sm:text-base text-[#5c6b68] leading-relaxed text-center italic font-normal">
          &ldquo;{visibleText}&rdquo;
        </blockquote>
        {requiresTruncation && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-xs font-bold text-[#11698e] hover:text-[#59c36a] focus:outline-none transition-colors duration-150 tracking-wide uppercase"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
      <figcaption className="mt-5 pt-4 w-full border-t border-slate-100 text-center font-serif text-xs font-semibold tracking-wider text-[#11698e]">
        {name}
      </figcaption>
    </figure>
  );
}

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const existRef = useRef<HTMLDivElement>(null);
  const helpsRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const differentRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
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
      gsap.config({ nullTargetWarn: false });

      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll(".animate-hero-fade");
        if (elements.length > 0) {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
            }
          );
        }
      }

      const driftElements = pageRef.current?.querySelectorAll(".animate-drift");
      if (driftElements && driftElements.length > 0) {
        gsap.set(driftElements, { scale: 1.12, y: 0, rotation: 0 });
        gsap.to(driftElements, {
          y: -35,
          scale: 1.22,
          rotation: 2,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          force3D: true,
        });
      }

      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll(".animate-hook-card, .animate-hook-left, .animate-hook-btn");
        if (elements.length > 0) {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 30 },
            {
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.06,
              ease: "power3.out",
            }
          );
        }
      }

      if (missionRef.current) {
        const elements = missionRef.current.querySelectorAll(".animate-mission-pop");
        if (elements.length > 0) {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 30 },
            {
              scrollTrigger: {
                trigger: missionRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
            }
          );
        }
      }

      if (existRef.current) {
        const elements = existRef.current.querySelectorAll(".animate-exist-pop");
        if (elements.length > 0) {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 30 },
            {
              scrollTrigger: {
                trigger: existRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
            }
          );
        }
      }

      if (helpsRef.current) {
        const elements = helpsRef.current.querySelectorAll(".animate-helps-pop");
        if (elements.length > 0) {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 30 },
            {
              scrollTrigger: {
                trigger: helpsRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.12,
              ease: "power3.out",
            }
          );
        }
      }

      if (worksRef.current) {
        const line = worksRef.current.querySelector(".animate-timeline-line");
        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              transformOrigin: "top center",
              ease: "none",
              scrollTrigger: {
                trigger: worksRef.current,
                start: "top 30%",
                end: "bottom 70%",
                scrub: true,
              },
            }
          );
        }

        const cards = worksRef.current.querySelectorAll(".animate-timeline-card");
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 40 },
            {
              scrollTrigger: {
                trigger: worksRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.12,
              ease: "power3.out",
            }
          );
        }
      }

      if (differentRef.current) {
        const elements = differentRef.current.querySelectorAll(".animate-diff-card");
        if (elements.length > 0) {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 30 },
            {
              scrollTrigger: {
                trigger: differentRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: "power3.out",
            }
          );
        }
      }

      if (testimonialsRef.current) {
        const elements = testimonialsRef.current.querySelectorAll(".animate-testimonials-pop");
        if (elements.length > 0) {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 30 },
            {
              scrollTrigger: {
                trigger: testimonialsRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
            }
          );
        }
      }

      if (foundersRef.current) {
        const elements = foundersRef.current.querySelectorAll(".animate-founder-card, .animate-founder-title");
        if (elements.length > 0) {
          gsap.fromTo(
            elements,
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
      }

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    },
    { scope: pageRef, dependencies: [] }
  );

  return (
    <div ref={pageRef} className="bg-[#faf8f3] w-full relative">
      
<section
  ref={heroRef}
  className="relative overflow-hidden bg-[#faf8f3] min-h-screen flex items-center pt-32 pb-16 lg:py-24"
>
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(89,195,106,0.08),transparent_50%)] hidden lg:block" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(89,195,106,0.08),transparent_60%)] lg:hidden" />
    <svg
      className="absolute inset-0 h-full w-full stroke-[#11698e]/[0.03] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="neural-pattern"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
          x="50%"
          y="-1"
        >
          <path d="M.5 80V.5H80" fill="none" />
          <circle cx="80" cy="80" r="1.5" className="fill-[#11698e]/10" />
          <circle cx="0" cy="0" r="1.5" className="fill-[#11698e]/10" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#neural-pattern)" />
    </svg>
  </div>

  <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      
      <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
        <h1
          className="
            font-serif
            text-[#11698e]
            text-[2.75rem]
            sm:text-[4rem]
            md:text-[4.5rem]
            xl:text-[5.25rem]
            leading-[1.05]
            tracking-[-0.03em]
            max-w-[12ch]
            animate-hero-fade
          "
        >
          Not sure where to start
          <br />
          in your journey?
          <span
            className="
              block
              mt-4
              text-[#59c36a]
              italic
              font-normal
              text-[0.6em]
              tracking-wide
              leading-[1.1]
            "
          >
            Let us help you find the right therapist.
          </span>
        </h1>

        <p
          className="
            mt-6
            max-w-md
            text-base
            sm:text-lg
            leading-relaxed
            text-[#5c6b68]
            animate-hero-fade
          "
        >
          You are not alone, we are here for you.
        </p>

        <div
          className="
            mt-8
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            lg:justify-start
            gap-4
            w-full
            sm:w-auto
            animate-hero-fade
          "
        >
          <Link
            href="/matching"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              overflow-hidden
              rounded-full
              px-8
              py-4
              w-full
              sm:w-auto
              font-semibold
              text-white
              bg-[#11698e]
              border border-[#0f5f80]
              shadow-[0_12px_30px_rgba(17,105,142,0.25)]
              transition-all
              duration-300
              hover:-translate-y-1.5
              hover:shadow-[0_18px_40px_rgba(17,105,142,0.35)]
              active:translate-y-0
            "
          >
            <span
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent
                -translate-x-full
                group-hover:translate-x-full
                transition-transform
                duration-1000
              "
            />
            <span className="relative flex items-center gap-2">
              Start Matching Now
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </span>
          </Link>

          <Link
            href="/approach"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-full
              px-8
              py-4
              w-full
              sm:w-auto
              font-semibold
              text-[#11698e]
              bg-white/90
              border
              border-[#11698e]/20
              backdrop-blur-sm
              shadow-[0_8px_24px_rgba(17,105,142,0.08)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white
              hover:border-[#11698e]/35
              hover:shadow-[0_12px_30px_rgba(17,105,142,0.15)]
            "
          >
            <span
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                via-[#11698e]/5
                to-transparent
                -translate-x-full
                group-hover:translate-x-full
                transition-transform
                duration-1000
              "
            />
            <span className="relative">How It Works</span>
            <span className="relative transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
        <div className="mt-10 h-px w-32 bg-gradient-to-r from-[#11698e]/20 via-[#11698e]/5 to-transparent" />

        <div
          className="
            mt-8
            flex
            items-center
            gap-3
            justify-center
            lg:justify-start
            max-w-sm
            text-sm
            text-[#5c6b68]
          "
        >
          <div className="flex-shrink-0">
            <div className="w-6 h-6 rounded-full bg-[#59c36a]/15 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#59c36a"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
          </div>
          <span>
            Your information remains private, confidential and secure.
          </span>
        </div>

        <div
          className="
            mt-12
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
            w-full
            max-w-2xl
            mx-auto
          "
        >
          {[
            { value: "100%", label: "Confidential" },
            { value: "Verified", label: "Licensed" },
            { value: "24/7", label: "Support Available" },
          ].map((item) => (
            <div
              key={item.label}
              className="
                flex
                flex-col
                items-center
                justify-center
                text-center
                py-5
                px-4
                rounded-2xl
                bg-white/70
                backdrop-blur-sm
                border
                border-[#11698e]/10
                shadow-[0_8px_30px_rgba(17,105,142,0.06)]
                hover:border-[#59c36a]/20
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <p className="text-2xl sm:text-3xl font-semibold text-[#11698e] tracking-tight">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-[#5c6b68]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end animate-hero-fade -mt-8 sm:-mt-12 lg:-mt-16">
        <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-full aspect-square opacity-85 hover:opacity-100 transition-opacity duration-500">
          <Image
            src="/assets/background.png"
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 40vw"
            className="object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      <div className="relative z-20 bg-[#faf8f3]">
        
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen py-24 flex items-center border-t border-[#11698e]/5 bg-[#fcfdfe]"
    >
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#11698e]/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#59c36a]/[0.03] blur-3xl pointer-events-none" />

      <div className="container relative z-10 max-w-6xl px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 items-center">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left animate-hook-left">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a] mb-3">
              Tell us more...
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#11698e] leading-[0.95] tracking-tight">
              Have you
              <br />
              ever?
            </h2>

            <div className="relative w-full max-w-[340px] aspect-square mt-6 float-image">
              <Image
                src="/assets/have-you-ever.png"
                alt="Mental health journey reflection graphics"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="relative flex flex-col gap-5">
            <div className="absolute left-11 top-8 bottom-32 w-px bg-gradient-to-b from-[#59c36a]/20 via-[#11698e]/15 to-transparent hidden lg:block" />

            {hooksData.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  overflow-hidden
                  flex
                  items-center
                  justify-between
                  w-full
                  rounded-2xl
                  border
                  border-[#11698e]/8
                  bg-white/70
                  backdrop-blur-sm
                  px-5
                  sm:px-6
                  py-5
                  sm:py-6
                  shadow-[0_4px_20px_rgba(17,105,142,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:scale-[1.01]
                  hover:border-[#11698e]/20
                  hover:shadow-[0_12px_40px_rgba(17,105,142,0.06)]
                "
              >
                <div className="absolute left-0 top-0 h-full w-0 bg-[#59c36a] transition-all duration-300 group-hover:w-1" />

                <div className="flex items-start gap-5 relative z-10 flex-1 pr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#11698e]/5 text-[#11698e] font-semibold text-sm shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="text-[17px] leading-relaxed text-[#37474F] pt-1.5 transition-colors duration-300 group-hover:text-[#11698e]">
                    {item.text}
                  </span>
                </div>

                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f6f8f8] shrink-0 transition-all duration-300 group-hover:bg-[#59c36a]/10 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#59c36a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}

            <Link
              href="/contact"
              className="
                group
                relative
                overflow-hidden
                flex
                items-center
                justify-between
                w-full
                rounded-[28px]
                bg-gradient-to-r
                from-[#11698e]
                to-[#16779f]
                border
                border-white/10
                px-7
                py-7
                text-white
                shadow-[0_10px_30px_rgba(17,105,142,0.15)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:scale-[1.01]
                hover:shadow-[0_18px_50px_rgba(17,105,142,0.22)]
              "
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <span className="relative z-10 font-serif text-2xl tracking-wide">
                Just reach out
              </span>

              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-1">
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
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  


        <section className="relative overflow-hidden py-28 border-t border-[#11698e]/5">
  <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#11698e]/[0.03] blur-3xl pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#59c36a]/[0.04] blur-3xl pointer-events-none" />

  <div className="relative z-10 max-w-6xl mx-auto px-6">
    
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
      
      <div>
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a]">
          How We Help
        </span>

        <h2
          className="
            mt-4
            font-serif
            text-4xl
            sm:text-5xl
            md:text-6xl
            text-[#11698e]
            leading-[0.95]
            tracking-tight
          "
        >
          What do we do?
        </h2>
      </div>

      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-[#37474F]">
          You don’t have to manage everything alone. We’re with you
          at every step of the way.
        </p>

        <p className="text-lg leading-relaxed text-[#37474F]">
          From understanding your concerns to helping you begin
          therapy, scheduling sessions, and ensuring you feel
          supported, we make sure the process doesn’t feel
          overwhelming or disconnected.
        </p>

        <div
          className="
            border-l-2
            border-[#59c36a]
            pl-5
          "
        >
          <p className="font-medium text-[#11698e] text-xl leading-relaxed">
            We don’t just refer you to a therapist.
            We stay with you through your journey.
          </p>
        </div>
      </div>
    </div>

    <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
  {[
    {
      number: "01",
      title: "Understand",
      image: "/assets/understand.jpg",
      color: "#11698e",
      text: "We take the time to understand your concerns and what support feels right for you.",
    },
    {
      number: "02",
      title: "Connect",
      image: "/assets/connect.jpg",
      color: "#59c36a",
      text: "We help match you with a therapist and guide you through the first steps of beginning therapy.",
    },
    {
      number: "03",
      title: "Support",
      image: "/assets/support.jpg",
      color: "#11698e",
      text: "We continue supporting you throughout the process so you never feel alone or disconnected.",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-[#11698e]/10
        bg-white/80
        backdrop-blur-sm
        shadow-[0_8px_24px_rgba(17,105,142,0.05)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_15px_40px_rgba(17,105,142,0.08)]
        h-full
      "
    >
      {/* Image */}
      <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 lg:p-8">
        <div
          className="
            flex
            items-center
            justify-center
            w-10
            h-10
            sm:w-12
            sm:h-12
            rounded-full
            font-semibold
            text-sm
            sm:text-base
          "
          style={{
            backgroundColor: `${item.color}15`,
            color: item.color,
          }}
        >
          {item.number}
        </div>

        <h3
          className="
            mt-4
            sm:mt-6
            text-lg
            sm:text-xl
            font-medium
            text-[#11698e]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-2
            sm:mt-3
            text-sm
            sm:text-base
            leading-relaxed
            text-[#37474F]
          "
        >
          {item.text}
        </p>
      </div>
    </div>
  ))}
</div>
  </div>
</section>

        <section className="relative overflow-hidden py-28 border-t border-[#11698e]/5">
  <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#11698e]/[0.03] blur-3xl pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#59c36a]/[0.03] blur-3xl pointer-events-none" />

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    <div className="grid lg:grid-cols-[360px_1fr] gap-16 items-start">

      <div className="lg:sticky lg:top-32">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#59c36a]">
          Our Purpose
        </span>

        <h2
          className="
            mt-4
            font-serif
            text-4xl
            sm:text-5xl
            md:text-6xl
            leading-[0.95]
            tracking-tight
            text-[#11698e]
          "
        >
          Why we exist?
        </h2>

        <div
          className="
            mt-10
            w-20
            h-[2px]
            bg-[#59c36a]
          "
        />
      </div>

      <div
        className="
          rounded-[32px]
          border
          border-[#11698e]/10
          bg-white/75
          backdrop-blur-sm
          p-8
          md:p-10
          shadow-[0_15px_50px_rgba(17,105,142,0.06)]
        "
      >
        <div className="space-y-7 text-[18px] leading-relaxed text-[#37474F]">

          <p>
            When something feels off physically, you see a GP.
            They listen, assess, and point you to exactly the right specialist.
            It’s clear. It’s structured. You’re not left guessing.
          </p>

          <p>
            Mental health should work the same way but right now, it doesn’t.
          </p>

          <p>
            You’re searching, scrolling, trying to figure out where to even begin.
          </p>

          <p className="text-[#11698e] font-medium">
            That’s where we come in.
          </p>

          <div
            className="
              rounded-2xl
              bg-[#59c36a]/8
              border
              border-[#59c36a]/15
              px-6
              py-5
            "
          >
            <p className="font-serif text-2xl text-[#11698e]">
              Think of us as your GP for mental health!
            </p>
          </div>

          <p>
            We listen first, then guide you to the right support,
            whether that’s therapy, psychiatry, neuropsychology,
            or something else entirely.
          </p>

          <p>
            Because finding help shouldn’t feel like another problem to solve.
          </p>

        </div>
      </div>
    </div>

    <div
      className="
        mt-12
        rounded-[28px]
        border
        border-[#11698e]/10
        bg-[#11698e]
        px-8
        py-10
        text-center
      "
    >
      <p
        className="
          font-serif
          text-2xl
          md:text-3xl
          text-white
          leading-relaxed
        "
      >
        You deserve a clear starting point.
        <br />
        We are exactly that.
      </p>
    </div>

  </div>
</section>

        <section className="relative overflow-hidden py-24 border-t border-[#11698e]/5">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#11698e]/[0.03] blur-3xl pointer-events-none" />

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    <div
      className="
        overflow-hidden
        rounded-[36px]
        border
        border-[#11698e]/10
        bg-white/80
        backdrop-blur-sm
        shadow-[0_20px_60px_rgba(17,105,142,0.06)]
      "
    >
      <div className="grid lg:grid-cols-[380px_1fr]">

        <div
          className="
            relative
            flex
            flex-col
            justify-center
            p-8
            lg:p-12
            bg-[#11698e]
            text-white
          "
        >
          <span className="text-xs tracking-[0.25em] uppercase text-white/70">
            Clinical Guidance
          </span>

          <h2
            className="
              mt-4
              font-serif
              text-4xl
              md:text-5xl
              leading-[0.95]
            "
          >
            How Support
            <br />
            System helps
          </h2>

          <div className="mt-8 w-16 h-[2px] bg-[#59c36a]" />

          <div
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              w-16
              h-16
              rounded-2xl
              bg-white/10
              backdrop-blur-sm
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20" />
              <path d="M2 12h20" />
            </svg>
          </div>
        </div>

        <div className="p-8 md:p-12 lg:p-14">

          <p
            className="
              text-lg
              md:text-xl
              leading-relaxed
              text-[#37474F]
            "
          >
            We act as a structured clinical support layer between
            you and therapy. Before therapy begins, we assess
            patient readiness, expectations, context, and
            preferences, ensuring that every referral is
            intentional, not uncertain.
          </p>

          <div
            className="
              mt-10
              rounded-3xl
              border
              border-[#59c36a]/15
              bg-[#59c36a]/5
              p-8
            "
          >
            <span
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-[#59c36a]
                font-semibold
              "
            >
              Our Philosophy
            </span>

            <h3
              className="
                mt-3
                font-serif
                text-3xl
                md:text-4xl
                text-[#11698e]
                leading-tight
              "
            >
              Intentional Care
            </h3>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>

        <section 
          ref={worksRef}
          className="py-32 flex flex-col justify-center border-t border-[#11698e]/5"
        >
          <div className="container max-w-5xl px-6 mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight">
                How it works
              </h2>
            </div>

            <div className="relative overflow-visible">
              <div className="animate-timeline-line absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#11698e]/20 -translate-x-1/2 z-0 origin-top hidden md:block" />

              <div className="flex flex-col gap-12 md:gap-20 relative z-10">
                
                <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
                  <div className="animate-timeline-card md:pr-12 md:text-right">
                    <div className="inline-block bg-white p-8 rounded-3xl border border-[#11698e]/10 shadow-[0_10px_30px_rgba(17,105,142,0.02)] max-w-md">
                      <span className="text-xs font-bold tracking-wider uppercase text-[#59c36a]">Step 1</span>
                      <h3 className="font-serif text-xl text-[#11698e] mt-2 mb-3">Understanding You</h3>
                      <p className="text-sm text-[#5c6b68] leading-relaxed">
                        We begin with an in-depth consultation to understand your concerns, what you&apos;re looking for from therapy.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-start pl-0 absolute left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full border-4 border-[#faf8f3] bg-[#59c36a] shadow-[0_0_0_2px_rgba(17,105,142,0.2)]" />
                  </div>
                  <div className="hidden md:block" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
                  <div className="hidden md:block" />
                  <div className="hidden md:flex justify-start pl-0 absolute left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full border-4 border-[#faf8f3] bg-[#11698e] shadow-[0_0_0_2px_rgba(17,105,142,0.2)]" />
                  </div>
                  <div className="animate-timeline-card md:pl-12 order-1 md:order-2">
                    <div className="inline-block bg-white p-8 rounded-3xl border border-[#11698e]/10 shadow-[0_10px_30px_rgba(17,105,142,0.02)] max-w-md">
                      <span className="text-xs font-bold tracking-wider uppercase text-[#59c36a]">Step 2</span>
                      <h3 className="font-serif text-xl text-[#11698e] mt-2 mb-3">Clarity & Direction</h3>
                      <p className="text-sm text-[#5c6b68] leading-relaxed">
                        Based on this, we identify what kind of support you need and help you with your therapy goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
                  <div className="animate-timeline-card md:pr-12 md:text-right">
                    <div className="inline-block bg-white p-8 rounded-3xl border border-[#11698e]/10 shadow-[0_10px_30px_rgba(17,105,142,0.02)] max-w-md">
                      <span className="text-xs font-bold tracking-wider uppercase text-[#59c36a]">Step 3</span>
                      <h3 className="font-serif text-xl text-[#11698e] mt-2 mb-3">Finding the Right Fit</h3>
                      <p className="text-sm text-[#5c6b68] leading-relaxed">
                        We carefully align you with a therapist who fits you, keeping all your needs in mind.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-start pl-0 absolute left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full border-4 border-[#faf8f3] bg-[#1995ad] shadow-[0_0_0_2px_rgba(17,105,142,0.2)]" />
                  </div>
                  <div className="hidden md:block" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
                  <div className="hidden md:block" />
                  <div className="hidden md:flex justify-start pl-0 absolute left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full border-4 border-[#faf8f3] bg-[#59c36a] shadow-[0_0_0_2px_rgba(17,105,142,0.2)]" />
                  </div>
                  <div className="animate-timeline-card md:pl-12 order-1 md:order-2">
                    <div className="inline-block bg-white p-8 rounded-3xl border border-[#11698e]/10 shadow-[0_10px_30px_rgba(17,105,142,0.02)] max-w-md">
                      <span className="text-xs font-bold tracking-wider uppercase text-[#59c36a]">Step 4</span>
                      <h3 className="font-serif text-xl text-[#11698e] mt-2 mb-3">Ongoing Support</h3>
                      <p className="text-sm text-[#5c6b68] leading-relaxed">
                        We are with you in the entire journey, making sure you feel supported throughout.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

       <section
  ref={differentRef}
  className="py-20 md:py-32 border-t border-[#11698e]/5 bg-white"
>
  <div className="container max-w-6xl mx-auto px-5 sm:px-6">
    
    {/* Heading */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#11698e] tracking-tight">
        What makes us different?
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {[
        {
          title: "A Holistic Approach",
          text: "We bridge the gap between psychiatrists and psychologists so your care is aligned, not fragmented.",
          image: "/assets/a1.jpg",
        },
        {
          title: "Getting It Right From the Start",
          text: "Instead of trial and error, we focus on finding the right fit early with expert guidance.",
          image: "/assets/a2.jpg",
        },
        {
          title: "Not Limited by Location or Options",
          text: "We work with a wide network of therapists, giving you more relevant and flexible options.",
          image: "/assets/a3.jpg",
        },
        {
          title: "Care That Fits You",
          text: "We consider affordability, comfort, language, and preferences and make sure you are well aligned.",
          image: "/assets/a4.jpg",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
            group
            bg-white
            border
            border-[#11698e]/10
            rounded-[28px]
            overflow-hidden
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#11698e]/20
            hover:shadow-[0_20px_50px_rgba(17,105,142,0.08)]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-[220px_1fr]
              min-h-[220px]
            "
          >
            {/* Image */}
            <div className="relative h-56 sm:h-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 220px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <h3 className="font-serif text-xl sm:text-2xl text-[#11698e] mb-4 leading-tight">
                {item.title}
              </h3>

              <p className="text-[#5c6b68] text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

        <section
          ref={testimonialsRef}
          className="py-20 md:py-28 flex flex-col justify-center border-t border-[#11698e]/5 overflow-hidden"
        >
          <div className="container max-w-5xl px-6 mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="animate-testimonials-pop text-xs font-semibold tracking-[0.2em] uppercase text-[#59c36a]">
                What people say
              </span>
              <h2 className="animate-testimonials-pop mt-3 font-serif text-3xl md:text-5xl text-[#11698e] tracking-tight px-4">
                Guided support that feels human
              </h2>
            </div>
          </div>

          <div className="animate-testimonials-pop testimonial-carousel w-full overflow-x-auto md:overflow-visible px-4">
            <div className="testimonial-track flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible max-w-full py-4 snap-x snap-mandatory md:snap-none no-scrollbar">
              {[...testimonials, ...testimonials].map((item, index) => (
                <TestimonialCard
                  key={`${item.name}-${index}`}
                  text={item.text}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </section>

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
              <h2 className="font-serif text-4xl md:text-5xl text-[#11698e] tracking-tight">
                The Founders
              </h2>
            </div>

            <div className="flex flex-col gap-10 w-full max-w-4xl mx-auto">
              
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
                  grid
                  grid-cols-1
                  md:grid-cols-12
                  gap-8
                  items-center
                "
              >
                <div className="md:col-span-8 flex flex-col justify-center text-left">
                  <h3 className="font-serif text-3xl text-[#11698e] tracking-tight">
                    Hrutuja Dongare
                  </h3>
                  <p className="text-sm font-semibold tracking-wide text-[#59c36a] mt-1.5 mb-6 uppercase">
                    Neuropsychologist, Founder & CEO
                  </p>
                  <p className="text-[15px] leading-relaxed text-[#5c6b68] mb-8 font-light">
                    Hrutuja founded Support Systems in December 2025 and serves as its CEO, focusing on the client care journey and ensuring every individual feels seen, heard, and supported. With a background in clinical neuropsychology, she brings an evidence-based approach to therapeutic care and built the platform to deliver structured, integrated mental health support.
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
                <div className="md:col-span-4 flex justify-center md:justify-end relative w-full h-[280px] md:h-[320px] self-end mt-4 md:mt-0">
                  <Image
                    src="/assets/hd.png"
                    alt="Hrutuja Dongare - Founder & CEO"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain object-bottom select-none pointer-events-none"
                  />
                </div>
              </div>

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
                  grid
                  grid-cols-1
                  md:grid-cols-12
                  gap-8
                  items-center
                "
              >
                <div className="md:col-span-8 flex flex-col justify-center text-left">
                  <h3 className="font-serif text-3xl text-[#11698e] tracking-tight">
                    Archee Gupte
                  </h3>
                  <p className="text-sm font-semibold tracking-wide text-[#59c36a] mt-1.5 mb-6 uppercase">
                    Neuropsychologist, Co-Founder & COO
                  </p>
                  <p className="text-[15px] leading-relaxed text-[#5c6b68] mb-8 font-light">
                    Archee Co-founded Support Systems and is the COO who brings a research-driven perspective to Support Systems. She leads the systems that sustain the care journey. She ensures that every client&apos;s path from onboarding to therapy is structured, coordinated, and consistent, translating the platform&apos;s clinical vision into reliable day-to-day care.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 bg-[#f6f8f8] text-[#11698e] text-xs font-medium rounded-full border border-black/[0.03]">
                      Sensory Research
                    </span>
                    <span className="px-4 py-1.5 bg-[#f6f8f8] text-[#11698e] text-xs font-medium rounded-full border border-black/[0.03]">
                      Neuropsychology
                    </span>
                    <span className="px-4 py-1.5 bg-[#f6f8f8] text-[#11698e] text-xs font-medium rounded-full border border-black/[0.03]">
                      Patient Care
                    </span>
                  </div>
                </div>
                <div className="md:col-span-4 flex justify-center md:justify-end relative w-full h-[280px] md:h-[320px] self-end mt-4 md:mt-0">
                  <Image
                    src="/assets/IMG_7072.png"
                    alt="Archee Gupte - Co-Founder & COO"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain object-bottom select-none pointer-events-none"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}