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
        content={`Here is a little bit about me and my journey as a developer.`}
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Hey there! 👋 I'm{' '}
        <strong className="text-foreground dark:text-white">
          {siteConfig.author}
        </strong>
        , a passionate Full Stack developer with a knack for building dynamic and user-friendly solutions. My
        coding journey kicked off with a curiosity for technology, which has since evolved into a career where I
        blend creativity and technical expertise to craft impactful applications.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        Currently, I’m an <strong>Associate Software Engineer</strong> at PostEx in Lahore, Pakistan, where I design
        and develop responsive interfaces for platforms like the Merchant Portal, Backoffice, Partner Portal, and
        Digital Wallet using <strong>Angular</strong>, <strong>Tailwind CSS</strong>, and <strong>RxJS</strong>. On
        the backend, I build and optimize <strong>RESTful APIs</strong> with <strong>Java Spring Boot</strong>,
        ensuring seamless data exchange and robust functionality. One of my proudest achievements? Integrating the
        <strong> WhatsApp API</strong> to boost customer engagement through automated messaging.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        My journey began as a <strong>Trainee FrontEnd Developer</strong> at Algorydhem Developers in Sheikhupura,
        where I honed my skills in <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>,
        <strong>JavaScript</strong>, and <strong>React.js</strong>. I built fully responsive websites, optimized
        UI/UX, and even explored unique challenges like studying video game dungeon generation techniques for a
        human subject study. This experience solidified my foundation in frontend development and sparked my
        interest in full-stack technologies.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        My tech stack is diverse—I’m proficient in languages like <strong>Java</strong>, <strong>C++</strong>,
        <strong>TypeScript</strong>, and <strong>SQL (Postgres)</strong>, and I work with frameworks such as
        <strong>React Native</strong>, <strong>Node.js</strong>, and <strong>Spring Boot</strong>. I leverage tools
        like <strong>Git</strong>, <strong>Docker</strong>, and <strong>VS Code</strong>, along with libraries like
        <strong> Material-UI</strong> and <strong>Ng-Zoro</strong> etc, to deliver high-quality solutions. I thrive on
        collaboration, problem-solving, and continuously learning to stay ahead in this ever-evolving field. If
        you’re up for building something innovative together, let’s connect!
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;