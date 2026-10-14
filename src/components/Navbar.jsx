import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import logo from "../images/logo.jpeg";

gsap.registerPlugin(useGSAP);

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "Blogs", path: "/blogs" },
];

const PHONE_NUMBER = "+91 99879 56826";
const PHONE_LINK = "tel:+919987956826";
const EMAIL_ADDRESS = "info@globalcrewconnect.org";

function getNavLinkClass(isActive) {
  return [
    "relative inline-flex min-h-11 items-center justify-center rounded-xl px-3.5 py-2.5 text-sm font-semibold",
    "whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300",
    isActive
      ? "bg-white/[0.07] text-yellow-300 shadow-inner shadow-white/[0.03]"
      : "text-slate-200 hover:bg-white/[0.05] hover:text-yellow-300",
  ].join(" ");
}

export default function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Close the mobile menu after route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Escape closes the mobile navigation for keyboard users.
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // One-time, restrained entrance animation for the navbar.
  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduceMotion) return;

      const select = gsap.utils.selector(rootRef);
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out", overwrite: "auto" },
      });

      timeline
        .from(select("[data-nav-shell]"), {
          y: -12,
          autoAlpha: 0,
          duration: 0.45,
        })
        .from(
          select("[data-nav-brand]"),
          { x: -8, autoAlpha: 0, duration: 0.35 },
          "-=0.18"
        )
        .from(
          select("[data-desktop-link]"),
          { y: -5, autoAlpha: 0, duration: 0.24, stagger: 0.045 },
          "-=0.12"
        );
    },
    { scope: rootRef }
  );

  // Use GSAP for the mobile panel animation, without CSS height transitions competing with it.
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return undefined;

    const links = menu.querySelectorAll("[data-mobile-link]");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.killTweensOf([menu, ...links]);

    if (reduceMotion) {
      gsap.set(menu, {
        height: isOpen ? "auto" : 0,
        autoAlpha: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
      });
      gsap.set(links, { clearProps: "transform,opacity,visibility" });
      return undefined;
    }

    if (isOpen) {
      const timeline = gsap.timeline();
      timeline
        .set(menu, { visibility: "visible", height: 0, autoAlpha: 0 })
        .to(menu, {
          height: "auto",
          autoAlpha: 1,
          duration: 0.3,
          ease: "power3.out",
        })
        .fromTo(
          links,
          { y: 8, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.22,
            stagger: 0.045,
            ease: "power2.out",
          },
          "-=0.13"
        );

      return () => timeline.kill();
    }

    const currentHeight = menu.getBoundingClientRect().height;
    gsap.set(menu, {
      height: currentHeight,
      autoAlpha: 1,
      visibility: currentHeight > 0 ? "visible" : "hidden",
    });

    const tween = gsap.to(menu, {
      height: 0,
      autoAlpha: 0,
      duration: 0.2,
      ease: "power2.inOut",
      onComplete: () => gsap.set(menu, { visibility: "hidden" }),
    });

    return () => tween.kill();
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div ref={rootRef} className="min-h-screen">
      {/* Utility bar: shown only when there is enough horizontal space. */}
      <div className="hidden border-b border-white/[0.08] bg-[#050d1d] xl:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2.5 text-xs 2xl:px-8">
          <p className="text-slate-300">
            Overseas Recruitment
            <span className="mx-2 text-yellow-400" aria-hidden="true">
              /
            </span>
            International Career Guidance
          </p>

          <div className="flex items-center gap-6 text-slate-300">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-yellow-300"
            >
              <Mail size={14} className="text-yellow-400" aria-hidden="true" />
              {EMAIL_ADDRESS}
            </a>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 whitespace-nowrap font-semibold text-yellow-300 transition-colors hover:text-yellow-200"
            >
              <Phone size={14} aria-hidden="true" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>

      {/* Primary navigation */}
      <nav
        data-nav-shell=""
        aria-label="Primary navigation"
        className="sticky top-0 z-50 border-b border-white/10 bg-[#08142c]/95 shadow-[0_8px_28px_rgba(0,0,0,0.16)] backdrop-blur-xl"
      >
        <div className="mx-auto flex min-h-[70px] max-w-7xl items-center justify-between gap-3 px-4 sm:min-h-[76px] sm:px-6 lg:px-11 xl:gap-8">
          {/* Brand */}
          <Link
            to="/"
            data-nav-brand=""
            aria-label="Global Crew Connect home"
            onClick={closeMenu}
            className="group flex min-w-0 flex-1 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 sm:flex-none sm:gap-3 xl:max-w-full"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white shadow-sm sm:h-11 sm:w-11">
              <img
                src={logo}
                alt=""
                width="44"
                height="44"
                className="h-full w-full object-contain"
              />
            </span>

            <span className="min-w-0">
              <span className="block truncate text-[0.69rem] font-extrabold leading-tight tracking-[0.035em] text-yellow-400 transition-colors group-hover:text-yellow-300 sm:text-sm sm:tracking-[0.055em] lg:text-[0.92rem] xl:text-[0.88rem] 2xl:text-[0.95rem]">
                GLOBAL CREW CONNECT
              </span>
              <span className="mt-1 hidden truncate text-[0.62rem] font-medium uppercase tracking-[0.13em] text-slate-400 sm:block lg:text-[0.66rem] lg:tracking-[0.13em] 2xl:tracking-[0.16em]">
                Connecting Talent. Connecting the World.
              </span>
            </span>
          </Link>

          {/* Desktop links sit to the right of the brand; no desktop CTA leaves no empty right column. */}
          <div className="ml-auto hidden shrink-0 items-center justify-end gap-1 xl:flex xl:gap-8 2xl:gap-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                data-desktop-link=""
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile and tablet menu control */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="global-crew-mobile-menu"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition-colors hover:border-yellow-300/40 hover:bg-white/[0.1] hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 xl:hidden sm:h-11 sm:w-11"
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile / tablet dropdown panel */}
        <div
          ref={mobileMenuRef}
          id="global-crew-mobile-menu"
          aria-hidden={!isOpen}
          inert={!isOpen}
          className="absolute inset-x-0 top-full overflow-hidden border-b border-white/10 bg-[#0b1b36] shadow-xl shadow-black/20 xl:hidden"
          style={{ height: 0, opacity: 0, visibility: "hidden" }}
        >
          <div className="mx-auto max-w-7xl px-4 pb-5 pt-4 sm:px-6">
            <nav aria-label="Mobile navigation">
              <div className="grid gap-1.5 sm:grid-cols-2">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    data-mobile-link=""
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      [
                        "flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold",
                        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300",
                        isActive
                          ? "bg-yellow-400/10 text-yellow-300"
                          : "text-slate-200 hover:bg-white/[0.06] hover:text-yellow-300",
                      ].join(" ")
                    }
                  >
                    {link.name}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </NavLink>
                ))}
              </div>

              <div className="mt-4 grid gap-2.5 border-t border-white/10 pt-4 sm:grid-cols-2">
                <a
                  href={PHONE_LINK}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-bold text-[#08142c] transition-colors hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
                >
                  <Phone size={17} aria-hidden="true" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-yellow-300/40 hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
                >
                  <Mail size={17} className="shrink-0" aria-hidden="true" />
                  <span>Email Our Team</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
}
