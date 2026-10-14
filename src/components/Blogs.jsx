import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  Mail,
  Search,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BLOG_HERO_POSTER =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2200&q=85";
const BLOG_HERO_VIDEO =
  "https://www.pexels.com/download/video/7981259/";

const BLOG_POSTS = [
  {
    id: "overseas-application",
    category: "Career Planning",
    readTime: "5 min read",
    title: "How to Prepare for an Overseas Job Application",
    excerpt:
      "A practical starting point for presenting your experience clearly and approaching international opportunities with confidence.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Professional reviewing career documents at a desk",
    featured: true,
    intro:
      "Applying for a job abroad takes preparation. A clear resume, realistic role selection, and organized documentation can help you communicate your experience to an international employer.",
    sections: [
      {
        heading: "Start with the role requirements",
        body:
          "Read the job description carefully and compare the listed skills, experience, language expectations, and qualifications with your own background. Apply for roles that genuinely align with your experience.",
      },
      {
        heading: "Make your resume easy to review",
        body:
          "Use a simple layout, clear job titles, accurate dates, and concise examples of your responsibilities. Keep your contact information current and check spelling before sending the application.",
      },
      {
        heading: "Keep documents organized",
        body:
          "Prepare commonly requested documents and make sure the information is consistent. Exact document and visa requirements vary by destination, role, and employer, so confirm requirements through the appropriate official channels.",
      },
    ],
    takeaways: [
      "Match your application to the actual role requirements.",
      "Keep your resume accurate, readable, and up to date.",
      "Confirm destination-specific requirements before making plans.",
    ],
  },
  {
    id: "document-checklist",
    category: "Documents",
    readTime: "4 min read",
    title: "Documents to Organize Before Applying Abroad",
    excerpt:
      "Learn how to keep your personal, education, and work records ready without assuming every destination uses the same checklist.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Organized paperwork and documents on a desk",
    intro:
      "Preparing documents early can make a recruitment process easier to manage. The exact checklist depends on the destination, role, employer, and the relevant authorities.",
    sections: [
      {
        heading: "Gather identity and contact records",
        body:
          "Check that your identity documents are valid and that the personal details you use on forms and your resume match. Avoid sending sensitive documents to unverified contacts.",
      },
      {
        heading: "Prepare work and qualification records",
        body:
          "Depending on the role, you may be asked for employment records, certificates, training credentials, or references. Keep clear copies and retain the originals securely.",
      },
      {
        heading: "Verify the official requirements",
        body:
          "Do not rely on a generic internet checklist for immigration or licensing requirements. Confirm current requirements through official government sources and the relevant employer or authorized professional.",
      },
    ],
    takeaways: [
      "Check validity and consistency across documents.",
      "Keep originals secure and share copies carefully.",
      "Confirm current requirements for the exact destination and role.",
    ],
  },
  {
    id: "international-interview",
    category: "Interview Tips",
    readTime: "5 min read",
    title: "How to Prepare for an International Job Interview",
    excerpt:
      "Build a clear, confident interview approach with role research, concise examples, and questions worth asking an employer.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Colleagues in a professional meeting",
    intro:
      "A job interview is an opportunity to explain how your experience fits a role and to understand the expectations of the employer. Preparation helps both sides have a more useful conversation.",
    sections: [
      {
        heading: "Research the role and employer",
        body:
          "Review the job responsibilities and prepare a few examples that show your relevant skills. Make sure you understand the employer's name, the interview format, and who you are meeting.",
      },
      {
        heading: "Use specific examples",
        body:
          "When answering questions, describe the situation, the action you took, and the result. Be honest about your skills and experience, including areas where you are still learning.",
      },
      {
        heading: "Ask practical questions",
        body:
          "Clarify job duties, working arrangements, compensation details, location, contract terms, and next steps. Ask for important information in writing before making a commitment.",
      },
    ],
    takeaways: [
      "Test your interview setup and arrive on time.",
      "Use truthful examples that relate to the role.",
      "Request clear written terms before accepting an offer.",
    ],
  },
  {
    id: "recruitment-process",
    category: "Recruitment",
    readTime: "4 min read",
    title: "Understanding the Overseas Recruitment Process",
    excerpt:
      "A simple overview of common recruitment stages—from the first application to reviewing an offer and preparing for travel.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A team discussing plans in an office",
    intro:
      "Recruitment processes differ by employer, country, and job type, but understanding the common stages can help you know what to ask and what to prepare next.",
    sections: [
      {
        heading: "Application and screening",
        body:
          "A process may begin with a resume review, an initial discussion, and checks on relevant experience or qualifications. Provide accurate information and ask how your details will be used.",
      },
      {
        heading: "Interview and offer review",
        body:
          "If you progress, clarify the duties, location, pay, working hours, benefits, and contract terms. Take time to read any offer and seek clarification when something is unclear.",
      },
      {
        heading: "Documents and travel preparation",
        body:
          "Work authorization, medical checks, licensing, and travel steps depend on the destination and role. Do not assume that an interview or offer alone grants permission to work abroad.",
      },
    ],
    takeaways: [
      "Ask what stage you are at and what happens next.",
      "Review written terms before agreeing to an offer.",
      "Confirm work authorization through official channels.",
    ],
  },
  {
    id: "choose-destination",
    category: "Career Planning",
    readTime: "6 min read",
    title: "Choosing a Destination That Fits Your Career Goals",
    excerpt:
      "Look beyond the country name and consider role fit, language, living costs, contract terms, and longer-term priorities.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "International city skyline at sunset",
    intro:
      "A destination should be evaluated in context. The right choice depends on the job itself, your qualifications, personal circumstances, and the terms being offered.",
    sections: [
      {
        heading: "Compare the full employment offer",
        body:
          "Look at salary alongside working hours, accommodation or transport arrangements, deductions, benefits, and contract duration. Ask for details in writing so you can compare offers fairly.",
      },
      {
        heading: "Understand practical living needs",
        body:
          "Research expected living costs, local transport, climate, language needs, and support networks. Consider how the move may affect family responsibilities and your personal goals.",
      },
      {
        heading: "Check eligibility and requirements",
        body:
          "Entry, work authorization, and professional licensing conditions can vary significantly. Confirm the current rules that apply to your nationality, role, and intended destination.",
      },
    ],
    takeaways: [
      "Compare total conditions, not just headline salary.",
      "Consider daily living needs and personal priorities.",
      "Verify eligibility and work authorization requirements.",
    ],
  },
  {
    id: "offer-red-flags",
    category: "Safety & Awareness",
    readTime: "5 min read",
    title: "How to Review an Overseas Job Offer Carefully",
    excerpt:
      "Questions to ask about employer details, written contracts, fees, and requests for personal information before you commit.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Employment paperwork being reviewed on a desk",
    intro:
      "Moving abroad for work is a major decision. Taking time to verify a job offer and review the details can help you spot gaps and ask informed questions.",
    sections: [
      {
        heading: "Verify who you are dealing with",
        body:
          "Check the employer's identity and contact information independently. Be cautious when details cannot be verified or when someone pressures you to make an immediate decision.",
      },
      {
        heading: "Read the terms in writing",
        body:
          "The role, salary, location, working hours, deductions, and any fees should be clearly explained. Ask for written answers and keep copies of documents and communications.",
      },
      {
        heading: "Be careful with money and sensitive data",
        body:
          "Do not send money or sensitive personal documents simply because someone promises a job or visa. Verify any fees, payment recipient, and process with official sources and qualified advisers as appropriate.",
      },
    ],
    takeaways: [
      "Verify the employer and recruitment contact independently.",
      "Read the full written offer and ask about unclear terms.",
      "Be cautious about pressure, unverified fees, or guarantees.",
    ],
  },
];

