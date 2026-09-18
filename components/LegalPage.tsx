import Link from 'next/link';
import type { LegalDoc } from '@/lib/legal';
import { SITE } from '@/lib/content';
import Aurora from './Aurora';
import CallButton from './CallButton';
import { ArrowRightIcon } from './Icons';

/** Stable anchor id for a section heading. */
function slugify(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

interface LegalPageProps {
  doc: LegalDoc;
}

export default function LegalPage({ doc }: LegalPageProps) {
  return (
    <main id="main-content" className="flex-1">
      {/* ------------------------------ Masthead ------------------------- */}
      <section className="relative isolate overflow-hidden bg-navy-90 py-14 sm:py-16 lg:py-20">
        <Aurora tone="dark" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.15em] text-brand-40">
            Legal
          </p>
          <h1 className="mt-3.5 max-w-[22ch] text-[clamp(1.9rem,4.6vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
            {doc.title}
          </h1>
          <p className="mt-5 max-w-[68ch] text-[1rem] leading-relaxed text-navy-10 sm:text-[1.05rem]">
            {doc.intro}
          </p>
          {doc.effectiveDate ? (
            <p className="mt-5 text-[0.82rem] font-medium text-navy-30">
              Effective {doc.effectiveDate}
            </p>
          ) : null}
        </div>
      </section>

      {/* ------------------------------ Document ------------------------- */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Contents */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <nav
                aria-label="On this page"
                className="rounded-2xl border border-ink-20 bg-ink-10 p-5 lg:sticky lg:top-32"
              >
                <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.13em] text-ink-70">
                  On this page
                </h2>
                <ol className="mt-4 space-y-0 sm:space-y-2.5">
                  {doc.sections.map((section, i) => (
                    <li key={section.heading} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="shrink-0 py-[11px] text-[0.78rem] font-bold tabular-nums text-ink-60 sm:py-0"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <a
                        href={`#${slugify(section.heading)}`}
                        className="py-[11px] text-[0.88rem] leading-snug text-ink-80 underline-offset-4 transition-colors hover:text-brand-70 hover:underline sm:py-0"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Body */}
            <div className="mt-10 lg:col-span-8 lg:mt-0 xl:col-span-9">
              <div className="max-w-[72ch]">
                {doc.sections.map((section, i) => (
                  <section
                    key={section.heading}
                    id={slugify(section.heading)}
                    className="scroll-mt-32 border-t border-ink-20 pt-8 first:border-t-0 first:pt-0 [&+section]:mt-10"
                  >
                    <h2 className="text-[1.15rem] font-bold leading-snug tracking-[-0.015em] text-ink-90 sm:text-[1.25rem]">
                      <span
                        aria-hidden="true"
                        className="mr-2.5 text-[0.9rem] font-bold tabular-nums text-brand-60"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {section.heading}
                    </h2>

                    {section.body?.map((para) => (
                      <p
                        key={para.slice(0, 40)}
                        className="mt-4 text-[0.97rem] leading-[1.75] text-ink-80"
                      >
                        {para}
                      </p>
                    ))}

                    {section.list ? (
                      <ul className="mt-4 space-y-3">
                        {section.list.map((item) => (
                          <li
                            key={item.slice(0, 40)}
                            className="flex gap-3 text-[0.97rem] leading-[1.75] text-ink-80"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-60"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              {/* Closing block */}
              <div className="mt-12 rounded-3xl border border-ink-20 bg-ink-10 p-6 sm:p-8">
                <p className="text-[0.95rem] leading-relaxed text-ink-80">
                  {SITE.disclosure} Questions about anything on this page, or
                  about an order, are handled by our team directly.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <CallButton
                    label="Call to order"
                    size="md"
                    srSuffix="speak with our sales team"
                  />
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full px-1 text-[0.92rem] font-semibold text-brand-70 underline-offset-4 transition-colors hover:text-brand-60 hover:underline"
                  >
                    Back to plans
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
