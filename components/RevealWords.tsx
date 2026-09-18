import { Fragment } from "react";
import { cn } from "@/lib/cn";

interface RevealWordsProps {
  text: string;
  /** Delay before the first word starts, in ms. */
  startDelay?: number;
  /** Gap between consecutive words, in ms. */
  stepMs?: number;
  /**
   * Fills each word with the brand gradient and runs the light through it.
   *
   * The gradient is applied per word rather than to the line, deliberately:
   * `background-clip: text` clips a background to the glyphs in that element's
   * own paint layer, and a descendant carrying `transform` or `filter` is
   * rasterised separately, which drops the fill. Keeping clip, transform and
   * blur on the same element avoids that entirely, and the words end up
   * catching the light in sync.
   */
  gradient?: boolean;
  className?: string;
}

export default function RevealWords({
  text,
  startDelay = 0,
  stepMs = 70,
  gradient = false,
  className,
}: RevealWordsProps) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span
            className={cn(
              "inline-block will-change-[opacity,transform,filter]",
              gradient
                ? "animate-word-shimmer bg-[linear-gradient(100deg,#b9d1ff_0%,#ffffff_46%,#cfddff_80%)] bg-[length:210%_auto] bg-clip-text text-transparent"
                : "animate-word-rise",
              className,
            )}
            style={{ animationDelay: `${startDelay + i * stepMs}ms` }}
          >
            {word}
          </span>
          {/* Real space between words so lines still wrap normally. */}
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
