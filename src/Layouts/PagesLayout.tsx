/* eslint-disable react-hooks/exhaustive-deps */
import { DpNameTitle, Loader, SideBar } from 'Components'
import { Outlet, useLocation } from 'react-router-dom'
import { Suspense, useEffect } from 'react'

import { useDisclosure } from 'Hooks/Ui'

const PagesLayout = () => {
  const hamburgerDashClassName = 'bg-fg/80-light dark:bg-fg/80-dark '
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useDisclosure()

  // get current path, and close nav menu anytime path changes.
  const { pathname } = useLocation()
  useEffect(() => {
    console.log({ pathname })
    closeMobileMenu()
  }, [pathname])

  return (
    <Suspense fallback={<Loader />}>
      <div className='bg-bg/100-light dark:bg-bg/100-dark min-h-screen flex justify-between w-full relative'>
        <header className='fixed top-0 w-full md:hidden bg-navbg/100-light dark:bg-navbg/100-dark border-nav border-b p-6 flex justify-between items-center z-[38383]'>
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

        <div className={`block md:hidden mobile-menu w-full fixed bottom-0   ${isMobileMenuOpen ? 'open' : ''}`}>
          <SideBar hideDpNameTitle className='w-full h-[calc(100vh_-_50px)] pb-20' />
        </div>

        <div className='w-full pl-[8%] md:pl-[15%] py-20 pr-[8%] min-h-[100dvh] mt-10 md:mt-0'>
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
