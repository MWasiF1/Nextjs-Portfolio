'use client';
import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/src/types';
import { useEffect, useState } from 'react';
import { Button } from '@heroui/button';

const CardProject = ({
  title,
  des,
  category,
  repo,
  link,
  topics
}: CardProjectProps) => {
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const maxTopicsToShowMobile = 3;
  const maxDescriptionLength = 100;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimationContainer customClassName="w-full h-full">
      <div className="group w-full h-full flex flex-col justify-between rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.25)] hover:border-indigo-500/40">
        {/* Title */}
        <h3 className="text-lg font-semibold font-display text-foreground dark:text-white mb-2 transition-colors duration-200 group-hover:text-indigo-400">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground dark:text-gray-400 mb-3 leading-relaxed flex-1">
          {!isMobile || showFullDescription || des.length <= maxDescriptionLength
            ? des
            : `${des.slice(0, maxDescriptionLength)}...`}
          {isMobile && des.length > maxDescriptionLength && (
            <Button
              onPress={() => setShowFullDescription(!showFullDescription)}
              className="ml-2 text-xs text-indigo-400 hover:underline bg-transparent p-0 h-auto min-w-0"
            >
              {showFullDescription ? 'Less' : 'More'}
            </Button>
          )}
        </p>

        {/* Tech stack pills */}
        {topics && topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {topics
              .slice(0, isMobile && !showAllTopics ? maxTopicsToShowMobile : topics.length)
              .map((topic, index) => (
                <span
                  key={index}
                  className="text-xs px-2.5 py-0.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 font-mono whitespace-nowrap"
                >
                  {topic}
                </span>
              ))}
            {isMobile && topics.length > maxTopicsToShowMobile && !showAllTopics && (
              <button
                onClick={() => setShowAllTopics(true)}
                className="text-xs px-2 py-0.5 rounded-full border border-border/50 text-muted-foreground hover:text-indigo-400 transition-colors"
              >
                +{topics.length - maxTopicsToShowMobile} more
              </button>
            )}
            {isMobile && showAllTopics && (
              <button
                onClick={() => setShowAllTopics(false)}
                className="text-xs text-indigo-400 hover:underline"
              >
                Show less
              </button>
            )}
          </div>
        )}

        {/* Action Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-border/30">
          <ExternalLink
            href={repo}
            customClassName="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-indigo-400 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </ExternalLink>

          {link && link !== '#' && (
            <ExternalLink
              href={link}
              customClassName="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-indigo-400 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </ExternalLink>
          )}
        </div>
      </div>
    </AnimationContainer>
  );
};

export default CardProject;
