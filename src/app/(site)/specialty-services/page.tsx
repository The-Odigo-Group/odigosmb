import type { Metadata } from "next";
import { SpecialtyForm } from "@/components/site/SpecialtyForm";

export const metadata: Metadata = {
  title: "Specialty Services — Custom Marketing Projects, Properly Scoped",
  description:
    "Website projects, brand refreshes, campaign assets, one-off strategic work — quoted individually with a written scope and a real price.",
};

export default function SpecialtyServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>For the things that don&apos;t fit a program — scoped like they matter.</h1>
        <p className="lede">
          Website projects, brand refreshes, campaign assets, one-off strategic work — quoted
          individually with a written scope, a real price, and your written approval before
          anything starts. No hourly mystery. No surprise invoices. No work without your yes.
        </p>
      </section>

      <section className="page-section section-narrow">
        <p>
          Requests come through your client portal, your fCMO, this page, or email — every one
          lands in the same system with an owner and a next step. Annual pricing is available for
          recurring specialty needs; co-op eligible where your distributors participate.
        </p>
      </section>

      <section className="page-section section-narrow glass-card">
        <p className="eyebrow">Tell us what you need</p>
        <SpecialtyForm />
      </section>
    </main>
  );
}
