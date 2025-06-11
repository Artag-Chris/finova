"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Calculator, Zap, TrendingUp } from "lucide-react"

export interface CreditSimulatorProps {
  className?: string
}

export function CreditSimulator({ className = "" }: CreditSimulatorProps) {
  const [amount, setAmount] = useState([50000])
  const [term, setTerm] = useState([12])

  const monthlyRate = 0.015
  const monthlyPayment = Math.round(
    (amount[0] * monthlyRate * Math.pow(1 + monthlyRate, term[0])) / (Math.pow(1 + monthlyRate, term[0]) - 1),
  )
  const totalInterest = Math.round(monthlyPayment * term[0] - amount[0])

  return (
    <Card
      className={`bg-white/5 backdrop-blur-2xl border border-[#12274B]/20 shadow-2xl rounded-3xl p-8 relative overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(18,39,75,0.05) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(18,39,75,0.2)",
        boxShadow: "0 8px 32px 0 rgba(18, 39, 75, 0.2)",
      }}
    >
      {/* Elementos decorativos del simulador con color oscuro */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-[#12274B] rounded-full animate-pulse opacity-60"></div>
        <div className="w-2 h-2 bg-[#4C97D2] rounded-full animate-pulse delay-300"></div>
        <div className="w-2 h-2 bg-[#D0EDFC] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#12274B]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-[#12274B]/30">
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
              <div className="w-2 h-2 bg-[#12274B] rounded-full opacity-80"></div>
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
            <div className="absolute -top-1 left-0 w-full h-3 bg-gradient-to-r from-[#12274B]/20 to-[#4C97D2]/20 rounded-full -z-10"></div>
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
            <div className="absolute -top-1 left-0 w-full h-3 bg-gradient-to-r from-[#4C97D2]/20 to-[#12274B]/20 rounded-full -z-10"></div>
          </div>
          <div className="flex justify-between text-xs text-white/60">
            <span>6 meses</span>
            <span>48 meses</span>
          </div>
        </div>

        {/* Resultados con color oscuro */}
        <div
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 space-y-4 border border-[#12274B]/20"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(18,39,75,0.1) 100%)",
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

        {/* CTAs del simulador con color oscuro */}
        <div className="space-y-3">
          <Button
            size="lg"
            className="w-full group relative overflow-hidden bg-gradient-to-r from-[#12274B] to-[#2A7ABF] hover:from-[#2A7ABF] hover:to-[#12274B] text-white font-bold py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Solicitar Ahora
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full border-2 border-[#12274B] text-[#12274B] bg-white/10 hover:bg-[#12274B] hover:text-white font-semibold py-4 rounded-2xl text-lg transition-all duration-300 backdrop-blur-sm"
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
  )
}
