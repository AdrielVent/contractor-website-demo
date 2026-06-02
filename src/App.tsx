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
    const subject = `Project Inquiry - ${form.get('name') || 'Client'}`;
    const body = [
      `Hi Adriel,`,
      ``,
      `I am reaching out regarding a project inquiry. Here are the details:`,
      ``,
      `Name: ${form.get('name') || ''}`,
      `Phone: ${form.get('phone') || ''}`,
      `Email: ${form.get('email') || ''}`,
      `Inquiry Category: ${form.get('projectType') || ''}`,
      ``,
      `Project Details:`,
      form.get('projectDetails') || '',
    ].join('\n');

    window.location.href = `mailto:adrielvent5@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus('Opening your default email application...');
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
                Engineering & Web Dev
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-855 text-stone-400 md:hidden hover:bg-stone-900"
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
                Engineering Intern @ Stellant Systems
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
                  'Hofstra Mech Engineering',
                  'Stellant Systems Intern',
                  'Full-Stack Developer',
                  'CAD & Technical Systems',
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

            {/* Profile Headshot Box */}
            <div className="relative min-h-[380px] sm:min-h-[460px] overflow-hidden rounded-2xl border border-stone-950 shadow-soft bg-stone-900 group">
              <img
                src={siteConfig.heroImage}
                alt="Adriel Ventura headshot portrait"
                fetchPriority="high"
                width="600"
                height="600"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-stone-950/10" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-xl border border-stone-850 bg-stone-950/90 backdrop-blur p-5 shadow-sm">
                  <p className="text-[10px] font-bold uppercase text-amber-500 tracking-wider">Hofstra & Stellant Systems</p>
                  <p className="mt-1 text-sm font-extrabold text-white">Adriel Ventura</p>
                  <p className="mt-2 text-xs leading-relaxed text-stone-500">
                    Bridging physical systems, mechanical design tolerances, and modern automation software pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-anchor mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:px-8 border-t border-stone-900">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-500">What I Do</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Hybrid Software & Mechanical Engineering Services</h2>
            <p className="mt-4 text-base text-stone-400">
              Blending rigorous academic training, professional internship processes, and modern web development methods to solve business and technical problems.
            </p>
          </div>
          
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => {
              const icons = [Code, Settings, Cpu];
              const ServiceIcon = icons[index % icons.length];
              return (
                <article key={service.title} className="flex flex-col justify-between rounded-2xl border border-stone-900 bg-stone-900/20 p-6 shadow-sm hover:shadow-soft hover:border-stone-855 hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-stone-955 border border-stone-900 text-amber-500">
                      <ServiceIcon size={24} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-400">{service.description}</p>
                    
                    <ul className="mt-5 space-y-2 border-t border-stone-900/60 pt-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs font-medium text-stone-300">
                          <CheckCircle2 size={13} className="text-amber-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-amber-500 hover:text-amber-600 transition-colors"
                  >
                    Discuss Project
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* Portfolio Section (Visual Showcase) */}
        <section id="portfolio" className="section-anchor bg-stone-900/20 py-16 sm:py-24 border-y border-stone-900">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-wider text-amber-500">Visual Portfolio</p>
                <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Real Project Visuals & Designs</h2>
                <p className="mt-4 text-base text-stone-400">
                  A visual overview of web designs, software structures, Unity environments, and finite element analyses (FEA).
                </p>
              </div>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 border border-stone-855 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-stone-850 transition"
              >
                Detailed Project Summaries
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
                    className={`overflow-hidden rounded-2xl border border-stone-900 bg-stone-955 shadow-sm hover:border-stone-850 group transition duration-300 ${
                      isLarge ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="overflow-hidden bg-stone-950 relative aspect-[16/10] sm:aspect-[16/9]">
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-stone-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
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
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-amber-500">About Me</p>
                <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Mechanical Engineer & Software Builder</h2>
                
                <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-400">
                  <p>
                    I am a Mechanical Engineering student at <strong className="text-stone-200">Hofstra University</strong> and an Engineering Intern at <strong className="text-stone-200">Stellant Systems</strong>. My interest lies in combining physical systems and precision modeling with automation scripting, custom code, and data tools.
                  </p>
                  <p>
                    I design mobile-first web pages for local businesses that focus on converting traffic, while applying mechanical tolerances, stress simulations, and detailed blueprints to physical assemblies. 
                  </p>
                </div>
              </div>

              {/* Milestones / Education / Internships details */}
              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-xl border border-stone-900 bg-stone-900/10 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-stone-950 border border-stone-905 text-amber-500">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Hofstra University</h3>
                    <p className="text-xs text-stone-500 font-semibold mt-0.5">Mechanical Engineering Program</p>
                    <p className="mt-1.5 text-xs text-stone-400">Gaining solid knowledge in numerical analysis, thermal fluid dynamics, mechanical design systems, and finite element modeling.</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-stone-900 bg-stone-900/10 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-stone-955 border border-stone-900 text-amber-500">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Stellant Systems</h3>
                    <p className="text-xs text-stone-500 font-semibold mt-0.5">Engineering Internship</p>
                    <p className="mt-1.5 text-xs text-stone-400">Contributing to industrial assemblies, quality check documentation, and mechanical system blueprints under direct engineering processes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill Matrix */}
            <div className="rounded-2xl border border-stone-900 bg-stone-900/10 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-extrabold text-white border-b border-stone-900 pb-3 mb-6">Technical Skills Summary</h3>
                
                <div className="space-y-6">
                  {/* Skill Group 1 */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-stone-300 uppercase tracking-wide mb-2">
                      <span>Mechanical CAD & Blueprints</span>
                      <span className="text-amber-500">Inventor, Fusion 360, SolidWorks</span>
                    </div>
                    <div className="h-1.5 w-full bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '90%' }} />
                    </div>
                  </div>

                  {/* Skill Group 2 */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-stone-300 uppercase tracking-wide mb-2">
                      <span>Finite Element Analysis (FEA)</span>
                      <span className="text-amber-500">ANSYS, Fusion Simulation</span>
                    </div>
                    <div className="h-1.5 w-full bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>

                  {/* Skill Group 3 */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-stone-300 uppercase tracking-wide mb-2">
                      <span>Web Development & Deployments</span>
                      <span className="text-amber-500">React, Tailwind CSS, Vercel, Node</span>
                    </div>
                    <div className="h-1.5 w-full bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>

                  {/* Skill Group 4 */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-stone-300 uppercase tracking-wide mb-2">
                      <span>Scripting & Workflow Automations</span>
                      <span className="text-amber-500">Python, Bash, Git, Siri Shortcuts</span>
                    </div>
                    <div className="h-1.5 w-full bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-stone-950 p-4 border border-stone-900/60">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">Credibility Metric</span>
                <p className="text-xs text-stone-400 leading-relaxed mt-1">
                  Using structural formulas, mechanical principles, and custom coding frameworks to deliver direct, practical solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Projects Section (STAR Method Rendered for Recruiters) */}
        <section id="projects" className="section-anchor bg-stone-900/20 py-16 sm:py-24 border-y border-stone-900">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-500">Case Studies</p>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Engineering & Software Project Logs</h2>
              <p className="mt-4 text-base text-stone-400">
                Detailed breakdowns using the STAR method (Situation, Task, Action, Result) for engineering and software verification.
              </p>
            </div>

            <div className="grid gap-8">
              {siteConfig.projects.map((project, index) => {
                const isEven = index % 2 === 0;
                return (
                  <article key={project.title} className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-start rounded-2xl border border-stone-900 bg-stone-950/20 p-6 sm:p-8 hover:border-stone-850 transition duration-300">
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <span className="rounded bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 text-[10px] font-bold text-amber-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-extrabold text-white mt-3">{project.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-stone-400">
                        {project.description}
                      </p>

                      {/* Tools & Skills Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => (
                          <span key={tool} className="rounded-md bg-stone-900 border border-stone-850 px-2 py-0.5 text-[10px] font-semibold text-amber-500">
                            🛠️ {tool}
                          </span>
                        ))}
                        {project.skills.map((skill) => (
                          <span key={skill} className="rounded-md bg-stone-900 border border-stone-850 px-2 py-0.5 text-[10px] font-semibold text-stone-400">
                            ⚙️ {skill}
                          </span>
                        ))}
                      </div>

                      {/* STAR Technical Dossier (Collapsible for recruiters!) */}
                      <details className="group border border-stone-850 bg-stone-950/60 rounded-xl p-4 mt-6">
                        <summary className="cursor-pointer font-bold text-xs text-amber-500 uppercase tracking-widest select-none flex items-center justify-between">
                          <span>Read Technical STAR Dossier</span>
                          <span className="text-stone-500 transition group-open:rotate-45">+</span>
                        </summary>
                        <div className="mt-4 space-y-3.5 text-xs text-stone-400 border-t border-stone-900/60 pt-4">
                          <div>
                            <strong className="text-stone-300 uppercase tracking-wider block mb-1">Situation:</strong>
                            <p>{project.situation}</p>
                          </div>
                          <div>
                            <strong className="text-stone-300 uppercase tracking-wider block mb-1">Task:</strong>
                            <p>{project.task}</p>
                          </div>
                          <div>
                            <strong className="text-stone-300 uppercase tracking-wider block mb-1">Action:</strong>
                            <p>{project.action}</p>
                          </div>
                          <div>
                            <strong className="text-stone-300 uppercase tracking-wider block mb-1">Result:</strong>
                            <p>{project.result}</p>
                          </div>
                          <div className="rounded-lg bg-amber-500/5 border border-amber-500/10 p-3 mt-2">
                            <strong className="text-amber-500 uppercase tracking-wider block mb-1">Technical Challenge Solved:</strong>
                            <p className="text-stone-300 leading-relaxed">{project.challenge}</p>
                          </div>
                        </div>
                      </details>

                      <div className="mt-6">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 hover:text-amber-600 transition"
                        >
                          Ask about similar build
                          <ArrowRight size={15} />
                        </a>
                      </div>
                    </div>

                    <div className={`overflow-hidden rounded-xl border border-stone-900 aspect-[16/10] bg-stone-950 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} screenshot`}
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

        {/* Contact / Inquiry Section */}
        <section id="contact" className="section-anchor bg-stone-950 text-white py-16 sm:py-24 border-t border-stone-900">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-500">Contact</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Discuss a Lead-Gen Site or Engineering Contract</h2>
              <p className="mt-4 leading-relaxed text-stone-400">
                Recruiting for engineering positions or looking to upgrade your local business landing page? Submit your details below to open a prefilled email draft.
              </p>
              
              <div className="mt-8 grid gap-4">
                <a href={phoneHref} className="flex items-center gap-3 rounded-xl bg-stone-900/50 border border-stone-900 p-4 font-bold hover:bg-stone-850 transition" aria-label={`Call Adriel Ventura`}>
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

            {/* Custom Prefilled Mailto Contact Form */}
            <form className="rounded-2xl bg-stone-900/20 border border-stone-900 p-6 text-stone-200 shadow-soft sm:p-8" onSubmit={handleEstimateSubmit}>
              <h3 className="text-xl font-extrabold text-white border-b border-stone-900 pb-4 mb-5">Submit Project Details</h3>
              
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2 text-sm font-bold">
                  <label htmlFor="name" className="text-stone-300">Name</label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    className="rounded-lg border border-stone-850 bg-stone-950/80 px-4 py-3 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-medium text-white placeholder-stone-700"
                    placeholder="Your name"
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
                    className="rounded-lg border border-stone-855 bg-stone-950/80 px-4 py-3 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-medium text-white placeholder-stone-700"
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
                    className="rounded-lg border border-stone-855 bg-stone-950/80 px-4 py-3 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-medium text-white placeholder-stone-700"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="grid gap-2 text-sm font-bold sm:col-span-2">
                  <label htmlFor="projectType" className="text-stone-300">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="rounded-lg border border-stone-855 bg-stone-950/80 px-4 py-3 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-medium text-stone-300"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-stone-950">Select project category</option>
                    <option value="Local Web Design" className="bg-stone-950">Local Business Websites</option>
                    <option value="Engineering Documentation" className="bg-stone-950">Engineering Documentation Portfolio</option>
                    <option value="Workflow Automation" className="bg-stone-950">Workflow Script Automation</option>
                    <option value="Recruiter Inquiry" className="bg-stone-950">Recruiter Inquiry</option>
                    <option value="Other" className="bg-stone-950">Other technical project</option>
                  </select>
                </div>
                <div className="grid gap-2 text-sm font-bold sm:col-span-2">
                  <label htmlFor="projectDetails" className="text-stone-300">Scope of Work & Details</label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    required
                    className="min-h-[120px] rounded-lg border border-stone-855 bg-stone-950/80 px-4 py-3 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-medium text-white placeholder-stone-700"
                    placeholder="Share scope details, timelines, specs..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-4 font-bold text-black shadow-lg hover:bg-amber-600 transition"
              >
                Draft Email Inquiry
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              
              {formStatus && (
                <p className="mt-4 rounded-lg bg-amber-500/10 border border-amber-500/20 px-4 py-3 text-sm font-semibold text-amber-500" role="status">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-955 border-t border-stone-900 text-stone-400">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-black font-black text-xl shadow-lg">
                V
              </span>
              <span className="font-extrabold text-white text-lg tracking-tight">{siteConfig.businessName}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400">
              Technical portfolio showcasing CAD models, FEA, automation scripts, and conversion-focused web designs.
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
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-stone-500" /> Remote services</span>
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
                  <a href={siteConfig.socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-stone-855 p-2 hover:text-white transition bg-stone-900/40">
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
          className="flex-1 mr-2 inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-4 py-3 text-sm font-bold text-stone-305 hover:bg-stone-850 transition"
          aria-label={`Call Adriel Ventura`}
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
