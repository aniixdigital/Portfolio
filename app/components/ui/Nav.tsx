"use client";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


gsap.registerPlugin(ScrollTrigger)

const Nav = () => {
  const lastScrollY = useRef(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()


  
  useGSAP(() => {
    // Hide/show navbar based on scroll direction after landing page
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top-=80vh', // After landing page
      // markers:true,
      onUpdate: (self) => {
        const currentScrollY = self.scroll()
        const navbar = document.getElementById('navbar')
        
        if (!navbar) return

        if (currentScrollY > lastScrollY.current && currentScrollY > window.innerHeight-50) {
          // Scrolling down & past landing - hide navbar
          gsap.to(navbar, { 
            y: -100, 
            opacity: 0, 
            duration: 0.3, 
            ease: 'power2.out' 
          })
        } else {
          // Scrolling up - show navbar
          gsap.to(navbar, { 
            y: 0, 
            opacity: 1, 
            duration: 0.3, 
            ease: 'power2.out' 
          })
        }
        
        lastScrollY.current = currentScrollY
      }
    })
  })

  const toggleMobileMenu = () => {
    if (!mobileMenuRef.current) return

    if (!isMobileMenuOpen) {
      // Open menu
      setIsMobileMenuOpen(true)
      gsap.fromTo(mobileMenuRef.current,
        { x: '100%', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
      )
      // Stagger menu items
      gsap.fromTo('.mobile-menu-item',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
      )
    } else {
      // Close menu
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => setIsMobileMenuOpen(false)
      })
    }
  }

  return (
    <>
      <div id='navbar' className='w-full flex sm:justify-center justify-end fixed z-50'>

        {/* Desktop Navigation */}
        <div className="w-[60%] sm:flex hidden bg-[#D0CC9E] shadow-md h-max justify-between rounded-full p-2 px-3 mt-4">
          <Link href="/" className={`cursor-pointer transition-colors px-6 py-2 rounded-full ${
            pathname === '/' ? 'bg-[#FD853A] text-white scale-105 font-medium' : 'hover:text-[#FD853A] hover:scale-105'
          }`}>Home</Link>
          <Link href="/about" className={`cursor-pointer transition-colors px-4 py-2 rounded-full ${
            pathname === '/about' ? 'bg-[#FD853A] text-white scale-105 font-medium' : 'hover:text-[#FD853A] hover:scale-105'
          }`}>About</Link>
          <Link 
            href="/projects"
            className={`cursor-pointer transition-colors px-4 py-2 rounded-full ${
              pathname === '/projects' ? 'bg-[#FD853A] text-white scale-105 font-medium' : 'hover:text-[#FD853A] hover:scale-105'
            }`}
          >
            Projects
          </Link>
          <Link href="/resume" className={`cursor-pointer transition-colors px-4 py-2 rounded-full ${
            pathname === '/resume' ? 'bg-[#FD853A] text-white scale-105 font-medium' : 'hover:text-[#FD853A] hover:scale-105'
          }`}>Resume</Link>
          <Link href="/contact" className={`cursor-pointer transition-colors px-4 py-2 rounded-full ${
            pathname === '/contact' ? 'bg-[#FD853A] text-white scale-105 font-medium' : 'hover:text-[#FD853A] hover:scale-105'
          }`}>Contact</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMobileMenu}
          className='sm:hidden block mr-6 mt-5 z-50 relative'
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <IoClose size={35} className='text-[#D0CC9E]' />
          ) : (
            <GiHamburgerMenu size={30} className='text-[#D0CC9E]' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-0 right-0 h-screen w-[70%] bg-[#0f1620] shadow-2xl z-40 sm:hidden"
          style={{ opacity: 0, transform: 'translateX(100%)' }}
        >
          <div className="flex flex-col items-start justify-center h-full px-8 space-y-8">
            <Link 
              href="/" 
              onClick={toggleMobileMenu}
              className={`mobile-menu-item text-2xl font-semibold transition-colors px-4 py-2 rounded-lg ${
                pathname === '/' ? 'bg-[#FD853A] text-white' : 'text-[#FFECB6] hover:text-[#FD853A]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={toggleMobileMenu}
              className={`mobile-menu-item text-2xl font-semibold transition-colors px-4 py-2 rounded-lg ${
                pathname === '/about' ? 'bg-[#FD853A] text-white' : 'text-[#FFECB6] hover:text-[#FD853A]'
              }`}
            >
              About
            </Link>
            <Link 
              href="/services" 
              onClick={toggleMobileMenu}
              className={`mobile-menu-item text-2xl font-semibold transition-colors px-4 py-2 rounded-lg ${
                pathname === '/services' ? 'bg-[#FD853A] text-white' : 'text-[#FFECB6] hover:text-[#FD853A]'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/resume" 
              onClick={toggleMobileMenu}
              className={`mobile-menu-item text-2xl font-semibold transition-colors px-4 py-2 rounded-lg ${
                pathname === '/resume' ? 'bg-[#FD853A] text-white' : 'text-[#FFECB6] hover:text-[#FD853A]'
              }`}
            >
              Resume
            </Link>
            <Link 
              href="/contact" 
              onClick={toggleMobileMenu}
              className={`mobile-menu-item text-2xl font-semibold transition-colors px-4 py-2 rounded-lg ${
                pathname === '/contact' ? 'bg-[#FD853A] text-white' : 'text-[#FFECB6] hover:text-[#FD853A]'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Nav