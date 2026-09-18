import {
  FOOTER_CONTACT,
  FOOTER_DISCLAIMERS,
  FOOTER_LEGAL_LINKS,
  FOOTER_NAV,
  FOOTER_TAGLINE,
  SITE,
} from '@/lib/content';
import Link from 'next/link';
import Wordmark from './Wordmark';
import { PhoneLink } from './CallButton';

/**
 * Footer laid out to match the reference retailer footer: a four-column top
 * band (brand · two nav columns · contact), a required-disclosures block, then
 * a bottom row of legal links and copyright. Type sizes and vertical rhythm
 * follow the same scale.
 */
export default function Footer() {
  return (
    <footer className="bg-navy-90 pb-8 pt-[4.5rem] text-navy-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ------------------------------ Top band ----------------------- */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Wordmark tone="dark" compact />
            <p className="mt-4 max-w-[36ch] text-[0.9rem] leading-relaxed text-navy-30">
              {FOOTER_TAGLINE}
            </p>
          </div>

          {FOOTER_NAV.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.13em] text-white">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-0 sm:gap-[9px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block py-[11px] text-[0.93rem] leading-snug text-navy-20 transition-colors hover:text-brand-40 sm:py-0"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.13em] text-white">
              {FOOTER_CONTACT.title}
            </h3>
            <PhoneLink
              showIcon={false}
              className="mt-4 py-1 text-[1.35rem] font-bold tracking-[-0.01em] text-white transition-colors hover:text-brand-40"
            />
            {FOOTER_CONTACT.hours.map((line) => (
              <p
                key={line}
                className="mt-2 text-[0.85rem] leading-relaxed text-navy-30"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* --------------------------- Disclosures ------------------------ */}
        <div
          id="legal"
          className="mt-14 scroll-mt-32 border-t border-white/10 pt-[26px]"
        >
          <h2 className="text-[0.82rem] font-bold uppercase tracking-[0.13em] text-navy-20">
            Offer details &amp; required disclosures
          </h2>
          <div className="mt-4 space-y-3.5">
            {FOOTER_DISCLAIMERS.map((text) => (
              <p
                key={text.slice(0, 48)}
                className="max-w-[110ch] text-[0.76rem] leading-relaxed text-navy-30"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* ----------------------------- Bottom --------------------------- */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-x-[22px] gap-y-0 sm:gap-y-2">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-block py-[11px] text-[0.88rem] text-navy-20 transition-colors hover:text-brand-40 sm:py-0"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="mt-5 text-[0.8rem] leading-relaxed text-navy-30">
            {SITE.disclosure} Call{' '}
            <PhoneLink
              showIcon={false}
              className="font-semibold text-navy-20 hover:text-brand-40"
            />{' '}
            to order.
          </p>
          <p className="mt-1.5 text-[0.8rem] leading-relaxed text-navy-30">
            © {SITE.brandName} Authorized Retailer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
