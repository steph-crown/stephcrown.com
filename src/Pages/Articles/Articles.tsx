import { ArticleGridCard, SEO } from 'Components'
import { ARTICLE_LIST, BREADCRUMB_STRUCTURED_DATA } from 'Constants'
import { ARTICLE_STRUCTURED_DATA } from 'Constants/ArticleList'
import { generatePageStructuredData } from 'Components/SEO/StructuredDataGenerator'

const Articles = () => {
  const breadcrumbData = [
    { name: 'Home', url: 'https://stephcrown.com' },
    { name: 'Articles', url: 'https://stephcrown.com/articles' },
  ]

  const combinedStructuredData = [...generatePageStructuredData('articles'), BREADCRUMB_STRUCTURED_DATA(breadcrumbData), ...ARTICLE_STRUCTURED_DATA]

  return (
    <>
      <SEO
        title='Technical Articles & Blog Posts - Stephen Emmanuel (Chukwunonso) | Steph Crown'
        description="Read Stephen Emmanuel's (Chukwunonso) technical articles on React, TypeScript, JavaScript, ClojureScript, Elixir, Phoenix, and modern web development."
        keywords='Stephen Emmanuel articles, Steph Crown blog, Nigerian software engineer articles, React articles, TypeScript tutorials, web development tutorials'
        canonicalUrl='https://stephcrown.com/articles'
        structuredData={combinedStructuredData}
      />
      <main role='main' aria-label='Articles page'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5 md:gap-y-3'>
          {ARTICLE_LIST.map((article) => (
            <ArticleGridCard key={`${article.name}-${article.url}`} article={article} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Articles
