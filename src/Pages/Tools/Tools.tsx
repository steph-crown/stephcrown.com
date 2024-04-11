import { ToolIcon } from 'Assets/Svgs'

const tools = [
  'HTML',
  'CSS',
  'Styled Components',
  'JavaScript',
  'TypeScript',
  'Angular',
  'React.js',
  'Redux',
  'Redux Toolkit',
  'Formik',
  'React Hook Form',
  'Next.js',
  'Jest',
  'React Testing Library',
  'TailwindCSS',
  'ChakraUI',
  'Storybook',
  'Material UI',
  'D3.js',
  'jQuery',
  'Axios',
  'PWA',
  'Yup',
  'GSAP',
  'GraphQL',
  'Webpack',
  'Babel',
  'Lighthouse',
  'Web Components',
  'Stencil.js',
  'Elixir',
  'OTP',
  'Phoenix',
  'Phoenix LiveView',
  'PostgreSQL',
  'Ecto',
  'Mix',
  'ExUnit',
  'Node.js',
  'Python',
  'Bash',
  'Docker',
  'Git',
  'GitHub',
  'GitHub Actions',
  'GitHub Workflows',
  'NPM',
  'VS Code',
  'Figma',
  'ESLint',
  'Notion',
  'Jira',
  'Markdown',
  'ClojureScript',
  'GraphQL',
]

const Tools = () => {
  return (
    <div>
      <div className='mb-10'>
        <ToolIcon className='h-[4.75rem] w-[4.75rem] text-fg/50-light dark:text-fg/50-dark' />

        {/* <p className='text-fg/100-light dark:text-fg/100-dark font-MSMediumWide'>Undergoing Construction ..</p> */}
        <article>
          <h1 className='my-2 h1'>
            <span className='h1-alt'>Languages, tools, </span>
            <br />
            and frameworks<span className='h1-alt'>.</span>
          </h1>

          <p className='p'>
            Here&apos;s a list of some of the languages, tools, and frameworks I work with. I&apos;m always learning new things and I&apos;m open to
            new ideas and technologies.
          </p>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4'>
            {/* Map through the 'tools' array to render each tool */}
            {tools.map((tool, index) => (
              <div
                key={tool}
                className='bg-bg/5-light dark:bg-bg/5-dark p-4 rounded-md text-center
                       text-fg/80-light dark:text-fg/80-dark hover:bg-gray-200 dark:hover:bg-gray-700'
              >
                {tool}
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}

export default Tools
