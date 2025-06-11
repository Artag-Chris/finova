import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#12274B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-[#2A7ABF] to-[#4C97D2] rounded-xl p-2 mr-3">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold">Finova</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Tu aliado financiero de confianza. Créditos justos, transparentes y diseñados para impulsar tus proyectos.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-white hover:text-[#4C97D2] p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-[#4C97D2] p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-[#4C97D2] p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-[#4C97D2] transition-colors">
                  Créditos Personales
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#4C97D2] transition-colors">
                  Créditos de Vehículo
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#4C97D2] transition-colors">
                  Créditos de Vivienda
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#4C97D2] transition-colors">
                  Refinanciación
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#4C97D2] transition-colors">
                  Asesoría Financiera
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-[#4C97D2] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#4C97D2] transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#4C97D2] transition-colors">
                  Trabaja con Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#4C97D2] transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#4C97D2] transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#4C97D2]" />
                <span className="text-white/80">+57 (1) 234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#4C97D2]" />
                <span className="text-white/80">+57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#4C97D2]" />
                <span className="text-white/80">info@finova.com.co</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#4C97D2] mt-0.5" />
                <span className="text-white/80">
                  Calle 100 #19-61
                  <br />
                  Bogotá, Colombia
                </span>
              </div>
            </div>

            <Button size="sm" className="bg-[#25D366] hover:bg-[#20BA5A] text-white mt-4 rounded-xl w-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Finova. Todos los derechos reservados. | Vigilado por la Superintendencia Financiera de Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
