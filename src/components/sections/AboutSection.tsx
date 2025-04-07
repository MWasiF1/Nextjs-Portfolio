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

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Hey there! 👋 I'm <strong>{siteConfig.author}</strong>, a Full Stack
            developer passionate about crafting dynamic and user-friendly
            solutions. I’m currently shaping seamless digital experiences at
            PostEx, and I’ve shared some of my work on my{' '}
            <Link
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              GitHub profile
            </Link>{' '}
            —check it out! ✌️
          </p>

          <ul className="text-base text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2 mt-4">
            <li>
              ✨ I enjoy spending my spare time building apps and experimenting
              with tools like <strong>Angular</strong>, <strong>React</strong>,
              and <strong>Spring Boot</strong> to sharpen my skills and explore
              new possibilities.
            </li>
            <li>
              📚 I’m diving deeper into modern technologies, working with{' '}
              <strong>TypeScript</strong>, <strong>Node.js</strong>, and{' '}
              <strong>Docker</strong>, while keeping an eye on emerging trends
              to stay ahead of the curve.
            </li>
            <li>
              🤝 Collaboration is my jam! Whether it’s integrating APIs (like
              the <strong>WhatsApp API</strong> I worked on) or brainstorming
              fresh ideas, I’m always excited to team up on innovative projects.
            </li>
            <li>
              🔧 My toolkit includes <strong>Java</strong>, <strong>C++</strong>,{' '}
              <strong>JavaScript</strong>, and frameworks like{' '}
              <strong>React Native</strong> and <strong>Tailwind CSS</strong>,
              making me adaptable to diverse tech stacks.
            </li>
            <li>
              📬 Spotted something cool in my projects or have an idea you’d
              like to bring to life? Reach out—I’d love to create something
              awesome together!
            </li>
          </ul>

          <p className="text-base text-gray-600 dark:text-gray-400 mt-4">
            Explore my work, and let’s connect for collaborations or just to
            geek out about tech!
          </p>
        </AnimationContainer>

        <AnimationContainer customClassName="w-full">
          <CurrentTimeLineExp />
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