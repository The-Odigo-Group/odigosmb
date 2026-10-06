import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works — From Your First 30 Days Onward | Odigo SMB",
  description:
    "What happens after you join Odigo SMB: the 30-day Marketing Foundation Sprint, the Foundation program, adding programs, and what comes after your first six months.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>How it works</h1>
        <p className="lede">What happens after you join, from the first 30 days through the months after your first term.</p>
      </section>

      <section className="page-section">
        <div className="stack-gap">
          <div className="glass-card numbered-card">
            <div className="nc-head">
              <span className="step-num">1</span>
              <h2>The Marketing Foundation Sprint</h2>
            </div>
            <p className="nc-when">Your first 30 days</p>
            <p>
              Your fCMO runs a working session on your business, then builds your goals brief, offer map, personas
              and messaging. We set up ContentGen on your brand, open your portal and capture your performance
              baseline.
            </p>
            <p className="muted">
              A readiness checklist tells you what we need from you, such as site access, your Google Business Profile
              and brand assets, and by when. Go-live is targeted within 30 days when access, assets and participation
              arrive on time. If a delay is on us, your billing start moves. If the checklist stalls on your side past
              day 30, your subscription begins on day 31.
            </p>
          </div>

          <div className="glass-card numbered-card">
            <div className="nc-head">
              <span className="step-num">2</span>
              <h2>The Foundations program</h2>
            </div>
            <p className="nc-when">Months 2 to 6</p>
            <p>
              Each month brings a module: your campaign calendar, channel and budget plan, first campaign content kit,
              launch plan, lead handling playbook, results review and community plan. Your fCMO meets with you monthly
              and signs off every deliverable.
            </p>
            <p className="muted">
              Your quarterly health reviews fall at months 3 and 6, so they review what the program has produced.{" "}
              <Link href="/foundation">See every module</Link>
            </p>
          </div>

          <div className="glass-card numbered-card">
            <div className="nc-head">
              <span className="step-num">3</span>
              <h2>Adding programs</h2>
            </div>
            <p className="nc-when">Any time after the Sprint</p>
            <p>
              When your fCMO sees a real opportunity, or you pick a program yourself, Get Found, Win Customers or Earn
              Followers attaches to your Foundation. Your fCMO validates fit before a program is ever billed, and tells
              you if it isn&apos;t the right move yet.
            </p>
            <p className="muted">
              Local search builds over 6 to 12 months. Paid ads show signal within weeks and settle around 90 days.
            </p>
          </div>

          <div className="glass-card numbered-card">
            <div className="nc-head">
              <span className="step-num">4</span>
              <h2>After your first six months</h2>
            </div>
            <p className="nc-when">Month 7 onward</p>
            <p>
              With a program, Foundation stays at $999 a month underneath it, or you can choose the $1,199 level if
              you&apos;d like more consulting time with your fCMO. On its own, Foundation renews at $1,199 a month and
              includes your ContentGen license, a monthly meeting with your fCMO and email support through your account
              manager.
            </p>
            <p className="muted">
              Need something outside your plan? Request it through your portal or your fCMO, and you&apos;ll get a
              written scope and price before any work starts.
            </p>
          </div>
        </div>

        <div className="cta-row" style={{ justifyContent: "flex-start", marginTop: 32 }}>
          <Link className="btn" href="/pricing">
            See pricing
          </Link>
          <Link className="btn ghost" href="/contact">
            Talk to us first
          </Link>
        </div>
      </section>
    </main>
  );
}
