"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Our Approach", path: "/approach" },
  { label: "Blog", path: "/blog" },
  { label: "Events", path: "/events" },
  { label: "Professionals", path: "/professionals" },
  { label: "Doctors", path: "/doctors" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(".menu-overlay", {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
        ease: "power2.out",
      })
      .from(
        ".menu-panel",
        {
          y: -20,
          opacity: 0,
          scale: 0.96,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.1"
      )
      .from(
        ".menu-link",
        {
          opacity: 0,
          y: 20,
          stagger: 0.06,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .from(
        ".menu-cta",
        {
          opacity: 0,
          y: 15,
          duration: 0.3,
        },
        "-=0.25"
      );
  }, { scope: containerRef });

  useEffect(() => {
    if (!tl.current) return;

    if (menuOpen) {
      tl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.reverse();
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef}>
      <nav className="fixed top-4 inset-x-0 z-50 px-4 flex justify-center w-full">
        <div className={`w-full max-w-6xl h-16 rounded-2xl transition-all duration-500 box-border ${scrolled ? "bg-white/65 backdrop-blur-2xl border border-white/50 shadow-[0_8px_40px_rgba(0,0,0,0.08)]" : "bg-white/40 backdrop-blur-xl border border-white/30"}`}>
          <div className="h-full px-4 sm:px-5 flex items-center justify-between gap-2">
            <Link href="/" className="flex items-center group max-w-[60%]">
              <div className="relative h-11 w-40 sm:w-48 flex items-center">
                <Image
                  src="/assets/logo.png"
                  alt="Support Systems"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative text-sm text-[#5c6b68] hover:text-[#11698e] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#11698e] after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/matching"
                className="px-5 py-2.5 rounded-full bg-[#11698e] text-white text-sm font-medium shadow-[0_10px_25px_rgba(17,105,142,0.18)] hover:scale-[1.03] transition-all"
              >
                Book Consultation
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden h-10 w-10 flex-shrink-0 rounded-xl bg-white/50 backdrop-blur-md border border-white/40 flex items-center justify-center"
              aria-label="Open Menu"
            >
              <div className="flex flex-col gap-1">
                <span className="w-4 h-[1.5px] bg-[#11698e]" />
                <span className="w-4 h-[1.5px] bg-[#11698e]" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div className="menu-overlay fixed inset-0 z-[60] opacity-0 pointer-events-none bg-black/20 backdrop-blur-xl">
        <div className="p-4 h-full">
          <div className="menu-panel bg-white/75 backdrop-blur-3xl border border-white/60 rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.12)] h-full p-6 sm:p-8 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl text-[#11698e]">
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center text-[#11698e] font-sans"
                aria-label="Close Menu"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-6 sm:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="menu-link font-serif text-2xl sm:text-3xl tracking-tight text-[#11698e]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="menu-cta">
              <Link
                href="/matching"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-4 rounded-2xl bg-[#11698e] text-white text-center font-medium shadow-[0_12px_25px_rgba(17,105,142,0.2)]"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}