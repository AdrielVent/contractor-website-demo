export type SiteConfig = {
  companyName: string;
  productName: string;
  productStatus: string;
  founderName: string;
  email: string;
  portfolioUrl: string;
  seoTitle: string;
  seoDescription: string;
  contactSubject: string;
  contactBody: string;
};

export const siteConfig: SiteConfig = {
  companyName: 'VNUA Industries',
  productName: 'DatumPane',
  productStatus: 'In development',
  founderName: 'Adriel Ventura',
  // Existing contact destination from the previous site. Verify before publishing.
  email: 'adrielvent5@gmail.com',
  // Verified 200 on 2026-11-18. Separate repo (AdrielVent/adriel-portfolio); do not edit from here.
  portfolioUrl: 'https://adrielvent.github.io/adriel-portfolio/',
  seoTitle: 'VNUA Industries | DatumPane, drawing revisions to inspection checklists',
  seoDescription:
    'VNUA Industries is a founder-led engineering software company. Its first product, DatumPane, is in development: a tool for machine shops to see what changed between drawing revisions and what to inspect.',
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
