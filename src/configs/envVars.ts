'use client';

export function validateEnvVars() {
  const optionalEnvVars = [
    'GITHUB_TOKEN',
    'GITHUB_SECRET',
    'GITHUB_ID',
    'GEMINI_API_KEY'
  ];

  // Warn if optional environment variables are missing
  optionalEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      console.warn(`Warning: Missing optional environment variable: ${envVar}`);
    }
  });

  // Set optional environment variables with default values if not set
  process.env.HASHNODE_API_KEY = process.env.HASHNODE_API_KEY || '';
  process.env.HASHNODE_USERNAME = process.env.HASHNODE_USERNAME || '';
  process.env.ADSENSE_ID = process.env.ADSENSE_ID || '';
  process.env.SITE_URL = process.env.SITE_URL || 'http://localhost:3000';
  process.env.NEXTAUTH_SECRET =
    process.env.NEXTAUTH_SECRET || 'default_nextauth_secret';
}

export function getEnvVars() {
  return {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN || '',
    GITHUB_SECRET: process.env.GITHUB_SECRET || '',
    GITHUB_ID: process.env.GITHUB_ID || '',
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || '',
    HASHNODE_API_KEY: process.env.HASHNODE_API_KEY,
    HASHNODE_USERNAME: process.env.HASHNODE_USERNAME,
    ADSENSE_ID: process.env.ADSENSE_ID,
    SITE_URL: process.env.SITE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  };
}
