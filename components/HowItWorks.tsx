import Image from 'next/image';
import { HOW_IT_WORKS } from '@/lib/content';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import CallButton from './CallButton';
import Aurora from './Aurora';

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative isolate scroll-mt-32 overflow-hidden bg-ink-10 py-16 sm:py-20 lg:py-24"
    >
      <Aurora />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={HOW_IT_WORKS.eyebrow}
          heading={HOW_IT_WORKS.heading}
        />

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 70} as="li" className="flex">
              <div className="flex h-full w-full flex-col rounded-2xl border border-ink-20 bg-white p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-20 text-[0.95rem] font-extrabold text-brand-70">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-[1.05rem] font-bold leading-snug tracking-[-0.01em] text-ink-90">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink-80">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-ink-20 bg-white sm:mt-14">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[16/10] bg-ink-20 lg:aspect-auto lg:min-h-[22rem]">
                <Image
                  src={HOW_IT_WORKS.cta.image.src}
                  alt={HOW_IT_WORKS.cta.image.alt}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col items-start justify-center gap-4 px-6 py-9 sm:px-10 sm:py-12">
                <h3 className="max-w-[24ch] text-[1.3rem] font-bold leading-snug tracking-[-0.02em] text-ink-90 sm:text-[1.5rem]">
                  {HOW_IT_WORKS.cta.heading}
                </h3>
                <p className="max-w-[46ch] text-[0.95rem] leading-relaxed text-ink-80">
                  {HOW_IT_WORKS.cta.body}
                </p>
                <CallButton
                  label="Call to order"
                  size="lg"
                  className="mt-2"
                  srSuffix="speak with our sales team"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
