import { ReactNode } from 'react'

type ProjectType = {
  title: string
  url: string
  shortDescription: string
  extendedDescription?: ReactNode
  technologies: string
}

export default ProjectType
