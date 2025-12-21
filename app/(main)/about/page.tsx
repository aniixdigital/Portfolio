import { Metadata } from "next";
import StaggerText from "@/app/animation/StaggerText"
import { FaCode, FaLightbulb, FaRocket, FaUsers, FaChartBar, FaPalette } from "react-icons/fa"
import { TfiAnnouncement } from 'react-icons/tfi'

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "3+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
]

const skills = [
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns including SEO, social media marketing, content marketing, and email campaigns to grow your online presence.",
    icon: "TfiAnnouncement",
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and Node.js for optimal performance and user experience.",
    icon: "FaCode",
  },
  {
    title: "Graphic Design",
    description: "Creative visual designs including logos, branding materials, social media graphics, and marketing collateral that capture your brand essence.",
    icon: "FaPalette",
  },
  {
    title: "Advertisement",
    description: "Effective advertising strategies across multiple platforms including Google Ads, Facebook Ads, and Instagram to maximize your ROI.",
    icon: "FaRocket",
  },
]

const journey = [
  "I started my journey in the digital world with a passion for creativity and technology. Over the years, I've had the privilege of working with diverse clients across various industries, helping them establish and grow their online presence.",
  "My approach combines strategic thinking with creative execution. I believe in understanding each client's unique needs and delivering solutions that not only meet but exceed expectations.",
  "Whether it's building a stunning website, crafting a compelling marketing campaign, or designing eye-catching graphics, I bring dedication and expertise to every project.",
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaCode: FaCode,
  FaLightbulb: FaLightbulb,
  FaRocket: FaRocket,
  FaUsers: FaUsers,
  FaChart: FaChartBar,
  FaPalette: FaPalette,
  TfiAnnouncement: TfiAnnouncement,
}

export const metadata: Metadata = {
  title: "About Animesh | Digital Marketing & Web Developer",
  description: "Learn about Animesh's journey in digital marketing, web development, and creative services. Experienced in helping businesses grow online.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#0f1620] text-white pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <StaggerText
            text="About Me"
            className="text-5xl sm:text-7xl font-bold text-[#FFECB6] mb-6"
            staggerType="chars"
          />
          <p className="text-lg sm:text-xl text-[#c8b98a] max-w-3xl mx-auto">
            Passionate digital marketer and web developer helping businesses thrive in the digital landscape
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg p-6 text-center border border-[#FD853A]/20 hover:border-[#FD853A] transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-[#FD853A] mb-2">{stat.number}</div>
              <div className="text-sm sm:text-base text-[#c8b98a]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FFECB6] mb-12 text-center">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || FaCode
              return (
                <div key={index} className="group p-8 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl border border-[#FD853A]/20 hover:border-[#FD853A] transition-all duration-300 hover:shadow-lg hover:shadow-[#FD853A]/20">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-[#FD853A]/20 rounded-lg group-hover:bg-[#FD853A]/40 transition-colors">
                      <Icon className="text-2xl text-[#FD853A]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FD853A] transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-[#c8b98a] text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Journey Section */}
        <div className="bg-gradient-to-r from-[#FD853A]/10 to-[#f39c12]/10 border border-[#FD853A]/20 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FFECB6] mb-6">My Journey</h2>
          <div className="text-[#c8b98a] leading-relaxed space-y-4">
            {journey.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-[#c8b98a] mb-6">Ready to work together?</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#FD853A] text-[#0f1620] font-bold rounded-full hover:bg-[#ff9b59] transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}