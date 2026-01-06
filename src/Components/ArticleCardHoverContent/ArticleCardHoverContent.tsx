import { ArrowIcon } from 'Assets/Svgs'
import { ArticleType } from 'Types'
import { FC } from 'react'

type Props = Omit<ArticleType, 'bgImage' | 'name'>

const ArticleCardHoverContent: FC<Props> = ({ platform, url, description, hasLightBg }) => {
  return (
    <a
      href={url}
      rel='noreferrer'
      target='_blank'
      className='p-6 flex flex-col h-full justify-between focus:outline-none focus:ring-2 focus:ring-fg/60-light dark:focus:ring-fg/60-dark focus:ring-offset-2'
      aria-label={`Read article on ${platform}: ${description}`}
    >
      <div className='flex justify-between '>
        <span
          className={`inline-block text-left break-all text-sm w-max max-w-[12rem] border border-solid p-2 ${
            hasLightBg ? 'border-fg/50-light text-fg/100-light' : 'border-fg/50-dark text-fg/100-dark'
          }`}
          style={{ lineHeight: '1.8' }}
          aria-label={`Published on ${platform}`}
        >
          {platform}
        </span>

        <a
          href={url}
          rel='noreferrer'
          target='_blank'
          className={`${
            hasLightBg ? 'text-fg/80-light' : 'text-fg/80-dark'
          } hover:scale-150 focus:outline-none focus:ring-2 focus:ring-fg/60-light dark:focus:ring-fg/60-dark focus:ring-offset-2 rounded`}
          aria-label='Open article in new tab'
          onClick={(e) => e.stopPropagation()}
        >
          <ArrowIcon className='h-8 w-8' aria-hidden='true' />
        </a>
      </div>

      <p className={`text-sm ${hasLightBg ? 'text-fg/80-light' : 'text-fg/80-dark'}`} style={{ lineHeight: '1.8' }}>
        {description}
      </p>
    </a>
  )
}

export default ArticleCardHoverContent
