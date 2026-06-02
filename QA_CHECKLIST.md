# QA Checklist

Run this before pitching, pushing, or deploying.

## Layout

- Mobile check at iPhone size.
- Desktop check at laptop/desktop size.
- Sticky navigation works.
- Buttons have enough spacing.
- Text does not overlap.
- Gallery images load.
- Footer credit is visible.

## Calls and Forms

- Phone button uses `tel:`.
- Phone number is correct.
- Email link uses `mailto:`.
- Contact form works safely.
- If `pageclipEndpoint` is blank, form opens email app.
- If Pageclip is configured, submit a test lead.

## Content Safety

- No fake licensed claim.
- No fake insured claim.
- No fake guarantees.
- No years-of-experience claim.
- No real response-time claim.
- No fake Google/Yelp ratings.
- No fake verified reviews.
- Sample feedback is clearly fictional/demo content.
- Project gallery is clearly demo content unless real client-approved photos are used.

## SEO

- SEO title is correct.
- Meta description is correct.
- Business city/state is correct.
- Service area is correct.
- Services match the client/demo.

## Accessibility

- Mobile menu has an accessible label.
- Phone links have accessible labels.
- Form fields have labels.
- Images load and decorative images are not announced unnecessarily.
- Color contrast looks readable.

## Links

- No fake social links render.
- Navigation links scroll to the right sections.
- Phone link works on mobile.
- Email link opens email app.
- Footer links work.

## Final Approval

- Spelling and grammar checked.
- Build passes with `npm run build`.
- Client/demo facts are approved.
- Final approval received before pitching or launch.
