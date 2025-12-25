import { client } from '@/sanity/lib/client'
import { projectsQuery } from '@/sanity/lib/queries'
import Project, { ProjectType } from '@/app/components/cards/Project'
import StaggerText from '@/app/animation/StaggerText'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Animesh Kumar's portfolio of 50+ completed projects across web development, digital marketing, graphic design, and advertisement. See real results and case studies.",
  openGraph: {
    title: "Projects | Animesh Kumar Portfolio",
    description: "Browse 50+ successful projects in web development, digital marketing, graphic design, and advertisement. Quality work with proven results.",
    url: "/projects",
  },
  alternates: {
    canonical: "/projects",
  },
};

interface QueryResult {
  all: ProjectType[]
  totalCount: number
  showcaseCount: number
}

const categoryLabels: Record<string, { label: string; color: string }> = {
  'digital-marketing': { label: 'Digital Marketing', color: '#FD853A' },
  'advertisement': { label: 'Advertisement', color: '#f78446' },
  'graphic-design': { label: 'Graphic Design', color: '#12caf3' },
  'web-development': { label: 'Web Development', color: '#f071b0' },
}

export default async function ProjectsPage() {
  const result: QueryResult = await client.fetch(projectsQuery)

  // Group projects by category
  const projectsByCategory = Object.keys(categoryLabels).reduce((acc, cat) => {
    acc[cat] = result.all.filter((p) => p.category === cat)
    return acc
  }, {} as Record<string, ProjectType[]>)

  return (
    <div className="min-h-screen bg-[#0f1620] text-white py-26 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <StaggerText
            text="All Projects"
            className="text-5xl sm:text-7xl font-bold text-[#FFECB6] mb-4"
            staggerType="chars"
          />
          <p className="text-lg text-[#c8b98a]">Explore our complete portfolio across all service categories</p>
        </div>

        <div className="space-y-16">
          {Object.entries(categoryLabels).map(([categoryKey, { label, color }]) => {
            const allCategoryProjects = projectsByCategory[categoryKey] || []
            const projects = allCategoryProjects.slice(0, 4) // Max 4 per category
            
            if (projects.length === 0) return null

            return (
              <div key={categoryKey} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-[#FD853A]/30">
                  <div
                    className="w-1 h-10 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                  <h2 className="text-3xl sm:text-4xl font-bold" style={{ color }}>
                    {label}
                  </h2>
                  <span className="ml-auto text-sm font-semibold text-[#c8b98a] bg-[#1a1a2e] px-3 py-1 rounded-full">
                    {allCategoryProjects.length} project{allCategoryProjects.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {projects.map((project) => (
                    <div key={project._id} className="transform transition-transform duration-300 hover:scale-105">
                      <Project project={project} />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {result.all.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-[#c8b98a]">No projects found yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}