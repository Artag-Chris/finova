"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, UserPlus, } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from 'next/image'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  const navbarBgRef = useRef(null)
  const [activeItem, setActiveItem] = useState("")

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Créditos", href: "#creditos" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ]

  useEffect(() => {
    if (typeof window === "undefined") return

    const navbarBg = navbarBgRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top top",
        scrub: true,
        markers: false,
      },
    })

    tl.to(navbarBg, {
      opacity: 0.8,
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power1.out",
    })

    // Update active section based on scroll
    const handleScroll = () => {
      const current = menuItems.find(item => {
        const section = document.querySelector(item.href)
        if (section) {
          const rect = section.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveItem(current ? current.name : "")
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav ref={navbarRef} className="sticky top-0 z-50 overflow-hidden">
      <div
        ref={navbarBgRef}
        className="absolute inset-0 bg-[#2A7ABF] transition-opacity duration-300 z-0"
        style={{
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)",
        }}
      ></div>

      {/* Elementos tecnológicos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-10">
        <div className="absolute top-0 left-20 w-32 h-0.5 bg-[#4C97D2]"></div>
        <div className="absolute top-0 right-40 w-16 h-0.5 bg-[#D0EDFC]"></div>
        <div className="absolute top-2 left-60 w-2 h-2 border border-[#4C97D2] rotate-45"></div>
        <div className="absolute top-1 right-20 w-1 h-1 bg-[#D0EDFC] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo Real de Finova */}
          <div className="flex items-center">
            <Image
              src="/finovasinfondo.png"
              alt="Finova Logo"
              width={240}
              height={60}
              className="h-60 w-auto"
              priority
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-white/90 hover:text-[#12274B] font-medium transition-colors duration-200 relative group text-lg tracking-wide
        ${activeItem === item.name ? 'text-[#12274B]' : ''}`}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-[#12274B] transition-all duration-300
        ${activeItem === item.name ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
              </a>
            ))}
          </div>

          {/* CTAs Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => window.open('https://app.finova.com.co/auth/register', '_blank')}
              variant="outline"
              size="sm"
              className="border-[#12274B] text-[#12274B] bg-white/90 hover:bg-[#12274B] hover:text-white rounded-xl font-semibold transition-all duration-300 text-base"
            >
              <UserPlus className="w-4 h-4 mr-2 text-amber-400" />
              Regístrate
            </Button>
            <Button
              onClick={() => window.open('https://app.finova.com.co/auth/boxed-signin', '_blank')}
              size="sm"
              className="bg-[#12274B] hover:bg-[#12274B]/80 text-white rounded-xl font-semibold shadow-lg text-base"
            >
              Login
            </Button>
          </div>

          {/* Menu Mobile Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-white/90 hover:text-[#12274B] font-medium py-2 transition-colors duration-200
                    ${activeItem === item.name ? 'text-[#12274B]' : ''}`}
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveItem(item.name)
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Button
                  onClick={() => window.open('https://app.finova.com.co/auth/register', '_blank')}
                  variant="outline"
                  size="sm"
                  className="border-[#12274B] text-[#12274B] bg-white/90 hover:bg-[#12274B] hover:text-white rounded-xl"
                >
                  <UserPlus className="w-4 h-4 mr-2 text-amber-400" />
                  Regístrate
                </Button>
                <Button
                  onClick={() => window.open('https://app.finova.com.co/auth/boxed-signin', '_blank')}
                  size="sm"
                  className="bg-[#12274B] hover:bg-[#12274B]/80 text-white rounded-xl"
                >
                  login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}