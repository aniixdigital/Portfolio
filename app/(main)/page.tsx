import { Metadata } from "next";
import HomeClient from "../components/sections/HomeClient";
import TopProjects from "../components/sections/TopProjects";
import TopTestimonials from "../components/sections/TopTestimonials";

export const metadata: Metadata = {
  title: "Home | Digital Marketing & Web Development Portfolio",
  description: "Animesh Kumar is a digital marketer and web developer with 3+ years of experience. Specializing in SEO, social media marketing, web development, graphic design, and advertisement services. 50+ projects completed.",
  openGraph: {
    title: "Animesh Kumar | Digital Marketing & Web Development Portfolio",
    description: "Transform your business with expert digital marketing, web development, and creative services. 50+ projects | 30+ clients | 100% satisfaction.",
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

