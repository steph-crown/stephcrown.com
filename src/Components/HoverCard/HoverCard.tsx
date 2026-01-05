import { FC, ReactNode } from 'react'

import { useDisclosure } from 'Hooks/Ui'

type Props = {
  bgImage: string
  label?: string
  hoverContent?: ReactNode
  isTop?: boolean
  reducedHeight?: boolean
}

const HoverCard: FC<Props> = ({ bgImage, label, hoverContent, isTop, reducedHeight }) => {
  const { isOpen: isBlurred, open: blur, close: unblur } = useDisclosure()
  const containerStyle = {
    background: `url(${bgImage}) lightgray  ${isTop ? '0% top' : '50% center'} / cover no-repeat`,
  }

  const unblurredOverlayStyle = {
    backdropFilter: 'blur(0px)',
  }

  const blurredOverlayStyle = {
    backdropFilter: 'blur(22.5px)',
  }

  const hoverContentClassName = `w-full absolute top-0 bottom-0 left-0 right-0 ${reducedHeight ? 'h-[12rem]' : 'h-[17.5rem]'}`

  return (
    <div
      className='w-full'
      onClick={() => {
        blur()
      }}
    >
      <div
        className='w-full relative border border-solid border-navborder-light dark:border-navborder-dark'
        style={{ ...containerStyle, height: reducedHeight ? '12rem' : '17.5rem' }}
        onMouseOver={blur}
        onMouseOut={unblur}
        onFocus={blur}
        onBlur={unblur}
      >
        <div className={hoverContentClassName} style={isBlurred ? blurredOverlayStyle : unblurredOverlayStyle} />

        <div className={`${hoverContentClassName} ${isBlurred ? 'opacity-100' : 'opacity-0'}`}>{hoverContent}</div>
      </div>

      {label ? (
        <p className='mt-4 text-fg/100-light dark:text-fg/100-dark text-sm' style={{ lineHeight: '1.8' }}>
          {label}
        </p>
      ) : null}
    </div>
  )
}

export default HoverCard
