"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/why-odigo-smb", label: "Why Odigo SMB" },
  { href: "/contact", label: "Contact" },
];

const PROGRAM_LINKS = [
  { href: "/get-found", label: "Get Found" },
  { href: "/win-customers", label: "Win Customers" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isProgramsActive = PROGRAM_LINKS.some((l) => l.href === pathname);

  function linkClass(href: string) {
    return pathname === href ? "active" : undefined;
  }

  return (
    <>
      <header className="site-header">
        <Link href="/" className="logo-mark" aria-label="Odigo SMB home">
          <Image src="/odigologo.png" alt="Odigo Small Business" width={2101} height={686} priority />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <Link href="/how-it-works" className={linkClass("/how-it-works")}>
            How It Works
          </Link>
          <Link href="/pricing" className={linkClass("/pricing")}>
            Pricing
          </Link>
          <div className="nav-group">
            <button type="button" className={`nav-link${isProgramsActive ? " active" : ""}`}>
              Programs
            </button>
            <div className="nav-flyout">
              {PROGRAM_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/why-odigo-smb" className={linkClass("/why-odigo-smb")}>
            Why Odigo SMB
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </nav>

        <div className="header-actions">
          <Link href="/login" className="btn ghost">
            Client Login
          </Link>
          <Link href="/pricing" className="btn">
            See pricing
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <div className={`mobile-nav${mobileOpen ? " open" : ""}`}>
        {NAV.slice(0, 2).map((l) => (
          <Link key={l.href} href={l.href} className={linkClass(l.href)} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        {PROGRAM_LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={linkClass(l.href)} onClick={() => setMobileOpen(false)}>
            &nbsp;&nbsp;{l.label}
          </Link>
        ))}
        {NAV.slice(2).map((l) => (
          <Link key={l.href} href={l.href} className={linkClass(l.href)} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/login" className={linkClass("/login")} onClick={() => setMobileOpen(false)}>
          Client Login
        </Link>
      </div>
    </>
  );
}
