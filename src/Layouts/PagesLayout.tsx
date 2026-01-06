import { Loader, TopNav } from 'Components'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

const PagesLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-bg/container-light dark:focus:bg-bg/container-dark focus:text-fg/100-light dark:focus:text-fg/100-dark focus:border-2 focus:border-fg/100-light dark:focus:border-fg/100-dark focus:rounded focus:outline-none'
        aria-label='Skip to main content'
      >
        Skip to main content
      </a>
      <div className='min-h-screen w-full relative md:bg-bg/100-light dark:md:bg-bg/100-dark'>
        <div className='w-full min-h-[100dvh] md:px-5 md:py-10'>
          <div className='md:max-w-[600px] md:mx-auto'>
            <div className='wrapper min-h-[100dvh] md:min-h-[500px] w-full h-full md:w-auto flex flex-col'>
              <TopNav />
              <div id='main-content' className='flex-1 wrapper-content' tabIndex={-1}>
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
