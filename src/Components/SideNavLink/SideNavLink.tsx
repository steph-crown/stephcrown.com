import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { SideNavLinkProps } from './SideNavLink.types'

const SideNavLink: FC<SideNavLinkProps> = ({ label, to, icon, isExternal }) => {
  const getClassName = ({ isActive }: { isActive: boolean }) =>
    ` side-nav ${isActive ? 'bg-bg/5-light dark:bg-bg/5-dark text-fg/100-light dark:text-fg/100-dark' : 'text-fg/50-light dark:text-fg/50-dark'}`

  return isExternal ? (
    <a href={to} className='side-nav text-fg/50-light dark:text-fg/50-dark' target='_blank' rel='noreferrer'>
      {icon} <span>{label}</span>
    </a>
  ) : (
    <NavLink to={to} className={getClassName}>
      {icon} <span>{label}</span>
    </NavLink>
  )
}

export default SideNavLink
