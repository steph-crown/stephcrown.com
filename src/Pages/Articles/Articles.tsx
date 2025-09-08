import { ArticleCardHoverContent, HoverCard, SEO } from 'Components'

import { ARTICLE_LIST, BREADCRUMB_STRUCTURED_DATA } from 'Constants'
import { ARTICLE_STRUCTURED_DATA } from 'Constants/ArticleList'
import { ArticleIcon } from 'Assets/Svgs'

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
        <div className='mb-10'>
          <ArticleIcon className='h-[4.75rem] w-[4.75rem] text-fg/50-light dark:text-fg/50-dark' />

          <article>
            <h1 className='my-2 h1'>
              <span className='h1-alt'>My Published</span>
              <br />
              Articles<span className='h1-alt'>.</span>
            </h1>

            <p className='p'>
              I have authored several <strong>technical articles</strong> and <strong>tutorials</strong> on{' '}
              <a target='_blank' rel='noreferrer' className='font-MSMediumWide underline' href='https://blog.stephcrown.com'>
                {' '}
                Hashnode{' '}
              </a>
              ,{' '}
              <a target='_blank' rel='noreferrer' className='font-MSMediumWide underline' href='https://blog.openreplay.com/authors/stephen-crown/'>
                {' '}
                Open Replay Blog{' '}
              </a>
              ,{' '}
              <a target='_blank' rel='noreferrer' className='font-MSMediumWide underline' href='https://blog.reventacademy.com/author/stephen/'>
                {' '}
                Revent Academy Blog{' '}
              </a>
              , and{' '}
              <a target='_blank' rel='noreferrer' className='font-MSMediumWide underline' href='https://dev.to/stephcrown'>
                {' '}
                Dev.to{' '}
              </a>{' '}
              on various topics ranging from <strong>React</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>,{' '}
              <strong>ClojureScript</strong>,<strong>Elixir</strong>, <strong>Phoenix</strong>, and other modern web technologies. As a{' '}
              <strong>software engineer</strong>, I am always learning new things and I&apos;m open to new ideas and technologies. Feel free to check
              out my articles and leave a comment. I will be glad to hear from you.
            </p>

            <p className='p'>Hover over (or tap on) any of the cards below and click the arrow icon ↗ at the top right to read the article.</p>
          </article>
        </div>

        <section className='flex justify-between flex-wrap gap-y-10' aria-details='Stephen Social media links'>
          {ARTICLE_LIST.map((article) => (
            <div className='w-full lg:w-[47.5%]' key={article.name}>
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

        <p className='text-center mt-40 text-fg/40-light dark:text-fg/40-dark'>You&apos;re all caught up :{')'}</p>
      </div>
    </>
  )
}

export default Home
