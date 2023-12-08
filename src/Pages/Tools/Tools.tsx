import { ToolIcon } from 'Assets/Svgs'

const Home = () => {
  return (
    <div>
      <div className='mb-10'>
        <ToolIcon className='h-[4.75rem] w-[4.75rem] text-fg/50-light dark:text-fg/50-dark' />

        <article>
          <h1 className='my-2 h1'>
            <span className='h1-alt'>Languages, tools, and frameworks</span>
            <br />I work with<span className='h1-alt'>.</span>
          </h1>

          <p className='p'>
            Here&apos;s a list of some of the languages, tools, and frameworks I work with. I&apos;m always learning new things and I&apos;m open to
            new ideas and technologies.
          </p>
        </article>
      </div>
    </div>
  )
}

export default Home
