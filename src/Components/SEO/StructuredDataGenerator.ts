import { PERSON_STRUCTURED_DATA, WEBSITE_STRUCTURED_DATA, ORGANIZATION_STRUCTURED_DATA } from 'Constants'

export const generateHomepageStructuredData = () => {
  return [
    PERSON_STRUCTURED_DATA,
    WEBSITE_STRUCTURED_DATA,
    ORGANIZATION_STRUCTURED_DATA,
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Stephen Emmanuel Software Engineering Services',
      alternateName: ['Steph Crown Development Services', 'Stephen Chukwunonso Emmanuel Services'],
      description:
        'Professional software engineering, frontend development, backend development, and systems engineering services. Specializing in React, TypeScript, Next.js, Rust, Elixir, Phoenix, Node.js, and full-stack development. Based in Nigeria, serving clients worldwide.',
      provider: {
        '@type': 'Person',
        name: 'Stephen Emmanuel',
        alternateName: ['Steph Crown', 'Stephen Chukwunonso Emmanuel'],
      },
      serviceType: ['Software Development', 'Web Development', 'Frontend Development', 'Backend Development', 'Systems Engineering'],
      areaServed: 'Worldwide',
      url: 'https://stephcrown.com',
    },
  ]
}

export const generatePageStructuredData = (pageType: string, pageData?: any) => {
  const baseData = [PERSON_STRUCTURED_DATA, ORGANIZATION_STRUCTURED_DATA]

  switch (pageType) {
    case 'projects':
      return [
        ...baseData,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Software Engineering Projects - Stephen Emmanuel (Steph Crown)',
          description:
            'Portfolio of software engineering projects by Stephen Emmanuel (Chukwunonso), also known as Steph Crown. Nigerian software engineer showcasing React, TypeScript, Rust, Elixir, Phoenix, Next.js, and full-stack development projects.',
          url: 'https://stephcrown.com/projects',
          mainEntity: {
            '@type': 'ItemList',
            name: 'Software Projects',
            description: 'Collection of software development projects including React, TypeScript, Rust, Elixir, Phoenix, Next.js applications',
          },
        },
      ]

    case 'articles':
      return [
        ...baseData,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Technical Articles - Stephen Emmanuel (Steph Crown)',
          description:
            'Technical articles and tutorials by Stephen Emmanuel (Chukwunonso), also known as Steph Crown. Nigerian software engineer writing about React, TypeScript, JavaScript, ClojureScript, Elixir, Phoenix, and modern web development.',
          url: 'https://stephcrown.com/articles',
          mainEntity: {
            '@type': 'ItemList',
            name: 'Technical Articles',
            description:
              'Collection of technical articles and tutorials on React, TypeScript, JavaScript, ClojureScript, Elixir, Phoenix, and web development',
          },
        },
      ]

    case 'contact':
      return [
        ...baseData,
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Stephen Emmanuel (Steph Crown) - Nigerian Software Engineer',
          description:
            'Get in touch with Stephen Emmanuel (Chukwunonso), also known as Steph Crown, for software engineering, frontend development, backend development, and systems engineering services. Available for freelance projects, collaborations, and technical discussions.',
          url: 'https://stephcrown.com/contact',
          mainEntity: {
            '@type': 'Person',
            name: 'Stephen Emmanuel',
            alternateName: ['Steph Crown', 'Stephen Chukwunonso Emmanuel'],
            email: 'emmanuelstephen024@gmail.com',
          },
        },
      ]

    default:
      return baseData
  }
}
