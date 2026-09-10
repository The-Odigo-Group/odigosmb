"use client";

export function CtaButtons() {
  return (
    <div className="cta-row">
      <button
        className="btn"
        type="button"
        onClick={() =>
          alert("This is a design showcase — connect this button to your intake flow when ready.")
        }
      >
        Talk to an fCMO
      </button>
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
