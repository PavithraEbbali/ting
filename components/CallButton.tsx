import type { ReactNode } from 'react';
import { PHONE } from '@/lib/content';
import { cn } from '@/lib/cn';
import { PhoneIcon } from './Icons';

type Variant = 'primary' | 'accent' | 'outline' | 'outlineDark' | 'onDark';
type Size = 'sm' | 'md' | 'lg';

interface CallButtonProps {
  /** Button text. Plan cards pass "Call to order" / "Call for pricing". */
  label: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  showIcon?: boolean;
  /** Extra context for screen readers, e.g. the plan name. */
  srSuffix?: string;
  fullWidth?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold ' +
  'transition-[background-color,color,border-color,transform,box-shadow] duration-200 ' +
  'ease-out active:translate-y-px whitespace-nowrap';

const variants: Record<Variant, string> = {
  // Ting blue with white text — 5.5:1, matches ting.com's own primary button.
  primary:
    'bg-brand-60 text-white hover:bg-brand-70 shadow-[0_1px_2px_rgba(14,14,14,0.08)] hover:shadow-[0_8px_22px_-8px_rgba(50,83,255,0.65)]',
  // Ting coral with near-black text — 8.4:1. Reserved for promo emphasis.
  accent: 'bg-accent-60 text-ink-90 hover:bg-accent-50',
  outline:
    'border border-ink-30 bg-white text-ink-90 hover:border-brand-60 hover:bg-brand-20 hover:text-brand-70',
  outlineDark:
    'border border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10',
  // Solid white on a dark/blue panel — 15:1, for use inside the hero.
  onDark: 'bg-white text-ink-90 hover:bg-navy-20',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[0.95rem]',
  lg: 'h-14 px-7 text-base sm:text-[1.05rem]',
};

/**
 * Every tel: link on the site renders through this component (or PhoneLink
 * below), which is what guarantees the data-call-cta attribute is never missed.
 */
export default function CallButton({
  label,
  variant = 'primary',
  size = 'md',
  className,
  showIcon = true,
  srSuffix,
  fullWidth = false,
}: CallButtonProps) {
  return (
    <a
      href={PHONE.href}
      data-call-cta
      className={cn(
        base,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
    >
      {showIcon ? <PhoneIcon className="h-4 w-4 shrink-0" /> : null}
      <span>{label}</span>
      {srSuffix ? <span className="sr-only">{` — ${srSuffix}`}</span> : null}
    </a>
  );
}

interface PhoneLinkProps {
  className?: string;
  children?: ReactNode;
  showIcon?: boolean;
}

/**
 * Plain tel: link that shows the raw number. Reserved for the header and
 * footer — plan cards and section CTAs use CallButton with an explicit label.
 */
export function PhoneLink({ className, children, showIcon = true }: PhoneLinkProps) {
  return (
    <a
      href={PHONE.href}
      data-call-cta
      className={cn('inline-flex items-center gap-2 transition-colors', className)}
    >
      {showIcon ? <PhoneIcon className="h-4 w-4 shrink-0" /> : null}
      <span>{children ?? PHONE.display}</span>
    </a>
  );
}
