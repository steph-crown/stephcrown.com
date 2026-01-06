import { ArrowIcon, EducativeIoIcon } from 'Assets/Svgs'

import { EducativeFormikCourse } from 'Assets/Pngs'
import { HoverCard, SEO } from 'Components'
import { BREADCRUMB_STRUCTURED_DATA } from 'Constants'

const Courses = () => {
  const breadcrumbData = [
    { name: 'Home', url: 'https://stephcrown.com' },
    { name: 'Courses', url: 'https://stephcrown.com/courses' },
  ]

  return (
    <>
      <SEO
        title='Interactive Courses - Stephen Emmanuel (Chukwunonso) | Steph Crown'
        description='Explore interactive text-based courses by Stephen Emmanuel (Chukwunonso), also known as Steph Crown. Nigerian software engineer teaching React, Formik, and modern web development on Educative.io.'
        keywords='Stephen Emmanuel courses, Steph Crown courses, Chukwunonso courses, React courses, Formik courses, Educative.io courses, Nigerian software engineer courses, web development courses, React forms tutorial'
        canonicalUrl='https://stephcrown.com/courses'
        structuredData={BREADCRUMB_STRUCTURED_DATA(breadcrumbData)}
      />
      <main role='main' aria-label='Courses page'>
        <h1 className='h1'>Explore my Interactive, Text-Based Courses</h1>

        <div className='section'>
          <p className='p'>
            Alongside my technical expertise, I have developed and published several interactive text-based courses on{' '}
            <a href='https://www.educative.io/' className='a inline-flex items-end gap-x-2' target='_blank' rel='noreferrer'>
              <EducativeIoIcon />
              <span>Educative.io</span>
            </a>
          </p>
        </div>

        <div className='section'>
          <p className='p'>View some of the courses below.</p>
        </div>

        <section className='flex justify-between flex-wrap gap-y-6 mt-10' aria-details='Stephen Courses'>
          <HoverCard
            bgImage={EducativeFormikCourse}
            label='Writing React Forms Like a Pro with Formik'
            hoverContent={
              <div className='p-6 flex flex-col h-full justify-between'>
                <div className='flex justify-between '>
                  <span
                    className='inline-block text-left break-all text-sm text-fg/100-dark rounded-[4px] w-max max-w-[12rem] border-fg/50-dark border border-solid p-2'
                    style={{ lineHeight: '1.8' }}
                  >
                    33 Lessons, <br />
                    Beginner, <br />
                    10h
                  </span>

                  <a
                    href={'https://www.educative.io/courses/writing-react-forms-like-a-pro-with-formik'}
                    rel='noreferrer'
                    target='_blank'
                    className='text-fg/80-dark hover:scale-150'
                  >
                    <ArrowIcon className='h-8 w-8' />
                  </a>
                </div>

                <p className='text-sm text-fg/80-dark' style={{ lineHeight: '1.8' }}>
                  Learn how to create robust and scalable forms in React using Formik, manage form states, handle form submissions, and validate user
                  input
                </p>
              </div>
            }
          />
        </section>

        <p className='text-center mt-20 text-fg/60-light dark:text-fg/60-dark italic'>You&apos;re all caught up :{')'}</p>
      </main>
    </>
  )
}

export default Courses
