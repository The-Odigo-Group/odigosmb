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
        <h1>Client Login</h1>
        <p className="lede">If you already have an account with us, log in to the portal.</p>
        <div className="cta-row">
          <Link className="btn" href="https://portal.theodigogroup.com">
            Log in to the portal
          </Link>
          <Link className="btn ghost" href="/contact">
            Talk to us instead
          </Link>
        </div>
      </section>
    </main>
  );
}
