"use client";

import { useState } from "react";

export function SpecialtyForm() {
  const [submitted, setSubmitted] = useState(false);

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
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-field">
        <label htmlFor="sp-name">Name</label>
        <input id="sp-name" name="name" type="text" required />
      </div>
      <div className="form-field">
        <label htmlFor="sp-company">Company</label>
        <input id="sp-company" name="company" type="text" required />
      </div>
      <div className="form-field">
        <label htmlFor="sp-need">What do you need?</label>
        <textarea id="sp-need" name="need" required placeholder="Website project, brand refresh, campaign assets, one-off strategic work…" />
      </div>
      <button type="submit" className="btn">
        Tell us what you need
      </button>
      <p className="form-note">
        This is a prototype form — submissions aren&apos;t sent anywhere yet. In production, every
        request lands in the same system-of-record with an owner and a next step.
      </p>
    </form>
  );
}
