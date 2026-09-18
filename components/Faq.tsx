import { FAQ, FAQ_SECTION } from '@/lib/content';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { ChevronDownIcon } from './Icons';
import Aurora from './Aurora';

/**
 * Built on native <details>/<summary>: keyboard and screen-reader behavior
 * comes for free and the accordion still works with JavaScript disabled.
 */
export default function Faq() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section
      id="faq"
      className="relative isolate scroll-mt-32 overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <Aurora />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={FAQ_SECTION.eyebrow}
          heading={FAQ_SECTION.heading}
          subheading={FAQ_SECTION.subheading}
        />

        <div className="mx-auto mt-12 max-w-3xl sm:mt-14">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 4) * 50}>
              <details className="group border-b border-ink-20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-left">
                  <h3 className="text-[1rem] font-semibold leading-snug text-ink-90 transition-colors group-hover:text-brand-70 sm:text-[1.05rem]">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-30 text-ink-80 transition-transform duration-300 ease-out group-open:rotate-180 group-open:border-brand-60 group-open:bg-brand-20 group-open:text-brand-70"
                  >
                    <ChevronDownIcon className="h-4 w-4" />
                  </span>
                </summary>
                <div className="pb-6 pr-12">
                  <p className="text-[0.95rem] leading-relaxed text-ink-80">
                    {item.a}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
