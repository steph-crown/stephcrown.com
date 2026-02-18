import { FC } from 'react'
import { ExperienceType } from 'Types'

type Props = {
  experience: ExperienceType
}

const ExperienceCard: FC<Props> = ({ experience }) => {
  const { role, startDate, endDate, description, technologies, highlights } = experience
  const dateRange = `${startDate} - ${endDate}`

  return (
    <article className='bg-portfolio-card rounded-none p-8 h-full flex flex-col' aria-label={`${role} at ${experience.company}`}>
      <div className='flex gap-6 md:gap-10'>
        <div className='flex-shrink-0 w-24 md:w-28'>
          <p className='text-portfolio-muted text-sm'>{dateRange}</p>
        </div>
        <div className='flex-1 min-w-0'>
          <h3 className='text-portfolio-fg font-semibold text-base md:text-lg mb-2'>{role}</h3>
          {highlights && highlights.length > 0 ? (
            <ul className='list-disc list-inside text-[#BEBEBE] text-sm leading-[142%] mb-3 space-y-1'>
              {highlights.map((highlight, index) => (
                <li key={`${experience.company}-${index}`}>{highlight}</li>
              ))}
            </ul>
          ) : (
            <p className='text-[#BEBEBE] text-sm leading-[142%] mb-3'>{description}</p>
          )}
          {technologies && <p className='text-[#BEBEBE] text-sm'>{technologies}</p>}
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
