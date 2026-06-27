'use client';

import Image from 'next/image';
import { siteConfig } from '@/src/configs/config';
import AnimationContainer from '../utils/AnimationContainer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

const Hero = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      {/* Content Section */}
      <motion.div
        className="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Currently at PostEx — Lahore, Pakistan
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p variants={itemVariants} className="text-base text-gray-500 dark:text-gray-400 mb-1 font-mono">
          Hello, I&apos;m
        </motion.p>

        {/* Name — large gradient type */}
        <motion.h1
          variants={itemVariants}
          className="font-bold text-4xl sm:text-5xl lg:text-7xl text-center lg:text-start tracking-tight mb-3 mx-auto lg:mx-0 gradient-name"
        >
          {siteConfig.author}
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          variants={itemVariants}
          className="flex items-center gap-2 text-base sm:text-lg lg:text-xl text-gray-500 dark:text-gray-400 mb-6 mx-auto lg:mx-0"
        >
          <span className="relative w-[max-content] font-mono typing-animation text-gray-700 dark:text-gray-300">
            Full-Stack Software Engineer — Fintech &amp; Logistics
          </span>
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-3 mt-2 flex-wrap">
          <Link
            href={`mailto:${siteConfig.social.email}`}
            className="px-5 py-2.5 text-sm font-semibold rounded-xl border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 backdrop-blur-sm bg-indigo-500/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            Contact Me
          </Link>
          <Link
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-semibold rounded-xl border border-border/60 text-gray-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-300 backdrop-blur-sm bg-white/5"
          >
            View LinkedIn
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <AnimationContainer customClassName="w-[150px] sm:w-[260px] relative mb-8 lg:mb-0 shrink-0">
        <div className="relative rounded-2xl overflow-hidden ring-2 ring-indigo-500/30 hover:ring-indigo-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
          <Image
            alt={siteConfig.author}
            src="/img/WhatsApp Image 2025-04-07 at 11.37.32 AM.jpeg"
            width={260}
            height={260}
            priority
            className="rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-500 bg-background/30"
          />
        </div>
      </AnimationContainer>
    </div>
  );
};

export default Hero;
