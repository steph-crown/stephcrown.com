import { ProjectGridCard, SEO } from 'Components'
import { generateHomepageStructuredData } from 'Components/SEO/StructuredDataGenerator'
import PROJECTS from 'Constants/Projects'

const Home = () => {
  return (
    <>
      <SEO
        title='Stephen Emmanuel (Chukwunonso) - Nigerian Software Engineer, Frontend & Backend Developer | Steph Crown'
        description='Stephen Emmanuel (Chukwunonso), also known as Steph Crown, is a Nigerian software engineer, frontend developer, backend developer, and systems engineer with 5+ years of experience.'
        keywords='Stephen Emmanuel, Steph Crown, Chukwunonso, Nigerian software engineer, React, TypeScript, Next.js, Rust, Elixir, Phoenix, full-stack developer'
        canonicalUrl='https://stephcrown.com'
        structuredData={generateHomepageStructuredData()}
      />
      <main role='main' aria-label='Home page'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5 lg:gap-y-3'>
          {PROJECTS.map((project) => (
            <ProjectGridCard key={`${project.title}-${project.url}`} project={project} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
