"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[var(--color-surface)] border-b border-[var(--color-border)] fixed top-0 left-0 w-full z-50 shadow-[var(--shadow-sm)]">
      <div className="container flex items-center justify-between h-[64px]">
        {/* Brand Name */}
        <button
          onClick={() => handleNavigation("/")}
          className="text-[var(--font-size-xl)] font-[var(--font-family-serif)] font-[var(--font-weight-semibold)] text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-fast)] focus-visible:outline focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-2"
          aria-label="Go to homepage"
        >
          Shubham Sahoo
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-[var(--space-4)]">
          {navItems.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavigation(href)}
              className={`nav-link ${pathname === href ? "active" : ""}`}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-[var(--space-4)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-2"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          data-testid="mobile-menu-toggle"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)] transition-all duration-[var(--duration-normal)] ease-[var(--ease-standard)] ${
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container flex flex-col items-center gap-[var(--space-8)] py-[var(--space-8)]">
          {navItems.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavigation(href)}
              className={`nav-link w-full text-center ${pathname === href ? "active" : ""}`}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}