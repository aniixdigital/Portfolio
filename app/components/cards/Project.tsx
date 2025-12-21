import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

export interface ProjectType {
  _id: string
  title: string
  slug: { current: string }
  category: string
  description: string
  image: string
  projectUrl: string
  technologies: string[]
  completedAt: string
  showcase?: boolean
}

interface ProjectProps {
  project: ProjectType
}

const categoryLabels: Record<string, string> = {
  'digital-marketing': 'Digital Marketing',
  'advertisement': 'Advertisement',
  'graphic-design': 'Graphic Design',
  'web-development': 'Web Development',
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="bg-[#f6f4e9] rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={urlFor(project.image).width(400).height(300).url()}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5">
        <span className="text-[#FD853A] text-sm font-medium">
          {categoryLabels[project.category] || project.category}
        </span>
        <h3 className="text-xl font-bold text-black mt-2">{project.title}</h3>
        {project.description && (
          <p className="text-gray-400 mt-2 text-sm line-clamp-2">
            {project.description}
          </p>
        )}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
         {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="bg-[#f48619] text-gray-100 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-[#FD853A] hover:underline text-sm group-hover:font-semibold"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  )
}
