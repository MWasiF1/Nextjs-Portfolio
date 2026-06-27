'use client';

import Link from 'next/link';
import AnimationContainer from '../utils/AnimationContainer';
import ExternalLink from './ExternalLink';
import { siteConfig } from '@/src/configs/config';

const Footer = () => {
  return (
    <footer className="w-full lg:max-w-screen-md flex flex-col justify-center items-center mx-auto pb-8 px-4">
      <AnimationContainer customClassName="w-full">
        <hr className="w-full border-border/40 mb-8" />
      </AnimationContainer>

      <AnimationContainer customClassName="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Nav links */}
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-indigo-400 transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-400 transition-colors duration-200">
            About
          </Link>
          <Link href="/projects" className="hover:text-indigo-400 transition-colors duration-200">
            Projects
          </Link>
          <Link href="#contactme" className="hover:text-indigo-400 transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <ExternalLink
            href={`https://github.com/${siteConfig.social.github}`}
            customClassName="text-muted-foreground hover:text-indigo-400 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor">
              <path d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387c.602.11.82-.258.82-.578c0-.286-.011-1.04-.015-2.04c-3.34.723-4.043-1.609-4.043-1.609c-.547-1.387-1.332-1.758-1.332-1.758c-1.09-.742.082-.726.082-.726c1.203.086 1.836 1.234 1.836 1.234c1.07 1.836 2.808 1.305 3.492 1c.11-.777.422-1.305.762-1.605c-2.664-.301-5.465-1.332-5.465-5.93c0-1.313.469-2.383 1.234-3.223c-.121-.3-.535-1.523.117-3.175c0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0 1 16 9.805c1.02.004 2.047.136 3.004.402c2.293-1.55 3.297-1.23 3.297-1.23c.656 1.652.246 2.875.12 3.175c.77.84 1.231 1.91 1.231 3.223c0 4.61-2.804 5.621-5.476 5.922c.43.367.812 1.101.812 2.219c0 1.605-.011 2.898-.011 3.293c0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
            </svg>
          </ExternalLink>

          <ExternalLink
            href={siteConfig.social.linkedin}
            customClassName="text-muted-foreground hover:text-indigo-400 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor">
              <path d="M7.5 5A2.518 2.518 0 0 0 5 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5zm0 2h17c.285 0 .5.215.5.5v17a.49.49 0 0 1-.5.5h-17a.489.489 0 0 1-.5-.5v-17c0-.285.215-.5.5-.5zm2.938 1.719a1.719 1.719 0 1 0 0 3.437a1.719 1.719 0 0 0 0-3.437zm9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437c1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5zM9 13.5V23h2.969v-9.5z" />
            </svg>
          </ExternalLink>

          <ExternalLink
            href={`mailto:${siteConfig.social.email}`}
            customClassName="text-muted-foreground hover:text-indigo-400 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </ExternalLink>
        </div>
      </AnimationContainer>

      <AnimationContainer customClassName="w-full mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          Built by{' '}
          <span className="text-indigo-400 font-medium">{siteConfig.author}</span>
          {' · '}
          {new Date().getFullYear()}
        </p>
      </AnimationContainer>
    </footer>
  );
};

export default Footer;
