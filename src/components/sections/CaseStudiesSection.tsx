import Link from 'next/link';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import { caseStudies } from '@/src/configs/caseStudies';
import { siteConfig } from '@/src/configs/config';

// Server component: all case study text is in the initial HTML,
// so search engines and AI crawlers can read it without running JavaScript.
const CaseStudiesSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Projects" />

        <p className="w-full text-base text-black dark:text-white">
          Most of my work lives in private production systems at PostEx, so
          instead of a repo list, here are case studies of what I built: the
          problem, how I approached it, and what changed. Smaller public
          projects are on my{' '}
          <Link
            href={`https://github.com/${siteConfig.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </Link>
          .
        </p>

        <div className="w-full flex flex-col gap-8">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              id={study.slug}
              className="w-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 flex flex-col gap-4 scroll-mt-24"
            >
              <header className="flex flex-col gap-1">
                <p className="text-xs uppercase tracking-wider text-indigo-400">
                  {study.context}
                </p>
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                  {study.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {study.subtitle}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Role: {study.role}
                </p>
              </header>

              <section>
                <h4 className="text-sm font-semibold text-black dark:text-white mb-1">
                  The problem
                </h4>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {study.problem}
                </p>
              </section>

              <section>
                <h4 className="text-sm font-semibold text-black dark:text-white mb-1">
                  What I built
                </h4>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {study.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="text-sm font-semibold text-black dark:text-white mb-1">
                  Impact
                </h4>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-sm leading-relaxed text-emerald-700 dark:text-emerald-400">
                  {study.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <footer className="flex flex-col gap-3 pt-3 border-t border-border/30">
                <div className="flex flex-wrap gap-1.5">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-0.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-500 dark:text-indigo-300 font-mono whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {study.relatedArticle && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Related writing:{' '}
                    <Link
                      href={study.relatedArticle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-indigo-400"
                    >
                      {study.relatedArticle.title}
                    </Link>
                  </p>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default CaseStudiesSection;
