"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

const blogPosts = [
  {
    id: "post-1",
    title: "Why Most Therapy Fails in the First Three Sessions",
    excerpt: "Most treatment matches fail not due to clinical modality mismatches, but due to basic misalignment in patient context, active lifestyle goals, and unvoiced expectations.",
    category: "Therapy Fit",
    date: "June 08, 2026",
    author: "Hrutuja Dongare",
    imagePath: "assets/post1.jpg",
    content: "When a person finally makes the monumental choice to seek out mental healthcare, they are often immediately thrust into an unguided directory of cold names, licensing acronyms, and vague hourly rates. Without structured assistance, choices are typically optimized for simple convenience or geographical proximity rather than deep clinical suitability.\n\nStatistical clinical outcomes demonstrate that early dropouts are rarely caused by a fundamental failure of a therapeutic framework itself. Instead, they occur because the baseline expectations, language nuances, or underlying personal contexts were never properly cleared and prioritized prior to session one. \n\nFor instance, an analytical individual might find themselves paired with a therapist focused entirely on non-directive, open-ended exploration, leading to immediate frustration and a feeling of aimlessness. Conversely, someone seeking a gentle, validating space to unpack complex trauma might withdraw if met with a highly structured, behavior-focused workbook methodology on day one. \n\nTrue clinical alignment requires a deliberate, professionally mediated protocol between patient readiness and clinical specialization—one that assesses expectations before the first formal hour even begins."
  },
  {
    id: "post-2",
    title: "The Neuropsychology of Relational Safety",
    excerpt: "An in-depth look at how the autonomic nervous system processes trust, micro-expressions, and therapeutic alignment during initial clinical intervention blocks.",
    category: "Neuroscience",
    date: "May 24, 2026",
    author: "Archee Gupte",
    imagePath: "assets/post2.jpg",
    content: "Therapeutic success relies heavily on relational safety. From a neuropsychological view, the brain evaluates trust using subcortical structures that constantly check for environmental and social safety indicators before logical processing happens.\n\nWhen a client meets a therapist for the first time, their nervous system scans vocal micro-expressions, facial tonal qualities, posture, and presence styles. If alignment is off, the threat system stays active, which dramatically slows down deep down-regulation and vulnerable sharing. \n\nThis is why matching is a physical requirement for neurological down-regulation rather than just an administrative luxury. When a client's autonomic nervous system remains stuck in a defensive, hyper-vigilant state, their prefrontal cortex cannot fully engage in processing emotional insights or restructuring deep-seated behavioral patterns. \n\nOur matching system actively factors in these subtle inter-personal elements, bridging the gap to find an alignment that allows the nervous system to settle into a state of growth, healing, and absolute security."
  },
  {
    id: "post-3",
    title: "Demystifying rTMS and Neurofeedback Systems",
    excerpt: "An evidence-based structural overview of deep brain stimulation protocols for treatment-resistant presentations and executive system optimization.",
    category: "Clinical Tech",
    date: "May 11, 2026",
    author: "Hrutuja Dongare",
    imagePath: "assets/post3.jpg",
    content: "Repetitive Transcranial Magnetic Stimulation (rTMS) has fundamentally changed how we approach chronic, treatment-resistant depression, severe obsessive-compulsive loops, and executive system processing issues.\n\nBy sending focused magnetic pulses to the dorsolateral prefrontal cortex, we can balance neural networks without the systemic side effects often associated with long-term medication use. \n\nWhen paired with real-time biofeedback loops, individuals learn to visually identify and consciously self-regulate brainwave patterns, creating long-term structural changes that help talk therapy work even better. \n\nThis integrated approach targets both the hardware and the software of the mind simultaneously. While rTMS works to re-awaken underactive neural pathways and balance chemical signals, targeted psychotherapy steps in to build healthy coping strategies and positive behavioral models, maximizing long-term clinical recovery."
  },
  {
    id: "post-4",
    title: "Bridging the Gap Between Psychiatry and Therapy",
    excerpt: "How unified treatment coordination systems prevent clinical fragmentation, align medication benchmarks, and support sustainable recovery models.",
    category: "Integrated Care",
    date: "April 28, 2026",
    author: "Archee Gupte",
    imagePath: "assets/post4.jpg",
    content: "Too often, modern mental healthcare is highly fragmented. A psychiatrist manages medication while a psychologist runs therapy sessions, with little to no communication or collaboration between them.\n\nThis structural disconnect forces the client to act as the primary messenger between two completely different clinical perspectives, often leading to mixed signals, duplicate efforts, or conflicting coping strategies. \n\nIntegrated care changes this entirely by connecting medical logic with deep emotional exploration, ensuring both systems work together smoothly toward recovery. \n\nWhen your psychiatrist understands the exact themes being explored in your therapy sessions, and your therapist tracks how your medication plan affects your cognitive stamina, your care plan transforms from a disjointed collection of appointments into a single, cohesive, and deeply supportive ecosystem."
  },
  {
    id: "post-5",
    title: "Navigating Executive Dysfunction in Early Adulthood",
    excerpt: "Practical clinical frameworks for tracking, assessing, and managing focus deficits without falling into standard shame-fueled burnout cycles.",
    category: "Neuropsychology",
    date: "April 15, 2026",
    author: "Hrutuja Dongare",
    imagePath: "assets/post5.jpg",
    content: "Executive dysfunction isn't a lack of discipline or an uninspired work ethic; it's a structural bottleneck in working memory, task initialization, and cognitive flexibility networks.\n\nYoung adults navigating transitions face higher cognitive demands that can rapidly overwhelm these circuits, causing severe, shame-fueled burnout cycles. They struggle to start simple tasks, lose track of time, and internalize the delay as a personal or moral failure.\n\nMoving forward requires specialized assessments to find your specific cognitive bottleneck, followed by custom setups that build habits with low stress. \n\nInstead of relying on standard time-management systems that fuel anxiety, we focus on lowering the cognitive friction of starting tasks, designing supportive environments, and working with specialists who tailor strategies to your unique executive processing rhythm."
  },
  {
    id: "post-6",
    title: "The Science of Habit Formation and Emotional Resilience",
    excerpt: "How modern neuroplasticity models redefine our understanding of behavioral adjustments and long-term therapeutic consistency.",
    category: "Behavioral Science",
    date: "March 30, 2026",
    author: "Archee Gupte",
    imagePath: "assets/post6.jpg",
    content: "Neuroplasticity shows that our brains remain highly adaptable throughout life, changing structures and strengthening specific paths based on consistent behavior.\n\nHowever, rewriting deep emotional habits takes more than just willpower or sudden inspiration. It requires structural repetition in a safe space. \n\nBy breaking down behaviors into small steps and exploring the emotions behind resistance in therapy, individuals can reshape their paths and build strong resilience. \n\nThis article outlines the neurobiological mechanics behind change resistance, providing actionable tracking sheets to monitor your personal emotional baselines, manage daily triggers, and sustain behavioral habits over time with absolute clarity."
  }
];

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const feedRef = useRef<HTMLDivElement>(null);
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);

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
          heroRef.current.querySelectorAll(".animate-hero-item"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power4.out" }
        );
      }

      if (feedRef.current) {
        const cards = feedRef.current.querySelectorAll(".animate-blog-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 35 },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
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
    },
    { scope: containerRef, dependencies: [] }
  );

  const toggleExpandPost = (id: string) => {
    if (expandedPostId === id) {
      setExpandedPostId(null);
    } else {
      setExpandedPostId(id);
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    }
  };

  return (
    <div ref={containerRef} className="bg-[#faf8f3] w-full min-h-screen relative">
      
      <section 
        ref={heroRef}
        className="relative min-h-[50vh] w-full bg-[#faf8f3] flex items-center overflow-hidden pt-32 pb-16 border-b border-[#11698e]/5"
      >
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#11698e]/[0.02] blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#59c36a]/[0.02] blur-3xl" />
        </div>

        <div className="w-full max-w-5xl px-6 mx-auto text-center relative z-10">
          <div className="absolute left-1/2 top-8 -translate-x-1/2 w-72 h-72 bg-[#59c36a]/10 blur-3xl rounded-full pointer-events-none" />

          <span
            className="
              animate-hero-item
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              mb-6
              rounded-full
              bg-[#59c36a]/10
              border
              border-[#59c36a]/20
              text-[#59c36a]
              text-xs
              font-semibold
              tracking-[0.25em]
              uppercase
            "
          >
            <span className="w-2 h-2 rounded-full bg-[#59c36a]" />
            Insights &amp; Perspectives
          </span>

          <h1
            className="
              animate-hero-item
              font-serif
              text-5xl
              md:text-6xl
              lg:text-7xl
              text-[#11698e]
              tracking-tight
              leading-[1.05]
              max-w-5xl
              mx-auto
              mb-8
            "
          >
            Articles on mental health,
            <br className="hidden md:block" />
            therapy, and finding the{" "}
            <span className="relative inline-block text-[#59c36a]">
              right support
              <span className="absolute left-0 bottom-1 w-full h-3 bg-[#59c36a]/15 -z-10 rounded-full" />
            </span>
          </h1>

          <p
            className="
              animate-hero-item
              text-lg
              md:text-xl
              text-[#5c6b68]
              max-w-2xl
              mx-auto
              leading-relaxed
              font-light
            "
          >
            Written by clinical professionals to provide structured direction,
            transparent clinical criteria, and human-first insight.
          </p>
        </div>
      </section>

      <section ref={feedRef} className="py-20 w-full relative z-10">
        <div className="w-full max-w-5xl px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            
            {blogPosts.map((post) => {
              const isExpanded = expandedPostId === post.id;
              
              return (
                <article
                  key={post.id}
                  onClick={() => !isExpanded && toggleExpandPost(post.id)}
                  className={`
                    animate-blog-card
                    bg-white
                    border
                    border-black/[0.04]
                    rounded-[32px]
                    overflow-hidden
                    shadow-[0_12px_45px_rgba(0,0,0,0.01)]
                    transition-all
                    duration-500
                    ease-out
                    flex
                    flex-col
                    w-full
                    ${isExpanded ? "md:col-span-2 cursor-default ring-1 ring-[#11698e]/10 shadow-[0_25px_60px_rgba(17,105,142,0.06)]" : "cursor-pointer hover:shadow-[0_20px_50px_rgba(17,105,142,0.04)] hover:-translate-y-1"}
                  `}
                >
                  <div className={`relative w-full overflow-hidden transition-all duration-500 bg-[#f5f5f5] ${isExpanded ? "h-[260px] md:h-[380px]" : "h-[240px]"}`}>
                    <img 
                      src={post.imagePath} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-5 left-5 z-10">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#11698e] text-[11px] font-bold tracking-wider uppercase rounded-full border border-black/[0.02]">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 flex flex-col flex-grow text-left">
                    <div className="flex items-center gap-4 text-xs text-[#5c6b68]/70 font-light mb-4">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-[#5c6b68]/30" />
                      <span>By {post.author}</span>
                    </div>

                    <h2 className={`font-serif text-[#11698e] tracking-tight leading-tight mb-4 transition-colors duration-300 ${isExpanded ? "text-3xl md:text-4xl" : "text-2xl lg:text-[26px] hover:text-[#0f5a7a]"}`}>
                      {post.title}
                    </h2>

                    <p className="text-[15px] leading-relaxed text-[#5c6b68] font-light mb-6">
                      {post.excerpt}
                    </p>

                    {isExpanded && (
                      <div className="pt-8 border-t border-black/[0.04] mt-2">
                        <div className="text-base md:text-[17px] text-[#3c4a47] leading-relaxed font-light space-y-6 max-w-3xl">
                          {post.content.split("\n\n").map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-8 pt-4 flex justify-between items-center border-t border-black/[0.02]">
                      {isExpanded ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpandPost(post.id);
                          }}
                          className="flex items-center gap-2 text-xs font-semibold text-[#59c36a] hover:text-[#4cb05c] transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transform rotate-180"
                          >
                            <path d="m12 5 7 7-7 7" />
                            <path d="M5 12h14" />
                          </svg>
                          Close Article
                        </button>
                      ) : (
                        <span className="flex items-center gap-2 text-xs font-semibold text-[#11698e] group-hover:text-[#0f5a7a]">
                          Read Full Article
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
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
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

    </div>
  );
}