# 20-Minute Client Setup

Use this when turning the fictional demo into a real contractor site.

## 1. Edit the Main Config

Open:

```text
src/siteConfig.ts
```

Change:

- `businessName`
- `phone`
- `email`
- `cityState`
- `serviceArea`
- `headline`
- `subheadline`
- `heroImage`
- `ctaText`
- `secondaryCtaText`
- `seoTitle`
- `seoDescription`
- `footerCredit`

## 2. Update Services

Keep six cards when possible. Replace the demo services with the contractor's real services.

## 3. Replace Demo Images

Put approved client photos in:

```text
public/
```

Recommended sizes:

- Hero: `1600x1000`
- Gallery: `900x675`

Recommended names:

- `hero-client-name.jpg`
- `gallery-kitchen-remodel.jpg`
- `gallery-flooring-install.jpg`
- `gallery-concrete-patio.jpg`

Then update each `imageUrl` in `src/siteConfig.ts`.

## 4. Replace Sample Feedback

Only use real customer reviews if the business owner approves them. If there are no approved reviews, remove or rewrite the section so it does not look like real testimonials.

## 5. Verify Claims

Before publishing, verify:

- License status
- Insurance status
- Estimate policy
- Service area
- Business hours
- Response expectations
- Warranty or guarantee wording
- Years in business, if shown

Only include claims the owner confirms in writing.

## 6. Optional Integrations

Pageclip:

- Paste the endpoint into `pageclipEndpoint`.
- Leave it blank to keep the mailto fallback.

SimpleAnalytics:

- Set `simpleAnalytics.enabled` to `true` only after approval.
- Add the live domain to `simpleAnalytics.hostname`.

## 7. Test

```bash
npm install
npm run build
```

Run `QA_CHECKLIST.md`, deploy, then send the message in `PITCH_PREVIEW.md`.
