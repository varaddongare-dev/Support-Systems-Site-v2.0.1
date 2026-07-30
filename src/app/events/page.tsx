"use client";

import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Set to `true` to close registration. Change to `false` when a new event opens!
const IS_REGISTRATION_CLOSED = true;

export default function EventsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const expectations = [
    {
      text: "Guided mandala painting session",
      image: "/assets/e1.jpg",
    },
    {
      text: "Mindfulness and grounding exercises",
      image: "/assets/e2.jpg",
    },
    {
      text: "All art materials provided",
      image: "/assets/e3.jpg",
    },
    {
      text: "A relaxing and supportive atmosphere",
      image: "/assets/e4.jpg",
    },
    {
      text: "Take home your completed artwork",
      image: "/assets/e5.jpg",
    },
  ];
      
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

  const handlePlayToggle = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#5c6b68] pt-32 pb-16 lg:py-24 relative overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(89,195,106,0.06),transparent_50%)]" />
        <svg
          className="absolute inset-0 h-full w-full stroke-[#11698e]/[0.02] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="neural-pattern-events"
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
          <rect width="100%" height="100%" fill="url(#neural-pattern-events)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <div className="mb-6 h-20 w-auto flex items-center justify-center lg:justify-start">
              <img 
                src="/assets/pausepro.svg" 
                alt="The Pause Project Logo" 
                className="h-full w-auto object-contain"
              />
            </div>

            <h1 className="font-serif text-[#11698e] text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] xl:text-[4.5rem] leading-[1.1] tracking-[-0.02em] max-w-2xl">
              Paint Your Peace
              <span className="block mt-3 text-[#59c36a] italic font-normal text-[0.55em] tracking-wide leading-[1.2]">
                by Support Systems
              </span>
            </h1>

            <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-[#5c6b68] max-w-2xl">
              <p>
                Paint Your Peace is a unique neuroscience-informed wellness experience that blends 
                mindful tea tasting, creative mandala art, and meaningful social connection. 
                Designed to help participants pause, de-stress, and reconnect with themselves, 
                the session combines evidence-based insights from neuropsychology with engaging, 
                hands-on activities that promote relaxation, emotional wellbeing, and present-moment awareness.
              </p>
              <p>
                Guided by a neuropsychology expert, participants explore the science behind stress, 
                attention, emotions, and relaxation while enjoying calming herbal teas and a mindful 
                mandala-creation experience. Through laughter, movement, reflection, and creativity, 
                The Pause Project offers a refreshing and accessible approach to mental wellbeing, 
                transforming an ordinary gathering into a memorable journey of self-discovery, 
                connection, and inner calm.
              </p>
            </div>

            <div className="w-full flex flex-col items-center lg:items-start">
              <div className="w-full flex flex-col items-center lg:items-start">
                
                <div className="order-1 lg:absolute lg:top-12 lg:right-0 lg:w-[calc(41.666667%-2rem)] xl:w-[calc(41.666667%-3rem)] lg:flex lg:flex-col lg:items-center lg:justify-center mt-12 lg:mt-0">
                  <div className="relative w-[340px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border-8 border-white bg-white shadow-[0_24px_60px_rgba(17,105,142,0.12)] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11698e]/20 via-transparent to-transparent z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-40" />
                    <video
                      ref={videoRef}
                      src="/assets/eventvideo.mp4"
                      controls={isPlaying}
                      playsInline
                      className="w-full h-full object-cover relative z-0"
                      onPause={() => setIsPlaying(false)}
                      onPlay={() => setIsPlaying(true)}
                    />
                    {!isPlaying && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 transition-opacity duration-300">
                        <button
                          onClick={handlePlayToggle}
                          className="w-20 h-20 flex items-center justify-center rounded-full bg-[#11698e] text-white shadow-[0_8px_25px_rgba(17,105,142,0.4)] transition-all duration-300 hover:scale-110 hover:bg-[#59c36a] hover:shadow-[0_8px_25px_rgba(89,195,106,0.4)]"
                          aria-label="Play video"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="mt-4 text-xs font-medium tracking-wide text-[#5c6b68]/70 text-center uppercase w-[340px]">
                    See the experience in action
                  </p>
                </div>

                <div className="order-2 mt-14 w-full max-w-4xl">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="h-px w-10 bg-[#59c36a]/40" />
                    <h2 className="text-xl md:text-2xl font-semibold text-[#11698e] tracking-tight">
                      What to expect
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {expectations.map((item) => (
                      <div
                        key={item.text}
                        className="group flex items-center gap-5 p-5 sm:p-6 rounded-[28px] bg-white/80 backdrop-blur-xl border border-white/70 shadow-[0_12px_40px_rgba(17,105,142,0.08)] hover:shadow-[0_20px_60px_rgba(17,105,142,0.12)] hover:-translate-y-1.5 transition-all duration-300"
                      >
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.text}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>

                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <div className="w-8 h-8 rounded-full bg-[#59c36a]/15 flex items-center justify-center flex-shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#59c36a"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>

                          <p className="text-[15px] sm:text-[17px] font-medium text-[#4f5f5b] leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {IS_REGISTRATION_CLOSED ? (
                <button
                  disabled
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 w-full sm:w-auto font-semibold text-gray-500 bg-gray-300 border border-gray-300 shadow-none cursor-not-allowed opacity-80"
                >
                  Registration Closed
                </button>
              ) : (
                <Link
                  href="/matching"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 w-full sm:w-auto font-semibold text-white bg-[#11698e] border border-[#0f5f80] shadow-[0_12px_30px_rgba(17,105,142,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(17,105,142,0.35)] active:translate-y-0"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative flex items-center gap-2">
                    Reserve Your Spot Now
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </span>
                </Link>
              )}
            </div>

          </div>

          <div className="hidden lg:block lg:col-span-5 h-full" />

        </div>
      </div>
    </div>
  );
}