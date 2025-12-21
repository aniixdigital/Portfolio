"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./Services";
gsap.registerPlugin(ScrollTrigger);

export default function HomeClient({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    gsap.to(".landing", {
      scale: 0.85,
      opacity: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: "#container",
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    gsap.fromTo(".services-section", { opacity: 0.7, scale: 0.9, borderRadius: "40px" }, {
      opacity: 1,
      scale: 1,
      borderRadius: "0px",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 100%",
        end: "top 20%",
        scrub: true,
      },
    });

    gsap.fromTo(".card", { y: 100 }, {
      y: 0,
      ease: "power1.in",
      duration:0.8,
      stagger:0.2,
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 50%",
        end: "top 35%",
        scrub: true,
        markers:true,
      },
    });
  }, []);

  return (
    <>
      <div id="container">
        <div className="w-full h-screen landing relative">
          <div className="w-full relative text-center pt-22 font-bold tracking-tight leading-26 sm:text-[6rem] text-[3rem] text-[#FFECB6]">
            <h1><span>I&apos;m</span> <span className="text-[#FD853A]">Animesh</span></h1>
            <h1> Digital Marketer</h1>
            <div className="w-16 h-16 absolute left-[18%] -bottom-12">
              <Image
                src={"/Tline.svg"}
                alt="profile pic"
                width={64}
                height={64}
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-[50%] -translate-x-1/2 bg-[#f0d06f] sm:w-[45%] w-[85%] sm:h-[45%] h-[30%] rounded-t-full">
            <Image
              src={"/animesh.png"}
              alt="profile pic"
              width={450}
              height={450}
              className="blur-sm absolute bottom-0 left-[50%] -translate-x-1/2"
            />
          </div>
          <Image
            src={"/animesh.png"}
            alt="profile pic"
            width={450}
            height={450}
            className="contrast-105 brightness-105 sm:w-[450px] w-[200%] sm:h-[450px] h-[60%] absolute bottom-0 left-[50%] -translate-x-1/2"
          />
        </div>
      </div>

      <div id="services-section" className="services-section relative bg-[#0f1620] min-h-screen h-[1000px] p-8 pt-16 text-[#FFECB6]">
        <Services />
      </div>
      
      {children}
    </>
  );
}
