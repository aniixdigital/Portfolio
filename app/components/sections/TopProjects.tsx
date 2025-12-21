import { client } from '@/sanity/lib/client'
import { topProjectsQuery } from '@/sanity/lib/queries'
import { ProjectType } from '../cards/Project'
import ProjectsSwiper from '../swipers/ProjectsSwiper'
import StaggerText from '@/app/animation/StaggerText'

interface QueryResult {
  all: ProjectType[]
  totalCount: number
  showcaseCount: number
}

export default async function TopProjects() {
  const result: QueryResult = await client.fetch(topProjectsQuery)

  // Filter projects: if more than 6 total, show only showcase=true, else show all
  const projects = result.totalCount > 6
    ? result.all.filter((p) => p.showcase === true)
    : result.all

  if (projects.length === 0) {
    return (
      <div className="text-center text-gray-400 py-10">
        No projects found.
      </div>
    )
  }

  return (
    <div className="py-16 px-8 pt-2">
      <StaggerText
        segments={[
          { text: 'Featured', color: '#FFECB6' },
          { text: 'Projects', color: '#f78446' },
        ]}
        className="text-3xl sm:text-6xl font-extrabold mb-12 text-center"
        staggerType="chars"
      />
      <div className="max-w-7xl mx-auto">
        <ProjectsSwiper projects={projects} />
      </div>
    </div>
  )
}
