"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram } from "lucide-react"
import { useState } from "react"

export function SocialButtons() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const socialLinks = [
    {
      id: "facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1J7YjuVbcR/?mibextid=wwXIfr",
      label: "Síguenos en Facebook",
      hoverColor: "#1877F2", // Color oficial de Facebook
    },
    {
      id: "instagram",
      icon: Instagram,
      url: "https://www.instagram.com/finovasas?igsh=MWJhb3JvcGV2MGY4Yw==",
      label: "Síguenos en Instagram",
      hoverColor: "#E4405F", // Color oficial de Instagram
    },
    {
      id: "tiktok",
      icon: TikTokIcon,
      url: "https://www.tiktok.com/@finova.sas?_t=ZS-8x9aCZMnW4N&_r=1",
      label: "Síguenos en TikTok",
      hoverColor: "#000000", // Color oficial de TikTok
    },
  ]

  return (
    <div className="flex items-center gap-1">
      {socialLinks.map((social) => (
        <Button
          key={social.id}
          size="sm"
          variant="ghost"
          className="relative group p-2 rounded-full transition-all duration-300"
          aria-label={social.label}
          onClick={() => window.open(social.url, "_blank")}
          onMouseEnter={() => setHoveredButton(social.id)}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {/* Fondo animado en hover */}
          <span
            className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            style={{
              background: hoveredButton === social.id ? social.hoverColor : "#4C97D2",
              transform: hoveredButton === social.id ? "scale(1)" : "scale(0.8)",
              opacity: hoveredButton === social.id ? 0.15 : 0,
            }}
          ></span>

          {/* Icono */}
          <social.icon
            className={`w-5 h-5 text-white transition-all duration-300 ${
              hoveredButton === social.id ? "scale-110" : ""
            }`}
            style={{
              color: hoveredButton === social.id ? social.hoverColor : "white",
            }}
          />

          {/* Tooltip */}
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-[#12274B] text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
            {social.id.charAt(0).toUpperCase() + social.id.slice(1)}
          </span>
        </Button>
      ))}
    </div>
  )
}

// Componente personalizado para el ícono de TikTok
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.6 5.82C16.6 5.82 16.6 5.82 16.6 5.82C15.9165 5.03962 15.5397 4.03743 15.54 3H12.45V15.4C12.45 15.4 12.45 15.4 12.45 15.4C12.45 15.4 12.45 15.4 12.45 15.4C12.45 15.4 12.45 15.4 12.45 15.4C12.4494 15.6764 12.3879 15.9479 12.27 16.2C12.1512 16.4511 11.9826 16.6737 11.77 16.85C11.5618 17.0304 11.3214 17.1692 11.06 17.26C10.7819 17.3597 10.4873 17.4089 10.19 17.4C9.59491 17.4008 9.02539 17.1808 8.59 16.78C8.15461 16.3792 7.90025 15.8249 7.88 15.23C7.86058 14.6484 8.07433 14.0848 8.47 13.66C8.88204 13.2186 9.45416 12.9724 10.05 12.97C10.2603 12.9698 10.4693 12.9978 10.67 13.05V9.9C10.4453 9.87711 10.2189 9.86562 9.9925 9.86562C8.95259 9.86562 7.93327 10.1732 7.06952 10.7509C6.20578 11.3286 5.53842 12.1513 5.15405 13.1059C4.76968 14.0604 4.68454 15.1032 4.90954 16.1057C5.13454 17.1082 5.65987 18.0269 6.41707 18.7442C7.17426 19.4615 8.12598 19.9368 9.15223 20.1057C10.1785 20.2747 11.2312 20.1291 12.1795 19.6823C13.1278 19.2354 13.9282 18.5057 14.4702 17.5897C15.0122 16.6737 15.2734 15.6144 15.23 14.55V9.15C16.5651 10.0992 18.1593 10.6022 19.8 10.6V7.51C19.8 7.51 18.1 7.51 16.6 5.82Z"
        fill="currentColor"
      />
    </svg>
  )
}
