import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Odigo SMB",
  description: "Objections, terms, readiness, validation, billing rails, and ownership — answered plainly.",
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "Why is Foundation required for programs?",
    a: "Every execution program starts from an approved strategy, accountable leadership, a readiness baseline, and measurement context — Foundation is where those come from.",
  },
  {
    q: "Why a 12-month commitment?",
    a: "Marketing compounds; we plan on that horizon, and we put the timelines in writing before you buy. Program minimums are shorter (3–6 months) and match how fast each channel can honestly show results.",
  },
  {
    q: "What if my fCMO says a program isn't right for me?",
    a: "Then you're not charged for it — that's the point of validation. Foundation continues, and you'll get an honest alternative.",
  },
  {
    q: "Who owns my accounts and content?",
    a: "You own your accounts, data, approved content, and strategic assets, as defined in your agreement. What doesn't transfer: ContentGen software, the portal, Odigo's methods, templates, and playbooks, third-party software, preexisting IP, and unapproved drafts.",
  },
  {
    q: "What's ContentGen?",
    a: "Our brand-trained content platform. It produces brand-aligned drafts from your configured positioning and audiences across six deliverable types — you review, approve, and publish what you create; Odigo's human editing and QA apply when an active program or separately authorized scope includes content production.",
  },
  {
    q: "ACH? Really?",
    a: "It keeps processing costs down, which keeps prices honest; cards work fine too.",
  },
  {
    q: "What happens if I miss a payment?",
    a: "You'll hear from us immediately, you'll have a 10-day grace period with service continuing, and your accounts, data, and approved content remain yours and remain accessible.",
  },
  {
    q: "What's your support response time?",
    a: "We'll provide a substantive response within two business days. Some requests may take longer to resolve, depending on complexity and the information required. That's the first substantive human response, not full resolution — automated receipts don't count, and business days exclude weekends and Odigo-observed holidays.",
  },
];

export default function FaqPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Straight answers to the questions we hear most.</h1>
      </section>

      <section className="page-section section-narrow">
        {FAQS.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <div className="faq-body">{f.a}</div>
          </details>
        ))}
      </section>
    </main>
  );
}
