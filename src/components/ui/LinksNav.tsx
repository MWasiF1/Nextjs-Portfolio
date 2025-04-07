'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NavItemHeaderAnimation } from '@/src/types';

export const navItemsSelected: { [key: string]: NavItemHeaderAnimation } = {
  '/': {
    name: 'home'
  },
  '/about': {
    name: 'about'
  },
  '/projects': {
    name: 'projects'
  },
  '/blog': {
    name: 'blog'
  }
};

const LinksNav = () => {
  let pathname = usePathname() as string;

  const handleBlogClick = (e: React.MouseEvent) => {
    // Prevent default link behavior
    e.preventDefault();
    // Open the blog in a new window
    window.open('https://medium.com/@mianwasif.001', '_blank');
  };

  return (
    <>
      {Object.entries(navItemsSelected).map(([path, { name }]) => {
        const isActive = path === pathname;

        return path === '/blog' ? (
          // Handle /blog separately to open in a new window
          <a
            key={path}
            href={path}
            onClick={handleBlogClick} // Open in new window when clicked
            className={clsx(
              'hidden lg:inline-block transition ease py-[2px] px-[10px] focus:outline-none focus-jump hover:jump',
              {
                'text-neutral-500 dark:text-neutral-400': !isActive, // Inactive links
                'text-neutral-800 dark:text-white font-bold': isActive, // Active links
                'hover:text-neutral-700 dark:hover:text-neutral-300': !isActive // Correct hover color for light and dark themes
              }
            )}
          >
            {name}
          </a>
        ) : (
          // Normal Link for other paths
          <Link
            key={path}
            href={path}
            className={clsx(
              'hidden lg:inline-block transition ease py-[2px] px-[10px] focus:outline-none focus-jump hover:jump',
              {
                'text-neutral-500 dark:text-neutral-400': !isActive, // Inactive links
                'text-neutral-800 dark:text-white font-bold': isActive, // Active links
                'hover:text-neutral-700 dark:hover:text-neutral-300': !isActive // Correct hover color for light and dark themes
              }
            )}
          >
            {name}
          </Link>
        );
      })}
    </>
  );
};

export default LinksNav;
