import React, { FC } from 'react'
import { ExternalLink } from 'lucide-react'
import { ProjectType } from 'Types'
import * as Svgs from 'Assets/Svgs'

type Props = {
  project: ProjectType
}

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  PodPod: Svgs.PodPod,
  ActiveHive: Svgs.ActiveHive,
  Afefe: Svgs.Afefe,
  Ase: Svgs.Ase,
  Checkref: Svgs.Checkref,
  CodeSesh: Svgs.CodeSesh,
  Fintrack: Svgs.Fintrack,
  Filesearch: Svgs.Filesearch,
  FlowmonoAutomate: Svgs.FlowmonoAutomate,
  FlowmonoPhoenix: Svgs.FlowmonoPhoenix,
  HillEmissaries: Svgs.HillEmissaries,
  Jobos: Svgs.Jobos,
  Kemi: Svgs.Kemi,
  Khaime: Svgs.Khaime,
  Nextbasket: Svgs.Nextbasket,
  OpenNG: Svgs.OpenNG,
  Seabaas: Svgs.Seabaas,
  Stephen: Svgs.Stephen,
  SyncSkills: Svgs.SyncSkills,
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

  const cardBody = (
    <>
      <div className='flex items-center gap-4 mb-5'>
        {IconComponent && (
          <div className='flex-shrink-0 w-9 h-9 flex items-center justify-center pointer-events-none'>
            <IconComponent className='w-9 h-9 text-portfolio-fg' aria-hidden />
          </div>
        )}

        <div className='flex-1 min-w-0 flex items-center justify-start gap-3.5'>
          <h3 className='text-portfolio-fg font-normal text-base'>{project.title}</h3>

          {project.url ? (
            <span className='flex-shrink-0 text-portfolio-muted transition-colors group-hover:text-portfolio-fg pointer-events-none' aria-hidden>
              <ExternalLink className='w-4 h-4' />
            </span>
          ) : null}
        </div>
      </div>

      <p className='text-portfolio-muted text-sm leading-[142%] line-clamp-3 flex-1'>{project.shortDescription}</p>

      {techString && (
        <p className='text-[#BEBEBE] text-xs mt-16 uppercase whitespace-nowrap overflow-hidden text-ellipsis tracking-wide'>{techString}</p>
      )}
    </>
  )

  if (!project.url) {
    return <div className='portfolio-card-surface rounded-none p-8 h-full flex flex-col'>{cardBody}</div>
  }

  return (
    <a
      href={project.url}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`Open ${project.title} (opens in new tab)`}
      className='group portfolio-card-surface rounded-none p-8 h-full flex flex-col text-inherit no-underline outline-offset-2 outline-none focus-visible:ring-2 focus-visible:ring-portfolio-fg focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg'
    >
      {cardBody}
    </a>
  )
}

export default ProjectGridCard
