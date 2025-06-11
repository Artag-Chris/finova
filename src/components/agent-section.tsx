import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Star, Phone, Users } from "lucide-react"

export function AgentSection() {
  const agents = [
    {
      name: "Carla Mendoza",
      role: "Especialista en Créditos Personales",
      image: "/placeholder.svg?height=120&width=120",
      quote: "Te ayudo sin tecnicismos, con palabras claras y soluciones reales.",
      rating: 4.9,
      experience: "5 años",
    },
    {
      name: "Roberto Silva",
      role: "Asesor Senior",
      image: "/placeholder.svg?height=120&width=120",
      quote: "Cada situación es única. Encontremos juntos tu mejor opción.",
      rating: 4.8,
      experience: "8 años",
    },
    {
      name: "Ana García",
      role: "Consultora Financiera",
      image: "/placeholder.svg?height=120&width=120",
      quote: "Mi compromiso es que entiendas cada paso del proceso.",
      rating: 5.0,
      experience: "6 años",
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Formas orgánicas de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-20 bg-[#D0EDFC] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#4C97D2]/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D0EDFC] rounded-full px-6 py-2 text-sm font-semibold text-[#12274B] mb-6">
            <Users className="w-4 h-4" />
            Tu equipo Finova
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#12274B] mb-6">
            Personas reales, <span className="text-[#2A7ABF]">soluciones humanas</span>
          </h2>

          <p className="text-xl text-[#12274B]/70 max-w-3xl mx-auto leading-relaxed">
            Nuestros asesores certificados te acompañan en cada paso. Sin robots, sin respuestas automáticas. Solo
            experiencia y compromiso genuino con tu bienestar financiero.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {agents.map((agent, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group hover:scale-[1.02]"
            >
              <div className="p-8 text-center">
                {/* Foto del agente con forma orgánica */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-[#D0EDFC] group-hover:ring-[#4C97D2] transition-all duration-300">
                    <img
                      src={agent.image || "/placeholder.svg"}
                      alt={agent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#2A7ABF] text-white rounded-full p-2">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#12274B] mb-1">{agent.name}</h3>
                <p className="text-[#2A7ABF] font-semibold mb-4">{agent.role}</p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(agent.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#12274B]">{agent.rating}</span>
                </div>

                {/* Quote con fondo orgánico */}
                <div className="bg-[#D0EDFC] rounded-2xl p-4 mb-6 relative">
                  <p className="text-[#12274B] italic text-sm leading-relaxed">"{agent.quote}"</p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#D0EDFC] rotate-45"></div>
                </div>

                <div className="text-xs text-[#12274B]/60 mb-6">
                  <span className="font-semibold">{agent.experience}</span> de experiencia
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-2 border-[#2A7ABF] text-[#2A7ABF] hover:bg-[#2A7ABF] hover:text-white rounded-xl font-semibold transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Hablar con {agent.name.split(" ")[0]}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Chat flotante CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05]"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Iniciar chat por WhatsApp
          </Button>
          <p className="text-sm text-[#12274B]/60 mt-3">
            Respuesta promedio: <span className="font-semibold">2 minutos</span>
          </p>
        </div>
      </div>
    </section>
  )
}
