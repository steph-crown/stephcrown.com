import { ArrowIcon, CourseIcon, EducativeIoIcon } from 'Assets/Svgs'

import { EducativeFormikCourse } from 'Assets/Pngs'
import { HoverCard } from 'Components'

const Courses = () => {
  return (
    <div>
      <div className='mb-10'>
        <CourseIcon className='h-[4.75rem] w-[4.75rem] text-fg/50-light dark:text-fg/50-dark' />

        <article>
          <h1 className='my-2 h1'>
            <span className='h1-alt'>Explore my interactive, </span>
            <br />
            text-based courses<span className='h1-alt'>.</span>
          </h1>

          <p className='p'>
            Alongside my technical expertise, I have developed and published several interactive text-based courses on{' '}
            <a href='https://www.educative.io/' className=' underline inline-flex items-end gap-x-2' target='_blank' rel='noreferrer'>
              <EducativeIoIcon />
              <span className='font-MSMediumWide'>Educative.io</span>
            </a>{' '}
          </p>

          <p className='p'>View some of the courses below.</p>
        </article>
      </div>

      <section className='flex justify-between flex-wrap gap-y-10' aria-details='Stephen Social media links'>
        <HoverCard
          bgImage={EducativeFormikCourse}
          label='Writing React Forms Like a Pro with Formik'
          hoverContent={
            <div className='p-6 flex flex-col h-full justify-between'>
              <div className='flex justify-between '>
                <span className='inline-block text-left break-all font-MSMediumWide text-sm leading-[160%] text-fg/100-dark rounded-[4px] w-max max-w-[12rem] border-fg/50-dark border border-solid p-2'>
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

              <p className='font-MSMediumWide text-sm text-fg/80-dark'>
                Learn how to create robust and scalable forms in React using Formik, manage form states, handle form submissions, and validate user
                input
              </p>
            </div>
          }
        />
      </section>

      <p className='text-center mt-40 text-fg/40-light dark:text-fg/40-dark'>You&apos;re all caught up :{')'}</p>
    </div>
  )
}

export default Courses
