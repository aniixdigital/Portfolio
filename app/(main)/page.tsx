import { Metadata } from "next";
import HomeClient from "../components/sections/HomeClient";
import TopProjects from "../components/sections/TopProjects";
import TopTestimonials from "../components/sections/TopTestimonials";

export const metadata: Metadata = {
  title: "Animesh Prajapati | Digital Marketing Portfolio",
  description: "Animesh is a digital marketer and web developer specializing in web development, digital marketing, graphic design, and advertisement services.",
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

