import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation — Assigned Fractional CMO + Marketing System | $1,899/mo",
  description:
    "An assigned fCMO, quarterly marketing-health reviews, live portal visibility, and ContentGen — $1,899/month.",
};

export default function FoundationPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Marketing leadership for your business — designed around a 30-day readiness window.</h1>
        <p className="lede">
          Foundation is the core of Odigo SMB: an assigned fractional CMO who leads your marketing
          strategy, strategic assets you own, verified performance visibility, and ContentGen —
          $1,899/month, 12-month commitment, $2,950 Marketing Foundation Sprint activation ($1,475
          with annual prepay).
        </p>
        <div className="cta-row">
          <Link className="btn" href="/pricing">
            See pricing
          </Link>
          <Link className="btn ghost" href="/how-it-works">
            How it works
          </Link>
        </div>
      </section>

      <section className="page-section section-narrow">
        <p className="eyebrow">The sprint</p>
        <h2>Your first 30 days</h2>
        <p>
          A working session on your business → positioning &amp; messaging framework and audience
          profiles you own → ContentGen configured → portal provisioned → baseline captured.
          Targeted for verified go-live within 30 days when required access, assets, and
          participation are provided on time. If a delay is ours, your billing start moves; if the
          checklist stalls on your side past day 30, billing begins day 31.
        </p>
      </section>

      <section className="page-section section-narrow">
        <p className="eyebrow">Every month</p>
        <h2>What&apos;s always running</h2>
        <ul className="stack">
          <li>
            fCMO strategic leadership, with a quarterly proactive marketing-health review and
            exception-triggered involvement within the approved scope
          </li>
          <li>Monitoring and plain-English performance summaries</li>
          <li>Full portal visibility into work in progress</li>
          <li>
            Your ContentGen access: brand-aligned drafts from your configured positioning and
            audiences across six deliverable types — you review, approve, and publish what you
            create; Odigo&apos;s human editing and QA apply when an active program or separately
            authorized scope includes content production
          </li>
          <li>Requests and opportunity identification through your portal or your fCMO</li>
        </ul>
        <p className="fine">
          With an active program, your fCMO becomes your active strategic lead: monthly program
          cadence, performance interpretation, execution direction, and QA oversight — your
          quarterly review continues.
        </p>
      </section>

      <section className="page-section section-narrow">
        <p className="eyebrow">Not included — plainly</p>
        <h2>What Foundation isn&apos;t</h2>
        <p>
          SEO execution, advertising management, social publishing, campaign execution, website
          work, ongoing custom content production, unlimited consulting — execution happens
          through Get Found, Win Customers, future approved programs, approved overages, or
          Specialty Services, each priced and scoped in writing.
        </p>
      </section>

      <section className="page-section section-narrow glass-card callout">
        <p className="eyebrow">The commitment</p>
        <h2>$1,899/month · 12-month term</h2>
        <p>
          Monthly billing is a payment schedule disclosed before purchase, not a month-to-month
          cancellation right; marketing needs sufficient time to establish and evaluate —
          that&apos;s the design, stated up front. The nonrefundable activation fee reserves and
          funds your Marketing Foundation Sprint. Strategic assets completed through the Sprint
          are yours, as defined in your agreement. Timely completion depends on your access,
          assets, participation, approvals, and readiness — incomplete readiness or abandonment
          doesn&apos;t create a refund right. Ownership applies to completed, approved client
          assets — not Odigo&apos;s methods, templates, software, or unfinished drafts.
        </p>
        <p>
          After year one: <strong>$1,899 flexible month-to-month</strong>, or a{" "}
          <strong>discounted 12-month renewal at $1,799</strong>.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/pricing">
            See full pricing
          </Link>
          <Link className="btn ghost" href="/powered-by-contentgen">
            What ContentGen does
          </Link>
        </div>
      </section>
    </main>
  );
}
