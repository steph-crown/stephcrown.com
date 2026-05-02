import React, { FC, useEffect, useState } from 'react'
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

type TechLineProps = {
  displayText: string
  fullText: string
}

const ProjectTechLine: FC<TechLineProps> = ({ displayText, fullText }) => {
  const [preferNativeTitle, setPreferNativeTitle] = useState(false)

  useEffect(() => {
    const mq = globalThis.matchMedia('(hover: none)')
    const apply = () => setPreferNativeTitle(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return (
    <div className='relative z-10 mt-16 -mx-1 px-1 group/tech'>
      <p
        title={preferNativeTitle ? fullText : undefined}
        className='text-[#BEBEBE] text-xs uppercase whitespace-nowrap overflow-hidden text-ellipsis tracking-wide cursor-help'
        aria-label={`Technologies: ${fullText}`}
      >
        {displayText}
      </p>
      <div
        aria-hidden
        className='pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max max-w-[min(calc(100vw-2rem),22rem)] translate-y-1 opacity-0 transition-[opacity,transform] duration-150 ease-out [@media(hover:hover)]:group-hover/tech:translate-y-0 [@media(hover:hover)]:group-hover/tech:opacity-100'
      >
        <div className='border border-portfolio-muted/25 bg-portfolio-card px-3 py-2.5 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.65)]'>
          <p className='text-left text-xs font-normal normal-case leading-relaxed tracking-normal text-[#BEBEBE]'>{fullText}</p>
        </div>
      </div>
    </div>
  )
}

const ProjectGridCard: FC<Props> = ({ project }) => {
  const IconComponent = project.icon ? ICON_MAP[project.icon] : null
  const allTechTags = project.technologies
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
  const displayTechTags = allTechTags.slice(0, MAX_TECH_TAGS)
  const techStringDisplay = displayTechTags.join(' • ')
  const fullTechnologiesText = allTechTags.join(', ')

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

      {techStringDisplay && fullTechnologiesText ? <ProjectTechLine displayText={techStringDisplay} fullText={fullTechnologiesText} /> : null}
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
