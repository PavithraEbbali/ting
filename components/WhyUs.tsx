import Image from 'next/image';
import { WHY_US } from '@/lib/content';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Aurora from './Aurora';

export default function WhyUs() {
  return (
    <section
      id="why"
      className="relative isolate scroll-mt-32 overflow-hidden bg-navy-90 py-16 sm:py-20 lg:py-24"
    >
      <Aurora tone="dark" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={WHY_US.eyebrow}
          heading={WHY_US.heading}
          subheading={WHY_US.subheading}
          tone="dark"
        />

        <div className="mt-12 grid grid-cols-1 gap-x-7 gap-y-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 70}>
              <div className="h-full">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-70">
                  <Image
                    src={pillar.image.src}
                    alt={pillar.image.alt}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
                    style={{ objectPosition: pillar.image.position }}
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-[1.08rem] font-bold leading-snug tracking-[-0.01em] text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[0.93rem] leading-relaxed text-navy-20">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
