import { useState } from 'react'
import { SEO } from 'Components'
import { BREADCRUMB_STRUCTURED_DATA } from 'Constants'
import { generatePageStructuredData } from 'Components/SEO/StructuredDataGenerator'

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
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
      alert('Message sent successfully!')
    } catch {
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const breadcrumbData = [
    { name: 'Home', url: 'https://stephcrown.com' },
    { name: 'Contact', url: 'https://stephcrown.com/contact' },
  ]

  const inputClass =
    'w-full px-4 py-3 bg-portfolio-bg border border-portfolio-muted/30 text-portfolio-fg placeholder:text-portfolio-muted/70 text-sm outline-none focus:border-portfolio-muted'

  return (
    <>
      <SEO
        title='Contact Stephen Emmanuel (Chukwunonso) - Nigerian Software Engineer | Steph Crown'
        description='Get in touch with Stephen Emmanuel (Steph Crown), Nigerian software engineer. Available for freelance projects, collaborations, and technical discussions.'
        canonicalUrl='https://stephcrown.com/contact'
        structuredData={[...generatePageStructuredData('contact'), BREADCRUMB_STRUCTURED_DATA(breadcrumbData)]}
      />
      <main role='main' aria-label='Contact page'>
        <div className='bg-portfolio-card rounded-none p-8'>
          <h1 className='text-portfolio-fg font-normal text-2xl tracking-tight mb-2'>Send me a message</h1>
          <p className='text-[#BEBEBE] text-sm leading-[142%] mb-8'>
            Fill the form below and I&apos;ll get back to you as soon as possible. You can also email{' '}
            <a
              href='mailto:emmanuelstephen024@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-portfolio-fg underline hover:opacity-80'
            >
              emmanuelstephen024@gmail.com
            </a>
            .
          </p>

          <form className='flex flex-col gap-6' name='contact' method='post' onSubmit={handleSubmit} aria-label='Contact form'>
            <input type='hidden' name='form-name' value='contact' />

            <div className='flex flex-col gap-2'>
              <label htmlFor='contact-name' className='text-portfolio-fg text-sm'>
                Name
              </label>
              <input
                type='text'
                id='contact-name'
                className={inputClass}
                placeholder='Your name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='contact-email' className='text-portfolio-fg text-sm'>
                Email address
              </label>
              <input
                type='email'
                id='contact-email'
                className={`${inputClass} ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                placeholder='Your email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id='email-error' className='text-red-400 text-xs' role='alert'>
                  {errors.email}
                </span>
              )}
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='contact-message' className='text-portfolio-fg text-sm'>
                Message
              </label>
              <textarea
                id='contact-message'
                className={`${inputClass} min-h-[120px] resize-y ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                placeholder='Your message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <span id='message-error' className='text-red-400 text-xs' role='alert'>
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='self-start bg-portfolio-fg text-portfolio-bg px-6 py-2.5 text-sm font-normal hover:opacity-90 transition-opacity disabled:opacity-60'
              aria-label={isSubmitting ? 'Sending message' : 'Send message'}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

export default Contact
