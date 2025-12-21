"use client";
import Image from "next/image";
import ServiceCard from "@/app/components/cards/ServiceCard";
import { serviceCardAnimation } from "@/app/animation/serviceCardAnimation";
import { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import StaggerText from "@/app/animation/StaggerText";

export default function Services() {
    const [disabledButton, setDisabledButton] = useState("1");

    const handleServiceClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id = (e.currentTarget as HTMLElement).id;
        setDisabledButton(id);
        serviceCardAnimation(e);
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = "+916209328157";
        const message = "Hi, I'm interested in your services!";
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };
    return (
        <>
            <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold flex mb-4 w-full justify-between items-center gap-4">
                <StaggerText
                        segments={[
                          { text: 'My', color: '#FFECB6' },
                          { text: 'Services', color: '#f78446' },
                        ]}
                        className="text-3xl sm:text-6xl font-extrabold mb-12 text-center"
                        staggerType="chars"
                      />
                <button 
                    onClick={handleWhatsAppClick}
                    className="p-3 sm:px-4 sm:py-2 self-center text-[0.9rem] sm:text-[1.1rem] text-black bg-[#ffed9f] rounded-full hover:bg-[#f0bb0f] cursor-pointer flex items-center gap-2 transition-colors"
                >
                    <IoChatbubbleEllipsesOutline className="text-xl" />
                    <span className="hidden sm:inline">Let&apos;s Chat</span>
                </button>
            </div>
            <div className="w-full">
                <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-10 mt-6 sm:mt-10 flex-wrap text-black font-semibold">
                    <button id="1" disabled={disabledButton === "1"} onClick={handleServiceClick} className="service-btn rounded-full bg-[#FD853A] cursor-pointer px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base hover:bg-[#ca6619] service-btn-selected transform transition-all duration-150 hover:scale-110">Marketting</button>
                    <button id="2" disabled={disabledButton === "2"} onClick={handleServiceClick} className="service-btn rounded-full bg-[#FD853A] cursor-pointer px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base hover:bg-[#ca6619] transform transition-all duration-150 hover:scale-110">Advertisement</button>
                    <button id="3" disabled={disabledButton === "3"} onClick={handleServiceClick} className="service-btn rounded-full bg-[#FD853A] cursor-pointer px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base hover:bg-[#ca6619] transform transition-all duration-150 hover:scale-110">Graphic Design</button>
                    <button id="4" disabled={disabledButton === "4"} onClick={handleServiceClick} className="service-btn rounded-full bg-[#FD853A] cursor-pointer px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base hover:bg-[#ca6619] transform transition-all duration-150 hover:scale-110">Web Development</button>
                </div>
            </div>
            <div className="w-full h-full relative font-poppins">

                <ServiceCard className="card card1 top-24 z-40 scale-100 bg-[#ff995a7d] opacity-100 text-gray-900" id="service1" service="Digital Marketing" description="Data-driven campaigns to grow reach, leads, and retention across channels" 
                serviceType="SEO, content marketing, email marketing, social media marketing, marketing automation">
                    <Image
                        src={"/digi_market.png"}
                        alt="service pic"
                        width={300}
                        height={300}
                        className="object-contain w-full h-full"
                    />
                </ServiceCard>
                <ServiceCard className="card card2 top-16 z-30 scale-90 bg-[#ff44007d] opacity-90 text-white/80" id="service2" service="Advertisement" 
                description="High-converting ad creatives and media buying across search, social, and display"
                serviceType="Google Ads, Meta Ads, YouTube Ads">
                    <Image
                        src={"/ads.png"}
                        alt="service pic"
                        width={300}
                        height={300}
                        className="object-contain w-full h-full"
                    />
                </ServiceCard>
                <ServiceCard className="card card3 top-8 z-20 scale-80 bg-[#12caf37d] opacity-80 text-gray-900" id="service3" service="Graphic Design" 
                description="Brand-first visuals for digital and print that communicate clearly and look premium"
                serviceType="Logo Design, Branding, Print Design, Digital Design">
                    
                    <Image
                        src={"/graphicD.png"}
                        alt="service pic"
                        width={300}
                        height={300}
                        className="object-contain w-full h-full"
                    />
                </ServiceCard>
                <ServiceCard className="card card4 top-0 z-10 scale-70 bg-[#f071b07d] opacity-70 text-white" id="service4" service="Web Development" 
                description="Fast, responsive websites with modern stacks, SEO-friendly and easy to maintain"
                serviceType="Landing Pages, E-commerce, CMS, No-code Web Apps">
                    <Image
                        src={"/webDev.png"}
                        alt="service pic"
                        width={300}
                        height={300}
                        className="object-contain sm:w-full w-[80%] h-full"
                    />
                </ServiceCard>
            </div>
        </>
    );
}