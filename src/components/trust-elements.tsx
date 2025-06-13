"use client"

import { Card } from "@/components/ui/card"
import { Shield, Users, TrendingUp, CheckCircle, MapPin, Coffee, CreditCard, Building, BadgeCheck } from "lucide-react"
import { useState } from "react"
import Image from 'next/image'
import { LucideProps } from 'lucide-react'

export function TrustElements() {
  const [activeTab, setActiveTab] = useState("garantias")

  const guarantees = [
    {
      icon: Building,
      title: "Afiliados a la Cámara de Comercio",
      description: "Supervisados activamente por la CC de Pereira: cumplimos los más altos estándares éticos y financieros ",
      badge: "Local",
    },
    {
      icon: Shield,
      title: "Protección de Datos Nivel Fort Knox",
      description: "Cumplimiento estricto de la Ley 1266 con cifrado bancario AES-256, auditorías trimestrales externas y tu derecho a eliminar datos cuando quieras. Tus secretos siguen siendo tuyos.",
      badge: "Certificado ISO 27001",
    },
    {
      icon: Users,
      title: "Comunidad de +5,000 Familias Colombianas",
      description: "Nos eligen porque: 1) 9 de cada 10 recomiendan nuestro servicio 2) Reciben soporte humano 24/7 3) Renuevan su crédito 3X más rápido que con bancos tradicionales",
      badge: "98% Satisfacción",

      verification: "Verifica testimonios reales: finova.co/clientes-pereira"
    },
    {
      icon: TrendingUp,
      title: "98% de Créditos Aprobados en Risaralda",
      description: "La tasa más alta de la región cafetera: 2X mayor que bancos tradicionales. Más de 3,000 emprendimientos financiados en Pereira, Armenia y Manizales.",
      badge: "Líder Regional",
      source: "Informe Superfinanciera 2023"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Simula",
      description: "Conoce tu cuota exacta en segundos, sin aproximaciones",
      icon: Calculator,
    },
    {
      step: "02",
      title: "Solicita",
      description: "Completa online en 5 minutos desde cualquier ciudad",
      icon: FileText,
    },
    {
      step: "03",
      title: "Aprobación",
      description: "Respuesta rapida en segundos: sí o no, sin vueltas",
      icon: CheckCircle,
    },
    {
      step: "04",
      title: "Recibe",
      description: "Transferencia a velocidad Finova: tu dinero disponible en minutos con notificación bancaria instantánea",
      icon: CreditCard,
    },
  ]

  const certifications = [
    {
      logo: "/camara_1.png",
      name: "Cámara de Comercio de Pereira",
      description: "Verificados y registrados oficialmente",
    },
    {
      logo: "/super_1.png",
      name: "Supersolidaria",
      description: "Vigilados por entidades reguladoras",
    },
    {
      logo: "/trans_union_1.png",
      name: "TransUnion",
      description: "Aliados oficiales para historial crediticio",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#D0EDFC]/30 to-white relative overflow-hidden">
      {/* Formas orgánicas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-20 bg-[#D0EDFC] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#4C97D2]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-[#D0EDFC]/40 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D0EDFC] rounded-full px-6 py-2 text-sm font-semibold text-[#12274B] mb-6">
            <Coffee className="w-4 h-4 text-amber-400" />
            Hecho en Colombia para colombianos
          </div>

          <h2 className="text-4xl font-bold text-[#12274B] mb-6">
            Tu paz financiera, <span className="text-[#2A7ABF]">nuestra razón de ser</span>
          </h2>

          <p className="text-xl text-[#12274B]/70 max-w-3xl mx-auto">
            Con el respaldo de la Cámara de Comercio de Pereira y miles de familias colombianas
          </p>
        </div>

        {/* Tabs de navegación */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#D0EDFC]/50 rounded-full p-1">
            <button
              onClick={() => setActiveTab("garantias")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "garantias" ? "bg-[#2A7ABF] text-amber-400 shadow-md" : "text-[#12274B] hover:bg-[#D0EDFC]"
                }`}
            >
              Nuestras garantías
            </button>
            <button
              onClick={() => setActiveTab("proceso")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "proceso" ? "bg-[#2A7ABF] text-amber-400 shadow-md" : "text-[#12274B] hover:bg-[#D0EDFC]"
                }`}
            >
              Proceso simple
            </button>
            <button
              onClick={() => setActiveTab("certificaciones")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "certificaciones"
                ? "bg-[#2A7ABF] text-amber-400 shadow-md"
                : "text-[#12274B] hover:bg-[#D0EDFC]"
                }`}
            >
              Certificaciones
            </button>
          </div>
        </div>

        {/* Contenido de las tabs */}
        <div className="mb-16">
          {/* Tab 1: Garantías */}
          {activeTab === "garantias" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((guarantee, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group hover:scale-[1.03]"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#2A7ABF] to-[#4C97D2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <guarantee.icon className="w-7 h-7 text-[#A8A9AD]" />
                      </div>
                      <span className="text-xs font-semibold bg-[#D0EDFC] text-[#2A7ABF] px-3 py-1 rounded-full">
                        {guarantee.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#12274B] mb-2">{guarantee.title}</h3>
                    <p className="text-[#12274B]/70 text-sm leading-relaxed">{guarantee.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Tab 2: Proceso */}
          {activeTab === "proceso" && (
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-[#12274B] mb-4">
                  Así funciona: <span className="text-[#2A7ABF]">claro como el café de la mañana</span>
                </h3>
                <p className="text-[#12274B]/70 text-lg">Sin sorpresas, sin letra pequeña. Así de simple.</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Línea conectora */}
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#2A7ABF] to-[#4C97D2] transform translate-x-4 z-0"></div>
                    )}

                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#2A7ABF] to-[#4C97D2] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-amber-400 font-bold text-lg">{step.step}</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#12274B] mb-2">{step.title}</h4>
                      <p className="text-[#12274B]/70 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12 space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#D0EDFC] rounded-full px-6 py-3 
  transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
  hover:bg-gradient-to-r hover:from-[#D0EDFC] hover:to-[#4C97D2]/30 cursor-pointer
  group"
                >
                  <CheckCircle className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-[#12274B] font-semibold group-hover:text-[#12274B]/90">
                    Sin penalizaciones por pago anticipado
                  </span>
                </div>
                <div className="flex justify-center mt-6">
                  <div className="inline-flex items-center gap-3 bg-white border border-[#D0EDFC] 
    rounded-full px-6 py-3 shadow-sm transform transition-all duration-300 
    hover:shadow-md hover:border-[#2A7ABF] hover:scale-[1.02]
    hover:bg-gradient-to-r hover:from-white hover:to-[#D0EDFC]/20
    group cursor-pointer"
                  >
                    <MapPin className="w-5 h-5 text-amber-400 group-hover:animate-bounce" />
                    <span className="text-[#12274B] transition-colors duration-300 group-hover:text-[#2A7ABF]">
                      <span className="font-semibold">¿Dudas?</span> Visítanos en Pereira: calle 24 #7-29 oficina 613, recibimos sin
                      cita
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Certificaciones */}
          {activeTab === "certificaciones" && (
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-[#12274B] mb-4">
                  <BadgeCheck className="w-8 h-8 text-[#2A7ABF] inline-block mr-2 mb-1" />
                  Certificados por quienes importan
                </h3>
                <p className="text-[#12274B]/70 text-lg">Entidades que respaldan nuestra operación y compromiso</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="text-center bg-[#D0EDFC]/10 rounded-2xl p-6 hover:shadow-md transition-all"
                  >
                    <div className="h-20 flex items-center justify-center mb-4">
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.name}
                        className="max-h-full object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-[#12274B] mb-2">{cert.name}</h4>
                    <p className="text-[#12274B]/70 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Copy final */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-[#2A7ABF] to-[#4C97D2] rounded-2xl p-[2px]">
            <div className="bg-white rounded-2xl px-8 py-4">
              <p className="text-lg font-semibold text-[#12274B]">
                &ldquo;En Finova no vendemos créditos;{" "}
                <span className="text-amber-400">construimos confianza con hechos</span>.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Iconos adicionales necesarios
function Calculator(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  )
}

function FileText(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}
