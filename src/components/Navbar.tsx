'use client'
import Image from 'next/image'
import { useState } from 'react'
export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home')

  const links = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About Us', href: '/', id: 'about' },
    { name: 'Services', href: '/', id: 'services' },
    { name: 'Testimonial', href: '/', id: 'testimonial' },
    { name: 'Advantage', href: '/', id: 'advantage' },
  ]

  return (
    <nav className="w-full shadow-sm bg-[#F5F5DC] sticky top-0 z-50 ">
      <div className="max-w-[1441px] w-[95%] mx-auto py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h2 className="font-futura-black text-[26px] uppercase font-bold leading-[1]">
            <span className="text-primary">Palm </span>
            <span className="text-secondary">Springs</span>
          </h2>

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className="font-avenir-lt font-extralight text-[24px]  text-[#666666] hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col gap-1">
            <div className="w-6 h-0.5 bg-[#232323]"></div>
            <div className="w-6 h-0.5 bg-[#232323]"></div>
            <div className="w-6 h-0.5 bg-[#232323]"></div>
          </button>
        </div>
      </div>
    </nav>
  )
}
