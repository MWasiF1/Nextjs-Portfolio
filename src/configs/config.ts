export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  country: string;
  social: {
    email: string;
    github: string;
    linkedin: string;
    medium: string;
  };
  other: {
    hacktoberfest: string;
    codsoft: string;
    github_snake: string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    debug: boolean;
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'https://muhammadwasif.com',
  domain: 'muhammadwasif.com',
  author: 'Muhammad Wasif',
  author_surname: 'Wasif',
  titlePrefix: 'Muhammad Wasif',
  country: 'Pakistan',
  social: {
    email: 'mianwasif.001@gmail.com',
    github: 'MWasiF1',
    linkedin: 'https://www.linkedin.com/in/muhammad-wasif001',
    medium: 'https://medium.com/@mianwasif.001'

  },
  metadata: {
    description: `Hi! I'm Muhammad Wasif, a Full Stack developer passionate about building apps, exploring AI and ML, and collaborating on exciting projects. Let's connect!`,
    keywords:
      'Muhammad Wasif, Full Stack Developer, Muhammad Wasif portfolio, Muhammad Wasif GitHub, Web Development, Mobile Applications, Machine Learning, Artificial Intelligence, Programming Languages, Open Source Developer, App Development',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    debug: true,
    rateLimit: 10
  },
  other: {
    hacktoberfest: 'https://hacktoberfest.com/',
    codsoft: 'https://www.codsoft.in/',
    github_snake:
      'https://raw.githubusercontent.com/MWasiF1/MWasiF1/output/github-contribution-grid-snake.svg'
  }
};
