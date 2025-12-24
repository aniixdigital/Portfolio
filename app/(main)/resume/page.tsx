import React from 'react'
import ResumeViewer from '../../components/ui/ResumeViewer'
import StaggerText from '@/app/animation/StaggerText'


const Resume = () => {
  return (
    <div>
      <StaggerText
                  text="Resume"
                  className="text-5xl sm:text-7xl text-center font-bold text-[#FFECB6] pt-28 mb-8"
                  staggerType="chars"
                />
      <ResumeViewer />
    </div>
  )
}

export default Resume