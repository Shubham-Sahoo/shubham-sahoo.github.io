"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";

const PROJECTS = [
  {
    id: 1,
    company: "Snap Inc.",
    companyColor: "#5DC8A5",
    category: "Generative AI",
    status: "Active",
    title: "Diffusion model fine-tuning for Snap Lenses",
    timeline: "Dec 2025 – Present",
    desc: "LoRA + PEFT adapters on FLUX & QWEN for domain-specific Image2Image tasks. NAS-searched GAN distillation for on-device mobile inference. Piloted face effect Lenses reaching 1M+ users.",
    tags: ["FLUX", "QWEN", "LoRA", "PEFT", "GAN", "NAS", "Mobile ML"],
    impact: "1M+ users",
    links: {},
  },
  {
    id: 2,
    company: "Snap Inc.",
    companyColor: "#5DC8A5",
    category: "Generative AI",
    status: "Active",
    title: "Prompt mining framework",
    timeline: "2025 – Present",
    desc: "Modular config-driven pipeline for image edit, style, video, and txt2image generation. Taxonomy generation from specs with automated prompt harvesting.",
    tags: ["Python", "FLUX", "Config-driven", "Taxonomy"],
    impact: "Internal tooling",
    links: {},
  },
  {
    id: 3,
    company: "NeuroPixel.AI",
    companyColor: "#c85d9e",
    category: "Applied AI",
    status: "Production",
    title: "FitDiT — flat-lay to model translation",
    timeline: "2024 – 2025",
    desc: "Novel approach converting flat-lay apparel images to model images using FitDiT architecture. Refined apparel masks to improve garment alignment and realism. Updated loss function with DFT loss for better convergence.",
    tags: ["PyTorch", "Transformers", "CUDA", "DFT Loss"],
    impact: "Production",
    links: {},
  },
  {
    id: 4,
    company: "NeuroPixel.AI",
    companyColor: "#c85d9e",
    category: "Applied AI",
    status: "Production",
    title: "Real-time segmentation pipeline",
    timeline: "2024 – Present",
    desc: "Production-grade object segmentation using Meta's SAM optimised to TensorRT format. Achieved 2.69× faster inference for real-time apparel segmentation with scalable Kubernetes deployment.",
    tags: ["SAM", "TensorRT", "CUDA", "Docker", "Kubernetes", "FastAPI"],
    impact: "2.69× speedup",
    links: {},
  },
  {
    id: 5,
    company: "CMU RPAD Lab",
    companyColor: "#5d7dc8",
    category: "Research",
    status: "Published",
    title: "Active perception using light curtains",
    timeline: "2020",
    desc: "Collaborative research on perception systems for autonomous vehicles using light curtain sensors. Self-supervised reward functions + Graph CNNs. 80%+ accuracy on residual policy prediction.",
    tags: ["GCN", "Self-supervised RL", "ICP", "Python", "OpenCV"],
    impact: "80%+ accuracy",
    links: {
      github: "https://github.com/Shubham-Sahoo/ObjectDetection",
      paper: "https://siddancha.github.io/projects/active-perception-light-curtains/",
      video: "https://www.youtube.com/watch?v=WSb5T3HFE7w",
    },
  },
  {
    id: 6,
    company: "IIT Kharagpur",
    companyColor: "#c8a85d",
    category: "Robotics",
    status: "Published",
    title: "Intelligent ground vehicle (Eklavya 7.0)",
    timeline: "2019",
    desc: "Self-driving robot navigating to GPS waypoints through lanes while avoiding obstacles. EKF-based localisation, motion controls, and electronic architecture. 2nd place at IGVC, Oakland University.",
    tags: ["ROS", "OpenCV", "Python", "EKF", "Arduino"],
    impact: "2nd place IGVC",
    links: {
      paper: "https://dl.acm.org/doi/abs/10.1145/3387304.3387321",
      video: "https://www.youtube.com/watch?v=plSmVQVCrxc",
    },
  },
];

const OPEN_SOURCE = [
  { name: "Kornia", desc: "Geometric Computer Vision Library for Spatial AI.", stars: "10.6k", url: "https://github.com/kornia/kornia" },
  { name: "ReinforceBots", desc: "Chatbot combining RL and NLP concepts.", stars: "3", url: "https://github.com/apprenticearnab/ReinforceBots" },
  { name: "Safety driving assist", desc: "Driver assist system using facial expression alertness scoring.", stars: "9", url: "https://github.com/reyanshsolis/safety_driving_assist" },
];

const CATEGORIES = ["All", "Generative AI", "Applied AI", "Research", "Robotics"];
const STATUSES = ["All", "Active", "Production", "Published"];

const STATUS_COLORS: Record<string, string> = {
  Active:     "rgba(93,200,165,0.15)",
  Production: "rgba(93,165,200,0.15)",
  Published:  "rgba(200,168,93,0.15)",
};
const STATUS_TEXT: Record<string, string> = {
  Active:     "#5DC8A5",
  Production: "#5da8c8",
  Published:  "#c8a85d",
};

const C = {
  bg: "#0C0C0E", surface: "#111113", border: "rgba(255,255,255,0.07)",
  border2: "rgba(255,255,255,0.12)", accent: "#5DC8A5",
  tp: "rgba(255,255,255,0.93)", tm: "rgba(255,255,255,0.5)", td: "rgba(255,255,255,0.25)",
};

