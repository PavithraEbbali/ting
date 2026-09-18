import { cn } from '@/lib/cn';

interface AuroraProps {
  tone?: 'light' | 'dark';
  className?: string;
}

/**
 * Drifting colour field behind a section. Three heavily blurred blobs — Ting
 * blue, coral and the tertiary aqua — each on its own period (26s / 32s / 29s)
 * so the composite never visibly repeats.
 *
 * Opacity is held well below the point where it would eat into the text
 * contrast budget on light sections; the dark variant can run hotter because
 * everything over it is white or near-white.
 *
 * The wrapper clips its own overflow, so the oversized blobs can never widen
 * the page.
 */
export default function Aurora({ tone = 'light', className }: AuroraProps) {
  const dark = tone === 'dark';

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 overflow-hidden',
        className,
      )}
    >
      <div
        className={cn(
          'animate-aurora-a absolute -left-[14%] -top-[28%] h-[20rem] w-[20rem] rounded-full blur-[55px] will-change-transform sm:h-[46rem] sm:w-[46rem] sm:blur-[110px]',
          dark ? 'bg-brand-60/40' : 'bg-brand-60/20',
        )}
      />
      <div
        className={cn(
          'animate-aurora-b absolute -bottom-[30%] -right-[12%] h-[18rem] w-[18rem] rounded-full blur-[55px] will-change-transform sm:h-[42rem] sm:w-[42rem] sm:blur-[120px]',
          dark ? 'bg-accent-60/30' : 'bg-accent-60/18',
        )}
      />
      <div
        className={cn(
          'animate-aurora-c absolute -bottom-[22%] left-[26%] hidden h-[34rem] w-[34rem] rounded-full blur-[130px] will-change-transform sm:block',
          dark ? 'bg-aqua/22' : 'bg-aqua/14',
        )}
      />
    </div>
  );
}
