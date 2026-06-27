// src/utils/generateMetadata.ts
import { siteConfig } from '@/src/configs/config';

interface MetadataParams {
  title?: string;
  description?: string;
  path: string;
}

export const generateMetadata = ({
  title,
  description,
  path
}: MetadataParams) => {
  const titlePrefix = siteConfig.titlePrefix || '';
  const fullPath = `${siteConfig.baseUrl}${path}`;
  const pageTitle = title
    ? `${title} · ${titlePrefix}`
    : `${titlePrefix} — Full-Stack Software Engineer`;

  const metaDescription =
    description ||
    siteConfig.metadata.description;

  return {
    title: pageTitle,
    description: metaDescription,
    keywords: siteConfig.metadata.keywords,
    url: fullPath,
    type: siteConfig.metadata.type,
    openGraph: {
      title: pageTitle,
      description: metaDescription,
      url: fullPath,
      type: siteConfig.metadata.type,
      site_name: titlePrefix,
      image: `${siteConfig.baseUrl}/img/og-preview.png`
    },
    twitter: {
      title: pageTitle,
      description: metaDescription,
      card: 'summary_large_image'
    },
    alternates: {
      canonical: fullPath
    },
    link: [
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  };
};
