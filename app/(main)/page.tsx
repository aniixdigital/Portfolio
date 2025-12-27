import { Metadata } from "next";
import HomeClient from "../components/sections/HomeClient";
import TopProjects from "../components/sections/TopProjects";
import TopTestimonials from "../components/sections/TopTestimonials";

export const metadata: Metadata = {
  title: "Aniixdigital | Digital Marketing, Graphic Design & No-Code Web Development by Animesh Kumar",
  description: "Aniixdigital is a leading digital marketing, graphic design, and no-code web development agency founded by Animesh Kumar. Boost your business with expert SEO, branding, and creative solutions. 50+ projects delivered for 30+ clients.",
  openGraph: {
    title: "Aniixdigital | Digital Marketing, Graphic Design & No-Code Web Development",
    description: "Aniixdigital, led by Animesh Kumar, offers digital marketing, graphic design, and no-code web development services. 50+ projects | 30+ clients | 100% satisfaction.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <HomeClient>
      <div className="relative bg-[#0f1620]">
        <TopProjects />
      </div>
      <div className="text-[#FFECB6] font-poppins relative w-full bg-[#0f1620]">
        <TopTestimonials />
      </div>
    </HomeClient>
  );
}

