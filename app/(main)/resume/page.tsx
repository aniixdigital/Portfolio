import { Metadata } from 'next';
import React from 'react'
import ResumeViewer from '../../components/ui/ResumeViewer'
import StaggerText from '@/app/animation/StaggerText'
import { BiDownload } from 'react-icons/bi';

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download Animesh Kumar's professional resume. 3+ years of experience in digital marketing, web development, graphic design, and advertisement.",
  openGraph: {
    title: "Resume | Animesh Kumar",
    description: "View and download Animesh Kumar's professional resume showcasing skills in digital marketing, web development, and creative services.",
    url: "/resume",
  },
  alternates: {
    canonical: "/resume",
  },
};

const Resume = () => {
  return (
    <div>
      <StaggerText
        text="Resume"
        className="text-5xl sm:text-7xl text-center font-bold text-[#FFECB6] pt-28 mb-8"
        staggerType="chars"
      />
      <div className="flex sm:justify-end justify-center mb-6 mr-8">
        <a
          href="/resume.pdf"
          download="AnimeshKumar_resume.pdf"
          className="bg-[#FD853A] flex gap-2 justify-center items-center hover:bg-[#d97a2b] text-white font-semibold py-2 px-6 rounded-full shadow transition-colors duration-200"
        >
         <BiDownload fontWeight={800}/> Download Resume
        </a>
      </div>
      <ResumeViewer />
    </div>
  )
}

export default Resume