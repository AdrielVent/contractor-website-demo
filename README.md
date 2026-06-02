# Brentwood Premier Home Improvement Demo

Polished fictional contractor landing page built as a freelance portfolio demo by Adriel Ventura.

This is not a real verified business website. The business name, phone number, email, service area, project cards, and sample feedback are fictional demo content.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- No login
- No database
- No payment system
- No backend required

## Run Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Main Control Panel

Edit client/demo content in:

```text
src/siteConfig.ts
```

Editable from config:

- Business name
- Phone
- Email
- City/state
- Service area
- Hero headline
- Hero subheadline
- Main CTA
- Secondary CTA
- Services
- Gallery/demo project items
- Sample feedback
- FAQs
- SEO title
- SEO description
- Social links
- Optional Pageclip endpoint
- Optional SimpleAnalytics setting
- Footer credit

## Form Handling

By default, the estimate form uses a safe `mailto:` fallback. It opens the visitor's email app with the project details filled in.

Optional Pageclip support is already wired in. To enable it later, paste the Pageclip endpoint into:

```ts
pageclipEndpoint: 'https://send.pageclip.co/YOUR_KEY/YOUR_FORM_NAME'
```

Leave `pageclipEndpoint` blank to keep the mailto fallback.

## Analytics

SimpleAnalytics is disabled by default.

To enable it after a real client approves analytics, edit:

```ts
simpleAnalytics: {
  enabled: true,
  hostname: 'example.com',
}
```

Do not enable analytics for the fictional demo unless you intentionally want to track demo visits.

## Images

Demo images live in:

```text
public/
```

For real client sites:

- Use approved client-owned photos only.
- Do not use copyrighted photos or another contractor's project photos.
- Recommended hero image size: `1600x1000` or larger.
- Recommended gallery image size: `900x675`.
- Name files clearly, such as `hero-client-name.jpg`, `gallery-kitchen-before-after.jpg`, or `gallery-flooring-install.jpg`.
- Update image paths in `src/siteConfig.ts`.

Imgbot can optimize committed client photos automatically after the project is on GitHub.

## GitHub Student Developer Pack Workflow Notes

- GitHub Pro: useful for private client repositories.
- GitHub Pages: possible free demo hosting option.
- GitHub Copilot: codebase is Vite/React/TypeScript friendly for VS Code edits.
- Pageclip: optional lightweight form endpoint.
- SimpleAnalytics: optional privacy-friendly analytics.
- Imgbot: useful for automatic image optimization on GitHub.
- Polypane, BrowserStack, or LambdaTest: use for mobile/desktop QA across devices.
- Name.com, Namecheap, or `.TECH`: domain options after the client pays.
- 1Password: store client domain, hosting, DNS, and form-service credentials safely.

## Safety Rules

Do not publicly claim:

- Licensed
- Insured
- Guaranteed
- Verified reviews
- Years of experience
- Real project photos
- Real response times
- Yelp/Google ratings
- Customer testimonials

Only add those claims when a real client provides proof or written approval.
