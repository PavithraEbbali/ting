import { FINE_PRINT, getFinePrintRows } from '@/lib/content';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Aurora from './Aurora';

const COLUMNS = [
  { key: 'monthly', label: 'Monthly' },
  { key: 'speed', label: 'Speed' },
  { key: 'data', label: 'Data' },
  { key: 'term', label: 'Term' },
  { key: 'equipment', label: 'Hardware & install' },
] as const;

/**
 * Every row here is generated from PLANS in lib/content.ts, so the table can
 * never drift out of sync with the cards above it.
 *
 * Below lg the table becomes stacked cards rather than a scrolling grid, which
 * is what keeps the page free of horizontal overflow down to 320px.
 */
export default function FinePrintGrid() {
  const rows = getFinePrintRows();

  return (
    <section
      id="fine-print"
      className="relative isolate scroll-mt-32 overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <Aurora />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={FINE_PRINT.eyebrow}
          heading={FINE_PRINT.heading}
          subheading={FINE_PRINT.subheading}
        />

        {/* ---------------------------- Table (lg+) ---------------------- */}
        <Reveal className="mt-12 hidden lg:block">
          <div className="overflow-hidden rounded-3xl border border-ink-20">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Monthly price, speed, data policy, contract term and hardware
                costs for every Ting plan on this page.
              </caption>
              <thead>
                <tr className="bg-navy-90">
                  <th
                    scope="col"
                    className="px-5 py-4 text-[0.74rem] font-bold uppercase tracking-[0.11em] text-white"
                  >
                    Plan
                  </th>
                  {COLUMNS.map((col) => (
                    <th
                      key={col.key}
                      scope="col"
                      className="px-5 py-4 text-[0.74rem] font-bold uppercase tracking-[0.11em] text-navy-20"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.planId}
                    className={i % 2 === 1 ? 'bg-ink-10' : 'bg-white'}
                  >
                    <th
                      scope="row"
                      className="max-w-[15rem] px-5 py-5 align-top text-[0.95rem] font-bold text-ink-90"
                    >
                      {row.plan}
                    </th>
                    <td className="whitespace-nowrap px-5 py-5 align-top text-[0.95rem] font-bold text-ink-90">
                      {row.monthly}
                    </td>
                    <td className="px-5 py-5 align-top text-[0.9rem] text-ink-80">
                      {row.speed}
                    </td>
                    <td className="px-5 py-5 align-top text-[0.9rem] text-ink-80">
                      {row.data}
                    </td>
                    <td className="px-5 py-5 align-top text-[0.9rem] text-ink-80">
                      {row.term}
                    </td>
                    <td className="max-w-[22rem] px-5 py-5 align-top text-[0.86rem] leading-snug text-ink-70">
                      {row.equipment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* ------------------------- Stacked cards (<lg) ------------------ */}
        <div className="mt-11 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:hidden">
          {rows.map((row, i) => (
            <Reveal key={row.planId} delay={i * 60}>
              <div className="h-full rounded-2xl border border-ink-20 bg-white p-5">
                <h3 className="text-[1.02rem] font-bold leading-snug text-ink-90">
                  {row.plan}
                </h3>
                <p className="mt-1 text-[1.02rem] font-bold text-brand-70">
                  {row.monthly}
                </p>
                <dl className="mt-4 space-y-2.5 border-t border-ink-20 pt-4">
                  {COLUMNS.filter((c) => c.key !== 'monthly').map((col) => (
                    <div key={col.key} className="flex flex-col gap-0.5">
                      <dt className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-ink-60">
                        {col.label}
                      </dt>
                      <dd className="text-[0.88rem] leading-snug text-ink-80">
                        {row[col.key]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ----------------------------- Add-ons -------------------------- */}
        <Reveal className="mt-10 sm:mt-12">
          <div className="rounded-3xl bg-ink-10 p-6 sm:p-8">
            <h3 className="text-[1.05rem] font-bold tracking-[-0.01em] text-ink-90">
              {FINE_PRINT.addOnsTitle}
            </h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {FINE_PRINT.addOns.map((item) => (
                <li
                  key={item.label}
                  className="border-t border-ink-30 pt-4"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[0.92rem] font-semibold text-ink-90">
                      {item.label}
                    </span>
                    <span className="shrink-0 whitespace-nowrap text-[0.92rem] font-bold text-brand-70">
                      {item.value}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.84rem] leading-snug text-ink-70">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
