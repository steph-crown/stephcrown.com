export const PERSON_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Stephen Emmanuel',
  alternateName: 'Steph Crown',
  url: 'https://stephcrown.com',
  image: 'https://stephcrown.com/stephcrown.png',
  description:
    'Software Engineer with 5+ years of experience building modern web applications. Expert in React, TypeScript, Next.js, and full-stack development.',
  jobTitle: 'Software Engineer',
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
    'Frontend Development',
    'Full-Stack Development',
    'Web Development',
    'UI/UX Design',
    'Software Engineering',
    'Machine Learning',
    'Artificial Intelligence',
    'Internet of Things',
  ],
  sameAs: [
    'https://github.com/stephcrown',
    'https://linkedin.com/in/stephen-emmanuel',
    'https://twitter.com/stephcrown',
    'https://blog.stephcrown.com',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'University',
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Software Engineer',
    description: 'Building modern web applications and digital products',
  },
}

export const WEBSITE_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Stephen Emmanuel Portfolio',
  alternateName: 'Steph Crown Portfolio',
  url: 'https://stephcrown.com',
  description:
    'Personal portfolio of Stephen Emmanuel (Steph Crown), showcasing software engineering projects, technical articles, and professional experience.',
  author: {
    '@type': 'Person',
    name: 'Stephen Emmanuel',
    alternateName: 'Steph Crown',
  },
  inLanguage: 'en-US',
  copyrightYear: '2024',
  creator: {
    '@type': 'Person',
    name: 'Stephen Emmanuel',
    alternateName: 'Steph Crown',
  },
}

export const ORGANIZATION_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Stephen Emmanuel',
  alternateName: 'Steph Crown',
  url: 'https://stephcrown.com',
  logo: 'https://stephcrown.com/stephcrown.png',
  description: 'Software engineering services and web development expertise',
  founder: {
    '@type': 'Person',
    name: 'Stephen Emmanuel',
    alternateName: 'Steph Crown',
  },
  sameAs: ['https://github.com/stephcrown', 'https://linkedin.com/in/stephen-emmanuel', 'https://twitter.com/stephcrown'],
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
