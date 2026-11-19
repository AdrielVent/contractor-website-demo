import { useEffect } from 'react';
import { siteConfig } from './siteConfig';

// No TypeScript-only syntax in this file: the production build sends it through in-browser Babel,
// which only gets the few replacements in scripts/build.mjs.

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
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

function App() {
  useEffect(() => {
    document.title = siteConfig.seoTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute('content', siteConfig.seoDescription);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="on-dark border-b border-graphite-line bg-graphite text-chalk">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <a href="#top" className="text-[15px] font-semibold tracking-tight text-chalk no-underline">
            {siteConfig.companyName}
          </a>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6 text-[15px] sm:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav-link">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section aria-labelledby="hero-title" className="on-dark bg-graphite text-chalk">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
            {/* Hero copy: one column of text on the 12-column grid the exhibit also uses */}
            <div className="grid-12 pb-10 pt-10 lg:pb-7 lg:pt-8">
              <p className="mono text-[13px] text-fog lg:col-span-12">
                <span className="text-chalk">{siteConfig.productName}</span>
                <span aria-hidden="true" className="px-2">/</span>
                {siteConfig.productStatus}
              </p>
              <h1 id="hero-title" className="mt-4 text-[2.375rem] font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:col-span-10 lg:text-[3.25rem]">
                See what changed.
                <br />
                Know what to inspect.
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-snug text-fog lg:col-span-8 lg:mt-5 lg:max-w-none">
                DatumPane is being built to help machine-shop quality teams compare drawing revisions and draft inspection
                checks from the changes.
              </p>
              <p className="mt-7 lg:col-span-4 lg:col-start-9 lg:mt-5 lg:self-end">
                <a href="#example" className="btn btn-primary">View bracket example</a>
              </p>
            </div>

            {/* Exhibit: same 12 columns. Caption and drawing in 1–8, the change and its check in 9–12.
                The caption sits above the drawing so the disclosure is read before the figure. */}
            <figure id="example" aria-labelledby="example-caption" className="sheet grid-12 -mx-4 px-4 pb-6 pt-5 sm:-mx-6 sm:px-6 lg:pb-8">
              <figcaption id="example-caption" className="text-[13px] leading-relaxed text-muted sm:max-w-xl lg:col-span-8 lg:max-w-none">
                <span className="mono text-ink">Fig. 1</span>
                <span className="ml-4">DP-EX-01 bracket, front view, Rev B</span>
                <span className="block">
                  <span className="font-medium text-ink">Illustrative example.</span> A fictional part drawn for this page,
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
                      <span className="block text-[15px] font-semibold">{change.characteristic}</span>
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
                    <span className="mono whitespace-nowrap font-medium">{change.revB.limits}</span>.
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

        {/* Founder note */}
        <section id="about" aria-labelledby="about-title" className="section-anchor border-b border-rule">
          <div className="grid-12 mx-auto max-w-6xl gap-y-4 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <h2 id="about-title" className="text-xl font-semibold tracking-tight lg:col-span-4">About</h2>
            <div className="max-w-2xl text-[15px] leading-relaxed text-muted lg:col-span-7 lg:col-start-5">
              <p>
                I'm {siteConfig.founderName}, a mechanical engineering student at Hofstra University. {siteConfig.companyName}{' '}
                is my company, and DatumPane is its first product concept. I'm talking with machine shops before building more,
                so the tool fits how drawing changes are actually handled.
              </p>
              <p className="mt-5">
                <a href={siteConfig.portfolioUrl} className="text-link" target="_blank" rel="noopener noreferrer">
                  Engineering portfolio<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title" className="section-anchor">
          <div className="grid-12 mx-auto max-w-6xl gap-y-4 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <h2 id="contact-title" className="text-xl font-semibold tracking-tight lg:col-span-4">Contact</h2>
            <div className="max-w-2xl lg:col-span-7 lg:col-start-5">
              <p className="text-xl font-medium leading-snug tracking-tight text-ink">
                How does your shop handle drawing changes today?
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Who catches a tightened tolerance before parts run, and where does it get written down? A few lines is plenty.
              </p>
              <p className="mt-6">
                <a href={contactHref} className="btn btn-dark">
                  Talk about your workflow<span className="sr-only"> (opens an email draft)</span>
                </a>
              </p>
              <p className="mt-3 text-[13px] text-muted">
                Opens an email draft to {siteConfig.email}. Please don't send drawings.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="on-dark bg-graphite text-fog">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-[13px] sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 {siteConfig.companyName}</p>
          <p>{siteConfig.productName} is in development.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
