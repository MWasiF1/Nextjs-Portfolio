'use client';

import '@/src/styles/globals.css';
import clsx from 'clsx';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import Header from '@/src/components/ui/Header';
import Footer from '@/src/components/ui/Footer';
import FlareCursor from '@/src/components/ui/FlareCursor';
import Head from './head';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { HeroUIProvider } from '@heroui/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '../components/utils/themeContext';
import ProgressBar from '@/src/components/ui/progress';
import BackToTopButton from '@/src/components/ui/BackToTopButton';
import dynamic from 'next/dynamic';
import React from 'react';

const Chatbot = dynamic(() => import('@/src/components/ui/ChatBot'), {
  ssr: false
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap'
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={clsx(
        'text-foreground bg-background dark:text-foreground dark:bg-background transition ease-in-out',
        jakartaSans.variable,
        inter.variable
      )}
    >
      <Head />

      <body className={clsx('transition ease-in-out min-h-screen', inter.className)}>
        <HeroUIProvider>
          <ThemeProvider>
            <SessionProvider>
              <ProgressBar />
              <Header />

              <main className="flex flex-col justify-center items-center mx-auto">
                <FlareCursor />
                {children}
                <SpeedInsights />
                <Analytics />
              </main>

              <Chatbot />
              <BackToTopButton />
              <Footer />
            </SessionProvider>
          </ThemeProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;
