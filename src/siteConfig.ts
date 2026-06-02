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
  situation: string;
  task: string;
  action: string;
  result: string;
  tools: string[];
  skills: string[];
  challenge: string;
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
  heroImage: '/adriel-headshot.jpg', // Real portrait headshot
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
    accentDark: '#d97706', // Amber-600
    charcoal: '#1c1917', // Stone-900 background
  },
  socialLinks: {
    github: 'https://github.com/AdrielVent',
    linkedin: 'https://linkedin.com/in/adrielventura',
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
      title: 'CPU Heat Sink Thermal Design',
      category: 'Thermal Design / DFMA',
      description: 'Forced-convection heat sink developed for a CPU chip with a 100 W steady-state heat load, predicting thermal resistances and fin heights using analytical models and FEA simulation studies.',
      tags: ['Thermal Design', 'MATLAB', 'Fusion 360', 'DFMA', 'FEA'],
      imageUrl: '/heatsink-assembly.png',
      situation: 'Desktop CPU cooling design project with a 100 W steady-state heat load and 25°C ambient air.',
      task: 'Develop a compact forced-convection heat sink that satisfies the chip temperature limit of ≤85°C and evaluates an internal derated target of ≤70°C.',
      action: 'Programmed a MATLAB resistance/mass solver trade study to identify optimum fin pitch, modeled geometry options in SolidWorks, and simulated thermal conduction using Fusion 360 thermal FEA.',
      result: 'Selected a 15-fin Al-6061 plate-fin design predicted at 69.85°C in MATLAB and 69.775°C in Fusion 360, balancing thermal performance with machining space requirements.',
      tools: ['MATLAB', 'Fusion 360 Thermal FEA', 'SolidWorks', 'Excel'],
      skills: ['Thermal Conduction Analysis', 'Design for Manufacturing (DFMA)', 'Numerical Modeling', 'BOM Planning'],
      challenge: 'Balanced ideal thermal optimization (which favored 17 fins) with tool clearances for fabrication. Reducing to 15 fins lowered mass to 54.6g while keeping temperature below the 70°C target.',
    },
    {
      title: 'FEA Structural Optimization Study',
      category: 'FEA / Structural Analysis',
      description: 'Structural optimization of a load-bearing C-frame mounting arm under extreme static loads, applying boundary conditions and geometric iterations to achieve a high factor of safety and material volume reduction.',
      tags: ['Static FEA', 'SolidWorks Simulation', 'Mesh Convergence', 'ASME Y14.5'],
      imageUrl: '/fea-c-frame.jpg',
      situation: 'A load-bearing C-frame mounting arm experiences structural force loads up to 45,000 N.',
      task: 'Analyze static stress and displacement, optimizing the frame for weight reduction while maintaining a safety factor of ≥1.4 under stress limits.',
      action: 'Created solid models, defined custom boundary constraints and fixed geometry fixtures, and executed static structural FEA mesh simulations in SolidWorks.',
      result: 'Redesigned geometry to achieve a 15% reduction in material volume while maintaining a safety factor of 1.41 and keeping displacement to 1.6 mm.',
      tools: ['SOLIDWORKS Simulation', 'FEA Solvers', 'ASME Y14.5'],
      skills: ['Finite Element Analysis', 'Structural Optimization', 'Geometric Dimensioning & Tolerancing', 'Stress Analysis'],
      challenge: 'Localized stress concentration at inside corners threatened the safety margins. Resolved this by introducing Conic Rho fillets to distribute loading without increasing overall bulk weight.',
    },
    {
      title: 'GD&T / Drawing Packages',
      category: 'ASME Y14.5 GD&T / Drafting',
      description: 'Production-ready engineering drawing packages for multiple mechanical parts, applying ASME Y14.5 Geometric Dimensioning and Tolerancing standards to communicate manufacturing intent.',
      tags: ['GD&T', 'ASME Y14.5', 'Drafting', 'SolidWorks Drawings'],
      imageUrl: '/gdt-drawing.jpg',
      situation: 'Multiple mechanical parts including a shaft collar and mounting plates require manufacturing documentation.',
      task: 'Create detailed drawing sheets that define form, orientation, profile, and location tolerances for production.',
      action: 'Generated orthogonal views, details, and sections in SolidWorks, defining datums and applying feature control frames using ASME Y14.5 standards.',
      result: 'Delivered complete drawing packages with clean tolerance specifications, ensuring correct assembly fits.',
      tools: ['SOLIDWORKS Drawings', 'ASME Y14.5-2009 Standards', 'Tolerance Calc Sheets'],
      skills: ['Engineering Drafting', 'Geometric Dimensioning & Tolerancing', 'Tolerance Stack-up Analysis', 'Fit Classes'],
      challenge: 'Critical mating interfaces on the shaft collar required high concentricity. Resolved this by specifying runout tolerances relative to main datums to prevent binding during rotation.',
    },
    {
      title: 'Internship Voice Log App',
      category: 'iOS / Software Development',
      description: 'An internal mobile audio logging application designed to simplify task logging, voice notes, and Siri Shortcuts actions for technicians during fieldwork.',
      tags: ['Swift', 'SwiftUI', 'App Intents', 'Live Activities', 'ActivityKit'],
      imageUrl: '/screenshot-1.png',
      situation: 'Engineering technicians in high-noise environments require quick hands-free logging of checklist documentation.',
      task: 'Develop a lightweight iOS application allowing technicians to record, pause, and log voice memos offline with quick Siri integration.',
      action: 'Programmed a Swift/SwiftUI interface, integrated ActivityKit for lock-screen Live Activities, and built AppIntents for Siri App Shortcuts.',
      result: 'Delivered a functional app that tracks active logs and handles lock-screen background recording states.',
      tools: ['Xcode', 'Swift', 'SwiftUI', 'Simulator'],
      skills: ['iOS Application Development', 'Background Audio APIs', 'App Intents Framework', 'State Management'],
      challenge: 'iOS lifecycle events frequently paused background recording when the screen locked. Handled interruptions and audio sessions with specialized AVAudioSession configurations.',
    },
    {
      title: 'Contractor Website Demo',
      category: 'Freelance Web Design',
      description: 'A mobile-first, high-converting freelance landing page template designed for contractor lead generation, featuring prefilled inquiries and reviews.',
      tags: ['React', 'Tailwind CSS', 'ESM importmaps', 'SEO Optimization'],
      imageUrl: '/screenshot-2.png',
      situation: 'Local home improvement contractors require an optimized web landing page to capture local customer estimates.',
      task: 'Create a fast, responsive landing page featuring Google review cards, before/after showcase grids, and tap-to-call mobile CTAs.',
      action: 'Coded semantic HTML5 layouts, implemented responsive grids using Tailwind utility classes, and optimized image assets to maximize Lighthouse scores.',
      result: 'Completed a lead-generation template that renders in under 1 second, resulting in a ready-to-use business site.',
      tools: ['React', 'Tailwind CSS', 'Puppeteer', 'Vite/ESM'],
      skills: ['Frontend Development', 'Conversion Rate Optimization (CRO)', 'Mobile UI Layouts', 'SEO Integration'],
      challenge: 'Heavy javascript dependencies slowed down page load times. Resolved by utilizing ESM importmaps to fetch React and Icons from CDNs, bypassing local bundlers.',
    },
    {
      title: 'Print Empire Tycoon Roblox Game',
      category: 'Game / Systems Design',
      description: 'A Rojo-compatible Luau MVP simulation game modeling a 3D printing factory, featuring server-authoritative logic, upgrade terminals, and automated helper bots.',
      tags: ['Roblox Studio', 'Luau Scripting', 'Rojo Sync', 'Systems Design'],
      imageUrl: '/printed-linkage.jpg',
      situation: 'Roblox simulation game loops require robust, server-authoritative code logic to prevent exploits and local memory manipulation.',
      task: 'Design cash transactions, printer timers, upgrades, layout saving, and automation loops using a Luau framework.',
      action: 'Structured services inside ServerScriptService, synced files using Rojo, and bound session saves to DataStore systems.',
      result: 'Built a playable tycoon simulator loop allowing players to buy printers, complete contracts, and automate workflows.',
      tools: ['Roblox Studio', 'Luau', 'Rojo', 'DataStore Services'],
      skills: ['Systems Design', 'Economy Balancing', 'Client-Server Network Replication', 'Game Logic scripting'],
      challenge: 'Massive remote network replication events occurred during layout saves, causing local lag. Optimized by batching player state updates and synchronizing tickers only on state change.',
    },
  ],
};
