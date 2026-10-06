"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const FOUNDATION_PRICE = 999;

const PROGRAMS = [
  { id: "gf", name: "Get Found", price: 2550, detail: "Local search, six-month minimum" },
  {
    id: "wc",
    name: "Win Customers",
    price: 1950,
    detail: "Google Search and LSA, six-month minimum, managed spend up to $5,000/mo",
  },
  { id: "ef", name: "Earn Followers", price: 2450, detail: "Organic social with replies handled, six-month minimum" },
] as const;

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

export function Configurator() {
  const [selected, setSelected] = useState<Record<string, boolean>>({ gf: false, wc: false, ef: false });

  const chosen = PROGRAMS.filter((p) => selected[p.id]);
  const total = useMemo(
    () => FOUNDATION_PRICE + PROGRAMS.reduce((sum, p) => sum + (selected[p.id] ? p.price : 0), 0),
    [selected]
  );

  return (
    <div className="estimate-grid">
      <div className="configurator">
        <div className="config-option checked" aria-disabled="true">
          <input type="checkbox" checked readOnly aria-label="Foundation, included with every plan" />
          <span className="config-label">
            Foundation
            <small>Included with every plan</small>
          </span>
          <span className="config-price">{money(FOUNDATION_PRICE)}/mo</span>
        </div>

        {PROGRAMS.map((p) => (
          <label key={p.id} className={`config-option${selected[p.id] ? " checked" : ""}`}>
            <input
              type="checkbox"
              checked={selected[p.id]}
              onChange={(e) => setSelected((s) => ({ ...s, [p.id]: e.target.checked }))}
            />
            <span className="config-label">
              {p.name}
              <small>{p.detail}</small>
            </span>
            <span className="config-price">+{money(p.price)}/mo</span>
          </label>
        ))}
      </div>

      <div className="estimate-summary" aria-live="polite">
        <div className="label">Estimated monthly</div>
        <div className="amount">{money(total)}/mo</div>
        <p className="composition">{["Foundation", ...chosen.map((p) => p.name)].join(" + ")}</p>
        <p>
          Plus a {money(FOUNDATION_PRICE)} activation fee. Programs aren&apos;t billed until your fCMO validates fit
          and confirms a start date.
        </p>
        <p className="muted">
          After your first six months, Foundation on its own renews at $1,199 a month, or stays at{" "}
          {money(FOUNDATION_PRICE)} when you add a program.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/contact">
            Talk to us about this plan
          </Link>
        </div>
      </div>
    </div>
  );
}
