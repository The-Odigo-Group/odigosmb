import Link from "next/link";

type Fact = { num: string; unit?: string; label: string };

type Props = {
  name: string;
  lede: string;
  includedLead: string;
  included: string[];
  need?: { heading: string; paragraphs: string[] };
  facts: Fact[];
  note: string;
};

export function ProgramPage({ name, lede, includedLead, included, need, facts, note }: Props) {
  return (
    <main>
      <section className="page-hero">
        <p className="kicker">Program</p>
        <h1>{name}</h1>
        <p className="lede">{lede}</p>
      </section>

      <section className="page-section">
        <div className="split-2">
          <div>
            <h2>What&apos;s included</h2>
            <p className="muted">{includedLead}</p>
          </div>
          <ul className="bullets">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {need && (
        <section className="page-section">
          <div className="band split-2">
            <h2>{need.heading}</h2>
            <div>
              {need.paragraphs.map((p, i) => (
                <p key={p} className={i === 0 ? "big-text" : "muted"}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="page-section">
        <div className="facts">
          {facts.map((f) => (
            <div key={f.label} className="stat-tile">
              <span className="num">
                {f.num}
                {f.unit && <small>{f.unit}</small>}
              </span>
              <span className="label">{f.label}</span>
            </div>
          ))}
        </div>
        <p>{note}</p>
        <div className="cta-row" style={{ justifyContent: "flex-start" }}>
          <Link className="btn" href="/pricing#estimate">
            Build your estimate
          </Link>
          <Link className="btn ghost" href="/contact">
            Talk to us first
          </Link>
        </div>
      </section>
    </main>
  );
}
