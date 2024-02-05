// the type of the social media links.
type ArticleType = {
  platform: 'Hashnode' | 'DevTo' | 'Medium' | 'Open Replay'
  url: string
  bgImage: string
  name: string
  description: string
  hasLightBg?: boolean
}

export default ArticleType
