import { APP_ROUTES } from 'Constants'
import { ArrowRightIcon } from 'Assets/Svgs'
import { ImageHoverSwitch } from 'Components'
import Jeyi from 'Components/Jeyi'
import { Link } from 'react-router-dom'
import { PersonViewingMicroscope } from 'Assets/Pngs'

const Home = () => {
  const visualMetaphorAlt = 'Visual metaphor: Examining details closely like a detective scrutinizing evidence in a case'

  return (
    <div className='h-full flex-col justify-between flex'>
      <div className='mb-10'>
        <h1 className='h1'>{'</>'}</h1>

        <article className='max-w-[757px]'>
          <h1 className='my-2 h1' data-aos='fade-up'>
            <span className='h1-alt'>Hey there, I am</span>
            <br />
            Stephen Emmanuel<span className='h1-alt'>.</span>
          </h1>
          {/*  */}

          <p className='font-MSXenonMediumItalic text-sm text-fg/40-light dark:text-fg/40-dark'>
            {'{/*'} also known as <span className='text-fg/60-light dark:text-fg/60-dark font-MSXenonMediumItalic'>Steph Crown</span> {'*/}'}
          </p>

          <p className='p' data-aos='fade-up'>
            I&apos;m a software engineer with the keen instincts of <span className='font-MSMediumWide'>🔎 Sherlock Holmes 🔎</span>. I scrutinize the
            digital landscape with the precision of a detective. I craft intuitive user interfaces and solve complex challenges, approaching each
            project as a captivating mystery to unravel. My mission is to create beautiful digital experiences that leave no enigma unsolved.
          </p>

          <p className='p'>I write articles, text-based courses, and build software applications.</p>
        </article>

        <Link to={APP_ROUTES.Contact} className='btn w-max'>
          Send a message <ArrowRightIcon />
        </Link>
      </div>

      <div className='tooltip'>
        <ImageHoverSwitch imgSrc={PersonViewingMicroscope} alt={visualMetaphorAlt} />

        <p className='tooltip-content p'>{visualMetaphorAlt}</p>
      </div>

      <Jeyi />
    </div>
  )
}

export default Home
