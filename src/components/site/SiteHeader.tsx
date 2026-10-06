"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "./nav";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function linkClass(href: string) {
    return pathname === href ? "active" : undefined;
  }

  return (
    <>
      <header className="site-header">
        <Link href="/" className="logo-mark" aria-label="Odigo Small Business home">
          <Image src="/odigologo.png" alt="Odigo Small Business" width={2101} height={686} priority />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="btn">
            Talk to us
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
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={linkClass(l.href)} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className={linkClass("/contact")} onClick={() => setMobileOpen(false)}>
          Contact
        </Link>
      </div>
    </>
  );
}
