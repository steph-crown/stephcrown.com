import React, { FC } from 'react'
import { ProjectType } from 'Types'

type Props = {
  project: ProjectType
  isLast?: boolean
}

const ProjectCard: FC<Props> = ({ project, isLast }) => {
  return (
    <>
      <div className='w-full pt-6 pb-6'>
        <div className='mb-[1.25rem]'>
          <p className='text-xs text-fg/60-light dark:text-fg/60-dark mb-2 uppercase'>{project.technologies}</p>
          <h4 className='h4 mb-3'>{project?.title}</h4>
          <p className='p mb-0'>{project.shortDescription}</p>
        </div>

        {project.url && (
          <a href={project.url} target='_blank' rel='noreferrer' className='btn' aria-label={`View ${project.title} project`}>
            View
          </a>
        )}
      </div>
      {!isLast && <div className='divider' />}
    </>
  )
}

export default ProjectCard
