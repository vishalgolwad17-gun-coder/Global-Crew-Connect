
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "./Footer";
import CandidateRegistrationForm from "./CandidateResgistrationForm";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HERO_POSTER =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=85";

const HERO_VIDEO = "https://www.pexels.com/download/video/8865638/";

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Phone numbers",
    value: "+91 99879 56826",
    secondaryValue: "+91 88502 16636",
    href: "tel:+919987956826",
    secondaryHref: "tel:+918850216636",
  },
  {
    icon: Mail,
    label: "Email address",
    value: "info@globalcrewconnect.org",
    href: "mailto:info@globalcrewconnect.org",
    email: true,
  },
  {
    icon: MapPin,
    label: "Office location",
    value: "Mumbai, Maharashtra, India",
  },
  {
    icon: Clock3,
    label: "Working hours",
    value: "Available 24/7",
  },
];

const BENEFITS = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Clear communication",
    description:
      "Get guidance on the recruitment process and understand the next steps for your career journey.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Opportunity-focused support",
    description:
      "Explore relevant international opportunities and receive professional support as you evaluate your options.",
  },
  {
    number: "03",
    icon: Users,
    title: "Personal guidance",
    description:
      "Discuss your experience and career goals with our team to understand possible pathways abroad.",
  },
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

function ContactDetail({ detail }) {
  const Icon = detail.icon;

  return (
    <div className="flex min-w-0 items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300 sm:h-12 sm:w-12">
        <Icon size={21} aria-hidden="true" />
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          {detail.label}
        </p>

        {detail.href ? (
          <a
            href={detail.href}
            className={`mt-2 block text-sm font-semibold leading-6 text-white transition-colors hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 sm:text-base ${
              detail.email ? "break-all" : "break-words"
            }`}
          >
            {detail.value}
          </a>
        ) : (
          <p className="mt-2 break-words text-sm font-semibold leading-6 text-white sm:text-base">
            {detail.value}
          </p>
        )}

        {detail.secondaryValue && (
          <a
            href={detail.secondaryHref}
            className="mt-1 block text-sm leading-6 text-slate-300 transition-colors hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
          >
            {detail.secondaryValue}
          </a>
        )}
      </div>
    </div>
  );
}

