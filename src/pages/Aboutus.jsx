import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const COUNTRIES = [
  {
    flag: "🇧🇪",
    name: "Belgium",
    region: "Europe",
    image:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=900&q=85",
    imageAlt: "Historic architecture in Belgium",
  },
  {
    flag: "🇷🇴",
    name: "Romania",
    region: "Europe",
    image:
      "https://images.unsplash.com/photo-1566827954254-0c0692424c04?w=900&q=85",
    imageAlt: "Historic city architecture in Romania",
  },
  {
    flag: "🇩🇰",
    name: "Denmark",
    region: "Europe",
    image:
      "https://images.unsplash.com/photo-1513622118278-bc041b3c13ed?w=900&q=85",
    imageAlt: "Colorful waterfront buildings in Denmark",
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    region: "Europe",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900&q=85",
    imageAlt: "City skyline and architecture in Germany",
  },
  {
    flag: "🇸🇦",
    name: "Saudi Arabia",
    region: "Gulf",
    image:
      "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=900&q=85",
    imageAlt: "Architecture in Saudi Arabia",
  },
  {
    flag: "🇦🇪",
    name: "United Arab Emirates",
    region: "Gulf",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=85",
    imageAlt: "Modern skyline in the United Arab Emirates",
  },
  {
    flag: "🏙️",
    name: "Dubai",
    region: "Gulf",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&q=85",
    imageAlt: "Dubai skyline at dusk",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    region: "Asia Pacific",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=900&q=85",
    imageAlt: "Sydney Harbour in Australia",
  },
  {
    flag: "🇧🇬",
    name: "Bulgaria",
    region: "Europe",
    image:
      "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=900&q=85",
    imageAlt: "Historic architecture in Bulgaria",
  },
];

const BENEFITS = [
  {
    number: "01",
    title: "Personalized Guidance",
    description:
      "Get support throughout your recruitment journey, from exploring suitable roles to preparing for the next step.",
    icon: Users,
  },
  {
    number: "02",
    title: "Employer Connections",
    description:
      "Explore international job opportunities and connect with employers through a clear, professional process.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "End-to-End Support",
    description:
      "Receive guidance with recruitment steps, interview preparation, and the documentation process.",
    icon: ShieldCheck,
  },
];

