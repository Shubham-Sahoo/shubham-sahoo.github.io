'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/publications', label: 'Publications' },
    { href: '/contact', label: 'Contact' },
  ];

  // Debug navLinks rendering
  useEffect(() => {
    console.log('Navbar navLinks:', navLinks);
  }, []);

  return (
    <nav className="bg-[var(--color-surface)] h-[64px] flex items-center justify-between px-[var(--space-16)]">
      <div className="text-[var(--font-size-lg)] font-[var(--font-weight-semibold)]">
        <Link href="/">Shubham Sahoo</Link>
      </div>
      <div className="nav-desktop flex items-center gap-[12px] flex-wrap">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            aria-label={link.label}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <button
        className="lg:hidden text-[var(--font-size-lg)] focus-visible:outline-[var(--focus-outline)]"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        {isOpen ? '✕' : '☰'}
      </button>
      <div
        id="mobile-menu"
        className="nav-mobile absolute top-[64px] left-0 w-full"
        aria-hidden={!isOpen}
      >
        {navLinks.map((link) => (
          <Link
            key={`${link.href}-mobile`}
            href={link.href}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
            aria-label={link.label}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}