export type Service = {
  title: string;
  description: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  imageUrl: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

export type SiteConfig = {
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
  simpleAnalytics: {
    enabled: boolean;
    hostname?: string;
  };
  colors: {
    accent: string;
    accentDark: string;
    charcoal: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    googleBusiness?: string;
  };
  services: Service[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

// Demo safety note:
// This is a fictional portfolio demo. Do not publish claims about licensing,
// insurance, guarantees, years in business, ratings, reviews, response times, or
// real project photos unless a real client verifies them in writing.
export const siteConfig: SiteConfig = {
  businessName: 'Brentwood Premier Home Improvement',
  phone: '(631) 555-0198',
  email: 'estimates@example.com',
  cityState: 'Brentwood, NY',
  serviceArea: 'Brentwood, Central Islip, Bay Shore, Deer Park, Islip, and nearby Long Island areas',
  headline: 'Home improvement help for Brentwood and nearby Long Island homes.',
  subheadline:
    'From repairs and painting to remodeling, carpentry, flooring, and masonry, share your project details and we will help with the next step.',
  heroImage: '/contractor-hero.png',
  ctaText: 'Get a Free Estimate',
  secondaryCtaText: 'Call Now',
  seoTitle: 'Brentwood Premier Home Improvement | Brentwood, NY Contractor Demo',
  seoDescription:
    'Fictional demo site for Brentwood Premier Home Improvement, featuring home remodeling, carpentry, handyman repairs, painting, flooring, masonry, and concrete services in Brentwood, NY.',
  demoDisclosure:
    'Fictional contractor demo site. Sample content is for portfolio preview only.',
  footerCredit: 'Website built by Adriel Ventura',
  // Optional Pageclip setup:
  // Paste your Pageclip form endpoint here after creating a Pageclip form.
  // Leave blank to keep the safe mailto fallback.
  pageclipEndpoint: '',
  // Optional SimpleAnalytics setup:
  // Keep disabled for this fictional demo. Enable only after a real client approves analytics.
  simpleAnalytics: {
    enabled: false,
    hostname: '',
  },
  colors: {
    accent: '#d97706',
    accentDark: '#92400e',
    charcoal: '#292524',
  },
  socialLinks: {
    facebook: '',
    instagram: '',
    googleBusiness: '',
  },
  services: [
    {
      title: 'Home Remodeling',
      description: 'Room updates, layout refreshes, kitchen improvements, bathroom updates, and finish upgrades.',
    },
    {
      title: 'Custom Carpentry',
      description: 'Trim, shelving, built-ins, doors, baseboards, deck details, and custom woodwork.',
    },
    {
      title: 'Handyman Repairs',
      description: 'Drywall patches, door fixes, hardware installs, small repairs, and punch-list projects.',
    },
    {
      title: 'Painting & Drywall',
      description: 'Interior painting, drywall repair, wall prep, touch-ups, and clean finish work.',
    },
    {
      title: 'Flooring Installation',
      description: 'Plank flooring, tile, transitions, trim details, and repair work for worn floors.',
    },
    {
      title: 'Masonry & Concrete',
      description: 'Walkways, steps, patios, concrete repairs, masonry touch-ups, and exterior hardscape work.',
    },
  ],
  gallery: [
    {
      title: 'Kitchen Refresh',
      description: 'Sample project photo area for cabinets, tile, paint, or finish updates.',
      imageUrl: '/gallery-kitchen.png',
    },
    {
      title: 'Trim Detail',
      description: 'Sample area for carpentry, trim, shelving, or built-in project photos.',
      imageUrl: '/gallery-carpentry.png',
    },
    {
      title: 'Concrete & Masonry',
      description: 'Sample area for walkway, step, patio, or exterior hardscape photos.',
      imageUrl: '/gallery-masonry.png',
    },
    {
      title: 'Flooring Install',
      description: 'Sample area for flooring, transitions, trim, and finished room photos.',
      imageUrl: '/gallery-flooring.png',
    },
  ],
  // Fictional demo note: these are sample review-style blurbs for layout only.
  // Replace with real, client-approved testimonials before publishing for an actual business.
  testimonials: [
    {
      name: 'Sample Homeowner',
      location: 'Brentwood, NY',
      quote:
        'The estimate process was easy to understand, and the project details were explained clearly.',
    },
    {
      name: 'Sample Homeowner',
      location: 'Bay Shore, NY',
      quote:
        'The site makes it simple to see the services offered and request help with a home project.',
    },
    {
      name: 'Sample Homeowner',
      location: 'Central Islip, NY',
      quote:
        'The service list and estimate form make it easy to ask about the right project category.',
    },
  ],
  faqs: [
    {
      question: 'Do you offer free estimates?',
      answer:
        'Use the form or call to share a few project details and ask about estimate availability.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'This demo is written for Brentwood, Central Islip, Bay Shore, Deer Park, Islip, and nearby Long Island areas.',
    },
    {
      question: 'What types of projects do you take on?',
      answer:
        'Services shown here include home remodeling, custom carpentry, handyman repairs, painting and drywall, flooring installation, and masonry or concrete work.',
    },
    {
      question: 'How quickly do you respond?',
      answer:
        'Response times depend on the schedule, project type, and details provided in the estimate request.',
    },
  ],
};
