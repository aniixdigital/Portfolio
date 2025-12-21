import { client } from '@/sanity/lib/client'
import { topTestimonialsQuery, averageRatingQuery } from '@/sanity/lib/queries'
import { TestimonialType } from '../cards/Testimonial'
import TestimonialsSwiper from '../swipers/TestimonialsSwiper'
import StaggerText from '@/app/animation/StaggerText'
import { RiFeedbackFill } from 'react-icons/ri'
import Link from 'next/link'

interface RatingStats {
  averageRating: number | null
  totalReviews: number
}

export default async function TopTestimonials() {
  const [testimonials, stats]: [TestimonialType[], RatingStats] = await Promise.all([
    client.fetch(topTestimonialsQuery),
    client.fetch(averageRatingQuery),
  ])

  const averageRating = stats.averageRating ? stats.averageRating.toFixed(1) : '0'

  return (
    <div className="py-16 px-8 relative"
      style={{
        backgroundImage: "url('/screenbg.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
      <div className="absolute inset-0 bg-[#0f1620]/20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Average Rating */}
        <div className="text-center mb-12">
          <StaggerText
            text="What Clients Say"
            className="text-3xl sm:text-6xl font-bold text-[#FFECB6] mb-8"
            staggerType="chars"
          />

          {stats.totalReviews > 0 && (
            <div className="flex items-center justify-between gap-4">
              <div className="bg-[#1a1a1a] rounded-2xl px-4 sm:px-8 py-4 inline-flex items-center gap-4">
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center">
                    <span className="text-2xl sm:text-4xl font-bold text-[#FD853A]">{averageRating}</span>
                    <span className="text-xl sm:text-2xl text-gray-400">/5</span>
                  </div>
                  <div className="flex gap-1 mt-1 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= Math.round(stats.averageRating || 0)
                            ? 'text-[#FD853A] text-lg sm:text-xl'
                            : 'text-gray-600 text-lg sm:text-xl'
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-l border-gray-700 pl-4">
                  <p className="text-gray-400 text-xs sm:text-sm">Based on</p>
                  <p className="text-white font-semibold text-sm sm:text-base">
                    {stats.totalReviews} review{stats.totalReviews !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              
              <Link 
                href="/reviews" 
                className="cursor-pointer flex p-3 px-6 rounded-full bg-[#FD853A] hover:bg-[#ff9b59] text-[#0f1620] font-bold justify-center items-center gap-2 transition-colors"
              >
                <RiFeedbackFill />
                Give Feedback
              </Link>
            </div>
          )}
        </div>

        {/* Testimonials Swiper */}
        {testimonials.length === 0 ? (
          <div className="text-center text-gray-400 py-10">
            No testimonials yet.
          </div>
        ) : (
          <TestimonialsSwiper testimonials={testimonials} />
        )}
      </div>
    </div>
  )
}
