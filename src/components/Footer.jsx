import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Mail,
  Phone,
} from "lucide-react";
import "remixicon/fonts/remixicon.css";
import logo from "../images/logo.jpeg";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Jobs", to: "/services#jobs" },
  { label: "Contact", to: "/contact" },
];

const SERVICE_LINKS = [
  { label: "International Placement", to: "/services" },
  { label: "Europe & Gulf Recruitment", to: "/services" },
  { label: "Career Guidance", to: "/services" },
  { label: "Skilled & Unskilled Placement", to: "/services" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591241608224",
    icon: "ri-facebook-circle-fill",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/globalcrewconnect/",
    icon: "ri-instagram-line",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/Globalcrewconnect",
    icon: "ri-linkedin-fill",
  },
  {
    label: "X",
    href: "https://x.com/GlobalCrewCo",
    icon: "ri-twitter-x-line",
  },
];

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex min-h-7 w-fit items-center gap-2 text-sm leading-6 text-slate-300 transition-colors duration-200 hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#071329]"
    >
      <span>{children}</span>
      <ArrowUpRight
        size={13}
        aria-hidden="true"
        className="shrink-0 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
      />
    </Link>
  );
}

function FooterHeading({ children }) {
  return (
    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white sm:text-sm">
      {children}
    </h2>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#071329] text-white">
      {/* Subtle brand lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-40 -z-10 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 left-[18%] -z-10 h-80 w-80 rounded-full bg-yellow-400/[0.07] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        {/* Footer callout */}
        

        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-[1.35fr_0.75fr_1.1fr_1.2fr] lg:gap-10 xl:gap-14">
          {/* Company / logo */}
          <div className="min-w-0">
            <Link
              to="/"
              aria-label="Global Crew Connect home"
              className="group inline-flex max-w-full items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
            >
              <span className="flex h-[62px] w-[62px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white shadow-lg shadow-black/15 transition-transform duration-300 group-hover:scale-[1.03] sm:h-[68px] sm:w-[68px]">
                <img
                  src={logo}
                  alt="Global Crew Connect logo"
                  width="68"
                  height="68"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-extrabold leading-tight tracking-[0.045em] text-yellow-300 sm:text-base lg:text-[0.93rem] xl:text-base">
                  GLOBAL CREW CONNECT
                </span>
                <span className="mt-1.5 block max-w-[230px] text-[10px] font-medium uppercase leading-4 tracking-[0.13em] text-slate-400 sm:text-[11px]">
                  Connecting Talent. Connecting the World.
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Global Crew Connect helps skilled and unskilled workers explore overseas employment opportunities across Gulf countries, Europe, and other international destinations.
            </p>

            <div className="mt-5 flex items-start gap-2.5 text-xs leading-5 text-slate-400">
              <Globe2 size={15} className="mt-0.5 shrink-0 text-yellow-300" aria-hidden="true" />
              <span>Overseas Recruitment &amp; Career Consultancy</span>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-5 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <FooterHeading>Our Services</FooterHeading>
            <ul className="mt-5 space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact and social */}
          <div className="min-w-0">
            <FooterHeading>Let&apos;s Connect</FooterHeading>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Connect with us to discuss your goals and explore your next international career step.
            </p>

            <div className="mt-5 space-y-3.5">
              <a
                href="mailto:info@globalcrewconnect.org"
                className="group flex min-w-0 items-start gap-3 rounded-md text-sm text-slate-300 transition-colors hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-yellow-300" aria-hidden="true" />
                <span className="break-all">info@globalcrewconnect.org</span>
              </a>
              <a
                href="tel:+919987956826"
                className="group flex items-center gap-3 rounded-md text-sm text-slate-300 transition-colors hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
              >
                <Phone size={17} className="shrink-0 text-yellow-300" aria-hidden="true" />
                <span>+91 99879 56826</span>
              </a>
              <a
                href="tel:+918850216636"
                className="group flex items-center gap-3 rounded-md text-sm text-slate-300 transition-colors hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
              >
                <Phone size={17} className="shrink-0 text-yellow-300" aria-hidden="true" />
                <span>+91 88502 16636</span>
              </a>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Follow Our Journey
              </p>
              <div className="flex flex-wrap gap-2.5" aria-label="Social media links">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Global Crew Connect on ${social.label} (opens in a new tab)`}
                    title={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-lg text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-yellow-300/40 hover:bg-yellow-400 hover:text-[#071329] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                  >
                    <i className={social.icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6">
          <div className="flex flex-col gap-2.5 text-xs leading-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Global Crew Connect. All rights reserved.</p>
            <p className="sm:text-right">Connecting Talent. Connecting the World.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
