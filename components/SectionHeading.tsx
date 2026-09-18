import { cn } from '@/lib/cn';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  tone = 'light',
  align = 'center',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div
      className={cn(
        centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl',
        className,
      )}
    >
      <Reveal>
        <span
          className={cn(
            'text-[0.72rem] font-bold uppercase tracking-[0.15em]',
            tone === 'dark' ? 'text-brand-40' : 'text-brand-70',
          )}
        >
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={60}>
        <h2
          className={cn(
            'mt-3.5 text-[clamp(1.75rem,4.2vw,2.6rem)] font-extrabold leading-[1.12] tracking-[-0.03em]',
            tone === 'dark' ? 'text-white' : 'text-ink-90',
          )}
        >
          {heading}
        </h2>
      </Reveal>

      {subheading ? (
        <Reveal delay={110}>
          <p
            className={cn(
              'mt-4 text-[1rem] leading-relaxed sm:text-[1.05rem]',
              centered && 'mx-auto',
              tone === 'dark' ? 'text-navy-10' : 'text-ink-80',
            )}
          >
            {subheading}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