const CATEGORIES = [
  "All Insights",
  "Career Planning",
  "Recruitment",
  "Documents",
  "Interview Tips",
  "Safety & Awareness",
];

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] sm:text-xs ${
        light ? "text-yellow-300" : "text-amber-700"
      }`}
    >
      <span className="h-px w-7 bg-current" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function BlogCard({ post, onRead }) {
  return (
    <article
      data-blog-card
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-xl hover:shadow-slate-900/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#071329]/20 via-transparent to-[#071329]/10"
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#071329]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-[11px]">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <BookOpen size={14} className="text-amber-600" aria-hidden="true" />
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-[#08142c] sm:text-2xl">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
          {post.excerpt}
        </p>
        <button
          type="button"
          onClick={() => onRead(post)}
          className="group/read mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-lg font-bold text-[#08142c] transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          aria-label={`Read article: ${post.title}`}
        >
          Read article
          <ArrowRight
            size={17}
            className="transition-transform duration-200 group-hover/read:translate-x-1"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}

export default function Blogs() {
  const pageRef = useRef(null);
  const heroVideoRef = useRef(null);
  const heroSectionRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [activeCategory, setActiveCategory] = useState("All Insights");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const featuredPost = BLOG_POSTS.find((post) => post.featured) ?? BLOG_POSTS[0];

  const visiblePosts = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();
    const matches = BLOG_POSTS.filter((post) => {
      const matchesCategory =
        activeCategory === "All Insights" || post.category === activeCategory;
      const searchableText = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });

    // Keep the featured article out of the default grid to avoid duplication,
    // but include it when a category or search specifically matches it.
    const isDefaultView = activeCategory === "All Insights" && !normalizedQuery;
    return isDefaultView ? matches.filter((post) => post.id !== featuredPost.id) : matches;
  }, [activeCategory, searchTerm, featuredPost.id]);

  // Keep background playback aligned with the visitor's motion preference.
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = (event) => setReduceMotion(event.matches);

    if (typeof motionQuery.addEventListener === "function") {
      motionQuery.addEventListener("change", updateMotionPreference);
      return () => motionQuery.removeEventListener("change", updateMotionPreference);
    }

    // Compatibility for older browsers.
    motionQuery.addListener(updateMotionPreference);
    return () => motionQuery.removeListener(updateMotionPreference);
  }, []);

  // Play the background only while the hero is visible. This helps mobile devices
  // avoid spending battery and bandwidth decoding a video the visitor cannot see.
  useEffect(() => {
    const video = heroVideoRef.current;
    const hero = heroSectionRef.current;
    if (!video || !hero) return undefined;

    const tryPlay = () => {
      if (reduceMotion || document.visibilityState === "hidden") {
        video.pause();
        return;
      }
      const playRequest = video.play();
      if (playRequest && typeof playRequest.catch === "function") {
        playRequest.catch(() => {
          // The poster remains visible if the browser blocks autoplay or the network fails.
        });
      }
    };

    if (reduceMotion) {
      video.pause();
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      tryPlay();
      return () => video.pause();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else video.pause();
      },
      { threshold: 0.01 }
    );
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") tryPlay();
      else video.pause();
    };

    observer.observe(hero);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      video.pause();
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!selectedPost) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedPost(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPost]);

  useGSAP(
    () => {
      const root = pageRef.current;
      if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const select = gsap.utils.selector(root);
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      [
        ["[data-blog-eyebrow]", 0, 12, 0.4],
        ["[data-blog-title]", 0.1, 24, 0.65],
        ["[data-blog-intro]", 0.25, 18, 0.52],
        ["[data-blog-actions]", 0.38, 14, 0.45],
        ["[data-featured-post]", 0.18, 18, 0.65],
      ].forEach(([selector, position, y, duration]) => {
        const target = select(selector)[0];
        if (!target) return;
        timeline.fromTo(
          target,
          { autoAlpha: 0, y, ...(selector === "[data-featured-post]" ? { x: 12 } : {}) },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration,
            clearProps: "transform,opacity,visibility",
          },
          position
        );
      });
    },
    { scope: pageRef }
  );

  useGSAP(
    () => {
      const root = pageRef.current;
      if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const select = gsap.utils.selector(root);
      const heading = select("[data-insights-heading]")[0];
      const grid = select("[data-blog-grid]")[0];
      const cards = select("[data-blog-card]");
      const cta = select("[data-blog-cta]")[0];

      if (heading) {
        gsap.fromTo(
          heading,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            immediateRender: false,
            clearProps: "transform,opacity,visibility",
            scrollTrigger: { trigger: heading, start: "top 86%", once: true },
          }
        );
      }

      if (grid && cards.length) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.58,
            stagger: 0.08,
            ease: "power3.out",
            immediateRender: false,
            clearProps: "transform,opacity,visibility",
            scrollTrigger: { trigger: grid, start: "top 86%", once: true },
          }
        );
      }

      if (cta) {
        gsap.fromTo(
          cta,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            immediateRender: false,
            clearProps: "transform,opacity,visibility",
            scrollTrigger: { trigger: cta, start: "top 88%", once: true },
          }
        );
      }
    },
    {
      scope: pageRef,
      dependencies: [activeCategory, searchTerm, visiblePosts.map((post) => post.id).join("|")],
      revertOnUpdate: true,
    }
  );

  const scrollToInsights = () => {
    document.getElementById("latest-insights")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={pageRef} className="overflow-hidden bg-white text-[#08142c]">
      {/* Cinematic, responsive video hero */}
      <section ref={heroSectionRef} className="relative isolate overflow-hidden bg-[#071329] text-white">
        {/*
          Keep the moving footage within a responsive background frame on phones/tablets.
          The hero can grow taller as content stacks vertically, but the video does not
          stretch into a portrait-like crop. On desktop it fills the entire hero.
        */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(70vh,600px)] overflow-hidden sm:h-[min(76vh,680px)] md:h-[min(82vh,760px)] lg:inset-0 lg:h-full" aria-hidden="true">
          {/* Poster remains visible while the video loads or if playback is unavailable. */}
          <img
            src={BLOG_HERO_POSTER}
            alt=""
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[56%_center] md:object-center lg:object-[center_42%]"
          />

          {!reduceMotion && (
            <video
              ref={heroVideoRef}
              className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[56%_center] md:object-center lg:object-[center_42%]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={BLOG_HERO_POSTER}
              tabIndex={-1}
            >
              <source src={BLOG_HERO_VIDEO} type="video/mp4" />
            </video>
          )}

          {/* Mobile uses a vertical fade; desktop uses a horizontal text-contrast fade. */}
          <div className="absolute inset-0 bg-[#061329]/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061329]/20 via-[#061329]/ to-[#071329] lg:bg-[linear-gradient(90deg,rgba(4,13,30,0.96)_0%,rgba(4,13,30,0.84)_48%,rgba(4,13,30,0.55)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071329] via-[#071329]/55 to-transparent" />
        </div>
        <div className="pointer-events-none absolute -left-28 -top-28 z-10 h-80 w-80 rounded-full bg-blue-500/[0.08] blur-[100px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-36 right-0 z-10 h-80 w-80 rounded-full bg-yellow-400/[0.08] blur-[100px]" aria-hidden="true" />

        <div className="relative z-20 mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[640px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div
              data-blog-eyebrow
              className="inline-flex items-center gap-2.5 rounded-full border border-yellow-300/25 bg-white/[0.06] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-200 backdrop-blur-md sm:text-xs"
            >
              <BookOpen size={15} aria-hidden="true" />
              Global Crew Connect Insights
            </div>
            <h1
              data-blog-title
              className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Knowledge for your next step.
              <br />
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Opportunity starts here.
              </span>
            </h1>
            <p data-blog-intro className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Practical insights on overseas job applications, recruitment preparation,
              career planning, and making informed decisions about working abroad.
            </p>
            <div data-blog-actions className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToInsights}
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-[#071329] shadow-lg shadow-yellow-400/10 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
              >
                Explore insights
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <Link
                to="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.05] px-7 py-4 font-semibold text-white transition-colors hover:border-yellow-300/60 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
              >
                Talk to our team
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-300" aria-hidden="true" /> Career preparation</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-300" aria-hidden="true" /> Recruitment guidance</span>
            </div>
          </div>

          <aside data-featured-post className="relative mx-auto w-full max-w-lg lg:ml-auto" aria-label="Featured article">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-300/20 via-blue-400/10 to-transparent blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-[#091a33]/80 shadow-2xl shadow-black/25 backdrop-blur-xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={featuredPost.image} alt={featuredPost.imageAlt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071329]/90 via-[#071329]/10 to-transparent" aria-hidden="true" />
                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#071329]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-yellow-200 backdrop-blur-md">
                  Featured insight
                </span>
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-300">
                  <span className="rounded-full bg-yellow-400/10 px-3 py-1.5 text-yellow-200">{featuredPost.category}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock3 size={14} aria-hidden="true" />{featuredPost.readTime}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">{featuredPost.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{featuredPost.excerpt}</p>
                <button
                  type="button"
                  onClick={() => setSelectedPost(featuredPost)}
                  className="group/read mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-yellow-300 transition-colors hover:text-yellow-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
                >
                  Read featured article
                  <ArrowRight size={17} className="transition-transform group-hover/read:translate-x-1" aria-hidden="true" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Article search and cards */}
      <section id="latest-insights" className="relative bg-[#f7f8fb] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-200/25 blur-[100px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div data-insights-heading className="mx-auto max-w-3xl text-center">
            <Eyebrow>Explore the Blog</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#08142c] sm:text-4xl lg:text-5xl">
              Insights for your global career
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Clear, practical reading to help you prepare, ask the right questions, and make informed career decisions.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-4 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 lg:flex-wrap lg:overflow-visible" aria-label="Filter blog posts by category">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`min-h-10 shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition-colors sm:text-sm ${
                    activeCategory === category
                      ? "border-[#08142c] bg-[#08142c] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-[#08142c]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <label className="flex min-h-12 w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-slate-500 shadow-sm focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/15 lg:max-w-xs">
              <Search size={18} aria-hidden="true" />
              <span className="sr-only">Search blog articles</span>
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search insights..."
                className="min-w-0 flex-1 bg-transparent text-sm text-[#08142c] outline-none placeholder:text-slate-400"
              />
              {searchTerm && (
                <button type="button" onClick={() => setSearchTerm("")} aria-label="Clear search" className="rounded p-1 hover:bg-slate-100">
                  <X size={15} aria-hidden="true" />
                </button>
              )}
            </label>
          </div>

          <div className="mb-5 mt-5 flex items-center justify-between gap-4 text-sm text-slate-500">
            <p>{visiblePosts.length} {visiblePosts.length === 1 ? "article" : "articles"} found</p>
            {(activeCategory !== "All Insights" || searchTerm) && (
              <button type="button" onClick={() => { setActiveCategory("All Insights"); setSearchTerm(""); }} className="font-semibold text-amber-700 hover:text-amber-800">
                Clear filters
              </button>
            )}
          </div>

          {visiblePosts.length > 0 ? (
            <div data-blog-grid className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
              {visiblePosts.map((post) => <BlogCard key={post.id} post={post} onRead={setSelectedPost} />)}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
              <Search size={28} className="mx-auto text-slate-400" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-[#08142c]">No matching articles</h3>
              <p className="mt-2 text-sm text-slate-500">Try another search term or choose a different category.</p>
              <button type="button" onClick={() => { setActiveCategory("All Insights"); setSearchTerm(""); }} className="mt-5 rounded-xl bg-[#08142c] px-5 py-3 text-sm font-bold text-white hover:bg-[#102447]">
                Show all insights
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Editorial note */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:flex-row lg:items-center lg:gap-8 lg:p-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <FileCheck2 size={27} aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#08142c] sm:text-2xl">Make informed decisions before you move</h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                Articles are general guidance, not legal or immigration advice. Requirements can change and vary by destination and role, so verify current details with official sources before acting.
              </p>
            </div>
            <Link to="/contact" className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#08142c] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#102447] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
              Contact our team
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section data-blog-cta className="bg-[#f7f8fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#08142c] px-6 py-10 text-white shadow-xl shadow-slate-900/10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-yellow-400/10 blur-[90px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-36 -left-24 h-72 w-72 rounded-full bg-blue-500/15 blur-[90px]" aria-hidden="true" />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <Eyebrow light>Take the Next Step</Eyebrow>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Have questions about your career abroad?</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Talk to Global Crew Connect about your experience, goals, and the recruitment process.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-[#08142c] transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200">
                <Mail size={17} aria-hidden="true" /> Contact Us
              </Link>
              <a href="mailto:info@globalcrewconnect.org" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition-colors hover:border-yellow-300/50 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200">
                Email Our Team
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Article reader dialog */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-[#030916]/75 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedPost(null); }}
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-dialog-title"
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <div className="relative h-48 overflow-hidden sm:h-64">
              <img src={selectedPost.image} alt={selectedPost.imageAlt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071329]/70 to-transparent" aria-hidden="true" />
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                aria-label="Close article"
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#071329]/70 text-white backdrop-blur-md hover:bg-[#071329] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="p-6 sm:p-9 lg:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                <span className="rounded-full bg-amber-50 px-3 py-1.5 text-amber-800">{selectedPost.category}</span>
                <span className="inline-flex items-center gap-1.5"><Clock3 size={14} aria-hidden="true" />{selectedPost.readTime}</span>
              </div>
              <h2 id="blog-dialog-title" className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#08142c] sm:text-3xl lg:text-4xl">{selectedPost.title}</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">{selectedPost.intro}</p>
              <div className="mt-7 space-y-6">
                {selectedPost.sections.map((section) => (
                  <section key={section.heading}>
                    <h3 className="text-lg font-bold text-[#08142c] sm:text-xl">{section.heading}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{section.body}</p>
                  </section>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-5 sm:p-6">
                <h3 className="flex items-center gap-2 font-bold text-[#08142c]"><CheckCircle2 size={19} className="text-amber-700" aria-hidden="true" /> Key takeaways</h3>
                <ul className="mt-4 space-y-3">
                  {selectedPost.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <ChevronRight size={17} className="mt-0.5 shrink-0 text-amber-700" aria-hidden="true" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-xs leading-6 text-slate-500">General information only. Confirm current destination-specific rules and requirements with official sources.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" onClick={() => setSelectedPost(null)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#08142c] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#102447]">
                  Ask our team
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <button type="button" onClick={() => setSelectedPost(null)} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">Close article</button>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
