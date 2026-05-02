"use client";

import Link from "next/link";
import type { AboutPageData } from "../../lib/content";

const NAV = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "publications", href: "/publications" },
  { label: "contact", href: "/contact" },
];

export default function AboutClient({ meta, experience, skills, publications }: AboutPageData) {
  const C = {
    bg: "#0C0C0E", s1: "#111113",
    border: "rgba(255,255,255,0.07)", border2: "rgba(255,255,255,0.12)",
    accent: "#5DC8A5",
    tp: "rgba(255,255,255,0.93)", tm: "rgba(255,255,255,0.5)", td: "rgba(255,255,255,0.25)",
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tp, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap');
        * { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
        @media (max-width: 768px) {
          .exp-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
          .pub-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 2.5rem", height: "52px",
        background: "rgba(12,12,14,0.92)", backdropFilter: "blur(16px)",
        borderBottom: `0.5px solid ${C.border}`,
      }}>
        <Link href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: C.accent }}>{meta.initials}</Link>
        <div style={{ display: "flex", gap: "1.75rem" }}>
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
              color: n.href === "/about" ? C.tm : C.td,
              letterSpacing: ".08em",
            }}>{n.label}</Link>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "4rem 2.5rem" }}>

        {/* Page header */}
        <div style={{ marginBottom: "4rem", paddingBottom: "2.5rem", borderBottom: `0.5px solid ${C.border}` }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> About & CV
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <img
              src={meta.photo}
              alt={meta.name}
              style={{
                width: "80px", height: "80px", borderRadius: "50%",
                border: `0.5px solid ${C.border2}`,
                objectFit: "cover", filter: "grayscale(15%)", flexShrink: 0,
              }}
            />
            <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.02em" }}>
              {meta.name}
            </h1>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <p style={{ fontSize: "14px", color: C.tm, lineHeight: 1.75, fontWeight: 300 }}>
              {meta.bio}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignContent: "flex-start" }}>
              {[
                { l: meta.email, h: `mailto:${meta.email}` },
                { l: "GitHub ↗", h: meta.social.github ?? "" },
                { l: "LinkedIn ↗", h: meta.social.linkedin ?? "" },
                { l: "HuggingFace ↗", h: meta.social.huggingface ?? "" },
              ].filter(s => s.h).map((s) => (
                <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
                  padding: "6px 12px", border: `0.5px solid ${C.border}`, borderRadius: "4px",
                  color: C.tm, letterSpacing: ".04em",
                }}>{s.l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <section style={{ marginBottom: "4rem" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> Experience
          </div>

          {experience.map((exp, i) => (
            <div key={i} className="exp-row" style={{
              display: "grid", gridTemplateColumns: "180px 1fr", gap: "3rem",
              padding: "2.25rem 0", borderBottom: `0.5px solid ${C.border}`,
            }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, lineHeight: 1.7, letterSpacing: ".02em" }}>{exp.period}</div>
                {exp.location && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, marginTop: "3px" }}>{exp.location}</div>}
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: 500, marginBottom: "3px" }}>{exp.role}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: exp.companyColor, marginBottom: "1rem", letterSpacing: ".02em" }}>{exp.company}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem" }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: "13px", color: C.tm, lineHeight: 1.65, padding: "3px 0 3px 1.25rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: C.td, fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", top: "7px" }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {exp.tags.map((t) => (
                    <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "2px 7px", border: "0.5px solid rgba(255,255,255,0.13)", borderRadius: "3px", color: "rgba(255,255,255,0.4)", letterSpacing: ".04em" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section style={{ marginBottom: "4rem" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> Skills & Expertise
          </div>
          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
            {skills.categories.map((s, i) => (
              <div key={i} style={{ padding: "1.25rem", background: C.s1, borderRight: `0.5px solid ${C.border}`, borderBottom: `0.5px solid ${C.border}` }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.accent, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: ".75rem" }}>{s.name}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {s.items.map((item) => (
                    <span key={item} style={{ fontSize: "12px", color: C.tm }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section style={{ marginBottom: "4rem" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> Education
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "3rem", padding: "2rem 0", borderBottom: `0.5px solid ${C.border}` }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, lineHeight: 1.7 }}>Jul 2017 – May {meta.graduationYear}</div>
            <div>
              <div style={{ fontSize: "15px", fontWeight: 500, marginBottom: "3px" }}>{meta.university}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: C.accent, marginBottom: "8px" }}>{meta.degree}</div>
              <div style={{ fontSize: "13px", color: C.tm, lineHeight: 1.65 }}>Electronics and Electrical Communication Engineering · M.Tech in {meta.specialisation} · Minor in Computer Science and Engineering</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: C.td, marginTop: "8px" }}>CGPA: {meta.cgpa} / 10.0</div>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: C.accent, opacity: .6 }}>▸</span> Publications
          </div>
          {publications.map((p, i) => (
            <div key={i} className="pub-row" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "3rem", padding: "1.75rem 0", borderBottom: i < publications.length - 1 ? `0.5px solid ${C.border}` : "none" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, lineHeight: 1.6 }}>{p.venue}</div>
              <div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: C.tp, lineHeight: 1.6, display: "block", marginBottom: "5px", transition: "color .2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.tp)}
                >{p.title}</a>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".04em" }}>DOI: {p.doi}</div>
              </div>
            </div>
          ))}
        </section>

      </div>

      <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "1.5rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1080px", margin: "0 auto" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>SHUBHAM SAHOO · 2025</span>
        <Link href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>← Back to home</Link>
      </footer>
    </div>
  );
}
