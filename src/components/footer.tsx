"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#11698e] text-white relative pt-[100px] md:pt-[140px]">
      <div className="absolute top-0 inset-x-0 h-[160px] overflow-hidden pointer-events-none select-none -translate-y-[99%]">
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[1440px] h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,121L1380,121C1320,121,1200,121,1080,121C960,121,840,121,720,121C600,121,480,121,360,121C240,121,120,121,60,121L0,121Z"
            fill="#11698e"
          />
          <path
            opacity="0.4"
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,121L1392,121C1344,121,1248,121,1152,121C1056,121,960,121,864,121C768,121,672,121,576,121C480,121,384,121,288,121C192,121,96,121,48,121L0,121Z"
            fill="#11698e"
          />
          <path
            d="M0,80L60,74.7C120,69,240,59,360,64C480,69,600,91,720,96C840,101,960,91,1080,80C1200,69,1320,59,1380,53.3L1440,48L1440,121L1380,121C1320,121,1200,121,1080,121C960,121,840,121,720,121C600,121,480,121,360,121C240,121,120,121,60,121L0,121Z"
            fill="#11698e"
          />
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#59c36a]/[0.12] blur-3xl" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="w-full pb-20 text-center px-6 border-b border-white/10 flex flex-col items-center justify-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-2xl tracking-tight">
          Still unsure? That&apos;s okay.
          <span className="block mt-1">Let&apos;s figure it out together.</span>
        </h2>
        
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#59c36a] hover:bg-[#4cb05c] text-white font-medium rounded-full shadow-lg shadow-black/10 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
          >
            Get in touch to know more
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start pb-16">
          
          <div className="md:col-span-4 flex flex-col">
            <span className="font-serif text-xl tracking-wide font-semibold text-white">
              Support Systems
            </span>
            <span className="text-xs text-white/60 mt-1 font-light tracking-wide">
              Trusted Guidance, Tailored Care
            </span>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-4">
            
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
                Navigate
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-white/80 font-light">
                <li><Link href="/" className="hover:text-[#59c36a] transition-colors">Home</Link></li>
                <li><Link href="/matching" className="hover:text-[#59c36a] transition-colors">Book a Consultation</Link></li>
                <li><Link href="/approach" className="hover:text-[#59c36a] transition-colors">Our Approach</Link></li>
                <li><Link href="/blog" className="hover:text-[#59c36a] transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
                Professionals
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-white/80 font-light">
                <li><Link href="/doctors" className="hover:text-[#59c36a] transition-colors">For Doctors</Link></li>
                <li><Link href="/professionals" className="hover:text-[#59c36a] transition-colors">Mental Health Professionals</Link></li>
                <li><Link href="/corporates" className="hover:text-[#59c36a] transition-colors">For Corporates</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
                Resources
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-white/80 font-light">
                <li><Link href="/articles" className="hover:text-[#59c36a] transition-colors">Articles</Link></li>
                <li><Link href="/team" className="hover:text-[#59c36a] transition-colors">Meet the Team</Link></li>
                <li><Link href="/contact" className="hover:text-[#59c36a] transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
                Connect
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-white/80 font-light">
                <li><a href="https://wa.me/919740746668" target="_blank" rel="noopener noreferrer" className="hover:text-[#59c36a] transition-colors">WhatsApp</a></li>
                <li><a href="mailto:contact@supportsystems.com" className="hover:text-[#59c36a] transition-colors">Email</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#59c36a] transition-colors">LinkedIn</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-[10px] tracking-wider text-white/40 font-light">
          &copy; 2026 Support Systems &bull; Trusted Guidance, Tailored Care
        </div>
      </div>
    </footer>
  );
}