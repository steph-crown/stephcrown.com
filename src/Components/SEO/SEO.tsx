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
  title = 'Stephen Emmanuel (Steph Crown) - Software Engineer & Frontend Developer',
  description = 'Stephen Emmanuel (Steph Crown) is a skilled software engineer with 5+ years of experience building modern web applications. Expert in React, TypeScript, Next.js, and full-stack development. View portfolio, projects, and technical articles.',
  keywords = 'Stephen Emmanuel, Steph Crown, software engineer, frontend developer, React developer, TypeScript, Next.js, full-stack developer, web developer, JavaScript, portfolio, projects, technical articles, software development, UI/UX, modern web applications',
  canonicalUrl = 'https://stephcrown.com',
  ogImage = 'https://stephcrown.com/stephcrown.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
}) => {
  const fullTitle = title.includes('Stephen Emmanuel') ? title : `${title} | Stephen Emmanuel (Steph Crown)`

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
