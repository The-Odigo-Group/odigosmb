import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Odigo SMB — Your own fractional CMO, plus the content engine",
  description:
    "Odigo SMB gives your business an assigned fractional CMO who sets the strategy, and ContentGen to turn it into consistent, brand-aligned content. Foundation is $999 a month.",
};

const SPRINT_STEPS = [
  { title: "The Sprint", items: ["Goals brief", "Offer map", "Personas and messaging"] },
  { title: "Plan the year", items: ["Campaign calendar", "Channel and budget plan"] },
  { title: "Build and launch", items: ["Campaign content kit", "Launch and measurement plan"] },
  { title: "Capture leads", items: ["Lead handling playbook"] },
  { title: "Read the results", items: ["Performance review and test plan"] },
  { title: "Get known locally", items: ["Event and community plan", "Plan for the next six months"] },
];

const NEXT_LINKS = [
  { href: "/get-found", title: "Add Get Found", text: "Local search, listings and reviews" },
  { href: "/win-customers", title: "Add Win Customers", text: "Google Search and Local Services Ads" },
  { href: "/earn-followers", title: "Add Earn Followers", text: "Organic social with replies handled" },
  { href: "/foundation", title: "Keep Foundation", text: "Monthly fCMO meeting, ContentGen and email support" },
];

const PROGRAMS = [
  {
    name: "Get Found",
    href: "/get-found",
    status: "Available",
    text: "Google Business Profile, listings, reviews and local search ranking.",
    price: "$2,550/mo",
    terms: "6-month minimum",
  },
  {
    name: "Win Customers",
    href: "/win-customers",
    status: "Available",
    text: "Google Search and Local Services Ads on a flat fee, with media billed to you.",
    price: "$1,950/mo",
    terms: "6-month minimum",
  },
  {
    name: "Earn Followers",
    href: "/earn-followers",
    status: "Available",
    text: "Three posts a week on Instagram and Facebook, with comments and messages answered.",
    price: "$2,450/mo",
    terms: "6-month minimum",
  },
  {
    name: "Build Loyalty",
    href: null,
    status: "In development",
    text: "Repeat customers and referrals.",
    price: "Later",
    terms: "",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Your own fractional CMO, plus the content engine to carry out the plan.</h1>
        <p className="lede">
          Odigo SMB gives your business an assigned fractional CMO who sets the strategy, and ContentGen to turn
          that strategy into consistent, brand-aligned content. You start with six months of Foundation, then add
          programs when you and your fCMO agree they&apos;ll pay off.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/pricing">
            See pricing
          </Link>
          <Link className="btn ghost" href="/contact">
            Talk to us first
          </Link>
        </div>
        <p className="hero-note">Powered by ContentGen</p>
      </section>

      <section className="page-section">
        <div className="split-2">
          <h2>If you run the business, you probably run the marketing too.</h2>
          <div>
            <p className="big-text">
              Deciding what to post, which ads to try and what to say usually falls to the owner, in whatever time is
              left at the end of the week.
            </p>
            <p className="muted">
              Odigo SMB puts a marketer in that seat. Your fCMO is accountable by name for your strategy, signs off on
              the plans you&apos;ll run, and tells you plainly when a program is worth adding and when it isn&apos;t
              yet.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="band">
          <h2>Six months to get set up and in market.</h2>
          <p>
            Foundation runs as a month-by-month program. Each module ends in a deliverable your fCMO writes and signs
            off, and you keep every one.
          </p>
          <div className="steps-grid">
            {SPRINT_STEPS.map((step, i) => (
              <div key={step.title} className="step-card">
                <span className="step-num">{i + 1}</span>
                <h3>{step.title}</h3>
                <ul className="bullets">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="link-grid">
            {NEXT_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="link-card">
                <strong>{l.title}</strong>
                <span>{l.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>Your fCMO, ContentGen and your portal.</h2>
        <div className="grid-3" style={{ marginTop: 22 }}>
          <div className="glass-card">
            <h3>Your fCMO</h3>
            <p>
              Leads your strategy, writes and signs off each Foundations deliverable, and meets with you every month
              for your first six months.
            </p>
          </div>
          <div className="glass-card">
            <h3>ContentGen</h3>
            <p>
              Your fCMO leads the strategy. ContentGen helps turn that strategy into consistent, brand-aligned content.
            </p>
          </div>
          <div className="glass-card">
            <h3>Your portal</h3>
            <p>
              Holds your plans, deliverables and content calendar, and it&apos;s where you request work outside your
              plan. Performance dashboards are coming.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>Programs you can add.</h2>
        <div className="grid-2" style={{ marginTop: 22 }}>
          {PROGRAMS.map((p) => (
            <div key={p.name} className="glass-card program-card">
              <div className="program-head">
                <h3>{p.name}</h3>
                <span className={`status${p.href ? "" : " soon"}`}>{p.status}</span>
              </div>
              <p>
                {p.text}
                {p.href && (
                  <>
                    {" "}
                    <Link href={p.href}>What&apos;s included</Link>
                  </>
                )}
              </p>
              <div className="price-pill">
                {p.price}
                {p.terms && <small>{p.terms}</small>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="band cta-band">
          <div className="big-price">
            $999<small>/mo</small>
          </div>
          <p>to start Foundation, with a $999 activation fee and a six-month first term.</p>
          <div className="cta-row">
            <Link className="btn" href="/pricing">
              See full pricing
            </Link>
            <Link className="btn ghost" href="/contact">
              Talk to us first
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
