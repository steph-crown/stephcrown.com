const Loader = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-bg/100-light dark:bg-bg/100-dark z-50'>
      <div className='flex items-center gap-1.5'>
        <div className='w-1 h-6 bg-fg/60-light dark:bg-fg/60-dark loader-dot' style={{ animationDelay: '0s' }}></div>
        <div className='w-1 h-6 bg-fg/60-light dark:bg-fg/60-dark loader-dot' style={{ animationDelay: '0.15s' }}></div>
        <div className='w-1 h-6 bg-fg/60-light dark:bg-fg/60-dark loader-dot' style={{ animationDelay: '0.3s' }}></div>
      </div>
    </div>
  )
}

export default Loader