function SectionEyebrow({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] sm:text-xs ${
        light ? "text-yellow-300" : "text-amber-600"
      }`}
    >
      <span className="h-px w-7 bg-current" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function BenefitCard({ benefit }) {
  const Icon = benefit.icon;

  return (
    <article
      data-benefit-card
      className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7 lg:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors duration-300 group-hover:bg-yellow-400 group-hover:text-[#08142c]">
          <Icon size={23} aria-hidden="true" />
        </span>
        <span className="text-xs font-bold tracking-[0.18em] text-slate-300">
          {benefit.number}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-[#08142c] sm:text-2xl">
        {benefit.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
        {benefit.description}
      </p>
      <div
        className="mt-6 h-1 w-10 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-16"
        aria-hidden="true"
      />
    </article>
  );
}

function CountryCard({ country }) {
  return (
    <article
      data-country-card
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg shadow-slate-950/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/20"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <img
          src={country.image}
          alt={country.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#08142c]/60 via-transparent to-transparent"
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#08142c]/65 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
          {country.region}
        </span>
      </div>
      <div className="flex flex-1 items-center gap-3 p-4 sm:p-5">
        <span className="text-3xl" role="img" aria-label={`${country.name} flag`}>
          {country.flag}
        </span>
        <h3 className="text-base font-bold leading-snug text-[#08142c] sm:text-lg">
          {country.name}
        </h3>
        <ArrowUpRight
          size={18}
          className="ml-auto shrink-0 text-slate-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-600"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}

export default function About() {
  const pageRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Keep the hero video still for visitors who prefer reduced motion.
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(motionQuery.matches);

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", updateMotionPreference);
      return () => motionQuery.removeEventListener("change", updateMotionPreference);
    }

    // Fallback for older browsers.
    motionQuery.addListener(updateMotionPreference);
    return () => motionQuery.removeListener(updateMotionPreference);
  }, []);

  useGSAP(
    () => {
      const root = pageRef.current;
      if (!root) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduceMotion) return;

      const select = gsap.utils.selector(root);
      const first = (selector) => select(selector)[0];

      // Hero content enters once, without affecting the background image.
      const heroItems = select("[data-hero-item]");
      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          }
        );
      }

      // Reusable scroll reveal helper, scoped to this page.
      const reveal = (targetSelector, triggerSelector, options = {}) => {
        const targets = select(targetSelector);
        const trigger = first(triggerSelector);
        if (!targets.length || !trigger) return;

        gsap.fromTo(
          targets,
          { autoAlpha: 0, y: options.y ?? 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: options.duration ?? 0.7,
            stagger: options.stagger ?? 0.12,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger,
              start: options.start ?? "top 82%",
              once: true,
            },
          }
        );
      };

      reveal("[data-story-copy]", "[data-story-section]");
      reveal("[data-story-image]", "[data-story-section]", {
        y: 18,
        duration: 0.85,
      });
      reveal("[data-principle-card]", "[data-principles-grid]", {
        stagger: 0.14,
      });
      reveal("[data-benefit-card]", "[data-benefit-grid]", {
        stagger: 0.13,
      });
      reveal("[data-country-card]", "[data-country-grid]", {
        stagger: 0.07,
        y: 22,
        duration: 0.55,
        start: "top 86%",
      });
      reveal("[data-cta-content]", "[data-cta-section]", { y: 24 });
    },
    { scope: pageRef }
  );

  return (
    <main ref={pageRef} className="overflow-hidden bg-white text-[#08142c]">
      {/* Hero */}
      <section className="about-hero relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#071329] text-white sm:min-h-[610px] lg:min-h-[680px]">
        {/* Poster image stays underneath the video as a reliable fallback. */}
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=2000&q=85"
          alt=""
          fetchPriority="high"
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* Decorative background video. Muted + playsInline support autoplay on mobile. */}
        {!prefersReducedMotion && (
          <video
            className="absolute inset-0 z-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=2000&q=85"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source
              src="meetingvideo.mp4"
              type="video/mp4"
            />
          </video>
        )}

        {/* Navy overlays keep all text readable over changing frames. */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#061329]/20" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(4,13,30,0.96)_0%,rgba(4,13,30,0.83)_48%,rgba(4,13,30,0.52)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#071329] to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-28 -top-28 z-10 h-80 w-80 rounded-full bg-yellow-300/10 blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative z-20 mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <div
              data-hero-item
              className="inline-flex items-center gap-2.5 rounded-full border border-yellow-300/25 bg-white/[0.06] px-4 py-2.5 text-xs font-semibold tracking-wide text-yellow-200 backdrop-blur-md sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-yellow-400" aria-hidden="true" />
              About Global Crew Connect
            </div>
            <h1
              data-hero-item
              className="mt-7 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Connecting Talent
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                With Global Opportunities
              </span>
            </h1>
            <p
              data-hero-item
              className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
            >
              Your partner for overseas recruitment, career guidance, and
              international job placement. We help you explore the next step in
              your career with clarity and confidence.
            </p>
            <div data-hero-item className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                href="#our-story"
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 bg-white/[0.05] px-7 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:border-yellow-300/60 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
              >
                Discover Our Story
              </a>
            </div>
          </div>

          <div data-hero-item className="w-full max-w-lg lg:ml-auto">
            <div className="rounded-3xl border border-white/20 bg-[#091a33]/75 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
              <div className="flex items-center gap-4 border-b border-white/10 pb-5 sm:pb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300 sm:h-14 sm:w-14">
                  <Globe2 size={27} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
                    Global Career Pathways
                  </p>
                  <h2 className="mt-1.5 text-xl font-bold text-white sm:text-2xl">
                    Your future, in view.
                  </h2>
                </div>
              </div>
              <div className="mt-5 space-y-4">
                {[
                  "Explore international opportunities",
                  "Get professional career guidance",
                  "Prepare for your next career step",
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
            </div>
          </div>
        </div>
      </section>

      {/* Company story */}
      <section
        id="our-story"
        data-story-section
        className="relative bg-white py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 md:gap-14 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div data-story-copy>
            <SectionEyebrow>Our Story</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#08142c] sm:text-4xl lg:text-5xl">
              Building Better Futures Across Borders
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Global Crew Connect was founded with a mission to help skilled and
              unskilled workers explore employment opportunities overseas.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              We connect candidates with potential employers across destinations
              including Europe, Saudi Arabia, the United Arab Emirates, and
              Australia, while providing guidance throughout the recruitment
              process.
            </p>
            <div className="mt-8 border-l-2 border-yellow-400 pl-5">
              <p className="text-lg font-semibold leading-7 text-[#08142c] sm:text-xl">
                Connecting talent. Connecting the world.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                A people-first approach to international career opportunities.
              </p>
            </div>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 font-bold text-[#08142c] transition-colors hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Get in Touch
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div data-story-image className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-yellow-300/30 via-blue-200/30 to-transparent blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 p-2 shadow-xl shadow-slate-900/10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85"
                alt="Team collaborating around a table"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover sm:aspect-[5/4]"
              />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur sm:left-8 sm:right-8 sm:p-5">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#08142c] text-yellow-300 sm:h-12 sm:w-12">
                  <Target size={23} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-[#08142c] sm:text-lg">
                    Focused on your next step
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                    Guidance at every stage of your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="relative overflow-hidden bg-[#08142c] py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-36 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-44 -left-36 h-96 w-96 rounded-full bg-yellow-400/[0.08] blur-[100px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <SectionEyebrow light>What Guides Us</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Purpose Behind Every Connection
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              The principles that shape how we support candidates and connect
              them with opportunities.
            </p>
          </div>

          <div data-principles-grid className="grid gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
            <article data-principle-card className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 sm:p-8 lg:p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300">
                <Target size={28} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-bold sm:text-3xl">Our Mission</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                To help people explore international employment opportunities
                through reliable guidance, clear communication, and professional
                recruitment support.
              </p>
            </article>
            <article data-principle-card className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 sm:p-8 lg:p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300">
                <Globe2 size={28} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-bold sm:text-3xl">Our Vision</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                To become a trusted recruitment consultancy that connects talent
                with global employers and helps candidates move toward meaningful
                career opportunities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[#f7f8fb] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Why Global Crew Connect</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#08142c] sm:text-4xl lg:text-5xl">
              Support That Moves You Forward
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Career decisions are important. Our approach is built around clear
              communication, practical guidance, and support through the process.
            </p>
          </div>

          <div data-benefit-grid className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {BENEFITS.map((benefit) => (
              <BenefitCard key={benefit.number} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="relative overflow-hidden bg-[#102447] py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-36 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-[100px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow light>Global Reach</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Countries We Serve
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Explore international destinations where candidates may find
              opportunities through our recruitment network.
            </p>
          </div>

          <div data-country-grid className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:mt-14 lg:grid-cols-3 xl:grid-cols-4">
            {COUNTRIES.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section data-cta-section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#08142c] px-6 py-10 text-center text-white shadow-xl shadow-slate-900/10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute -right-28 -top-36 h-80 w-80 rounded-full bg-yellow-400/10 blur-[90px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-blue-500/15 blur-[90px]" aria-hidden="true" />
          <div data-cta-content className="relative mx-auto max-w-3xl">
            <SectionEyebrow light>Take the Next Step</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Start Your International Career?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Connect with Global Crew Connect to discuss your goals and explore
              overseas opportunities that may suit your experience.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-[#08142c] transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200 sm:w-auto"
            >
              Contact Us Today
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
