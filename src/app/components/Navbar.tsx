"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "publications", href: "/publications" },
  { label: "contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2.5rem;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .navbar.scrolled {
          background: rgba(12, 12, 14, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 0.5px solid rgba(255,255,255,0.07);
        }
        .navbar.mobile-open {
          background: rgba(12, 12, 14, 0.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 0.5px solid rgba(255,255,255,0.07);
        }
        .nav-brand {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: #5DC8A5;
          letter-spacing: 0.02em;
        }
        .nav-links {
          display: flex;
          gap: 1.75rem;
          align-items: center;
        }
        .nav-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.25);
          transition: color 0.2s;
          padding: 4px 0;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
        }
        .nav-link:hover { color: rgba(255,255,255,0.7); }
        .nav-link.active { color: rgba(255,255,255,0.7); }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 0.5px;
          background: #5DC8A5;
        }
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 6px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .nav-hamburger span {
          display: block;
          width: 18px;
          height: 0.5px;
          background: rgba(255,255,255,0.5);
          transition: all 0.25s;
        }
        .nav-hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(3px, 3px); }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; }
        .nav-hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(3px, -3px); }

        .nav-mobile {
          display: none;
          position: fixed;
          top: 52px; left: 0; right: 0;
          background: rgba(12,12,14,0.98);
          backdrop-filter: blur(16px);
          border-bottom: 0.5px solid rgba(255,255,255,0.07);
          padding: 1.5rem 2.5rem;
          flex-direction: column;
          gap: 1.25rem;
          z-index: 49;
        }
        .nav-mobile.open { display: flex; }
        .nav-mobile-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.4);
          transition: color 0.2s;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          padding: 0;
        }
        .nav-mobile-link:hover,
        .nav-mobile-link.active { color: rgba(255,255,255,0.85); }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
          .navbar { padding: 0 1.25rem; }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? "scrolled" : ""} ${mobileOpen ? "mobile-open" : ""}`}>
        <Link href="/" className="nav-brand">Shubham/</Link>

        {/* Desktop */}
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className={`nav-hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile ${mobileOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-mobile-link ${pathname === item.href ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}