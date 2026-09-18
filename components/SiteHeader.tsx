'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PHONE, SITE, getNavLinks } from '@/lib/content';
import { cn } from '@/lib/cn';
import Wordmark from './Wordmark';
import CallButton, { PhoneLink } from './CallButton';
import { MenuIcon, CloseIcon } from './Icons';

const navLinks = getNavLinks();

/**
 * Top chrome: the persistent disclosure bar and the sticky header travel
 * together, so the retailer disclosure stays on screen for the whole session.
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the sheet on Escape and whenever the viewport grows past the breakpoint.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
    };
  }, [menuOpen]);

  return (
    <div className="sticky top-0 z-50">
      {/* Persistent, non-dismissable disclosure */}
      <div className="bg-navy-90 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-[7px] sm:px-6 lg:px-8">
          <p className="text-center text-[0.72rem] font-medium leading-snug tracking-[0.01em] text-navy-20 sm:text-[0.78rem]">
            <span
              aria-hidden="true"
              className="mr-2 inline-block h-1.5 w-1.5 -translate-y-px rounded-full bg-accent-60 align-middle"
            />
            {SITE.disclosure}
          </p>
        </div>
      </div>

      <header
        className={cn(
          'border-b bg-white/95 backdrop-blur-md transition-shadow duration-300',
          scrolled
            ? 'border-ink-20 shadow-[0_6px_24px_-16px_rgba(14,14,14,0.35)]'
            : 'border-transparent',
        )}
      >
        <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[68px] lg:px-8">
          <Link
            href="/"
            className="-my-2 shrink-0 rounded-md py-2"
            aria-label={`${SITE.brandName} ${SITE.retailerLabel} — home`}
          >
            <Wordmark />
          </Link>

          <nav
            aria-label="Section navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[0.92rem] font-medium text-ink-80 transition-colors hover:bg-ink-10 hover:text-ink-90"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/*
              These wrappers own the responsive display, not the buttons.
              CallButton/PhoneLink bake `inline-flex` into their base classes,
              and a bare `hidden` on the same element loses that specificity
              fight — which left the elements laid out off-screen at 320px.
            */}
            <span className="hidden sm:inline-flex">
              <CallButton
                label={PHONE.display}
                size="sm"
                showIcon={false}
                srSuffix="call our sales line"
              />
            </span>

            <span className="inline-flex sm:hidden">
              <CallButton label="Call" size="sm" srSuffix="call our sales line" />
            </span>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-20 text-ink-90 transition-colors hover:bg-ink-10 lg:hidden"
            >
              {menuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        <div
          id="mobile-nav"
          hidden={!menuOpen}
          className="border-t border-ink-20 bg-white lg:hidden"
        >
          <nav
            aria-label="Section navigation"
            className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-[0.98rem] font-medium text-ink-80 transition-colors hover:bg-ink-10 hover:text-ink-90"
              >
                {link.label}
              </Link>
            ))}
            <PhoneLink className="mt-2 rounded-lg px-3 py-3 text-[0.98rem] font-semibold text-ink-90 hover:bg-ink-10" />
          </nav>
        </div>
      </header>
    </div>
  );
}
