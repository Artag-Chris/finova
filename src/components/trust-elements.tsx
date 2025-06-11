import { Card } from "@/components/ui/card"
import { Shield, Award, Users, TrendingUp, CheckCircle } from "lucide-react"

export function TrustElements() {
  const guarantees = [
    {
      icon: Shield,
      title: "Información Protegida",
      description: "Tus datos están seguros con encriptación de nivel bancario",
    },
    {
      icon: Award,
      title: "Regulados por CNBV",
      description: "Cumplimos con todas las normativas financieras mexicanas",
    },
    {
      icon: Users,
      title: "+10,000 Clientes",
      description: "Familias que ya confían en nuestros servicios",
    },
    {
      icon: TrendingUp,
      title: "98% Aprobación",
      description: "Tasa de aprobación líder en el mercado",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Simula",
      description: "Usa nuestro simulador y conoce tu cuota al instante",
    },
    {
      step: "02",
      title: "Solicita",
      description: "Completa tu solicitud en menos de 5 minutos",
    },
    {
      step: "03",
      title: "Aprobación",
      description: "Recibe respuesta en máximo 60 segundos",
    },
    {
      step: "04",
      title: "Recibe",
      description: "Tu dinero llega a tu cuenta en 24 horas",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#D0EDFC]/30 to-white">
      <div className="container mx-auto px-4">
        {/* Elementos de confianza */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#12274B] mb-6">
            Tu tranquilidad es nuestra <span className="text-[#2A7ABF]">prioridad</span>
          </h2>
          <p className="text-xl text-[#12274B]/70 max-w-2xl mx-auto">
            Respaldados por años de experiencia y miles de clientes satisfechos
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {guarantees.map((guarantee, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl p-6 text-center group hover:scale-[1.05]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#2A7ABF] to-[#4C97D2] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <guarantee.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#12274B] mb-2">{guarantee.title}</h3>
              <p className="text-[#12274B]/70 text-sm leading-relaxed">{guarantee.description}</p>
            </Card>
          ))}
        </div>

        {/* Proceso transparente */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#12274B] mb-4">Proceso 100% transparente</h3>
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
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h4 className="text-xl font-bold text-[#12274B] mb-2">{step.title}</h4>
                  <p className="text-[#12274B]/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-[#D0EDFC] rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 text-[#2A7ABF]" />
              <span className="text-[#12274B] font-semibold">Sin penalizaciones por pago anticipado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
