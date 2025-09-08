/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quotes */
import { ProjectType } from 'Types'

const PROJECTS: ProjectType[] = [
  {
    title: 'SeaBaas',
    url: 'https://sterling.ng/sterling-sets-milestone/',
    shortDescription:
      "Africa's first indigenous core banking system. I led the frontend team that developed key modules (Customer Management, Customer Forms Configuration, Product Factory) for the application",
    technologies: 'React, TypeScript, TailwindCSS, Redux Toolkit, Microfrontends, Microservices',
  },
  {
    title: 'Checkref',
    url: 'https://checkref.co/',
    shortDescription:
      'Professional reference management platform that empowers HR departments to efficiently handle reference requests, track responses, and maintain organized records throughout the hiring process. Built with mobile-first design and secure document workflows.',
    technologies: 'Next.js, TypeScript, Chakra UI, TailwindCSS',
  },
  {
    title: 'NextBasket',
    url: 'https://nextbasket.com/',
    shortDescription:
      'An AI-based software platform designed to empower businesses in building and managing their online stores, complete with integrated warehouse solutions for their products.',
    technologies: 'Next.js, Internationalization, TailwindCSS, Storybook',
  },
  {
    title: 'Khaime AI',
    url: 'https://khaime.com/',
    shortDescription:
      'AI-powered website builder that generates responsive, professional websites based on business type and user prompts. Built intelligent editor with real-time collaboration, drag-and-drop functionality, and automated design suggestions using OpenAI and Claude APIs.',
    technologies: 'React, TypeScript, OpenAI API, Claude API, Real-time Collaboration',
  },
  {
    title: 'JobOS AI',
    url: 'https://jobos.ai',
    shortDescription:
      "AI-powered resume optimization platform that transforms job seekers' resumes into ATS-beating documents. Features advanced AI orchestration across multiple providers (OpenAI, Claude, Gemini), intelligent resume analysis with keyword optimization, cover letter generation, interview coaching with scenario-based practice sessions, and comprehensive job application tracking. Built with world-class optimization algorithms that deliver 90%+ ATS compatibility and 3-5x interview callback improvements.",
    technologies:
      'React, TypeScript, Node.js, Express.js, PostgreSQL, Drizzle ORM, OpenAI API, Claude API, Google AI, Stripe, TailwindCSS, Shadcn UI, TanStack Query',
  },
  {
    title: 'Hill Emissaries',
    url: 'https://hillemissaries.com/',
    shortDescription:
      'Faith-based organization platform featuring scholarship program management, event gallery, and community outreach initiatives. Built with comprehensive admin dashboard for managing programs, media, and user feedback. Includes dynamic content management, image uploads, and responsive design for showcasing faith outreach activities, educational scholarships, and community engagement programs.',
    technologies:
      'React, Redux Toolkit, Elixir, Phoenix Framework, PostgreSQL, TailwindCSS, Material Tailwind, AWS S3, File Uploads, Admin Dashboard',
  },
  {
    title: 'SyncSkills CMS - Education Technology Platform',
    url: 'https://syncskills.com.au/', // Replace with actual live URL
    shortDescription:
      'Full-stack education technology platform for career transition training. Has comprehensive CMS, mini-course enrollment system, student progress tracking, and referral programs. Features dynamic content management, Stripe payment processing, course scheduling, brochure downloads, and scalable learning infrastructure for professional development.',
    technologies: 'Next.js 14, TypeScript, PayloadCMS, MongoDB, Prisma, Redux Toolkit, TailwindCSS, Stripe',
  },
  {
    title: 'Flowmono Automate',
    url: 'https://www.flowmono.com/products/flowmono-automate',
    shortDescription:
      'Built comprehensive workflow automation platform featuring a Process Designer with drag-and-drop interface for creating custom approval flows, request tracking systems, and task automation solutions. Developed pre-built workflow templates for common business processes including expense approvals, leave requests, and compliance sign-offs.',
    technologies: 'Angular, TypeScript, Material UI, SVG manipulation, Drag and Drop',
  },
  {
    title: 'Flowmono Phoenix',
    url: 'https://www.flowmono.com/products/phoenix',
    shortDescription:
      'Developed powerful no-code form builder enabling businesses to create custom forms and workflows without coding. Built smart form creation tools with advanced features for business process automation.',
    technologies: 'Angular, TypeScript, Material UI, SVG manipulation, Drag and Drop',
  },
  {
    title: 'Movie Moments',
    url: 'https://movie-moments.vercel.app/',
    shortDescription:
      "Chat with friends about movies you're watching on different platforms. Share reactions tied to specific timestamps, create private rooms, and discuss scenes without spoilers. Works while you watch on Netflix, Disney+, or any streaming service.",
    technologies: 'Next.js, TypeScript, Supabase, Real-time Chat, TailwindCSS',
  },

  {
    title: "Kemi's Portfolio",
    url: 'https://www.kemiadeleke.com/',
    shortDescription: 'A personalized portfolio designed for Kemi Adeleke, showcasing her work as a product designer.',
    technologies: 'React, TypeScript, Styled Components',
  },
  {
    title: "Stephen's Portfolio",
    url: 'https://stephcrown.com/',
    shortDescription: 'My personal portfolio showcasing my work, skills, and professional journey.',
    technologies: 'React, TypeScript, TailwindCSS',
  },
  {
    title: 'LEA Portal',
    url: '',
    shortDescription:
      'An enterprise in-house platform that allows the  bank to efficiently manage requests from law enforcement agencies concerning actions on customer accounts.',
    technologies: 'React, TypeScript, TailwindCSS, Redux Toolkit',
  },
  {
    title: 'Notification Engine',
    url: '',
    shortDescription:
      'An enterprise in-house notification management system that enables the client bank to manage and automate notification dispatch based on various customer account criteria and groups, with the ability to configure templates for different types of notifications, including email and SMS.',
    technologies: 'Angular, NgRx, Quill',
  },
  {
    title: 'Solace Imaging',
    url: 'https://solaceimaging.com/',
    shortDescription: 'An application that allows diagnostic centers to securely send images to specialists for analysis and interpretation.',
    technologies: 'React, TypeScript, Styled Components',
  },

  {
    title: 'Projecttent',
    url: 'https://projecttent.com/',
    shortDescription: 'Simple landing page for Projecttent. I did the UI design and development.',
    technologies: 'Elixir, TailwindCSS, Figma',
  },
]

export default PROJECTS

// Export structured data for projects
export const PROJECT_STRUCTURED_DATA = PROJECTS.map((project) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.title,
  description: project.shortDescription,
  url: project.url,
  creator: {
    '@type': 'Person',
    name: 'Stephen Emmanuel',
    alternateName: 'Steph Crown',
  },
  keywords: project.technologies,
  genre: 'Software Development',
}))
