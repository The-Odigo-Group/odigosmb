"use client";

import { useState } from "react";

export function SpecialtyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="form-success">
        Thanks — that&apos;s logged with your details as the source. Your fCMO (or the assigned
        specialist) will follow up with a written scope and price, no work starting without your
        approval.
      </div>
    );
  }

  return (
    <form
      className="form-grid"
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        setSubmitting(true);
        const formData = new FormData(e.currentTarget);
        try {
          const res = await fetch("/api/specialty", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.get("name"),
              email: formData.get("email"),
              company: formData.get("company"),
              need: formData.get("need"),
            }),
          });
          if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            throw new Error(data.error || "Something went wrong — please try again.");
          }
          setSubmitted(true);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Something went wrong — please try again.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <div className="form-field">
        <label htmlFor="sp-name">Name</label>
        <input id="sp-name" name="name" type="text" required />
      </div>
      <div className="form-field">
        <label htmlFor="sp-email">Email</label>
        <input id="sp-email" name="email" type="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="sp-company">Company</label>
        <input id="sp-company" name="company" type="text" required />
      </div>
      <div className="form-field">
        <label htmlFor="sp-need">What do you need?</label>
        <textarea id="sp-need" name="need" required placeholder="Website project, brand refresh, campaign assets, one-off strategic work…" />
      </div>
      {error && (
        <p className="fine" style={{ color: "var(--mauve)" }}>
          {error}
        </p>
      )}
      <button type="submit" className="btn" disabled={submitting}>
        {submitting ? "Sending…" : "Tell us what you need"}
      </button>
    </form>
  );
}
