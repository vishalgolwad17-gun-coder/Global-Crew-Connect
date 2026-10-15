import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  HardHat,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Jobs from "./Jobs";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HERO_POSTER =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2200&q=85";

// Pexels stock video: an office team collaborating in a conference room.
const HERO_VIDEO =
  "newservicesvideo.mp4";

const SERVICES = [
  {
    number: "01",
    eyebrow: "PLACEMENT",
    title: "International Job Placement",
    description:
      "Explore overseas employment opportunities and connect with employers through a clear, professional recruitment process.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Professionals meeting and discussing work opportunities",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    eyebrow: "RECRUITMENT",
    title: "Europe & Gulf Recruitment",
    description:
      "Get guidance while exploring opportunities across Europe, the UAE, Saudi Arabia, and other Gulf destinations.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern international business district buildings",
    icon: Globe2,
  },
  {
    number: "03",
    eyebrow: "CAREER SUPPORT",
    title: "Career Guidance",
    description:
      "Understand your options, prepare for interviews, and take informed steps toward your international career goals.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Team collaborating around a table during a work meeting",
    icon: Users,
  },
  {
    number: "04",
    eyebrow: "WORKFORCE PLACEMENT",
    title: "Skilled & Unskilled Placement",
    description:
      "Explore roles across sectors such as construction, logistics, security, and other areas of workforce demand.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Construction professional working at a job site",
    icon: HardHat,
  },
];

