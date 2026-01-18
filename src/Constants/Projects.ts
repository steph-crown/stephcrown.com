/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quotes */
import { ProjectType } from 'Types'

const PROJECTS: ProjectType[] = [
  {
    title: 'FinTrack',
    url: 'https://fintrack.stephcrown.com',
    shortDescription:
      'A local-first CLI financial tracker I built in Rust. Track your income and expenses on your own machine with zero cloud dependencies. Everything stays on your device, giving you complete control over your financial data. I distributed binaries for Mac, Linux, and Windows using cargo-dist, and used libraries for CLI table rendering, chart visualization, and terminal beautification.',
    technologies: 'Rust, clap, cargo-dist, serde, chrono, colored',
  },
  {
    title: 'filesearch',
    url: 'https://github.com/steph-crown/filesearch',
    shortDescription:
      'A CLI tool I built as practice for Rust. It searches for files matching a given pattern within a directory—essentially a simple version of the find command. Supports wildcard patterns and recursive directory searching. Built with clap for command-line argument parsing.',
    technologies: 'Rust, clap, globset',
  },
  {
    title: 'SeaBaas',
    url: 'https://sterling.ng/sterling-sets-milestone/',
    shortDescription:
      "Africa's first indigenous core banking system. I led the frontend team that built key modules including Customer Management, Customer Forms Configuration, and Product Factory. Worked with microfrontends and microservices architecture to deliver a robust banking platform.",
    technologies: 'React, TypeScript, TailwindCSS, Redux Toolkit, Microfrontends, Microservices',
  },
  {
    title: 'Checkref',
    url: 'https://checkref.co/',
    shortDescription:
      'A reference management platform for HR teams to handle reference requests and track responses throughout the hiring process. Built with mobile-first design and secure document workflows to keep everything organized and accessible.',
    technologies: 'Next.js, TypeScript, Chakra UI, TailwindCSS',
  },
  {
    title: 'NextBasket',
    url: 'https://nextbasket.com/',
    shortDescription:
      'An AI-powered platform that helps businesses build and manage their online stores. Includes integrated warehouse solutions so companies can handle their entire e-commerce operation from one place.',
    technologies: 'Next.js, Internationalization, TailwindCSS, Storybook',
  },
  {
    title: 'Khaime AI',
    url: 'https://khaime.com/',
    shortDescription:
      'An AI website builder that creates responsive websites from business type and user prompts. Built an intelligent editor with real-time collaboration, drag-and-drop functionality, and automated design suggestions powered by OpenAI and Claude APIs.',
    technologies: 'React, TypeScript, OpenAI API, Claude API, Real-time Collaboration',
  },
  {
    title: 'JobOS AI',
    url: 'https://jobos.ai',
    shortDescription:
      'An AI-powered resume optimization platform that helps job seekers create ATS-beating resumes. Orchestrates multiple AI providers (OpenAI, Claude, Gemini) to analyze resumes, optimize keywords, generate cover letters, and provide interview coaching. Also includes job application tracking to keep everything organized.',
    technologies:
      'React, TypeScript, Node.js, Express.js, PostgreSQL, Drizzle ORM, OpenAI API, Claude API, Google AI, Stripe, TailwindCSS, Shadcn UI, TanStack Query',
  },
  {
    title: 'Hill Emissaries',
    url: 'https://hillemissaries.com/',
    shortDescription:
      'A platform for a faith-based organization to manage scholarship programs, showcase event galleries, and handle community outreach. Built a comprehensive admin dashboard for managing programs, media, and user feedback. Includes dynamic content management and image uploads.',
    technologies:
      'React, Redux Toolkit, Elixir, Phoenix Framework, PostgreSQL, TailwindCSS, Material Tailwind, AWS S3, File Uploads, Admin Dashboard',
  },
  {
    title: 'SyncSkills CMS - Education Technology Platform',
    url: 'https://syncskills.com.au/',
    shortDescription:
      'A full-stack education platform for career transition training. Built a comprehensive CMS with mini-course enrollment, student progress tracking, and referral programs. Integrated Stripe for payments and created a scalable learning infrastructure.',
    technologies: 'Next.js 14, TypeScript, PayloadCMS, MongoDB, Prisma, Redux Toolkit, TailwindCSS, Stripe',
  },
  {
    title: 'Flowmono Automate',
    url: 'https://www.flowmono.com/products/flowmono-automate',
    shortDescription:
      'A workflow automation platform with a drag-and-drop Process Designer for creating custom approval flows and task automation. Built pre-made templates for common processes like expense approvals, leave requests, and compliance sign-offs.',
    technologies: 'Angular, TypeScript, Material UI, SVG manipulation, Drag and Drop',
  },
  {
    title: 'Flowmono Phoenix',
    url: 'https://www.flowmono.com/products/phoenix',
    shortDescription:
      'A no-code form builder that lets businesses create custom forms and workflows without writing code. Built smart form creation tools with advanced features to automate business processes.',
    technologies: 'Angular, TypeScript, Material UI, SVG manipulation, Drag and Drop',
  },
  {
    title: 'Movie Moments',
    url: 'https://movie-moments.vercel.app/',
    shortDescription:
      'A real-time chat app for discussing movies with friends while watching. Share reactions tied to specific timestamps, create private rooms, and talk about scenes without spoilers. Works with any streaming service.',
    technologies: 'Next.js, TypeScript, Supabase, Real-time Chat, TailwindCSS',
  },

  {
    title: "Kemi's Portfolio",
    url: 'https://www.kemiadeleke.com/',
    shortDescription:
      'A personalized portfolio I designed and built for Kemi Adeleke to showcase her work as a product designer. Clean, modern design that puts her projects front and center.',
    technologies: 'React, TypeScript, Styled Components',
  },
  {
    title: "Stephen's Portfolio",
    url: 'https://stephcrown.com/',
    shortDescription:
      'My personal portfolio site showcasing my work, skills, and professional journey. Built with a clean, minimal design that focuses on the content.',
    technologies: 'React, TypeScript, TailwindCSS',
  },
  {
    title: 'LEA Portal',
    url: '',
    shortDescription:
      'An enterprise platform for a bank to manage requests from law enforcement agencies regarding customer account actions. Built secure workflows to handle sensitive legal requests efficiently.',
    technologies: 'React, TypeScript, TailwindCSS, Redux Toolkit',
  },
  {
    title: 'Notification Engine',
    url: '',
    shortDescription:
      'A notification management system for a bank to automate and manage notification dispatch based on customer account criteria. Built template configuration for different notification types including email and SMS.',
    technologies: 'Angular, NgRx, Quill',
  },
  {
    title: 'Solace Imaging',
    url: 'https://solaceimaging.com/',
    shortDescription:
      'A secure platform for diagnostic centers to send medical images to specialists for analysis and interpretation. Built with security and privacy in mind for sensitive medical data.',
    technologies: 'React, TypeScript, Styled Components',
  },

  {
    title: 'Projecttent',
    url: 'https://projecttent.com/',
    shortDescription:
      'A landing page for Projecttent. I handled both the UI design in Figma and the development, creating a clean and effective first impression.',
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
