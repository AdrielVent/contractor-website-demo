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
  phone: '516-996-2383',
  email: 'adrielvent5@gmail.com',
  cityState: 'Long Island, NY',
  serviceArea: 'Long Island, NY and remote clients',
  headline: 'Mechanical Engineering Student & Technical Builder',
  subheadline:
    'Engineering Intern @ Stellant Systems. I build engineering projects, custom automation scripts, CAD designs, and high-performance websites for local businesses.',
  heroImage: '/adriel-headshot.jpg', // Using Adriel's real headshot!
  ctaText: 'Contact Me',
  secondaryCtaText: 'View Projects',
  seoTitle: 'Adriel Ventura | Mechanical Engineering Student & Web Developer',
  seoDescription:
    'Portfolio of Adriel Ventura, a Hofstra mechanical engineering student and Stellant Systems engineering intern building CAD projects, automation tools, and websites for local businesses.',
  demoDisclosure:
    'Engineering portfolio & web design studio of Adriel Ventura. All project reports and mockups are for presentation purposes.',
  footerCredit: 'Designed and built by Adriel Ventura',
  pageclipEndpoint: '',
  colors: {
    accent: '#f59e0b', // Amber-500
    accentDark: '#d97706', // Amber-605
    charcoal: '#1c1917', // Stone-900 background
  },
  socialLinks: {
    github: 'https://github.com/AdrielVent',
    linkedin: 'https://linkedin.com/in/adrielventura', // Real-looking path
  },
  services: [
    {
      title: 'Local Business Websites',
      description: 'Custom, high-speed, and mobile-first landing pages built specifically to generate calls and capture local leads for trades and businesses.',
      features: ['One-page optimized layouts', 'Mobile-first rendering', 'Prefilled mailto & contact forms', 'Google Business / Reviews integration', 'Vercel / GitHub auto-deployments'],
    },
    {
      title: 'Engineering Portfolio & Documentation',
      description: 'Organized CAD project listings, technical lab sheets, mechanical blueprints, and FEA stress simulations designed to showcase credibility.',
      features: ['Detailed CAD project pages', 'Comprehensive technical reports', 'Blueprint design documentation', 'Simulation visuals & screenshots', 'Clean structure for engineering recruiters'],
    },
    {
      title: 'Automation & Technical Tools',
      description: 'Workflow automation and scripting to eliminate manual spreadsheet work, parse logs, and stream hardware metrics to visual dashboards.',
      features: ['Custom Python scripts', 'Workflow API automations', 'Robust text/data parsing tools', 'Real-time telemetry dashboards', 'AI-assisted scripting integrations'],
    },
  ],
  projects: [
    {
      title: 'Contractor Website Demo',
      category: 'Freelance Web Design',
      description: 'A premium, high-converting lead generation landing page template built for local trades. Features Google reviews integration, before/after comparisons, and mobile-first responsive call actions.',
      tags: ['React', 'Tailwind CSS', 'ESM', 'Vercel Deployment', 'Local SEO'],
      imageUrl: '/screenshot-2.png', // Real screenshot of contractor site!
      link: '#',
    },
    {
      title: 'Internship Voice Log App',
      category: 'iOS / Software Development',
      description: 'A utility iOS application designed for engineering documentation and fieldwork voice logging. Leverages Swift, SwiftUI Live Activities, App Intents, and speech recognition to facilitate hands-free audio tracking.',
      tags: ['Swift', 'SwiftUI', 'App Intents', 'Live Activities', 'Speech Recognition'],
      imageUrl: '/screenshot-1.png', // Xcode / iOS simulator screenshot!
      link: '#',
    },
    {
      title: 'BMO Vault',
      category: 'Mechanical Engineering CAD',
      description: 'A physical high-security locking and storage vault engineered using 3D CAD modeling, FEA mechanical static stress analysis, and tight tolerance design to withstand standard break-in forces.',
      tags: ['CAD Design', 'Autodesk Inventor', 'FEA Simulation', 'Tolerancing'],
      imageUrl: '/fea-l-bracket.jpg', // Real FEA static stress analysis render from portfolio!
      link: '#',
    },
    {
      title: 'Industrial IoT Telemetry System',
      category: 'Hardware-Software Integration',
      description: 'A hardware-software telemetry pipeline monitoring industrial machinery heat dissipation and thermal metrics. Captures sensor inputs and streams real-time telemetry logs to a live dashboard.',
      tags: ['IoT Hardware', 'Arduino/C++', 'WebSockets', 'Telemetry Dashboard'],
      imageUrl: '/heatsink-assembly.png', // Real CAD assembly render of heat sink!
      link: '#',
    },
    {
      title: 'Print Empire Tycoon',
      category: 'Game & Systems Design',
      description: 'A server-authoritative 3D printing factory tycoon business simulator game built on Roblox using Rojo, Luau, and modular game services. Focuses on economy balancing, automated helper bots, and database saves.',
      tags: ['Roblox Studio', 'Luau Scripting', 'Rojo Sync', 'Systems Design'],
      imageUrl: '/printed-linkage.jpg', // Real photo of 3D-printed mechanical linkage!
      link: '#',
    },
    {
      title: 'Brain Mode (AI Blocker)',
      category: 'iOS / Privacy Product',
      description: 'A local-only SwiftUI productivity and self-control application for iOS. Utilizes Screen Time FamilyControls and ManagedSettings to shield selected AI domains, with local App Groups storage and a Safari extension.',
      tags: ['SwiftUI', 'FamilyControls', 'ManagedSettings', 'Safari Content Blocker'],
      imageUrl: '/unity-xr.jpg', // Unity XR interface screen!
      link: '#',
    },
  ],
};
