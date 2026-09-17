import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Login — Odigo SMB",
  description: "Sign in to your Odigo SMB client portal.",
};

export default function LoginPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Sign in to your client portal</h1>
        <p className="lede">
          The client portal is a separate system from this marketing site and isn&apos;t wired up
          in this prototype. In production, this page routes straight to portal authentication —
          no site-managed login.
        </p>
        <div className="cta-row">
          <Link className="btn ghost" href="/contact">
            Talk to us instead
          </Link>
        </div>
      </section>
    </main>
  );
}
