export const PERSON_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Stephen Emmanuel',
  alternateName: ['Steph Crown', 'Stephen Chukwunonso Emmanuel', 'Chukwunonso Emmanuel'],
  givenName: 'Stephen',
  additionalName: 'Chukwunonso',
  familyName: 'Emmanuel',
  url: 'https://stephcrown.com',
  image: 'https://stephcrown.com/stephcrown.png',
  description:
    'Stephen Emmanuel (Chukwunonso), also known as Steph Crown, is a Nigerian software engineer, frontend developer, and systems engineer with 5+ years of experience. Best graduating student from University of Lagos Department of Mathematics. Expert in React, TypeScript, Next.js, Rust, Elixir, Phoenix, Node.js, and full-stack development. Available for freelance projects and collaborations.',
  jobTitle: ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'Systems Engineer', 'Full-Stack Developer'],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  knowsAbout: [
    'React',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'Node.js',
    'Rust',
    'Elixir',
    'Phoenix',
    'Phoenix LiveView',
    'Angular',
    'NgRx',
    'Redux',
    'Redux Toolkit',
    'PostgreSQL',
    'MongoDB',
    'Frontend Development',
    'Backend Development',
    'Full-Stack Development',
    'Systems Engineering',
    'Web Development',
    'UI/UX Design',
    'Software Engineering',
    'Machine Learning',
    'Artificial Intelligence',
    'Internet of Things',
    'CLI Development',
    'Microservices',
    'Microfrontends',
    'TailwindCSS',
    'ClojureScript',
    'Python',
    'Docker',
    'GraphQL',
  ],
  sameAs: [
    'https://github.com/stephcrown',
    'https://github.com/steph-crown',
    'https://linkedin.com/in/stephen-emmanuel',
    'https://twitter.com/stephcrown',
    'https://blog.stephcrown.com',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'University of Lagos',
    alternateName: 'UNILAG',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
      addressLocality: 'Lagos',
    },
  },
  award: 'Best Graduating Student - Department of Mathematics, University of Lagos',
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Software Engineer',
    description: 'Building modern web applications, systems, and digital products',
    occupationLocation: {
      '@type': 'Country',
      name: 'Nigeria',
    },
  },
  nationality: {
    '@type': 'Country',
    name: 'Nigeria',
  },
}

export const WEBSITE_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Stephen Emmanuel Portfolio - Nigerian Software Engineer & Developer',
  alternateName: ['Steph Crown Portfolio', 'Stephen Chukwunonso Emmanuel Portfolio'],
  url: 'https://stephcrown.com',
  description:
    'Portfolio of Stephen Emmanuel (Chukwunonso), also known as Steph Crown - Nigerian software engineer, frontend developer, backend developer, and systems engineer. Best graduating student from University of Lagos. Showcasing React, TypeScript, Rust, Elixir, Phoenix projects, technical articles, and professional experience. Available for freelance projects.',
  author: {
    '@type': 'Person',
    name: 'Stephen Emmanuel',
    alternateName: ['Steph Crown', 'Stephen Chukwunonso Emmanuel'],
  },
  inLanguage: 'en-US',
  copyrightYear: '2024',
  creator: {
    '@type': 'Person',
    name: 'Stephen Emmanuel',
    alternateName: ['Steph Crown', 'Stephen Chukwunonso Emmanuel'],
  },
  keywords:
    'Stephen Emmanuel, Steph Crown, Chukwunonso, Stephen Chukwunonso Emmanuel, Nigerian software engineer, Nigeria developer, frontend developer Nigeria, backend developer Nigeria, systems engineer Nigeria, University of Lagos, UNILAG, React developer, TypeScript developer, Rust developer, Elixir developer, Phoenix developer, Next.js developer, Node.js developer, full-stack developer, software engineering, web development, React, TypeScript, JavaScript, Next.js, Rust, Elixir, Phoenix, Angular, Node.js, PostgreSQL, MongoDB, frontend, backend, systems, freelance developer, software engineer portfolio',
}

export const ORGANIZATION_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Stephen Emmanuel Software Engineering Services',
  alternateName: ['Steph Crown Development Services', 'Stephen Chukwunonso Emmanuel'],
  url: 'https://stephcrown.com',
  logo: 'https://stephcrown.com/stephcrown.png',
  description:
    'Software engineering services, web development, frontend development, backend development, and systems engineering. Specializing in React, TypeScript, Next.js, Rust, Elixir, Phoenix, and full-stack development. Based in Nigeria, serving clients worldwide.',
  founder: {
    '@type': 'Person',
    name: 'Stephen Emmanuel',
    alternateName: ['Steph Crown', 'Stephen Chukwunonso Emmanuel'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG',
  },
  areaServed: 'Worldwide',
  sameAs: [
    'https://github.com/stephcrown',
    'https://github.com/steph-crown',
    'https://linkedin.com/in/stephen-emmanuel',
    'https://twitter.com/stephcrown',
  ],
}

export const BREADCRUMB_STRUCTURED_DATA = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const createArticleStructuredData = (article: {
  title: string
  description: string
  url: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  url: article.url,
  image: article.image || 'https://stephcrown.com/stephcrown.png',
  datePublished: article.datePublished || new Date().toISOString(),
  dateModified: article.dateModified || new Date().toISOString(),
  author: {
    '@type': 'Person',
    name: article.author || 'Stephen Emmanuel',
    alternateName: 'Steph Crown',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Stephen Emmanuel',
    logo: {
      '@type': 'ImageObject',
      url: 'https://stephcrown.com/stephcrown.png',
    },
  },
})

export const createProjectStructuredData = (project: { title: string; description: string; url: string; technologies: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.title,
  description: project.description,
  url: project.url,
  creator: {
    '@type': 'Person',
    name: 'Stephen Emmanuel',
    alternateName: 'Steph Crown',
  },
  keywords: project.technologies,
  genre: 'Software Development',
})
