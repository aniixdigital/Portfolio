"use client";
import ReactLenis from "lenis/react";
import { useLenis } from 'lenis/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    useLenis(() => {
      ScrollTrigger.update()
    })
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;