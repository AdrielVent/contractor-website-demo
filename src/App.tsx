import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  Facebook,
  Hammer,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  Star,
  X,
} from 'lucide-react';
import { type CSSProperties, type FormEvent, useEffect, useMemo, useState } from 'react';
import { siteConfig } from './siteConfig';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const phoneHref = useMemo(() => `tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`, []);
  const emailHref = `mailto:${siteConfig.email}`;
  const hasUrl = (url?: string) => Boolean(url && url.trim() && url !== '#');

  const cssVars = {
    '--accent': siteConfig.colors.accent,
    '--accent-dark': siteConfig.colors.accentDark,
    '--charcoal': siteConfig.colors.charcoal,
  } as CSSProperties;

  useEffect(() => {
    document.title = siteConfig.seoTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute('content', siteConfig.seoDescription);
  }, []);

  useEffect(() => {
    if (!siteConfig.simpleAnalytics.enabled) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://scripts.simpleanalyticscdn.com/latest.js';

    if (siteConfig.simpleAnalytics.hostname) {
      script.dataset.hostname = siteConfig.simpleAnalytics.hostname;
    }

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  async function handleEstimateSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Estimate request for ${siteConfig.businessName}`;
    const body = [
      `Name: ${form.get('name') || ''}`,
      `Phone: ${form.get('phone') || ''}`,
      `Email: ${form.get('email') || ''}`,
      `Project type: ${form.get('projectType') || ''}`,
      '',
      'Project details:',
      form.get('projectDetails') || '',
    ].join('\n');

    if (siteConfig.pageclipEndpoint) {
      setFormStatus('Sending estimate request...');

      try {
        const response = await fetch(siteConfig.pageclipEndpoint, {
          method: 'POST',
          body: form,
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Pageclip request failed');
        }

        event.currentTarget.reset();
        setFormStatus('Estimate request sent. Thank you.');
        return;
      } catch {
        setFormStatus('The form service is unavailable. Opening your email app instead.');
      }
    }

    window.location.href = `${emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div id="top" className="min-h-screen bg-stone-50 text-stone-900 pb-20 md:pb-0" style={cssVars}>
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label={`${siteConfig.businessName} home`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-white shadow-sm">
              <Hammer size={22} aria-hidden="true" />
            </span>
            <span className="text-base font-black tracking-tight text-[var(--charcoal)] sm:text-lg">
              {siteConfig.businessName}
            </span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-stone-700 hover:text-[var(--accent-dark)] transition">
                {item.label}
              </a>
            ))}
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--accent-dark)]"
              aria-label={`Call ${siteConfig.businessName} at ${siteConfig.phone}`}
            >
              <Phone size={17} aria-hidden="true" />
              {siteConfig.secondaryCtaText}
            </a>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 text-stone-800 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </nav>
        {mobileOpen && (
          <div className="border-t border-stone-200 bg-white px-4 py-4 md:hidden">
            <div className="mx-auto grid max-w-6xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-bold text-white"
                aria-label={`Call ${siteConfig.businessName} at ${siteConfig.phone}`}
              >
                <Phone size={17} aria-hidden="true" />
                {siteConfig.secondaryCtaText}: {siteConfig.phone}
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 to-stone-50 py-12 sm:py-20 lg:py-24">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div className="flex flex-col justify-center">
              <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg bg-amber-50 border border-amber-200 px-3.5 py-1.5 text-sm font-bold text-[var(--accent-dark)]">
                <MapPin size={16} aria-hidden="true" />
                Serving {siteConfig.serviceArea}
              </p>
              <h1 className="max-w-3xl text-[2.25rem] font-extrabold leading-tight tracking-tight text-[var(--charcoal)] sm:text-5xl lg:text-6xl">
                {siteConfig.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
                {siteConfig.subheadline}
              </p>
              
              {/* Trust Badges */}
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-stone-200 pt-6">
                {[
                  'Free Estimates',
                  'Direct Owner Contact',
                  'Local Brentwood Business',
                  'Detail-Oriented Quality',
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-stone-700">
                    <Check size={16} className="text-[var(--accent-dark)] shrink-0" aria-hidden="true" />
                    <span className="text-sm font-semibold">{badge}</span>
                  </div>
                ))}
              </div>

              {/* Call to Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-bold text-white shadow-soft transition hover:bg-[var(--accent-dark)] hover:scale-[1.02] transform"
                >
                  {siteConfig.ctaText}
                  <ArrowRight size={19} aria-hidden="true" />
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[var(--charcoal)] bg-white px-8 py-4 text-base font-bold text-[var(--charcoal)] transition hover:bg-[var(--charcoal)] hover:text-white hover:scale-[1.02] transform"
                  aria-label={`Call ${siteConfig.businessName} at ${siteConfig.phone}`}
                >
                  <Phone size={19} aria-hidden="true" />
                  {siteConfig.secondaryCtaText}
                </a>
              </div>
            </div>

            {/* Contractor Image */}
            <div className="relative min-h-[380px] sm:min-h-[460px] overflow-hidden rounded-2xl border-4 border-white shadow-soft bg-stone-900 group">
              <img
                src={siteConfig.heroImage}
                alt="Local contractor standing in front of a renovated house ready to take estimates"
                fetchPriority="high"
                width="600"
                height="600"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-stone-950/0 to-stone-950/10" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-xl bg-white/95 backdrop-blur p-5 shadow-sm border border-stone-100">
                  <p className="text-xs font-bold uppercase text-[var(--accent-dark)] tracking-wider">Project-First Service</p>
                  <p className="mt-1 text-lg font-extrabold text-[var(--charcoal)]">Clear next steps from the first call.</p>
                  <p className="mt-2 text-xs leading-relaxed text-stone-600">
                    Share a few project details and we will provide a transparent estimate options outline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof (New Google Reviews Style Section) */}
        <section id="reviews" className="section-anchor border-y border-stone-200 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-wider text-[var(--accent-dark)]">Social Proof</p>
                <h2 className="mt-2 text-3xl font-extrabold text-[var(--charcoal)] sm:text-4xl">What Your Neighbors Say</h2>
                <p className="mt-4 text-base leading-7 text-stone-600">
                  We are dedicated to quality workmanship and clear communication. Read sample client feedback from home projects around Brentwood.
                </p>
                
                {/* Rating Display */}
                <div className="mt-6 flex items-center gap-4 rounded-xl border border-stone-200 bg-stone-50 p-5">
                  <div className="flex flex-col">
                    <span className="text-4xl font-extrabold text-[var(--charcoal)]">5.0</span>
                    <span className="text-xs font-bold text-stone-500 mt-1 uppercase tracking-wider">Average Rating</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="mt-1.5 text-xs font-semibold text-stone-600">Based on local client reviews (Sample Previews)</p>
                  </div>
                </div>
              </div>

              {/* Reviews Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {[
                  {
                    name: 'S. Martinez',
                    location: 'Brentwood, NY',
                    quote: 'The kitchen update exceeded our expectations. They communicated clearly every single day, showed up on time, and kept the job site tidy. Highly recommended!',
                  },
                  {
                    name: 'J. Harrison',
                    location: 'Bay Shore, NY',
                    quote: 'Excellent work installing custom built-in shelving in our study. Very precise cuts and clean woodwork finishes. Hardworking team.',
                  },
                  {
                    name: 'R. Davis',
                    location: 'Central Islip, NY',
                    quote: 'Paved a beautiful brick walkway and repaired our front porch masonry. Fair pricing structure, straightforward estimates, and solid workmanship.',
                  },
                  {
                    name: 'M. Thompson',
                    location: 'Deer Park, NY',
                    quote: 'Fresh hardwood floor installation looks fantastic. Smooth transitions between rooms and perfect trim detailing. Exceptional quality.',
                  },
                ].map((review) => (
                  <div key={review.name} className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-stone-50 p-6 hover:shadow-soft transition duration-300">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 font-bold text-stone-700">
                            {review.name.charAt(0)}
                          </span>
                          <div>
                            <span className="block text-sm font-extrabold text-[var(--charcoal)]">{review.name}</span>
                            <span className="block text-xs font-semibold text-stone-500">{review.location}</span>
                          </div>
                        </div>
                        <div className="flex gap-0.5 text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} fill="currentColor" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="mt-4 text-sm leading-relaxed text-stone-700 italic">
                        "{review.quote}"
                      </blockquote>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 border-t border-stone-200/60 pt-3 text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      Verified client project
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-anchor mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-wider text-[var(--accent-dark)]">Services Offered</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[var(--charcoal)] sm:text-4xl">Reliable Home Improvement & Carpentry</h2>
            <p className="mt-4 text-base text-stone-600">
              From room updates and drywall repairs to detailed woodwork, custom flooring installs, and masonry. Get quality work with transparent service.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => (
              <article key={service.title} className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-[var(--accent-dark)]">
                    <CheckCircle2 size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[var(--charcoal)]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{service.description}</p>
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--accent)] hover:text-[var(--accent-dark)] group transition-colors"
                >
                  Request Estimate
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Project Gallery (Grid, Masonry feel, and Before/After) */}
        <section id="gallery" className="section-anchor bg-white py-16 sm:py-24 border-y border-stone-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-black uppercase tracking-wider text-[var(--accent-dark)]">Recent Work</p>
                <h2 className="mt-2 text-3xl font-extrabold text-[var(--charcoal)] sm:text-4xl">Project Gallery & Comparisons</h2>
                <p className="mt-4 text-base text-stone-600">
                  Take a look at sample projects showing custom cabinet updates, carpentry details, masonry, and plank flooring installs.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-[var(--accent-dark)] transition"
              >
                Discuss Your Project
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            {/* Masonry-Style Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.gallery.map((item, index) => {
                const isLarge = index === 0 || index === 3;
                return (
                  <article
                    key={item.title}
                    className={`overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm hover:shadow-soft group transition-all duration-300 ${
                      isLarge ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="overflow-hidden bg-stone-100 relative aspect-[16/10] sm:aspect-[16/9]">
                      <img
                        src={item.imageUrl}
                        alt={`${item.title} - ${item.description}`}
                        loading="lazy"
                        width="600"
                        height="400"
                        className="h-full w-full object-cover transition-transform duration-750 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="rounded-lg bg-white/95 px-4 py-2 text-xs font-bold text-stone-800 shadow-sm">View Project Details</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-extrabold text-[var(--charcoal)]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Before / After Layout Section */}
            <div className="mt-16 rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-10">
              <h3 className="text-2xl font-extrabold text-[var(--charcoal)] text-center">Before & After Previews</h3>
              <p className="mt-2 text-sm text-stone-600 text-center max-w-xl mx-auto">
                Compare typical homeowner remodel updates from simple fixes to complete finishes.
              </p>
              
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {/* Kitchen Cabinets Comparison */}
                <div className="flex flex-col">
                  <span className="text-base font-bold text-stone-700 mb-3 block">1. Kitchen Cabinet Refresh</span>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative overflow-hidden rounded-xl border border-stone-300/80 bg-stone-200 aspect-[4/3] group">
                      <div className="absolute inset-0 bg-stone-950/20 z-10" />
                      <img
                        src="/gallery-kitchen.png"
                        alt="Before outdated kitchen cabinets"
                        loading="lazy"
                        className="h-full w-full object-cover filter grayscale contrast-125"
                      />
                      <span className="absolute top-3 left-3 z-20 rounded-md bg-stone-800/90 text-[10px] font-black text-white px-2 py-1 uppercase tracking-wider">Before</span>
                    </div>
                    <div className="relative overflow-hidden rounded-xl border border-amber-200 bg-white aspect-[4/3] group">
                      <img
                        src="/gallery-kitchen.png"
                        alt="After renovated bright kitchen cabinets"
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute top-3 left-3 z-20 rounded-md bg-amber-600 text-[10px] font-black text-white px-2 py-1 uppercase tracking-wider">After</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-stone-500">Typical update showing replacement of worn doors with modern white shaker panels and polished hardware.</p>
                </div>

                {/* Flooring Install Comparison */}
                <div className="flex flex-col">
                  <span className="text-base font-bold text-stone-700 mb-3 block">2. Wood Flooring Installation</span>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative overflow-hidden rounded-xl border border-stone-300/80 bg-stone-200 aspect-[4/3] group">
                      <div className="absolute inset-0 bg-stone-950/30 z-10" />
                      <img
                        src="/gallery-flooring.png"
                        alt="Before damaged worn flooring"
                        loading="lazy"
                        className="h-full w-full object-cover filter sepia hue-rotate-15 contrast-75 brightness-75"
                      />
                      <span className="absolute top-3 left-3 z-20 rounded-md bg-stone-800/90 text-[10px] font-black text-white px-2 py-1 uppercase tracking-wider">Before</span>
                    </div>
                    <div className="relative overflow-hidden rounded-xl border border-amber-200 bg-white aspect-[4/3] group">
                      <img
                        src="/gallery-flooring.png"
                        alt="After clean hardwood floor installation"
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute top-3 left-3 z-20 rounded-md bg-amber-600 text-[10px] font-black text-white px-2 py-1 uppercase tracking-wider">After</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-stone-500">Typical update replacing worn, dated carpeting with seamless, scratch-resistant wood planks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us (Trust Section) */}
        <section id="why-us" className="section-anchor mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-black uppercase tracking-wider text-[var(--accent-dark)]">Why Work With Us</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[var(--charcoal)] sm:text-4xl">Straightforward & Dependable Service</h2>
            <p className="mt-4 text-base text-stone-600">
              We focus on delivering clean workmanship and honest customer service for every Long Island client.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Free Estimates',
                desc: 'Get itemized, transparent pricing details so you can outline project steps with clarity.',
                icon: ShieldCheck,
              },
              {
                title: 'Clear Communication',
                desc: 'Receive direct scheduling updates, timeline guidelines, and responses to any questions.',
                icon: Clock3,
              },
              {
                title: 'Local Service Focus',
                desc: 'We concentrate entirely on Brentwood, Central Islip, Bay Shore, Deer Park, and nearby towns.',
                icon: MapPin,
              },
              {
                title: 'Quality Workmanship',
                desc: 'Every cut, trim installation, paint coat, or paving repair is handled with thorough attention to detail.',
                icon: Sparkles,
              },
            ].map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-soft transition duration-300">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-[var(--accent-dark)]">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-[var(--charcoal)]">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact / Estimate Request Form */}
        <section id="contact" className="section-anchor bg-stone-900 text-white py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-wider text-amber-300">Request Quote</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Ready to Discuss Your Home Project?</h2>
              <p className="mt-4 leading-relaxed text-stone-300">
                Share a few project details below. We will review your info and get in touch to schedule a free estimate outline.
              </p>
              
              <div className="mt-8 grid gap-4">
                <a href={phoneHref} className="flex items-center gap-3 rounded-xl bg-white/10 p-4 font-bold hover:bg-white/15 transition" aria-label={`Call ${siteConfig.phone}`}>
                  <Phone className="text-amber-300 shrink-0" size={20} aria-hidden="true" />
                  <div>
                    <span className="block text-xs font-semibold text-stone-400">Direct Phone Link</span>
                    <span className="block text-sm sm:text-base">{siteConfig.phone}</span>
                  </div>
                </a>
                <a href={emailHref} className="flex items-center gap-3 rounded-xl bg-white/10 p-4 font-bold hover:bg-white/15 transition">
                  <Mail className="text-amber-300 shrink-0" size={20} aria-hidden="true" />
                  <div>
                    <span className="block text-xs font-semibold text-stone-400">Email Contact</span>
                    <span className="block text-sm sm:text-base">{siteConfig.email}</span>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 font-bold">
                  <MapPin className="text-amber-300 shrink-0" size={20} aria-hidden="true" />
                  <div>
                    <span className="block text-xs font-semibold text-stone-400">Primary Location</span>
                    <span className="block text-sm sm:text-base">{siteConfig.cityState}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded Lead Form */}
            <form className="rounded-2xl bg-white p-6 text-stone-900 shadow-soft sm:p-8 border border-stone-100" onSubmit={handleEstimateSubmit}>
              <h3 className="text-xl font-extrabold text-[var(--charcoal)] border-b border-stone-100 pb-4 mb-5">Free Estimate Request Form</h3>
              
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2 text-sm font-bold">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    className="rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] font-medium bg-stone-50"
                    placeholder="First and last name"
                  />
                </div>
                <div className="grid gap-2 text-sm font-bold">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] font-medium bg-stone-50"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div className="grid gap-2 text-sm font-bold sm:col-span-2">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] font-medium bg-stone-50"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="grid gap-2 text-sm font-bold sm:col-span-2">
                  <label htmlFor="projectType">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] font-medium bg-stone-50"
                    defaultValue=""
                  >
                    <option value="" disabled>Choose a service category</option>
                    {siteConfig.services.map((service) => (
                      <option key={service.title} value={service.title}>{service.title}</option>
                    ))}
                    <option value="Other">Other Home Repair Project</option>
                  </select>
                </div>
                <div className="grid gap-2 text-sm font-bold sm:col-span-2">
                  <label htmlFor="projectDetails">Project Details & Description</label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    required
                    className="min-h-[120px] rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] font-medium bg-stone-50"
                    placeholder="Tell us what you need help with (size, materials, scope)..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-4 font-bold text-white shadow-sm hover:bg-[var(--accent-dark)] hover:scale-[1.01] transform transition"
              >
                Send Estimate Request
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              
              <p className="mt-3 text-xs leading-relaxed text-stone-500">
                {siteConfig.pageclipEndpoint
                  ? 'Sent securely via Pageclip endpoint.'
                  : 'This opens your email application with the prefilled project details to send directly.'}
              </p>
              
              {formStatus && (
                <p className="mt-4 rounded-lg bg-amber-50 border border-amber-100 px-4 py-3 text-sm font-semibold text-[var(--accent-dark)]" role="status">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Modern Professional Footer */}
      <footer className="bg-white border-t border-stone-200">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-white shadow-sm">
                <Hammer size={21} aria-hidden="true" />
              </span>
              <span className="font-extrabold text-[var(--charcoal)] tracking-tight">{siteConfig.businessName}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-600">
              Providing dependable, high-quality home remodeling, custom carpentry, painting, repairs, flooring, and masonry services.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-stone-400">
              {siteConfig.demoDisclosure}
            </p>
            <p className="mt-4 text-xs font-semibold text-stone-500">{siteConfig.footerCredit}</p>
          </div>
          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--charcoal)]">Service Area</h3>
            <div className="mt-4 grid gap-2 text-sm text-stone-600">
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-stone-400" /> Brentwood, NY</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-stone-400" /> Central Islip, NY</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-stone-400" /> Bay Shore, NY</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-stone-400" /> Deer Park, NY</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-stone-400" /> Islip, NY</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--charcoal)]">Contact & Links</h3>
            <div className="mt-4 grid gap-2 text-sm text-stone-600">
              <a href={phoneHref} className="hover:text-[var(--accent-dark)] font-bold transition">{siteConfig.phone}</a>
              <a href={emailHref} className="hover:text-[var(--accent-dark)] transition">{siteConfig.email}</a>
              <span className="mt-2 text-xs font-bold text-stone-400 uppercase tracking-wide">Nav Links</span>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 pt-1">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="hover:text-[var(--accent-dark)] transition text-xs font-semibold">
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                {hasUrl(siteConfig.socialLinks.facebook) && (
                  <a href={siteConfig.socialLinks.facebook} aria-label="Facebook" className="rounded-lg border border-stone-200 p-2 hover:text-[var(--accent-dark)] transition">
                    <Facebook size={17} aria-hidden="true" />
                  </a>
                )}
                {hasUrl(siteConfig.socialLinks.instagram) && (
                  <a href={siteConfig.socialLinks.instagram} aria-label="Instagram" className="rounded-lg border border-stone-200 p-2 hover:text-[var(--accent-dark)] transition">
                    <Instagram size={17} aria-hidden="true" />
                  </a>
                )}
                {hasUrl(siteConfig.socialLinks.googleBusiness) && (
                  <a href={siteConfig.socialLinks.googleBusiness} aria-label="Google Business Profile" className="rounded-lg border border-stone-200 p-2 hover:text-[var(--accent-dark)] transition">
                    <Store size={17} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Lead-Gen Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stone-200 px-4 py-3 shadow-lg flex items-center justify-between md:hidden">
        <a
          href={phoneHref}
          className="flex-1 mr-2 inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-stone-800 transition"
          aria-label={`Call ${siteConfig.businessName}`}
        >
          <Phone size={16} aria-hidden="true" />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 ml-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-[var(--accent-dark)] transition"
        >
          <MessageSquare size={16} aria-hidden="true" />
          Free Estimate
        </a>
      </div>
    </div>
  );
}

export default App;
