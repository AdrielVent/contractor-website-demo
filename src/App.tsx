import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Code,
  Cpu,
  ExternalLink,
  Facebook,
  GraduationCap,
  Hammer,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Settings,
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
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
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

  async function handleEstimateSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Agency Inquiry for ${siteConfig.ownerName}`;
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
      setFormStatus('Sending inquiry...');

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
        setFormStatus('Inquiry sent. Thank you.');
        return;
      } catch {
        setFormStatus('The form service is unavailable. Opening your email app instead.');
      }
    }

    window.location.href = `${emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div id="top" className="min-h-screen bg-stone-950 text-stone-100 pb-20 md:pb-0 font-sans selection:bg-amber-500 selection:text-black" style={cssVars}>
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-stone-900 bg-stone-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3.5" aria-label="Ventura Digital home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 text-black shadow-lg font-black text-xl">
              V
            </span>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-tight text-white leading-none">
                {siteConfig.businessName}
              </span>
              <span className="text-[10px] font-bold text-amber-500 tracking-widest uppercase mt-0.5">
                Engineering & Digital
              </span>
            </div>
          </a>
          
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-stone-400 hover:text-amber-500 transition">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-bold text-black shadow-sm transition hover:bg-amber-600"
            >
              Get a Quote
            </a>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-850 text-stone-400 md:hidden hover:bg-stone-900"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </nav>
        {mobileOpen && (
          <div className="border-t border-stone-900 bg-stone-950 px-4 py-4 md:hidden">
            <div className="mx-auto grid max-w-6xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-stone-300 hover:bg-stone-900 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 text-sm font-bold text-black"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
          {/* Subtle background patterns */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
          
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div className="flex flex-col justify-center">
              <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 text-xs font-bold text-amber-500 uppercase tracking-widest">
                <Sparkles size={13} aria-hidden="true" />
                Freelance Web Designer & Mechanical Engineer
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {siteConfig.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-400">
                {siteConfig.subheadline}
              </p>
              
              {/* Trust/Capabilities Badges */}
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-stone-900 pt-6">
                {[
                  'SEO-Optimized Code',
                  'Professional CAD Modeling',
                  'Process Automation',
                  'Conversion-Driven UI',
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2.5 text-stone-300">
                    <CheckCircle2 size={16} className="text-amber-500 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-semibold">{badge}</span>
                  </div>
                ))}
              </div>

              {/* Call to Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-base font-bold text-black shadow-lg transition hover:bg-amber-600 hover:scale-[1.02] transform"
                >
                  {siteConfig.ctaText}
                  <ArrowRight size={19} aria-hidden="true" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-800 bg-stone-900/50 px-8 py-4 text-base font-bold text-stone-300 transition hover:border-stone-700 hover:bg-stone-900 hover:scale-[1.02] transform"
                >
                  {siteConfig.secondaryCtaText}
                </a>
              </div>
            </div>

            {/* Engineer Profile Mockup Box */}
            <div className="relative min-h-[360px] sm:min-h-[440px] rounded-2xl border border-stone-900 bg-stone-900/30 p-6 flex flex-col justify-between shadow-soft overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
              
              <div className="flex items-center justify-between border-b border-stone-900 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-stone-500">adriel_ventura.sh</span>
              </div>

              <div className="flex-1 py-6 font-mono text-xs sm:text-sm text-stone-400 space-y-3">
                <p className="text-amber-500">
                  <span className="text-stone-500">&gt;</span> cat background.json
                </p>
                <p>
                  &#123;
                  <br />
                  &nbsp;&nbsp;&quot;education&quot;: &quot;Mechanical Engineering @ Hofstra&quot;,
                  <br />
                  &nbsp;&nbsp;&quot;internship&quot;: &quot;Engineering Intern @ Stellant Systems&quot;,
                  <br />
                  &nbsp;&nbsp;&quot;skills&quot;: [&quot;CAD Modeling&quot;, &quot;API Automation&quot;, &quot;Fullstack Web&quot;],
                  <br />
                  &nbsp;&nbsp;&quot;specialty&quot;: &quot;Bridging physical systems & software&quot;
                  <br />
                  &#125;
                </p>
                <p className="text-amber-500">
                  <span className="text-stone-500">&gt;</span> npm run analyze-goals
                </p>
                <p className="text-stone-300">
                  ✔ Custom landing pages designed for high-conversions.
                  <br />
                  ✔ Professional reports and documentation for engineering roles.
                </p>
              </div>

              <div className="rounded-xl border border-stone-850 bg-stone-950/80 p-4 shadow-sm">
                <p className="text-[10px] font-bold uppercase text-amber-500 tracking-wider">Hofstra University & Stellant Systems</p>
                <p className="mt-1 text-sm font-extrabold text-white">Adriel Ventura Portfolio</p>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  Bridging the gap between rigorous physical engineering and modern digital solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-anchor mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:px-8 border-t border-stone-900">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-500">Services</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Technical Services Engineered for Growth</h2>
            <p className="mt-4 text-base text-stone-400">
              I provide specialized technical consulting, creating clean landing pages for businesses and designing systems for engineering tasks.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => {
              const icons = [Code, Settings, Cpu];
              const ServiceIcon = icons[index % icons.length];
              return (
                <article key={service.title} className="flex flex-col justify-between rounded-2xl border border-stone-900 bg-stone-900/20 p-6 shadow-sm hover:shadow-soft hover:border-stone-800 transition duration-300">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-amber-500">
                      <ServiceIcon size={24} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-400">{service.description}</p>
                    
                    <ul className="mt-5 space-y-2 border-t border-stone-900/60 pt-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs font-semibold text-stone-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-amber-500 hover:text-amber-600 transition-colors"
                  >
                    Request Consultation
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section-anchor bg-stone-900/20 py-16 sm:py-24 border-y border-stone-900">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-wider text-amber-500">Featured Portfolio</p>
                <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Showcase of Software & CAD Engineering</h2>
                <p className="mt-4 text-base text-stone-400">
                  Explore selected engineering applications, custom software integrations, and physical model blueprints.
                </p>
              </div>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 border border-stone-800 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-stone-850 transition"
              >
                Deep Dive Projects
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            {/* Masonry-Style Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.projects.map((project, index) => {
                const isLarge = index === 0 || index === 3;
                return (
                  <article
                    key={project.title}
                    className={`overflow-hidden rounded-2xl border border-stone-900 bg-stone-950/40 shadow-sm hover:border-stone-850 group transition duration-300 ${
                      isLarge ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="overflow-hidden bg-stone-900 relative aspect-[16/10] sm:aspect-[16/9]">
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                        <div className="flex justify-between items-start">
                          <span className="rounded bg-amber-500 px-2 py-1 text-[10px] font-bold text-black uppercase tracking-wider">
                            {project.category}
                          </span>
                          <span className="text-stone-400 hover:text-white transition">
                            <ExternalLink size={18} />
                          </span>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">{project.category}</span>
                      <h3 className="text-lg font-extrabold text-white mt-1">{project.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-md bg-stone-900 border border-stone-850 px-2 py-0.5 text-[10px] font-semibold text-stone-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="section-anchor mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-500">About Me</p>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Engineering Student & Technical Professional</h2>
              
              <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-400">
                <p>
                  I am a Mechanical Engineering student at **Hofstra University** and currently work as an engineering intern at **Stellant Systems**. My background provides me with a rigorous foundation in physics, structural analysis, and hardware design, which I apply to web development, automation scripts, and workflow optimizations.
                </p>
                <p>
                  Whether I am coding custom lead-generation websites for Long Island business clients, script-automating digital pipelines, or modeling complex high-tolerance mechanical systems in Autodesk Inventor, I prioritize performance, structured data, and thorough documentation.
                </p>
              </div>

              {/* Milestones / Education / Internships details */}
              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-xl border border-stone-900 bg-stone-900/10 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-stone-900 border border-stone-850 text-amber-500">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Hofstra University</h3>
                    <p className="text-xs text-stone-500 font-semibold mt-0.5">B.S. Mechanical Engineering Student</p>
                    <p className="mt-1.5 text-xs text-stone-400">Pursuing rigorous coursework in mechanics, thermal systems, numerical methods, and CAD design.</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-stone-900 bg-stone-900/10 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-stone-900 border border-stone-850 text-amber-500">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Stellant Systems</h3>
                    <p className="text-xs text-stone-500 font-semibold mt-0.5">Engineering Intern</p>
                    <p className="mt-1.5 text-xs text-stone-400">Gaining hands-on industrial experience working with technical documentation, data models, and team-based engineering pipelines.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Skills Breakdown */}
            <div className="rounded-2xl border border-stone-900 bg-stone-900/10 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-extrabold text-white border-b border-stone-900 pb-3 mb-6">Technical Skills Summary</h3>
                
                <div className="space-y-6">
                  {/* Skill Group 1 */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-stone-300 uppercase tracking-wide mb-2">
                      <span>Web Development & SEO</span>
                      <span className="text-amber-500">HTML, React, Node.js, Next.js</span>
                    </div>
                    <div className="h-1.5 w-full bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>

                  {/* Skill Group 2 */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-stone-300 uppercase tracking-wide mb-2">
                      <span>Mechanical CAD & FEA</span>
                      <span className="text-amber-500">Inventor, Fusion 360, SolidWorks</span>
                    </div>
                    <div className="h-1.5 w-full bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '90%' }} />
                    </div>
                  </div>

                  {/* Skill Group 3 */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-stone-300 uppercase tracking-wide mb-2">
                      <span>Automation & Scripting</span>
                      <span className="text-amber-500">Python, Bash, AI API Integrations</span>
                    </div>
                    <div className="h-1.5 w-full bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>

                  {/* Skill Group 4 */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-stone-300 uppercase tracking-wide mb-2">
                      <span>Technical Problem Solving</span>
                      <span className="text-amber-500">Data Analytics, IoT, Telemetry</span>
                    </div>
                    <div className="h-1.5 w-full bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-stone-950 p-4 border border-stone-900/60">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">Core Approach</span>
                <p className="text-xs text-stone-400 leading-relaxed mt-1">
                  Using scientific rigor, structured formatting, and clean clean components to create tools and sites that provide practical value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Projects Section */}
        <section id="projects" className="section-anchor bg-stone-900/20 py-16 sm:py-24 border-y border-stone-900">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-500">Projects</p>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Technical Project Case Studies</h2>
              <p className="mt-4 text-base text-stone-400">
                Detailed breakdowns of engineering designs and custom software integrations.
              </p>
            </div>

            <div className="grid gap-8">
              {siteConfig.projects.map((project, index) => {
                const isEven = index % 2 === 0;
                return (
                  <article key={project.title} className="grid gap-6 lg:grid-cols-2 items-center rounded-2xl border border-stone-900 bg-stone-950/20 p-6 sm:p-8 hover:border-stone-850 transition duration-300">
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <span className="rounded bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 text-[10px] font-bold text-amber-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-extrabold text-white mt-3">{project.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-stone-400">
                        {project.description}
                      </p>
                      
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-md bg-stone-900 border border-stone-850 px-2.5 py-1 text-xs text-stone-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 hover:text-amber-600 transition"
                        >
                          Inquire about similar builds
                          <ArrowRight size={15} />
                        </a>
                      </div>
                    </div>

                    <div className={`overflow-hidden rounded-xl border border-stone-900 aspect-[16/10] bg-stone-950 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} detail view`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-anchor bg-stone-950 text-white py-16 sm:py-24 border-t border-stone-900">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-500">Contact</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Let's Discuss Your Next Build</h2>
              <p className="mt-4 leading-relaxed text-stone-400">
                Are you looking to build an optimized website for your local business, or need custom engineering script integration? Fill out the details below.
              </p>
              
              <div className="mt-8 grid gap-4">
                <a href={phoneHref} className="flex items-center gap-3 rounded-xl bg-stone-900/50 border border-stone-900 p-4 font-bold hover:bg-stone-850 transition" aria-label={`Call ${siteConfig.ownerName}`}>
                  <Phone className="text-amber-500 shrink-0" size={20} aria-hidden="true" />
                  <div>
                    <span className="block text-xs font-semibold text-stone-500">Direct Phone Link</span>
                    <span className="block text-sm sm:text-base">{siteConfig.phone}</span>
                  </div>
                </a>
                <a href={emailHref} className="flex items-center gap-3 rounded-xl bg-stone-900/50 border border-stone-900 p-4 font-bold hover:bg-stone-850 transition">
                  <Mail className="text-amber-500 shrink-0" size={20} aria-hidden="true" />
                  <div>
                    <span className="block text-xs font-semibold text-stone-500">Direct Email Link</span>
                    <span className="block text-sm sm:text-base">{siteConfig.email}</span>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-xl bg-stone-900/50 border border-stone-900 p-4 font-bold">
                  <MapPin className="text-amber-500 shrink-0" size={20} aria-hidden="true" />
                  <div>
                    <span className="block text-xs font-semibold text-stone-500">Location & Area</span>
                    <span className="block text-sm sm:text-base">{siteConfig.cityState}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Contact Form */}
            <form className="rounded-2xl bg-stone-900/20 border border-stone-900 p-6 text-stone-200 shadow-soft sm:p-8" onSubmit={handleEstimateSubmit}>
              <h3 className="text-xl font-extrabold text-white border-b border-stone-900 pb-4 mb-5">Inquiry & Project Details</h3>
              
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2 text-sm font-bold">
                  <label htmlFor="name" className="text-stone-300">Name</label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    className="rounded-lg border border-stone-850 bg-stone-950/80 px-4 py-3 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-medium text-white placeholder-stone-600"
                    placeholder="First and last name"
                  />
                </div>
                <div className="grid gap-2 text-sm font-bold">
                  <label htmlFor="phone" className="text-stone-300">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="rounded-lg border border-stone-850 bg-stone-950/80 px-4 py-3 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-medium text-white placeholder-stone-600"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div className="grid gap-2 text-sm font-bold sm:col-span-2">
                  <label htmlFor="email" className="text-stone-300">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="rounded-lg border border-stone-850 bg-stone-950/80 px-4 py-3 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-medium text-white placeholder-stone-600"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="grid gap-2 text-sm font-bold sm:col-span-2">
                  <label htmlFor="projectType" className="text-stone-300">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="rounded-lg border border-stone-850 bg-stone-950/80 px-4 py-3 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-medium text-stone-200"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-stone-950">Select a project type</option>
                    <option value="Local Web Design" className="bg-stone-950">Local Business Web Design</option>
                    <option value="CAD Design" className="bg-stone-950">CAD / Mechanical Systems Design</option>
                    <option value="Workflow Automation" className="bg-stone-950">Custom Workflow Automation</option>
                    <option value="Recruitment Inquiry" className="bg-stone-950">Engineering Recruitment Inquiry</option>
                    <option value="Other" className="bg-stone-950">Other technical project</option>
                  </select>
                </div>
                <div className="grid gap-2 text-sm font-bold sm:col-span-2">
                  <label htmlFor="projectDetails" className="text-stone-300">Project Scope / Details</label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    required
                    className="min-h-[120px] rounded-lg border border-stone-850 bg-stone-950/80 px-4 py-3 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-medium text-white placeholder-stone-600"
                    placeholder="Describe your design, development, or engineering system goals..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-4 font-bold text-black shadow-lg hover:bg-amber-600 transition"
              >
                Send Message
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              
              <p className="mt-3 text-[11px] leading-relaxed text-stone-500">
                {siteConfig.pageclipEndpoint
                  ? 'Sent securely via Pageclip endpoint.'
                  : 'This opens your email application with prefilled project details to submit directly.'}
              </p>
              
              {formStatus && (
                <p className="mt-4 rounded-lg bg-amber-500/10 border border-amber-500/20 px-4 py-3 text-sm font-semibold text-amber-500" role="status">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Modern Professional Footer */}
      <footer className="bg-stone-950 border-t border-stone-900 text-stone-400">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-black font-black text-xl shadow-lg">
                V
              </span>
              <span className="font-extrabold text-white text-lg tracking-tight">{siteConfig.businessName}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400">
              Technical consulting bridging mechanical systems design, software development, and local business growth.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-stone-600">
              {siteConfig.demoDisclosure}
            </p>
            <p className="mt-4 text-xs font-semibold text-stone-500">{siteConfig.footerCredit}</p>
          </div>
          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Covered Areas</h3>
            <div className="mt-4 grid gap-2 text-sm text-stone-400">
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-stone-500" /> Long Island, NY</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-stone-500" /> Nassau County, NY</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-stone-500" /> Suffolk County, NY</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-stone-500" /> Hofstra University</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-stone-500" /> Remote clients</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Links</h3>
            <div className="mt-4 grid gap-2 text-sm text-stone-400">
              <a href={phoneHref} className="hover:text-amber-500 font-bold transition">{siteConfig.phone}</a>
              <a href={emailHref} className="hover:text-amber-500 transition">{siteConfig.email}</a>
              <span className="mt-2 text-xs font-bold text-stone-500 uppercase tracking-wide">Nav Links</span>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 pt-1">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="hover:text-amber-500 transition text-xs font-semibold">
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                {hasUrl(siteConfig.socialLinks.github) && (
                  <a href={siteConfig.socialLinks.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-stone-850 p-2 hover:text-white transition bg-stone-900/40">
                    <Store size={17} aria-hidden="true" />
                  </a>
                )}
                {hasUrl(siteConfig.socialLinks.linkedin) && (
                  <a href={siteConfig.socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-stone-850 p-2 hover:text-white transition bg-stone-900/40">
                    <Facebook size={17} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Lead-Gen Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-stone-950 border-t border-stone-900 px-4 py-3 shadow-lg flex items-center justify-between md:hidden">
        <a
          href={phoneHref}
          className="flex-1 mr-2 inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-4 py-3 text-sm font-bold text-stone-300 hover:bg-stone-850 transition"
          aria-label={`Call ${siteConfig.ownerName}`}
        >
          <Phone size={16} aria-hidden="true" />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 ml-2 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 text-sm font-bold text-black shadow-sm hover:bg-amber-600 transition"
        >
          <MessageSquare size={16} aria-hidden="true" />
          Get Quote
        </a>
      </div>
    </div>
  );
}

export default App;
