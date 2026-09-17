import type { Metadata } from "next";
import Link from "next/link";
import { Configurator } from "@/components/site/Configurator";

export const metadata: Metadata = {
  title: "Odigo SMB Pricing — Published, Transparent, No Sales Call Required",
  description:
    "Foundation $1,899/mo. Get Found $2,550/mo. Win Customers $1,950/mo. Every scope published. Every commitment explained before you buy.",
};

export default function PricingPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>The pricing page most agencies don&apos;t have.</h1>
        <p className="lede">
          Everything below is the real price, the real scope, and the real commitment — in
          writing, before you buy.
        </p>
      </section>

      <section className="page-section section-narrow">
        <div className="rates">
          <div className="rate-row">
            <span className="label">
              Foundation
              <br />
              <span className="fine" style={{ marginTop: 2 }}>
                Assigned fCMO · quarterly reviews · portal · ContentGen
              </span>
            </span>
            <span className="amt">
              <span className="price">$1,899/mo</span>
              <span className="terms">12-mo commitment</span>
            </span>
          </div>
          <div className="rate-row">
            <span className="label">
              + Get Found
              <br />
              <span className="fine" style={{ marginTop: 2 }}>
                with Foundation: $4,449/mo
              </span>
            </span>
            <span className="amt">
              <span className="price">+$2,550/mo</span>
              <span className="terms">6-mo minimum</span>
            </span>
          </div>
          <div className="rate-row">
            <span className="label">
              + Win Customers
              <br />
              <span className="fine" style={{ marginTop: 2 }}>
                with Foundation: $3,849/mo · media billed to you, never marked up
              </span>
            </span>
            <span className="amt">
              <span className="price">+$1,950/mo</span>
              <span className="terms">3-mo minimum</span>
            </span>
          </div>
          <div className="rate-row" style={{ borderColor: "rgba(69,182,171,0.4)" }}>
            <span className="label">Both programs</span>
            <span className="amt">
              <span className="price">$6,399/mo</span>
              <span className="terms">+ your ad budget</span>
            </span>
          </div>
        </div>
        <p className="fine">
          Foundation stands on its own — and every execution program requires it, because each
          program starts from an approved strategy, accountable leadership, a readiness baseline,
          and measurement context. Activation: the $2,950 Marketing Foundation Sprint ($1,475 if
          you prepay your first year).
        </p>
        <p className="fine">
          <strong>Coming later (not available yet, honestly labeled):</strong> Earn Followers ·
          Build Loyalty · Meta advertising.{" "}
          <Link href="/specialty-services">Specialty Services</Link> are custom-quoted through
          your portal — real scopes, real prices, written approval before any work.
        </p>
      </section>

      <section className="page-section section-narrow">
        <p className="eyebrow">Configure your plan</p>
        <h2>Build your estimate</h2>
        <Configurator />
      </section>

      <section className="page-section section-narrow glass-card">
        <p className="eyebrow">The commitments, in plain English</p>
        <ul className="stack">
          <li>
            Foundation runs 12 months; monthly billing is a payment schedule, not a
            month-to-month out. After year one: $1,899 flexible month-to-month (30 days&apos;
            notice either way) or a discounted 12-month renewal at $1,799.
          </li>
          <li>
            Program minimums reflect honest time-to-results — six months for local search, three
            for paid. After the minimum: month-to-month, 30 days&apos; notice; one 30-day pause
            per year at $199 if you need breathing room (Foundation continues).
          </li>
          <li>
            If you add a program, you&apos;re not charged for it until your fCMO validates fit and
            confirms your start date. If it&apos;s not right for you yet, you&apos;ll hear that
            instead of an invoice.
          </li>
          <li>
            The nonrefundable activation fee reserves and funds your Marketing Foundation Sprint —
            completed strategic assets are yours, as defined in your agreement. Overages never
            happen automatically: written approval, then work.
          </li>
          <li>ACH is our preferred payment method (it keeps costs down); cards work too.</li>
          <li>
            Onboarding capacity: 3–4 new clients a month. When we&apos;re full, the waitlist is
            free and honest.
          </li>
        </ul>
      </section>

      <section className="page-section section-narrow">
        <div className="cta-row">
          <Link className="btn" href="/foundation">
            Start with Foundation
          </Link>
          <Link className="btn ghost" href="/contact">
            Talk to us first
          </Link>
        </div>
      </section>
    </main>
  );
}
