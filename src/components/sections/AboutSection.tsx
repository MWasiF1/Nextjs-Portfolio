'use client';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import SectionContainer from '../utils/SectionContainer';
import Link from 'next/link';
import ContactMe from '@/src/components/content/ContactMe';
import FAQSection from '@/src/components/sections/FAQSection';
import SkillsSection from '@/src/components/sections/SkillsSection';
import Education from '@/src/components/content/Education';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Hey there! 👋 I&apos;m <strong>{siteConfig.author}</strong>, a{' '}
            <strong>Full-Stack Software Engineer</strong> with 2 years of experience building production
            fintech and logistics systems at PostEx. I&apos;ve shared some of my work on my{' '}
            <Link
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              GitHub profile
            </Link>{' '}
            — check it out! ✌️
          </p>

          <ul className="text-base text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2 mt-4">
            <li>
              🏦 I build cloud-native fintech platforms — including a <strong>BNPL credit system</strong>,{' '}
              <strong>Lending Management System</strong>, and <strong>Raast QR payment integration</strong>{' '}
              (ISO 20022) serving production workloads across 6 major cities.
            </li>
            <li>
              🔭 My core stack is <strong>TypeScript</strong>, <strong>Angular 17</strong>,{' '}
              <strong>Node.js</strong>, and <strong>Java Spring Boot</strong> — with event-driven
              architecture using <strong>RabbitMQ</strong> and <strong>Amazon SQS</strong>.
            </li>
            <li>
              📊 I&apos;ve implemented distributed observability with the <strong>ELK Stack</strong>{' '}
              (Elasticsearch, Logstash, Kibana) and GELF across 6 microservices — cutting incident
              diagnosis time by ~50%.
            </li>
            <li>
              🤝 Collaboration is at the core of what I do — whether aligning fintech, logistics, and
              payments teams or using <strong>GitHub Copilot</strong> and LLMs to accelerate team
              workflows.
            </li>
            <li>
              🏆 Awarded <strong>Emerging Star of the Year 2025</strong> in the Engineering Department
              at PostEx for high-impact contributions across fintech and logistics portfolios.
            </li>
          </ul>

          <p className="text-base text-gray-600 dark:text-gray-400 mt-4">
            Explore my work, and let&apos;s connect for collaborations or just to geek out about
            distributed systems and payments!
          </p>
        </AnimationContainer>

        <AnimationContainer customClassName="w-full">
          <CurrentTimeLineExp />
        </AnimationContainer>

        <AnimationContainer customClassName="w-full mt-8">
          <Education />
        </AnimationContainer>

        <AnimationContainer customClassName="w-full">
          <SkillsSection />
        </AnimationContainer>

        {/* Contact Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <ContactMe />
        </AnimationContainer>

        {/* FAQ Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <FAQSection />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
