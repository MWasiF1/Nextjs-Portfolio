'use client';

import Link from 'next/link';

const LinksMenu = [
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
    path: 'https://medium.com/@mianwasif.001', // Updated to Medium profile URL
    delay: '225ms',
    external: true // Mark as an external link
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