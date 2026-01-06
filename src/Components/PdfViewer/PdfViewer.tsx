import { DownloadIcon } from 'Assets/Svgs'

const PdfViewer = () => {
  return (
    <div>
      <div className='flex justify-end w-full mb-4'>
        <a
          href='https://docs.google.com/document/d/19mHhO3be3o8soVd9fqdWpAM2Y4WSau_8wgi2zLUDMB8/preview?embedded=true'
          download={true}
          aria-label='Download Stephen Emmanuel resume'
        >
          <button className='btn flex items-center gap-2' type='button' aria-label='Download resume PDF'>
            Click to download <DownloadIcon className='h-4 w-4' aria-hidden='true' />
          </button>
        </a>
      </div>
      <div className='h-[calc(100vh_-_14rem)] overflow-y-auto border-nav border'>
        <iframe
          style={{ width: '100%', height: '100%' }}
          src='https://docs.google.com/document/d/19mHhO3be3o8soVd9fqdWpAM2Y4WSau_8wgi2zLUDMB8/preview?embedded=true'
          width='640'
          height='480'
          allow='autoplay'
          title='Stephen Emmanuel Resume - Software Engineer'
          loading='lazy'
          aria-label='Stephen Emmanuel resume document viewer'
        ></iframe>
      </div>
    </div>
  )
}

export default PdfViewer
