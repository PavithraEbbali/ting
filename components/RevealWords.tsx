import { Fragment } from "react";
import { cn } from "@/lib/cn";

interface RevealWordsProps {
  text: string;
  /** Delay before the first word starts, in ms. */
  startDelay?: number;
  /** Gap between consecutive words, in ms. */
  stepMs?: number;
  /**
   * Tailwind classes describing the gradient fill. When set, each word is
   * filled with it and the light is panned through.
   */
  gradientClass?: string;
  /**
   * Phase offset per word for the pan, in ms. Negative values start later words
   * further into the cycle, so the highlight reads as one wave crossing the
   * line rather than every word flashing together.
   */
  phaseMs?: number;
  /** Where this line sits in the wave, so a second line continues the first. */
  phaseStartMs?: number;
  className?: string;
}

/**
 * Splits a line into words and staggers their entrance.
 *
 * The entrance and the shimmer sit on two nested elements rather than one,
 * because they need independent timing — the rise cascades 70ms apart while the
 * light wave wants near-second offsets, and `animation` cannot be declared twice
 * on one element.
 *
 * The gradient lives on the inner element, which carries no transform or filter
 * of its own. `background-clip: text` clips to the glyphs in an element's own
 * paint layer, so a *descendant* with a transform would drop the fill; an
 * *ancestor* with one is fine, because the fill resolves first and the whole
 * subtree is transformed afterwards.
 */
export default function RevealWords({
  text,
  startDelay = 0,
  stepMs = 70,
  gradientClass,
  phaseMs = -900,
  phaseStartMs = 0,
  className,
}: RevealWordsProps) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span
            className={cn(
              "animate-word-rise inline-block will-change-[opacity,transform,filter]",
              className,
            )}
            style={{ animationDelay: `${startDelay + i * stepMs}ms` }}
          >
            {gradientClass ? (
              <span
                className={cn(
                  "animate-gradient-pan inline-block bg-clip-text text-transparent",
                  gradientClass,
                )}
                style={{ animationDelay: `${phaseStartMs + i * phaseMs}ms` }}
              >
                {word}
              </span>
            ) : (
              word
            )}
          </span>
          {/* Real space between words so lines still wrap normally. */}
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
