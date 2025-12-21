'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TextSegment {
  text: string
  color?: string
}

interface StaggerTextProps {
  text?: string
  segments?: TextSegment[]
  className?: string
  staggerType?: 'chars' | 'words'
}

export default function StaggerText({ text, segments, className = '', staggerType = 'chars' }: StaggerTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll('.stagger-item')

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 50,
        rotateX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  // segments (multiple colored words)
  if (segments && segments.length > 0) {
    return (
      <h2 ref={containerRef} className={`${className} perspective-500 flex flex-wrap gap-2 justify-center`}>
        {segments.map((segment, segmentIndex) => {
          const items = staggerType === 'chars' ? segment.text.split('') : segment.text.split(' ')
          
          return (
            <span key={segmentIndex} className="inline-flex flex-wrap">
              {items.map((item, itemIndex) => (
                <span
                  key={`${segmentIndex}-${itemIndex}`}
                  className="stagger-item inline-block"
                  style={{ 
                    color: segment.color || 'inherit',
                    transformStyle: 'preserve-3d' 
                  }}
                >
                  {item === ' ' ? '\u00A0' : item}
                </span>
              ))}
            </span>
          )
        })}
      </h2>
    )
  }

  // Handle single text (original behavior)
  const items = staggerType === 'chars' ? text!.split('') : text!.split(' ')

  return (
    <h2 ref={containerRef} className={`${className} perspective-500`}>
      {items.map((item, index) => (
        <span
          key={index}
          className="stagger-item inline-block"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {item === ' ' ? '\u00A0' : item}
          {staggerType === 'words' && index < items.length - 1 && '\u00A0'}
        </span>
      ))}
    </h2>
  )
}
