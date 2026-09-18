'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

/** useLayoutEffect on the client, useEffect during SSR, without the warning. */
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface CountUpProps {
  value: number;
  durationMs?: number;
  delayMs?: number;
  className?: string;
}

/**
 * Counts a number up on mount.
 *
 * Renders the final value during SSR, so the static HTML and any no-JS or
 * crawler view carries the real price. The reset to zero happens in a layout
 * effect, before the browser paints, so there is no flash of the end value.
 *
 * Fails safe, which matters because this renders a price:
 *  - Reduced motion, or a tab that is not visible on mount, skips the animation
 *    entirely. Browsers suspend rAF in background tabs, and without this the
 *    counter would sit at 0 until the tab was focused.
 *  - A watchdog forces the final value if the frame loop stalls for any other
 *    reason. Under no circumstance should a visitor be left looking at $0.
 */
export default function CountUp({
  value,
  durationMs = 1100,
  delayMs = 0,
  className,
}: CountUpProps) {
  const [display, setDisplay] = useState(value);
  const frame = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useIsomorphicLayoutEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduced || document.visibilityState !== 'visible') {
      setDisplay(value);
      return;
    }

    setDisplay(0);

    let start: number | undefined;
    let done = false;

    const tick = (now: number) => {
      start ??= now;
      const p = Math.min(1, (now - start) / durationMs);
      // easeOutExpo — fast off the line, long settle onto the final figure.
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setDisplay(Math.round(value * eased));
      if (p < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        done = true;
      }
    };

    timers.current.push(
      setTimeout(() => {
        frame.current = requestAnimationFrame(tick);
      }, delayMs),
    );

    // Watchdog: whatever happened to the frame loop, land on the real number.
    timers.current.push(
      setTimeout(
        () => {
          if (!done) setDisplay(value);
        },
        delayMs + durationMs + 400,
      ),
    );

    const currentTimers = timers.current;
    return () => {
      currentTimers.forEach(clearTimeout);
      timers.current = [];
      cancelAnimationFrame(frame.current);
    };
  }, [value, durationMs, delayMs]);

  return <span className={className}>{display.toLocaleString('en-US')}</span>;
}
