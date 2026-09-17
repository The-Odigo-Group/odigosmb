import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Odigo SMB Works — From Foundation Sprint to Quarterly Reviews",
  description:
    "Your first 30 days, your quarterly rhythm, and how programs attach — with billing rules that protect you.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>A system, not a scramble.</h1>
        <p className="lede">
          Here&apos;s exactly what happens after you join — including the parts most companies
          leave vague.
        </p>
      </section>

      <section className="page-section section-narrow">
        <div className="step-list">
          <div className="step-item glass-card">
            <span className="step-num">1</span>
            <div className="step-body">
              <h3>The Marketing Foundation Sprint — your first 30 days</h3>
              <p>
                You start with a structured sprint, not a discovery limbo. Your fCMO runs a
                working session on your business, then builds your positioning framework,
                messaging, and audience strategy — assets you own from day one. We configure
                ContentGen on your brand, provision your portal, and capture your performance
                baseline.
              </p>
              <p>
                A guided readiness checklist tells you exactly what we need from you (site
                access, Google Business Profile, brand assets) and by when. Go-live is targeted
                within 30 days when access, assets, and participation arrive on time. Plain rule:
                if a delay is on us, your billing start moves; if the checklist stalls on your
                side past day 30, your subscription begins on day 31.
              </p>
            </div>
          </div>

          <div className="step-item glass-card">
            <span className="step-num">2</span>
            <div className="step-body">
              <h3>Your operating rhythm</h3>
              <p>
                Every month: your portal shows website performance and work in progress, and you
                get a plain-English summary. Every quarter: a marketing-health review with your
                fCMO — 60 focused minutes on what the numbers say, what&apos;s working, and the
                1–3 things to do next.
              </p>
              <p>
                Foundation-only, your fCMO&apos;s proactive cadence is quarterly, plus
                exception-triggered involvement; with an active program, they&apos;re your active
                strategic lead on a monthly rhythm. Need something outside your plan? Submit it
                through your portal or your fCMO — you&apos;ll get a real scope and a real price,
                never surprise work on a surprise invoice.
              </p>
            </div>
          </div>

          <div className="step-item glass-card">
            <span className="step-num">3</span>
            <div className="step-body">
              <h3>Programs, when they earn their place</h3>
              <p>
                When your fCMO sees a real opportunity — or you select a program yourself — Get
                Found or Win Customers attaches to your Foundation. Your fCMO validates fit before
                your card is ever charged for a program. If it&apos;s not the right move yet,
                they&apos;ll tell you that too.
              </p>
              <p>
                Honest timelines, always: local search compounds over 6–12 months; paid ads show
                signal in weeks and stabilize around 90 days. We run standardized monthly content
                operations under active engagements today — the Sprint points that same machine at
                your market.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-row">
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
