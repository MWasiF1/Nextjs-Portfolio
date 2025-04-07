'use client';

import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';
import { Tooltip } from 'react-tooltip'; // Import Tooltip from react-tooltip

const MySkills = () => {
  const skillIcons = [
    { src: 'https://skillicons.dev/icons?i=angular', alt: 'Angular', tooltip: 'Angular' },
    { src: 'https://skillicons.dev/icons?i=react', alt: 'React', tooltip: 'React' },
    { src: 'https://skillicons.dev/icons?i=vue', alt: 'Vue', tooltip: 'Vue' },
    { src: 'https://skillicons.dev/icons?i=nextjs', alt: 'Next.js', tooltip: 'Next.js' },
    { src: 'https://skillicons.dev/icons?i=bootstrap', alt: 'Bootstrap', tooltip: 'Bootstrap' },
    { src: 'https://skillicons.dev/icons?i=cpp', alt: 'C++', tooltip: 'C++' },
    { src: 'https://skillicons.dev/icons?i=css', alt: 'CSS', tooltip: 'CSS' },
    { src: 'https://skillicons.dev/icons?i=figma', alt: 'Figma', tooltip: 'Figma' },
    { src: 'https://skillicons.dev/icons?i=firebase', alt: 'Firebase', tooltip: 'Firebase' },
    { src: 'https://skillicons.dev/icons?i=git', alt: 'Git', tooltip: 'Git' },
    { src: 'https://skillicons.dev/icons?i=github', alt: 'GitHub', tooltip: 'GitHub' },
    { src: 'https://skillicons.dev/icons?i=html', alt: 'HTML', tooltip: 'HTML' },
    { src: 'https://skillicons.dev/icons?i=java', alt: 'Java', tooltip: 'Java' },
    { src: 'https://skillicons.dev/icons?i=js', alt: 'JavaScript', tooltip: 'JavaScript' },
    { src: 'https://skillicons.dev/icons?i=mongodb', alt: 'MongoDB', tooltip: 'MongoDB' },
    { src: 'https://skillicons.dev/icons?i=mysql', alt: 'MySQL', tooltip: 'MySQL' },
    { src: 'https://skillicons.dev/icons?i=nodejs', alt: 'Node.js', tooltip: 'Node.js' },
    { src: 'https://skillicons.dev/icons?i=redux', alt: 'Redux', tooltip: 'Redux' },
    { src: 'https://skillicons.dev/icons?i=regex', alt: 'Regex', tooltip: 'Regex' },
    { src: 'https://skillicons.dev/icons?i=sass', alt: 'Sass', tooltip: 'Sass' },
    { src: 'https://skillicons.dev/icons?i=tailwind', alt: 'Tailwind CSS', tooltip: 'Tailwind CSS' },
    { src: 'https://skillicons.dev/icons?i=visualstudio', alt: 'Visual Studio', tooltip: 'Visual Studio' },
    { src: 'https://skillicons.dev/icons?i=vscode', alt: 'VS Code', tooltip: 'VS Code' },
    { src: 'https://skillicons.dev/icons?i=wordpress', alt: 'WordPress', tooltip: 'WordPress' }
  ];

  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Skills"
          content="I’ve been programming for over years, gaining experience with a variety of programming languages, frameworks, and tools. I’ve worked on both Frontend and Backend technologies, allowing me to understand and contribute to the entire development process."
        />

        <div className="w-full flex flex-col gap-8">
          <div className="grid grid-cols-6 gap-5 justify-center items-center">
            {skillIcons.map((icon, index) => (
              <div key={index} className="relative group">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={50}
                  height={50}
                  data-tooltip-id={`tooltip-${index}`} // Set the tooltip ID for the icon
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110" // Magnifying effect
                />
                <Tooltip id={`tooltip-${index}`} place="top" content={icon.tooltip} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
