import { FC } from 'react'
import { SideNavLinkProps } from './SideNavLink.types'
import { NavLink } from 'react-router-dom'

const SideNavLink: FC<SideNavLinkProps> = ({ label, to, icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` side-nav ${isActive ? 'bg-bg/5-light dark:bg-bg/5-dark text-fg/100-light dark:text-fg/100-dark' : 'text-fg/50-light dark:text-fg/50-dark'}`
      }
    >
      {icon} <span>{label}</span>
    </NavLink>
  )
}

export default SideNavLink
