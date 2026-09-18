import type { PlanItem } from "@/lib/content";
import { cn } from "@/lib/cn";
import CountUp from "./CountUp";

type LockupSize = "md" | "lg";
type LockupTone = "light" | "dark";

interface PriceLockupProps {
  plan: PlanItem;
  size?: LockupSize;
  tone?: LockupTone;
  className?: string;
  /** Counts the integer up on mount. Used once, in the hero. */
  animateValue?: boolean;
}

/**
 * The single price lockup used everywhere on the site — hero anchor, every plan
 * card, the bundle callout. It reads straight off a PlanItem, so a price change
 * in lib/content.ts moves every instance at once.
 *
 * The inner row carries one font-size and every part is sized in `em` against
 * it, which keeps the dollar sign, integer, cents and unit in proportion at any
 * size. The dominant integer resolves to 2.5rem–3.5rem as specified.
 */
export default function PriceLockup({
  plan,
  size = "md",
  tone = "light",
  className,
  animateValue = false,
}: PriceLockupProps) {
  const muted = tone === "dark" ? "text-navy-20" : "text-ink-70";
  const solid = tone === "dark" ? "text-white" : "text-ink-90";

  // No published price: render the quote treatment rather than invent a number.
  if (typeof plan.price !== "number") {
    return (
      <div className={cn("flex flex-col gap-1", className)}>
        <span
          className={cn(
            "text-[1.75rem] font-extrabold leading-none tracking-tight sm:text-[2rem]",
            solid,
          )}
        >
          Custom pricing
        </span>
        <span className={cn("text-sm font-medium", muted)}>
          Quoted for your location
        </span>
      </div>
    );
  }

  const integer = Math.trunc(plan.price).toLocaleString("en-US");
  const cents = plan.cents;
  const unit = plan.priceUnit ?? "/mo";

  const spokenPrice = `$${integer}${cents ? `.${cents}` : ""} ${unit
    .replace("/mo", "per month")
    .trim()}`;

  return (
    <div className={className}>
      {/* Visual lockup — hidden from assistive tech, which reads the line below. */}
      <div
        aria-hidden="true"
        className={cn(
          "flex items-start tabular-nums",
          size === "lg"
            ? "text-[clamp(2.75rem,7vw,3.5rem)]"
            : "text-[clamp(2.5rem,6vw,3rem)]",
        )}
      >
        <span
          className={cn(
            "mt-[0.2em] text-[0.4em] font-bold leading-none",
            solid,
          )}
        >
          $
        </span>

        <span
          className={cn(
            "text-[1em] font-extrabold leading-[0.85] tracking-[-0.03em]",
            solid,
          )}
        >
          {animateValue ? (
            <CountUp value={Math.trunc(plan.price)} delayMs={620} />
          ) : (
            integer
          )}
        </span>

        {cents ? (
          <span
            className={cn(
              "mt-[0.22em] ml-[0.04em] text-[0.3em] font-semibold leading-none",
              muted,
            )}
          >
            {cents}
          </span>
        ) : null}

        <span
          className={cn(
            "ml-[0.14em] self-end pb-[0.06em] text-[0.27em] font-medium leading-none",
            muted,
          )}
        >
          {unit}
        </span>
      </div>

      <span className="sr-only">{spokenPrice}</span>
    </div>
  );
}
