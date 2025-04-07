'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Looking for Job Opportunities | Present',
    description:
      "Currently seeking job opportunities in **Software Engineering**, **AI**, **Data Science**, and **Full Stack** development. Open to full-time roles or freelance work. Let's connect!",
    startDate: 'Present',
    endDate: 'Present',
    isActive: true,
  },
  {
    title: 'Postex | Software Engineer | August 2024 – Present',
    description:
      'Working as a Full-Stack (Java & Angular) Software Engineer at Postex, focusing on developing and maintaining software solutions. Engaged in various projects that enhance the efficiency and performance of the company\'s systems.',
    startDate: 'August 2024',
    endDate: 'Present',
    isActive: true,
  },
  {
    title: 'Algorydhem Developers | Trainee FrontEnd Developer | June 2023 – Nov 2023',
    description:
      'Worked as a Trainee FrontEnd Developer at Algorydhem Developers, focusing on developing and maintaining web applications using React.js. Gained hands-on experience in front-end development and collaborated with senior developers on various projects.',
    startDate: 'Oct 2024',
    endDate: 'Nov 2024',
    isActive: false,
  }
];
