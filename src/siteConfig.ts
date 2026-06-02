export type Service = {
  title: string;
  description: string;
  features: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
};

export type SiteConfig = {
  ownerName: string;
  businessName: string;
  phone: string;
  email: string;
  cityState: string;
  serviceArea: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  ctaText: string;
  secondaryCtaText: string;
  seoTitle: string;
  seoDescription: string;
  demoDisclosure: string;
  footerCredit: string;
  pageclipEndpoint: string;
  colors: {
    accent: string;
    accentDark: string;
    charcoal: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    facebook?: string;
    instagram?: string;
  };
  services: Service[];
  projects: Project[];
};

export const siteConfig: SiteConfig = {
  ownerName: 'Adriel Ventura',
  businessName: 'Ventura Digital',
  phone: '(631) 555-0198',
  email: 'adriel@adrielv.me',
  cityState: 'Long Island, NY',
  serviceArea: 'Long Island, Nassau County, Suffolk County, and remote clients',
  headline: 'Custom websites built for local businesses. Engineered to convert.',
  subheadline:
    'Hofstra Mechanical Engineering student and Stellant Systems intern blending rigorous engineering principles with web design, automation, and AI tooling.',
  heroImage: '/contractor-hero.png', // We can keep or change this
  ctaText: 'Work With Me',
  secondaryCtaText: 'View Portfolio',
  seoTitle: 'Adriel Ventura | Long Island Web Designer & Mechanical Engineer',
  seoDescription:
    'Freelance web designer and Hofstra Mechanical Engineering student Adriel Ventura. Custom website development, CAD design, automation, and software engineering in Long Island, NY.',
  demoDisclosure:
    'Freelance web agency & engineering portfolio of Adriel Ventura. All mockups are for preview purposes.',
  footerCredit: 'Designed and built by Adriel Ventura',
  pageclipEndpoint: '',
  colors: {
    accent: '#f59e0b', // Modern amber/yellow accent
    accentDark: '#d97706',
    charcoal: '#18181b', // Premium zinc-900 dark background color
  },
  socialLinks: {
    github: 'https://github.com/AdrielVent',
    linkedin: 'https://linkedin.com/',
  },
  services: [
    {
      title: 'Local Business Web Design',
      description: 'High-speed, SEO-optimized landing pages and websites designed specifically to capture local leads and drive phone calls.',
      features: ['Mobile-first responsiveness', 'Google Reviews integration', 'Lead capturing forms', 'Long Island local SEO set up'],
    },
    {
      title: 'CAD & Engineering Design',
      description: '3D modeling, stress simulations, mechanical engineering project drafts, and design optimizations using modern CAD tools.',
      features: ['Autodesk Inventor & Fusion 360', 'Finite Element Analysis (FEA)', 'Prototype design iterations', 'Manufacturing-ready drafts'],
    },
    {
      title: 'Workflow Automation',
      description: 'Custom automation scripts, python integrations, and AI tool connections to eliminate manual business tasks.',
      features: ['Python script execution', 'API integrations', 'AI-assisted tools', 'Data parsing & telemetry dashboards'],
    },
  ],
  projects: [
    {
      title: 'Contractor Website Demo',
      category: 'Web Design & Lead Generation',
      description: 'A premium, high-converting website built for local service contractors. Features Google reviews integration, mobile-first responsive layout, and custom contact flows designed to capture estimates.',
      tags: ['React', 'Tailwind CSS', 'ESM', 'Local SEO'],
      imageUrl: '/gallery-kitchen.png',
      link: '#',
    },
    {
      title: 'Internship Voice Log App',
      category: 'Software Development',
      description: 'An internal audio logging application designed during my engineering internship at Stellant Systems to simplify voice memos, task tracking, and automated transcriptions for fieldwork documentation.',
      tags: ['Node.js', 'Speech Recognition', 'Web Audio API'],
      imageUrl: '/gallery-carpentry.png',
      link: '#',
    },
    {
      title: 'BMO Vault',
      category: 'Mechanical Engineering',
      description: 'A physical high-security locking and storage vault engineered using 3D CAD modeling, FEA mechanical stress analysis, and prototype tolerances to withstand standard break-in forces.',
      tags: ['CAD', 'Autodesk Inventor', 'FEA Simulation', 'Prototyping'],
      imageUrl: '/gallery-masonry.png',
      link: '#',
    },
    {
      title: 'Industrial IoT Telemetry System',
      category: 'Hardware-Software Integration',
      description: 'A complete telemetry pipeline that monitors industrial machinery health. Collects sensor data using microcontroller hardware and streams real-time logs to a live dashboard with anomaly alerts.',
      tags: ['IoT', 'Arduino', 'WebSockets', 'Telemetry Dashboard'],
      imageUrl: '/gallery-flooring.png',
      link: '#',
    },
  ],
};
