import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy — Odigo SMB",
  description: "Privacy policy summary. Placeholder pending legal review.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Privacy</h1>
      </section>
      <section className="page-section section-narrow glass-card">
        <p>
          This page is a placeholder. Consent and data-processing language is a release
          dependency in the approved plan, finalized with legal counsel before public launch — so
          no privacy-policy text is fabricated here.
        </p>
        <p className="fine">
          What we do commit to in this prototype: contact and specialty-request forms create an
          inquiry record only; marketing emails are opt-in and unchecked by default.
        </p>
      </section>
    </main>
  );
}
