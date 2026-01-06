import { ProjectCard, SEO } from 'Components'
import { BREADCRUMB_STRUCTURED_DATA } from 'Constants'
import PROJECTS, { PROJECT_STRUCTURED_DATA } from 'Constants/Projects'
import { generatePageStructuredData } from 'Components/SEO/StructuredDataGenerator'

const Projects = () => {
  const breadcrumbData = [
    { name: 'Home', url: 'https://stephcrown.com' },
    { name: 'Projects', url: 'https://stephcrown.com/projects' },
  ]

  const combinedStructuredData = [...generatePageStructuredData('projects'), BREADCRUMB_STRUCTURED_DATA(breadcrumbData), ...PROJECT_STRUCTURED_DATA]

  return (
    <>
      <SEO
        title='Software Engineering Projects - Stephen Emmanuel (Chukwunonso) | Steph Crown'
        description="Explore Stephen Emmanuel's (Chukwunonso) portfolio of software engineering projects. Nigerian software engineer showcasing React, TypeScript, Next.js, Rust, Elixir, Phoenix, Node.js applications, full-stack web development, and modern digital products. View live demos and case studies."
        keywords='Stephen Emmanuel projects, Steph Crown portfolio, Chukwunonso projects, Nigerian software engineer projects, React projects, TypeScript projects, Next.js applications, Rust projects, Elixir projects, Phoenix projects, full-stack development, web development projects, software engineering portfolio, frontend projects, backend projects, systems projects, JavaScript projects, Nigeria developer projects'
        canonicalUrl='https://stephcrown.com/projects'
        structuredData={combinedStructuredData}
      />
      <main role='main' aria-label='Projects page'>
        <h1 className='h1'>Some of My Projects</h1>

        <div className='section'>
          <p className='p'>Below are some of the software/ systems projects I&apos;ve built and participated in.</p>
        </div>

        <div className='divider mt-10' />

        <div className='grid gap-0 grid-cols-1'>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={`${project?.title}${project.url}`} project={project} isLast={index === PROJECTS.length - 1} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Projects
