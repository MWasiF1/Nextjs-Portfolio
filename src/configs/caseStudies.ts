export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  context: string;
  problem: string;
  approach: string[];
  impact: string[];
  stack: string[];
  relatedArticle?: { title: string; url: string };
}

// Production work at PostEx. Descriptions stay at the architecture level:
// no internal code, service names, or confidential volumes.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'raast-qr-payment-on-delivery',
    title: 'Raast QR Payment on Delivery',
    subtitle:
      "Bringing Pakistan's instant payment rail to the customer's doorstep",
    role: 'Core contributor · end-to-end development and production launch',
    context: 'PostEx · Fintech & Logistics',
    problem:
      'Cash on delivery means riders carry cash, merchants wait for settlement, and every order has to be reconciled by hand. PostEx wanted customers to pay at the door by scanning a QR code over Raast, the State Bank of Pakistan’s ISO 20022 instant payment system, with the payment matched to the right order automatically.',
    approach: [
      'Built APIs that generate a dynamic Raast QR code per delivery, carrying the amount and order reference.',
      'Handled payment confirmation asynchronously through webhook callbacks, propagating status in real time to the rider app, the merchant dashboard, and the PostEx Pay wallet gateway.',
      'Designed reconciliation logic that automatically matches incoming Raast payment events against open COD orders.',
      'Worked across fintech, logistics, and payments teams to keep settlement atomic, with safe rollback when deliveries run concurrently.'
    ],
    impact: [
      'Live across Lahore, Karachi, Islamabad, Faisalabad, Peshawar and Multan within a single release cycle.',
      'Sub-3-second settlement confirmation from scan to status update.',
      'Collection disputes reduced by ~35%, with manual cash-to-order reconciliation eliminated.'
    ],
    stack: ['Java Spring Boot', 'Node.js', 'Raast QR (ISO 20022)', 'Webhooks', 'Angular'],
    relatedArticle: {
      title: 'Idempotency in Payment Systems',
      url: 'https://medium.com/@mianwasif.001/idempotency-in-payment-systems-the-guarantee-thats-easy-to-skip-and-expensive-to-get-wrong-14809f82139c'
    }
  },
  {
    slug: 'bnpl-and-lending-platform',
    title: 'BNPL & Lending Platform',
    subtitle: 'Merchant financing from eligibility check to final repayment',
    role: 'Led end-to-end development',
    context: 'PostEx · Fintech',
    problem:
      'Merchant credit decisions relied on manual review, and loans were tracked across disconnected tools. The business needed a Buy Now, Pay Later product and a lending system that could assess eligibility, run approvals, and track money movement reliably.',
    approach: [
      'Built a BNPL platform on the MEAN stack with automated eligibility scoring and installment-based risk evaluation.',
      'Designed a Lending Management System covering the full loan lifecycle: request, multi-stage approval, disbursement, and repayment tracking.',
      'Implemented a Business Wallet with real-time balance tracking, using event-sourcing patterns for an auditable transaction history.',
      'Added access control lists and granular roles so operations teams could manage disbursements, repayments, and risk flags safely.'
    ],
    impact: [
      '1,000+ merchants onboarded to credit products.',
      'Manual credit review effort reduced by ~40%.',
      'Supports high-concurrency production workloads across the lending portfolio.'
    ],
    stack: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'Java Spring Boot', 'Tailwind CSS']
  },
  {
    slug: 'distributed-observability',
    title: 'Distributed Observability',
    subtitle: 'Following a single request across six microservices',
    role: 'Designed and implemented',
    context: 'PostEx · Platform',
    problem:
      'When something failed in production, logs were scattered across services with no way to connect them to one request. Diagnosing incidents meant searching each service separately and guessing at the sequence of events.',
    approach: [
      'Introduced structured logging across 6 production microservices, shipped via GELF into the ELK stack (Logstash, Elasticsearch, Kibana).',
      'Propagated a correlation ID through every request using Node.js AsyncLocalStorage, so all logs for one request can be traced across services.',
      'Built Kibana views that let the team follow a request end to end during incidents.',
      'Extended the same event-driven approach to notifications with Firebase Cloud Messaging and WhatsApp Business API.'
    ],
    impact: [
      'Mean time to diagnose production incidents reduced by ~50%.',
      'Cross-service request tracing available to the whole team.',
      'Customer engagement up 25% from automated, event-driven notifications.'
    ],
    stack: ['Elasticsearch', 'Logstash', 'Kibana', 'GELF', 'Node.js', 'AsyncLocalStorage', 'FCM'],
    relatedArticle: {
      title: 'Your App Didn’t Fail at 3AM — Your Observability Did',
      url: 'https://medium.com/@mianwasif.001/your-app-didnt-fail-at-3am-your-observability-did-69fa083616ee'
    }
  }
];
