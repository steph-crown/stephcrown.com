import { PdfViewer, SEO } from 'Components'
import { BREADCRUMB_STRUCTURED_DATA } from 'Constants'

const Resume = () => {
  const breadcrumbData = [
    { name: 'Home', url: 'https://stephcrown.com' },
    { name: 'Resume', url: 'https://stephcrown.com/resume' },
  ]

  return (
    <>
      <SEO
        title='Resume - Stephen Emmanuel (Chukwunonso) | Steph Crown - Nigerian Software Engineer'
        description='View the resume of Stephen Emmanuel (Chukwunonso), also known as Steph Crown - Nigerian software engineer, frontend developer, backend developer, and systems engineer. Best graduating student from University of Lagos. 5+ years of experience in React, TypeScript, Next.js, Rust, Elixir, Phoenix, and full-stack development.'
        keywords='Stephen Emmanuel resume, Steph Crown resume, Chukwunonso resume, Nigerian software engineer resume, Nigeria developer CV, frontend developer resume, backend developer resume, systems engineer resume, University of Lagos graduate, React developer resume, TypeScript developer CV'
        canonicalUrl='https://stephcrown.com/resume'
        structuredData={BREADCRUMB_STRUCTURED_DATA(breadcrumbData)}
      />
      <main role='main' aria-label='Resume page'>
        <PdfViewer />
      </main>
    </>
  )
}

export default Resume
