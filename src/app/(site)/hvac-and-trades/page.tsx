import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HVAC & Trades Marketing — fCMO-Led Local Growth | Odigo SMB",
  description:
    "For HVAC, plumbing, electrical, and home-services operators: an assigned fCMO, local search, and flat-fee ads — built on your numbers, not borrowed ones.",
};

export default function HvacTradesPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Marketing leadership for HVAC and trades operators — built on your numbers, not borrowed ones.</h1>
      </section>

      <section className="page-section section-narrow">
        <p className="eyebrow">The honest starting point</p>
        <h2>We start with your baseline, not an industry average</h2>
        <p>
          Most benchmark figures floating around home-services marketing come from mixed
          populations — different trades, ticket sizes, and markets — so we don&apos;t lead with
          them. We start by establishing your baseline in your first 30-day window: your lead
          sources, cost per lead, booking rate, and revenue mix. From there, your fCMO reads
          performance against carefully sourced directional context — with the source, date, and
          population named whenever a number appears — because your results depend on your
          market, service mix, seasonality, competition, close rate, ticket value, capacity, and
          margins.
        </p>
      </section>

      <section className="page-section">
        <p className="eyebrow">What your fCMO actually manages with you</p>
        <div className="grid-3">
          <div className="glass-card">
            <h3 style={{ fontFamily: "var(--display)", fontSize: 16, color: "var(--paper)", marginTop: 0 }}>
              Seasonality &amp; demand
            </h3>
            <p style={{ fontSize: 14, margin: 0 }}>
              Shoulder-season pipeline vs. peak-demand capture, and the service-vs-replacement
              split and what each is worth to you.
            </p>
          </div>
          <div className="glass-card">
            <h3 style={{ fontFamily: "var(--display)", fontSize: 16, color: "var(--paper)", marginTop: 0 }}>
              Capacity &amp; economics
            </h3>
            <p style={{ fontSize: 14, margin: 0 }}>
              Service-area economics (drive time is a cost), marketing pace matched to technician
              and install capacity, and revenue vs. gross margin when judging what a lead is
              worth.
            </p>
          </div>
          <div className="glass-card">
            <h3 style={{ fontFamily: "var(--display)", fontSize: 16, color: "var(--paper)", marginTop: 0 }}>
              Response &amp; reputation
            </h3>
            <p style={{ fontSize: 14, margin: 0 }}>
              Call handling and booking rate before more spend, review velocity as local-search
              fuel, LSA responsiveness discipline, and dealer/co-op dollars where available.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section section-narrow glass-card callout">
        <p className="eyebrow">The programs, in trade terms</p>
        <p>
          <Link href="/get-found">Get Found</Link> compounds local visibility over 6–12 months —
          stated honestly, minimums to match.{" "}
          <Link href="/win-customers">Win Customers</Link> runs Google Search + LSA at a fixed
          fee within your spend tier, spend billed to you and never marked up, tracking verified
          before spend.
        </p>
        <p className="fine">Every claim benchmark-cited; zero client references until permission records exist.</p>
      </section>

      <section className="page-section section-narrow">
        <div className="cta-row">
          <Link className="btn" href="/pricing">
            See pricing
          </Link>
          <Link className="btn ghost" href="/contact">
            Talk to us about your market
          </Link>
        </div>
      </section>
    </main>
  );
}
