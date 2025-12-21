import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

export interface TestimonialType {
  _id: string
  name: string
  role: string
  company: string
  image: any
  testimonial: string
  rating: number
  serviceCategory: string
}

interface TestimonialProps {
  testimonial: TestimonialType
}

const categoryLabels: Record<string, string> = {
  'digital-marketing': 'Digital Marketing',
  'advertisement': 'Advertisement',
  'graphic-design': 'Graphic Design',
  'web-development': 'Web Development',
}

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className="bg-[#f6f4e9f3] backdrop-blur-lg rounded-2xl p-6 hover:bg-[#efefefdb] transition-colors duration-300 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        {testimonial.image ? (
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={urlFor(testimonial.image).width(100).height(100).url()}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-full bg-[#FD853A] flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <h4 className="text-black font-semibold truncate">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm truncate">
            {testimonial.role}
            {testimonial.company && ` at ${testimonial.company}`}
          </p>
        </div>
      </div>
        {testimonial.serviceCategory && (
        <div className="mb-3">
          <span className="text-xs bg-[#FD853A] text-white px-3 py-1 rounded-full font-medium">
            {categoryLabels[testimonial.serviceCategory] || testimonial.serviceCategory}
          </span>
        </div>
      )}
      {testimonial.rating && (
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < testimonial.rating ? 'text-[#FD853A]' : 'text-gray-600'}
            >
              ★
            </span>
          ))}
        </div>
      )}

      <p className="text-gray-500 italic flex-grow line-clamp-4">&quot;{testimonial.testimonial}&quot;</p>
    </div>
  )
}
