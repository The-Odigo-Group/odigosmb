import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Powered by ContentGen — The Content Engine Inside Odigo SMB",
  description:
    "ContentGen turns your approved strategy into consistent, brand-aligned content — six deliverable types, trained on your brand, directed by your fCMO.",
};

export default function ContentGenPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Your fCMO leads the strategy. ContentGen helps turn that strategy into consistent, brand-aligned content.</h1>
      </section>

      <section className="page-section section-narrow">
        <p className="eyebrow">What ContentGen is</p>
        <h2>Your brand, configured</h2>
        <p>
          ContentGen is the content platform included in your Foundation subscription. During
          your Sprint we configure it on your brand — your positioning, your voice, your
          audiences — so the content it helps produce sounds like you, not like the internet. It
          currently produces six deliverable types: landing pages, nurture email sequences,
          eBooks, pitch decks, solution overviews, and social banners.
        </p>
      </section>

      <section className="page-section section-narrow">
        <p className="eyebrow">What ContentGen is not</p>
        <h2>Software scales the work — people own the thinking</h2>
        <p>
          It&apos;s not your strategist, and it&apos;s not a replacement for judgment. Your fCMO
          decides what to say, to whom, and why. ContentGen produces brand-aligned drafts from
          your configured positioning and audiences. You review, approve, and publish what you
          create yourself; Odigo&apos;s human editing and QA apply when an active program or
          separately authorized scope includes content production. Your fCMO provides strategic
          direction and prioritization within your service cadence.
        </p>
      </section>

      <section className="page-section section-narrow glass-card">
        <p className="eyebrow">Why it&apos;s in every subscription</p>
        <h2>Consistency, without it depending on your spare hours</h2>
        <p>
          Consistency is where owner-led marketing usually breaks. A brand-trained engine means
          the follow-through happens — month after month — without the follow-through depending
          on your spare hours.
        </p>
        <div className="cta-row" style={{ justifyContent: "flex-start" }}>
          <Link className="btn" href="/foundation">
            See what Foundation includes
          </Link>
          <Link className="btn ghost" href="/pricing">
            Pricing
          </Link>
        </div>
      </section>
    </main>
  );
}
