"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const FOUNDATION_PRICE = 1899;

const PROGRAMS = [
  {
    id: "gf",
    name: "Get Found",
    price: 2550,
    detail: "Local search · 6-mo minimum",
  },
  {
    id: "wc",
    name: "Win Customers",
    price: 1950,
    detail: "Google Search + LSA · 3-mo minimum · managed spend to $5,000/mo",
  },
] as const;

export function Configurator() {
  const [selected, setSelected] = useState<Record<string, boolean>>({ gf: false, wc: false });

  const total = useMemo(
    () =>
      FOUNDATION_PRICE +
      PROGRAMS.reduce((sum, p) => sum + (selected[p.id] ? p.price : 0), 0),
    [selected]
  );

  return (
    <div className="configurator">
      <div className="config-option checked" aria-disabled="true">
        <input type="checkbox" checked readOnly />
        <span className="config-label">
          Foundation
          <small>Always included — required for every program</small>
        </span>
        <span className="config-price">${FOUNDATION_PRICE.toLocaleString()}/mo</span>
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
          <span className="config-price">+${p.price.toLocaleString()}/mo</span>
        </label>
      ))}

      <div className="config-total">
        <span className="label">Estimated monthly</span>
        <span className="amount">${total.toLocaleString()}/mo</span>
      </div>
      <p className="form-note">
        Plus a $2,950 Foundation activation fee ($1,475 with annual prepay). Programs aren&apos;t
        billed until your fCMO validates fit and confirms a start date.
      </p>

      <div className="cta-row" style={{ justifyContent: "flex-start", marginTop: 4 }}>
        <Link className="btn" href="/contact">
          Start with this configuration
        </Link>
      </div>
    </div>
  );
}
