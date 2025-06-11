"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Calculator, Clock, Shield, Users, Zap, TrendingUp, ArrowRight } from "lucide-react"

export function CreditSimulator() {
  const [amount, setAmount] = useState([50000])
  const [term, setTerm] = useState([12])

  const monthlyRate = 0.015 // 1.5% monthly (18% annual)
  const monthlyPayment = Math.round(
    (amount[0] * monthlyRate * Math.pow(1 + monthlyRate, term[0])) / (Math.pow(1 + monthlyRate, term[0]) - 1),
  )
  const totalInterest = Math.round(monthlyPayment * term[0] - amount[0])

  return (
    <section className="relative overflow-hidden bg-[#2A7ABF] min-h-screen flex items-center">
      {/* Elementos tecnológicos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Líneas y marcos futuristas */}
        <div className="absolute top-20 left-10 w-64 h-0.5 bg-gradient-to-r from-[#4C97D2] to-transparent"></div>
        <div className="absolute top-40 right-20 w-32 h-0.5 bg-gradient-to-l from-[#D0EDFC] to-transparent"></div>
        <div className="absolute bottom-40 left-40 w-48 h-0.5 bg-gradient-to-r from-transparent via-[#4C97D2] to-transparent"></div>

        {/* Marcos y elementos geométricos */}
        <div className="absolute top-32 right-32 w-16 h-16 border-2 border-[#4C97D2]/30 rotate-45"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 border border-[#D0EDFC]/40 rotate-12"></div>

        {/* Círculos y puntos */}
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-[#D0EDFC] rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-[#4C97D2] rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-[#D0EDFC]/60 rounded-full animate-pulse delay-700"></div>

        {/* Líneas diagonales */}
        <div className="absolute top-0 left-1/3 w-0.5 h-32 bg-gradient-to-b from-[#4C97D2] to-transparent rotate-12"></div>
        <div className="absolute bottom-0 right-1/4 w-0.5 h-24 bg-gradient-to-t from-[#D0EDFC] to-transparent -rotate-12"></div>

        {/* Elementos tipo HUD */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2 opacity-30">
            <div className="w-8 h-0.5 bg-[#4C97D2]"></div>
            <div className="w-2 h-2 border border-[#4C97D2] rotate-45"></div>
            <div className="w-4 h-0.5 bg-[#D0EDFC]"></div>
          </div>
        </div>

        {/* Barras de progreso decorativas */}
        <div className="absolute bottom-20 left-10 opacity-20">
          <div className="space-y-1">
            <div className="w-16 h-1 bg-[#4C97D2] rounded-full"></div>
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
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium border border-white/20">
              <div className="w-2 h-2 bg-[#D0EDFC] rounded-full animate-pulse"></div>
              <Clock className="w-4 h-4" />
              Respuesta en 60 segundos
              <div className="w-8 h-0.5 bg-[#D0EDFC] rounded-full"></div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                CRÉDITOS
                <br />
                <span className="text-[#D0EDFC] relative">
                  TRANSPARENTES
                  <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#D0EDFC] via-[#4C97D2] to-transparent rounded-full"></div>
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

            {/* Beneficios futuristas */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Shield, text: "100% Transparente", color: "from-[#D0EDFC] to-[#4C97D2]" },
                { icon: Users, text: "Asesoría Humana", color: "from-[#4C97D2] to-[#D0EDFC]" },
                { icon: Calculator, text: "Sin Comisiones", color: "from-[#D0EDFC] to-[#4C97D2]" },
                { icon: TrendingUp, text: "Tasas Justas", color: "from-[#4C97D2] to-[#D0EDFC]" },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-4 h-4 text-[#12274B]" />
                  </div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Botón flotante principal */}
            <div className="pt-8">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-[#D0EDFC] to-[#4C97D2] hover:from-[#4C97D2] hover:to-[#D0EDFC] text-[#12274B] font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-[#D0EDFC]/25 transition-all duration-500 transform hover:scale-105 border-2 border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Zap className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Solicitar con Transparencia Total
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Simulador futurista */}
          <Card
            className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            }}
          >
            {/* Elementos decorativos del simulador */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D0EDFC] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#4C97D2] rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-[#D0EDFC] rounded-full animate-pulse delay-700"></div>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
                  <Calculator className="w-4 h-4 text-[#D0EDFC]" />
                  <span className="text-[#D0EDFC] text-sm font-semibold">Simulador Transparente</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Calcular Crédito</h3>
                <p className="text-white/70">Sin sorpresas, todo claro desde el inicio</p>
              </div>

              {/* Monto del crédito */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#D0EDFC] rounded-full"></div>
                    Monto del crédito
                  </label>
                  <span className="text-lg font-bold text-[#D0EDFC]">$ {amount[0].toLocaleString("es-CO")}</span>
                </div>
                <div className="relative">
                  <Slider
                    value={amount}
                    onValueChange={setAmount}
                    max={50000000}
                    min={1000000}
                    step={500000}
                    className="w-full"
                  />
                  <div className="absolute -top-1 left-0 w-full h-3 bg-gradient-to-r from-[#D0EDFC]/20 to-[#4C97D2]/20 rounded-full -z-10"></div>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>$1,000,000</span>
                  <span>$50,000,000</span>
                </div>
              </div>

              {/* Plazo */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#4C97D2] rounded-full"></div>
                    Plazo en meses
                  </label>
                  <span className="text-lg font-bold text-[#4C97D2]">{term[0]} meses</span>
                </div>
                <div className="relative">
                  <Slider value={term} onValueChange={setTerm} max={48} min={6} step={6} className="w-full" />
                  <div className="absolute -top-1 left-0 w-full h-3 bg-gradient-to-r from-[#4C97D2]/20 to-[#D0EDFC]/20 rounded-full -z-10"></div>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>6 meses</span>
                  <span>48 meses</span>
                </div>
              </div>

              {/* Resultados futuristas */}
              <div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 space-y-4 border border-white/10"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  backdropFilter: "blur(15px)",
                  WebkitBackdropFilter: "blur(15px)",
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-white/70 mb-1 flex items-center justify-center gap-2">
                      <TrendingUp className="w-3 h-3" />
                      Cuota mensual
                    </p>
                    <p className="text-2xl font-bold text-[#D0EDFC]">$ {monthlyPayment.toLocaleString("es-CO")}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-white/70 mb-1 flex items-center justify-center gap-2">
                      <Calculator className="w-3 h-3" />
                      Intereses totales
                    </p>
                    <p className="text-xl font-semibold text-[#4C97D2]">$ {totalInterest.toLocaleString("es-CO")}</p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <p className="text-xs text-white/60">Tasa optimizada por IA: 18% anual • Transparencia total</p>
                </div>
              </div>

              {/* CTAs del simulador */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-[#D0EDFC] to-[#4C97D2] hover:from-[#4C97D2] hover:to-[#D0EDFC] text-[#12274B] font-bold py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Solicitar Ahora
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-[#D0EDFC] text-[#D0EDFC] hover:bg-[#D0EDFC] hover:text-[#12274B] font-semibold py-4 rounded-2xl text-lg transition-all duration-300 backdrop-blur-sm bg-white/5"
                >
                  Hablar con un Asesor Real
                </Button>
              </div>

              <p className="text-xs text-center text-white/60 leading-relaxed">
                Información 100% transparente • Sin costos ocultos
                <br />
                <span className="font-semibold text-[#D0EDFC]">Sin compromiso • Asesoría humana</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
