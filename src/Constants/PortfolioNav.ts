import APP_ROUTES from './AppRoutes'

export type PortfolioNavId = 'projects' | 'articles' | 'work' | 'testimonials' | 'resume' | 'email'

export type PortfolioNavRouteItem = { id: PortfolioNavId; label: string; to: string }
export type PortfolioNavEmailItem = { id: PortfolioNavId; label: string; href: string }
export type PortfolioNavItem = PortfolioNavRouteItem | PortfolioNavEmailItem

export const PORTFOLIO_NAV_ORDER: PortfolioNavId[] = ['projects', 'articles', 'work', 'testimonials', 'resume', 'email']

export const PORTFOLIO_NAV_ITEMS: PortfolioNavItem[] = [
  { id: 'projects', label: 'PROJECTS', to: APP_ROUTES.Home },
  { id: 'articles', label: 'ARTICLES', to: APP_ROUTES.Articles },
  { id: 'work', label: 'WORK', to: APP_ROUTES.Experience },
  { id: 'testimonials', label: 'TESTIMONIALS', to: APP_ROUTES.Testimonials },
  { id: 'resume', label: 'RESUME', to: APP_ROUTES.Resume },
  { id: 'email', label: 'EMAIL', href: 'mailto:emmanuelstephen024@gmail.com' },
]

export const isPortfolioNavRoute = (item: PortfolioNavItem): item is PortfolioNavRouteItem => 'to' in item

export const getItemByNavId = (id: PortfolioNavId): PortfolioNavItem | undefined => PORTFOLIO_NAV_ITEMS.find((item) => item.id === id)

/**
 * Max items in the non-scrolling tab strip for viewports &lt; 500px (mobile strip only).
 * One fewer than the “text-only” budget so the ⋮ menu button always fits.
 */
export function maxTabStripSlots(widthPx: number): number {
  if (widthPx >= 500) return 6
  if (widthPx >= 400) return 4
  if (widthPx >= 350) return 3
  if (widthPx >= 300) return 2
  return 1
}

export function getActiveNavIdFromPathname(pathname: string): PortfolioNavId | null {
  if (pathname === '/' || pathname === '/projects') return 'projects'
  if (pathname === APP_ROUTES.Articles) return 'articles'
  if (pathname === APP_ROUTES.Experience) return 'work'
  if (pathname === APP_ROUTES.Testimonials) return 'testimonials'
  if (pathname === APP_ROUTES.Resume) return 'resume'
  return null
}

/**
 * Visible tab ids: current route (or overflow promotion) first, then remaining in canonical order, capped at `max`.
 */
export function computeVisibleTabIds(params: { widthPx: number; pathname: string; promotedId: PortfolioNavId | null }): PortfolioNavId[] {
  const max = maxTabStripSlots(params.widthPx)
  const fromRoute = getActiveNavIdFromPathname(params.pathname)
  const primary = params.promotedId ?? fromRoute
  const result: PortfolioNavId[] = []
  if (primary && PORTFOLIO_NAV_ORDER.includes(primary)) {
    result.push(primary)
  }
  for (const id of PORTFOLIO_NAV_ORDER) {
    if (result.length >= max) break
    if (!result.includes(id)) result.push(id)
  }
  return result.slice(0, max)
}

export const FOOTER_ROUTE_ITEMS: PortfolioNavRouteItem[] = PORTFOLIO_NAV_ITEMS.filter(isPortfolioNavRoute)
