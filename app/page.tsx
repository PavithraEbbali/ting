import { getActiveServiceLines } from '@/lib/content';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import FinePrintGrid from '@/components/FinePrintGrid';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
import Faq from '@/components/Faq';

/**
 * Page order is fixed by spec: hero, then every live service line in canonical
 * merchandising order (fiber · cable · bundle · tv · mobile · phone), then the
 * closing sections. Lines with no plans in lib/content.ts are filtered out by
 * getActiveServiceLines() and never render a placeholder.
 */
export default function Home() {
  const serviceLines = getActiveServiceLines();

  return (
    <>
      <main id="main-content" className="flex-1">
        <Hero />

        {serviceLines.map((meta, i) => (
          <ServiceSection key={meta.line} meta={meta} alt={i % 2 === 0} />
        ))}

        <FinePrintGrid />
        <WhyUs />
        <HowItWorks />
        <Faq />
      </main>
    </>
  );
}
