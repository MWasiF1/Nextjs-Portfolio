'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';
import AnimationContainer from '@/src/components/utils/AnimationContainer';

const Credits = () => {
  const [repoStats, setRepoStats] = useState({ stars: 0, forks: 0 });

  // Fetch repository stats
  useEffect(() => {
    const fetchRepoStats = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${siteConfig.social.github}/portfolio`
        );
        if (response.ok) {
          const data = await response.json();
          setRepoStats({
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0
          });
        } else {
          console.error('Error fetching GitHub data:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch repo stats:', error);
      }
    };

    fetchRepoStats();
  }, []);

  return (
    <AnimationContainer customClassName="text-center py-4 dark:text-white/50 text-black/50 text-sm  ">
      <p>
        Built with ❤️ by Muhammad Wasif
        . All rights reserved © {new Date().getFullYear()}.
      </p>
      
    </AnimationContainer>
  );
};

export default Credits;
