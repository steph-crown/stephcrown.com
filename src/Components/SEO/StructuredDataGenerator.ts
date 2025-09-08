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
      alternateName: 'Steph Crown Development Services',
      description: 'Professional software engineering and web development services specializing in React, TypeScript, and modern web applications.',
      provider: {
        '@type': 'Person',
        name: 'Stephen Emmanuel',
        alternateName: 'Steph Crown',
      },
      serviceType: 'Software Development',
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
          name: 'Software Engineering Projects',
          description: 'Portfolio of software engineering projects by Stephen Emmanuel (Steph Crown)',
          url: 'https://stephcrown.com/projects',
          mainEntity: {
            '@type': 'ItemList',
            name: 'Software Projects',
            description: 'Collection of software development projects',
          },
        },
      ]

    case 'articles':
      return [
        ...baseData,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Technical Articles',
          description: 'Technical articles and tutorials by Stephen Emmanuel (Steph Crown)',
          url: 'https://stephcrown.com/articles',
          mainEntity: {
            '@type': 'ItemList',
            name: 'Technical Articles',
            description: 'Collection of technical articles and tutorials',
          },
        },
      ]

    case 'contact':
      return [
        ...baseData,
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Stephen Emmanuel',
          description: 'Get in touch with Stephen Emmanuel (Steph Crown) for software engineering services',
          url: 'https://stephcrown.com/contact',
          mainEntity: {
            '@type': 'Person',
            name: 'Stephen Emmanuel',
            alternateName: 'Steph Crown',
            email: 'emmanuelstephen024@gmail.com',
          },
        },
      ]

    default:
      return baseData
  }
}
