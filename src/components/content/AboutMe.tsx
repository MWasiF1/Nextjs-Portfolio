'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content="Here is a little bit about me and my journey as a software engineer."
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Hey there! 👋 I&apos;m{' '}
        <strong className="text-foreground dark:text-white">
          {siteConfig.author}
        </strong>
        , a <strong>Full-Stack Software Engineer</strong> with 2 years of experience designing and shipping
        cloud-native fintech and logistics platforms at scale. I specialize in building production-grade
        systems in <strong>TypeScript</strong>, <strong>Java Spring Boot</strong>, <strong>Angular</strong>,
        and <strong>Node.js</strong> — with strong foundations in microservices architecture, distributed
        observability, and event-driven design.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        At <strong>PostEx</strong> in Lahore, I&apos;ve led end-to-end development of a{' '}
        <strong>BNPL (Buy Now, Pay Later) credit platform</strong> and{' '}
        <strong>Lending Management System</strong> serving 1,000+ merchants, and was a core contributor to
        PostEx&apos;s <strong>Digital QR (DQR) Payment on Delivery</strong> system — integrating{' '}
        <strong>Raast QR</strong> (State Bank of Pakistan&apos;s ISO 20022 instant payment rail) into
        PostEx&apos;s COD collection flow across 6 major cities. I&apos;ve also designed distributed tracing
        infrastructure across 6 production microservices using the <strong>ELK Stack</strong> and{' '}
        <strong>GELF</strong>, reducing mean time to diagnose incidents by ~50%.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        Before PostEx, I started as a <strong>Frontend Developer Intern</strong> at Algorydhem Developers,
        where I built responsive web applications with <strong>React.js</strong>, established reusable
        component libraries, and improved page load times by 20% through rendering optimizations.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        My stack spans <strong>TypeScript</strong>, <strong>JavaScript</strong>, <strong>Java</strong>, and{' '}
        <strong>C++</strong> on the language side; <strong>Angular</strong>, <strong>React</strong>, and{' '}
        <strong>React Native</strong> on the frontend; <strong>Node.js</strong>,{' '}
        <strong>Express.js</strong>, and <strong>Spring Boot</strong> on the backend; and{' '}
        <strong>RabbitMQ</strong>, <strong>Amazon SQS</strong>, and <strong>Pusher</strong> for messaging.
        I&apos;m comfortable with <strong>AWS (SQS, EC2)</strong>, <strong>Docker</strong>, and CI/CD
        pipelines, and I actively leverage AI-assisted development tools — GitHub Copilot, Cursor, and LLMs
        — to accelerate engineering workflows.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        🏆 I was awarded <strong>Emerging Star of the Year 2025</strong> in the Engineering Department at
        PostEx for high-impact contributions across the fintech and logistics portfolios. If you&apos;re
        building something ambitious in fintech, payments, or distributed systems — let&apos;s connect!
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
