import Image from "next/image";
import { CtaButtons } from "@/components/CtaButtons";
import { HudProgress } from "@/components/HudProgress";
import { Scene } from "@/components/scene/Scene";

export default function Home() {
  return (
    <>
      <Scene />
      <div className="grain" />
      <div className="vignette" />

      <div className="hud">
        <div className="logo-mark">
          <Image src="/odigologo.png" alt="Odigo Small Business" width={2101} height={686} priority />
        </div>
        <HudProgress />
      </div>

      <main>
        <section className="beat beat-hero" id="beat-0">
          <div className="panel panel-center">
            <div className="logo-mark hero" style={{ margin: "0 auto 22px", justifyContent: "center" }}>
              <Image src="/odigologo.png" alt="Odigo Small Business" width={2101} height={686} priority />
            </div>
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Marketing operating system
            </p>
            <h1>
              You built the business.
              <br />
              Let an <em>fCMO</em> run the marketing.
            </h1>
            <p>
              An assigned fractional CMO, backed by an execution engine — strategy, brand-aligned
              content, and a live diagnostics portal, working as one system so marketing stops
              depending on whatever time you have left in the week.
            </p>
            <p className="cue">Scroll to see how it&apos;s built ↓</p>
          </div>
        </section>

        <section className="beat beat-problem" id="beat-1">
          <div className="panel panel-left">
            <p className="eyebrow">The starting point</p>
            <h2>Right now, you&apos;re the head of marketing.</h2>
            <p>
              Most owner-led service businesses reach $2M–$25M in revenue with marketing still
              running on the owner&apos;s instinct and spare hours. It has outgrown improvisation —
              but it doesn&apos;t need a full internal CMO and a department to match.
            </p>
            <p>That gap is exactly where Odigo SMB sits.</p>
          </div>
        </section>

        <section className="beat" id="beat-2">
          <div className="panel panel-right">
            <p className="eyebrow">Node 01 — Foundation</p>
            <h2>One subscription, always running underneath.</h2>
            <ul className="stack">
              <li>Strategic positioning &amp; messaging</li>
              <li>Personas &amp; brand intelligence</li>
              <li>Brand-aligned content generation</li>
              <li>Marketing-health scorecards &amp; gap detection</li>
              <li>Automated diagnostics &amp; recommendations</li>
              <li>An assigned fCMO, with quarterly health reviews</li>
            </ul>
            <p className="fine">
              Foundation sits underneath every execution program — the always-on layer, not a
              one-time setup.
            </p>
          </div>
        </section>

        <section className="beat" id="beat-3">
          <div className="panel panel-left">
            <p className="eyebrow">Node 02 / 03 — the engine</p>
            <h2>Content and diagnostics, built by two different systems.</h2>
            <div className="split">
              <div className="card">
                <h3>ContentGen</h3>
                <p>
                  Owns positioning inputs, personas, brand intelligence, and brand-aligned content
                  generation.
                </p>
              </div>
              <div className="card">
                <h3>Odigo SMB Portal</h3>
                <p>
                  Owns data integrations, performance monitoring, scorecards, gap detection, alerts,
                  and the fCMO&apos;s portfolio view.
                </p>
              </div>
            </div>
            <p className="fine">
              Foundation bundles both into one price. Neither replaces the fCMO&apos;s judgment —
              they make it faster and more consistent.
            </p>
          </div>
        </section>

        <section className="beat" id="beat-4">
          <div className="panel panel-right">
            <p className="eyebrow">Node 04 / 05 — execution, stage 1</p>
            <h2>Two programs are live. Two are still being built.</h2>
            <div className="programs">
              <div className="prog live">
                <span className="name">
                  Get Found<span className="tag live">Live</span>
                </span>
                <span className="meta">
                  $2,550/mo
                  <br />
                  <b>6-mo</b> minimum
                </span>
              </div>
              <div className="prog live">
                <span className="name">
                  Win Customers<span className="tag live">Live</span>
                </span>
                <span className="meta">
                  $1,950/mo
                  <br />
                  <b>3-mo</b> minimum
                </span>
              </div>
              <div className="prog dev">
                <span className="name">
                  Earn Followers<span className="tag dev">In development</span>
                </span>
                <span className="meta">—</span>
              </div>
              <div className="prog dev">
                <span className="name">
                  Build Loyalty<span className="tag dev">In development</span>
                </span>
                <span className="meta">—</span>
              </div>
            </div>
            <p className="fine">
              Every program is validated by the assigned fCMO for fit, scope, and start date —
              billing begins only after that check, never on self-serve activation alone.
            </p>
          </div>
        </section>

        <section className="beat" id="beat-5">
          <div className="panel panel-left">
            <p className="eyebrow">Node 06 — the person in the loop</p>
            <h2>An fCMO, not a chatbot with a job title.</h2>
            <p>
              Every Foundation client is assigned a real fCMO who reviews the account, runs
              quarterly reviews, and applies independent judgment on top of what the system
              surfaces.
            </p>
            <p>Backed by The Odigo Group&apos;s marketing team for delivery capacity and hands-on expertise.</p>
          </div>
        </section>

        <section className="beat beat-cta" id="beat-6">
          <div className="panel panel-center panel-cta">
            <p className="eyebrow">System readout</p>
            <h2>What it costs to turn it on.</h2>
            <div className="rates">
              <div className="rate-row">
                <span className="label">Foundation</span>
                <span className="amt">
                  <span className="price">$1,899/mo</span>
                  <span className="terms">12-mo commitment</span>
                </span>
              </div>
              <div className="rate-row">
                <span className="label">Get Found</span>
                <span className="amt">
                  <span className="price">$2,550/mo</span>
                  <span className="terms">6-mo minimum</span>
                </span>
              </div>
              <div className="rate-row">
                <span className="label">Win Customers</span>
                <span className="amt">
                  <span className="price">$1,950/mo</span>
                  <span className="terms">3-mo minimum</span>
                </span>
              </div>
            </div>
            <p className="fine">
              Foundation activation is $2,950, reduced by $1,475 when the year is prepaid.
            </p>
            <CtaButtons />
          </div>
        </section>
      </main>

      <footer>Foundation · ContentGen · Odigo SMB Portal — backed by The Odigo Group</footer>
    </>
  );
}
