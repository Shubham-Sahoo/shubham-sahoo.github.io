"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STATS = [
  { num: "1M+", label: "Snap Lens users" },
  { num: "2.69×", label: "SAM speedup" },
  { num: "8.65", label: "CGPA · IIT KGP" },
];

const PROJECTS = [
  {
    company: "Snap Inc.",
    companyColor: "#5DC8A5",
    title: "Prompt mining framework",
    desc: "Modular config-driven pipeline for image edit, style, video & txt2image. Taxonomy generation from specs with automated prompt harvesting.",
    tags: ["Python", "FLUX", "Config-driven"],
    bg: "linear-gradient(135deg,#0d1f1a,#112b20)",
    icon: "∿",
    iconColor: "#5DC8A5",
    href: "https://github.com/Shubham-Sahoo",
  },
  {
    company: "NeuroPixel.AI",
    companyColor: "#c85d9e",
    title: "SAM → TensorRT pipeline",
    desc: "Optimised Meta's Segment Anything to TensorRT achieving 2.69× faster inference. Production real-time segmentation for apparel virtual try-on.",
    tags: ["SAM", "TensorRT", "CUDA"],
    bg: "linear-gradient(135deg,#1a0d1a,#2b1128)",
    icon: "◈",
    iconColor: "#c85d9e",
    href: "https://github.com/Shubham-Sahoo",
  },
  {
    company: "CMU RPAD Lab",
    companyColor: "#5d7dc8",
    title: "Safety envelope tracking",
    desc: "Self-supervised reward functions + Graph CNNs for autonomous vehicle perception. 80%+ accuracy on residual policy prediction.",
    tags: ["GCN", "RL", "ICP"],
    bg: "linear-gradient(135deg,#0d0d1f,#11142b)",
    icon: "⬡",
    iconColor: "#5d7dc8",
    href: "https://github.com/Shubham-Sahoo",
  },
];

const NAV = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "publications", href: "/publications" },
  { label: "contact", href: "/contact" },
];

