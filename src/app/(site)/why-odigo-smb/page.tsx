import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Odigo SMB — Three Ways to Buy Marketing Help | Odigo SMB",
  description:
    "Marketing tools, execution providers and traditional fractional CMOs each leave something out. Odigo SMB puts an accountable fCMO, published programs, ContentGen and a client portal in one relationship.",
};

const COMPARE = [
  ["Marketing tools", "Technology and reporting", "Strategic decisions stay with you"],
  ["Execution providers", "Implementation capacity", "Strategic leadership and accountability vary by engagement"],
  ["Traditional fractional CMO", "Senior strategic leadership", "Execution and technology arranged separately"],
  [
    "Odigo SMB",
    "An assigned fCMO leading strategy, programs with published scopes, ContentGen and a client portal, and published pricing",
    "One accountable relationship covering all of it",
  ],
];

export default function WhyOdigoSmbPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Why Odigo SMB</h1>
        <p className="lede">Three common ways to buy marketing help, and how Odigo SMB is put together differently.</p>
      </section>

      <section className="page-section">
        <h2>Compare the options</h2>
        <div className="table-scroll" style={{ marginTop: 22 }}>
          <table className="compare">
            <thead>
              <tr>
                <th>Approach</th>
                <th>What it gives you</th>
                <th>What&apos;s often missing</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map(([approach, gives, missing]) => (
                <tr key={approach} className={approach === "Odigo SMB" ? "row-odigo" : undefined}>
                  <td data-label="Approach">
                    <strong>{approach}</strong>
                  </td>
                  <td data-label="What it gives you">{gives}</td>
                  <td data-label="What's often missing">{missing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>What you own</h2>
        <div className="own-grid" style={{ marginTop: 22 }}>
          <div className="glass-card">
            <h3>Yours</h3>
            <ul className="bullets">
              <li>Your accounts and data</li>
              <li>Your approved content</li>
              <li>The strategic assets from your Sprint and Foundations modules, as defined in your agreement</li>
            </ul>
          </div>
          <div className="glass-card">
            <h3>Stays with Odigo</h3>
            <ul className="bullets">
              <li>ContentGen software and the client portal</li>
              <li>Odigo&apos;s methods, templates and playbooks</li>
              <li>Third-party software, preexisting IP and unapproved drafts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="band split-2">
          <h2>Built on The Odigo Group&apos;s enterprise marketing experience.</h2>
          <div>
            <p className="big-text">
              The Odigo Group has spent years running partner-channel marketing, structured content operations and
              playbook-driven delivery for enterprise technology companies. Odigo SMB brings those playbooks and that
              QA discipline to owner-led businesses.
            </p>
            <p className="muted">
              Your results come from your market, your follow-through and the work. Every client gets an assigned fCMO,
              accountable by name, supported by account operations and delivery QA.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="split-2">
          <h2>A six-month start, then your choice.</h2>
          <div>
            <p>
              Foundation&apos;s first term is six months, disclosed before you buy, because a strategy needs time to
              set up and show results. After that you choose: add a program, keep Foundation on its own, or opt out
              with notice.
            </p>
            <div className="cta-row" style={{ justifyContent: "flex-start" }}>
              <Link className="btn" href="/pricing">
                See pricing
              </Link>
              <Link className="btn ghost" href="/how-it-works">
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
