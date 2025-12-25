"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./Services";
import StaggerText from "@/app/animation/StaggerText";
gsap.registerPlugin(ScrollTrigger);

export default function HomeClient({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    const isMobile = window.innerWidth < 640;
    
    // will-change and transform for GPU acceleration
    gsap.set(".landing, .services-section, .card", {
      willChange: "transform, opacity",
    });

    gsap.to(".landing", {
      scale: 0.80,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#container",
        start: "top 0%",
        end: "top -100%",
        scrub: isMobile ? 0.3 : 0.5,
        pin: true,
        pinSpacing: false,
      },
    });

    gsap.fromTo(".services-section", { opacity: 0.7, scale: 0.9, borderRadius: "40px" }, {
      opacity: 1,
      scale: 1,
      borderRadius: "0px",
      ease: "none",
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 100%",
        end: "top 20%",
        scrub: isMobile ? 0.3 : 0.5,
      },
    });

    // Animate each card from opacity 0 to its original opacity
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      const computedStyle = window.getComputedStyle(card);
      const originalOpacity = parseFloat(computedStyle.opacity) || 1;
      
      gsap.fromTo(card, 
        { y: isMobile ? 50 : 100, opacity: 0 }, 
        {
          y: 0,
          opacity: originalOpacity,
          ease: isMobile ? "power2.out" : "none",
          stagger: isMobile ? 0.2 : 0,
          scrollTrigger: {
            trigger: ".services-section",
            start: isMobile ? "top 50%" : "top 50%",
            end: isMobile ? "top 35%" : "top 35%",
            scrub: isMobile ? 0.2 : 0.5,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div id="container">
        <div className="w-full h-dvh landing relative">
          <div className="w-full relative text-center pt-22 font-bold tracking-tight leading-26 sm:text-[6rem] text-[3rem] text-[#FFECB6]">
            <div className=" flex sm:flex-row flex-col justify-center items-center leading-20 sm:gap-4 gap-0 sm:text-[6rem] text-[4rem] mt-2 sm:mt-4 text-[#FFECB6]">
              <span>I&apos;m</span> <span className="text-[#FD853A] sm:text-[6rem] text-[4.5rem]">Animesh</span>

            </div>
            {/* <h1> Digital Marketer</h1> */}
            <StaggerText text="Digital Marketer"  />

            <div className="sm:w-16 sm:h-16 w-12 h-12 absolute sm:left-[18%] left-[4%] -bottom-12">
              <Image
                src={"/Tline.svg"}
                alt="profile pic"
                width={64}
                height={64}
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-[50%] -translate-x-1/2 bg-[#d2af68] sm:w-[45%] w-full sm:h-[45%] h-[30%] rounded-t-full">
          </div>
          <Image
            src={"/animesh.webp"}
            alt="profile pic"
            width={450}
            height={450}
            priority
            className="blur-sm sm:w-[450px] sm:h-[450px] w-[125%] h-[60%] absolute bottom-0 left-[50%] -translate-x-1/2 !max-w-none"
          />
          <Image
            src={"/animesh.webp"}
            alt="profile pic"
            width={450}
            height={450}
            priority
            className="contrast-125 brightness-105 sm:w-[450px] sm:h-[450px] w-[125%] h-[60%] absolute bottom-0 left-[50%] -translate-x-1/2 !max-w-none"
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
