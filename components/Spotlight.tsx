'use client';

import { useEffect, useRef } from 'react';

/**
 * Soft light that tracks the pointer across the hero.
 *
 * Writes the pointer position to CSS custom properties on its own element and
 * lets a radial-gradient read them, so the work per move is two style writes
 * inside one rAF — no React state, no re-render.
 *
 * Does nothing on coarse pointers (there is no cursor to follow) or when the
 * visitor has asked for reduced motion. It starts fully transparent and fades
 * in on first movement, so it never appears parked in a corner.
 */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const host = node?.parentElement;
    if (!node || !host) return;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (!finePointer || reduced) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      node.style.setProperty('--mx', `${x}px`);
      node.style.setProperty('--my', `${y}px`);
    };

    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
      node.style.opacity = '1';
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      node.style.opacity = '0';
    };

    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);

    return () => {
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ opacity: 0 }}
      className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500 [background:radial-gradient(22rem_22rem_at_var(--mx,50%)_var(--my,50%),rgba(91,137,255,0.18),transparent_70%)]"
    />
  );
}
