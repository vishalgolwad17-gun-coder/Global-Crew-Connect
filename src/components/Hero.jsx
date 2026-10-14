import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import heroImg from "../images/heroimg.jpg";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FEATURES = [
  {
    number: "01",
    title: "Trusted Employer Connections",
    description:
      "Explore international employment opportunities with a recruitment process focused on transparency and professional guidance.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1000&q=85",
    imageAlt: "Professionals collaborating in a workplace",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Personalized Career Guidance",
    description:
      "Get guidance throughout your recruitment journey, from understanding suitable roles to preparing for your next career step.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=85",
    imageAlt: "Colleagues learning and working together",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Opportunities Without Borders",
    description:
      "Discover potential career opportunities across Gulf countries, Europe, Australia, and other international destinations.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1000&q=85",
    imageAlt: "Airplane wing above the clouds",
    icon: Globe2,
  },
];

const DESTINATIONS = [
  {
    code: "EU",
    title: "Europe",
    description: "Explore opportunities across European destinations.",
  },
  {
    code: "GCC",
    title: "Gulf Countries",
    description: "Discover roles across Gulf markets.",
  },
  {
    code: "INT",
    title: "Australia & Beyond",
    description: "Consider other international career pathways.",
  },
];

function SectionEyebrow({ children, light = false }) {
  return (
    <div
      className={`inline-flex max-w-full items-center gap-2.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] sm:gap-3 sm:text-xs sm:tracking-[0.22em] ${
        light ? "text-yellow-300" : "text-amber-700"
      }`}
    >
      <span className="h-px w-5 shrink-0 bg-current sm:w-7" aria-hidden="true" />
      <span>{children}</span>
      <span className="h-px w-5 shrink-0 bg-current sm:w-7" aria-hidden="true" />
    </div>
  );
}

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article
      data-feature-card
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-xl hover:shadow-slate-900/10 sm:rounded-3xl"
    >
      <div className="relative h-52 shrink-0 overflow-hidden sm:h-60 lg:h-56 xl:h-60">
        <img
          src={feature.image}
          alt={feature.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#08142c]/75 via-[#08142c]/5 to-[#08142c]/10"
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#08142c]/75 px-3 py-1.5 text-[0.68rem] font-bold tracking-widest text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-xs">
          {feature.number}
        </span>
        <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-yellow-300 backdrop-blur-md transition-colors duration-300 group-hover:bg-yellow-400 group-hover:text-[#08142c] sm:bottom-5 sm:left-5 sm:h-12 sm:w-12 sm:rounded-2xl">
          <Icon size={22} aria-hidden="true" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <h3 className="text-lg font-bold leading-snug tracking-tight text-[#08142c] sm:text-xl">
          {feature.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-[0.94rem]">
          {feature.description}
        </p>
        <div
          className="mt-5 h-1 w-10 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-16 sm:mt-6"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}

function ContactItem({ icon: Icon, label, value, href, email = false }) {
  return (
    <a
      href={href}
      className="group flex min-w-0 items-start gap-3 rounded-xl p-2 transition-colors hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 sm:gap-4 sm:p-2.5"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400 sm:h-11 sm:w-11">
        <Icon size={19} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1 pt-0.5">
        <span className="block text-xs font-medium text-slate-400 sm:text-sm">
          {label}
        </span>
        <span
          className={`mt-1 block text-sm font-semibold leading-6 text-white transition-colors group-hover:text-yellow-300 sm:text-base ${
            email ? "break-all" : "break-words"
          }`}
        >
          {value}
        </span>
      </span>
    </a>
  );
}

export default function Hero() {
  const pageRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  // Keep the video and animation behavior aligned with OS accessibility settings.
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = (event) => setReduceMotion(event.matches);

    motionQuery.addEventListener("change", updateMotionPreference);
    return () => motionQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useGSAP(
    () => {
      const page = pageRef.current;
      if (!page || reduceMotion) return;

      const select = gsap.utils.selector(page);
      const one = (selector) => select(selector)[0];

      // Hero entrance: a short, sequenced reveal rather than animating every element at once.
      gsap
        .timeline({ defaults: { ease: "power3.out", overwrite: "auto" } })
        .from(select("[data-hero-badge]"), {
          autoAlpha: 0,
          y: 14,
          duration: 0.5,
        })
        .from(
          select("[data-hero-title]"),
          { autoAlpha: 0, y: 24, duration: 0.72 },
          "-=0.28"
        )
        .from(
          select("[data-hero-copy]"),
          { autoAlpha: 0, y: 16, duration: 0.55 },
          "-=0.35"
        )
        .from(
          select("[data-hero-actions]"),
          { autoAlpha: 0, y: 12, duration: 0.5 },
          "-=0.28"
        )
        .from(
          select("[data-hero-trust]"),
          { autoAlpha: 0, y: 10, duration: 0.42 },
          "-=0.25"
        )
        .from(
          select("[data-hero-visual]"),
          { autoAlpha: 0, x: 18, scale: 0.99, duration: 0.75 },
          "-=0.72"
        );

      // Small utility keeps each reveal tied to its own section.
      const reveal = (target, options = {}) => {
        if (!target) return;
        gsap.fromTo(
          target,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: options.duration ?? 0.68,
            stagger: options.stagger ?? 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: options.trigger ?? target,
              start: options.start ?? "top 84%",
              once: true,
            },
          }
        );
      };

      reveal(one("[data-about-heading]"));
      reveal(select("[data-feature-card]"), {
        trigger: one("[data-feature-grid]"),
        stagger: 0.12,
        duration: 0.62,
      });
      reveal(one("[data-contact-panel]"), {
        start: "top 88%",
        duration: 0.72,
      });

      const heroGlow = one("[data-hero-glow]");
      if (heroGlow) {
        gsap.to(heroGlow, {
          y: -10,
          scale: 1.035,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Refresh once after the initial layout. Feature images have fixed-height
      // wrappers, so loading them later will not shift section positions.
      ScrollTrigger.refresh();
    },
    { scope: pageRef, dependencies: [reduceMotion], revertOnUpdate: true }
  );

  return (
    <div ref={pageRef} className="w-full overflow-x-clip bg-white text-slate-900">
      {/* HERO: video background, high-contrast overlays, responsive two-column layout */}
      <section className="relative isolate overflow-hidden bg-[#061329] text-white">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          autoPlay={!reduceMotion}
          loop
          muted
          playsInline
          preload="metadata"
          poster={heroImg}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="https://www.pexels.com/download/video/36255198/"
            type="video/mp4"
          />
        </video>

        {/* Mobile receives a stronger overlay so copy remains readable over bright footage. */}
        <div
          className="pointer-events-none absolute inset-0 bg-[#061329]/20 sm:bg-[#061329]/20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#040d1e]/90 via-[#040d1e]/70 to-[#040d1e]/40 lg:from-[#040d1e]/95 lg:via-[#040d1e]/75 lg:to-[#040d1e]/35"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061329] via-transparent to-[#061329]/25"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-36 -top-36 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-48 -right-28 h-80 w-80 rounded-full bg-yellow-400/10 blur-[100px] sm:h-[460px] sm:w-[460px] sm:blur-[130px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid min-h-[82svh] w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 md:gap-14 md:py-24 lg:min-h-[88svh] lg:grid-cols-[minmax(0,1.12fr)_minmax(300px,0.78fr)] lg:gap-12 lg:px-10 lg:py-24 xl:gap-16">
          {/* Main message */}
          <div className="relative z-10 min-w-0 max-w-3xl">
            <div
              data-hero-badge
              className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-yellow-300/25 bg-[#071329]/55 px-3.5 py-2.5 text-[0.68rem] font-semibold leading-5 tracking-wide text-yellow-200 shadow-lg shadow-black/10 backdrop-blur-md sm:px-4 sm:text-sm"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                aria-hidden="true"
              />
              <span>Overseas Recruitment &amp; Career Guidance</span>
            </div>

            <h1
              data-hero-title
              className="mt-6 max-w-3xl break-words text-[clamp(2rem,5.3vw,2.55rem)] font-bold leading-[1.08] tracking-[-0.04em] sm:mt-7 sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Your Ambition.
              <br />
              Your Next Chapter.
              <span className="mt-1 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                A World of Opportunity.
              </span>
            </h1>

            <p
              data-hero-copy
              className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8"
            >
              Take the next step in your career with Global Crew Connect.
              Explore international employment opportunities and receive
              professional guidance throughout your recruitment journey.
            </p>

            <div
              data-hero-actions
              className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link
                to="/contact"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-bold text-[#071329] shadow-lg shadow-yellow-400/15 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071329] sm:w-auto sm:px-7 sm:text-base"
              >
                Explore Opportunities
                <ArrowRight
                  size={19}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/about"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-yellow-300/70 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200 sm:w-auto sm:px-7 sm:text-base"
              >
                Discover Our Story
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div
              data-hero-trust
              className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/15 pt-5 text-xs text-slate-200 sm:mt-8 sm:gap-x-6 sm:text-sm"
            >
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="shrink-0 text-yellow-400" aria-hidden="true" />
                Career Guidance
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="shrink-0 text-yellow-400" aria-hidden="true" />
                International Opportunities
              </span>
            </div>
          </div>

          {/* Destination panel */}
          <div
            data-hero-visual
            className="relative z-10 mx-auto w-full min-w-0 max-w-xl lg:ml-auto"
          >
            <div
              data-hero-glow
              className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-yellow-300/20 via-blue-400/10 to-transparent blur-2xl sm:-inset-5 sm:rounded-[2.5rem] sm:blur-3xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#08172d]/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:rounded-[2rem] sm:p-7 md:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5 sm:pb-6">
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">
                    Your Global Career Path
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Think beyond borders.
                  </h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                    Explore destinations and roles that align with your experience and career goals.
                  </p>
                </div>
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-yellow-300/20 bg-yellow-300/10 text-yellow-300 sm:flex">
                  <Globe2 size={24} aria-hidden="true" />
                </div>
              </div>

              <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                {DESTINATIONS.map((destination) => (
                  <div
                    key={destination.code}
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3 transition-colors duration-300 hover:border-yellow-300/40 hover:bg-white/[0.07] sm:gap-4 sm:rounded-2xl sm:p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300/10 text-[0.65rem] font-bold tracking-wide text-yellow-200 sm:h-11 sm:w-11 sm:text-xs">
                      {destination.code}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-white sm:text-base">
                        {destination.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
                        {destination.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-slate-400 transition-colors group-hover:text-yellow-300 sm:h-[18px] sm:w-[18px]"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-yellow-300/15 bg-yellow-300/[0.06] p-3.5 sm:mt-6 sm:p-4">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-yellow-300"
                  size={18}
                  aria-hidden="true"
                />
                <p className="text-xs leading-6 text-slate-200 sm:text-sm">
                  Get professional guidance as you explore your next career move.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative h-px w-full bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent"
          aria-hidden="true"
        />
      </section>

      {/* ABOUT AND SERVICES */}
      <section className="relative overflow-hidden bg-[#f7f8fb] py-16 sm:py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -right-40 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-[90px] sm:h-96 sm:w-96 sm:blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div data-about-heading className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>About Global Crew Connect</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#08142c] sm:text-4xl lg:text-5xl">
              Helping You Move Forward.
              <br className="hidden sm:block" />
              <span className="text-amber-700">Wherever Your Career Takes You.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              We help candidates explore overseas employment opportunities by
              connecting career aspirations with international opportunities
              and providing guidance throughout the recruitment process.
            </p>
            <Link
              to="/about"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-[#08142c] transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 sm:mt-8"
            >
              Learn More About Us
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div
            data-feature-grid
            className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7"
          >
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.number} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CALL TO ACTION */}
      <section className="bg-[#08142c] px-4 py-14 sm:px-8 sm:py-20 lg:px-25 lg:py-18">
        <div
          data-contact-panel
          className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white px-5 py-8 text-white shadow-lg shadow-yellow-400 sm:rounded-3xl sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-1"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-36 h-72 w-72 rounded-full bg-yellow-400/10 blur-[90px] sm:h-96 sm:w-96 sm:blur-[100px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-blue-500/15 blur-[90px] sm:h-80 sm:w-80 sm:blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative grid min-w-0 gap-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:gap-12 xl:gap-16">
            <div className="min-w-0">
              <SectionEyebrow light>Take the Next Step</SectionEyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-black">
                Your Next Opportunity Could Be Across the World.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
                Ready to explore international career opportunities? Connect
                with our team to discuss your goals and the opportunities that
                may suit you.
              </p>
              <Link
                to="/contact"
                className="group mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-bold text-[#08142c] transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 sm:mt-8 sm:w-auto sm:px-7 sm:text-base"
              >
                Apply Now
                <ArrowRight
                  size={19}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:rounded-2xl sm:p-6 md:p-8">
              <h3 className="text-lg font-bold text-black sm:text-xl">Get in Touch</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Speak with our team about your career goals.
              </p>

              <div className="mt-5 space-y-3 sm:mt-7 sm:space-y-4 bg-[#08142c] lg:p-5 p-1 rounded-xl border border-white/10 ">
                <ContactItem
                  icon={Mail}
                  label="Email Us"
                  value="info@globalcrewconnect.org"
                  href="mailto:info@globalcrewconnect.org"
                  email
                />
                <ContactItem
                  icon={Phone}
                  label="Call Us"
                  value="+91 99879 56826"
                  href="tel:+919987956826"
                />
                <ContactItem
                  icon={Phone}
                  label="Additional Contact"
                  value="+91 88502 16636"
                  href="tel:+918850216636"
                />
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 sm:mt-7 sm:pt-5">
                <p className="text-xs leading-6 text-slate-600">
                  Global Crew Connect
                  <span className="mx-2 text-yellow-400" aria-hidden="true">
                    •
                  </span>
                  Connecting Talent. Connecting the World.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
