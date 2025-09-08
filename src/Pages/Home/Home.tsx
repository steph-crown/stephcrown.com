import { APP_ROUTES, PERSON_STRUCTURED_DATA, WEBSITE_STRUCTURED_DATA, ORGANIZATION_STRUCTURED_DATA } from 'Constants'
import { ArrowRightIcon, ProjectIcon } from 'Assets/Svgs'
import { ImageHoverSwitch, SEO } from 'Components'
import { Link } from 'react-router-dom'
import { PersonViewingMicroscope } from 'Assets/Pngs'

const Home = () => {
  const visualMetaphorAlt = 'Visual metaphor: Examining details closely like a detective scrutinizing evidence in a case'

  // Combine all structured data
  const combinedStructuredData = [PERSON_STRUCTURED_DATA, WEBSITE_STRUCTURED_DATA, ORGANIZATION_STRUCTURED_DATA]

  return (
    <>
      <SEO
        title='Stephen Emmanuel (Steph Crown) - Software Engineer & Frontend Developer'
        description='Stephen Emmanuel (Steph Crown) is a skilled software engineer with 5+ years of experience building modern web applications. Expert in React, TypeScript, Next.js, and full-stack development. View portfolio, projects, and technical articles.'
        keywords='Stephen Emmanuel, Steph Crown, software engineer, frontend developer, React developer, TypeScript, Next.js, full-stack developer, web developer, JavaScript, portfolio, projects, technical articles, software development, UI/UX, modern web applications, machine learning, AI, IoT'
        canonicalUrl='https://stephcrown.com'
        structuredData={combinedStructuredData}
      />
      <div className='h-full flex-col justify-between flex'>
        <div className='mb-10'>
          <h1 className='h1'>{'</>'}</h1>

          <article className='max-w-[757px]'>
            <h1 className='my-2 h1' data-aos='fade-up'>
              <span className='h1-alt'>Hey there, I am</span>
              <br />
              Stephen Emmanuel<span className='h1-alt'>.</span>
            </h1>

            <p className='font-MSXenonMediumItalic text-sm text-fg/40-light dark:text-fg/40-dark'>
              {'{/*'} also known as <span className='text-fg/60-light dark:text-fg/60-dark font-MSXenonMediumItalic'>Steph Crown</span> {'*/}'}
            </p>

            <p className='p' data-aos='fade-up'>
              I&apos;m a <strong>software engineer</strong> and <strong>frontend developer</strong> with over 5 years of experience building modern
              web applications. I specialize in <strong>React</strong>, <strong>TypeScript</strong>, <strong>Next.js</strong>, and full-stack
              development. I love creating cool and useful digital products that solve real-world problems. As a problem-solver, I enjoy finding
              clever and simple ways to make things work well for users. I can work on all parts of a software project, from the user interface to the
              backend systems. My goal is to create well-built, scalable applications that people love to use. I&apos;m always learning new
              technologies and am especially passionate about <strong>machine learning</strong>,<strong>artificial intelligence</strong>, and the{' '}
              <strong>Internet of Things</strong>.
            </p>
          </article>

          <div className='flex flex-col sm:flex-row gap-4 mt-8'>
            <Link
              to={APP_ROUTES.Projects}
              className='px-8 py-4 rounded-lg flex items-center justify-center gap-2 bg-fg/100-light dark:bg-fg/100-dark text-bg/100-light dark:text-bg/100-dark border-fg/100-light dark:border-fg/100-dark border-solid border-[1px] text-sm w-full sm:w-max'
            >
              View Projects <ProjectIcon />
            </Link>

            <Link to={APP_ROUTES.Contact} className='btn w-full sm:w-max'>
              Send a message <ArrowRightIcon />
            </Link>
          </div>
        </div>

        <div className='tooltip'>
          <ImageHoverSwitch imgSrc={PersonViewingMicroscope} alt={visualMetaphorAlt} />

          <p className='tooltip-content p'>{visualMetaphorAlt}</p>
        </div>
      </div>
    </>
  )
}

export default Home
