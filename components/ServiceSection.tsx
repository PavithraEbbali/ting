import Image from 'next/image';
import { getPlansByLine, type ServiceSectionMeta } from '@/lib/content';
import { cn } from '@/lib/cn';
import PlanCard from './PlanCard';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import Aurora from './Aurora';

interface ServiceSectionProps {
  meta: ServiceSectionMeta;
  /** Alternates the section background so adjacent lines stay visually separate. */
  alt?: boolean;
}

/**
 * Renders one service line. Driven entirely by lib/content.ts: the plans, the
 * heading copy, the anchor, the photograph and how that photograph is used all
 * come from data. A line with no plans is never reached — getActiveServiceLines()
 * filters it out upstream.
 */
export default function ServiceSection({ meta, alt = false }: ServiceSectionProps) {
  const plans = getPlansByLine(meta.line);
  if (plans.length === 0) return null;

  const asBackground = Boolean(meta.image && meta.imageTreatment === 'background');
  const beside =
    meta.image && meta.imageTreatment !== 'background' && plans.length === 1
      ? meta.image
      : null;

  // Two wide cards read better than two narrow ones stranded in a 3-col grid.
  const columns =
    plans.length === 1
      ? 'max-w-xl'
      : plans.length === 2
        ? 'md:grid-cols-2 max-w-4xl'
        : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section
      id={meta.anchor}
      className={cn(
        'relative isolate scroll-mt-32 overflow-hidden py-16 sm:py-20 lg:py-24',
        asBackground ? 'bg-navy-90' : alt ? 'bg-ink-10' : 'bg-white',
      )}
    >
      {asBackground && meta.image ? (
        <>
          <Image
            src={meta.image.src}
            alt={meta.image.alt}
            fill
            sizes="100vw"
            quality={80}
            style={{ objectPosition: meta.image.position }}
            className="-z-30 object-cover"
          />
          {/*
            Weighted to the top, where the heading sits, and light through the
            middle so the room actually reads. The previous pair of scrims
            compounded to ~96% and flattened the photograph completely.

            Measured against this image, whose windows blow out to pure white:
            top band lands at 0.45 + 0.55x0.72 = 0.85 composite, which carries
            white heading text at 5.1:1 and the navy-10 subheading at 4.8:1.
            The middle sits at 0.45, so the photo keeps over half its strength
            either side of the card.
          */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-navy-90/45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-gradient-to-b from-navy-90/72 via-transparent to-navy-90/45"
          />
        </>
      ) : (
        <Aurora />
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={meta.eyebrow}
          heading={meta.heading}
          subheading={meta.subheading}
          tone={asBackground ? 'dark' : 'light'}
        />

        {beside ? (
          <div className="mt-12 grid grid-cols-1 items-center gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-20 lg:aspect-[16/11]">
                <Image
                  src={beside.src}
                  alt={beside.alt}
                  fill
                  sizes="(min-width: 1024px) 48vw, 92vw"
                  style={{ objectPosition: beside.position }}
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={80} className="flex">
              <PlanCard plan={plans[0]} className="w-full" />
            </Reveal>
          </div>
        ) : (
          <div
            className={cn(
              'mx-auto mt-12 grid grid-cols-1 gap-6 sm:mt-14 lg:gap-7',
              columns,
            )}
          >
            {plans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 70} className="flex">
                <PlanCard plan={plan} className="w-full" />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
