import React from 'react'

/**
 * ClipboardText component that allows selecting and copying text on click.
 * @param {string} text - The text to be copied.
 * @returns {JSX.Element} - React component.
 */
const ClipboardText: React.FC<{ text: string }> = ({ text }) => {
  const [isCopied, setIsCopied] = React.useState(false)

  const handleCopyText = () => {
    try {
      // Create a temporary textarea to copy the text
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)

      // Inform the user about successful copy
      // alert('Text copied to clipboard!')
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (error) {
      // Handle copy error
      alert('Copy failed. Please try again.')
    }
  }

  const copiedTextStyle = {
    background: '#161616',
  }

  return (
    <button onClick={handleCopyText} className='w-max max-w-[12rem] border-fg/50-dark border border-solid p-2  '>
      <span
        className='inline-block text-left break-all text-sm text-fg/100-dark rounded-[4px]'
        style={{ ...(isCopied ? copiedTextStyle : {}), lineHeight: '1.8' }}
      >
        {text}
      </span>

      {/* tooltip that says copied, styled well. */}
      {isCopied && <span className='absolute top-0 left-0 bg-fg/100-dark text-fg/100-light text-xs p-1 '>Copied!</span>}
    </button>
  )
}

export default ClipboardText
