import { Loader, SideBar } from 'Components'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const PagesLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className='bg-bg/100-light dark:bg-bg/100-dark min-h-screen flex justify-between w-full '>
        <Outlet />

        <SideBar />
      </div>
    </Suspense>
  )
}

export default PagesLayout
