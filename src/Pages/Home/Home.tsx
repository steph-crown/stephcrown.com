import { ArrowRightIcon } from 'Assets/Svgs'
import { ImageHoverSwitch } from 'Components'
import { PersonViewingMicroscope } from 'Assets/Pngs'

const Home = () => {
  return (
    <div className='h-full flex-col justify-between flex'>
      <div>
        <p className='text-fg/20-light dark:text-fg/20-dark font-MSMedium text-5xl'>{'</>'}</p>

        <article className='max-w-[757px]'>
          <h2 className='font-MSMediumWide my-2 text-fg/100-light dark:text-fg/100-dark text-5xl leading-[160%]'>
            <span className='font-MSMediumWide text-fg/50-light dark:text-fg/50-dark'>Hey There, I am</span>
            <br />
            Stephen Emmanuel<span className='font-MSMediumWide text-fg/50-light dark:text-fg/50-dark'>.</span>
          </h2>
          {/*  */}

          <p className='font-MSMediumItalic text-sm text-fg/40-light dark:text-fg/40-dark'>
            {'{/*'} also known as <span className='text-fg/60-light dark:text-fg/60-dark font-MSMediumItalic'>Steph Crown</span> {'*/}'}
          </p>

          <p className='p'>
            I&apos;m a software engineer with the keen instincts of <span className='font-MSMediumWide'>🔎 Sherlock Holmes 🔎</span>. I scrutinize the
            digital landscape with the precision of a detective. I craft intuitive user interfaces and solve complex challenges, approaching each
            project as a captivating mystery to unravel. My mission is to create beautiful digital experiences that leave no enigma unsolved.
          </p>

          <p className='p'>I write articles, text-based courses, and build software applications.</p>
        </article>

        <button className='btn'>
          Send a message <ArrowRightIcon />
        </button>
      </div>

      <ImageHoverSwitch imgSrc={PersonViewingMicroscope} />
    </div>
  )
}

export default Home
