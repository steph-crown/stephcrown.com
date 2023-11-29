import { DpNameTitle, Loader, SideBar } from 'Components'

import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { useDisclosure } from 'Hooks/Ui'

const PagesLayout = () => {
  const hamburgerDashClassName = 'bg-fg/80-light dark:bg-fg/80-dark '
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu } = useDisclosure()

  return (
    <Suspense fallback={<Loader />}>
      <div className='bg-bg/100-light dark:bg-bg/100-dark min-h-screen flex justify-between w-full '>
        <header className='fixed top-0 w-full md:hidden bg-navbg/100-light dark:bg-navbg/100-dark border-nav border-b p-6 flex justify-between items-center'>
          <DpNameTitle />

          <button
            onClick={toggleMobileMenu}
            className={`flex flex-col justify-end items-end gap-1.5 xs:gap-2.5 ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
          >
            <div className={`w-[24px] xs:w-[34px] h-[1px] ${hamburgerDashClassName}`} />
            <div className={`w-[24px] xs:w-[34px] h-[1px] ${hamburgerDashClassName}`} />
            <div className={`w-[12px] h-[1px] ${hamburgerDashClassName}`} />
          </button>
        </header>

        <div className={`block md:hidden mobile-menu w-full ${isMobileMenuOpen ? 'open' : ''}`}>
          <SideBar hideDpNameTitle className='w-full' />
        </div>

        <div className='w-full pl-[8%] md:pl-[15%] py-20 pr-[8%] min-h-[100dvh]'>
          <Outlet />
        </div>

        <div className='hidden md:block'>
          <SideBar />
        </div>
      </div>
    </Suspense>
  )
}

export default PagesLayout
