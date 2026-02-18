import { ExperienceCard, SEO } from 'Components'
import EXPERIENCE from 'Constants/Experience'

const Experience = () => {
  return (
    <>
      <SEO
        title='Experience - Stephen Emmanuel | Steph Crown'
        description='Professional experience and career history of Stephen Emmanuel (Steph Crown), Nigerian software engineer. Frontend and full-stack roles at Moniepoint, SyncSkills, NextBasket, Revent Technologies, and more.'
        canonicalUrl='https://stephcrown.com/experience'
      />
      <main role='main' aria-label='Experience page'>
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