const SOCIAL = [
  { label: "GitHub ↗", href: "https://github.com/Shubham-Sahoo" },
  { label: "HuggingFace ↗", href: "https://huggingface.co/spaces/shubham-sahoo" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/shubham-sahoo-62819b138" },
];

export default function Home() {
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
      el.style.transform = "translateY(18px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 80 + i * 80);
    });
  }, []);

  const C = {
    bg: "#0C0C0E",
    s1: "#111113",
    border: "rgba(255,255,255,0.07)",
    border2: "rgba(255,255,255,0.12)",
    accent: "#5DC8A5",
    tp: "rgba(255,255,255,0.93)",
    tm: "rgba(255,255,255,0.5)",
    td: "rgba(255,255,255,0.25)",
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tp, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap');
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        ::selection { background: rgba(93,200,165,0.2); }
        a { color: inherit; text-decoration: none; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .works-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .hero-right-hide { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 2.5rem", height: "52px",
        background: scrolled ? "rgba(12,12,14,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `0.5px solid ${C.border}` : "none",
        transition: "all 0.3s ease",
      }}>
        <Link href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: C.accent }}>SS/</Link>
        <div style={{ display: "flex", gap: "1.75rem" }}>
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
              color: C.td, letterSpacing: ".08em", transition: "color .2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.tp)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.td)}
            >{n.label}</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: "100px", paddingBottom: "5rem", paddingLeft: "2.5rem", paddingRight: "2.5rem", maxWidth: "1080px", margin: "0 auto", position: "relative" }}>
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)`,
          backgroundSize: "52px 52px",
          WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 0% 0%,black 0%,transparent 65%)",
          maskImage: "radial-gradient(ellipse 100% 100% at 0% 0%,black 0%,transparent 65%)",
        }} />
        {/* Glow */}
        <div style={{
          position: "absolute", top: "0", right: "0", width: "500px", height: "500px", pointerEvents: "none",
          background: "radial-gradient(circle,rgba(93,200,165,0.055) 0%,transparent 65%)",
        }} />

        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "end", position: "relative", zIndex: 1 }}>
          {/* Left */}
          <div>
            <div data-fade style={{
              display: "inline-block", fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px", color: C.accent, letterSpacing: ".1em",
              border: "0.5px solid rgba(93,200,165,0.25)", padding: "3px 10px",
              borderRadius: "3px", marginBottom: "1.5rem",
            }}>● MLE · SNAP INC. · LONDON</div>

            <h1 data-fade style={{
              fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400,
              fontSize: "clamp(44px, 5.5vw, 68px)", lineHeight: 1.02,
              letterSpacing: "-.02em", marginBottom: "1.25rem",
            }}>
              Shubham<br />
              <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.3)" }}>Somnath</span><br />
              Sahoo
            </h1>

            <p data-fade style={{ fontSize: "14px", color: C.tm, lineHeight: 1.75, maxWidth: "420px", marginBottom: "2rem", fontWeight: 300 }}>
              Building <span style={{ color: C.tp, fontWeight: 400 }}>diffusion models</span>, LoRA adapters &
              distilled on-device generative systems at Snap.
              IIT Kharagpur dual degree in EE &amp; CS.
            </p>

            <div data-fade style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <Link href="/projects" style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
                padding: "7px 16px", borderRadius: "4px", letterSpacing: ".06em",
                background: C.accent, color: "#0C0C0E", fontWeight: 500,
                transition: "background .2s",
              }}>View Work ↗</Link>
              <Link href="/about" style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
                padding: "7px 14px", borderRadius: "4px", letterSpacing: ".06em",
                background: "transparent", color: C.tm, border: `0.5px solid ${C.border2}`,
                transition: "all .2s",
              }}>About & CV</Link>
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
                  padding: "7px 14px", borderRadius: "4px", letterSpacing: ".06em",
                  background: "transparent", color: C.td, border: `0.5px solid ${C.border}`,
                  transition: "all .2s",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = C.accent; e.currentTarget.style.borderColor = "rgba(93,200,165,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = C.td; e.currentTarget.style.borderColor = C.border; }}
                >{s.label}</a>
              ))}
            </div>

            {/* Stats */}
            <div data-fade style={{
              display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px",
              border: `0.5px solid ${C.border}`, borderRadius: "6px", overflow: "hidden", maxWidth: "380px",
            }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  background: C.s1, padding: ".9rem 1rem",
                  borderLeft: i > 0 ? `0.5px solid ${C.border}` : "none",
                }}>
                  <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "22px", color: C.accent, lineHeight: 1, marginBottom: "4px" }}>{s.num}</div>
                  <div style={{ fontSize: "10px", color: C.td, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — featured card */}
          <div className="hero-right-hide" data-fade>
            <div style={{ background: C.s1, border: `0.5px solid ${C.border}`, borderRadius: "10px", overflow: "hidden" }}>
              <div style={{
                height: "200px", background: "linear-gradient(135deg,#0d1f1a 0%,#0f2318 40%,#0c1c16 100%)",
                display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(93,200,165,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(93,200,165,0.07) 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }} />
                <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "48px", color: "rgba(93,200,165,0.65)", lineHeight: 1 }}>LoRA</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "rgba(93,200,165,0.4)", letterSpacing: ".12em", marginTop: "6px" }}>FLUX · QWEN · SDXL</div>
                </div>
              </div>
              <div style={{ padding: "1rem 1.25rem" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.accent, letterSpacing: ".1em", marginBottom: "6px" }}>SNAP INC. · FEATURED WORK</div>
                <div style={{ fontSize: "14px", fontWeight: 500, marginBottom: "6px", lineHeight: 1.4 }}>Diffusion model fine-tuning for Snap Lenses</div>
                <div style={{ fontSize: "12px", color: C.tm, lineHeight: 1.6 }}>LoRA + PEFT adapters on FLUX & QWEN for domain-specific Image2Image. NAS-searched GAN distillation for on-device mobile inference reaching 1M+ users.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `0.5px solid ${C.border}` }} />

      {/* FEATURED PROJECTS */}
      <section style={{ padding: "3.5rem 2.5rem", maxWidth: "1080px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2rem" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> Featured projects
          </div>
          <Link href="/projects" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.tm, letterSpacing: ".06em" }}>All projects ↗</Link>
        </div>

        <div className="works-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }}>
          {PROJECTS.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
              style={{ background: C.s1, border: `0.5px solid ${C.border}`, borderRadius: "8px", overflow: "hidden", display: "block", transition: "border-color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.border2)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
            >
              <div style={{ height: "130px", background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "40px", color: p.iconColor, opacity: .55, position: "relative", zIndex: 1 }}>{p.icon}</span>
              </div>
              <div style={{ padding: ".9rem 1rem" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: p.companyColor, letterSpacing: ".1em", marginBottom: "5px" }}>{p.company}</div>
                <div style={{ fontSize: "13px", fontWeight: 500, marginBottom: "5px", lineHeight: 1.4 }}>{p.title}</div>
                <div style={{ fontSize: "11px", color: C.tm, lineHeight: 1.55 }}>{p.desc}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: ".7rem" }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", padding: "2px 6px", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: "3px", color: "rgba(255,255,255,0.35)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `0.5px solid ${C.border}`, maxWidth: "1080px", margin: "0 auto" }} />

      {/* ABOUT STRIP */}
      <section style={{ padding: "3.5rem 2.5rem", maxWidth: "1080px", margin: "0 auto" }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
          <div>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: ".75rem" }}>
              Deep learning<br />
              <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.3)" }}>at the intersection</span><br />
              of vision &amp; deployment
            </h2>
            <p style={{ fontSize: "13px", color: C.tm, lineHeight: 1.75, fontWeight: 300, marginBottom: "1rem" }}>
              I specialise in generative AI systems that actually ship — from fine-tuning large diffusion models with LoRA adapters to distilling them into GAN architectures that run in real-time on mobile hardware.
            </p>
            <Link href="/about" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.accent, letterSpacing: ".06em" }}>Full CV & experience ↗</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ background: C.s1, border: `0.5px solid ${C.border}`, borderRadius: "8px", padding: "1rem 1.25rem" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".1em", marginBottom: ".4rem" }}>EDUCATION</div>
              <div style={{ fontSize: "13px", fontWeight: 500, marginBottom: "2px" }}>IIT Kharagpur</div>
              <div style={{ fontSize: "11px", color: C.tm }}>Dual Degree · EE&C Engg + CS Minor<br />Visual Information Processing (M.Tech)</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: C.accent, marginTop: "4px" }}>CGPA 8.65 / 10.0</div>
            </div>
            <div style={{ background: "transparent", border: `0.5px solid ${C.border}`, borderRadius: "8px", padding: "1rem 1.25rem" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".1em", marginBottom: ".4rem" }}>CURRENT ROLE</div>
              <div style={{ fontSize: "13px", fontWeight: 500, marginBottom: "2px" }}>Machine Learning Engineer</div>
              <div style={{ fontSize: "11px", color: C.tm }}>Snap Inc. · London · Dec 2025 – Present</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: C.accent, marginTop: "4px" }}>Generative AI · Mobile ML · Diffusion</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "1.5rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1080px", margin: "0 auto" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>SHUBHAM SAHOO · 2025</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>IIT KGP · SNAP INC. · LONDON</span>
      </footer>
    </div>
  );
}