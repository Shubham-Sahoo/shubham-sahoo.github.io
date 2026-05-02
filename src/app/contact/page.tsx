"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { C } from "../../lib/theme";

const LINKS = [
  { label: "Email", value: "shubhamsomnath@gmail.com", href: "mailto:shubhamsomnath@gmail.com", mono: true },
  { label: "GitHub", value: "Shubham-Sahoo", href: "https://github.com/Shubham-Sahoo", mono: false },
  { label: "LinkedIn", value: "shubham-sahoo-62819b138", href: "https://www.linkedin.com/in/shubham-sahoo-62819b138", mono: false },
  { label: "HuggingFace", value: "shubham-sahoo", href: "https://huggingface.co/spaces/shubham-sahoo", mono: false },
];

export default function Contact() {
  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tp }}>
      <Navbar />

      <div className="container page-top contact-grid" style={{ paddingBottom: "4rem" }}>

        {/* Left */}
        <div>
          <div className="section-label"><span style={{ color: C.accent, opacity: .6 }}>▸</span> Contact</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,54px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: "1.5rem" }}>
            Let&apos;s build<br />
            <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.3)" }}>something</span><br />
            together
          </h1>
          <p style={{ fontSize: "14px", color: C.tm, lineHeight: 1.75, maxWidth: "380px", fontWeight: 300, marginBottom: "2rem" }}>
            Open to senior MLE and research roles in generative AI, diffusion models, and on-device ML. Also happy to discuss collaborations, research, or interesting problems.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "10px", color: C.accent, letterSpacing: ".08em", border: "0.5px solid rgba(93,200,165,0.25)", padding: "5px 12px", borderRadius: "3px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.accent, display: "inline-block" }} />
            AVAILABLE · LONDON
          </div>
        </div>

        {/* Right — contact links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
          {LINKS.map((l, i) => (
            <a key={i} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.1rem 1.5rem", background: C.s1, borderBottom: i < LINKS.length - 1 ? `0.5px solid ${C.border}` : "none", transition: "background .2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = C.s2)}
              onMouseLeave={e => (e.currentTarget.style.background = C.s1)}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td, letterSpacing: ".1em", textTransform: "uppercase" }}>{l.label}</span>
              <span style={{ fontFamily: l.mono ? "var(--font-mono)" : "var(--font-sans)", fontSize: "12px", color: C.tm }}>{l.value} ↗</span>
            </a>
          ))}
        </div>
      </div>

      <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "1.5rem 0" }} className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td }}>SHUBHAM SAHOO · 2025</span>
          <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: C.td }}>← home</Link>
        </div>
      </footer>
    </div>
  );
}
