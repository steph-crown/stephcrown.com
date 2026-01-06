import React, { FC } from 'react'

import { ArrowIcon } from 'Assets/Svgs'
import { ClipboardText } from 'Components/index'
import { SocialMediumType } from 'Types'

type Props = Omit<SocialMediumType, 'bgImage' | 'name'>

const SocialCardHoverContent: FC<Props> = ({ username, url, description }) => {
  return (
    <div className='p-6 flex flex-col h-full justify-between'>
      <div className='flex justify-between '>
        <ClipboardText text={username} />

        <a
          href={url}
          rel='noreferrer'
          target='_blank'
          className='text-fg/80-dark hover:scale-150 focus:outline-none focus:ring-2 focus:ring-fg/60-light dark:focus:ring-fg/60-dark focus:ring-offset-2 rounded'
          aria-label={`Visit ${description} profile`}
        >
          <ArrowIcon className='h-8 w-8' aria-hidden='true' />
        </a>
      </div>

      <p className='text-sm text-fg/80-dark' style={{ lineHeight: '1.8' }}>
        {description}
      </p>
    </div>
  )
}

export default SocialCardHoverContent
