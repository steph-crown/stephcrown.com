import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object
  noIndex?: boolean
}

const SEO: React.FC<SEOProps> = ({
  title = 'Stephen Emmanuel (Chukwunonso) - Software Engineer, Frontend & Backend Developer | Steph Crown',
  description = 'Stephen Emmanuel (Chukwunonso), also known as Steph Crown, is a software engineer, frontend developer, backend developer, and systems engineer with 5+ years of experience. Best graduating student from University of Lagos Department of Mathematics. Expert in React, TypeScript, Next.js, Rust, Elixir, Phoenix, Node.js, and full-stack development. Available for freelance projects. View portfolio, projects, and technical articles.',
  keywords = 'Stephen Emmanuel, Steph Crown, Chukwunonso, Stephen Chukwunonso Emmanuel, software engineer, Nigeria developer, frontend developer Nigeria, backend developer Nigeria, systems engineer Nigeria, University of Lagos, UNILAG, best graduating student, React developer, TypeScript developer, Rust developer, Elixir developer, Phoenix developer, Next.js developer, Node.js developer, full-stack developer, software engineering, web development, React, TypeScript, JavaScript, Next.js, Rust, Elixir, Phoenix, Angular, Node.js, PostgreSQL, MongoDB, frontend, backend, systems, freelance developer, software engineer portfolio, Nigeria software engineer, Lagos developer, Nigerian frontend developer, Nigerian backend developer',
  canonicalUrl = 'https://stephcrown.com',
  ogImage = 'https://stephcrown.com/stephcrown.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
}) => {
  const fullTitle = title.includes('Stephen Emmanuel') || title.includes('Steph Crown') ? title : `${title} | Stephen Emmanuel (Steph Crown)`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content='Stephen Emmanuel (Steph Crown)' />
      <meta name='robots' content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name='googlebot' content='index,follow' />
      <meta name='bingbot' content='index,follow' />

      {/* Canonical URL */}
      <link rel='canonical' href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={ogType} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:image:alt' content='Stephen Emmanuel (Steph Crown) - Software Engineer' />
      <meta property='og:site_name' content='Stephen Emmanuel Portfolio' />
      <meta property='og:locale' content='en_US' />

      {/* Twitter Card Meta Tags */}
      <meta name='twitter:card' content={twitterCard} />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:image:alt' content='Stephen Emmanuel (Steph Crown) - Software Engineer' />
      <meta name='twitter:creator' content='@stephcrown' />
      <meta name='twitter:site' content='@stephcrown' />

      {/* Additional SEO Meta Tags */}
      <meta name='theme-color' content='#161616' />
      <meta name='msapplication-TileColor' content='#161616' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
      <meta name='apple-mobile-web-app-title' content='Stephen Emmanuel' />

      {/* Structured Data */}
      {structuredData && <script type='application/ld+json'>{JSON.stringify(structuredData)}</script>}
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  twitterCard: PropTypes.string,
  structuredData: PropTypes.object,
  noIndex: PropTypes.bool,
}

export default SEO
