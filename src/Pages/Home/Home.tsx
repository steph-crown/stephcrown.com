import { APP_ROUTES } from 'Constants'
import { Link } from 'react-router-dom'
import { SEO } from 'Components'
import { generateHomepageStructuredData } from 'Components/SEO/StructuredDataGenerator'

const Home = () => {
  return (
    <>
      <SEO
        title='Stephen Emmanuel (Chukwunonso) - Nigerian Software Engineer, Frontend & Backend Developer | Steph Crown'
        description='Stephen Emmanuel (Chukwunonso), also known as Steph Crown, is a Nigerian software engineer, frontend developer, backend developer, and systems engineer with 5+ years of experience. Best graduating student from University of Lagos Department of Mathematics. Expert in React, TypeScript, Next.js, Rust, Elixir, Phoenix, Node.js, and full-stack development. Available for freelance projects.'
        keywords='Stephen Emmanuel, Steph Crown, Chukwunonso, Stephen Chukwunonso Emmanuel, Nigerian software engineer, Nigeria developer, frontend developer Nigeria, backend developer Nigeria, systems engineer Nigeria, University of Lagos, UNILAG, best graduating student, React developer, TypeScript developer, Rust developer, Elixir developer, Phoenix developer, Next.js developer, Node.js developer, full-stack developer, software engineering, web development, React, TypeScript, JavaScript, Next.js, Rust, Elixir, Phoenix, Angular, Node.js, PostgreSQL, MongoDB, frontend, backend, systems, freelance developer, software engineer portfolio, Nigeria software engineer, Lagos developer, Nigerian frontend developer, Nigerian backend developer'
        canonicalUrl='https://stephcrown.com'
        structuredData={generateHomepageStructuredData()}
      />
      <main className='h-full flex flex-col justify-between' role='main' aria-label='Home page'>
        <div>
          <h1 className='h1'>Hey there, I am Stephen Emmanuel.</h1>
          <p className='subtitle'>
            Also known as <span className='text-fg/100-light dark:text-fg/100-dark'>Steph Crown</span>
          </p>

          <div className='section'>
            <p className='p'>
              I&apos;m a software engineer with over 5 years of experience. I love building cool and useful digital products. I&apos;m a
              problem-solver and enjoy finding clever and simple ways to make things work well for users.
            </p>
          </div>

          <div className='section'>
            {/* <p className='p'>
              I care deeply about what I do. I believe strongly in the saying, &quot;Whatever you do, do it right.&quot; I love learning and enjoy
              knowing a bit or a lot about a wide range of things. I graduated from the Department of Mathematics at the University of Lagos as the
              best graduating student in my department.
            </p> */}

            <p className='p'>
              Beyond coding and solving analytical problems, I love to enjoy music. I play the keyboard and have a dream to one day play at an
              international concert for an international band. And yes, it&apos;s going to happen.
            </p>

            <p className='p'>:D</p>
          </div>

          <nav className='navigation' aria-label='Home page navigation'>
            <Link to={APP_ROUTES.Projects} className='btn' aria-label='View projects page'>
              View Projects
            </Link>
            <Link to={APP_ROUTES.Contact} className='btn-contact' aria-label='Go to contact page'>
              Contact
            </Link>
          </nav>
        </div>
      </main>
    </>
  )
}

export default Home
