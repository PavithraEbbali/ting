import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LEGAL_DOCS, getLegalDoc } from '@/lib/legal';
import { SITE } from '@/lib/content';
import LegalPage from '@/components/LegalPage';

/**
 * Every policy page is generated from LEGAL_DOCS in lib/legal.ts. Adding a
 * document there adds its route, its metadata and its footer link — nothing
 * needs to be written here.
 *
 * dynamicParams is off, so any path that is not one of those slugs 404s rather
 * than rendering an empty document.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return LEGAL_DOCS.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return {};

  const title = `${doc.title} — ${SITE.brandName} ${SITE.retailerLabel}`;
  return {
    title,
    description: doc.metaDescription,
    alternates: { canonical: `/${doc.slug}` },
    openGraph: {
      title,
      description: doc.metaDescription,
      type: 'article',
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  return <LegalPage doc={doc} />;
}
