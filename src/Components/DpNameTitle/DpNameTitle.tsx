import { APP_ROUTES } from 'Constants'
import { Link } from 'react-router-dom'
import React from 'react'
import { stephcrown } from 'Assets/Pngs'

const DpNameTitle = () => {
  return (
    <Link className='flex items-center ' to={APP_ROUTES.Home}>
      <img src={stephcrown} alt='Steph Crown' className='h-10' />
      <div className='ml-4'>
        <p className='text-fg/100-light dark:text-fg/100-dark text-sm xs:text-base' style={{ lineHeight: '1.8' }}>
          Stephen Emmanuel
        </p>
        <p className='text-fg/60-light dark:text-fg/60-dark text-xs xs:text-sm' style={{ lineHeight: '1.8' }}>
          Software Engineer
        </p>
      </div>
    </Link>
  )
}

export default DpNameTitle
