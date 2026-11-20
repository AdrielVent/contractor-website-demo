import type React from 'react';
import { siteConfig } from './siteConfig';

// Rendered to static HTML at build time (scripts/build.mjs). Nothing here runs in the browser,
// so no state, effects or event handlers.

// One page per tab. scripts/build.mjs renders each route to its own HTML file
// (index.html, example.html, ...), and Vercel serves them at clean URLs (/example).
export type Route = 'home' | 'example' | 'about' | 'contact' | 'not-found';

const tabs: { route: Route; label: string; href: string }[] = [
  { route: 'home', label: 'Overview', href: '/' },
  { route: 'example', label: 'Example', href: '/example' },
  { route: 'about', label: 'About', href: '/about' },
  { route: 'contact', label: 'Contact', href: '/contact' },
];

const contactHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.contactSubject)}&body=${encodeURIComponent(siteConfig.contactBody)}`;

// One fictional change. Every value on the page comes from here so the exhibit stays consistent.
const change = {
  balloon: '07',
  zone: 'C2',
  characteristic: 'Center-to-center hole spacing',
  revA: { tol: '48.00 ±0.10 mm', limits: '47.90–48.10 mm' },
  revB: { tol: '48.00 ±0.05 mm', limits: '47.95–48.05 mm' },
};

function BracketDrawing() {
  // Clockwise revision cloud around the changed dimension text (x 134–226, y 177–199).
  const top = 'a5.75 5.75 0 0 1 11.5 0 '.repeat(8);
  const right = 'a5.5 5.5 0 0 1 0 11 '.repeat(2);
  const bottom = 'a5.75 5.75 0 0 1 -11.5 0 '.repeat(8);
  const left = 'a5.5 5.5 0 0 1 0 -11 '.repeat(2);
  const cloud = `M134 177 ${top}${right}${bottom}${left}Z`;

  return (
    <svg viewBox="0 0 400 290" role="img" aria-labelledby="drawing-title drawing-desc" className="block h-auto w-full">
      <title id="drawing-title">Fictional bracket DP-EX-01, revision B, front view</title>
      <desc id="drawing-desc">
        A flat bracket, 90.00 by 30.00 millimeters, with two 6.4 millimeter holes. The center-to-center spacing of the
        holes, balloon 07 in drawing zone C2, is marked with a revision cloud and a revision B triangle. It reads 48.00 plus
        or minus 0.05 millimeters.
      </desc>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 1.5 L10 5 L0 8.5 Z" fill="currentColor" />
        </marker>
      </defs>

      {/* Sheet frame and zone grid */}
      <g className="text-[#8a857c]" stroke="currentColor" fill="none" strokeWidth="1">
        <rect x="24" y="22" width="364" height="244" />
        <path d="M115 22v6M206 22v6M297 22v6M24 103.3h6M24 184.7h6" />
      </g>
      <g className="dw-label" fill="#6b665e" textAnchor="middle">
        <text x="69.5" y="16">1</text>
        <text x="160.5" y="16">2</text>
        <text x="251.5" y="16">3</text>
        <text x="342.5" y="16">4</text>
        <text x="14" y="66">A</text>
        <text x="14" y="147">B</text>
        <text x="14" y="229">C</text>
      </g>

      {/* Part */}
      <g stroke="#26282a" fill="none">
        <rect x="60" y="92" width="240" height="80" strokeWidth="2" />
        <circle cx="116" cy="132" r="8.5" strokeWidth="1.6" />
        <circle cx="244" cy="132" r="8.5" strokeWidth="1.6" />
      </g>
      <g stroke="#8a857c" strokeWidth="0.8" strokeDasharray="10 3 2 3" fill="none">
        <path d="M116 84v56M244 84v56M100 132h32M228 132h32" />
      </g>

      {/* Unchanged dimensions */}
      <g className="text-[#5f5a52]" stroke="currentColor" strokeWidth="0.8" fill="none">
        <path d="M60 88V62M300 88V62" />
        <path d="M60 68H300" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
        <path d="M304 92H330M304 172H330" />
        <path d="M324 92V172" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
        <path d="M250 138L258 197H310" />
      </g>
      <g className="dw-dim" fill="#4a463f">
        <text x="180" y="62" textAnchor="middle">90.00</text>
        <text x="330" y="136">30.00</text>
        <text x="261" y="193">2× Ø6.4</text>
      </g>

      {/* The change: the only copper on the drawing */}
      <g className="text-[#8f5230]" stroke="currentColor" fill="none">
        <path d="M116 142V210M244 142V210" strokeWidth="0.8" />
        <path d="M116 204H244" strokeWidth="1" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
        <path d={cloud} strokeWidth="1.3" />
        <path d="M168 205L160 228" strokeWidth="0.9" />
        <circle cx="156" cy="240" r="12" strokeWidth="1.4" />
        <path d="M186 252H214L200 228Z" strokeWidth="1.3" />
      </g>
      <g fill="#8f5230">
        <text className="dw-dim-strong" x="180" y="193" textAnchor="middle">48.00 ±0.05</text>
        <text className="dw-label-strong" x="156" y="244.5" textAnchor="middle">07</text>
        <text className="dw-label-strong" x="200" y="248" textAnchor="middle">B</text>
      </g>

      {/* Title block */}
      <g stroke="#8a857c" strokeWidth="0.8" fill="none">
        <path d="M262 228H388M262 228V266M262 247H388" />
      </g>
      <g className="dw-label" fill="#4a463f">
        <text x="270" y="241">DP-EX-01 BRACKET</text>
        <text x="270" y="260">REV B · MM</text>
      </g>
    </svg>
  );
}

function Header({ route }: { route: Route }) {
  return (
    <header className="on-dark border-b border-graphite-line bg-graphite text-chalk">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 px-4 sm:px-6 lg:px-8">
        <a href="/" className="brand-link">
          <span className="text-chalk">{siteConfig.productName}</span>
          <span className="text-fog">{' '}by {siteConfig.companyName}</span>
        </a>
        <nav aria-label="Site" className="tabs">
          <ul>
            {tabs.map((tab) => (
              <li key={tab.href}>
                <a href={tab.href} aria-current={tab.route === route ? 'page' : undefined}>{tab.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="on-dark bg-graphite text-fog">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-[14px] sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 {siteConfig.companyName}. {siteConfig.productName} is a concept in development.</p>
        <p>
          <a href={siteConfig.hubUrl} className="footer-link">Everything Vnua Industries makes</a>
        </p>
      </div>
    </footer>
  );
}

// Dark band under the header with the page title. The home page uses the larger hero instead.
function PageHead({ kicker, title, children }: { kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="on-dark bg-graphite text-chalk">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-12 lg:pt-14">
        <p className="mono text-[13px] text-fog">{kicker}</p>
        <h1 className="mt-3 text-[2.125rem] font-bold leading-[1.08] tracking-tight sm:text-[2.75rem]">{title}</h1>
        {children ? <div className="mt-4 max-w-2xl text-lg leading-snug text-fog">{children}</div> : null}
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section aria-labelledby="hero-title" className="on-dark bg-graphite text-chalk">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="grid-12 pb-4 pt-10 lg:pt-14">
            <p className="mono text-[13px] text-fog lg:col-span-12">
              <span className="text-chalk">{siteConfig.productName}</span>
              <span aria-hidden="true" className="px-2">/</span>
              {siteConfig.productStatus}
            </p>
            <h1 id="hero-title" className="mt-4 text-[2.375rem] font-bold leading-[1.04] tracking-tight sm:text-5xl lg:col-span-10 lg:text-[3.5rem]">
              See what changed.
              <br />
              Know what to inspect.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-snug text-fog lg:col-span-8 lg:max-w-none">
              DatumPane is being built to help machine-shop quality teams compare drawing revisions and draft inspection
              checks from the changes.
            </p>
            <p className="mt-8 flex flex-wrap gap-3 lg:col-span-12">
              <a href="/example#example" className="btn btn-primary">View bracket example</a>
              <a href="/contact" className="btn btn-ghost">Tell me how your shop does it</a>
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-title" className="border-b border-rule">
        <div className="grid-12 mx-auto max-w-6xl gap-y-6 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="lg:col-span-4">
            <h2 id="how-title" className="text-2xl font-bold tracking-tight">How it's meant to work</h2>
            <p className="mt-2 text-[15px] text-muted">None of this is built yet. This is the plan I'm checking with shops.</p>
          </div>
          <ol className="steps lg:col-span-8">
            <li>
              <span className="mono step-no">1</span>
              <div>
                <h3>Give it two revisions of a drawing</h3>
                <p>The one you've been making parts from, and the new one the customer just sent.</p>
              </div>
            </li>
            <li>
              <span className="mono step-no">2</span>
              <div>
                <h3>See every change, by balloon number</h3>
                <p>Each change is tied to its spot on the drawing, with the old and new values side by side.</p>
              </div>
            </li>
            <li>
              <span className="mono step-no">3</span>
              <div>
                <h3>Get the inspection checks that follow</h3>
                <p>A tighter tolerance becomes a check with its new limits, ready for someone to measure and record.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

function Example() {
  return (
    <>
      <PageHead kicker="Example / DP-EX-01" title="One change, start to finish">
        <p>A made-up bracket goes from revision A to B. One tolerance tightens. Here's what DatumPane would show.</p>
      </PageHead>
      <section aria-label="Bracket example" className="on-dark bg-graphite text-chalk">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <figure id="example" aria-labelledby="example-caption" className="sheet grid-12 -mx-4 px-4 pb-6 pt-5 sm:-mx-6 sm:px-6 lg:pb-8">
            <figcaption id="example-caption" className="text-[13px] leading-relaxed text-muted sm:max-w-xl lg:col-span-8 lg:max-w-none">
              <span className="mono text-ink">Fig. 1</span>
              <span className="ml-4">DP-EX-01 bracket, front view, Rev B</span>
              <span className="block">
                <span className="font-bold text-ink">Illustrative example.</span> A fictional part drawn for this page,
                not a customer or employer drawing and not working software.
              </span>
            </figcaption>
            <p className="mono hidden text-[13px] text-muted lg:col-span-4 lg:block">Rev A → Rev B</p>

            <div className="mt-4 border-t border-rule pt-4 sm:max-w-xl lg:col-span-8 lg:max-w-none lg:pt-5">
              <BracketDrawing />
            </div>

            <div className="mt-6 border-t border-rule lg:col-span-4 lg:mt-4 lg:pt-2">
              {/* The change, matched to balloon 07 on the drawing */}
              <section aria-labelledby="change-title" className="change-07 -mx-3 px-3 pb-5 pt-4">
                <h2 id="change-title" className="flex items-center gap-3">
                  <span className="balloon" aria-hidden="true">{change.balloon}</span>
                  <span>
                    <span className="block text-[15px] font-bold">{change.characteristic}</span>
                    <span className="mono block text-[13px] font-normal text-muted">Change #{change.balloon} · zone {change.zone}</span>
                  </span>
                </h2>
                <table className="spec mt-4 w-full text-left">
                  <caption className="sr-only">Center-to-center hole spacing, revision A and revision B</caption>
                  <thead>
                    <tr>
                      <th scope="col">Rev</th>
                      <th scope="col">Dimension</th>
                      <th scope="col">Limits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-muted">
                      <th scope="row" className="mono">A</th>
                      <td className="mono"><del>{change.revA.tol}</del></td>
                      <td className="mono">{change.revA.limits}</td>
                    </tr>
                    <tr className="is-new">
                      <th scope="row" className="mono">B</th>
                      <td className="mono">{change.revB.tol}</td>
                      <td className="mono">{change.revB.limits}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  Nominal unchanged. The tolerance band narrows from 0.20 mm to 0.10 mm.
                </p>
              </section>

              {/* What the inspector does about it */}
              <section aria-labelledby="action-title" className="border-t border-rule pt-4">
                <h2 id="action-title" className="mono text-[13px] font-normal text-muted">Inspection action</h2>
                <p className="mt-2 text-[15px] leading-relaxed">
                  Measure and record the center-to-center spacing. Rev B limits for this check:{' '}
                  <span className="mono whitespace-nowrap font-bold">{change.revB.limits}</span>.
                </p>
                <dl className="check mt-4">
                  <div>
                    <dt>Check</dt>
                    <dd><span className="mono">#{change.balloon}</span> hole spacing</dd>
                  </div>
                  <div>
                    <dt>Measured</dt>
                    <dd className="text-muted">Not yet recorded</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd className="text-muted">Open</dd>
                  </div>
                </dl>
              </section>
            </div>

            {/* Sources: verified public pages from the founder's research reference list. No projections or private data.
                Sits under the drawing (columns 1–8) on desktop; last on mobile. */}
            <section aria-labelledby="notes-title" className="mt-6 border-t border-rule pt-4 sm:max-w-xl lg:col-span-8 lg:mt-2 lg:max-w-none">
                <h2 id="notes-title" className="mono text-[13px] font-normal text-muted">Notes</h2>
                <ol className="notes mt-2 text-[13px] leading-relaxed text-muted lg:grid lg:grid-cols-2 lg:gap-x-8">
                  <li>
                    Balloon numbers such as #07 tie a drawing characteristic to its inspection record, as in AS9102
                    first-article reports.{' '}
                    <a href="https://lastrev.com/workflows/fai-report-generation" className="text-link" target="_blank" rel="noopener noreferrer">
                      Last Rev, “FAI Report Generation (AS9102)”<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                  <li>
                    Dimensions and tolerances follow ASME Y14.5, the U.S. standard for dimensioning and tolerancing on
                    engineering drawings.{' '}
                    <a href="https://www.asme.org/codes-standards/find-codes-standards/y14-5-dimensioning-tolerancing" className="text-link" target="_blank" rel="noopener noreferrer">
                      ASME Y14.5-2018 (R2024)<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                </ol>
            </section>
          </figure>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <PageHead kicker="About" title="Who's building this" />
      <section aria-label="About Adriel" className="border-b border-rule">
        <div className="grid-12 mx-auto max-w-6xl gap-y-8 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <figure className="lg:col-span-3">
            <img src="/adriel-headshot.jpg" width={1365} height={2048} alt="Adriel Ventura, smiling, arms crossed, in a blue polo" className="portrait" />
          </figure>
          <div className="prose-dp lg:col-span-7 lg:col-start-5">
            <p>
              I'm {siteConfig.founderName}, a mechanical engineering student at Hofstra University. {siteConfig.companyName}{' '}
              is my company. DatumPane is the newest thing it's working on, and it's still a concept.
            </p>
            <p>
              I'm talking with machine shops before I build more, so the tool fits how drawing changes are actually handled,
              not how I guess they're handled.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <li><a href={siteConfig.hubUrl} className="text-link">Everything Vnua Industries makes</a></li>
              <li><a href={siteConfig.portfolioUrl} className="text-link">Engineering portfolio</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Contact() {
  return (
    <>
      <PageHead kicker="Contact" title="How does your shop handle drawing changes today?" />
      <section aria-label="Email Adriel">
        <div className="grid-12 mx-auto max-w-6xl gap-y-4 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl lg:col-span-8">
            <p className="text-xl leading-snug text-ink">
              Who catches a tightened tolerance before parts run, and where does it get written down? A few lines is plenty.
            </p>
            <p className="mt-6">
              <a href={contactHref} className="btn btn-dark">
                Talk about your workflow<span className="sr-only"> (opens an email draft)</span>
              </a>
            </p>
            <p className="mt-3 text-[14px] text-muted">
              Opens an email draft to {siteConfig.email}. Please don't send drawings.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function NotFound() {
  return (
    <PageHead kicker="404" title="That page doesn't exist.">
      <p>
        Try the <a href="/" className="dark-link">overview</a> or the <a href="/example" className="dark-link">bracket example</a>.
      </p>
    </PageHead>
  );
}

const pages: Record<Route, () => React.ReactElement> = {
  home: Home,
  example: Example,
  about: About,
  contact: Contact,
  'not-found': NotFound,
};

function App({ route }: { route: Route }) {
  const Page = pages[route];
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header route={route} />
      <main id="main" className="flex-1">
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;
