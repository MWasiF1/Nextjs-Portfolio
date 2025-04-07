import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const providers = [];

// Conditionally add GitHub provider if env vars exist
if (process.env.GITHUB_ID && process.env.GITHUB_SECRET) {
  providers.push(
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    })
  );
}

export const authOptions = {
  providers,
  secret: process.env.NEXTAUTH_SECRET || 'default_nextauth_secret',
  debug: process.env.NODE_ENV === 'development'
};

const handler = (req: NextApiRequest, res: NextApiResponse<any>) =>
  NextAuth(req, res, authOptions);

export default handler;
