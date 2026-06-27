'use client';

import Link from 'next/link';
import HeaderAnimation from '../utils/HeaderAnimation';
import MobileMenuNav from './MobileMenuNav';
import NavItem from './NavItem';
import { siteConfig } from '@/src/configs/config';
import ThemeToggle from '@/src/components/utils/ThemeToggle';

const Header = () => {
  return (
    <HeaderAnimation>
      <nav className="w-10/12 lg:max-w-screen-md flex items-center justify-between flex-row relative py-4 sm:py-5 text-foreground dark:text-white gap-5 lg:gap-0">
        <div>
          <Link href="/" className="group flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all duration-300" />
            <h1 className="text-sm sm:text-base font-semibold font-display text-foreground dark:text-white hover:text-indigo-400 dark:hover:text-indigo-400 transition-colors duration-200">
              {siteConfig.author}
            </h1>
          </Link>
        </div>

        <div className="ml-[-0.80rem] flex items-center gap-4">
          <MobileMenuNav />
          <NavItem />
          <ThemeToggle />
        </div>
      </nav>
    </HeaderAnimation>
  );
};

export default Header;
