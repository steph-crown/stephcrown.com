import React, { useState } from 'react'

/**
 * Props for the ImageHoverSwitch component.
 */
interface ImageHoverSwitchProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Source for the image */
  imgSrc: string
}

/**
 * Component that displays a black and white image by default and switches to a colored version on hover.
 * @param {ImageHoverSwitchProps} props - Props for the component, including image sources and other image element attributes.
 * @returns {JSX.Element} ImageHoverSwitch component.
 */
const ImageHoverSwitch: React.FC<ImageHoverSwitchProps> = ({ imgSrc, alt, ...rest }: ImageHoverSwitchProps) => {
  const [isColored, setIsColored] = useState(false)

  return (
    <img
      src={imgSrc}
      className={isColored ? 'colored' : 'bw'}
      onMouseOver={() => setIsColored(true)}
      onMouseOut={() => setIsColored(false)}
      onFocus={() => setIsColored(true)}
      onBlur={() => setIsColored(false)}
      {...rest}
      alt={alt ?? 'illustration'}
    />
  )
}

export default ImageHoverSwitch
