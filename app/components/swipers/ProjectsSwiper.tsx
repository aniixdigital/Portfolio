'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Project, { ProjectType } from '../cards/Project'

interface ProjectsSwiperProps {
  projects: ProjectType[]
}

export default function ProjectsSwiper({ projects }: ProjectsSwiperProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="projects-swiper !pb-12"
    >
      {projects.map((project) => (
        <SwiperSlide key={project._id} className="rounded-2xl overflow-hidden p-8">
          <Project project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
