import { useEffect, useId, useRef, useState } from 'react'
import { MoreVertical } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import APP_ROUTES from 'Constants/AppRoutes'
import {
  computeVisibleTabIds,
  getItemByNavId,
  isPortfolioNavRoute,
  PORTFOLIO_NAV_ORDER,
  type PortfolioNavId,
  type PortfolioNavItem,
} from 'Constants/PortfolioNav'

const navLinkClass = (isActive: boolean) =>
  `flex-shrink-0 text-xs uppercase tracking-[0] transition-colors leading-[1.375rem] ${
    isActive ? 'text-portfolio-fg font-medium' : 'text-portfolio-muted hover:text-portfolio-fg font-normal'
  }`

function routeItemActive(item: { to: string }, pathname: string): boolean {
  if (item.to === APP_ROUTES.Home) return pathname === '/' || pathname === '/projects'
  return pathname === item.to
}

const PortfolioMobileNav = () => {
  const location = useLocation()
  const menuId = useId()
  const [widthPx, setWidthPx] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 400))
  const [menuOpen, setMenuOpen] = useState(false)
  const [promotedId, setPromotedId] = useState<PortfolioNavId | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPromotedId(null)
  }, [location.pathname])

  useEffect(() => {
    const onResize = () => setWidthPx(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const onDocDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', onDocDown)
    return () => document.removeEventListener('mousedown', onDocDown)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (menuOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const visibleIds = computeVisibleTabIds({
    widthPx,
    pathname: location.pathname,
    promotedId,
  })

  const renderStripItem = (item: PortfolioNavItem) => {
    if (isPortfolioNavRoute(item)) {
      const isActive = routeItemActive(item, location.pathname)
      return (
        <NavLink
          key={item.id}
          to={item.to}
          className={navLinkClass(isActive)}
          aria-current={isActive ? 'page' : undefined}
          onClick={() => setPromotedId(null)}
        >
          {item.label}
        </NavLink>
      )
    }
    const emailActive = promotedId === 'email'
    return (
      <a
        key={item.id}
        href={item.href}
        target='_blank'
        rel='noopener noreferrer'
        className={navLinkClass(emailActive)}
        aria-label='Send email to emmanuelstephen024@gmail.com'
        onClick={() => setPromotedId('email')}
      >
        {item.label}
      </a>
    )
  }

  return (
    <div ref={wrapRef} className='relative mb-5 hidden max-[499px]:flex items-center justify-between gap-3'>
      <nav className='flex min-w-0 flex-1 flex-nowrap items-center justify-start gap-4 overflow-hidden' aria-label='Main navigation'>
        {visibleIds.map((id) => {
          const item = getItemByNavId(id)
          if (!item) return null
          return renderStripItem(item)
        })}
      </nav>

      <div className='relative flex-shrink-0'>
        <button
          type='button'
          className='flex h-9 w-9 items-center justify-center rounded border border-portfolio-muted/30 text-portfolio-muted transition-colors hover:border-portfolio-muted hover:text-portfolio-fg focus:outline-none focus:ring-2 focus:ring-portfolio-fg focus:ring-offset-2 focus:ring-offset-portfolio-bg dark:border-portfolio-muted/40'
          aria-expanded={menuOpen}
          aria-haspopup='true'
          aria-controls={menuId}
          aria-label='All navigation links'
          onClick={() => setMenuOpen((o) => !o)}
        >
          <MoreVertical className='h-5 w-5' aria-hidden strokeWidth={1.75} />
        </button>

        <div
          id={menuId}
          role='menu'
          aria-hidden={!menuOpen}
          className={`absolute right-0 top-full z-50 mt-2 min-w-[200px] origin-top-right rounded border border-portfolio-muted/25 bg-portfolio-card py-2 shadow-lg transition duration-200 ease-out dark:border-portfolio-muted/35 dark:bg-portfolio-card ${
            menuOpen ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
          }`}
        >
          <div className='flex flex-col px-1' role='none'>
            {PORTFOLIO_NAV_ORDER.map((id) => {
              const item = getItemByNavId(id)
              if (!item) return null
              if (isPortfolioNavRoute(item)) {
                const isActive = routeItemActive(item, location.pathname)
                return (
                  <NavLink
                    key={item.id}
                    role='menuitem'
                    to={item.to}
                    className={`${navLinkClass(isActive)} block rounded px-3 py-2.5`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => {
                      setPromotedId(null)
                      setMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </NavLink>
                )
              }
              const emailActive = promotedId === 'email'
              return (
                <a
                  key={item.id}
                  role='menuitem'
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${navLinkClass(emailActive)} block rounded px-3 py-2.5`}
                  aria-label='Send email to emmanuelstephen024@gmail.com'
                  onClick={() => {
                    setPromotedId('email')
                    setMenuOpen(false)
                  }}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioMobileNav
