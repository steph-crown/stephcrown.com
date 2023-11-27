import React from 'react'
import { stephcrown } from 'Assets/Pngs'

const DpNameTitle = () => {
  return (
    <div className='flex items-center '>
      <img src={stephcrown} alt='Steph Crown' className='h-10' />
      <div className='ml-4'>
        <p className='font-MSMediumWide leading-[160%] dark:text-fg/100-dark text-fg/100-light text-base'>Stephen Emmanuel</p>
        <p className='leading-[160%] text-fg/50-light dark:text-fg/50-dark font-MSMedium text-sm'>Software Engineer</p>
      </div>
    </div>
  )
}

export default DpNameTitle
