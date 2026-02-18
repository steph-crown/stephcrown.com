import { ExperienceCard, SEO } from 'Components'
import EXPERIENCE from 'Constants/Experience'

const Experience = () => {
  return (
    <>
      <SEO
        title='Work - Stephen Emmanuel | Steph Crown'
        description='Work history of Stephen Emmanuel (Steph Crown). Frontend and full-stack roles at Moniepoint, SyncSkills, NextBasket, Revent Technologies, and more.'
        canonicalUrl='https://stephcrown.com/work'
      />
      <main role='main' aria-label='Work'>
        <div className='grid grid-cols-1 gap-y-5'>
          {EXPERIENCE.map((job) => (
            <ExperienceCard key={`${job.company}-${job.startDate}`} experience={job} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Experience
