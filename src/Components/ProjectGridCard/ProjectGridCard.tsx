import React, { FC } from 'react'
import { ExternalLink } from 'lucide-react'
import { ProjectType } from 'Types'
import * as Svgs from 'Assets/Svgs'

type Props = {
  project: ProjectType
}

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  PodPod: Svgs.PodPod,
}

const MAX_TECH_TAGS = 4

const ProjectGridCard: FC<Props> = ({ project }) => {
  const IconComponent = project.icon ? ICON_MAP[project.icon] : null
  const techTags = project.technologies
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, MAX_TECH_TAGS)
  const techString = techTags.join(' • ')

  const linkIcon = project.url ? (
    <a
      href={project.url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex-shrink-0 text-portfolio-muted hover:text-portfolio-fg transition-colors focus:outline-none focus:ring-2 focus:ring-portfolio-fg focus:ring-offset-2 focus:ring-offset-portfolio-card rounded'
      aria-label={`Open ${project.title} in new tab`}
    >
      <ExternalLink className='w-4 h-4' aria-hidden />
    </a>
  ) : null

  return (
    <div className='bg-portfolio-card rounded-none p-8 h-full flex flex-col'>
      <div className='flex items-center gap-4 mb-5'>
        {IconComponent && (
          <div className='flex-shrink-0 w-9 h-9 flex items-center justify-center'>
            <IconComponent className='w-9 h-9 text-portfolio-fg' aria-hidden />
          </div>
        )}

        <div className='flex-1 min-w-0 flex items-center justify-start gap-3.5'>
          <h3 className='text-portfolio-fg font-normal text-base'>{project.title}</h3>

          {linkIcon}
        </div>
      </div>

      <p className='text-portfolio-muted text-sm leading-[142%] line-clamp-3 flex-1'>{project.shortDescription}</p>

      {techString && (
        <p className='text-[#BEBEBE] text-xs mt-16 uppercase whitespace-nowrap overflow-hidden text-ellipsis tracking-wide'>{techString}</p>
      )}
    </div>
  )
}

export default ProjectGridCard
