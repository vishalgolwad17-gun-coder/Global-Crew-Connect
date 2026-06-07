import { useState, useEffect, useRef } from "react";

const JOBS = [
  { title: "Picker & Packer", cat: "Logistics" },
  { title: "Mechanics", cat: "Technical" },
  { title: "Security Guards", cat: "Security" },
  { title: "Loaders & Unloaders", cat: "Logistics" },
  { title: "Drivers", cat: "Transport" },
  { title: "Warehouse Workers", cat: "Logistics" },
  { title: "Construction Workers", cat: "Construction" },
  { title: "General Laborers", cat: "General" },
];

const COUNTRIES = [
  { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", desc: "Booming economy with vast infrastructure projects and high demand for skilled labor." },
  { name: "United Arab Emirates", code: "AE", flag: "🇦🇪", desc: "A global hub of commerce offering competitive salaries and world-class living standards." },
  { name: "Dubai", code: "DU", flag: "🇦🇪", desc: "The city of opportunity — premier destination for career growth and financial advancement." },
  { name: "Australia", code: "AU", flag: "🇦🇺", desc: "Stable economy, high wages, and excellent quality of life for migrant workers." },
];

const SERVICES = [
  { num: "01", title: "International Placement", desc: "End-to-end recruitment support — from initial screening to final placement with verified overseas employers." },
  { num: "02", title: "Gulf Recruitment", desc: "Deep expertise in Gulf market recruitment across Saudi Arabia, UAE, Dubai and neighbouring nations." },
  { num: "03", title: "Career Counselling", desc: "Personalised guidance to help candidates navigate overseas employment pathways with clarity and confidence." },
  { num: "04", title: "Documentation Support", desc: "Full assistance with visa processing, attestation, and all required documentation for a smooth transition." },
];

const STATS = [
  { val: "15+", label: "Partner Countries" },
  { val: "200+", label: "Employer Partners" },
  { val: "98%", label: "Placement Rate" },
];

const WHY = [
  { icon: "🌐", t: "Global Network", d: "Access to verified employers in 15+ countries" },
  { icon: "⚡", t: "Fast Placement", d: "Average placement time of 30–45 days" },
  { icon: "🛡️", t: "Fully Verified", d: "All job offers screened and authenticated" },
  { icon: "📋", t: "End-to-End Support", d: "Visa, docs, and pre-departure assistance" },
];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Label({ text, light = false, center = false }) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <div className="w-7 h-0.5" style={{ background: "#c8a84b" }} />
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#c8a84b" }}>{text}</span>
      <div className="w-7 h-0.5" style={{ background: "#c8a84b" }} />
    </div>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const scrollY = useScrollY();
  const navSolid = scrollY > 40;

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="overflow-x-hidden" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#f8f7f4", color: "#06102b" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        ::selection{background:#c8a84b;color:#000;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:none}}
        @keyframes pulse{0%,100%{opacity:0.6}50%{opacity:1}}
        .nav-link{position:relative;cursor:pointer;background:none;border:none;font-family:inherit;color:#fff;font-size:13px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;padding:6px 0;opacity:0.7;transition:opacity 0.2s;}
        .nav-link:hover{opacity:1;}
        .nav-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:#c8a84b;transition:width 0.3s;}
        .nav-link:hover::after{width:100%;}
        .job-card{transition:background 0.25s,border-color 0.25s;}
        .job-card:hover{background:#06102b!important;border-color:#c8a84b!important;}
        .job-card:hover .job-num{color:#c8a84b!important;}
        .job-card:hover .job-title{color:#fff!important;}
        .job-card:hover .job-cat{color:#c8a84b!important;}
        .country-card{transition:transform 0.3s,box-shadow 0.3s;}
        .country-card:hover{transform:translateY(-6px);box-shadow:0 24px 64px rgba(6,16,43,0.22)!important;}
        .svc-item{transition:background 0.3s;}
        .svc-item:hover{background:#06102b!important;}
        .svc-item:hover .svc-num{color:#c8a84b!important;}
        .svc-item:hover .svc-title{color:#fff!important;}
        .svc-item:hover .svc-desc{color:rgba(255,255,255,0.6)!important;}
        .contact-card{transition:border-color 0.2s;}
        .contact-card:hover{border-color:#c8a84b!important;}
        .contact-card:hover .contact-icon{background:#c8a84b!important;}
        .gold-btn{transition:transform 0.2s,box-shadow 0.2s;}
        .gold-btn:hover{transform:translateY(-2px);box-shadow:0 14px 40px rgba(200,168,75,0.4)!important;}
        .outline-btn{transition:border-color 0.2s;}
        .outline-btn:hover{border-color:rgba(255,255,255,0.5)!important;}
        .footer-link{background:none;border:none;cursor:pointer;font-family:inherit;font-size:13px;padding:0;color:rgba(255,255,255,0.5);transition:color 0.2s;}
        .footer-link:hover{color:#c8a84b;}
      `}</style>

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: navSolid ? "rgba(6,16,43,0.97)" : "transparent",
          borderBottom: navSolid ? "1px solid rgba(200,168,75,0.12)" : "1px solid transparent",
          backdropFilter: navSolid ? "blur(20px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => go("home")}>
            <div className="w-10 h-10 rounded-md flex items-center justify-center text-lg flex-shrink-0" style={{ background: "linear-gradient(135deg,#c8a84b,#e2c26a)" }}>🌐</div>
            <div>
              <div className="text-white font-black text-sm tracking-wide leading-none" style={{ fontFamily: "'Syne',sans-serif" }}>GLOBAL CREW</div>
              <div className="text-xs font-bold tracking-[3px] uppercase leading-snug" style={{ color: "#c8a84b", fontFamily: "'Syne',sans-serif" }}>Connect</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-9">
            {["home","about","services","jobs","countries","contact"].map(s => (
              <button key={s} className="nav-link" onClick={() => go(s)}>{s}</button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919987956826"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded text-sm font-semibold tracking-wide transition-colors duration-200 hover:bg-[rgba(200,168,75,0.12)]"
              style={{ border: "1px solid rgba(200,168,75,0.4)", color: "#c8a84b", textDecoration: "none" }}
            >
              <span>📞</span> +91 99879 56826
            </a>
            <button
              className="lg:hidden text-white text-2xl p-1 bg-transparent border-none cursor-pointer"
              onClick={() => setMenu(!menu)}
            >
              {menu ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-400"
          style={{
            maxHeight: menu ? "400px" : "0",
            background: "rgba(6,16,43,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: menu ? "1px solid rgba(200,168,75,0.15)" : "none",
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-1">
            {["home","about","services","jobs","countries","contact"].map(s => (
              <button
                key={s}
                onClick={() => go(s)}
                className="text-left text-white font-semibold text-sm tracking-[1.5px] uppercase py-3 border-b border-white/10 bg-transparent border-x-0 border-t-0 cursor-pointer"
                style={{ fontFamily: "inherit" }}
              >
                {s}
              </button>
            ))}
            <a href="tel:+919987956826" className="mt-3 font-bold text-base py-2 no-underline" style={{ color: "#c8a84b" }}>
              📞 +91 99879 56826
            </a>
            <a href="tel:+918850216636" className="font-bold text-base py-2 no-underline" style={{ color: "#c8a84b" }}>
              📞 +91 88502 16636
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-[72px]" style={{ background: "#06102b" }}>
        {/* Grid bg */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="none">
          <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Gold orbs */}
        <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(200,168,75,0.08) 0%,transparent 70%)" }} />
        <div className="absolute left-[-5%] bottom-[-10%] w-[350px] h-[350px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(200,168,75,0.05) 0%,transparent 70%)" }} />
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg,transparent 0%,#c8a84b 30%,#e2c26a 50%,#c8a84b 70%,transparent 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left */}
            <div style={{ animation: "fadeUp 0.9s ease both" }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm mb-9" style={{ background: "rgba(200,168,75,0.15)", border: "1px solid rgba(200,168,75,0.3)" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#c8a84b", animation: "pulse 2s infinite" }} />
                <span className="text-[11px] font-bold tracking-[2.5px] uppercase" style={{ color: "#c8a84b" }}>Overseas Recruitment & Career Consultancy</span>
              </div>

              <h1 className="font-black leading-[1.0] mb-5" style={{ fontFamily: "'Syne',sans-serif", letterSpacing: "-2px" }}>
                <span className="block text-white text-[clamp(38px,6vw,78px)]">YOUR FUTURE</span>
                <span className="block text-white text-[clamp(38px,6vw,78px)]">KNOWS</span>
                <span className="block text-[clamp(38px,6vw,78px)]" style={{ color: "#c8a84b" }}>NO BORDERS.</span>
              </h1>

              <div className="w-16 h-[3px] my-6" style={{ background: "linear-gradient(90deg,#c8a84b,transparent)" }} />

              <p className="text-base md:text-lg leading-[1.75] mb-11 max-w-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
                We connect ambitious job seekers with verified employers across Gulf countries and beyond — providing full support from consultation to placement.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <button
                  onClick={() => go("contact")}
                  className="gold-btn px-15 py-5 rounded-sm font-bold text-sm tracking-wide border-none cursor-pointer"
                  style={{ background: "linear-gradient(135deg,#c8a84b,#e2c26a)", color: "#06102b", boxShadow: "0 8px 32px rgba(200,168,75,0.3)", fontFamily: "inherit" }}
                >
                  Get Free Consultation
                </button>
                <button
                  onClick={() => go("jobs")}
                  className="outline-btn px-15 py-5 rounded-sm font-semibold text-sm text-white cursor-pointer"
                  style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "inherit" }}
                >
                  View Opportunities →
                </button>
              </div>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-white/10">
                {[{ n: "15+", l: "Countries" }, { n: "98%", l: "Success Rate" }, { n: "200+", l: "Employers" }].map((s, i) => (
                  <div key={i}>
                    <div className="font-black text-2xl text-white leading-none" style={{ fontFamily: "'Syne',sans-serif" }}>{s.n}</div>
                    <div className="text-xs font-semibold tracking-[1.5px] uppercase mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel — hidden on mobile, shown on lg */}
            <div className="hidden lg:block" style={{ animation: "fadeUp 0.9s ease 0.2s both" }}>
              <div className="relative rounded-xl p-9" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,168,75,0.15)", backdropFilter: "blur(8px)" }}>
                <div className="absolute top-[-1px] left-8 right-8 h-[2px]" style={{ background: "linear-gradient(90deg,transparent,#c8a84b,transparent)" }} />
                <div className="text-[11px] tracking-[2px] uppercase mb-7" style={{ color: "rgba(255,255,255,0.45)" }}>Why Choose Us</div>
                {WHY.map((item, i) => (
                  <div key={i} className="flex gap-4 py-5" style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-lg" style={{ background: "rgba(200,168,75,0.15)", border: "1px solid rgba(200,168,75,0.2)" }}>{item.icon}</div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">{item.t}</div>
                      <div className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>{item.d}</div>
                    </div>
                  </div>
                ))}
                <div className="mt-7 p-5 rounded-lg" style={{ background: "rgba(200,168,75,0.15)", border: "1px solid rgba(200,168,75,0.25)" }}>
                  <div className="font-bold text-xs tracking-[1px] mb-1" style={{ color: "#c8a84b", fontFamily: "'Syne',sans-serif" }}>TODAY'S STEP</div>
                  <div className="text-white text-xl italic font-light">Tomorrow's Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="block w-full" preserveAspectRatio="none">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,20 L1440,60 Z" fill="#f8f7f4" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 lg:py-32 px-6 lg:px-10" style={{ background: "#f8f7f4" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <Label text="About Us" />
              <h2 className="font-black leading-tight mt-4 mb-6" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(30px,3.5vw,50px)", letterSpacing: "-1px", color: "#06102b" }}>
                Your Gateway to<br /><span style={{ color: "#c8a84b" }}>International Careers</span>
              </h2>
              <p className="leading-[1.85] text-base mb-5" style={{ color: "#555" }}>
                Global Crew Connect is a premier overseas recruitment and career consultancy based in India. We specialise in bridging the gap between talented job seekers and top employers across Gulf countries and international markets.
              </p>
              <p className="leading-[1.85] text-base mb-9" style={{ color: "#555" }}>
                Whether you are a skilled technician or seeking general labor roles, our experienced team provides personalised guidance, verified job opportunities, and complete documentation support — ensuring a smooth, stress-free transition to your new career abroad.
              </p>
              <div className="flex flex-col">
                {[
                  "Registered & Compliant Recruitment Agency",
                  "Direct Employer Partnerships — No Middlemen",
                  "Transparent Process with Zero Hidden Fees",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-3" style={{ borderBottom: "1px solid #e8e6e1" }}>
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#c8a84b" }} />
                    <span className="text-sm font-medium" style={{ color: "#06102b" }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-3 gap-4">
                {STATS.map((s, i) => (
                  <div key={i} className="rounded-xl p-7" style={{
                    background: i === 1 ? "#06102b" : "#fff",
                    border: `1px solid ${i === 1 ? "transparent" : "#e8e6e1"}`,
                    boxShadow: i === 1 ? "none" : "0 2px 20px rgba(6,16,43,0.07)",
                  }}>
                    <div className="font-black text-3xl leading-none" style={{ fontFamily: "'Syne',sans-serif", color: i === 1 ? "#c8a84b" : "#06102b" }}>{s.val}</div>
                    <div className="text-xs font-semibold tracking-widest uppercase mt-2" style={{ color: i === 1 ? "rgba(255,255,255,0.5)" : "#8a8880" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 lg:py-32 px-6 lg:px-10 bg-white lg:mt-10" style={{ borderTop: "1px solid #e8e6e1" }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
              <div>
                <Label text="Services" />
                <h2 className="font-black leading-tight mt-4" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(30px,3.5vw,50px)", letterSpacing: "-1px", color: "#06102b" }}>
                  What We Do<br /><span style={{ color: "#c8a84b" }}>For You</span>
                </h2>
              </div>
              <p className="text-sm leading-[1.75] max-w-sm lg:text-right" style={{ color: "#666" }}>
                Comprehensive recruitment services tailored to international job seekers — from consultation to successful placement abroad.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {SERVICES.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="svc-item flex gap-7 p-8 lg:p-10 cursor-default rounded-sm" style={{ border: "1px solid #e8e6e1", background: "#f8f7f4" }}>
                  <div className="svc-num font-black text-4xl leading-none flex-shrink-0 transition-colors duration-300" style={{ fontFamily: "'Syne',sans-serif", color: "#e8e6e1" }}>{s.num}</div>
                  <div>
                    <h3 className="svc-title font-bold text-lg mb-3 transition-colors duration-300" style={{ fontFamily: "'Syne',sans-serif", color: "#06102b" }}>{s.title}</h3>
                    <p className="svc-desc text-sm leading-[1.75] m-0 transition-colors duration-300" style={{ color: "#666" }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOBS ── */}
      <section id="jobs" className="py-24 lg:py-32 px-6 lg:px-10" style={{ background: "#f8f7f4", borderTop: "1px solid #e8e6e1" }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Label text="Open Positions" center />
              <h2 className="font-black mt-4 mb-4" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(30px,3.5vw,50px)", letterSpacing: "-1px", color: "#06102b" }}>
                Job <span style={{ color: "#c8a84b" }}>Opportunities</span>
              </h2>
              <p className="text-sm leading-[1.75] max-w-md mx-auto" style={{ color: "#666" }}>We recruit across a wide range of industries. Browse current categories below.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {JOBS.map((j, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="job-card bg-white rounded-lg p-6 cursor-default" style={{ border: "1px solid #e8e6e1" }}>
                  <div className="job-num font-black text-2xl leading-none mb-4 transition-colors duration-200" style={{ fontFamily: "'Syne',sans-serif", color: "#e8e6e1" }}>0{i + 1}</div>
                  <div className="job-title font-bold text-sm mb-1.5 transition-colors duration-200" style={{ fontFamily: "'Syne',sans-serif", color: "#06102b" }}>{j.title}</div>
                  <div className="job-cat text-[11px] font-semibold tracking-widest uppercase transition-colors duration-200" style={{ color: "#8a8880" }}>{j.cat}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-14 rounded-xl p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden" style={{ background: "#06102b" }}>
              <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none" style={{ background: "radial-gradient(ellipse at right,rgba(200,168,75,0.12),transparent)" }} />
              <div>
                <div className="text-[11px] font-bold tracking-[2.5px] uppercase mb-3" style={{ color: "#c8a84b" }}>Ready to Start?</div>
                <h3 className="font-black text-xl lg:text-2xl text-white leading-snug" style={{ fontFamily: "'Syne',sans-serif" }}>
                  Unlock Global Career Opportunities<br className="hidden sm:block" /> for a Better Future
                </h3>
              </div>
              <button
                onClick={() => go("contact")}
                className="gold-btn px-9 py-4 rounded-sm font-bold text-sm flex-shrink-0 border-none cursor-pointer"
                style={{ background: "linear-gradient(135deg,#c8a84b,#e2c26a)", color: "#06102b", fontFamily: "inherit", boxShadow: "0 8px 24px rgba(200,168,75,0.25)" }}
              >
                Apply Now →
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── COUNTRIES ── */}
      <section id="countries" className="py-24 lg:py-32 px-6 lg:px-10 relative overflow-hidden" style={{ background: "#06102b" }}>
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg,transparent,#c8a84b,transparent)" }} />
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Label text="Destinations" light />
              <h2 className="font-black mt-4 mb-4 text-white" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(30px,3.5vw,50px)", letterSpacing: "-1px" }}>
                Where We <span style={{ color: "#c8a84b" }}>Place You</span>
              </h2>
              <p className="text-sm leading-[1.75] max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>Opportunities across the world's most promising job markets.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COUNTRIES.map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="country-card rounded-xl p-8 lg:p-9 cursor-default" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,168,75,0.15)" }}>
                  <div className="text-5xl mb-5 leading-none">{c.flag}</div>
                  <div className="inline-block px-2.5 py-0.5 rounded-sm text-[10px] font-bold tracking-widest uppercase mb-4" style={{ background: "rgba(200,168,75,0.15)", border: "1px solid rgba(200,168,75,0.25)", color: "#c8a84b" }}>{c.code}</div>
                  <h3 className="font-bold text-lg text-white mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>{c.name}</h3>
                  <p className="text-sm leading-[1.7] m-0" style={{ color: "rgba(255,255,255,0.5)" }}>{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="block w-full" preserveAspectRatio="none">
            <path d="M0,60 L0,40 Q360,0 720,40 Q1080,70 1440,30 L1440,60 Z" fill="#f8f7f4" />
          </svg>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-10" style={{ background: "#f8f7f4" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Label text="Contact Us" center />
              <h2 className="font-black mt-4 mb-5" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(30px,3.5vw,50px)", letterSpacing: "-1px", color: "#06102b", lineHeight: "1.1" }}>
                Take the First Step<br /><span style={{ color: "#c8a84b" }}>We're Here for You</span>
              </h2>
              <p className="text-sm leading-[1.85] max-w-lg mx-auto" style={{ color: "#666" }}>
                Reach out to our consultants today for a free consultation. We'll help you understand your options and guide you toward the right opportunity abroad.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "📞", label: "Phone", val: "+91 99879 56826", href: "tel:+919987956826" },
              { icon: "📞", label: "Phone", val: "+91 88502 16636", href: "tel:+918850216636" },
              { icon: "✉️", label: "Email", val: "crewconnectglobal@gmail.com", href: "mailto:crewconnectglobal@gmail.com" },
              { icon: "🕐", label: "Hours", val: "Mon–Sat, 9AM–7PM IST", href: null },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <a
                  href={c.href || "#"}
                  onClick={c.href ? undefined : e => e.preventDefault()}
                  className="contact-card block no-underline rounded-xl p-6 bg-white"
                  style={{ border: "1px solid #e8e6e1" }}
                >
                  <div className="contact-icon w-11 h-11 rounded-lg mb-4 flex items-center justify-center text-xl transition-all duration-200" style={{ background: "#f8f7f4" }}>{c.icon}</div>
                  <div className="text-[10px] font-bold tracking-[2px] uppercase mb-1.5" style={{ color: "#8a8880" }}>{c.label}</div>
                  <div className="text-sm font-semibold leading-snug" style={{ color: "#06102b" }}>{c.val}</div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-6 lg:px-10 pt-16 pb-9" style={{ background: "#06102b", borderTop: "1px solid rgba(200,168,75,0.15)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-md flex items-center justify-center text-base flex-shrink-0" style={{ background: "linear-gradient(135deg,#c8a84b,#e2c26a)" }}>🌐</div>
                <div>
                  <div className="text-white font-black text-sm tracking-wide" style={{ fontFamily: "'Syne',sans-serif" }}>GLOBAL CREW CONNECT</div>
                  <div className="text-[9px] font-semibold tracking-[2.5px] uppercase" style={{ color: "#c8a84b" }}>Your Future Knows No Borders</div>
                </div>
              </div>
              <p className="text-sm leading-[1.7]" style={{ color: "rgba(255,255,255,0.45)" }}>
                Premier overseas recruitment consultancy connecting Indian job seekers with verified international employers across Gulf countries and beyond.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <div className="text-white font-bold text-xs tracking-[2px] uppercase mb-5">Quick Links</div>
              {["About Us", "Services", "Job Opportunities", "Target Countries", "Contact"].map(link => (
                <div key={link} className="mb-2.5">
                  <button className="footer-link" style={{ fontFamily: "inherit" }} onClick={() => go(link.toLowerCase().replace(/ /g, ""))}>{link}</button>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div className="text-white font-bold text-xs tracking-[2px] uppercase mb-5">Contact</div>
              {[
                { icon: "📞", text: "+91 99879 56826" },
                { icon: "📞", text: "+91 88502 16636" },
                { icon: "✉️", text: "crewconnectglobal@gmail.com" },
                { icon: "🕐", text: "Mon–Sat, 9AM–7PM IST" },
              ].map((item, i) => (
                <div key={i} className="flex gap-2.5 mb-3 items-start">
                  <span className="text-sm mt-0.5">{item.icon}</span>
                  <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-7" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>© 2025 Global Crew Connect. All Rights Reserved.</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Overseas Recruitment & Career Consultancy</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
