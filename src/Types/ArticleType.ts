// the type of the social media links.
type ArticleType = {
  platform: 'Hashnode' | 'DevTo' | 'Medium' | 'Open Replay' | 'Revent Academy Blog' | 'FreeCodeCamp'
  url: string
  bgImage: string
  name: string
  description: string
  hasLightBg?: boolean
  /** Estimated read time in minutes. Shown on article grid card. */
  readTimeMinutes?: number
}

export default ArticleType
