import { ProjectCard, SEO } from 'Components'
import { BREADCRUMB_STRUCTURED_DATA } from 'Constants'
import PROJECTS, { PROJECT_STRUCTURED_DATA } from 'Constants/Projects'

const Projects = () => {
  const breadcrumbData = [
    { name: 'Home', url: 'https://stephcrown.com' },
    { name: 'Projects', url: 'https://stephcrown.com/projects' },
  ]

  const combinedStructuredData = [BREADCRUMB_STRUCTURED_DATA(breadcrumbData), ...PROJECT_STRUCTURED_DATA]

  return (
    <>
      <SEO
        title='Software Engineering Projects - Stephen Emmanuel (Steph Crown)'
        description="Explore Stephen Emmanuel's portfolio of software engineering projects including React, TypeScript, Next.js applications, full-stack web development, and modern digital products. View live demos and case studies."
        keywords='Stephen Emmanuel projects, Steph Crown portfolio, React projects, TypeScript projects, Next.js applications, full-stack development, web development projects, software engineering portfolio, frontend projects, JavaScript projects'
        canonicalUrl='https://stephcrown.com/projects'
        structuredData={combinedStructuredData}
      />
      <div>
        <h1 className='h1'>Some of My Projects</h1>

        <div className='section'>
          <p className='p'>
            In my years of experience as a <strong>software engineer</strong> and <strong>frontend developer</strong>, I&apos;ve been privileged to
            work on various <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Next.js</strong> projects in different capacities: as an
            independent contractor, as a member of a team, and as a team lead.
          </p>
        </div>

        <div className='section'>
          <p className='p'>
            Below are some of my <strong>software development projects</strong> showcasing my expertise in modern web technologies.
          </p>
        </div>

        <div className='divider mt-10' />

        <div className='grid gap-0 grid-cols-1'>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={`${project?.title}${project.url}`} project={project} isLast={index === PROJECTS.length - 1} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
