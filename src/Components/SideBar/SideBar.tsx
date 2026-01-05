import { Home, GraduationCap, FolderKanban, FileText, Users, Mail, Sun, Moon, Wrench } from 'lucide-react'
import { DpNameTitle, SideNavLink } from 'Components'

import { APP_ROUTES } from 'Constants'
import { useThemeManager } from 'Hooks/Ui'
import { FC } from 'react'

type Props = {
  hideDpNameTitle?: boolean
  className?: string
}

const SideBar: FC<Props> = ({ hideDpNameTitle, className }) => {
  const { isDarkTheme, handleThemeToggle } = useThemeManager()

  return (
    <div
      className={`w-[17.5rem] overflow-y-auto bg-navbg/100-light dark:bg-navbg/100-dark ${
        hideDpNameTitle ? '' : 'h-screen'
      } px-6 py-12 border-nav border-l ${className}`}
    >
      <div className='flex flex-col gap-4 h-full'>
        <div>
          {/* dp, name and title. */}
          {!hideDpNameTitle && (
            <div className='mb-10'>
              <DpNameTitle />
            </div>
          )}

          <div className='flex flex-col gap-4 '>
            <SideNavLink label='Home' to={APP_ROUTES.Home} icon={<Home size={20} />} />
            <SideNavLink label='Resume' to={APP_ROUTES.Resume} icon={<GraduationCap size={20} />} />
            <SideNavLink label='Projects' to={APP_ROUTES.Projects} icon={<FolderKanban size={20} />} />
            <SideNavLink label='Articles' to={APP_ROUTES.Articles} icon={<FileText size={20} />} />
            {/* <SideNavLink label='Courses' to={APP_ROUTES.Courses} icon={<CourseIcon />} /> */}
            <SideNavLink label='Tools' to={APP_ROUTES.Tools} icon={<Wrench size={20} />} />
          </div>
        </div>

        <div className='flex flex-col gap-4 pt-6 border-t border-nav '>
          <SideNavLink label='Socials' to={APP_ROUTES.Socials} icon={<Users size={20} />} />
          <SideNavLink label='Contact' to={APP_ROUTES.Contact} icon={<Mail size={18} />} />
          {/* <SideNavLink label='Email' to={'mailto:emmanuelstephen024@gmail.com'} icon={<EmailIcon />} isExternal /> */}
          {/* <SideNavLink label='Credits' to={APP_ROUTES.Credits} icon={<HeartIcon />} /> */}

          {/* dark mode toggle. */}
          <button className='side-nav text-fg/50-light dark:text-fg/50-dark' onClick={handleThemeToggle}>
            {isDarkTheme() ? <Sun size={20} /> : <Moon size={20} />}
            <span> Use {isDarkTheme() ? 'Light' : 'Dark'} Mode</span>
          </button>
        </div>
      </div>

      {/* <button onClick={handleThemeToggle}>Switch to {isDarkTheme() ? 'light mode' : 'dark mode'}</button> */}
    </div>
  )
}

export default SideBar
