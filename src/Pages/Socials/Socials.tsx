import { HoverCard, SocialCardHoverContent } from 'Components'

import { SOCIAL_MEDIA_DATA } from 'Constants'
import { SocialIcon } from 'Assets/Svgs'

const Socials = () => {
  return (
    <div>
      <div className='mb-10'>
        <SocialIcon className='h-[4.75rem] w-[4.75rem] text-fg/50-light dark:text-fg/50-dark' />

        <article>
          <h1 className='my-2 h1'>
            <span className='h1-alt'>Connect with me</span>
            <br />
            on my socials<span className='h1-alt'>.</span>
          </h1>

          <p className='p'>
            Hover over any of the cards below, copy the username (or id or name) to copy it or click the arrow icon ↗ at the top right to visit my
            profile. Feel free to say hello 👋 while you&apos;re there!
          </p>
        </article>
      </div>

      <section className='flex justify-between flex-wrap gap-y-10' aria-details='Stephen Social media links'>
        {SOCIAL_MEDIA_DATA.map((data) => (
          <div className='w-full lg:w-[47.5%]' key={data?.name}>
            <HoverCard
              bgImage={data?.bgImage}
              label={data.name}
              hoverContent={<SocialCardHoverContent username={data.username} url={data.url} description={data.description} />}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

// // twitter
//// facebook
//// whatsapp
//// linkedin
//// tiktok
//// spotify
//// github
//// instagram
// medium
// dev.to
// hashnode
// stackoverflow
//// dribbble
//// behance
//// gmail
// leetcode

export default Socials
