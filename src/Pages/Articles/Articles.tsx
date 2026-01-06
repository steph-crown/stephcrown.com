import { ArticleCardHoverContent, HoverCard, SEO } from 'Components'

import { ARTICLE_LIST, BREADCRUMB_STRUCTURED_DATA } from 'Constants'
import { ARTICLE_STRUCTURED_DATA } from 'Constants/ArticleList'

const Home = () => {
  const breadcrumbData = [
    { name: 'Home', url: 'https://stephcrown.com' },
    { name: 'Articles', url: 'https://stephcrown.com/articles' },
  ]

  const combinedStructuredData = [BREADCRUMB_STRUCTURED_DATA(breadcrumbData), ...ARTICLE_STRUCTURED_DATA]

  return (
    <>
      <SEO
        title='Technical Articles & Blog Posts - Stephen Emmanuel (Steph Crown)'
        description="Read Stephen Emmanuel's technical articles on React, TypeScript, JavaScript, ClojureScript, Elixir, Phoenix, and modern web development. Published on Hashnode, Open Replay, Dev.to, and Revent Academy."
        keywords='Stephen Emmanuel articles, Steph Crown blog, React articles, TypeScript tutorials, JavaScript guides, ClojureScript, Elixir Phoenix, web development tutorials, software engineering articles, technical writing'
        canonicalUrl='https://stephcrown.com/articles'
        structuredData={combinedStructuredData}
      />
      <div>
        <h1 className='h1'>My Published Articles</h1>

        <div className='section'>
          <p className='p'>
            I&apos;ve written technical articles and tutorials on{' '}
            <a target='_blank' rel='noreferrer' className='a' href='https://blog.stephcrown.com'>
              Hashnode
            </a>
            ,{' '}
            <a target='_blank' rel='noreferrer' className='a' href='https://blog.openreplay.com/authors/stephen-crown/'>
              Open Replay
            </a>
            ,{' '}
            <a target='_blank' rel='noreferrer' className='a' href='https://blog.reventacademy.com/author/stephen/'>
              Revent Academy
            </a>
            , and{' '}
            <a target='_blank' rel='noreferrer' className='a' href='https://dev.to/stephcrown'>
              Dev.to
            </a>
            . Hover over any card and click the arrow icon ↗ to read.
          </p>
        </div>

        <section className='flex flex-col gap-y-6 mt-10' aria-details='Stephen Articles'>
          {ARTICLE_LIST.map((article) => (
            <div className='w-full' key={article.name}>
              <HoverCard
                bgImage={article.bgImage}
                label={article.name}
                hoverContent={
                  <ArticleCardHoverContent
                    platform={article.platform}
                    url={article.url}
                    description={article.description}
                    hasLightBg={article.hasLightBg}
                  />
                }
              />
            </div>
          ))}
        </section>

        <p className='text-center mt-20 text-fg/60-light dark:text-fg/60-dark italic'>You&apos;re all caught up :{')'}</p>
      </div>
    </>
  )
}

export default Home
