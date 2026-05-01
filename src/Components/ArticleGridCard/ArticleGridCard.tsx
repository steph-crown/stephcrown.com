import { FC } from 'react'
import { ExternalLink, Clock } from 'lucide-react'
import { ArticleType } from 'Types'

type Props = {
  article: ArticleType
}

const ArticleGridCard: FC<Props> = ({ article }) => {
  return (
    <a
      href={article.url}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`Read ${article.name} (opens in new tab)`}
      className='group portfolio-card-surface flex h-full flex-col rounded-none p-8 text-inherit no-underline outline-offset-2 outline-none focus-visible:ring-2 focus-visible:ring-portfolio-fg focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg'
    >
      <div className='flex flex-1 min-w-0 items-center justify-start gap-3.5 mb-5'>
        <h3 className='text-portfolio-fg font-normal text-base'>{article.name}</h3>
        <span className='flex-shrink-0 text-portfolio-muted transition-colors group-hover:text-portfolio-fg pointer-events-none' aria-hidden>
          <ExternalLink className='w-4 h-4' />
        </span>
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
    </a>
  )
}

export default ArticleGridCard
