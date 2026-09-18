import { formatSpeed, getCtaLabel, type PlanItem } from '@/lib/content';
import { cn } from '@/lib/cn';
import PriceLockup from './PriceLockup';
import CallButton from './CallButton';
import { CheckIcon } from './Icons';

interface PlanCardProps {
  plan: PlanItem;
  className?: string;
}

export default function PlanCard({ plan, className }: PlanCardProps) {
  const speed = formatSpeed(plan);
  const ctaLabel = getCtaLabel(plan);

  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-3xl border bg-white p-6 sm:p-7',
        'transition-[border-color,box-shadow,transform] duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-[0_24px_50px_-32px_rgba(14,14,14,0.38)]',
        plan.isPopular
          ? 'border-brand-40 shadow-[0_18px_42px_-34px_rgba(50,83,255,0.45)] hover:border-brand-60'
          : 'border-ink-20 hover:border-ink-40',
        className,
      )}
    >
      {plan.isPopular ? (
        <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-accent-60 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-ink-90">
          Most popular
        </span>
      ) : null}

      <header>
        <h3 className="text-[1.3rem] font-bold leading-snug tracking-[-0.02em] text-ink-90">
          {plan.name}
        </h3>
        {plan.tagline ? (
          <p className="mt-1.5 text-[0.9rem] leading-snug text-ink-70">
            {plan.tagline}
          </p>
        ) : null}
      </header>

      <div className="mt-6">
        <PriceLockup plan={plan} />
        {plan.promoQualifier ? (
          <p className="mt-3 text-[0.85rem] font-semibold leading-snug text-brand-70">
            {plan.promoQualifier}
          </p>
        ) : null}
      </div>

      {(speed || plan.dataPolicy || plan.contractTerm) && (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {[speed, plan.dataPolicy, plan.contractTerm]
            .filter((v): v is string => Boolean(v))
            .map((chip) => (
              <li
                key={chip}
                className="rounded-full bg-ink-10 px-2.5 py-1 text-[0.76rem] font-semibold text-ink-80"
              >
                {chip}
              </li>
            ))}
        </ul>
      )}

      <ul className="mt-6 space-y-3 border-t border-ink-20 pt-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <CheckIcon className="mt-[3px] h-4 w-4 shrink-0 text-brand-60" />
            <span className="text-[0.92rem] leading-snug text-ink-80">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <CallButton
          label={ctaLabel}
          size="lg"
          fullWidth
          variant={plan.isPopular ? 'primary' : 'outline'}
          srSuffix={plan.name}
        />
        {plan.equipmentFee ? (
          <p className="mt-3.5 text-[0.79rem] leading-snug text-ink-70">
            {plan.equipmentFee}
          </p>
        ) : null}
      </div>
    </article>
  );
}
