'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Lenis smooth scrolling. Deliberately restrained: a short duration and a
 * gentle ease so the page feels calm rather than floaty. Disabled outright
 * when the visitor has asked for reduced motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Native momentum on touch devices feels better than an emulated one.
      syncTouch: false,
      touchMultiplier: 1.6,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // A shared link like /#plans should land on the section. Native hash
    // handling runs before Lenis attaches and then gets overridden by its RAF
    // loop, so the jump is re-issued here once Lenis owns the scroll position.
    const hash = window.location.hash;
    if (hash.length > 1) {
      const target = document.querySelector(hash);
      if (target) {
        requestAnimationFrame(() =>
          lenis.scrollTo(target as HTMLElement, {
            offset: -96,
            immediate: true,
          }),
        );
      }
    }

    // Route same-page anchor clicks through Lenis so the offset is respected.
    // Links to another route that happen to carry a hash (e.g. /#plans from a
    // policy page) must be left alone so Next can navigate normally.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.(
        'a[href]',
      ) as HTMLAnchorElement | null;
      if (!anchor || (anchor.target && anchor.target !== '_self')) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (!url.hash || url.hash === '#') return;
      if (url.pathname !== window.location.pathname) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -96 });
      history.replaceState(null, '', url.hash);
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
