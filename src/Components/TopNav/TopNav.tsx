import {
  Home,
  Home as HomeFilled,
  GraduationCap,
  GraduationCap as GraduationCapFilled,
  FolderKanban,
  FolderKanban as FolderKanbanFilled,
  FileText,
  FileText as FileTextFilled,
  Share2,
  Share2 as Share2Filled,
  Mail,
  Mail as MailFilled,
  Sun,
  Moon,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { APP_ROUTES } from 'Constants'
import { FC, useState, useEffect } from 'react'
import { useThemeManager } from 'Hooks/Ui'

const navItems = [
  { label: 'Home', to: APP_ROUTES.Home, icon: Home, iconFilled: HomeFilled },
  { label: 'Projects', to: APP_ROUTES.Projects, icon: FolderKanban, iconFilled: FolderKanbanFilled },
  { label: 'Resume', to: APP_ROUTES.Resume, icon: GraduationCap, iconFilled: GraduationCapFilled },
  { label: 'Articles', to: APP_ROUTES.Articles, icon: FileText, iconFilled: FileTextFilled },
  { label: 'Socials', to: APP_ROUTES.Socials, icon: Share2, iconFilled: Share2Filled },
  { label: 'Contact', to: APP_ROUTES.Contact, icon: Mail, iconFilled: MailFilled },
]

const TopNav: FC = () => {
  const location = useLocation()
  const { isDarkTheme, handleThemeToggle } = useThemeManager()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isDark, setIsDark] = useState(() => isDarkTheme())

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    checkTheme()

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    const handleStorageChange = () => {
      checkTheme()
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      observer.disconnect()
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const handleToggle = () => {
    handleThemeToggle()
    setTimeout(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }, 0)
  }

  return (
    <nav className='nav-strip flex items-center gap-6 px-4 py-3 backdrop-blur-sm' role='navigation' aria-label='Main navigation'>
      {navItems.map((item) => {
        const isActive = location.pathname === item.to
        const Icon = isActive ? item.iconFilled : item.icon

        return (
          <div
            key={item.to}
            className='relative flex items-center'
            onMouseEnter={() => setHoveredItem(item.to)}
            onMouseLeave={() => setHoveredItem(null)}
            onFocus={() => setHoveredItem(item.to)}
            onBlur={() => setHoveredItem(null)}
          >
            <Link
              to={item.to}
              aria-label={`Navigate to ${item.label} page`}
              aria-current={isActive ? 'page' : undefined}
              className={`flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-fg/60-light dark:focus:ring-fg/60-dark focus:ring-offset-2 rounded ${
                isActive
                  ? 'text-fg/100-light dark:text-fg/100-dark'
                  : 'text-fg/60-light dark:text-fg/60-dark hover:text-fg/100-light dark:hover:text-fg/100-dark'
              }`}
            >
              <Icon className='w-5 h-5' size={20} fill={isActive ? 'currentColor' : 'none'} aria-hidden='true' />
            </Link>
            <span
              className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs transition-all duration-300 ${
                hoveredItem === item.to ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              } ${isActive ? 'text-fg/100-light dark:text-fg/100-dark' : 'text-fg/60-light dark:text-fg/60-dark'}`}
              style={{ lineHeight: '1.8' }}
              aria-hidden='true'
            >
              {item.label}
            </span>
          </div>
        )
      })}
      <div
        className='relative flex items-center ml-auto'
        onMouseEnter={() => setHoveredItem('theme')}
        onMouseLeave={() => setHoveredItem(null)}
        onFocus={() => setHoveredItem('theme')}
        onBlur={() => setHoveredItem(null)}
      >
        <button
          onClick={handleToggle}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          className='flex items-center justify-center transition-all text-fg/60-light dark:text-fg/60-dark hover:text-fg/100-light dark:hover:text-fg/100-light focus:outline-none focus:ring-2 focus:ring-fg/60-light dark:focus:ring-fg/60-dark focus:ring-offset-2 rounded'
        >
          {isDark ? <Sun className='w-5 h-5' size={20} aria-hidden='true' /> : <Moon className='w-5 h-5' size={20} aria-hidden='true' />}
        </button>
        <span
          className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs transition-all duration-300 ${
            hoveredItem === 'theme' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          } text-fg/60-light dark:text-fg/60-dark`}
          style={{ lineHeight: '1.8' }}
          aria-hidden='true'
        >
          {isDark ? 'Light' : 'Dark'}
        </span>
      </div>
    </nav>
  )
}

export default TopNav
