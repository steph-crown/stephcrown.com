import { SEO } from 'Components'

const NotFound = () => {
  return (
    <>
      <SEO
        title='404 - Page Not Found | Stephen Emmanuel (Steph Crown)'
        description='Page not found on Stephen Emmanuel (Steph Crown) portfolio website.'
        canonicalUrl='https://stephcrown.com/404'
        noIndex={true}
      />
      <main role='main' aria-label='404 page not found'>
        <div>
          <h1 className='h1'>404 - Page Not Found</h1>
          <p className='p'>The page you are looking for does not exist.</p>
        </div>
      </main>
    </>
  )
}

export default NotFound
