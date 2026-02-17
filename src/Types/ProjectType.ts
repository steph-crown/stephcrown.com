import { ReactNode } from 'react'

type ProjectType = {
  title: string
  url: string
  shortDescription: string
  extendedDescription?: ReactNode
  technologies: string
  /** SVG component name from Assets/Svgs (e.g. 'PodPod'). Optional. */
  icon?: string
}

export default ProjectType
