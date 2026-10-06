import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "./nav";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/" className="logo-mark" aria-label="Odigo Small Business home">
          <Image src="/odigologo.png" alt="Odigo Small Business" width={2101} height={686} />
        </Link>
        <nav aria-label="Footer">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>Odigo Small Business. Powered by ContentGen.</span>
        <span>
          <a href="https://www.theodigogroup.com/privacy" target="_blank" rel="noopener noreferrer">
            Privacy
          </a>
          <a href="https://www.theodigogroup.com/terms" target="_blank" rel="noopener noreferrer">
            Terms
          </a>
        </span>
      </div>
    </footer>
  );
}
