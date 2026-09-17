import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Found — Local Search Program for Service Businesses | $2,550/mo",
  description:
    "Own your local map results. Published scope, honest 6–12 month timeline, $2,550/month with a six-month minimum. Requires Foundation.",
};

export default function GetFoundPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>When customers search, be the business they find.</h1>
        <p className="lede">
          Get Found is our local-search program: your Google Business Profile, listings, reviews,
          and site working together to win the map pack — run by specialists, directed by your
          fCMO. <strong>$2,550/month, six-month minimum. Requires Foundation.</strong>
        </p>
        <div className="cta-row">
          <Link className="btn" href="/pricing">
            Add Get Found
          </Link>
          <Link className="btn ghost" href="/contact">
            Ask your fit question first
          </Link>
        </div>
      </section>

      <section className="page-section section-narrow">
        <p className="eyebrow">Published scope</p>
        <h2>What&apos;s included</h2>
        <ul className="stack">
          <li>One business location and Google Business Profile</li>
          <li>Up to 5 tracked service areas</li>
          <li>Up to 40 directory listings synced and corrected</li>
          <li>Up to 20 tracked keywords</li>
          <li>On-page optimization of up to 8 pages in your first 90 days, then ongoing maintenance</li>
          <li>4 GBP posts a month</li>
          <li>2 content or service-area pages a month — written with ContentGen, edited by humans, one revision round each</li>
          <li>A review system: one automated review-ask flow plus monitoring and drafted responses for up to 20 reviews a month</li>
          <li>A monthly performance call and readout</li>
        </ul>
        <p className="fine">
          Not included: website redesigns or new sites, paid ads, PR or link-buying, video, social
          execution, additional locations. Need more? Every add-on has a published price — an
          additional location is +$650/month; an extra content piece is $350 — and nothing is
          ever added without your written approval first.
        </p>
      </section>

      <section className="page-section section-narrow glass-card callout">
        <p className="eyebrow">The honest timeline</p>
        <h2>6–12 months, compounding</h2>
        <p>
          Local search compounds. Expect early signals in 60–90 days, meaningful movement in
          90–180, and the durable payoff over 6–12 months — that&apos;s why the minimum is six
          months, and why anyone promising page one in 30 days is selling you something else.
        </p>
        <p>
          You own your Google Business Profile, listings profiles, approved content, and data —
          defined in your agreement, and they stay with you if we part ways.
        </p>
      </section>

      <section className="page-section section-narrow">
        <p className="fine">
          Your fCMO validates fit before any program billing begins — see{" "}
          <Link href="/how-it-works">how it works</Link>. Related:{" "}
          <Link href="/win-customers">Win Customers</Link>,{" "}
          <Link href="/hvac-and-trades">HVAC &amp; Trades</Link>.
        </p>
      </section>
    </main>
  );
}
