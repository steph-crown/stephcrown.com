import { DpNameTitle, Loader, SideBar } from 'Components'

import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

const PagesLayout = () => {
  const hamburgerDashClassName = 'bg-fg/80-light dark:bg-fg/80-dark w-'

  return (
    <Suspense fallback={<Loader />}>
      <div className='bg-bg/100-light dark:bg-bg/100-dark min-h-screen flex justify-between w-full '>
        <header className='fixed top-0 w-full md:hidden bg-navbg/100-light dark:bg-navbg/100-dark border-nav border-b p-6 flex justify-between items-center'>
          <DpNameTitle />

          <div className='flex flex-col justify-end items-end gap-2.5'>
            <div className={`w-[34px] h-[1px] ${hamburgerDashClassName}`} />
            <div className={`w-[34px] h-[1px] ${hamburgerDashClassName}`} />
            <div className={`w-[20px] h-[1px] ${hamburgerDashClassName}`} />
          </div>
        </header>

        <div className='w-full pl-[15%] py-20 pr-[8%] min-h-[100dvh]'>
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
