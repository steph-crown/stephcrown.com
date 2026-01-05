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

        <a href={url} rel='noreferrer' target='_blank' className='text-fg/80-dark hover:scale-150'>
          <ArrowIcon className='h-8 w-8' />
        </a>
      </div>

      <p className='text-sm text-fg/80-dark' style={{ lineHeight: '1.8' }}>
        {description}
      </p>
    </div>
  )
}

export default SocialCardHoverContent
