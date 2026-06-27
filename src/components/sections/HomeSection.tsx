'use client';

import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import Hero from '../content/Hero';
import Education from '../content/Education';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import FAQSection from '@/src/components/sections/FAQSection';
import StatsSection from '@/src/components/sections/StatsSection';
import SkillsSection from '@/src/components/sections/SkillsSection';

const HomeSection = () => {
  return (
    <SectionContainer>
      {/* Hero Section */}
      <div className="w-full h-[calc(100vh-11rem)] flex items-center justify-center">
        <Hero />
      </div>

      {/* About Me Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <AboutMe />
      </AnimationContainer>

      {/* Timeline Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <CurrentTimeLineExp />
      </AnimationContainer>

      {/* Education Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <Education />
      </AnimationContainer>

      {/* Skills Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <SkillsSection />
      </AnimationContainer>

      {/* Stats Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <StatsSection />
      </AnimationContainer>

      {/* Contact Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <ContactMe />
      </AnimationContainer>

      {/* FAQ Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <FAQSection />
      </AnimationContainer>
    </SectionContainer>
  );
};

export default HomeSection;
