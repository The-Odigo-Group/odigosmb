import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="eyebrow" style={{ marginBottom: 10 }}>
            Odigo SMB
          </p>
          <p>
            An assigned fractional CMO, backed by an execution engine. Published pricing,
            defined scopes, and ownership that stays with you.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li>
              <Link href="/how-it-works">How It Works</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/why-odigo-smb">Why Odigo SMB</Link>
            </li>
            <li>
              <Link href="/hvac-and-trades">HVAC &amp; Trades</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Programs</h4>
          <ul>
            <li>
              <Link href="/get-found">Get Found</Link>
            </li>
            <li>
              <Link href="/win-customers">Win Customers</Link>
            </li>
            <li>
              <Link href="/specialty-services">Specialty Services</Link>
            </li>
            <li>
              <Link href="/powered-by-contentgen">Powered by ContentGen</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/login">Client Login</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Odigo SMB. All rights reserved.</span>
        <span style={{ display: "flex", gap: 16 }}>
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
