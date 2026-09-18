# Ting Authorized Retailer

Marketing site for an independent authorized retailer of Ting fiber internet and
Ting Mobile. One conversion-focused landing page plus eight compliance pages,
statically prerendered.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Lenis

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

---

## The one file you edit

Everything commercial lives in [`lib/content.ts`](lib/content.ts) — plans,
prices, speeds, feature bullets, equipment fees, section copy, images, FAQ
entries and legal disclosures. Every surface derives from it.

Change a price:

```ts
{ id: 'home-fiber', name: 'Ting Home Fiber', price: 89, cents: '00', … }
```

…and the hero price anchor, the plan card, the comparison table row, the bundle
prose and the footer legal line all update together. **No `.tsx` file needs to
be touched.**

Policy page copy lives in [`lib/legal.ts`](lib/legal.ts). Adding a document there
creates its route, its metadata, its sitemap entry and its footer link.

### Rules enforced in data, not markup

| Rule | Where it lives |
| --- | --- |
| Priced plan → `"Call to order"`; unpriced → `"Call for pricing"` | `getCtaLabel()` |
| Which service sections render, and in what order | `getActiveServiceLines()` |
| Header nav anchors | `getNavLinks()` |
| Comparison table rows | `getFinePrintRows()` |
| Prices quoted inside prose | interpolated from `PLANS` |

Every `tel:` link renders through `CallButton` or `PhoneLink`, which set
`data-call-cta` unconditionally — the attribute cannot be missed by adding a CTA.

---

## Service lines

`SERVICE_ORDER` fixes the merchandising order: fiber → cable → bundle → tv →
mobile → phone. A line renders only if `PLANS` contains a plan for it.

Ting sells fiber and mobile and nothing else, so cable, TV and phone resolve to
zero plans and are omitted entirely rather than left as placeholders. Add a plan
with `serviceLine: 'tv'` and the TV section appears in its correct slot
automatically.

---

## Design tokens

Colours in [`app/globals.css`](app/globals.css) are the real custom properties
published on ting.com. The accent hierarchy is decided in one place:

```css
--color-brand-*   ->  var(--color-tblue-*)   /* #3253ff — dominant */
--color-accent-*  ->  var(--color-coral-*)   /* #ff8c6c — highlight */
```

Components reference `brand-*` / `accent-*` only, so repointing those two blocks
re-themes the site.

Contrast is measured against the actual pixels behind the text, not assumed —
see the entries in [`ai.wing`](ai.wing) for the figures and how they were taken.

---

## Motion

All animation is registered as `--animate-*` tokens in `globals.css` and every
class is listed in the `prefers-reduced-motion` block, which switches looping
decoration **off** rather than compressing it.

Phones get cheaper variants: the per-word blur pass and the long Ken Burns
travel are redefined inside a `max-width: 639px` media query, and the blurred
colour blobs shrink from ~110px blur to ~55px. That cuts heavily-blurred surface
area on a 390px viewport from **4.95 Mpx to 1.5 Mpx**.

---

## Deploying to Vercel

1. Import the repository at [vercel.com/new](https://vercel.com/new). Framework
   detection picks up Next.js; no build settings need changing.
2. Add one environment variable:

   | Name | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` (no trailing slash) |

   It drives `metadataBase`, per-page canonical URLs, `sitemap.xml` and
   `robots.txt`. Without it those fall back to `http://localhost:3000`, so set it
   before going live. See [`.env.example`](.env.example).
3. Deploy. Every route prerenders as static HTML.

---

## Before going live

1. **Replace the placeholder phone number.** `PHONE` in `lib/content.ts` is
   `(888) 555-0100`, from the reserved fictional `555-01xx` range.
2. **Fill in `COMPANY` in `lib/content.ts`.** `legalName`, `addressLines`,
   `privacyEmail`, `legalEmail` and `websiteDomain` are bracketed placeholders
   and **render literally on the policy pages**.
3. **Have counsel review `lib/legal.ts`.** The policies are drafted to standard
   retailer practice, not legal advice. The PCI DSS page asserts a scope
   position — confirm it matches your actual order-taking process.
4. **Set real support hours** in `FOOTER_CONTACT`.
5. **Optional:** set `effectiveDate` on each legal document to show a date; the
   field renders only when populated.
6. **Optional:** wire a real serviceability lookup by replacing the body of
   `handleSubmit` in `components/ZipChecker.tsx`. It currently validates the ZIP
   format client-side and routes to the sales line rather than asserting coverage
   it cannot verify.

Full build log and architectural decisions: [`ai.wing`](ai.wing).
