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

const ProjectGridCard: FC<Props> = ({ project }) => {
  const IconComponent = project.icon ? ICON_MAP[project.icon] : null
  const techTags = project.technologies
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
  const techString = techTags.join(' • ')

  const content = (
    <div className='bg-portfolio-card p-5 h-full flex flex-col'>
      <div className='flex items-start gap-3 mb-3'>
        {IconComponent && (
          <div className='flex-shrink-0 w-9 h-9 flex items-center justify-center'>
            <IconComponent className='w-9 h-9 text-portfolio-fg' aria-hidden />
          </div>
        )}
        <div className='flex-1 min-w-0 flex items-start justify-between gap-2'>
          <h3 className='text-portfolio-fg font-semibold text-base'>{project.title}</h3>
          {project.url && <ExternalLink className='flex-shrink-0 w-4 h-4 text-portfolio-muted' aria-hidden />}
        </div>
      </div>
      <p className='text-portfolio-muted text-sm leading-relaxed line-clamp-3 flex-1'>{project.shortDescription}</p>
      {techString && <p className='text-portfolio-muted text-xs mt-4 pt-3 border-t border-portfolio-muted/20'>{techString}</p>}
    </div>
  )

  if (project.url) {
    return (
      <a
        href={project.url}
        target='_blank'
        rel='noopener noreferrer'
        className='block transition-opacity hover:opacity-90'
        aria-label={`View ${project.title} project`}
      >
        {content}
      </a>
    )
  }

  return <div className='block'>{content}</div>
}

export default ProjectGridCard
