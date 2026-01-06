import { HoverCard, SocialCardHoverContent, SEO } from 'Components'

import { SOCIAL_MEDIA_DATA } from 'Constants'
import { BREADCRUMB_STRUCTURED_DATA } from 'Constants'

const Socials = () => {
  const breadcrumbData = [
    { name: 'Home', url: 'https://stephcrown.com' },
    { name: 'Socials', url: 'https://stephcrown.com/socials' },
  ]

  return (
    <>
      <SEO
        title='Social Media Profiles - Stephen Emmanuel (Chukwunonso) | Steph Crown'
        description='Connect with Stephen Emmanuel (Chukwunonso), also known as Steph Crown, on social media. Nigerian software engineer active on GitHub, LinkedIn, Twitter, and other platforms. Follow for updates on React, TypeScript, Rust, Elixir, and web development.'
        keywords='Stephen Emmanuel social media, Steph Crown social, Chukwunonso social, Nigerian software engineer social, GitHub, LinkedIn, Twitter, follow Stephen Emmanuel, connect with Steph Crown'
        canonicalUrl='https://stephcrown.com/socials'
        structuredData={BREADCRUMB_STRUCTURED_DATA(breadcrumbData)}
      />
      <main role='main' aria-label='Social media links page'>
        <h1 className='h1'>Connect with me on my socials</h1>

        <div className='section'>
          <p className='p'>
            Hover over (or tap on) any of the cards below, click on the username (or id or name) to copy it or click the arrow icon ↗ at the top
            right to visit my profile. Feel free to say hello 👋 while you&apos;re there!
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
      </main>
    </>
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
