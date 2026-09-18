import { SITE } from '@/lib/content';
import { cn } from '@/lib/cn';

interface WordmarkProps {
  tone?: 'light' | 'dark';
  className?: string;
  /** Hide the "Authorized Retailer" kicker (used in tight spaces). */
  compact?: boolean;
}

/**
 * Retailer wordmark. Deliberately a typographic lockup rather than a copy of
 * the provider's logo file, with the retailer status set directly beside the
 * brand name so the relationship reads at a glance.
 */
export default function Wordmark({
  tone = 'light',
  className,
  compact = false,
}: WordmarkProps) {
  const name = tone === 'dark' ? 'text-white' : 'text-brand-60';
  const kicker = tone === 'dark' ? 'text-navy-20' : 'text-ink-70';

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span className="inline-flex items-baseline">
        <span
          className={cn(
            'text-[1.55rem] font-extrabold leading-none tracking-[-0.045em]',
            name,
          )}
        >
          ting
        </span>
        <span
          aria-hidden="true"
          className="ml-[3px] h-[7px] w-[7px] self-end rounded-full bg-accent-60"
        />
      </span>

      {!compact && (
        <>
          <span
            aria-hidden="true"
            className={cn(
              'hidden h-5 w-px sm:block',
              tone === 'dark' ? 'bg-white/25' : 'bg-ink-30',
            )}
          />
          <span
            className={cn(
              'hidden text-[0.68rem] font-semibold uppercase leading-tight tracking-[0.13em] sm:block',
              kicker,
            )}
          >
            {SITE.retailerLabel}
          </span>
        </>
      )}
    </span>
  );
}
