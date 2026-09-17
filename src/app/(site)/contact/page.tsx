import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Contact Odigo SMB — Talk It Through First",
  description: "A 30-minute conversation with our team — not a pressure funnel.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Prefer to talk it through first? Good instinct.</h1>
        <p className="lede">
          A 30-minute conversation with our team — not a pressure funnel. Bring your numbers, your
          market, and your skepticism; we&apos;ll tell you honestly whether Odigo SMB fits,
          including when the answer is &quot;not yet.&quot;
        </p>
      </section>

      <section className="page-section section-narrow glass-card">
        <ContactForm />
      </section>
    </main>
  );
}
