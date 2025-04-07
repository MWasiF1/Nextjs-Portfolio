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
  const pageTitle = title ? ` ${title} · ${titlePrefix}` : titlePrefix;

  return {
    title: pageTitle,
    description: description || siteConfig.metadata.description,
    keywords: siteConfig.metadata.keywords,
    url: fullPath,
    type: siteConfig.metadata.type,
    openGraph: {
      title: pageTitle,
      description: description || siteConfig.metadata.description,
      url: fullPath,
      type: siteConfig.metadata.type,
      site_name: titlePrefix,
    },
    twitter: {
      title: pageTitle,
      description: description || siteConfig.metadata.description,
      card: 'summary_large_image',
    },
    alternates: {
      canonical: fullPath // Adding canonical URL
    },
    link: [
      {
        rel: 'icon',
        href: '/favicon.ico' // Icon link
      }
    ]
  };
};
