import { FC } from 'react'
import { ExternalLink, Clock } from 'lucide-react'
import { ArticleType } from 'Types'

type Props = {
  article: ArticleType
}

const ArticleGridCard: FC<Props> = ({ article }) => {
  const linkIcon = (
    <a
      href={article.url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex-shrink-0 text-portfolio-muted hover:text-portfolio-fg transition-colors focus:outline-none focus:ring-2 focus:ring-portfolio-fg focus:ring-offset-2 focus:ring-offset-portfolio-card rounded'
      aria-label={`Read "${article.name}" in new tab`}
    >
      <ExternalLink className='w-4 h-4' aria-hidden />
    </a>
  )

  return (
    <div className='block'>
      <div className='bg-portfolio-card rounded-none p-8 h-full flex flex-col'>
        <div className='flex flex-1 min-w-0 items-center justify-start gap-3.5 mb-5'>
          <h3 className='text-portfolio-fg font-normal text-base'>{article.name}</h3>
          {linkIcon}
        </div>

        <p className='text-portfolio-muted text-sm leading-[142%] line-clamp-3 flex-1'>{article.description}</p>

        {article.readTimeMinutes != null && (
          <p className='text-[#BEBEBE] text-sm mt-14 flex items-center gap-2'>
            <Clock className='w-4 h-4 flex-shrink-0' aria-hidden />
            <span>
              {article.readTimeMinutes} min{article.readTimeMinutes === 1 ? '' : 's'} read
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

export default ArticleGridCard
