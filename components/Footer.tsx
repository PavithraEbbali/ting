import Link from "next/link";
import {
  FOOTER_COMPLIANCE_NOTE,
  FOOTER_CONTACT,
  FOOTER_DISCLAIMERS,
  FOOTER_LEGAL_LINKS,
  FOOTER_NAV,
  FOOTER_TAGLINE,
  SITE,
} from "@/lib/content";
import Wordmark from "./Wordmark";
import { PhoneLink } from "./CallButton";

/**
 * Footer built to the reference retailer footer's measurements, taken from its
 * computed styles rather than eyeballed:
 *
 *   shell            72px top / 32px bottom, container max 1200px, 32px gutter
 *   top band         grid 1.4 / 1 / 1 / 1.2, 36px gap, 38px below
 *   section headings 12.8px / 800 / uppercase / 0.12em tracking / 6px below
 *   nav links        14.88px / 400 / 1.6 line-height / 9px apart
 *   phone            21.6px / 800 / white / 8px below
 *   hours            13.6px / 400 / 1.6
 *   disclosures      26px above the block, title 13.12px/800, items 12.16px/1.6, 10px apart
 *   bottom band      24px above, legal links 14.08px / 600, gap 8px x 22px
 *   copy             12.8px / 400 / 1.6
 *
 * Colours are Ting's own navy scale rather than the reference's blue-greys, so
 * the footer stays in the site's palette while the structure and rhythm match.
 *
 * The `py-[11px] sm:py-0` on links is a phone-only hit area: 40px targets on
 * touch, reverting to the tight 9px rhythm from sm up.
 */
export default function Footer() {
  return (
    <footer className="bg-navy-90 pb-8 pt-[72px] text-navy-30">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* ------------------------------ Top band ----------------------- */}
        <div className="mb-[38px] grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Wordmark tone="dark" compact />
            <p className="mb-[14px] mt-4 max-w-[38ch] text-[0.9rem] leading-[1.6] text-navy-30">
              {FOOTER_TAGLINE}
            </p>
          </div>

          {FOOTER_NAV.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-1.5 text-[0.8rem] font-extrabold uppercase leading-[1.12] tracking-[0.12em] text-navy-30">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-0 sm:gap-[9px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block py-[11px] text-[0.93rem] leading-[1.6] text-navy-20 transition-colors hover:text-brand-40 sm:py-0"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="mb-1.5 text-[0.8rem] font-extrabold uppercase leading-[1.12] tracking-[0.12em] text-navy-30">
              {FOOTER_CONTACT.title}
            </h3>
            <PhoneLink
              showIcon={false}
              className="mb-2 py-1 text-[1.35rem] font-extrabold leading-[1.6] text-white transition-colors hover:text-brand-40"
            />
            {FOOTER_CONTACT.hours.map((line) => (
              <p
                key={line}
                className="mb-1.5 text-[0.85rem] leading-[1.6] text-navy-30"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* --------------------------- Disclosures ------------------------ */}
        <div
          id="legal"
          className="scroll-mt-32 border-t border-white/12 pt-[26px]"
        >
          <h2 className="mb-[14px] text-[0.82rem] font-extrabold uppercase leading-[1.12] tracking-[0.12em] text-navy-20">
            Offer details &amp; required disclosures
          </h2>
          {FOOTER_DISCLAIMERS.map((text) => (
            <p
              key={text.slice(0, 48)}
              className="mb-2.5 max-w-[110ch] text-[0.76rem] leading-[1.6] text-navy-30"
            >
              {text}
            </p>
          ))}
        </div>

        {/* ----------------------------- Bottom --------------------------- */}
        <div className="mt-[14px] border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-x-[22px] gap-y-0 sm:gap-y-2">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-block py-[11px] text-[0.88rem] font-semibold leading-[1.6] text-navy-20 transition-colors hover:text-brand-40 sm:py-0"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="mt-4 max-w-[110ch] text-[0.8rem] leading-[1.6] text-navy-30">
            {FOOTER_COMPLIANCE_NOTE}
          </p>
          <p className="mt-2 text-[0.8rem] leading-[1.6] text-navy-30">
            {SITE.disclosure} Call{" "}
            <PhoneLink
              showIcon={false}
              className="font-semibold text-navy-20 transition-colors hover:text-brand-40"
            />{" "}
            to order.
          </p>
          <p className="mt-2 text-[0.8rem] leading-[1.6] text-navy-30">
            © {SITE.brandName} Authorized Retailer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
