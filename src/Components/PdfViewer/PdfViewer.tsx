import { DownloadIcon } from 'Assets/Svgs'

const PdfViewer = () => {
  return (
    <div>
      <div className='flex justify-end w-full mb-4'>
        <a href='https://docs.google.com/document/d/19mHhO3be3o8soVd9fqdWpAM2Y4WSau_8wgi2zLUDMB8/preview?embedded=true' download={true}>
          <button className='btn'>
            Click to download <DownloadIcon />
          </button>
        </a>
      </div>
      <div className='h-[calc(100vh_-_14rem)] overflow-y-auto border-nav border rounded-lg'>
        <iframe
          style={{ width: '100%', height: '100%' }}
          // src='https://docs.google.com/document/d/1u2xFSjD0EPuxmwFQvVTiatvVVR51cQVDjG-eD9LAHuQ/preview?embedded=true'
          src='https://docs.google.com/document/d/19mHhO3be3o8soVd9fqdWpAM2Y4WSau_8wgi2zLUDMB8/preview?embedded=true'
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
