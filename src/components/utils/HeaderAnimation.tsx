'use client';

import { motion } from 'framer-motion';
import React from 'react';

const animation = {
  hide: { y: -8, opacity: 0 },
  show: {
    y: 0,
    opacity: 1
  }
};

const HeaderAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.header
      className="w-full sticky top-0 z-50 flex flex-col justify-center items-center backdrop-blur-md bg-background/80 border-b border-border/40 transition-all ease-in-out mx-auto"
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {children}
    </motion.header>
  );
};

export default HeaderAnimation;
