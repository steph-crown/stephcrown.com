import React, { FC } from 'react'
import { ProjectType } from 'Types'
import './ProjectCard.css'

type Props = {
  project: ProjectType
}

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <div className='w-full dark:bg-[#1b1b1d] bg-bg/5-light p-10 flex flex-col justify-between transition-all project'>
      <div>
        <p className='uppercase text-[0.7rem] dark:text-fg/60-dark font-MSMediumWide mb-2'>{project.technologies}</p>
        <h4 className='h4 mb-6'>{project?.title}</h4>

        <p className='text-fg/40-light dark:text-fg/40-dark text-sm'>{project.shortDescription}</p>
      </div>

      <a
        href={project.url}
        target='_blank'
        rel='noreferrer'
        className='text-fg/50-light dark:text-fg/50-dark hover:underline text-xs flex items-center gap-1 mt-20 font-medium font-MSMediumWide hover:dark:text-fg/100-dark hover:text-fg/100-light'
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='transition-all text-fg/40-light dark:text-fg/40-dark h-4 '
        >
          <path
            d='M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z'
            fill='currentColor'
          />
        </svg>
        View
      </a>
    </div>
  )
}

export default ProjectCard
