import { FC, ReactNode } from 'react'

import { useDisclosure } from 'Hooks/Ui'

type Props = {
  bgImage: string
  label?: string
  hoverContent?: ReactNode
}

const HoverCard: FC<Props> = ({ bgImage, label, hoverContent }) => {
  const { isOpen: isBlurred, open: blur, close: unblur } = useDisclosure()
  const containerStyle = {
    background: `url(${bgImage}) lightgray 50% / cover no-repeat`,
  }

  const unblurredOverlayStyle = {
    backdropFilter: 'blur(0px)',
  }

  const blurredOverlayStyle = {
    backdropFilter: 'blur(22.5px)',
  }

  const hoverContentClassName = 'rounded-[0.25rem] w-full h-[17.5rem] absolute top-0 bottom-0 left-0 right-0'

  return (
    <div
      className='w-full'
      onClick={() => {
        blur()
      }}
    >
      <div
        className='w-full h-[17.5rem] rounded-[0.25rem] relative'
        style={containerStyle}
        onMouseOver={blur}
        onMouseOut={unblur}
        onFocus={blur}
        onBlur={unblur}
      >
        <div className={hoverContentClassName} style={isBlurred ? blurredOverlayStyle : unblurredOverlayStyle} />

        <div className={`${hoverContentClassName} ${isBlurred ? 'opacity-100' : 'opacity-0'}`}>{hoverContent}</div>
      </div>

      {label ? <p className='mt-4 text-fg/100-light dark:text-fg/100-dark font-MSMediumWide text-sm leading-[160%] font-medium'>{label}</p> : null}
    </div>
  )
}

export default HoverCard
