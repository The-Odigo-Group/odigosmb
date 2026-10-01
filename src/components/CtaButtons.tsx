"use client";

import Link from "next/link";

export function CtaButtons() {
  return (
    <div className="cta-row">
      <Link className="btn" href="/contact">
        Talk to an fCMO
      </Link>
      <button
        className="btn ghost"
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to the top
      </button>
    </div>
  );
}