export default function Projects() {
  const [cat, setCat] = useState("All");
  const [status, setStatus] = useState("All");

  const filtered = PROJECTS.filter(p =>
    (cat === "All" || p.category === cat) &&
    (status === "All" || p.status === status)
  );

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tp, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
        ::selection { background: rgba(93,200,165,0.2); }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .filter-row { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      <Navbar />

      {/* Page header */}
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "5rem 2.5rem 3rem" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: C.accent, opacity: .6 }}>▸</span> Projects
        </div>
        <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px,5vw,54px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: "1rem" }}>
          Work & Research
        </h1>
        <p style={{ fontSize: "14px", color: C.tm, lineHeight: 1.75, maxWidth: "560px", fontWeight: 300 }}>
          Production systems, generative AI research, and applied ML — from Snap Lenses reaching millions to autonomous vehicle perception at CMU.
        </p>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "6px", overflow: "hidden", maxWidth: "480px", marginTop: "2.5rem" }}>
          {[
            { n: PROJECTS.length, l: "Total projects" },
            { n: PROJECTS.filter(p => p.status === "Active").length, l: "Active" },
            { n: PROJECTS.filter(p => p.status === "Production").length, l: "In production" },
            { n: PROJECTS.filter(p => p.status === "Published").length, l: "Published" },
          ].map((s, i) => (
            <div key={i} style={{ background: C.surface, padding: ".9rem 1rem", borderLeft: i > 0 ? `0.5px solid ${C.border}` : "none" }}>
              <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "22px", color: C.accent, lineHeight: 1, marginBottom: "4px" }}>{s.n}</div>
              <div style={{ fontSize: "10px", color: C.td, lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: `0.5px solid ${C.border}` }} />

      {/* Filters */}
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "1.75rem 2.5rem" }}>
        <div className="filter-row" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" as const, alignItems: "center" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em", marginRight: "4px" }}>CATEGORY</span>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "4px 10px", borderRadius: "3px", letterSpacing: ".04em", cursor: "pointer", background: cat === c ? C.accent : "transparent", color: cat === c ? "#0C0C0E" : C.td, border: cat === c ? "none" : `0.5px solid ${C.border}`, transition: "all .15s" }}>{c}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" as const, alignItems: "center" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em", marginRight: "4px" }}>STATUS</span>
            {STATUSES.map(s => (
              <button key={s} onClick={() => setStatus(s)} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "4px 10px", borderRadius: "3px", letterSpacing: ".04em", cursor: "pointer", background: status === s ? C.accent : "transparent", color: status === s ? "#0C0C0E" : C.td, border: status === s ? "none" : `0.5px solid ${C.border}`, transition: "all .15s" }}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: `0.5px solid ${C.border}` }} />

      {/* Projects grid */}
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "2.5rem 2.5rem" }}>
        <div style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace", color: C.td, marginBottom: "1.5rem", letterSpacing: ".06em" }}>
          {filtered.length} / {PROJECTS.length} projects
        </div>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
          {filtered.map((p) => (
            <div key={p.id} style={{ background: C.surface, padding: "1.75rem", borderBottom: `0.5px solid ${C.border}`, borderRight: `0.5px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: p.companyColor, letterSpacing: ".1em" }}>{p.company} · {p.timeline}</div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "2px 8px", borderRadius: "99px", background: STATUS_COLORS[p.status] || "rgba(255,255,255,0.05)", color: STATUS_TEXT[p.status] || C.td, letterSpacing: ".06em" }}>{p.status}</span>
              </div>
              <div style={{ fontSize: "14px", fontWeight: 500, marginBottom: "8px", lineHeight: 1.4 }}>{p.title}</div>
              <div style={{ fontSize: "12px", color: C.tm, lineHeight: 1.65, marginBottom: "1rem" }}>{p.desc}</div>

              {/* Impact */}
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.accent, marginBottom: "1rem", letterSpacing: ".04em" }}>↗ {p.impact}</div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "4px", marginBottom: "1rem" }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", padding: "2px 6px", border: `0.5px solid rgba(255,255,255,0.1)`, borderRadius: "3px", color: "rgba(255,255,255,0.35)" }}>{t}</span>
                ))}
              </div>

              {/* Links */}
              {Object.keys(p.links).length > 0 && (
                <div style={{ display: "flex", gap: "8px", paddingTop: "1rem", borderTop: `0.5px solid ${C.border}` }}>
                  {p.links.github && <a href={p.links.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.tm, letterSpacing: ".06em" }}>GitHub ↗</a>}
                  {p.links.paper && <a href={p.links.paper} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.tm, letterSpacing: ".06em" }}>Paper ↗</a>}
                  {p.links.video && <a href={p.links.video} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.tm, letterSpacing: ".06em" }}>Video ↗</a>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: `0.5px solid ${C.border}` }} />

      {/* Open Source */}
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "3rem 2.5rem" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: C.td, letterSpacing: ".14em", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: C.accent, opacity: .6 }}>▸</span> Open source contributions
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", border: `0.5px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
          {OPEN_SOURCE.map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{ background: C.surface, padding: "1.25rem", borderRight: `0.5px solid ${C.border}`, display: "block", transition: "background .2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#171719")}
              onMouseLeave={e => (e.currentTarget.style.background = C.surface)}
            >
              <div style={{ fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>{r.name}</div>
              <div style={{ fontSize: "11px", color: C.tm, lineHeight: 1.6, marginBottom: "1rem" }}>{r.desc}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td }}>★ {r.stars}</div>
            </a>
          ))}
        </div>
      </div>

      <footer style={{ borderTop: `0.5px solid ${C.border}`, padding: "1.5rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1080px", margin: "0 auto" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>SHUBHAM SAHOO · 2025</span>
        <Link href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: C.td, letterSpacing: ".08em" }}>← home</Link>
      </footer>
    </div>
  );
}