const tools = [
  'HTML',
  'CSS',
  'Styled Components',
  'JavaScript',
  'TypeScript',
  'Angular',
  'NgRx',
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
      <h1 className='h1'>Languages, tools, and frameworks</h1>

      <div className='section'>
        <p className='p'>
          Here&apos;s a list of some of the languages, tools, and frameworks I work with. I&apos;m always learning new things and I&apos;m open to new
          ideas and technologies.
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6'>
        {tools.map((tool) => (
          <div
            key={tool}
            className='border border-navborder-light dark:border-navborder-dark p-4 text-center text-fg/100-light dark:text-fg/100-dark hover:bg-bg/5-light dark:hover:bg-bg/5-dark'
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tools
