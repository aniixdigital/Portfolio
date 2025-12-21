'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Testimonial, { TestimonialType } from '../cards/Testimonial'

interface TestimonialsSwiperProps {
  testimonials: TestimonialType[]
}

export default function TestimonialsSwiper({ testimonials }: TestimonialsSwiperProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="testimonials-swiper !pb-12"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial._id}>
          <Testimonial testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
