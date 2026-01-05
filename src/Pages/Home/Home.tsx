import { APP_ROUTES } from 'Constants'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-full flex flex-col justify-between'>
      <div>
        <h1 className='h1'>Hey there, I am Stephen Emmanuel.</h1>
        <p className='subtitle'>
          Also known as <span className='text-fg/100-light dark:text-fg/100-dark'>Steph Crown</span>
        </p>

        <div className='section'>
          <p className='p'>
            I&apos;m a software engineer with over 5 years of experience. I love building cool and useful digital products. I&apos;m a problem-solver
            and enjoy finding clever and simple ways to make things work well for users. I can work on all parts of a software project, from the user
            interface to the inner workings. My goal is to create well-built systems that people love to use.
          </p>
        </div>

        <div className='section'>
          <p className='p'>
            I&apos;m always learning new things, and I&apos;m especially interested in machine learning, artificial intelligence, and the Internet of
            Things.
          </p>
        </div>

        <div className='navigation'>
          <Link to={APP_ROUTES.Projects} className='btn'>
            View Projects
          </Link>
          <Link to={APP_ROUTES.Contact} className='btn-contact'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
