import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation — Six Months With Your fCMO | Odigo SMB",
  description:
    "Six months with your fCMO to set your strategy, build your plans and get your first campaign in market. $999 a month, plus a $999 activation fee.",
};

const MODULES = [
  ["1", "Business goals", "Marketing goals brief: three business goals, what marketing must do for each, and how it's measured", "Revenue goals, capacity, what has worked before"],
  ["1", "Offerings", "Offer map: each product or service, who buys it, its price tier and margin priority", "Your service list and rough margins"],
  ["1", "Audience and personas", "Persona and segment profiles, with three messaging pillars for each persona", "Who your best customers are and where they come from"],
  ["2", "Campaign calendar", "Six-month campaign calendar built around your busy and slow seasons", "Seasonal patterns, local events, blackout dates"],
  ["2", "Channels and budget", "Channel and budget plan across email, social, ads and direct mail, with ad spend shown separately", "Your monthly budget and existing accounts"],
  ["3", "Campaign content kit", "Content for your first campaign, drafted in ContentGen and approved by your fCMO", "Photos, offers, approvals"],
  ["3", "Launch and measurement", "Launch checklist and measurement plan", "Account access and tracking confirmation"],
  ["4", "Lead capture and follow-up", "Lead handling playbook: where calls and forms land, response times, who follows up", "How leads are handled today"],
  ["5", "Results and testing", "Performance review, test plan and a messaging refresh from customer conversations", "Sales outcomes and customer questions"],
  ["6", "Events and community", "Event and community plan, plus your plan for the next six months", "Event calendar, community ties, budget"],
];

const RUNS = [
  "The worksheet arrives in your portal a week ahead",
  "You work through it with your fCMO in a working session",
  "ContentGen drafts the deliverable where it can",
  "Your fCMO edits and signs it off, and it's filed in your portal",
];

const WHERE = [
  ["Strategy, plans, calendars, playbooks, content kit approval", "Foundation"],
  ["Google Business Profile, listings, reviews, local search", "Get Found"],
  ["Google Search and Local Services Ads", "Win Customers"],
  ["Organic social posting and community management", "Earn Followers"],
  ["Email, website changes, events", "Specialty Services, quoted in writing"],
];

export default function FoundationPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="kicker">Required for every program</p>
        <h1>Foundation</h1>
        <p className="lede">
          Six months with your fCMO to set your strategy, build your plans and get your first campaign in market. $999
          a month, plus a $999 activation fee.
        </p>
      </section>

      <section className="page-section">
        <h2>Ten modules. Each one ends in something you keep.</h2>
        <div className="table-scroll" style={{ marginTop: 22 }}>
          <table className="compare">
            <thead>
              <tr>
                <th>Month</th>
                <th>Module</th>
                <th>Your fCMO delivers</th>
                <th>You bring</th>
              </tr>
            </thead>
            <tbody>
              {MODULES.map(([month, module, delivers, bring]) => (
                <tr key={module}>
                  <td data-label="Month">{month}</td>
                  <td data-label="Module">
                    <strong>{module}</strong>
                  </td>
                  <td data-label="Your fCMO delivers">{delivers}</td>
                  <td data-label="You bring">{bring}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <div className="band split-2">
          <h2>How each module runs.</h2>
          <div className="stack-gap" style={{ gap: 12 }}>
            {RUNS.map((text, i) => (
              <div key={text} className="step-item" style={{ alignItems: "center" }}>
                <span className="step-num">{i + 1}</span>
                <p style={{ margin: 0, color: "var(--paper)", fontWeight: 600 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="split-2">
          <div>
            <h2>Foundation plans the work. Programs run it.</h2>
            <p className="muted">You can run your campaigns yourself with the content kit, or hand the running to a program.</p>
          </div>
          <div className="table-scroll">
            <table className="compare">
              <thead>
                <tr>
                  <th>Work</th>
                  <th>Where it lives</th>
                </tr>
              </thead>
              <tbody>
                {WHERE.map(([work, where]) => (
                  <tr key={work}>
                    <td data-label="Work">{work}</td>
                    <td data-label="Where it lives">
                      <strong>{where}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="facts">
          <div className="stat-tile">
            <span className="num">
              $999<small>/mo</small>
            </span>
            <span className="label">Six-month first term</span>
          </div>
          <div className="stat-tile">
            <span className="num">$999</span>
            <span className="label">One-time activation for your Sprint</span>
          </div>
          <div className="stat-tile">
            <span className="num">
              $1,199<small>/mo</small>
            </span>
            <span className="label">On its own after month 6, or $999 with a program</span>
          </div>
        </div>
        <div className="cta-row" style={{ justifyContent: "flex-start" }}>
          <Link className="btn" href="/contact">
            Talk to us about Foundation
          </Link>
          <Link className="btn ghost" href="/pricing">
            See all pricing
          </Link>
        </div>
      </section>
    </main>
  );
}
