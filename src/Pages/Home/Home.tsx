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
            and enjoy finding clever and simple ways to make things work well for users.
          </p>
        </div>

        <div className='section'>
          <p className='p'>
            I care deeply about what I do. I believe strongly in the saying, &quot;Whatever you do, do it right.&quot; I love learning and enjoy
            knowing a bit or a lot about a wide range of things. I graduated from the Department of Mathematics at the University of Lagos as the best
            graduating student in my department.
          </p>

          <p className='p'>
            Beyond coding and solving analytical problems, I love to enjoy music. I play the keyboard and have a dream to one day play at an
            international concert for an international band. And yes, it&apos;s going to happen.
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
