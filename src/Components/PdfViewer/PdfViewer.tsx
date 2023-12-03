import { Worker } from '@react-pdf-viewer/core'

const PdfViewer = () => {
  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
      <div
        style={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          height: '750px',
          overflowY: 'scroll',
        }}
      >
        <iframe
          style={{ width: '100%', height: '100%' }}
          src='https://drive.google.com/file/d/1QAnAKZIsmKnvjslyWMV39GDYHWPZUX-e/preview'
          width='640'
          height='480'
          allow='autoplay'
          title='Stephen Emmanuel Resume'
        ></iframe>
      </div>
    </Worker>
  )
}

export default PdfViewer
