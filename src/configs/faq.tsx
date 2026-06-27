'use client';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import { JSX } from 'react';

export interface FAQItem {
  title: string;
  content: JSX.Element;
}

export const faqData: FAQItem[] = [
  {
    title: 'Who are you?',
    content: (
      <>
        Hey there! 👋 I&apos;m Muhammad Wasif, a Full-Stack Software Engineer with 2 years of experience
        building cloud-native fintech and logistics platforms at PostEx. I&apos;ve shipped a BNPL credit
        platform, Raast QR payment integration, and event-driven microservices in TypeScript, Java Spring
        Boot, Angular, and Node.js. I was awarded <strong>Emerging Star of the Year 2025</strong> in the
        Engineering Department at PostEx.
        <br className="mb-2" />
        For more about me, check out my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        !
      </>
    )
  },
  {
    title: 'What technologies do you use?',
    content: (
      <>
        I&apos;m a full-stack engineer with a focus on fintech and distributed systems. My primary stack
        includes <strong>TypeScript</strong>, <strong>Java</strong>, <strong>Angular 17</strong>,{' '}
        <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and{' '}
        <strong>Java Spring Boot</strong>. For databases I work with <strong>MongoDB</strong>,{' '}
        <strong>MySQL</strong>, and <strong>Firebase Firestore</strong>. For messaging and events:{' '}
        <strong>RabbitMQ</strong>, <strong>Amazon SQS</strong>, and <strong>Pusher</strong>. For
        observability: <strong>ELK Stack</strong>, <strong>GELF</strong>, and distributed tracing. Cloud
        and DevOps: <strong>AWS (SQS, EC2)</strong>, <strong>Docker</strong>, Git, and CI/CD pipelines.
        <br className="mb-2" />
        For more details on my tech stack and projects, please check out my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'Are you open to new opportunities?',
    content: (
      <>
        I&apos;m currently a Full-Stack Software Engineer at PostEx. While I&apos;m not actively job
        hunting, I&apos;m always open to conversations about exciting challenges in fintech, payments,
        distributed systems, or high-impact engineering roles. Feel free to reach out!
        <br className="mb-2" />
        You can contact me through:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </Link>
          </li>
          <li>
            LinkedIn:{' '}
            <Link
              href={siteConfig.social.linkedin}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.social.linkedin}
            </Link>
          </li>
        </ul>
      </>
    )
  },
  {
    title: 'Do you work on open-source projects?',
    content: (
      <>
        Yes, I contribute to open-source projects! You can explore my repositories and ongoing
        contributions on my GitHub. Feel free to contribute or check out my work!
        <br className="mb-2" />
        Visit my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>{' '}
        for more.
      </>
    )
  },
  {
    title: 'What is your approach to new technologies?',
    content: (
      <>
        I&apos;m always excited to learn new technologies! I typically start by building small projects
        to understand the fundamentals before diving deeper. I actively leverage AI-assisted development
        tools — GitHub Copilot, Cursor, and LLMs — to accelerate learning and engineering workflows.
        <br className="mb-2" />
        For more about my tech journey, visit my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'Do you offer freelance services?',
    content: (
      <>
        Yes, I&apos;m available for selective freelance work, especially in fintech, payments, or
        full-stack web development. Please contact me{' '}
        <Link
          href={`mailto:${siteConfig.social.email}`}
          className="text-blue-500 hover:underline"
        >
          via email
        </Link>{' '}
        to discuss your project details. I&apos;d be happy to explore how we can collaborate!
        <br className="mb-2" />
        You can also reach me through the contact form or my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  }
];
