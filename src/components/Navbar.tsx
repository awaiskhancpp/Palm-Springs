'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About Us', href: '/', id: 'about' },
    { name: 'Services', href: '/', id: 'services' },
    { name: 'Testimonial', href: '/', id: 'testimonial' },
    { name: 'Advantage', href: '/', id: 'advantage' },
  ]

  const handleLinkClick = (id: any) => {
    setActiveLink(id)
    setIsMenuOpen(false)
  }

  return (
    <nav className="w-full bg-[#F5F5DC] sticky top-0 z-50">
      <div className="max-w-[1441px] w-[95%] mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h2 className="font-futura-black text-[26px] uppercase font-bold leading-[1]">
            <span className="text-primary">Palm </span>
            <span className="text-secondary">Springs</span>
          </h2>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className="font-avenir-lt font-extralight text-[24px] text-[#666666] hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1 relative w-6 h-6 justify-center"
          >
            {/* Hamburger to X Animation */}
            <div
              className={`w-6 h-0.5 bg-[#232323] absolute transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-0' : 'translate-y-[-8px]'
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-[#232323] transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-[#232323] absolute transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[8px]'
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-[#e0e0e0]">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`font-avenir-lt font-extralight text-[18px] transition-colors ${
                  activeLink === link.id
                    ? 'text-secondary font-semibold'
                    : 'text-[#666666] hover:text-secondary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
