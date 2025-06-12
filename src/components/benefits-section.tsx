"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users, CheckCircle, Zap, TrendingUp, Heart, Clock, Banknote, Sparkles } from "lucide-react"
import { useState } from "react"

const benefits = [
    {
        id: 1,
        title: "Apoyo Humano",
        subtitle: "No estás solo: tu experto financiero a un mensaje",
        description: "Línea exclusiva de WhatsApp con asesores reales que guían tu proceso, sin robots.",
        icon: MessageCircle,
        color: "#25D366",
        features: ["Asesores certificados disponibles", "Respuesta promedio: 2 minutos", "Sin bots, solo personas reales"],
        emotion: "Cercanía",
    },
    {
        id: 2,
        title: "Simplicidad Radical",
        subtitle: "Crédito sin trabas: cero papeleos, cero esperas, cero complicaciones ",
        description: "Solo necesitas tu celular y un registro rápido. Sin trámites engorrosos, te ayudamos a avanzar con facilidad.",
        icon: Sparkles,
        color: "#2A7ABF",
        features: ["Solo cédula y cuenta bancaria", "Proceso rápido y sin complicaciones", "Cancelación anticipada SIN costos"],
        emotion: "Calidad",
    },
    {
        id: 3,
        title: "Velocidad que Impresiona",
        subtitle: "Dinero en minutos, sin complicaciones ni largas esperas. Accede a lo que necesitas al instante.",
        description: "Desembolso express en Nequi, BBVA, Davivienda, Bancolombia y más bancos.",
        icon: Zap,
        color: "#FFB800",
        features: [
            "Primer crédito: hasta 7 PM días hábiles",
            "Clientes recurrentes: 24/7, 365 días",
            "Desembolso en tu banco favorito",
        ],
        emotion: "Confianza",
    },
    {
        id: 4,
        title: "Ventajas que Crecen Contigo",
        subtitle: "Tu esfuerzo se recompensa: más crédito, mejor historial",
        description: "Mejora tu score en Datacrédito/Experian con cada pago puntual.",
        icon: TrendingUp,
        color: "#10B981",
        features: ["Mejora tu score crediticio", "Cupo rotativo disponible", "Beneficios que aumentan con el tiempo"],
        emotion: "Integridad",
    },
]

export default function BenefitsSection() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Formas orgánicas de fondo */}
            <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-40 h-20 bg-[#D0EDFC] rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#4C97D2]/10 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#D0EDFC]/40 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-1/3 w-36 h-16 bg-[#2A7ABF]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-[#D0EDFC] rounded-full px-6 py-2 text-sm font-semibold text-[#12274B] mb-6">
                        <Heart className="w-4 h-4 text-amber-400" />
                        Beneficios únicos
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#12274B] mb-6">
                        Experiencias, no solo <span className="text-[#2A7ABF]">créditos:</span>
                        <br />
                        <span className="text-2xl lg:text-3xl font-normal text-[#12274B]/70">diseñadas para seres humanos, no números</span>
                    </h2>

                    <p className="text-xl text-[#12274B]/70 max-w-3xl mx-auto leading-relaxed">
                        Porque mereces un crédito que se adapte a tu vida, no al revés.
                    </p>
                </div>

                {/* Grid de beneficios */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {benefits.map((benefit) => {
                        const IconComponent = benefit.icon
                        return (
                            <Card
                                key={benefit.id}
                                className={`bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl overflow-hidden group cursor-pointer transform hover:scale-[1.05] ${hoveredCard === benefit.id ? "ring-2 ring-[#2A7ABF]/30" : ""
                                    }`}
                                onMouseEnter={() => setHoveredCard(benefit.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    background: hoveredCard === benefit.id ? `linear-gradient(135deg, #D0EDFC 0%, white 100%)` : "white",
                                }}
                            >
                                <div className="p-6">
                                    {/* Ícono animado */}
                                    <div className="mb-6">
                                        <div
                                            className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${hoveredCard === benefit.id ? "scale-110 rotate-6" : ""
                                                }`}
                                            style={{ backgroundColor: `${benefit.color}15` }}
                                        >
                                            <IconComponent
                                                className={`w-8 h-8 transition-all duration-500 ${hoveredCard === benefit.id ? "scale-110" : ""
                                                    }`}
                                                style={{ color: benefit.color }}
                                            />
                                        </div>
                                    </div>

                                    {/* Etiqueta emocional */}
                                    <div className="inline-block bg-[#D0EDFC] text-[#2A7ABF] text-xs font-bold px-3 py-1 rounded-full mb-4">
                                        {benefit.emotion}
                                    </div>

                                    <h3 className="text-xl font-bold text-[#12274B] mb-3 leading-tight">{benefit.title}</h3>

                                    <p className="text-[#2A7ABF] font-semibold text-sm mb-4 leading-relaxed">{benefit.subtitle}</p>

                                    <p className="text-[#12274B]/70 text-sm mb-6 leading-relaxed">{benefit.description}</p>

                                    {/* Lista de características */}
                                    <div className="space-y-2">
                                        {benefit.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                                                <span className="text-[#12274B] text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>

                {/* Elemento de prueba social */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-[#D0EDFC] rounded-2xl px-8 py-4">
                        <Users className="w-6 h-6 text-[#2A7ABF]" />
                        <span className="text-[#12274B] font-semibold">
                            Únete a <span className="text-[#2A7ABF] font-bold">5.000 emprendedores</span> que eligieron Finova
                        </span>
                    </div>
                </div>

                {/* CTA final */}
                <div className="text-center">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#12274B] mb-2">¿Listo para tu crédito sin complicaciones?</h3>
                        <p className="text-[#12274B]/70">Comienza ahora y descubre por qué somos diferentes</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            onClick={() => window.open('https://app.finova.com.co/auth/register', '_blank')}
                            size="lg"
                            className="bg-[#2A7ABF] hover:bg-[#1468B1] text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05]"
                        >
                            <Banknote className="w-5 h-5 mr-3 text-amber-400" />
                            Quiero mi crédito YA
                        </Button>

                        <Button
                            onClick={() => window.open(`https://wa.me/573226962139?text=${encodeURIComponent('¡Hola! Me interesa obtener más información sobre los créditos de Finova.')}`, '_blank')}
                            variant="outline"
                            size="lg"
                            className="border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5 mr-3" />
                            Hablar por WhatsApp
                        </Button>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-4 text-sm text-[#12274B]/60">
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>Respuesta en 2 minutos</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-[#10B981]" />
                            <span>Sin compromiso</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
