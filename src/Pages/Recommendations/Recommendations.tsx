import { SEO, TestimonialCard } from 'Components'
import TESTIMONIALS from 'Constants/Testimonials'

const Recommendations = () => {
  return (
    <>
      <SEO
        title='Recommendations - Stephen Emmanuel | Steph Crown'
        description='What colleagues say about working with Stephen Emmanuel (Steph Crown). LinkedIn recommendations from product, engineering, and leadership.'
        canonicalUrl='https://stephcrown.com/recommendations'
      />
      <main role='main' aria-label='Recommendations'>
        <div className='mb-8 md:mb-10'>
          <h1 className='text-portfolio-fg text-lg font-normal tracking-tight'>Recommendations</h1>
          <p className='text-portfolio-muted text-xs uppercase tracking-[0.08em] mt-2'>From colleagues</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5 md:gap-y-3'>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={`${t.name}-${t.avatarUrl}`} testimonial={t} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Recommendations
