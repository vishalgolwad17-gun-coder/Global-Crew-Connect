import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const JOBS = [
  {
    title: "Picker & Packer",
    country: "Saudi Arabia",
    category: "Warehouse & Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Organized warehouse shelving and logistics operations",
  },
  {
    title: "Mechanic",
    country: "United Arab Emirates",
    category: "Automotive",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Vehicle undergoing mechanical servicing",
  },
  {
    title: "Security Guard",
    country: "Dubai",
    category: "Security & Operations",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Professional team meeting in a workplace",
  },
  {
    title: "Driver",
    country: "Australia",
    category: "Transport",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Modern vehicle representing transport and driving roles",
  },
  {
    title: "Warehouse Worker",
    country: "Saudi Arabia",
    category: "Warehouse & Logistics",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Warehouse interior with storage racks and inventory",
  },
  {
    title: "Construction Worker",
    country: "United Arab Emirates",
    category: "Construction",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Construction site with workers and equipment",
  },
];

function JobCard({ job, index }) {
  return (
    <article
      data-job-card
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-xl hover:shadow-slate-900/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
        <img
          src={job.image}
          alt={job.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#071329]/75 via-[#071329]/5 to-[#071329]/10"
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#071329]/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md sm:left-5 sm:top-5">
          <span className="text-yellow-300">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-3 w-px bg-white/30" aria-hidden="true" />
          {job.category}
        </span>
        <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-yellow-300 backdrop-blur-md sm:bottom-5 sm:left-5">
          <BriefcaseBusiness size={21} aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold leading-snug tracking-tight text-[#08142c] sm:text-2xl">
            {job.title}
          </h3>
          <ArrowUpRight
            size={20}
            className="mt-1 shrink-0 text-slate-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-600"
            aria-hidden="true"
          />
        </div>

        <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
          <MapPin size={16} className="shrink-0 text-amber-600" aria-hidden="true" />
          {job.country}
        </p>

        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
          Explore this role and ask our team about current requirements, eligibility,
          and the recruitment process.
        </p>

        <Link
          to="/contact"
          className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-[#08142c] transition duration-200 hover:border-amber-400 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          aria-label={`Enquire about ${job.title} opportunities in ${job.country}`}
        >
          Enquire about role
          <ArrowRight
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}

export default function Jobs() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduceMotion) return;

      const select = gsap.utils.selector(root);
      const heading = select("[data-jobs-heading]")[0];
      const grid = select("[data-jobs-grid]")[0];
      const cards = select("[data-job-card]");
      const footerCta = select("[data-jobs-cta]")[0];

      if (heading) {
        gsap.fromTo(
          heading,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (grid && cards.length) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.62,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: grid,
              start: "top 84%",
              once: true,
            },
          }
        );
      }

      if (footerCta) {
        gsap.fromTo(
          footerCta,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: footerCta,
              start: "top 88%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="jobs"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#f7f8fb] py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-amber-200/25 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div data-jobs-heading className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-600 sm:text-xs">
            <span className="h-px w-7 bg-current" aria-hidden="true" />
            Career Opportunities
            <span className="h-px w-7 bg-current" aria-hidden="true" />
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#08142c] sm:text-4xl lg:text-5xl">
            Explore Roles Around the World
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Discover role categories and destinations, then contact our team to
            discuss current requirements and the next steps in your application.
          </p>
        </div>

        <div
          data-jobs-grid
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-7"
        >
          {JOBS.map((job, index) => (
            <JobCard key={job.title} job={job} index={index} />
          ))}
        </div>

        
      </div>
    </section>
  );
}