function SectionEyebrow({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] sm:text-xs ${
        light ? "text-yellow-300" : "text-amber-700"
      }`}
    >
      <span className="h-px w-7 bg-current" aria-hidden="true" />
      <span>{children}</span>
      <span className="h-px w-7 bg-current" aria-hidden="true" />
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article
      data-service-card
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-900/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 sm:aspect-[5/3]">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#071329]/80 via-[#071329]/10 to-[#071329]/10"
          aria-hidden="true"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#071329]/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-[11px]">
          <span className="text-yellow-300">{service.number}</span>
          <span className="h-3 w-px bg-white/30" aria-hidden="true" />
          {service.eyebrow}
        </div>
        <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-yellow-300 backdrop-blur-md transition-colors duration-300 group-hover:bg-yellow-400 group-hover:text-[#071329] sm:bottom-5 sm:left-5 sm:h-12 sm:w-12">
          <Icon size={22} aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <h3 className="text-xl font-bold leading-snug tracking-tight text-[#08142c] sm:text-2xl">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
          {service.description}
        </p>
        <Link
          to="/contact"
          className="group/link mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-lg font-bold text-[#08142c] transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          aria-label={`Enquire about ${service.title}`}
        >
          Discuss this service
          <ArrowRight
            size={17}
            className="transition-transform duration-200 group-hover/link:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}

export default function Services() {
  const pageRef = useRef(null);
  const videoRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Keep the video and animation behavior in sync with the visitor's motion preference.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event) => setReduceMotion(event.matches);

    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", handleChange);
      return () => query.removeEventListener("change", handleChange);
    }

    // Older browser fallback
    query.addListener(handleChange);
    return () => query.removeListener(handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      video.pause();
      return;
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Poster image remains visible when autoplay is blocked.
      });
    }
  }, [reduceMotion]);

  useGSAP(
    () => {
      const root = pageRef.current;
      if (!root || reduceMotion) return;

      const select = gsap.utils.selector(root);
      const getFirst = (selector) => select(selector)[0];

      // Hero elements enter in a restrained, readable sequence.
      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out", overwrite: "auto" },
      });

      const introItems = [
        ["[data-hero-eyebrow]", { y: 14, duration: 0.45 }, 0],
        ["[data-hero-title]", { y: 24, duration: 0.68 }, 0.1],
        ["[data-hero-copy]", { y: 18, duration: 0.55 }, 0.26],
        ["[data-hero-actions]", { y: 14, duration: 0.48 }, 0.4],
        ["[data-hero-trust]", { y: 12, duration: 0.42 }, 0.52],
        ["[data-hero-panel]", { x: 18, scale: 0.985, duration: 0.68 }, 0.18],
      ];

      introItems.forEach(([selector, fromVars, position]) => {
        const target = getFirst(selector);
        if (!target) return;
        heroTimeline.fromTo(
          target,
          { autoAlpha: 0, ...fromVars },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: fromVars.duration,
            clearProps: "transform,opacity,visibility",
          },
          position
        );
      });

      const reveal = (targetSelector, triggerSelector, options = {}) => {
        const targets = select(targetSelector);
        const trigger = getFirst(triggerSelector);
        if (!targets.length || !trigger) return;

        gsap.fromTo(
          targets,
          { autoAlpha: 0, y: options.y ?? 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: options.duration ?? 0.65,
            stagger: options.stagger ?? 0.12,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger,
              start: options.start ?? "top 83%",
              once: true,
            },
          }
        );
      };

      reveal("[data-services-heading-item]", "[data-services-heading]", {
        y: 20,
        duration: 0.6,
        stagger: 0.1,
      });
      reveal("[data-service-card]", "[data-services-grid]", {
        y: 28,
        stagger: 0.13,
        duration: 0.65,
        start: "top 84%",
      });
      reveal("[data-services-cta-content]", "[data-services-cta]", {
        y: 22,
        duration: 0.65,
      });

      // Trigger positions stay scoped to this component and are cleaned up by useGSAP.
      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope: pageRef, dependencies: [reduceMotion], revertOnUpdate: true }
  );

  return (
    <div ref={pageRef} className="overflow-hidden bg-white text-[#08142c]">
      {/* Cinematic video hero */}
      <section className="relative isolate overflow-hidden bg-[#071329] text-white">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#071329]"
          aria-hidden="true"
        >
          {/* On phones and tablets, keep the footage in the upper hero area so
              the landscape video isn't cropped into a narrow strip behind the
              full stacked layout. On desktop, let it fill the entire hero. */}
          <video
            ref={videoRef}
            className="absolute inset-x-0 top-0 h-[68%] w-full max-w-none object-cover object-[57%_center] sm:h-[74%] sm:object-[52%_center] lg:inset-0 lg:h-full lg:object-center"
            autoPlay={!reduceMotion}
            muted
            loop
            playsInline
            preload={reduceMotion ? "none" : "metadata"}
            poster={HERO_POSTER}
            tabIndex={-1}
            aria-hidden="true"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#061329]/20" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,13,30,0.97)_0%,rgba(4,13,30,0.87)_45%,rgba(4,13,30,0.58)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071329] via-transparent to-[#071329]/25" />
          <div className="absolute -left-28 -top-36 h-96 w-96 rounded-full bg-blue-500/10 blur-[110px]" />
          <div className="absolute -bottom-44 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[590px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 md:min-h-[620px] lg:min-h-[680px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div
              data-hero-eyebrow
              className="inline-flex items-center gap-2.5 rounded-full border border-yellow-300/25 bg-white/[0.07] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-yellow-200 backdrop-blur-md sm:text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-yellow-400" aria-hidden="true" />
              What We Offer
            </div>

            <h1
              data-hero-title
              className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Recruitment support.
              <br />
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Global possibilities.
              </span>
            </h1>

            <p
              data-hero-copy
              className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
            >
              Explore international employment pathways with guidance designed to
              help you understand your options and take the next step with greater
              confidence.
            </p>

            <div data-hero-actions className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-[#071329] shadow-lg shadow-yellow-400/10 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
              >
                Talk to Our Team
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="#services-list"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.06] px-7 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:border-yellow-300/60 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
              >
                Explore Services
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div
              data-hero-trust
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-sm text-slate-200"
            >
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-yellow-300" aria-hidden="true" />
                Career guidance
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-yellow-300" aria-hidden="true" />
                International opportunities
              </span>
            </div>
          </div>

          <aside
            data-hero-panel
            className="relative mx-auto w-full max-w-lg lg:ml-auto"
            aria-label="Our service approach"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-300/20 via-blue-400/10 to-transparent blur-2xl" aria-hidden="true" />
            <div className="relative rounded-3xl border border-white/20 bg-[#091a33]/80 p-5 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-7">
              <div className="flex items-start gap-4 border-b border-white/10 pb-5 sm:pb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300 sm:h-14 sm:w-14">
                  <Globe2 size={27} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300 sm:text-xs">
                    Global Crew Connect
                  </p>
                  <h2 className="mt-1.5 text-xl font-bold text-white sm:text-2xl">
                    Support for your next move
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  "International job placement",
                  "Europe and Gulf recruitment",
                  "Career guidance and preparation",
                  "Skilled and unskilled placements",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-yellow-300"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-6 text-slate-200 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-yellow-300/15 bg-yellow-300/[0.06] p-4">
                <p className="text-sm leading-6 text-slate-200">
                  Clear communication and guidance at each stage of the recruitment journey.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />
      </section>

      {/* Services grid */}
      <section id="services-list" className="relative bg-[#f7f8fb] py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-200/25 blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div data-services-heading className="mx-auto max-w-3xl text-center">
            <div data-services-heading-item>
              <SectionEyebrow>Our Recruitment Services</SectionEyebrow>
            </div>
            <h2
              data-services-heading-item
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#08142c] sm:text-4xl lg:text-5xl"
            >
              Practical support for every career step
            </h2>
            <p
              data-services-heading-item
              className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
            >
              From exploring roles to preparing for the recruitment process, discover
              how our services can support your international career journey.
            </p>
          </div>

          <div
            data-services-grid
            className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-5"
          >
            {SERVICES.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>

          <div
            data-services-cta
            className="relative mt-10 overflow-hidden rounded-3xl bg-[#08142c] px-6 py-8 text-white shadow-lg shadow-slate-900/10 sm:mt-14 sm:px-9 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-yellow-400/10 blur-[80px]"
              aria-hidden="true"
            />
            <div data-services-cta-content className="relative max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
                Have questions?
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                Let&apos;s discuss your career goals.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Contact our team to learn more about the recruitment support that may
                be relevant to your experience and interests.
              </p>
            </div>
            <div className="relative mt-6 lg:mt-0 lg:shrink-0">
              <Link
                to="/contact"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-[#08142c] transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200 sm:w-auto"
              >
                Contact Our Team
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Jobs />
      <Footer />
    </div>
  );
}
