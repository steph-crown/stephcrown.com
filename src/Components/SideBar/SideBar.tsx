import { ArticleIcon, CourseIcon, DarkModeIcon, EmailIcon, HomeIcon, LightModeIcon, SocialIcon, ToolIcon } from 'Assets/Svgs'
import { DpNameTitle, SideNavLink } from 'Components'

import { AppRoutes } from 'Constants'
import { useThemeManager } from 'Hooks/Ui'

const SideBar = () => {
  const { isDarkTheme, handleThemeToggle } = useThemeManager()

  return (
    <div className='w-[17.5rem] bg-navbg/100-light dark:bg-navbg/100-dark h-screen px-4 py-12 border-nav border-l'>
      <div className='flex flex-col justify-between h-full'>
        <div>
          {/* dp, name and title. */}
          <DpNameTitle />
          <div className='flex flex-col gap-4 mt-10'>
            <SideNavLink label='Home' to={AppRoutes.Home} icon={<HomeIcon />} />
            {/* <SideNavLink label='Projects' to={AppRoutes.Projects} icon={<ProjectIcon />} /> */}
            <SideNavLink label='Articles' to={AppRoutes.Articles} icon={<ArticleIcon />} />
            <SideNavLink label='Courses' to={AppRoutes.Courses} icon={<CourseIcon />} />
            <SideNavLink label='Tools' to={AppRoutes.Tools} icon={<ToolIcon />} />
          </div>
        </div>

        <div className='flex flex-col gap-4 pt-6 border-t border-nav '>
          <SideNavLink label='Socials' to={AppRoutes.Socials} icon={<SocialIcon />} />
          <SideNavLink label='Email' to={AppRoutes.Projects} icon={<EmailIcon />} />

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
