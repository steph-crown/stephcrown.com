import { useState } from 'react'
import { SEO } from 'Components'
import { BREADCRUMB_STRUCTURED_DATA } from 'Constants'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  email?: string
  message?: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a submission
      console.log('Form submitted:', formData)

      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' })
      setErrors({})

      // You might want to show a success message here
      alert('Message sent successfully!')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const breadcrumbData = [
    { name: 'Home', url: 'https://stephcrown.com' },
    { name: 'Contact', url: 'https://stephcrown.com/contact' },
  ]

  return (
    <>
      <SEO
        title='Contact Stephen Emmanuel (Chukwunonso) - Nigerian Software Engineer | Steph Crown'
        description='Get in touch with Stephen Emmanuel (Chukwunonso), also known as Steph Crown, a Nigerian software engineer, frontend developer, backend developer, and systems engineer. Available for freelance projects, collaborations, and technical discussions. Contact via email or form.'
        keywords='contact Stephen Emmanuel, contact Steph Crown, contact Chukwunonso, hire Nigerian software engineer, freelance developer Nigeria, React developer contact, TypeScript developer, web development services, software engineering consultation, Nigeria developer contact'
        canonicalUrl='https://stephcrown.com/contact'
        structuredData={BREADCRUMB_STRUCTURED_DATA(breadcrumbData)}
      />
      <main role='main' aria-label='Contact page'>
        <h1 className='h1'>Send me a message</h1>

        <div className='section'>
          <p className='p'>
            Fill the form below and hit send. I&apos;ll get back to you as soon as possible. As a <strong>software engineer</strong> and{' '}
            <strong>frontend developer</strong>, I&apos;m available for <strong>freelance projects</strong>, <strong>collaborations</strong>, and{' '}
            <strong>technical discussions</strong>. You can also send me an email at{' '}
            <a target='_blank' rel='noreferrer' className='a' href='mailto:emmanuelstephen024@gmail.com'>
              emmanuelstephen024@gmail.com
            </a>
          </p>
        </div>

        <form className='form' name='contact' method='post' onSubmit={handleSubmit} aria-label='Contact form'>
          <input type='hidden' name='form-name' value='contact' />
          <div className='flex gap-6 md:gap-10 flex-col lg:flex-row'>
            <label className='label' htmlFor='contact-name'>
              Name:{' '}
              <input
                type='text'
                id='contact-name'
                className='input'
                placeholder='Enter your name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                aria-required='false'
                aria-invalid='false'
              />
            </label>

            <div className='label'>
              <label htmlFor='contact-email'>Email address:</label>
              <input
                type='email'
                id='contact-email'
                className={`input ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                placeholder='Enter your email address'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                aria-required='true'
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id='email-error' className='text-red-500 text-sm mt-1 block' role='alert'>
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className='label'>
            <label htmlFor='contact-message'>Message:</label>
            <textarea
              id='contact-message'
              className={`input h-32 ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
              placeholder='Enter your message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              aria-required='true'
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span id='message-error' className='text-red-500 text-sm mt-1 block' role='alert'>
                {errors.message}
              </span>
            )}
          </div>

          <div className='navigation'>
            <button className='btn' type='submit' disabled={isSubmitting} aria-label={isSubmitting ? 'Sending message' : 'Send message'}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Contact
