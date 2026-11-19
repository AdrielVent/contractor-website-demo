export type SiteConfig = {
  companyName: string;
  productName: string;
  productStatus: string;
  founderName: string;
  email: string;
  portfolioUrl: string;
  hubUrl: string;
  seoTitle: string;
  seoDescription: string;
  contactSubject: string;
  contactBody: string;
};

export const siteConfig: SiteConfig = {
  companyName: 'Vnua Industries',
  productName: 'DatumPane',
  productStatus: 'In development',
  founderName: 'Adriel Ventura',
  // Domain mailbox (Zoho MX records on adrielv.me). Same address Vnua Systems uses.
  email: 'adriel@adrielv.me',
  // Verified 200 on 2026-11-18. Separate repo (AdrielVent/adriel-portfolio); do not edit from here.
  portfolioUrl: 'https://adrielvent.github.io/adriel-portfolio/',
  // Vnua Industries hub: every product, with its status. Separate repo (AdrielVent/vnua-systems).
  hubUrl: 'https://adrielvent.github.io/vnua-systems/',
  seoTitle: 'Vnua Industries | DatumPane, drawing revisions to inspection checklists',
  seoDescription:
    "Vnua Industries is Adriel Ventura's engineering company. DatumPane, in development, is a tool for machine shops to see what changed between drawing revisions and what to inspect.",
  contactSubject: 'DatumPane: how we handle drawing changes',
  contactBody: [
    'Hi Adriel,',
    '',
    'Shop name:',
    'What we machine:',
    'How we handle drawing changes today:',
    '',
  ].join('\n'),
};
