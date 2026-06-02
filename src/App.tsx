import {
  ArrowRight,
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
  X,
} from 'lucide-react';
import { type CSSProperties, type FormEvent, useEffect, useMemo, useState } from 'react';
import { siteConfig } from './siteConfig';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Feedback', href: '#feedback' },
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
    <div id="top" className="min-h-screen bg-stone-50 text-stone-900" style={cssVars}>
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
              <a key={item.href} href={item.href} className="text-sm font-semibold text-stone-700 hover:text-[var(--accent-dark)]">
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
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100"
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
        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 text-sm font-bold text-[var(--accent-dark)]">
                <MapPin size={16} aria-hidden="true" />
                Serving {siteConfig.serviceArea}
              </p>
              <h1 className="max-w-3xl text-[2.15rem] font-black leading-tight tracking-normal text-[var(--charcoal)] sm:text-5xl lg:text-6xl">
                {siteConfig.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">{siteConfig.subheadline}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-4 text-base font-black text-white shadow-soft transition hover:bg-[var(--accent-dark)]"
                >
                  {siteConfig.ctaText}
                  <ArrowRight size={19} aria-hidden="true" />
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-6 py-4 text-base font-black text-stone-900 transition hover:border-[var(--accent)] hover:text-[var(--accent-dark)]"
                  aria-label={`Call ${siteConfig.businessName} at ${siteConfig.phone}`}
                >
                  <Phone size={19} aria-hidden="true" />
                  {siteConfig.secondaryCtaText}
                </a>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-stone-900 shadow-soft">
              <img
                src={siteConfig.heroImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-700/10 to-stone-950/20" />
              <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
                <div className="rounded-lg bg-white p-5 shadow-soft">
                  <p className="text-sm font-bold uppercase text-[var(--accent-dark)]">Project-first service</p>
                  <p className="mt-2 text-2xl font-black text-[var(--charcoal)]">Clear next steps from the first call.</p>
                  <p className="mt-3 text-sm leading-6 text-stone-700">
                    Share a few project details and we will help you decide the best next step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-stone-100">
          <div className="mx-auto grid max-w-6xl gap-3 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[
              ['Long Island Focus', MapPin],
              ['Estimate Request', MessageSquare],
              ['Mobile Friendly', Clock3],
              ['Service Overview', ShieldCheck],
            ].map(([label, Icon]) => (
              <div key={label as string} className="flex items-center gap-3 rounded-lg bg-white px-4 py-4 shadow-sm">
                <Icon className="text-[var(--accent)]" size={21} aria-hidden="true" />
                <span className="text-sm font-bold text-stone-800">{label as string}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="section-anchor mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase text-[var(--accent-dark)]">Services</p>
            <h2 className="mt-2 text-3xl font-black text-[var(--charcoal)] sm:text-4xl">Practical help for common home projects.</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => (
              <article key={service.title} className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-amber-100 text-[var(--accent-dark)]">
                  <CheckCircle2 size={23} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-[var(--charcoal)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-700">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase text-[var(--accent-dark)]">Why Choose Us</p>
              <h2 className="mt-2 text-3xl font-black text-[var(--charcoal)] sm:text-4xl">Straightforward service from start to finish.</h2>
              <p className="mt-4 text-base leading-7 text-stone-700">
                Get a simple way to explain the job, ask questions, and understand what happens next.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Clear Service Menu', 'Customers can quickly understand what type of project fits this business.'],
                ['Direct Contact Options', 'Phone, email, and estimate request paths stay easy to find on every screen size.'],
                ['Photo-Ready Gallery', 'Demo cards are ready to swap with approved client project photos.'],
                ['Local Search Structure', 'Service area and FAQ copy give each demo a focused local-business shape.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg bg-stone-50 p-5">
                  <Sparkles className="text-[var(--accent)]" size={22} aria-hidden="true" />
                  <h3 className="mt-4 font-black text-[var(--charcoal)]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section-anchor mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase text-[var(--accent-dark)]">Gallery</p>
              <h2 className="mt-2 text-3xl font-black text-[var(--charcoal)] sm:text-4xl">Recent work and project examples.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-stone-600">Fictional demo project cards. Swap with approved client photos before launching a real business site.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.gallery.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
                <img
                  src={item.imageUrl}
                  alt=""
                  aria-hidden="true"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-black text-[var(--charcoal)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-700">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="feedback" className="section-anchor bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase text-[var(--accent-dark)]">Sample Feedback</p>
              <h2 className="mt-2 text-3xl font-black text-[var(--charcoal)] sm:text-4xl">Example review-style content.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-600">
                Fictional sample feedback for layout preview only. Replace this section with real approved testimonials or remove it for a client site.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {siteConfig.testimonials.map((testimonial) => (
                <figure key={`${testimonial.name}-${testimonial.location}`} className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-amber-100 px-3 py-2 text-xs font-black uppercase text-[var(--accent-dark)]">
                    <MessageSquare size={15} aria-hidden="true" />
                    Sample feedback
                  </div>
                  <blockquote className="mt-4 text-sm leading-7 text-stone-700">"{testimonial.quote}"</blockquote>
                  <figcaption className="mt-5 text-sm font-black text-[var(--charcoal)]">
                    {testimonial.name}
                    <span className="block font-semibold text-stone-500">{testimonial.location}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase text-[var(--accent-dark)]">FAQ</p>
              <h2 className="mt-2 text-3xl font-black text-[var(--charcoal)] sm:text-4xl">Common questions.</h2>
            </div>
            <div className="grid gap-3">
              {siteConfig.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none text-base font-black text-[var(--charcoal)]">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-xl text-[var(--accent)] group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-stone-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-anchor bg-stone-900 text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase text-amber-300">Free Estimate</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">Ready to talk about your project?</h2>
              <p className="mt-4 leading-7 text-stone-300">Send a few project details by email, or connect an optional Pageclip endpoint for live form submissions.</p>
              <div className="mt-8 grid gap-4">
                <a href={phoneHref} className="flex items-center gap-3 rounded-lg bg-white/10 p-4 font-bold hover:bg-white/15" aria-label={`Call ${siteConfig.businessName} at ${siteConfig.phone}`}>
                  <Phone className="text-amber-300" size={20} aria-hidden="true" />
                  {siteConfig.phone}
                </a>
                <a href={emailHref} className="flex items-center gap-3 rounded-lg bg-white/10 p-4 font-bold hover:bg-white/15">
                  <Mail className="text-amber-300" size={20} aria-hidden="true" />
                  {siteConfig.email}
                </a>
                <p className="flex items-center gap-3 rounded-lg bg-white/10 p-4 font-bold">
                  <MapPin className="text-amber-300" size={20} aria-hidden="true" />
                  {siteConfig.cityState}
                </p>
              </div>
            </div>
            <form className="rounded-lg bg-white p-5 text-stone-900 shadow-soft sm:p-6" onSubmit={handleEstimateSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label htmlFor="name" className="grid gap-2 text-sm font-bold">
                  Name
                  <input id="name" name="name" autoComplete="name" required className="rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[var(--accent)]" placeholder="Your name" />
                </label>
                <label htmlFor="phone" className="grid gap-2 text-sm font-bold">
                  Phone
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required className="rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[var(--accent)]" placeholder="Best phone number" />
                </label>
                <label htmlFor="email" className="grid gap-2 text-sm font-bold sm:col-span-2">
                  Email
                  <input id="email" name="email" type="email" autoComplete="email" className="rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[var(--accent)]" placeholder="Email address" />
                </label>
                <label htmlFor="projectType" className="grid gap-2 text-sm font-bold sm:col-span-2">
                  Project Type
                  <select id="projectType" name="projectType" className="rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[var(--accent)]" defaultValue="">
                    <option value="" disabled>
                      Choose a service
                    </option>
                    {siteConfig.services.map((service) => (
                      <option key={service.title}>{service.title}</option>
                    ))}
                  </select>
                </label>
                <label htmlFor="projectDetails" className="grid gap-2 text-sm font-bold sm:col-span-2">
                  Project Details
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    className="min-h-32 rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[var(--accent)]"
                    placeholder="Tell us what you need help with"
                    required
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-4 font-black text-white hover:bg-[var(--accent-dark)]"
              >
                Send Estimate Request
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <p className="mt-3 text-xs leading-5 text-stone-500">
                {siteConfig.pageclipEndpoint
                  ? 'This sends through the configured Pageclip form endpoint.'
                  : 'This opens your email app so you can send the project details directly.'}
              </p>
              {formStatus && (
                <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-[var(--accent-dark)]" role="status">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
                <Hammer size={21} aria-hidden="true" />
              </span>
              <span className="font-black text-[var(--charcoal)]">{siteConfig.businessName}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-stone-600">
              Local home repair and improvement services in {siteConfig.serviceArea}.
            </p>
            <p className="mt-3 text-xs leading-5 text-stone-500">{siteConfig.demoDisclosure}</p>
            <p className="mt-4 text-xs text-stone-500">{siteConfig.footerCredit}</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase text-stone-900">Contact</h3>
            <div className="mt-3 grid gap-2 text-sm text-stone-600">
              <a href={phoneHref} className="hover:text-[var(--accent-dark)]" aria-label={`Call ${siteConfig.businessName} at ${siteConfig.phone}`}>{siteConfig.phone}</a>
              <a href={emailHref} className="hover:text-[var(--accent-dark)]">{siteConfig.email}</a>
              <span>{siteConfig.serviceArea}</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase text-stone-900">Links</h3>
            <div className="mt-3 grid gap-2 text-sm text-stone-600">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-[var(--accent-dark)]">{item.label}</a>
              ))}
              <div className="mt-2 flex gap-2">
                {hasUrl(siteConfig.socialLinks.facebook) && (
                  <a href={siteConfig.socialLinks.facebook} aria-label="Facebook" className="rounded-lg border border-stone-200 p-2 hover:text-[var(--accent-dark)]">
                    <Facebook size={17} aria-hidden="true" />
                  </a>
                )}
                {hasUrl(siteConfig.socialLinks.instagram) && (
                  <a href={siteConfig.socialLinks.instagram} aria-label="Instagram" className="rounded-lg border border-stone-200 p-2 hover:text-[var(--accent-dark)]">
                    <Instagram size={17} aria-hidden="true" />
                  </a>
                )}
                {hasUrl(siteConfig.socialLinks.googleBusiness) && (
                  <a href={siteConfig.socialLinks.googleBusiness} aria-label="Google Business Profile" className="rounded-lg border border-stone-200 p-2 hover:text-[var(--accent-dark)]">
                    <Store size={17} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
