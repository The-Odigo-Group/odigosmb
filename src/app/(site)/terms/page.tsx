import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms — Odigo SMB",
  description: "Program terms summary. Placeholder pending legal review.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Terms</h1>
      </section>
      <section className="page-section section-narrow glass-card">
        <p>
          This page is a placeholder. The governing decisions behind this prototype explicitly
          hold contracting-entity naming and final legal clauses (ownership, activation
          nonrefundability, term/renewal, dunning/suspension/cure/termination, and consent
          language) pending legal review before anything ships publicly — so no legal text is
          fabricated here.
        </p>
        <p className="fine">
          The plain-language commitments this prototype reflects live on the{" "}
          <a href="/pricing">Pricing</a> page.
        </p>
      </section>
    </main>
  );
}
