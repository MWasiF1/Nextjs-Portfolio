'use client';

import AnimationContainer from '../utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';

const Education = () => {
  return (
    <AnimationContainer customClassName="w-full mt-8">
      <SectionHeader
        id="education"
        title="Education"
        content="My academic background and formal qualifications."
      />

      <div className="w-full flex flex-col gap-4 mt-4">
        <div className="relative pl-5 border-l-4 border-indigo-500 rounded-r-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground dark:text-white">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-base font-medium text-indigo-500 dark:text-indigo-400">
                GC University Lahore, Pakistan
              </p>
            </div>
            <span className="text-sm text-muted-foreground dark:text-gray-400 shrink-0 font-mono">
              Oct 2020 – Oct 2024
            </span>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default Education;
