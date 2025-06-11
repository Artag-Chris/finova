"use client"

import { Button } from "@/components/ui/button"
import { Clock, Shield, Users, Zap, Calculator, TrendingUp, ArrowRight } from "lucide-react"
import { CreditSimulator } from "@/components/credit-simulator"
import { useRef } from "react"

export function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative overflow-hidden bg-[#2A7ABF] min-h-screen flex items-center">
      {/* Elementos tecnológicos de fondo */}
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
        {/* Líneas y marcos futuristas con color oscuro */}
        <div className="absolute top-20 left-10 w-64 h-0.5 bg-gradient-to-r from-[#12274B] to-transparent opacity-40"></div>
        <div className="absolute top-40 right-20 w-32 h-0.5 bg-gradient-to-l from-[#12274B] to-transparent opacity-40"></div>
        <div className="absolute bottom-40 left-40 w-48 h-0.5 bg-gradient-to-r from-transparent via-[#12274B] to-transparent opacity-40"></div>

        {/* Marcos y elementos geométricos con color oscuro */}
        <div className="absolute top-32 right-32 w-16 h-16 border-2 border-[#12274B]/30 rotate-45"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 border border-[#12274B]/40 rotate-12"></div>

        {/* Círculos y puntos mezclando colores */}
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-[#12274B] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-[#4C97D2] rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-[#D0EDFC]/60 rounded-full animate-pulse delay-700"></div>

        {/* Líneas diagonales */}
        <div className="absolute top-0 left-1/3 w-0.5 h-32 bg-gradient-to-b from-[#12274B] to-transparent rotate-12 opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-0.5 h-24 bg-gradient-to-t from-[#D0EDFC] to-transparent -rotate-12"></div>

        {/* Elementos tipo HUD con color oscuro */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2 opacity-30">
            <div className="w-8 h-0.5 bg-[#12274B]"></div>
            <div className="w-2 h-2 border border-[#12274B] rotate-45"></div>
            <div className="w-4 h-0.5 bg-[#D0EDFC]"></div>
          </div>
        </div>

        {/* Barras de progreso decorativas con color oscuro */}
        <div className="absolute bottom-20 left-10 opacity-20">
          <div className="space-y-1">
            <div className="w-16 h-1 bg-[#12274B] rounded-full"></div>
            <div className="w-12 h-1 bg-[#D0EDFC] rounded-full"></div>
            <div className="w-20 h-1 bg-[#4C97D2]/60 rounded-full"></div>
          </div>
        </div>

        {/* Formas orgánicas con blur */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-24 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-40 bg-white/3 rounded-full blur-lg transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="text-white space-y-8">
            {/* Badge con color oscuro */}
            <div className="inline-flex items-center gap-3 bg-[#12274B]/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium border border-[#12274B]/30">
              <div className="w-2 h-2 bg-[#D0EDFC] rounded-full animate-pulse"></div>
              <Clock className="w-4 h-4" />
              Respuesta en 60 segundos
              <div className="w-8 h-0.5 bg-[#12274B] rounded-full opacity-60"></div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                CRÉDITOS
                <br />
                <span className="text-[#D0EDFC] relative">
                  TRANSPARENTES
                  <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#D0EDFC] via-[#12274B] to-transparent rounded-full"></div>
                </span>
                <br />
                <span className="text-4xl lg:text-5xl text-white/90">Y CERCANOS</span>
              </h1>

              <div className="flex items-center gap-4 text-[#D0EDFC] text-lg">
                <Zap className="w-5 h-5" />
                <span>Transparencia • Cercanía • Confianza</span>
              </div>
            </div>

            <p className="text-xl text-white/90 max-w-lg leading-relaxed">
              Sin letra pequeña, sin sorpresas. Te acompañamos con honestidad total en cada paso de tu crédito.
            </p>

            {/* Beneficios con color oscuro incorporado */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Shield, text: "100% Transparente", color: "from-[#D0EDFC] to-[#12274B]" },
                { icon: Users, text: "Asesoría Humana", color: "from-[#12274B] to-[#4C97D2]" },
                { icon: Calculator, text: "Sin Comisiones", color: "from-[#D0EDFC] to-[#12274B]" },
                { icon: TrendingUp, text: "Tasas Justas", color: "from-[#12274B] to-[#D0EDFC]" },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-4 py-3 border border-[#12274B]/20 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Botón flotante principal con color oscuro */}
            <div className="pt-8">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-[#12274B] to-[#2A7ABF] hover:from-[#2A7ABF] hover:to-[#12274B] text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-[#12274B]/25 transition-all duration-500 transform hover:scale-105 border-2 border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Zap className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Solicitar con Transparencia Total
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Simulador de crédito */}
          <CreditSimulator />
        </div>
      </div>
    </section>
  )
}
