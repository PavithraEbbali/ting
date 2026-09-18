import type { MetadataRoute } from 'next';
import { LEGAL_DOCS } from '@/lib/legal';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

/**
 * Built from LEGAL_DOCS, so adding a policy page adds its sitemap entry too.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...LEGAL_DOCS.map((doc) => ({
      url: `${SITE_URL}/${doc.slug}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
