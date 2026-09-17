import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Odigo SMB — Leadership, Engine, and Ownership",
  description:
    "How Odigo SMB compares to tools, agencies, and traditional fractional CMOs — and why you own everything, always.",
};

export default function WhyOdigoSmbPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>What you&apos;re actually choosing between — and how Odigo SMB is structured differently.</h1>
      </section>

      <section className="page-section">
        <p className="eyebrow">Structural comparison</p>
        <h2>Three ways to buy marketing help</h2>
        <div className="table-scroll">
          <table className="compare">
            <thead>
              <tr>
                <th>Approach</th>
                <th>What it gives you</th>
                <th>What&apos;s missing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Marketing tools</td>
                <td>Technology and reporting</td>
                <td>Strategic decisions remain with you</td>
              </tr>
              <tr>
                <td>Execution providers</td>
                <td>Implementation capacity</td>
                <td>Strategic leadership and accountability vary by engagement, and aren&apos;t always included</td>
              </tr>
              <tr>
                <td>Traditional fractional CMO</td>
                <td>Senior strategic leadership</td>
                <td>Execution and technology typically arranged separately</td>
              </tr>
              <tr>
                <td className="col-odigo">Odigo SMB</td>
                <td className="col-odigo">
                  An assigned fCMO leading strategy, execution programs with standardized
                  published scopes, technology (portal visibility + ContentGen), transparent
                  pricing, and defined ownership
                </td>
                <td className="col-odigo">One accountable relationship — compare on leadership, execution, technology, visibility, ownership, pricing transparency, standardized scope, accountability</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section section-narrow">
        <p className="eyebrow">Ownership, precisely</p>
        <h2>The policy, not the pitch</h2>
        <p>
          You own your accounts, data, approved content, and strategic assets — defined in your
          agreement. What doesn&apos;t transfer: ContentGen software, the portal, Odigo&apos;s
          methods, templates, and playbooks, third-party software, preexisting IP, and unapproved
          drafts.
        </p>
      </section>

      <section className="page-section section-narrow">
        <p className="eyebrow">The commitment, honestly</p>
        <h2>A 12-month start, then your choice</h2>
        <p>
          Foundation&apos;s initial term is a binding 12-month financial commitment — disclosed
          before you buy — because strategy needs time to establish and evaluate. After year one
          you choose: flexible month-to-month or a discounted new 12-month term. Your accounts,
          data, approved content, and strategic assets remain yours throughout.
        </p>
      </section>

      <section className="page-section section-narrow glass-card callout mauve">
        <p className="eyebrow">Backed by The Odigo Group</p>
        <h2>Enterprise heritage, applied to owner-led business</h2>
        <p>
          Odigo SMB comes from The Odigo Group — a marketing practice that has spent years running
          partner-channel marketing, structured content operations, and playbook-driven delivery
          for enterprise technology companies. That&apos;s experience and methodology, not a
          promise of your results — your results come from your market, your follow-through, and
          the work. What the heritage buys you: tested playbooks and a QA discipline.
        </p>
        <h3 style={{ fontFamily: "var(--display)", fontSize: 17, color: "var(--paper)", marginTop: 20 }}>
          The team standard
        </h3>
        <p>
          Every Odigo SMB client gets an assigned fCMO — an experienced marketer, accountable by
          name — supported by account operations and delivery QA. Verified credentials, published
          methodology, and a review cadence that actually happens.
        </p>
      </section>

      <section className="page-section section-narrow">
        <div className="cta-row">
          <Link className="btn" href="/pricing">
            See pricing
          </Link>
          <Link className="btn ghost" href="/how-it-works">
            How it works
          </Link>
        </div>
      </section>
    </main>
  );
}
