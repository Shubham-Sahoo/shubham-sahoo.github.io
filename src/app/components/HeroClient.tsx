"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { SiteMeta, Project, AboutContent, Skills } from "../../lib/content";

const C = {
  bg: "#0C0C0E", s1: "#111113",
  border: "rgba(255,255,255,0.07)", border2: "rgba(255,255,255,0.13)",
  accent: "#5DC8A5",
  tp: "rgba(255,255,255,0.93)", tm: "rgba(255,255,255,0.52)", td: "rgba(255,255,255,0.25)",
};

const NAV = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "publications", href: "/publications" },
  { label: "contact", href: "/contact" },
];

const ABOUT_CARDS = [
  { label: "Education",    title: "IIT Kharagpur",    sub: "Dual Degree · EE&C + CS Minor",       accent: "CGPA 8.65 / 10.0" },
  { label: "Current role", title: "Snap Inc. London", sub: "Machine Learning Engineer",            accent: "Dec 2025 – Present" },
  { label: "Research",     title: "3 IEEE papers",    sub: "5G · Robotics · Autonomous vehicles", accent: "9 total citations" },
  { label: "Patent",       title: "Hypergen",         sub: "Text-prompted weight correction",      accent: "Filed 2026" },
];

interface Props {
  meta: SiteMeta;
  featuredProjects: Project[];
  about: AboutContent;
  skills: Skills;
}

