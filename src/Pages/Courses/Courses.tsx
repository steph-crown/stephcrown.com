import { ArrowIcon, EducativeIoIcon } from 'Assets/Svgs'

import { EducativeFormikCourse } from 'Assets/Pngs'
import { HoverCard } from 'Components'

const Courses = () => {
  return (
    <div>
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
    </div>
  )
}

export default Courses
