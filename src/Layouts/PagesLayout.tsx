import { Loader, TopNav } from 'Components'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

const PagesLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className='min-h-screen w-full relative md:bg-bg/100-light dark:md:bg-bg/100-dark'>
        <div className='w-full min-h-[100dvh] md:px-5 md:py-10'>
          <div className='md:max-w-[600px] md:mx-auto'>
            <div className='wrapper min-h-[100dvh] md:min-h-[500px] w-full h-full md:w-auto flex flex-col'>
              <TopNav />
              <div className='flex-1 wrapper-content'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default PagesLayout
