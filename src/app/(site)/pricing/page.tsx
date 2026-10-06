import type { Metadata } from "next";
import { Configurator } from "@/components/site/Configurator";

export const metadata: Metadata = {
  title: "Pricing — Foundation $999/mo, Programs From $1,950/mo | Odigo SMB",
  description:
    "The price, the scope and the commitment are in writing before you buy. Foundation $999/mo, Get Found $2,550/mo, Win Customers $1,950/mo, Earn Followers $2,450/mo.",
};

const PLANS = [
  {
    name: "Foundation",
    text: "Six-month Foundations program with your assigned fCMO, client portal and ContentGen",
    price: "$999",
    sub: "Six-month first term, $999 activation. Required for every program.",
  },
  {
    name: "+ Get Found",
    text: "Google Business Profile, listings, reviews and local search ranking",
    price: "+$2,550",
    sub: "Six-month minimum. With Foundation: $3,549/mo",
  },
  {
    name: "+ Win Customers",
    text: "Google Search and Local Services Ads. Media billed to you, never marked up.",
    price: "+$1,950",
    sub: "Six-month minimum. With Foundation: $2,949/mo",
  },
  {
    name: "+ Earn Followers",
    text: "Three posts a week on Instagram and Facebook, with comments and messages answered",
    price: "+$2,450",
    sub: "Six-month minimum. With Foundation: $3,449/mo",
  },
];

const COMMITMENTS = [
  ["Your first term is six months", "Monthly billing is a payment schedule; the six months is the commitment."],
  [
    "Foundation renews in six-month terms",
    "With a program, it stays at $999 a month, or $1,199 if you'd like more consulting time with your fCMO. On its own, it's $1,199 a month and includes your ContentGen license, a monthly fCMO meeting and email support through your account manager.",
  ],
  [
    "Programs follow the same rhythm",
    "Get Found, Win Customers and Earn Followers each start with a six-month minimum, then renew in six-month terms.",
  ],
  [
    "Notice before every renewal",
    "We send written notice about 45 days before any term ends. You can opt out or change your plan up to 30 days before it renews.",
  ],
  [
    "Response times",
    "We'll provide a substantive response within two business days. Some requests may take longer to resolve, depending on complexity and the information required.",
  ],
  [
    "One pause a year",
    "After a program's minimum, you can pause it once a year for up to 30 days for $199. Foundation continues during the pause.",
  ],
  ["No charge until fit is confirmed", "A program isn't billed until your fCMO validates fit and confirms your start date."],
  [
    "The activation fee funds your Sprint",
    "It's nonrefundable. The strategic assets completed in your Sprint are yours, as defined in your agreement.",
  ],
  [
    "More work, by agreement",
    "A busy stretch is covered. If you consistently need more than your plan includes, your fCMO proposes a package extension built around what you need, and nothing changes until you agree.",
  ],
  [
    "Payment and capacity",
    "ACH is preferred; cards work too. Prices are plus applicable sales tax. We onboard 3 to 4 new clients a month, and the waitlist is free.",
  ],
  ["Your agreement governs", "This is a plain-English summary. Your agreement sets out the full terms."],
];

export default function PricingPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Pricing</h1>
        <p className="lede">
          The price, the scope and the commitment are in writing before you buy. Start with Foundation, then add the
          program your business needs next.
        </p>
      </section>

      <section className="page-section">
        <div className="plan-list">
          {PLANS.map((p) => (
            <div key={p.name} className="plan-row">
              <div>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </div>
              <div className="plan-price">
                <strong>
                  {p.price}
                  <small>/mo</small>
                </strong>
                <span>{p.sub}</span>
              </div>
            </div>
          ))}
          <div className="plan-row total">
            <div>
              <h3>All three programs</h3>
              <p>Foundation with Get Found, Win Customers and Earn Followers</p>
            </div>
            <div className="plan-price">
              <strong>
                $7,949<small>/mo</small>
              </strong>
              <span>Plus your ad budget. Six-month terms on each.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="split-2" style={{ gap: "clamp(20px, 4vw, 48px)", gridTemplateColumns: "1fr 1fr" }}>
          <p className="muted" style={{ margin: 0 }}>
            Every program requires Foundation, because each one starts from an approved strategy, accountable
            leadership, a readiness baseline and measurement context.
          </p>
          <p className="muted" style={{ margin: 0 }}>
            Build Loyalty and Meta advertising aren&apos;t available yet. Specialty Services are quoted through your
            portal, with the scope and price in writing and your approval before work starts.
          </p>
        </div>
      </section>

      <section className="page-section" id="estimate">
        <div className="band">
          <h2>Build your estimate</h2>
          <Configurator />
        </div>
      </section>

      <section className="page-section">
        <h2>The commitments, in plain English</h2>
        <div className="commitments">
          {COMMITMENTS.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
