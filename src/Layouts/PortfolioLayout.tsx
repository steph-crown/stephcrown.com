import { Avatar } from 'Assets/Svgs'
import { Loader } from 'Components'
import { APP_ROUTES } from 'Constants'
import { Suspense } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'PROJECTS', to: APP_ROUTES.Home },
  { label: 'ARTICLES', to: APP_ROUTES.Articles },
  { label: 'RESUME', to: APP_ROUTES.Resume },
  // { label: 'CONTACT', to: APP_ROUTES.Contact },
  { label: 'EMAIL', href: 'mailto:emmanuelstephen024@gmail.com' },
]

/* eslint-disable-next-line @typescript-eslint/quotes, quotes, prettier/prettier */
const BIO =
  'I am a software engineer with over 5 years of experience. I love building cool and useful digital products and finding simple ways to make things work well for people.'

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

      <div className='max-w-[688px] mx-auto px-6 pt-10 md:pt-[72px] pb-6'>
        {/* Hero: mobile = avatar on top, all centered; desktop = text left, avatar right */}
        <header className='flex flex-col items-center text-center md:flex-row md:items-start md:justify-between md:text-left gap-8 mb-12 md:mb-[52px]'>
          <div className='order-2 flex flex-col items-center text-center md:order-1 md:flex-1 md:min-w-0 md:items-start md:text-left'>
            <h1 className='text-portfolio-fg text-4xl font-normal tracking-tight mb-5'>
              <span className='text-portfolio-muted'>Hi, I&apos;m</span> Stephen Emmanuel
            </h1>

            <p className='text-[#888] text-sm leading-relaxed max-w-xl mb-5 font-normal' style={{ lineHeight: 1.7 }}>
              {BIO}
            </p>

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-6 md:justify-start'>
              <a
                href='https://github.com/steph-crown'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-portfolio-fg hover:opacity-80 transition-opacity'
                aria-label='GitHub'
              >
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden className='size-4'>
                  <path
                    d='M7.99994 1.4978C6.41692 1.49787 4.88558 2.06121 3.67991 3.08703C2.47425 4.11286 1.67294 5.53422 1.41936 7.09679C1.16578 8.65937 1.47648 10.2612 2.29587 11.6156C3.11526 12.9701 4.38986 13.9888 5.89162 14.4895C6.22495 14.5478 6.34995 14.3478 6.34995 14.1728C6.34995 14.0145 6.34161 13.4895 6.34161 12.9311C4.6666 13.2395 4.23327 12.5228 4.09994 12.1478C3.95199 11.7831 3.71745 11.4599 3.4166 11.2061C3.18327 11.0811 2.84994 10.7728 3.40826 10.7645C3.62146 10.7876 3.82593 10.8618 4.00436 10.9807C4.18279 11.0997 4.32991 11.2599 4.43327 11.4478C4.52445 11.6116 4.64706 11.7558 4.79406 11.8721C4.94107 11.9885 5.10959 12.0746 5.28996 12.1257C5.47033 12.1768 5.65901 12.1918 5.84519 12.1699C6.03137 12.1479 6.21138 12.0894 6.37492 11.9978C6.40378 11.6589 6.55483 11.342 6.79994 11.1062C5.3166 10.9395 3.7666 10.3645 3.7666 7.81449C3.75724 7.15192 4.00173 6.51087 4.44994 6.02282C4.24612 5.44697 4.26997 4.81501 4.5166 4.25616C4.5166 4.25616 5.07492 4.08115 6.34994 4.93949C7.4408 4.63947 8.59241 4.63947 9.68327 4.93949C10.9583 4.07282 11.5166 4.25616 11.5166 4.25616C11.7633 4.815 11.7871 5.44697 11.5833 6.02282C12.0328 6.51004 12.2775 7.15164 12.2666 7.81449C12.2666 10.3728 10.7083 10.9395 9.22494 11.1062C9.38404 11.2674 9.50657 11.461 9.58422 11.6738C9.66186 11.8866 9.6928 12.1137 9.67494 12.3395C9.67494 13.2312 9.6666 13.9478 9.6666 14.1728C9.6666 14.3478 9.7916 14.5562 10.1249 14.4895C11.624 13.9847 12.895 12.9636 13.7109 11.6085C14.5268 10.2534 14.8345 8.65236 14.5792 7.09129C14.3239 5.53023 13.5221 4.11072 12.3169 3.08614C11.1118 2.06157 9.58174 1.49863 7.99994 1.4978V1.4978Z'
                    fill='#777778'
                  />
                </svg>

                <span className='text-xs'>github.com/steph-crown</span>
              </a>
              <a
                href='https://linkedin.com/in/stephcrown'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-portfolio-fg hover:opacity-80 transition-opacity'
                aria-label='LinkedIn'
              >
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden className='size-4'>
                  <path
                    d='M13.6466 1.33335H2.35329C2.22634 1.33158 2.10029 1.35484 1.98233 1.4018C1.86438 1.44876 1.75683 1.51849 1.66582 1.60702C1.57482 1.69555 1.50215 1.80113 1.45195 1.91775C1.40176 2.03437 1.37503 2.15973 1.37329 2.28668V13.7133C1.37503 13.8403 1.40176 13.9657 1.45195 14.0823C1.50215 14.1989 1.57482 14.3045 1.66582 14.393C1.75683 14.4815 1.86438 14.5513 1.98233 14.5982C2.10029 14.6452 2.22634 14.6684 2.35329 14.6667H13.6466C13.7736 14.6684 13.8996 14.6452 14.0176 14.5982C14.1355 14.5513 14.2431 14.4815 14.3341 14.393C14.4251 14.3045 14.4978 14.1989 14.548 14.0823C14.5982 13.9657 14.6249 13.8403 14.6266 13.7133V2.28668C14.6249 2.15973 14.5982 2.03437 14.548 1.91775C14.4978 1.80113 14.4251 1.69555 14.3341 1.60702C14.2431 1.51849 14.1355 1.44876 14.0176 1.4018C13.8996 1.35484 13.7736 1.33158 13.6466 1.33335V1.33335ZM5.39329 12.4933H3.39329V6.49334H5.39329V12.4933ZM4.39329 5.65334C4.11747 5.65334 3.85294 5.54377 3.6579 5.34874C3.46286 5.1537 3.35329 4.88917 3.35329 4.61334C3.35329 4.33752 3.46286 4.07299 3.6579 3.87795C3.85294 3.68292 4.11747 3.57335 4.39329 3.57335C4.53975 3.55673 4.68808 3.57125 4.82854 3.61593C4.96901 3.66062 5.09845 3.73447 5.2084 3.83265C5.31834 3.93083 5.40631 4.05113 5.46654 4.18567C5.52677 4.3202 5.5579 4.46594 5.5579 4.61334C5.5579 4.76075 5.52677 4.90649 5.46654 5.04102C5.40631 5.17556 5.31834 5.29586 5.2084 5.39404C5.09845 5.49222 4.96901 5.56607 4.82854 5.61076C4.68808 5.65544 4.53975 5.66995 4.39329 5.65334V5.65334ZM12.6066 12.4933H10.6066V9.27334C10.6066 8.46668 10.32 7.94001 9.59329 7.94001C9.3684 7.94166 9.14942 8.0122 8.96585 8.14213C8.78228 8.27205 8.64295 8.45513 8.56663 8.66668C8.51445 8.82337 8.49185 8.98839 8.49996 9.15334V12.4867H6.49996C6.49996 12.4867 6.49996 7.03334 6.49996 6.48668H8.49996V7.33335C8.68164 7.01808 8.9459 6.75836 9.26425 6.58215C9.58261 6.40593 9.943 6.31991 10.3066 6.33334C11.64 6.33334 12.6066 7.19335 12.6066 9.04001V12.4933Z'
                    fill='#777778'
                  />
                </svg>
                <span className='text-xs'>linkedin.com/in/stephcrown</span>
              </a>
            </div>
          </div>

          <div className='order-1 flex-shrink-0 md:order-2'>
            <Avatar className='w-32 h-32 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover' aria-hidden />
          </div>
        </header>

        {/* Nav tabs: horizontal scroll on small screens, no wrap, scrollbar hidden */}
        <nav
          className='flex flex-nowrap items-center gap-4 sm:gap-7 justify-center sm:justify-start mb-5 overflow-x-auto scrollbar-hide'
          role='navigation'
          aria-label='Main navigation'
        >
          {NAV_ITEMS.map((item) => {
            const isLink = 'href' in item
            const isActive =
              !isLink &&
              (item.to === APP_ROUTES.Home ? location.pathname === '/' || location.pathname === '/projects' : location.pathname === item.to)
            const navClass = `flex-shrink-0 text-xs uppercase tracking-[0] transition-colors leading-[1.375rem] ${
              isActive ? 'text-portfolio-fg font-medium' : 'text-portfolio-muted hover:text-portfolio-fg font-normal'
            }`
            if (isLink) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={navClass}
                  aria-label='Send email to emmanuelstephen024@gmail.com'
                >
                  {item.label}
                </a>
              )
            }
            return (
              <NavLink key={item.to} to={item.to} className={navClass} aria-current={isActive ? 'page' : undefined}>
                {item.label}
              </NavLink>
            )
          })}
        </nav>

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
