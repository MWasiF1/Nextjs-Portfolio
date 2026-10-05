import Link from 'next/link';
import Parser from 'rss-parser';
import SectionContainer from '@/src/components/utils/SectionContainer';
import TitleSectionPageContainer from '@/src/components/utils/TitleSectionPageContainer';
import { siteConfig } from '@/src/configs/config';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';

// Re-fetch the Medium feed at most once an hour
export const revalidate = 3600;

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Blog',
    description:
      'Articles by Muhammad Wasif on payment systems, idempotency, observability, microservices, concurrency, and Angular, drawn from building production fintech systems.',
    path: '/blog'
  });
}

interface Post {
  title: string;
  link: string;
  date?: string;
  tags: string[];
}

const MEDIUM_FEED = 'https://medium.com/feed/@mianwasif.001';

// Shown if the Medium feed can't be reached at build or revalidation time
const fallbackPosts: Post[] = [
  {
    title: 'Angular Zoneless Change Detection: What Changes, What Breaks, and Why It Matters',
    link: 'https://medium.com/@mianwasif.001/angular-zoneless-change-detection-what-changes-what-breaks-and-why-it-matters-f2d48fe5bdcd',
    tags: []
  },
  {
    title: 'Idempotency in Payment Systems: The Guarantee That’s Easy to Skip and Expensive to Get Wrong',
    link: 'https://medium.com/@mianwasif.001/idempotency-in-payment-systems-the-guarantee-thats-easy-to-skip-and-expensive-to-get-wrong-14809f82139c',
    tags: []
  },
  {
    title: 'Your App Didn’t Fail at 3AM — Your Observability Did',
    link: 'https://medium.com/@mianwasif.001/your-app-didnt-fail-at-3am-your-observability-did-69fa083616ee',
    tags: []
  },
  {
    title: 'The Microservices Trap: Why Most Teams Start Too Early',
    link: 'https://medium.com/@mianwasif.001/the-microservices-trap-why-most-teams-start-too-early-6aa8e45e42b9',
    tags: []
  },
  {
    title: 'You Don’t Need a Faster Server — You Need to Understand Concurrency',
    link: 'https://medium.com/@mianwasif.001/you-dont-need-a-faster-server-you-need-to-understand-concurrency-ed8f7660f3a5',
    tags: []
  },
  {
    title: 'Redis vs Kafka vs RabbitMQ',
    link: 'https://medium.com/@mianwasif.001/redis-vs-kafka-vs-rabbitmq-fefcfc0c32c3',
    tags: []
  }
];

async function getPosts(): Promise<Post[]> {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(MEDIUM_FEED);
    const posts = (feed.items || []).map((item) => ({
      title: item.title || 'Untitled',
      // Strip Medium's tracking query string
      link: (item.link || '').split('?')[0],
      date: item.isoDate || item.pubDate,
      tags: (item.categories || []).slice(0, 4)
    }));
    return posts.length > 0 ? posts : fallbackPosts;
  } catch (error) {
    console.error('Failed to load Medium feed:', error);
    return fallbackPosts;
  }
}

const formatDate = (date?: string) =>
  date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    : '';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Blog" />
        <p className="w-full text-base text-black dark:text-white">
          I write about what I learn shipping production systems: payment
          reliability, event-driven architecture, observability, concurrency,
          and Angular. Articles are published on{' '}
          <Link
            href={siteConfig.social.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Medium
          </Link>
          .
        </p>

        <ul className="w-full flex flex-col gap-4">
          {posts.map((post) => (
            <li key={post.link}>
              <Link
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border/50 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/40"
              >
                <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-indigo-400">
                  {post.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                  {post.date && <span>{formatDate(post.date)}</span>}
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-500 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
