import type { ExperienceType } from 'Types'

const EXPERIENCE: ExperienceType[] = [
  {
    company: 'Moniepoint',
    role: 'Frontend Engineer',
    location: 'Remote, Lagos',
    startDate: 'January 2026',
    endDate: 'Present',
    description:
      'Streamlined developer workflow by implementing Husky and Prettier, and git hooks to enforce consistent formatting and linting on commits across multiple enterprise repositories. Implemented Storybook design system covering 60+ UI components and page-level features, while integrating Chromatic for visual regression testing and automated CI/CD documentation. Built a reusable DataTable component for a high-traffic liquidity management platform, reducing the frontend codebase by ~725 lines (26% average) while standardizing complex data pagination and filtering.',
    technologies: 'React • TypeScript • Storybook • Chromatic • Husky • Prettier',
    highlights: [
      'Streamlined developer workflow by implementing Husky and Prettier, and git hooks to enforce consistent formatting and linting on commits across multiple enterprise repositories.',
      'Implemented Storybook design system covering 60+ UI components and page-level features, while integrating Chromatic for visual regression testing and automated CI/CD documentation.',
      'Built a reusable DataTable component for a high-traffic liquidity management platform, reducing the frontend codebase by ~725 lines (26% average) while standardizing complex data pagination and filtering.',
    ],
  },
  {
    company: 'SyncSkills',
    role: 'Senior Full Stack Engineer',
    location: 'Remote, Australia',
    startDate: 'June 2025',
    endDate: 'December 2025',
    description:
      'Built an internal CRM system integrating HubSpot/Mailchimp APIs with Redux state management, Axios caching, and React Query for async workflows, automated lead generation, and partner outreach. Rebuilt the company website using Next.js and Tailwind CSS with a fully dynamic CMS. Developed a payment processing system handling AUD transactions with Stripe integration. Created a reusable component library with TailwindCSS, reducing development time by 40% across four products.',
    technologies: 'Next.js • React • Redux • React Query • TailwindCSS • Stripe',
    highlights: [
      'Built an internal CRM system integrating HubSpot/Mailchimp APIs with Redux state management, Axios caching, and React Query for async workflows, automated lead generation, and partner outreach.',
      'Rebuilt the company website using Next.js and Tailwind CSS with a fully dynamic CMS, enabling non-technical staff to update all content.',
      'Developed a payment processing system handling AUD transactions with Stripe integration.',
      'Created a reusable component library with TailwindCSS, reducing development time by 40% across four products.',
    ],
  },
  {
    company: 'Elite Software Automation',
    role: 'Software Engineer (Contract)',
    location: 'Remote, USA',
    startDate: 'April 2025',
    endDate: 'June 2025',
    description:
      'Architected and designed end-to-end custom software solutions for enterprise clients across the insurance and construction industries. Built a reusable document management system with React Query optimistic updates, stale-while-revalidate caching, versioning, and real-time collaboration; WCAG AA-compliant with keyboard navigation. Developed a React component library using TailwindCSS and Material UI, achieving 90% code reusability across five enterprise projects. Designed a mobile-first contractor portal handling 1,000+ daily active subcontractors.',
    technologies: 'React • React Query • TailwindCSS • Material UI',
    highlights: [
      'Architected and designed end-to-end custom software solutions for enterprise clients across the insurance and construction industries with complex business processes.',
      'Built a reusable document management system with React Query optimistic updates, stale-while-revalidate caching, versioning, and real-time collaboration; WCAG AA-compliant with keyboard navigation.',
      'Developed a React component library using TailwindCSS and Material UI components, achieving 90% code reusability across five enterprise projects.',
      'Designed a mobile-first contractor portal handling 1,000+ daily active subcontractors.',
    ],
  },
  {
    company: 'NextBasket',
    role: 'Senior Software Engineer (Frontend)',
    location: 'Remote, Bulgaria',
    startDate: 'May 2024',
    endDate: 'April 2025',
    description:
      'Architected checkout flow with Next.js SSR and Redux; improved mobile conversion by 25%, reduced cart abandonment by 25%; ensured WCAG AA compliance throughout. Implemented advanced gesture controls with Tailwind responsive utilities and WCAG-compliant event handlers for mobile users, improving mobile user engagement by 35%. Achieved 100% Storybook component documentation coverage. Implemented i18n/l10n for 16 European markets supporting 12 languages. Improved Core Web Vitals scores by 40%, boosting organic search traffic by 100%.',
    technologies: 'Next.js • Redux • Tailwind • Storybook • i18n',
    highlights: [
      'Architected checkout flow with Next.js SSR and Redux; improved mobile conversion by 25%, reduced cart abandonment by 25%; ensured WCAG AA compliance throughout.',
      'Implemented advanced gesture controls with Tailwind responsive utilities and WCAG-compliant event handlers for mobile users, improving mobile user engagement by 35%.',
      'Achieved 100% Storybook component documentation coverage for the design system.',
      'Implemented i18n/l10n for 16 European markets supporting 12 languages.',
      'Improved Core Web Vitals scores by 40%, boosting organic search traffic by 100%.',
    ],
  },
  {
    company: 'Revent Technologies',
    role: 'Senior Frontend Engineer',
    location: 'Remote, Lagos, Nigeria',
    startDate: 'March 2023',
    endDate: 'April 2025',
    description:
      'Led frontend development of core banking system modules, managing 5M+ customer records using micro-frontend architecture. Shipped a core-banking system handling 600M+ transactions valued at $95M+ with 99.9% uptime across multiple African markets within the first year. Implemented WebSocket real-time updates handling 10,000+ concurrent connections, integrated with ngRx for normalised state, and memory optimisation; built a polling fallback with exponential backoff for resilience. Delivered a business process automation tool supporting workflow configuration across 10+ industries with a drag-and-drop interface and real-time collaboration features.',
    technologies: 'Angular • ngRx • WebSocket • Micro-frontends',
    highlights: [
      'Led frontend development of core banking system modules, managing 5M+ customer records using micro-frontend architecture.',
      'Shipped a core-banking system handling 600M+ transactions valued at $95M+ with 99.9% uptime across multiple African markets within the first year.',
      'Migrated 4M+ customer records while ensuring data integrity and performance.',
      'Implemented WebSocket real-time updates handling 10,000+ concurrent connections, integrated with ngRx for normalised state, and memory optimisation; built a polling fallback with exponential backoff for resilience.',
      'Delivered a business process automation tool supporting workflow configuration across 10+ industries with a drag-and-drop interface and real-time collaboration features.',
    ],
  },
  {
    company: 'Octave Analytics',
    role: 'Frontend Engineer',
    location: 'Hybrid, Lagos, Nigeria',
    startDate: 'April 2022',
    endDate: 'April 2023',
    description:
      'Built financial dashboards with React, D3.js, and Tailwind CSS, optimised 10,000+ data point rendering with React Query caching, virtualisation, and memoisation. Implemented pixel-perfect Figma-to-code conversions with 99% design accuracy and established design QA processes. Integrated five banking APIs with Axios caching and React Query; implemented stale-while-revalidate patterns, reducing API calls by 50%.',
    technologies: 'React • D3.js • Tailwind • React Query • Axios',
    highlights: [
      'Built financial dashboards with React, D3.js, and Tailwind CSS, optimised 10,000+ data point rendering with React Query caching, virtualisation, and memoisation.',
      'Implemented pixel-perfect Figma-to-code conversions with 99% design accuracy and established design QA processes.',
      'Integrated five banking APIs with Axios caching and React Query; implemented stale-while-revalidate patterns, reducing API calls by 50%.',
    ],
  },
  {
    company: 'Solatium Inc.',
    role: 'Frontend Developer',
    location: 'Remote, Canada',
    startDate: 'March 2021',
    endDate: 'April 2022',
    description:
      'Architected a medical imaging system for DICOM file handling for healthcare providers. Implemented real-time collaboration supporting 50+ concurrent users. Optimized application performance through React Query caching, lazy loading, reducing load time by 15%.',
    technologies: 'React • React Query',
    highlights: [
      'Architected a medical imaging system for DICOM file handling for healthcare providers.',
      'Implemented real-time collaboration supporting 50+ concurrent users.',
      'Optimized application performance through React Query caching, lazy loading, reducing load time by 15%.',
    ],
  },
]

export default EXPERIENCE
