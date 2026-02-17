import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Github, Linkedin } from 'lucide-react'
import { Suspense } from 'react'
import { Loader } from 'Components'
import { APP_ROUTES } from 'Constants'
import { Avatar } from 'Assets/Svgs'

const NAV_ITEMS = [
  { label: 'PROJECTS', to: APP_ROUTES.Home },
  { label: 'EXPERIENCE', to: APP_ROUTES.Experience },
  { label: 'ARTICLES', to: APP_ROUTES.Articles },
  { label: 'RESUME', to: APP_ROUTES.Resume },
  { label: 'EMAIL', to: APP_ROUTES.Contact },
]

/* eslint-disable-next-line @typescript-eslint/quotes, quotes, prettier/prettier */
const BIO = "I'm a software engineer with over 5 years of experience. I love building cool and useful digital products and finding simple ways to make things work well for users."

const PortfolioLayout = () => {
  const location = useLocation()

  return (
    <div className='min-h-screen w-full bg-portfolio-bg'>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-portfolio-card focus:text-portfolio-fg focus:border-2 focus:border-portfolio-fg focus:rounded focus:outline-none'
        aria-label='Skip to main content'
      >
        Skip to main content
      </a>

      <div className='max-w-5xl mx-auto px-6 pt-10 pb-6'>
        {/* Hero */}
        <header className='flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10'>
          <div className='flex-1 min-w-0'>
            <p className='text-portfolio-muted text-sm md:text-base mb-1'>Hi, I&apos;m</p>
            <h1 className='text-portfolio-fg text-2xl md:text-3xl font-semibold tracking-tight mb-4'>Stephen Emmanuel</h1>
            <p className='text-portfolio-muted text-sm md:text-base leading-relaxed max-w-xl mb-6' style={{ lineHeight: 1.7 }}>
              {BIO}
            </p>
            <div className='flex items-center gap-6'>
              <a
                href='https://github.com/steph-crown'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-portfolio-fg hover:opacity-80 transition-opacity'
                aria-label='GitHub'
              >
                <Github className='w-5 h-5' aria-hidden />
                <span className='text-sm'>github.com/steph-crown</span>
              </a>
              <a
                href='https://linkedin.com/in/stephcrown'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-portfolio-fg hover:opacity-80 transition-opacity'
                aria-label='LinkedIn'
              >
                <Linkedin className='w-5 h-5' aria-hidden />
                <span className='text-sm'>linkedin.com/in/stephcrown</span>
              </a>
            </div>
          </div>
          <div className='flex-shrink-0'>
            <Avatar className='w-32 h-32 md:w-40 md:h-40 rounded-full object-cover' aria-hidden />
          </div>
        </header>

        {/* Nav tabs */}
        <nav
          className='flex flex-wrap items-center gap-6 md:gap-8 border-b border-portfolio-muted/30 pb-4 mb-8'
          role='navigation'
          aria-label='Main navigation'
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.to === APP_ROUTES.Home ? location.pathname === '/' : location.pathname === item.to
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={`text-sm uppercase tracking-wide transition-colors ${
                  isActive ? 'text-portfolio-fg font-semibold' : 'text-portfolio-muted hover:text-portfolio-fg'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        {/* Page content */}
        <main id='main-content' className='min-h-[40vh]' tabIndex={-1}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

export default PortfolioLayout