export default function HeroClient({ meta, featuredProjects, about, skills }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-fade]");
    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 60 + i * 55);
    });
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tp, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap');
        html { scroll-behavior: smooth; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: rgba(93,200,165,0.2); }
        a { color: inherit; text-decoration: none; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0C0C0E; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }
        @media (max-width: 860px) {
          .hero-grid  { grid-template-columns: 1fr !important; }
          .works-grid { grid-template-columns: 1fr 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .stats-bar  { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 540px) {
          .works-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 2.5rem", height: "48px",
        background: scrolled ? "rgba(12,12,14,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `0.5px solid ${C.border}` : "none",
        transition: "all 0.25s ease",
      }}>
        <Link href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: C.accent }}>{meta.initials}</Link>
        <div style={{ display: "flex", gap: "1.75rem" }}>
          {NAV.map(n => (
            <Link key={n.label} href={n.href}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".08em", transition: "color .2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = C.tp)}
              onMouseLeave={e => (e.currentTarget.style.color = C.td)}
            >{n.label}</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "72px 2.5rem 0", position: "relative" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)`,
          backgroundSize: "48px 48px",
          WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 10% 25%,black,transparent)",
          maskImage: "radial-gradient(ellipse 70% 55% at 10% 25%,black,transparent)",
        }} />
        <div style={{ position: "absolute", top: 0, right: "5%", width: "380px", height: "380px", pointerEvents: "none", background: "radial-gradient(circle,rgba(93,200,165,0.048) 0%,transparent 68%)" }} />

        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "start", position: "relative", zIndex: 1 }}>

          {/* LEFT */}
          <div>
            <div data-fade style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.4rem" }}>
              <img src={meta.photo} alt={meta.shortName} style={{ width: "54px", height: "54px", borderRadius: "50%", border: `0.5px solid ${C.border2}`, objectFit: "cover", filter: "grayscale(10%)", flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.accent, letterSpacing: ".09em", marginBottom: "4px" }}>● {meta.availabilityLabel}</div>
                <div style={{ fontSize: "13px", fontWeight: 500 }}>{meta.shortName}</div>
              </div>
            </div>

            <h1 data-fade style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(38px,5vw,60px)", lineHeight: 1.02, letterSpacing: "-.025em", marginBottom: "1rem" }}>
              Deep Learning<br />
              <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.27)" }}>Engineer &</span><br />
              Researcher
            </h1>

            <p data-fade style={{ fontSize: "13px", color: C.tm, lineHeight: 1.75, maxWidth: "390px", marginBottom: "1.4rem", fontWeight: 300 }}>
              {meta.bio}
            </p>

            <div data-fade style={{ display: "flex", gap: "7px", flexWrap: "wrap" as const, marginBottom: "1.75rem" }}>
              <Link href="/projects" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: ".06em", padding: "6px 15px", borderRadius: "4px", background: C.accent, color: "#0C0C0E", fontWeight: 500 }}>View Work ↗</Link>
              <Link href="/about" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: ".06em", padding: "6px 13px", borderRadius: "4px", border: `0.5px solid ${C.border2}`, color: C.tm }}>About & CV</Link>
              {meta.social.github && (
                <a href={meta.social.github} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: ".06em", padding: "6px 13px", borderRadius: "4px", border: `0.5px solid ${C.border}`, color: C.td, transition: "all .18s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.accent; e.currentTarget.style.borderColor = "rgba(93,200,165,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = C.td; e.currentTarget.style.borderColor = C.border; }}
                >GitHub ↗</a>
              )}
              {meta.social.linkedin && (
                <a href={meta.social.linkedin} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: ".06em", padding: "6px 13px", borderRadius: "4px", border: `0.5px solid ${C.border}`, color: C.td, transition: "all .18s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.accent; e.currentTarget.style.borderColor = "rgba(93,200,165,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = C.td; e.currentTarget.style.borderColor = C.border; }}
                >LinkedIn ↗</a>
              )}
              {meta.social.huggingface && (
                <a href={meta.social.huggingface} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: ".06em", padding: "6px 13px", borderRadius: "4px", border: `0.5px solid ${C.border}`, color: C.td, transition: "all .18s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.accent; e.currentTarget.style.borderColor = "rgba(93,200,165,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = C.td; e.currentTarget.style.borderColor = C.border; }}
                >HuggingFace ↗</a>
              )}
            </div>

            {/* Stats from meta.md */}
            <div data-fade className="stats-bar" style={{ display: "grid", gridTemplateColumns: `repeat(${meta.stats.length},1fr)`, gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "6px", overflow: "hidden" }}>
              {meta.stats.map((s, i) => (
                <div key={i} style={{ background: C.s1, padding: ".75rem .85rem", borderLeft: i > 0 ? `0.5px solid ${C.border}` : "none" }}>
                  <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "19px", color: C.accent, lineHeight: 1, marginBottom: "3px" }}>{s.num}</div>
                  <div style={{ fontSize: "9px", color: C.td, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div data-fade style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
            {/* Featured project card — first featured project */}
            {featuredProjects[0] && (
              <div style={{ background: C.s1, border: `0.5px solid ${C.border}`, borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ height: "148px", background: featuredProjects[0].bgGradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(93,200,165,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(93,200,165,0.06) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />
                  <div style={{ position: "relative", zIndex: 1, textAlign: "center" as const }}>
                    <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "38px", color: "rgba(93,200,165,0.58)", lineHeight: 1 }}>LoRA</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", color: "rgba(93,200,165,0.32)", letterSpacing: ".13em", marginTop: "5px" }}>FLUX · QWEN · SDXL</div>
                  </div>
                </div>
                <div style={{ padding: ".85rem 1.05rem" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.accent, letterSpacing: ".1em", marginBottom: "4px" }}>{featuredProjects[0].company.toUpperCase()} · FEATURED WORK</div>
                  <div style={{ fontSize: "13px", fontWeight: 500, marginBottom: "4px", lineHeight: 1.35 }}>{featuredProjects[0].title}</div>
                  <div style={{ fontSize: "11px", color: C.tm, lineHeight: 1.6 }}>{featuredProjects[0].desc.slice(0, 120)}</div>
                </div>
              </div>
            )}

            {/* Quick facts */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "6px", overflow: "hidden" }}>
              {[
                { l: "Current role",   v: `MLE · ${meta.shortName.split(" ")[0]} · London` },
                { l: "Education",      v: `${meta.university} · Dual Degree` },
                { l: "Specialisation", v: "Generative AI · Mobile ML" },
                { l: "Publications",   v: "3 IEEE · 9 citations" },
              ].map((item, i) => (
                <div key={i} style={{ background: C.s1, padding: ".65rem .85rem", borderRight: i % 2 === 0 ? `0.5px solid ${C.border}` : "none", borderBottom: i < 2 ? `0.5px solid ${C.border}` : "none" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", color: C.td, marginBottom: "3px", letterSpacing: ".06em" }}>{item.l}</div>
                  <div style={{ fontSize: "11px", color: C.tm, lineHeight: 1.4 }}>{item.v}</div>
                </div>
              ))}
            </div>

            {/* Core skills from skills.md */}
            <div style={{ background: C.s1, border: `0.5px solid ${C.border}`, borderRadius: "6px", padding: ".85rem 1.05rem" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", color: C.td, letterSpacing: ".1em", marginBottom: ".55rem" }}>CORE SKILLS</div>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "5px" }}>
                {skills.coreSkills.map(t => (
                  <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "2px 7px", border: `0.5px solid ${C.border}`, borderRadius: "3px", color: C.td }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "1080px", margin: "2rem auto 0", borderTop: `0.5px solid ${C.border}` }} />

      {/* FEATURED PROJECTS — from content/projects/*.md */}
      <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "1.75rem 2.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.1rem" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .55 }}>▸</span> Featured projects
          </div>
          <Link href="/projects" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.tm, letterSpacing: ".06em" }}>All projects ↗</Link>
        </div>
        <div className="works-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }}>
          {featuredProjects.map((p) => (
            <div key={p.slug} style={{ background: C.s1, border: `0.5px solid ${C.border}`, borderRadius: "8px", overflow: "hidden", transition: "border-color .2s", cursor: "pointer" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = C.border2)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
            >
              <div style={{ height: "100px", background: p.bgGradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "16px 16px" }} />
                <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "34px", color: p.iconColor, opacity: .48, position: "relative", zIndex: 1 }}>{p.icon}</span>
              </div>
              <div style={{ padding: ".75rem .85rem" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: p.companyColor, letterSpacing: ".1em", marginBottom: "4px" }}>{p.company}</div>
                <div style={{ fontSize: "12px", fontWeight: 500, marginBottom: "4px", lineHeight: 1.35 }}>{p.title}</div>
                <div style={{ fontSize: "11px", color: C.tm, lineHeight: 1.55 }}>{p.desc.slice(0, 110)}</div>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "4px", marginTop: ".55rem" }}>
                  {p.tags.slice(0, 4).map(t => (
                    <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", padding: "2px 5px", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: "3px", color: "rgba(255,255,255,0.28)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: "1080px", margin: "0 auto", borderTop: `0.5px solid ${C.border}` }} />

      {/* ABOUT STRIP */}
      <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "1.75rem 2.5rem 3rem" }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "24px", fontWeight: 400, lineHeight: 1.2, marginBottom: ".65rem" }}>
              Generative AI<br />
              <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.27)" }}>that actually ships</span>
            </h2>
            <p style={{ fontSize: "13px", color: C.tm, lineHeight: 1.75, fontWeight: 300, marginBottom: ".9rem", maxWidth: "340px" }}>
              {about.heroBio}
            </p>
            <Link href="/about" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.accent, letterSpacing: ".06em" }}>Full CV & experience ↗</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            {ABOUT_CARDS.map((card, i) => (
              <div key={i} style={{ background: C.s1, border: `0.5px solid ${C.border}`, borderRadius: "7px", padding: ".8rem .9rem" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", color: C.td, letterSpacing: ".1em", marginBottom: ".3rem" }}>{card.label.toUpperCase()}</div>
                <div style={{ fontSize: "12px", fontWeight: 500, marginBottom: "2px" }}>{card.title}</div>
                <div style={{ fontSize: "10px", color: C.tm, lineHeight: 1.5, marginBottom: "4px" }}>{card.sub}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.accent }}>{card.accent}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "1.1rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1080px", margin: "0 auto" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>{meta.shortName.toUpperCase()} · 2026</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>IIT KGP · SNAP INC. · LONDON</span>
      </footer>
    </div>
  );
}