'use client';

import { usePathname } from 'next/navigation';
import { generateMetadata } from '@/src/components/utils/generateMetadata';
import { siteConfig } from '@/src/configs/config';
import Script from 'next/script';

const Head = () => {
  const pathname = usePathname() || '/';
  const meta = generateMetadata({
    title: pathname === '/' ? '' : pathname.slice(1).replace(/-/g, ' '),
    path: pathname
  });

  const generateJsonLd = () => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': meta.url,
      url: siteConfig.baseUrl,
      name: siteConfig.author,
      description: meta.description,
      jobTitle: 'Full-Stack Software Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'PostEx'
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'GC University Lahore'
      },
      sameAs: [
        siteConfig.social.linkedin,
        `https://github.com/${siteConfig.social.github}`
      ]
    };

    return JSON.stringify(jsonLd);
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content={siteConfig.author} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content={meta.openGraph.type} />
      <meta property="og:site_name" content={meta.openGraph.site_name} />
      <meta property="og:title" content={meta.openGraph.title} />
      <meta property="og:description" content={meta.openGraph.description} />
      <meta property="og:image" content={meta.openGraph.image} />
      <meta name="twitter:card" content={meta.twitter.card} />
      <meta name="twitter:title" content={meta.twitter.title} />
      <meta name="twitter:description" content={meta.twitter.description} />
      <link rel="canonical" href={meta.url} />
      <link rel="icon" href={meta.link[0].href} />

      <Script
        id="json-ld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJsonLd()
        }}
      />
    </>
  );
};

export default Head;
