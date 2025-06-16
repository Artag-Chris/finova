"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Heart, CheckCircle, X, Sparkles, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import { ProfessionalAnimatedBackground } from "./animetedBackground"

interface Testimonial {
    id: number
    name: string
    occupation: string
    city: string
    photo: string
    impactPhrase: string
    beforeSituation: string
    afterSituation: string
    fullTestimonial: string
    rating: number
    creditAmount: string
    category: "angustia" | "negocios" | "familia"
    verified: boolean
    videoUrl?: string
}

export function TestimonialsSection() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<"angustia" | "negocios" | "familia">("angustia")
    const sectionRef = useRef<HTMLDivElement>(null)

    const testimonials: Testimonial[] = [
        // Categoría: De la angustia a la tranquilidad
        {
            id: 1,
            name: "Carlos J.",
            occupation: "Padre de familia",
            city: "Bogotá",
            photo: "/primera.jpg",
            impactPhrase: "Mi hijo tuvo su cirugía a tiempo",
            beforeSituation: "Rechazado en su EPS",
            afterSituation: "Finova desembolsó en 3 horas",
            fullTestimonial:
                "Los agentes me llamaron un domingo... ¡nunca lo olvidaré! Mi hijo necesitaba una cirugía urgente y su EPS nos había negado la autorización. Finova no solo me aprobó el crédito en tiempo récord, sino que me acompañaron durante todo el proceso.",
            rating: 4.8,
            creditAmount: "$800,000",
            category: "angustia",
            verified: true,
            videoUrl: "#",
        },
        {
            id: 2,
            name: "María Elena R.",
            occupation: "Enfermera",
            city: "Medellín",
            photo: "/segunda.jpg",
            impactPhrase: "Ahora duermo tranquila, no con facturas bajo la almohada",
            beforeSituation: "Deudas acumuladas por 6 meses",
            afterSituation: "Refinanció todo en una sola cuota",
            fullTestimonial:
                "Trabajaba doble turno y aún así no alcanzaba para las deudas. Finova me ayudó a consolidar todo en un solo pago que sí puedo manejar. Por primera vez en meses, duermo sin preocupaciones.",
            rating: 5.0,
            creditAmount: "$1,200,000",
            category: "angustia",
            verified: true,
        },

        // Categoría: Pequeños negocios que crecieron
        {
            id: 3,
            name: "Luisa M.",
            occupation: "Peluquera",
            city: "Pereira",
            photo: "/placeholder.svg?height=120&width=120",
            impactPhrase: "Por fin pude ampliar mi salón sin desvelarme",
            beforeSituation: "Rechazada en 3 bancos tradicionales",
            afterSituation: "Crédito aprobado en 4 horas",
            fullTestimonial:
                "Llevaba 2 años soñando con ampliar mi salón. Los bancos me pedían tantos requisitos que era imposible. Con Finova fue diferente: entendieron mi negocio y me dieron la oportunidad que necesitaba.",
            rating: 4.9,
            creditAmount: "$600,000",
            category: "negocios",
            verified: true,
            videoUrl: "#",
        },
        {
            id: 4,
            name: "Roberto S.",
            occupation: "Mecánico",
            city: "Cali",
            photo: "/placeholder.svg?height=120&width=120",
            impactPhrase: "Mi taller ahora es el más equipado del barrio",
            beforeSituation: "Herramientas obsoletas, clientes perdidos",
            afterSituation: "Equipos nuevos, 300% más clientes",
            fullTestimonial:
                "Mis herramientas tenían 15 años y perdía clientes porque no podía hacer ciertos trabajos. Ahora tengo el equipo más moderno y los clientes hacen fila. Finova creyó en mi experiencia.",
            rating: 4.7,
            creditAmount: "$1,500,000",
            category: "negocios",
            verified: true,
        },

        // Categoría: Créditos que unieron familias
        {
            id: 5,
            name: "Ana Patricia G.",
            occupation: "Madre soltera",
            city: "Barranquilla",
            photo: "/placeholder.svg?height=120&width=120",
            impactPhrase: "Mi hija pudo estudiar en la universidad de sus sueños",
            beforeSituation: "Sin recursos para matrícula universitaria",
            afterSituation: "Hija becada en ingeniería biomédica",
            fullTestimonial:
                "Mi hija siempre fue brillante, pero yo no tenía cómo pagarle la universidad. Finova me prestó para la matrícula y ahora ella está becada por su excelencia académica. Cambió nuestro futuro.",
            rating: 5.0,
            creditAmount: "$900,000",
            category: "familia",
            verified: true,
            videoUrl: "#",
        },
        {
            id: 6,
            name: "Diego A.",
            occupation: "Conductor",
            city: "Bucaramanga",
            photo: "/placeholder.svg?height=120&width=120",
            impactPhrase: "Compré la casa donde mis padres envejecerán dignamente",
            beforeSituation: "Familia en arriendo, sin estabilidad",
            afterSituation: "Casa propia, familia unida",
            fullTestimonial:
                "Mis padres llevaban 30 años pagando arriendo. Quería darles estabilidad en su vejez. Finova me ayudó con la cuota inicial y ahora tenemos nuestro hogar. Ver a mi mamá decorando SU casa no tiene precio.",
            rating: 4.9,
            creditAmount: "$2,000,000",
            category: "familia",
            verified: true,
        },
        {
            id: 7,
            name: "Shion de Aries. `Arlex`",
            occupation: "Gran Patriarca",
            city: "Grecia",
            photo: "/arlex.jpg",
            impactPhrase: "Ahora duermo tranquilo, sin esa molesta Athena",
            beforeSituation: "Deudas acumuladas por 6 meses",
            afterSituation: "Refinanció todo en una sola cuota",
            fullTestimonial:
                "queria todo para mi y nada para esa mocosa malcriada",
            rating: 5.0,
            creditAmount: "$2,000,000",
            category: "angustia",
            verified: true,
        },
    ]

    const categories = [
        {
            id: "angustia" as const,
            title: "De la angustia a la tranquilidad",
            icon: Heart,
            color: "#2A7ABF",
            description: "Momentos difíciles que se convirtieron en alivio",
        },
        {
            id: "negocios" as const,
            title: "Pequeños negocios que crecieron",
            icon: TrendingUp,
            color: "#10B981",
            description: "Emprendedores que lograron sus metas",
        },
        {
            id: "familia" as const,
            title: "Créditos que unieron familias",
            icon: Users,
            color: "#F59E0B",
            description: "Historias de amor y sacrificio familiar",
        },
    ]

    const filteredTestimonials = testimonials.filter((t) => t.category === selectedCategory)

    // Animación GSAP para la entrada de elementos
    useEffect(() => {
        const loadGSAP = async () => {
            const { gsap } = await import("gsap")
            const { ScrollTrigger } = await import("gsap/ScrollTrigger")

            gsap.registerPlugin(ScrollTrigger)

            if (sectionRef.current) {
                gsap.fromTo(
                    sectionRef.current.querySelectorAll(".testimonial-card"),
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            end: "bottom 20%",
                        },
                    },
                )
            }
        }

        loadGSAP()
    }, [selectedCategory])

    return (
        <section ref={sectionRef} className="py-20 bg-[#12274B] text-white relative overflow-hidden">
            {/* Formas orgánicas de fondo */}
            <div className="fixed inset-0 w-screen h-screen">
                <ProfessionalAnimatedBackground
                    opacity={0.3}
                    intensity="high"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header principal */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-[#D0EDFC]/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold text-[#D0EDFC] mb-6 border border-[#D0EDFC]/20">
                        <Sparkles className="w-4 h-4" />
                        Historias reales, transformaciones auténticas
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                        Historias que nos llenan
                        <br />
                        <span className="text-[#D0EDFC]">de orgullo</span>
                    </h2>

                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Cada testimonio es una vida transformada, una familia tranquila, un sueño cumplido.
                        <br />
                        <span className="text-[#2A7ABF] font-semibold">Estas son sus historias.</span>
                    </p>
                </div>

                {/* Navegación por categorías */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => {
                        const IconComponent = category.icon
                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`group relative overflow-hidden rounded-2xl px-6 py-4 transition-all duration-300 ${selectedCategory === category.id
                                    ? "bg-white/10 backdrop-blur-sm border-2 border-white/20"
                                    : "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${selectedCategory === category.id ? "scale-110" : "group-hover:scale-105"
                                            }`}
                                        style={{ backgroundColor: `${category.color}20` }}
                                    >
                                        <IconComponent
                                            className="w-5 h-5 transition-colors duration-300"
                                            style={{ color: category.color }}
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold text-white text-sm">{category.title}</h3>
                                        <p className="text-xs text-white/60">{category.description}</p>
                                    </div>
                                </div>

                                {selectedCategory === category.id && (
                                    <div
                                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent rounded-full transition-all duration-500"
                                        style={{
                                            width: "100%",
                                            background: `linear-gradient(90deg, transparent, ${category.color}, transparent)`,
                                        }}
                                    />
                                )}
                            </button>
                        )
                    })}
                </div>

                {/* Grid de testimonios */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredTestimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="testimonial-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                            onMouseEnter={() => setHoveredCard(testimonial.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="p-8 space-y-6">
                                {/* Header con foto y verificación */}
                                <div className="flex items-start gap-4">
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-[#D0EDFC]/30 group-hover:ring-[#2A7ABF]/50 transition-all duration-300">
                                            <Image
                                                src={testimonial.photo || "/placeholder.svg"}
                                                alt={testimonial.name}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {testimonial.verified && (
                                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center">
                                                <CheckCircle className="w-4 h-4 text-white" />
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                        <p className="text-[#4C97D2] text-sm font-medium">{testimonial.occupation}</p>
                                        <p className="text-white/60 text-xs">{testimonial.city}</p>
                                    </div>

                                    {testimonial.verified && (
                                        <div className="bg-[#10B981]/20 text-[#10B981] text-xs font-bold px-2 py-1 rounded-full">
                                            Verificado
                                        </div>
                                    )}
                                </div>

                                {/* Frase impactante */}
                                <div className="relative">
                                    <div className="absolute -left-2 -top-2 text-4xl text-[#2A7ABF]/90 font-serif"> &ldquo;</div>
                                    <p className="text-xl font-bold text-[#D0EDFC] leading-tight pl-4">{testimonial.impactPhrase}</p>
                                    <div className="absolute -right-2 -bottom-2 text-4xl text-[#2A7ABF]/90 font-serif"> &rdquo;</div>
                                </div>

                                {/* Antes/Después */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                                        <span className="text-red-200 text-sm">
                                            <span className="font-semibold">ANTES:</span> {testimonial.beforeSituation}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-[#10B981]/10 rounded-xl border border-[#10B981]/20">
                                        <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                                        <span className="text-green-200 text-sm">
                                            <span className="font-semibold">DESPUÉS:</span> {testimonial.afterSituation}
                                        </span>
                                    </div>
                                </div>

                                {/* Rating y monto */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm font-semibold text-[#D0EDFC]">{testimonial.rating}</span>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xs text-white/60">Crédito</p>
                                        <p className="font-bold text-[#2A7ABF]">{testimonial.creditAmount}</p>
                                    </div>
                                </div>

                                {/* Testimonio completo (visible en hover) */}
                                {hoveredCard === testimonial.id && (
                                    <div className="absolute inset-0 bg-[#12274B]/95 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center transition-all duration-300">
                                        <p className="text-white/90 italic leading-relaxed mb-6">
                                            &ldquo;{testimonial.fullTestimonial}&rdquo;
                                        </p>
                                    </div>
                                )}

                                {/* Botón para ver historia completa */}
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="w-full text-[#2A7ABF] hover:text-white hover:bg-[#2A7ABF]/20 rounded-xl transition-all duration-300"
                                    onClick={() => setHoveredCard(testimonial.id)}
                                >
                                    Ver historia completa
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* CTA final */}
                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-[#2A7ABF]/20 to-[#4C97D2]/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            &ldquo;¿Listo para escribir tu historia de éxito?&rdquo;
                        </h3>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Únete a cientos de colombianos que ya transformaron su realidad financiera con Finova. Tu historia de
                            éxito está a un clic de distancia.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-[#2A7ABF] to-[#4C97D2] hover:from-[#4C97D2] hover:to-[#2A7ABF] text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 group"
                                onClick={() => window.open("https://app.finova.com.co/auth/register", "_blank")}
                            >
                                <Heart className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                                Quiero mi crédito sin preocupaciones
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-[#D0EDFC] text-[#12274B] hover:bg-[#D0EDFC] hover:text-[#12274B] font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300"
                                onClick={() => {
                                    // Scroll to top of testimonials to see more categories
                                    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
                                }}
                            >
                                Ver más historias
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
