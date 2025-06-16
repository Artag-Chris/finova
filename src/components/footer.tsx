"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, MessageCircle, ExternalLink, ChevronRight, Phone } from "lucide-react"
import { SocialButtons } from "./social-buttons"
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#12274B] text-white relative overflow-hidden">
      {/* Formas orgánicas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-[#2A7ABF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-[#4C97D2]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Logo y descripción - 4 columnas en desktop */}
          <div className="md:col-span-4 space-y-6">
            {/* Logo con espacio bien definido */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center h-32 w-full">
              <Image
                src="/LOGO FINOVA_Mesa de trabajo 1.png"
                alt="Finova Logo"
                width={240}
                height={60}
                className="h-60 w-auto"
                priority
              />
            </div>

            <p className="text-white/80 text-sm leading-relaxed">
              Tu aliado financiero de confianza. Créditos justos, transparentes y diseñados para impulsar tus proyectos.
            </p>

            <div className="pt-2">
              <SocialButtons />
            </div>
          </div>

          {/* Servicios - 2 columnas en desktop */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span className="w-6 h-0.5 bg-[#4C97D2] mr-2"></span>
              Servicios
            </h3>
            <ul className="space-y-3 text-sm">
              {["Créditos Personales", "Refinanciación", "Asesoría Financiera"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-[#4C97D2] transition-colors flex items-center group">
                    <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa - 3 columnas en desktop */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span className="w-6 h-0.5 bg-[#4C97D2] mr-2"></span>
              Empresa
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Nosotros",
                "Testimonios",
                "Trabaja con Nosotros",
                "Términos y Condiciones",
                "Política de Privacidad",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-[#4C97D2] transition-colors flex items-center group">
                    <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto - 3 columnas en desktop */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span className="w-6 h-0.5 bg-[#4C97D2] mr-2"></span>
              Contacto
            </h3>

            <div className="space-y-4 text-sm">
              <a
                href="tel:+573226962139"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#4C97D2]/20 flex items-center justify-center group-hover:bg-[#4C97D2]/30 transition-colors">
                  <Phone className="w-4 h-4 text-[#4C97D2]" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">+57 322 696 2139</span>
              </a>

              <a
                href="mailto:info@finova.com.co"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#4C97D2]/20 flex items-center justify-center group-hover:bg-[#4C97D2]/30 transition-colors">
                  <Mail className="w-4 h-4 text-[#4C97D2]" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">info@finova.com.co</span>
              </a>

              <a
                href="https://maps.google.com/?q=calle+24+7-29+oficina+613+Pereira+Colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#4C97D2]/20 flex items-center justify-center mt-0.5 group-hover:bg-[#4C97D2]/30 transition-colors">
                  <MapPin className="w-4 h-4 text-[#4C97D2]" />
                </div>
                <div>
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    Calle 24 #7-29 oficina 613
                    <br />
                    Pereira, Colombia
                  </span>
                  <div className="flex items-center text-xs text-[#4C97D2] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Ver en mapa</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </a>
            </div>

            <Button
              size="sm"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white mt-6 rounded-xl w-full transition-all duration-300 hover:shadow-lg group"
              onClick={() =>
                window.open(
                  `https://wa.me/573226962139?text=${encodeURIComponent("¡Hola! Me interesa obtener más información sobre los créditos de Finova.")}`,
                  "_blank",
                )
              }
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="group-hover:tracking-wide transition-all">Escríbenos por WhatsApp</span>
            </Button>
          </div>
        </div>

        {/* Separador con degradado */}
        <div className="mt-12 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Footer inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-white/60 text-sm">© 2025 Finova. Todos los derechos reservados.</p>

          <div className="flex items-center">
            <Image
              src="/bloque531.png"
              alt="Description"
              width={160}
              height={60}
              className="your-existing-classes"
            />
            <span className="text-white/60 text-xs ml-2">Vigilado por la Superintendencia Financiera de Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
