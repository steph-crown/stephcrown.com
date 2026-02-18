type ExperienceType = {
  company: string
  role: string
  location: string
  startDate: string
  endDate: string
  /** Single paragraph summary / responsibilities. */
  description: string
  /** Dot-separated technologies/skills, e.g. "React • TypeScript • Next.js". */
  technologies: string
  /** Optional full bullet list for data source; card uses description + technologies. */
  highlights?: string[]
}

export default ExperienceType
