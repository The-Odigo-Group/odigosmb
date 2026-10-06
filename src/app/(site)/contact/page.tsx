import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Talk It Through First — Contact Odigo SMB",
  description:
    "A 30-minute conversation with our team. Bring your numbers and your market, and we'll tell you whether Odigo SMB fits now or later.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Talk it through first</h1>
        <p className="lede">
          A 30-minute conversation with our team. Bring your numbers and your market, and we&apos;ll tell you whether
          Odigo SMB fits now or later.
        </p>
      </section>

      <section className="page-section">
        <div className="contact-grid">
          <div>
            <h2>What to expect</h2>
            <p className="muted">
              We&apos;ll ask about your goals, your busiest and slowest seasons and what you&apos;ve tried. If
              Foundation is a fit, we&apos;ll walk through the Sprint and when you could start. We onboard 3 to 4 new
              clients a month.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
