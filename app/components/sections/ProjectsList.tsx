import { client } from '@/sanity/lib/client'
import { projectsQuery, projectsByCategoryQuery } from '@/sanity/lib/queries'
import Project, { ProjectType } from '../cards/Project'

interface ProjectsListProps {
  category?: string
}

interface QueryResult {
  all: ProjectType[]
  totalCount: number
  showcaseCount: number
}

export default async function ProjectsList({ category }: ProjectsListProps) {
  const result: QueryResult = category
    ? await client.fetch(projectsByCategoryQuery, { category })
    : await client.fetch(projectsQuery)

  // Show all projects without filtering
  const projects = result.all

  if (projects.length === 0) {
    return (
      <div className="text-center text-gray-400 py-10">
        No projects found.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </div>
  )
}
