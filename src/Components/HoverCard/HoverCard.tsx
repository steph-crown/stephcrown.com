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

  const hoverContentClassName = `w-full absolute top-0 bottom-0 left-0 right-0 ${reducedHeight ? 'h-[11rem] md:h-[15rem]' : 'h-[17.5rem]'}`

  return (
    <article
      className='w-full'
      onClick={() => {
        blur()
      }}
      role='button'
      tabIndex={0}
      aria-label={label || 'Interactive card'}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          blur()
        }
      }}
    >
      <div
        className={`w-full relative border border-solid border-navborder-light dark:border-navborder-dark focus:outline-none focus:ring-2 focus:ring-fg/60-light dark:focus:ring-fg/60-dark focus:ring-offset-2 ${
          reducedHeight ? 'h-[11rem] md:h-[15rem]' : 'h-[17.5rem]'
        }`}
        style={containerStyle}
        onMouseOver={blur}
        onMouseOut={unblur}
        onFocus={blur}
        onBlur={unblur}
        role='img'
        aria-label={label ? `Card for ${label}` : 'Interactive card with hover content'}
      >
        <div className={hoverContentClassName} style={isBlurred ? blurredOverlayStyle : unblurredOverlayStyle} aria-hidden='true' />

        <div className={`${hoverContentClassName} ${isBlurred ? 'opacity-100' : 'opacity-0'}`} aria-hidden={!isBlurred}>
          {hoverContent}
        </div>
      </div>

      {label ? (
        <h3 className='mt-4 text-fg/100-light dark:text-fg/100-dark text-sm' style={{ lineHeight: '1.8' }}>
          {label}
        </h3>
      ) : null}
    </article>
  )
}

export default HoverCard