function BenefitCard({ benefit }) {
  const Icon = benefit.icon;

  return (
    <article
      data-benefit-card
      className="group h-full rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7 lg:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 transition-colors duration-300 group-hover:bg-yellow-400 group-hover:text-[#08142c]">
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

export default function Contact() {
  const pageRef = useRef(null);
  const videoRef = useRef(null);

  const [reduceMotion, setReduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = (event) => {
      setReduceMotion(event.matches);
    };

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", updateMotionPreference);

      return () =>
        motionQuery.removeEventListener(
          "change",
          updateMotionPreference
        );
    }

    motionQuery.addListener(updateMotionPreference);

    return () =>
      motionQuery.removeListener(updateMotionPreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return undefined;

    if (reduceMotion) {
      video.pause();
      return undefined;
    }

    let observer;

    const attemptPlay = () => {
      const playPromise = video.play();

      if (playPromise?.catch) {
        playPromise.catch(() => {
          // Keep the poster visible if autoplay is blocked.
        });
      }
    };

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            attemptPlay();
          } else {
            video.pause();
          }
        },
        { threshold: 0.05 }
      );

      observer.observe(video);
    } else {
      attemptPlay();
    }

    return () => {
      observer?.disconnect();
      video.pause();
    };
  }, [reduceMotion]);

  useGSAP(
    () => {
      const root = pageRef.current;

      if (!root || reduceMotion) return;

      const select = gsap.utils.selector(root);
      const first = (selector) => select(selector)[0];

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
          overwrite: "auto",
        },
      });

      [
        ["[data-hero-eyebrow]", 0, 12, 0.42],
        ["[data-hero-title]", 0.1, 24, 0.68],
        ["[data-hero-copy]", 0.26, 16, 0.52],
        ["[data-hero-actions]", 0.4, 14, 0.48],
        ["[data-hero-panel]", 0.18, 18, 0.68],
      ].forEach(([selector, position, y, duration]) => {
        const target = first(selector);

        if (!target) return;

        heroTimeline.fromTo(
          target,
          {
            autoAlpha: 0,
            y,
            ...(selector === "[data-hero-panel]"
              ? { x: 12, scale: 0.985 }
              : {}),
          },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration,
            clearProps: "transform,opacity,visibility",
          },
          position
        );
      });

      const reveal = (
        targetSelector,
        triggerSelector,
        options = {}
      ) => {
        const targets = select(targetSelector);
        const trigger = first(triggerSelector);

        if (!targets.length || !trigger) return;

        gsap.fromTo(
          targets,
          {
            autoAlpha: 0,
            y: options.y ?? 24,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: options.duration ?? 0.65,
            stagger: options.stagger ?? 0.1,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            immediateRender: false,
            scrollTrigger: {
              trigger,
              start: options.start ?? "top 84%",
              once: true,
              invalidateOnRefresh: true,
            },
          }
        );
      };

      reveal(
        "[data-contact-heading-item]",
        "[data-contact-heading]",
        {
          y: 18,
          duration: 0.55,
          stagger: 0.09,
        }
      );

      reveal("[data-contact-card]", "[data-contact-grid]", {
        y: 26,
        duration: 0.65,
      });

      reveal("[data-benefit-card]", "[data-benefit-grid]", {
        y: 24,
        stagger: 0.13,
        duration: 0.6,
      });

      reveal("[data-cta-content]", "[data-cta-section]", {
        y: 22,
      });
    },
    {
      scope: pageRef,
      dependencies: [reduceMotion],
      revertOnUpdate: true,
    }
  );

  return (
    <div
      ref={pageRef}
      className="overflow-hidden bg-white text-[#08142c]"
    >
      {/* Hero section */}
      <section className="relative isolate overflow-hidden bg-[#071329] text-white">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#071329]"
          aria-hidden="true"
        >
          <img
            src={HERO_POSTER}
            alt=""
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
          />

          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
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
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[#061329]/20"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(4,13,30,0.96)_0%,rgba(4,13,30,0.84)_52%,rgba(4,13,30,0.58)_100%)]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-[#071329] via-[#071329]/30 to-transparent"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -left-28 -top-36 z-[1] h-96 w-96 rounded-full bg-blue-500/10 blur-[110px]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-44 right-0 z-[1] h-96 w-96 rounded-full bg-yellow-400/10 blur-[110px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-5 py-16 sm:min-h-[600px] sm:px-8 sm:py-20 md:gap-12 lg:min-h-[640px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div
              data-hero-eyebrow
              className="inline-flex items-center gap-2.5 rounded-full border border-yellow-300/25 bg-white/[0.06] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-200 backdrop-blur-md sm:text-xs"
            >
              <span
                className="h-2 w-2 rounded-full bg-yellow-400"
                aria-hidden="true"
              />
              Contact Global Crew Connect
            </div>

            <h1
              data-hero-title
              className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Your next chapter.
              <br />
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Starts with a conversation.
              </span>
            </h1>

            <p
              data-hero-copy
              className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
            >
              Speak with our team about your experience, goals, and the
              international employment opportunities you would like
              to explore.
            </p>

            <div
              data-hero-actions
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                href="tel:+919987956826"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-[#071329] shadow-lg shadow-yellow-400/10 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
              >
                <Phone size={18} aria-hidden="true" />
                Call Our Team
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href="mailto:info@globalcrewconnect.org"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.05] px-7 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:border-yellow-300/60 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
              >
                <Mail size={18} aria-hidden="true" />
                Email Us
              </a>
            </div>
          </div>

          <aside
            data-hero-panel
            className="relative mx-auto w-full max-w-lg lg:ml-auto"
            aria-label="Contact information summary"
          >
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-300/20 via-blue-400/10 to-transparent blur-2xl"
              aria-hidden="true"
            />

            <div className="relative rounded-3xl border border-white/20 bg-[#091a33]/85 p-5 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-7">
              <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300 sm:h-14 sm:w-14">
                  <Globe2 size={27} aria-hidden="true" />
                </span>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300 sm:text-xs">
                    Let's Connect
                  </p>
                  <h2 className="mt-1.5 text-xl font-bold text-white sm:text-2xl">
                    We're here to help
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  "Discuss your career goals",
                  "Understand the recruitment process",
                  "Explore international destinations",
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

              <p className="mt-6 rounded-2xl border border-yellow-300/15 bg-yellow-300/[0.06] p-4 text-sm leading-6 text-slate-200">
                Connecting Talent. Connecting the World.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Contact information and candidate form */}
      <section className="bg-[#f7f8fb] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div
            data-contact-heading
            className="mx-auto max-w-3xl text-center"
          >
            <div data-contact-heading-item>
              <Eyebrow>Get in Touch</Eyebrow>
            </div>

            <h2
              data-contact-heading-item
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#08142c] sm:text-4xl lg:text-5xl"
            >
              We'd love to hear from you.
            </h2>

            <p
              data-contact-heading-item
              className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
            >
              Reach out to discuss your questions and learn more about
              our overseas recruitment and career guidance services.
            </p>
          </div>

          {/* Updated layout: no gateway card */}
          <div
            data-contact-grid
            className="mt-10 grid grid-cols-1 items-start gap-8 lg:mt-14"
          >
            {/* Contact information */}
            <div
              data-contact-card
              className="relative overflow-hidden rounded-3xl bg-[#08142c] p-6 text-white shadow-xl shadow-slate-900/10 sm:p-8 lg:p-9"
            >
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]"
                aria-hidden="true"
              />

              <div className="relative">
                <Eyebrow light>Contact Information</Eyebrow>

                <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
                  Let's find a way forward.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                  Choose the contact method that works best for you.
                  Our team is available to discuss your questions and
                  career interests.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                  {CONTACT_DETAILS.map((detail) => (
                    <ContactDetail
                      key={detail.label}
                      detail={detail}
                    />
                  ))}
                </div>

                <div className="mt-7 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85"
                    alt="Professionals meeting and discussing work"
                    loading="lazy"
                    className="h-40 w-full object-cover sm:h-52"
                  />
                </div>
              </div>
            </div>

            {/* Candidate registration form */}
            <div className="w-full min-w-0">
              <CandidateRegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why contact us */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Why Contact Us</Eyebrow>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#08142c] sm:text-4xl lg:text-5xl">
              Your career journey starts here.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Get clear information and discuss possible next steps
              for your international career with our team.
            </p>
          </div>

          <div
            data-benefit-grid
            className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {BENEFITS.map((benefit) => (
              <BenefitCard
                key={benefit.number}
                benefit={benefit}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section
        data-cta-section
        className="bg-[#f7f8fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#08142c] px-6 py-10 text-white shadow-xl shadow-slate-900/10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-yellow-400/10 blur-[90px]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-36 -left-24 h-72 w-72 rounded-full bg-blue-500/15 blur-[90px]"
            aria-hidden="true"
          />

          <div
            data-cta-content
            className="relative mx-auto flex max-w-5xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
          >
            <div className="max-w-2xl">
              <Eyebrow light>Take the Next Step</Eyebrow>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Ready to explore your future abroad?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Start a conversation with Global Crew Connect about
                your career goals and international employment options.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0 lg:flex-col">
              <a
                href="tel:+919987956826"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-[#08142c] transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
              >
                <Phone size={17} aria-hidden="true" />
                Call Our Team
                <ArrowRight size={17} aria-hidden="true" />
              </a>

              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition-colors hover:border-yellow-300/50 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
              >
                Explore Services
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
