"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [optIn, setOptIn] = useState(false);

  if (submitted) {
    return (
      <div className="form-success">
        Thanks. Your request is in, and a person on our team will follow up to set up your 30-minute
        conversation.
        {optIn ? " We'll also send occasional marketing emails, since you opted in." : " We won't send you marketing emails."}
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
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.get("name"),
              email: formData.get("email"),
              company: formData.get("company"),
              trade: formData.get("trade"),
              source: formData.get("source"),
              notes: formData.get("notes"),
              marketingOptIn: optIn,
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
        <label htmlFor="c-name">Name</label>
        <input id="c-name" name="name" type="text" required />
      </div>
      <div className="form-field">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" name="email" type="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="c-company">Company</label>
        <input id="c-company" name="company" type="text" required />
      </div>
      <div className="form-field">
        <label htmlFor="c-trade">Trade or industry</label>
        <input id="c-trade" name="trade" type="text" />
      </div>
      <div className="form-field">
        <label htmlFor="c-source">How did you hear about us?</label>
        <select id="c-source" name="source" defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          <option value="referral">Referral</option>
          <option value="search">Search</option>
          <option value="social">Social</option>
          <option value="event">Event / conference</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="c-notes">What&apos;s on your mind?</label>
        <textarea id="c-notes" name="notes" />
      </div>
      <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "var(--muted)" }}>
        <input
          type="checkbox"
          checked={optIn}
          onChange={(e) => setOptIn(e.target.checked)}
          style={{ marginTop: 3, accentColor: "var(--teal-bright)" }}
        />
        Send me occasional marketing emails too. This is optional and off by default.
      </label>
      {error && (
        <p className="fine" style={{ color: "var(--mauve)" }}>
          {error}
        </p>
      )}
      <button type="submit" className="btn" disabled={submitting}>
        {submitting ? "Sending…" : "Request a conversation"}
      </button>
    </form>
  );
}
