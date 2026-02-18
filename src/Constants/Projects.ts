/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quotes */
import { ProjectType } from 'Types'

const PROJECTS: ProjectType[] = [
  {
    title: 'ase',
    url: 'https://github.com/steph-crown/ase',
    shortDescription: 'Small Unix-style interactive shell in Rust. Builtins, pipelines, history, tab completion, and redirection.',
    technologies: 'Rust, rustyline, shlex, pathsearch, React, TypeScript, Vite, TailwindCSS',
    icon: 'Ase',
  },
  {
    title: 'FinTrack',
    url: 'https://fintrack.stephcrown.com',
    shortDescription:
      'A local-first CLI financial tracker in Rust. Track income and expenses on your machine with zero cloud—binaries for Mac, Linux, and Windows.',
    technologies: 'Rust, clap, cargo-dist, serde, chrono, colored',
    icon: 'Fintrack',
  },
  {
    title: 'filesearch',
    url: 'https://github.com/steph-crown/filesearch',
    shortDescription: 'CLI tool for Rust practice. Searches files by pattern in a directory with wildcards and recursive search. Built with clap.',
    technologies: 'Rust, clap, globset',
    icon: 'Filesearch',
  },
  {
    title: 'Checkref',
    url: 'https://checkref.co/',
    shortDescription:
      'Reference management for HR: handle reference requests and track responses through hiring. Mobile-first design and secure document workflows.',
    technologies: 'Next.js, TypeScript, TailwindCSS',
    icon: 'Checkref',
  },
  {
    title: 'SeaBaas',
    url: 'https://sterling.ng/sterling-sets-milestone/',
    shortDescription:
      "Africa's first indigenous core banking system. I led the frontend team for Customer Management, Forms Configuration, and Product Factory.",
    technologies: 'React, Microfrontends, Tailwind',
    icon: 'Seabaas',
  },
  {
    title: 'NextBasket',
    url: 'https://nextbasket.com/',
    shortDescription:
      'AI-powered platform for building and managing online stores with integrated warehouse solutions and full e-commerce operations.',
    technologies: 'Next.js, I18N, Storybook',
    icon: 'Nextbasket',
  },
  {
    title: 'Khaime AI',
    url: 'https://khaime.com/',
    shortDescription:
      'AI website builder from business type and prompts. Intelligent editor with real-time collaboration, drag-and-drop, and OpenAI/Claude design suggestions.',
    technologies: 'React, TypeScript, OpenAI API',
    icon: 'PodPod',
  },
  {
    title: 'JobOS AI',
    url: 'https://jobos.ai',
    shortDescription:
      'AI resume optimization for ATS-beating resumes. Multiple AI providers for keywords, cover letters, interview coaching, and application tracking.',
    technologies:
      'React, TypeScript, Node.js, Express, PostgreSQL, Drizzle ORM, OpenAI API, Claude API, Google AI, Stripe, TailwindCSS, Shadcn UI, TanStack Query',
    icon: 'PodPod',
  },
  {
    title: 'Hill Emissaries',
    url: 'https://hillemissaries.com/',
    shortDescription:
      'Faith-based platform for scholarships, event galleries, and outreach. Admin dashboard for programs, media, and feedback with dynamic CMS.',
    technologies: 'React, RTK, Phoenix, PostgreSQL',
    icon: 'PodPod',
  },
  {
    title: 'SyncSkills CMS',
    url: 'https://syncskills.com.au/',
    shortDescription:
      'Full-stack education platform for career transition. CMS with mini-course enrollment, progress tracking, referral programs, and Stripe payments.',
    technologies: 'Next.js, TypeScript, PayloadCMS',
    icon: 'PodPod',
  },
  {
    title: 'Flowmono Automate',
    url: 'https://www.flowmono.com/products/flowmono-automate',
    shortDescription:
      'Workflow automation with drag-and-drop Process Designer. Custom approval flows, task automation, and templates for expenses, leave, compliance.',
    technologies: 'Angular, TypeScript, Material UI',
    icon: 'PodPod',
  },
  {
    title: 'Flowmono Phoenix',
    url: 'https://www.flowmono.com/products/phoenix',
    shortDescription: 'No-code form builder for custom forms and workflows. Smart form creation and automation for business processes.',
    technologies: 'Angular, TypeScript, Material UI',
    icon: 'PodPod',
  },
  {
    title: "Kemi's Portfolio",
    url: 'https://www.kemiadeleke.com/',
    shortDescription: 'Portfolio for Kemi Adeleke, product designer. Clean, modern design showcasing her projects and work.',
    technologies: 'React, TypeScript, Styled Comps',
    icon: 'PodPod',
  },
  {
    title: "Stephen's Portfolio",
    url: 'https://stephcrown.com/',
    shortDescription: 'Personal portfolio for work, skills, and journey. Clean, minimal design focused on content.',
    technologies: 'React, TypeScript, TailwindCSS',
    icon: 'PodPod',
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
