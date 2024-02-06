import { ArticleCardHoverContent, HoverCard } from 'Components'

import { ARTICLE_LIST } from 'Constants'
import { ArticleIcon } from 'Assets/Svgs'

const Home = () => {
  return (
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
            I have authored several articles on{' '}
            <a target='_blank' rel='noreferrer' className='font-MSMediumWide underline' href='https://blog.stephcrown.com'>
              {' '}
              Hashnode{' '}
            </a>
            ,{' '}
            <a target='_blank' rel='noreferrer' className='font-MSMediumWide underline' href='https://blog.openreplay.com'>
              {' '}
              Open Replay Blog{' '}
            </a>
            , and{' '}
            <a target='_blank' rel='noreferrer' className='font-MSMediumWide underline' href='https://dev.to/stephcrown'>
              {' '}
              Dev.to{' '}
            </a>{' '}
            on various topics ranging from React, Javascript, Typescript, Clojurescript, Elixir, Phoenix, and other technologies. I am always learning
            new things and I&apos;m open to new ideas and technologies. Feel free to check out my articles and leave a comment. I will be glad to hear
            from you.
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
  )
}

export default Home
