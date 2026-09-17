import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Win Customers — Google Ads + Local Services Ads Management | $1,950/mo",
  description:
    "Professional Google Search and LSA management for managed spend up to $5,000/month. Your ad budget is billed to you directly and never marked up. Three-month minimum. Requires Foundation.",
};

export default function WinCustomersPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Leads this quarter — without the percentage-of-spend conflict.</h1>
        <p className="lede">
          Win Customers is professional Google Search and Local Services Ads management —{" "}
          <strong>$1,950/month for the standard scope (managed spend to $5,000/month).</strong>{" "}
          Your ad budget is billed by Google directly to your card — we never touch it and never
          mark it up. Three-month minimum. Requires Foundation.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/pricing">
            Add Win Customers
          </Link>
          <Link className="btn ghost" href="/contact">
            Ask about fit
          </Link>
        </div>
      </section>

      <section className="page-section section-narrow">
        <p className="eyebrow">Why the fee is structured this way</p>
        <h2>Fixed within your tier — not a percentage of spend</h2>
        <p>
          Percentage-of-spend pricing ties the manager&apos;s revenue to your budget rather than
          your results. Ours is flat by design within each published tier: our fee doesn&apos;t
          change as your spend moves inside a tier.
        </p>
        <p>
          <strong>Your management fee is fixed within the published spend tier</strong> —
          $1,950/month covers professionally managed spend up to $5,000/month. If your media
          budget grows beyond that tier, the additional management scope and price ($500/month for
          $5,000–$10,000; Specialty scoping above $10,000) are agreed in writing before anything
          changes. No percentage-of-spend fee. No automatic overages. No hidden markup.
        </p>
      </section>

      <section className="page-section section-narrow">
        <p className="eyebrow">Published scope</p>
        <h2>What&apos;s included</h2>
        <ul className="stack">
          <li>One Google Ads account + one Local Services Ads profile</li>
          <li>Up to 3 active campaigns, 12 ad groups, 50 keywords</li>
          <li>
            Conversion tracking on up to 2 landing pages plus call reporting — tracking is
            verified before a dollar of spend runs
          </li>
          <li>Weekly optimization (bids, negatives, budgets, pacing)</li>
          <li>A quarterly ContentGen refresh of your landing copy, ad variants, and up to 3 nurture emails</li>
          <li>Monthly performance call with your fCMO reading the numbers, not a dashboard export</li>
        </ul>
        <p className="fine">
          Not included: Meta/social ads (not offered at launch), video, display, landing-page
          builds beyond ContentGen templates, additional accounts or locations — each has a
          published path and price, and nothing is added without your written approval.
        </p>
      </section>

      <section className="page-section section-narrow glass-card callout">
        <p className="eyebrow">The honest timeline</p>
        <h2>Signal in weeks, stable by 90 days</h2>
        <p>
          Paid search shows signal in 2–4 weeks and stabilizes around 90 days as data accumulates
          — that&apos;s the whole reason for the three-month minimum. You&apos;ll see cost per
          lead measured against your own baseline and carefully sourced directional context.
        </p>
        <p>
          You own your ad accounts and their data — defined in your agreement. LSA rewards fast
          answers, so lead response stays in your hands — we&apos;ll set that expectation clearly
          at validation.
        </p>
      </section>

      <section className="page-section section-narrow">
        <p className="fine">
          Your fCMO validates fit before any program billing begins — see{" "}
          <Link href="/how-it-works">how it works</Link>. Related:{" "}
          <Link href="/get-found">Get Found</Link>,{" "}
          <Link href="/hvac-and-trades">HVAC &amp; Trades</Link>.
        </p>
      </section>
    </main>
  );
}
