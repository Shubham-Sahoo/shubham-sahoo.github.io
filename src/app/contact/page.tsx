"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

const C = {
  bg: "#0C0C0E", surface: "#111113", border: "rgba(255,255,255,0.07)",
  border2: "rgba(255,255,255,0.12)", accent: "#5DC8A5",
  tp: "rgba(255,255,255,0.93)", tm: "rgba(255,255,255,0.5)", td: "rgba(255,255,255,0.25)",
};

const LINKS = [
  { label: "Email", value: "shubhamsomnath@gmail.com", href: "mailto:shubhamsomnath@gmail.com", mono: true },
  { label: "GitHub", value: "Shubham-Sahoo", href: "https://github.com/Shubham-Sahoo", mono: false },
  { label: "LinkedIn", value: "shubham-sahoo-62819b138", href: "https://www.linkedin.com/in/shubham-sahoo-62819b138", mono: false },
  { label: "HuggingFace", value: "shubham-sahoo", href: "https://huggingface.co/spaces/shubham-sahoo", mono: false },
];

export default function Contact() {
  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tp, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
        ::selection { background: rgba(93,200,165,0.2); }
      `}</style>

      <Navbar />

      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "5rem 2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start", minHeight: "80vh" }}>

        {/* Left */}
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> Contact
          </div>
          <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px,5vw,54px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: "1.5rem" }}>
            Let's build<br />
            <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.3)" }}>something</span><br />
            together
          </h1>
          <p style={{ fontSize: "14px", color: C.tm, lineHeight: 1.75, maxWidth: "380px", fontWeight: 300, marginBottom: "2rem" }}>
            Open to senior MLE and research roles in generative AI, diffusion models, and on-device ML. Also happy to discuss collaborations, research, or interesting problems.
          </p>

          {/* Availability badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.accent, letterSpacing: ".08em", border: "0.5px solid rgba(93,200,165,0.25)", padding: "5px 12px", borderRadius: "3px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.accent, display: "inline-block" }} />
            AVAILABLE · LONDON
          </div>
        </div>

        {/* Right — contact links */}
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "8px", overflow: "hidden", marginTop: "4rem" }}>
          {LINKS.map((l, i) => (
            <a key={i} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.1rem 1.5rem", background: C.surface, borderBottom: i < LINKS.length - 1 ? `0.5px solid ${C.border}` : "none", transition: "background .2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#171719")}
              onMouseLeave={e => (e.currentTarget.style.background = C.surface)}
            >
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".1em", textTransform: "uppercase" as const }}>{l.label}</span>
              <span style={{ fontFamily: l.mono ? "'JetBrains Mono', monospace" : "'DM Sans', sans-serif", fontSize: "12px", color: C.tm }}>{l.value} ↗</span>
            </a>
          ))}
        </div>
      </div>

      <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "1.5rem 2.5rem", display: "flex", justifyContent: "space-between", maxWidth: "1080px", margin: "0 auto" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td }}>SHUBHAM SAHOO · 2025</span>
        <Link href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td }}>← home</Link>
      </footer>
    </div>
  );
}