"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, UserPlus, MessageCircle } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Créditos", href: "#creditos" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <nav className="bg-[#2A7ABF] shadow-lg sticky top-0 z-50 relative overflow-hidden">
      {/* Elementos tecnológicos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-20 w-32 h-0.5 bg-[#4C97D2]"></div>
        <div className="absolute top-0 right-40 w-16 h-0.5 bg-[#D0EDFC]"></div>
        <div className="absolute top-2 left-60 w-2 h-2 border border-[#4C97D2] rotate-45"></div>
        <div className="absolute top-1 right-20 w-1 h-1 bg-[#D0EDFC] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-[#4C97D2] to-[#D0EDFC] rounded-xl p-2 mr-3 relative">
              <span className="text-[#12274B] font-bold text-xl">F</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 border border-[#D0EDFC] rotate-45"></div>
            </div>
            <span className="text-2xl font-bold text-white">Finova</span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-[#D0EDFC] font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D0EDFC] group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* CTAs Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-[#D0EDFC] text-[#D0EDFC] hover:bg-[#D0EDFC] hover:text-[#2A7ABF] rounded-xl backdrop-blur-sm bg-white/10"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Regístrate
            </Button>
            <Button size="sm" className="bg-[#D0EDFC] hover:bg-white text-[#2A7ABF] rounded-xl font-semibold">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat
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
                  className="text-white/90 hover:text-[#D0EDFC] font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#D0EDFC] text-[#D0EDFC] hover:bg-[#D0EDFC] hover:text-[#2A7ABF] rounded-xl"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Regístrate
                </Button>
                <Button size="sm" className="bg-[#D0EDFC] hover:bg-white text-[#2A7ABF] rounded-xl">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
