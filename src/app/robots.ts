import type { MetadataRoute } from 'next';
import { siteConfig } from '@/src/configs/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // All bots
        allow: '/', // Allow all pages to be crawled
        disallow: '/private/' // Disallow crawling of the /private/ directory
      },
      {
        userAgent: 'ia_archiver', // Block Internet Archive (Wayback Machine)
        disallow: '/' // Disallow access to all pages
      }
    ],
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`
  };
}
