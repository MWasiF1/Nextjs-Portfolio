'use client';

import Link from 'next/link';

const LinksMenu: { name: string; path: string; delay: string; external?: boolean }[] = [
  {
    name: 'Home',
    path: '/',
    delay: '150ms'
  },
  {
    name: 'About',
    path: '/about',
    delay: '175ms'
  },
  {
    name: 'Projects',
    path: '/projects',
    delay: '200ms'
  },
  {
    name: 'Blog',
    path: '/blog',
    delay: '225ms'
  }
];

const LinksMenuNav = () => {
  return (
    <>
      {LinksMenu.map(({ name, path, delay, external }) => (
        <li
          key={name}
          className="border-gray-700 text-black dark:text-white text-sm font-semibold"
          style={{ transitionDelay: delay }}
        >
          {external ? (
            // Handle external links (e.g., Blog)
            <a
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              className="pb-4"
            >
              {name}
            </a>
          ) : (
            // Handle internal links
            <Link href={path} className="pb-4">
              {name}
            </Link>
          )}
        </li>
      ))}
    </>
  );
};

export default LinksMenuNav;