import { DownloadIcon } from 'Assets/Svgs'

const PdfViewer = () => {
  return (
    <div>
      <div className='flex justify-end w-full mb-4'>
        <a href='./Emmanuel_Stephen_Resume.pdf' download={true}>
          <button className='btn'>
            Click to download <DownloadIcon />
          </button>
        </a>
      </div>
      <div className='h-[calc(100vh_-_14rem)] overflow-y-auto border-nav border rounded-lg'>
        <iframe
          style={{ width: '100%', height: '100%' }}
          src='https://docs.google.com/document/d/1u2xFSjD0EPuxmwFQvVTiatvVVR51cQVDjG-eD9LAHuQ/preview?embedded=true'
          width='640'
          height='480'
          allow='autoplay'
          title='Stephen Emmanuel Resume'
        ></iframe>
      </div>
    </div>
  )
}

export default PdfViewer
