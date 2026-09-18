# Image assets

Delivered, processed and wired in. Sources live in `public/images/`.

| Filename | Final px | Ratio | Where it appears |
|---|---|---|---|
| `hero-home-dusk.jpg` | 2000 × 1221 | 1.64 | Full-bleed background behind the hero |
| `why-01-dedicated-line.jpg` | 928 × 987 | 0.94 | Why Ting — "A dedicated fiber connection" |
| `why-02-symmetrical-speed.jpg` | 928 × 987 | 0.94 | Why Ting — "Symmetrical throughput" |
| `why-03-predictable-pricing.jpg` | 928 × 987 | 0.94 | Why Ting — "Predictable monthly pricing" |
| `why-04-no-bundling.jpg` | 928 × 987 | 0.94 | Why Ting — "No mandatory bundling" |
| `bundle-internet-mobile.jpg` | 1226 × 768 | 1.60 | Bundle section, beside the plan card |
| `install-technician.jpg` | 1258 × 768 | 1.64 | How It Works — closing CTA block |

Every image is referenced from `lib/content.ts`, never hard-coded in a
component. Swapping one means replacing the file and updating its `width` /
`height` in that file — nothing else.

## Processing applied to the delivered files

The originals arrived as PNG at roughly 2.5 MB each (17.7 MB total). Three
changes were made:

1. **Watermark removed by cropping.** Gemini stamps a sparkle at a fixed offset
   from the bottom-right corner — about 137→92px in from the right and 149→96px
   up from the bottom, regardless of output size. Each file was cropped past
   whichever edge cost the least composition: the bottom for the portrait cards,
   the right edge for the landscape ones.
2. **Converted to JPG** at quality 84–88, mozjpeg. 17.7 MB → 1.25 MB. Next.js
   re-encodes to WebP/AVIF at request time, so these are sources, not delivery.
3. **The hero was upscaled** to 2000px wide (lanczos3 + light sharpen). The hero
   box runs ~760 CSS px tall, which is ~1140 device px at DPR 1.5 — taller than
   the 768px source, so the browser was upscaling it ~1.7×. It now downscales.

Untouched originals are not kept in the repo. Regenerate from Gemini if needed;
prompts are in [`image-prompts.md`](image-prompts.md).

## Constraints these images satisfy

- No text, signage, house numbers, readable screen content or provider logos.
- Hero subject sits in the right two-thirds, leaving the left clear for the
  headline and price rail.
- Hero text contrast measured against the actual pixels under the scrim:
  headline 5.30:1, subline 4.97:1, trust chips 5.30:1 — all pass WCAG AA.

One incidental detail: the laptop in `why-03` carries a distorted apple-like
shape on the lid. It is incidental device depiction rather than provider
branding, and the 4:5 crop is biased left (`position: '38% center'`) so it sits
at the frame edge.
