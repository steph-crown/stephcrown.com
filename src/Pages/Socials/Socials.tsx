import { HoverCard, SocialCardHoverContent } from 'Components'

import { SOCIAL_MEDIA_DATA } from 'Constants'

const Socials = () => {
  return (
    <div>
      <h1 className='h1'>Connect with me on my socials</h1>

      <div className='section'>
        <p className='p'>
          Hover over (or tap on) any of the cards below, click on the username (or id or name) to copy it or click the arrow icon ↗ at the top right
          to visit my profile. Feel free to say hello 👋 while you&apos;re there!
        </p>
      </div>

      <section className='flex flex-col gap-y-6 mt-10' aria-details='Stephen Social media links'>
        {SOCIAL_MEDIA_DATA.map((data) => (
          <div className='w-full' key={data?.name}>
            <HoverCard
              bgImage={data?.bgImage}
              label={data.name}
              reducedHeight
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
