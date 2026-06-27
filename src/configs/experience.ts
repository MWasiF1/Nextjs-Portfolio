'use client';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'PostEx — Software Engineer, Full Stack (Fintech & Logistics) | Aug 2024 – Present',
    description:
      '**BNPL & Fintech Platform (MEAN Stack):** Led end-to-end development of a Buy Now Pay Later platform with automated eligibility scoring and installment-based risk evaluation — reducing manual credit review by ~40% and onboarding 1,000+ merchants. Architected a Lending Management System (LMS) and Business Wallet with real-time balance tracking and event-sourcing patterns. Built a Digital Wallet and role-based Backoffice portal with fine-grained authorization.\n\n**Digital QR (DQR) Payment on Delivery — Raast Integration:** Core contributor to PostEx\'s DQR system integrating Raast QR (State Bank of Pakistan\'s ISO 20022 instant payment rail) into COD collection — launched across 6 major cities in a single release cycle. Engineered dynamic QR generation and async payment APIs achieving sub-3-second settlement. Designed reconciliation logic reducing collection disputes by ~35%.\n\n**Distributed Observability & Notifications:** Implemented structured logging and distributed tracing across 6 microservices using GELF/ELK (Logstash, Elasticsearch, Kibana) with AsyncLocalStorage correlation IDs — reducing MTTD by ~50%. Integrated Firebase Cloud Messaging (FCM) and WhatsApp Business API into an event-driven notification pipeline, increasing customer engagement by 25%.\n\n**API Platform & Portals:** Designed RESTful APIs with Java Spring Boot improving average response time by 30%. Built Merchant Portal and Partner Portal SPAs using Angular 17, Tailwind CSS, and RxJS with lazy-loading and OnPush change detection — improving TTI by 35%. Built automated PDF reporting pipelines using Puppeteer eliminating ~8 hrs/week of manual effort.\n\n🏆 **Awarded Emerging Star of the Year 2025** in the Engineering Department for high-impact contributions across fintech and logistics portfolios.',
    startDate: 'Aug 2024',
    endDate: 'Present',
    isActive: true,
    companyUrl: 'https://postex.pk'
  },
  {
    title: 'Algorydhem Developers — Frontend Developer Intern | Jun 2023 – Nov 2023',
    description:
      'Built responsive web applications using React.js and modern component patterns, delivering cross-device UX consistency and resolving critical rendering bottlenecks — improving page load time by 20%. Established reusable component libraries and state management patterns (Context API), reducing duplicate logic and improving maintainability across the product.',
    startDate: 'Jun 2023',
    endDate: 'Nov 2023',
    isActive: false,
  }
];
