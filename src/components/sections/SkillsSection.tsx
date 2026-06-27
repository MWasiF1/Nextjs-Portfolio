'use client';

import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';
import { Tooltip } from 'react-tooltip';

interface SkillIcon {
  src: string;
  alt: string;
  tooltip: string;
}

interface SkillCategory {
  label: string;
  icons: SkillIcon[];
}

const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    icons: [
      { src: 'https://skillicons.dev/icons?i=typescript', alt: 'TypeScript', tooltip: 'TypeScript' },
      { src: 'https://skillicons.dev/icons?i=js', alt: 'JavaScript', tooltip: 'JavaScript' },
      { src: 'https://skillicons.dev/icons?i=java', alt: 'Java', tooltip: 'Java' },
      { src: 'https://skillicons.dev/icons?i=cpp', alt: 'C++', tooltip: 'C++' }
    ]
  },
  {
    label: 'Frontend',
    icons: [
      { src: 'https://skillicons.dev/icons?i=angular', alt: 'Angular', tooltip: 'Angular 17' },
      { src: 'https://skillicons.dev/icons?i=react', alt: 'React', tooltip: 'React' },
      { src: 'https://skillicons.dev/icons?i=nextjs', alt: 'Next.js', tooltip: 'Next.js' },
      { src: 'https://skillicons.dev/icons?i=tailwind', alt: 'Tailwind CSS', tooltip: 'Tailwind CSS' },
      { src: 'https://skillicons.dev/icons?i=html', alt: 'HTML', tooltip: 'HTML' },
      { src: 'https://skillicons.dev/icons?i=css', alt: 'CSS', tooltip: 'CSS' }
    ]
  },
  {
    label: 'Backend',
    icons: [
      { src: 'https://skillicons.dev/icons?i=nodejs', alt: 'Node.js', tooltip: 'Node.js' },
      { src: 'https://skillicons.dev/icons?i=express', alt: 'Express.js', tooltip: 'Express.js' },
      { src: 'https://skillicons.dev/icons?i=spring', alt: 'Spring Boot', tooltip: 'Spring Boot' }
    ]
  },
  {
    label: 'Databases',
    icons: [
      { src: 'https://skillicons.dev/icons?i=mongodb', alt: 'MongoDB', tooltip: 'MongoDB' },
      { src: 'https://skillicons.dev/icons?i=mysql', alt: 'MySQL', tooltip: 'MySQL' },
      { src: 'https://skillicons.dev/icons?i=firebase', alt: 'Firebase', tooltip: 'Firebase Firestore' },
      { src: 'https://skillicons.dev/icons?i=redis', alt: 'Redis', tooltip: 'Redis' }
    ]
  },
  {
    label: 'Messaging & Events',
    icons: [
      { src: 'https://skillicons.dev/icons?i=rabbitmq', alt: 'RabbitMQ', tooltip: 'RabbitMQ' },
      { src: 'https://skillicons.dev/icons?i=aws', alt: 'AWS SQS', tooltip: 'AWS (SQS, EC2)' }
    ]
  },
  {
    label: 'Cloud & DevOps',
    icons: [
      { src: 'https://skillicons.dev/icons?i=docker', alt: 'Docker', tooltip: 'Docker' },
      { src: 'https://skillicons.dev/icons?i=git', alt: 'Git', tooltip: 'Git' },
      { src: 'https://skillicons.dev/icons?i=github', alt: 'GitHub', tooltip: 'GitHub' }
    ]
  },
  {
    label: 'Tools',
    icons: [
      { src: 'https://skillicons.dev/icons?i=postman', alt: 'Postman', tooltip: 'Postman' },
      { src: 'https://skillicons.dev/icons?i=vscode', alt: 'VS Code', tooltip: 'VS Code' },
      { src: 'https://skillicons.dev/icons?i=idea', alt: 'IntelliJ IDEA', tooltip: 'IntelliJ IDEA' }
    ]
  }
];

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Skills & Tools"
          content="2 years of production experience across fintech and logistics — spanning full-stack, cloud infrastructure, distributed systems, and event-driven architecture."
        />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-5 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:border-indigo-500/30 transition-all duration-300"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-4">
                {category.icons.map((icon, iconIndex) => {
                  const tooltipId = `skill-${catIndex}-${iconIndex}`;
                  return (
                    <div key={iconIndex} className="relative group">
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={44}
                        height={44}
                        data-tooltip-id={tooltipId}
                        className="transition-transform duration-300 ease-out group-hover:scale-115 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                      />
                      <Tooltip id={tooltipId} place="top" content={icon.tooltip} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
