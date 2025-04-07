'use client';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import { JSX } from 'react';

// Define a type for FAQ item
export interface FAQItem {
  title: string;
  content: JSX.Element;
}

// Define the faqData array with the FAQItem type
export const faqData: FAQItem[] = [
  {
    title: 'Who are you?',
    content: (
      <>
        Hey there! 👋 I'm Muhammad Wasif, a Full Stack developer passionate about
        coding since childhood. I build innovative solutions using a variety of
        technologies like Angular , React.js, Next.js, Node.js, Spring Boot, TypeScript, React Native, Javascript.
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
        I am a full-stack developer with a focus on both frontend and backend
        technologies. I mostly use tools like  Angular , React.js, Next.js, Node.js, Spring Boot, TypeScript, React Native, Javascript, MongoDB, and SQL for my regular basis
        projects. 
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
    title: 'Can we hire you?',
    content: (
      <>
        Yes, I am currently looking for job opportunities! Feel free to reach
        out to me via email or Linkedin if you're interested in hiring me or
        collaborating on exciting projects.
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
            {' '}
            Linkedin{' '}
            <Link
              href={`mailto:${siteConfig.social.linkedin}`}
              className="text-blue-500 hover:underline"
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
        Yes, I contribute to open-source projects! You can explore my
        repositories and ongoing contributions on my GitHub. Feel free to
        contribute or check out my work!
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
        I'm always excited to learn new technologies! I typically start by
        building small projects to understand the fundamentals before diving
        deeper. I focus on adopting tools that improve my workflow and help me
        build better applications.
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
        Yes, I am available for freelance work. Please contact me{' '}
        <Link
          href={`mailto:${siteConfig.social.email}`}
          className="text-blue-500 hover:underline"
        >
          via email
        </Link>{' '}
        to discuss your project details. I would be happy to explore how we can
        collaborate!
        <br className="mb-2" />
        You can reach me through the contact information provided on my{' '}
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
