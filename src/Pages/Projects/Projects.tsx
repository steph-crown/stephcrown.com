import { ProjectIcon } from 'Assets/Svgs'

const Projects = () => {
  return (
    <div>
      <div className='mb-10'>
        <ProjectIcon className='h-[4.75rem] w-[4.75rem] text-fg/50-light dark:text-fg/50-dark' />

        <article>
          <h1 className='my-2 h1'>
            <span className='h1-alt'>Check Out My </span>
            <br />
            Projects<span className='h1-alt'>.</span>
          </h1>

          <p className='p'>
            In my years of experience, I’ve been privileged to work on various projects in different capacities: as an independent contractor, as a
            member of a team, and as a team lead.
          </p>

          <p className='p'>I&apos;ve listed some of the projects below.</p>
        </article>
      </div>
    </div>
  )
}

export default Projects
