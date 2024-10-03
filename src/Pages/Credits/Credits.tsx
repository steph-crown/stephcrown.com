import { JeremiahPorfolioScreenshot, KadetPortfolioScreenshot } from 'Assets/Pngs'
import { ArrowIcon, HeartIcon } from 'Assets/Svgs'
import { HoverCard } from 'Components'

const Credits = () => {
  return (
    <div>
      <div className='mb-10'>
        <HeartIcon className='h-[4.75rem] w-[4.75rem] text-fg/50-light dark:text-fg/50-dark' />

        <article>
          <h1 className='my-2 h1'>
            <span className='h1-alt'>Design Inspiration </span>
            <br />
            and Credits<span className='h1-alt'>.</span>
          </h1>

          <p className='p'>This portfolio was designed and built with 💛 by me inspiration from the following websites:</p>
        </article>
      </div>

      <section className='flex justify-between flex-wrap gap-y-10' aria-details='Stephen Social media links'>
        <HoverCard
          isTop
          bgImage={JeremiahPorfolioScreenshot}
          label='Jeremiah Lena | jeremiah.vercel.app'
          hoverContent={
            <div className='p-6 flex flex-col h-full justify-between'>
              <div className='flex justify-between '>
                <span className='inline-block text-left break-all font-MSMediumWide text-sm leading-[160%] text-fg/100-dark rounded-[4px] w-max max-w-[12rem] border-fg/50-dark border border-solid p-2'>
                  Click the arrow <br />
                  to visit the site
                </span>

                <a href={'https://jeremiah.vercel.app'} rel='noreferrer' target='_blank' className='text-fg/80-dark hover:scale-150'>
                  <ArrowIcon className='h-8 w-8' />
                </a>
              </div>
            </div>
          }
        />

        <HoverCard
          isTop
          bgImage={KadetPortfolioScreenshot}
          label='Collins Enebeli | kadet.dev'
          hoverContent={
            <div className='p-6 flex flex-col h-full justify-between'>
              <div className='flex justify-between '>
                <span className='inline-block text-left break-all font-MSMediumWide text-sm leading-[160%] text-fg/100-dark rounded-[4px] w-max max-w-[12rem] border-fg/50-dark border border-solid p-2'>
                  Click the arrow <br />
                  to visit the site
                </span>

                <a href={'https://kadet.dev/'} rel='noreferrer' target='_blank' className='text-fg/80-dark hover:scale-150'>
                  <ArrowIcon className='h-8 w-8' />
                </a>
              </div>
            </div>
          }
        />
      </section>

      <h3 className='h3 mt-20'>Image Credits</h3>

      <ul className='flex flex-col gap-4 list-disc'>
        <li className='p my-0'>
          Photo by{' '}
          <a
            className='a'
            href='https://unsplash.com/@alexbemore?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
            rel='noreferrer'
            target='_blank'
          >
            Alexander Shatov
          </a>{' '}
          on{' '}
          <a
            className='a'
            href='https://unsplash.com/photos/a-black-square-button-with-a-white-x-on-it-d4_aCS3jsQ0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
            rel='noreferrer'
            target='_blank'
          >
            Unsplash
          </a>
        </li>

        <li className='p my-0'>
          Photo by{' '}
          <a
            className='a'
            href='https://unsplash.com/@rubaitulazad?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
            rel='noreferrer'
            target='_blank'
          >
            Rubaitul Azad
          </a>{' '}
          on{' '}
          <a
            className='a'
            href='https://unsplash.com/photos/a-white-dice-with-a-black-github-logo-on-it-HLQDfaJUTVI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
            rel='noreferrer'
            target='_blank'
          >
            Unsplash
          </a>
        </li>

        <li className='p my-0'>
          Photo by{' '}
          <a
            className='a'
            href='https://unsplash.com/@rubaitulazad?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
            rel='noreferrer'
            target='_blank'
          >
            Rubaitul Azad
          </a>{' '}
          on{' '}
          <a
            className='a'
            href='https://unsplash.com/photos/a-white-dice-with-the-word-be-on-it-vnJ4vnFxJIA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
            rel='noreferrer'
            target='_blank'
          >
            Unsplash
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Credits
