import { ArticleIcon, CourseIcon, DarkModeIcon, EmailIcon, GraduateIcon, HomeIcon, LightModeIcon, SocialIcon, ToolIcon } from 'Assets/Svgs'
import { DpNameTitle, SideNavLink } from 'Components'

import { AppRoutes } from 'Constants'
import { FC } from 'react'
import { useThemeManager } from 'Hooks/Ui'

type Props = {
  hideDpNameTitle?: boolean
  className?: string
}

const SideBar: FC<Props> = ({ hideDpNameTitle, className }) => {
  const { isDarkTheme, handleThemeToggle } = useThemeManager()

  return (
    <div className={`w-[17.5rem] bg-navbg/100-light dark:bg-navbg/100-dark h-screen px-4 py-12 border-nav border-l ${className}`}>
      <div className='flex flex-col justify-between h-full'>
        <div>
          {/* dp, name and title. */}
          {!hideDpNameTitle && (
            <div className='mb-10'>
              <DpNameTitle />
            </div>
          )}

          <div className='flex flex-col gap-4 '>
            <SideNavLink label='Home' to={AppRoutes.Home} icon={<HomeIcon />} />
            <SideNavLink label='Resume' to={AppRoutes.Resume} icon={<GraduateIcon />} />
            {/* <SideNavLink label='Projects' to={AppRoutes.Projects} icon={<ProjectIcon />} /> */}
            <SideNavLink label='Articles' to={AppRoutes.Articles} icon={<ArticleIcon />} />
            <SideNavLink label='Courses' to={AppRoutes.Courses} icon={<CourseIcon />} />
            <SideNavLink label='Tools' to={AppRoutes.Tools} icon={<ToolIcon />} />
          </div>
        </div>

        <div className='flex flex-col gap-4 pt-6 border-t border-nav '>
          <SideNavLink label='Socials' to={AppRoutes.Socials} icon={<SocialIcon />} />
          <SideNavLink label='Email' to={'mailto:emmanuelstephen024@gmail.com'} icon={<EmailIcon />} isExternal />

          {/* dark mode toggle. */}
          <button className='side-nav text-fg/50-light dark:text-fg/50-dark' onClick={handleThemeToggle}>
            {isDarkTheme() ? <LightModeIcon /> : <DarkModeIcon />}
            <span> Use {isDarkTheme() ? 'Light' : 'Dark'} Mode</span>
          </button>
        </div>
      </div>

      {/* <button onClick={handleThemeToggle}>Switch to {isDarkTheme() ? 'light mode' : 'dark mode'}</button> */}
    </div>
  )
}

export default SideBar
