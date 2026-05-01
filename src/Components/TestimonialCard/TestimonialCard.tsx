import { FC } from 'react'
import type { TestimonialType } from 'Types'

type Props = {
  testimonial: TestimonialType
}

const TestimonialCard: FC<Props> = ({ testimonial }) => {
  const { name, role, quote, avatarUrl } = testimonial

  return (
    <article className='portfolio-card-surface rounded-none p-8 flex flex-col gap-5 h-full'>
      <div className='flex gap-4'>
        <img
          src={avatarUrl}
          alt=''
          width={48}
          height={48}
          loading='lazy'
          decoding='async'
          referrerPolicy='no-referrer'
          className='w-12 h-12 rounded-full object-cover shrink-0 ring-1 ring-portfolio-muted/25'
        />
        <div className='min-w-0 flex-1'>
          <h3 className='text-portfolio-fg font-medium text-sm tracking-tight'>{name}</h3>
          <p className='text-portfolio-muted text-xs mt-0.5 leading-snug'>{role}</p>
        </div>
      </div>
      <blockquote className='text-[#BEBEBE] text-sm leading-relaxed border-l-2 border-portfolio-muted/40 pl-4 m-0'>
        <p className='line-clamp-[10]'>{quote}</p>
      </blockquote>
    </article>
  )
}

export default TestimonialCard
