import { lazy } from 'react'

export const Home = lazy(() => import('./Home/Home'))
export const Courses = lazy(() => import('./Courses/Courses'))
export const Projects = lazy(() => import('./Projects/Projects'))
export const Articles = lazy(() => import('./Articles/Articles'))
export const Tools = lazy(() => import('./Tools/Tools'))
export const Socials = lazy(() => import('./Socials/Socials'))

export const NotFound = lazy(() => import('./NotFound/NotFound'))
