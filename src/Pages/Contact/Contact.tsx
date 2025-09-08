import { SendIcon } from 'Assets/Svgs'
import { SEO } from 'Components'
import { BREADCRUMB_STRUCTURED_DATA } from 'Constants'

const Contact = () => {
  const breadcrumbData = [
    { name: 'Home', url: 'https://stephcrown.com' },
    { name: 'Contact', url: 'https://stephcrown.com/contact' },
  ]

  return (
    <>
      <SEO
        title='Contact Stephen Emmanuel (Steph Crown) - Software Engineer'
        description='Get in touch with Stephen Emmanuel (Steph Crown), a software engineer and frontend developer. Available for freelance projects, collaborations, and technical discussions. Contact via email or form.'
        keywords='contact Stephen Emmanuel, contact Steph Crown, hire software engineer, freelance developer, React developer contact, TypeScript developer, web development services, software engineering consultation'
        canonicalUrl='https://stephcrown.com/contact'
        structuredData={BREADCRUMB_STRUCTURED_DATA(breadcrumbData)}
      />
      <div>
        <div className='mb-10'>
          <SendIcon className='h-[4.75rem] w-[4.75rem] text-fg/50-light dark:text-fg/50-dark' />

          <article>
            <h1 className='my-2 h1'>
              <span className='h1-alt'>Send me</span>
              <br />a message<span className='h1-alt'>.</span>
            </h1>

            <p className='p'>
              Fill the form below and hit send. I&apos;ll get back to you as soon as possible. As a <strong>software engineer</strong> and{' '}
              <strong>frontend developer</strong>, I&apos;m available for <strong>freelance projects</strong>, <strong>collaborations</strong>, and{' '}
              <strong>technical discussions</strong>. You can also send me an email at{' '}
              <a target='_blank' rel='noreferrer' className='font-MSMediumWide underline' href='mailto:emmanuelstephen024@gmail.com'>
                emmanuelstephen024@gmail.com
              </a>{' '}
            </p>
          </article>
        </div>

        <form className='form' name='contact' method='post'>
          <input type='hidden' name='form-name' value='contact' />
          <div className='flex gap-6 md:gap-10 flex-col lg:flex-row'>
            <label className='label'>
              Name: <input type='text' className='input' placeholder='Enter your name' name='name' />
            </label>

            <label className='label'>
              Email address: <input type='email' className='input' placeholder='Enter your email address' name='email' />
            </label>
          </div>

          <label className='label'>
            Message: <textarea className='input h-32' placeholder='Enter your message' name='message' />
          </label>

          <button className='btn w-max' type='submit'>
            Send <SendIcon />
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact
