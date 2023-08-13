import { Loader } from 'Components'
import { useThemeManager } from 'Hooks/Ui'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const PagesLayout = () => {
  const { isDarkTheme, handleThemeToggle } = useThemeManager()

  return (
    <Suspense fallback={<Loader />}>
      <div className='bg-bg/100-light dark:bg-bg/100-dark min-h-screen'>
        <Outlet />
        <button onClick={handleThemeToggle}>Switch to {isDarkTheme() ? 'light mode' : 'dark mode'}</button>
      </div>
    </Suspense>
  )
}

export default PagesLayout
