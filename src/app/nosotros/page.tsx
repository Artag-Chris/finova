"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Star, Heart } from "lucide-react"
import Image from 'next/image'

export default function Page() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const agentRefs = useRef<(HTMLDivElement | null)[]>([])
  const clientsRef = useRef<HTMLDivElement>(null)

  const agents = [
    {
      name: "Roberto",
      role: "Experto en soluciones financieras",
      image: "/feliz.jpg",
      story:
        "8 años ayudando a familias a cumplir sus sueños. Mi pasión es encontrar la solución perfecta para cada situación única.",
      quote: "Tu tranquilidad es mi métrica de éxito",
      rating: 4.8,
    },
    {
      name: "Carla",
      role: "Especialista en créditos personales",
      image: "/feliz2.jpg",
      story:
        "Creo firmemente que los procesos financieros deben ser simples y transparentes. Sin letra pequeña, sin sorpresas.",
      quote: "Me irritan los trámites engorrosos, por eso hago créditos simples",
      rating: 4.9,
    },
    {
      name: "Ana",
      role: "Consultora financiera senior",
      image:
        "/feliz 3.jpg",
      story:
        "6 años dedicados a educar y empoderar a nuestros clientes. Cada pregunta es una oportunidad de generar confianza.",
      quote: "No hay 'pregunta tonta': explícame y buscaremos juntos",
      rating: 5.0,
    },
  ]

  useEffect(() => {
    // Importar GSAP dinámicamente
    const loadGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      // Configurar smooth scrolling
      gsap.config({
        force3D: true,
        nullTargetWarn: false,
      })

      // Animación inicial del hero
      const tl = gsap.timeline()

      tl.set([titleRef.current, subtitleRef.current, heroImageRef.current], {
        opacity: 0,
        y: 100,
      })

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .to(
          heroImageRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=0.6",
        )

      // Animaciones de los agentes con ScrollTrigger
      agentRefs.current.forEach((agent, index) => {
        if (agent) {
          gsap.set(agent, {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            scale: 0.8,
          })

          ScrollTrigger.create({
            trigger: agent,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => {
              gsap.to(agent, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1.5,
                ease: "power3.out",
                delay: index * 0.2,
              })
            },
          })
        }
      })

      // Animación de la sección de clientes
      if (clientsRef.current) {
        gsap.set(clientsRef.current, {
          opacity: 0,
          y: 50,
        })

        ScrollTrigger.create({
          trigger: clientsRef.current,
          start: "top 85%",
          onEnter: () => {
            gsap.to(clientsRef.current, {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
            })
          },
        })
      }
    }

    loadGSAP()

    return () => {
      // Cleanup ScrollTrigger
      if (typeof window !== "undefined") {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        })
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#12274B] text-white relative overflow-hidden"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-8">
            <h1 ref={titleRef} className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
              Personas
              <br />
              <span className="text-[#D0EDFC]">reales,</span>
              <br />
              soluciones
              <br />
              <span className="text-[#4C97D2]">humanas.</span>
            </h1>

            <p ref={subtitleRef} className="text-xl lg:text-2xl text-white/80 max-w-lg leading-relaxed">
              En Finova, cada crédito tiene una historia humana detrás. Conoce a las personas que hacen posible tus
              sueños.
            </p>
          </div>

          <div className="relative">
            <Image
              ref={heroImageRef}
              src="/empleados-felices.jpg"
              alt="Equipo Finova trabajando"
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              width={1200}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12274B]/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>

      {/* Agents Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-32">
          {agents.map((agent, index) => (
            <div
              key={index}
              ref={(el) => {
                agentRefs.current[index] = el;
              }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="space-y-4">
                  <h2 className="text-5xl lg:text-7xl font-bold">{agent.name}</h2>
                  <p className="text-xl text-[#4C97D2] font-semibold">{agent.role}</p>
                </div>

                <div className="space-y-6">
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed">{agent.story}</p>

                  <blockquote className="border-l-4 border-[#D0EDFC] pl-6 py-4">
                    <p
                      className="text-xl lg:text-2xl font-medium text-[#D0EDFC] italic"
                      style={{ fontFamily: "cursive" }}
                    >
                      &ldquo;{agent.quote}&rdquo;
                    </p>
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(agent.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-[#D0EDFC]">{agent.rating}</span>
                  </div>

                  <Button
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 group"
                    onClick={() =>
                      window.open(
                        `https://wa.me/573226962139?text=${encodeURIComponent(
                          `¡Hola ${agent.name}! Me interesa conocer más sobre los créditos de Finova.`,
                        )}`,
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Hablar con {agent.name}
                  </Button>
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <Image
                  src={agent.image || "/placeholder.svg"}
                  alt={agent.name}
                  className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                  width={1200}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12274B]/30 to-transparent rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clients Section */}
      <div ref={clientsRef} className="container mx-auto px-4 py-20">
        <div className="text-center space-y-12">
          <h2 className="text-5xl lg:text-7xl font-bold">
            Nuestros clientes
            <br />
            <span className="text-[#D0EDFC]">felices</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "María González",
                testimonial: "Finova cambió mi vida. El proceso fue tan fácil y transparente que no lo podía creer.",
                amount: "$500,000",
              },
              {
                name: "Carlos Ramírez",
                testimonial: "Por fin encontré una empresa que habla claro. Sin letra pequeña, sin sorpresas.",
                amount: "$1,200,000",
              },
              {
                name: "Ana Sofía Torres",
                testimonial: "El equipo de Finova me acompañó en cada paso. Se siente como tener un amigo en el banco.",
                amount: "$800,000",
              },
            ].map((client, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  &ldquo;{client.testimonial}&rdquo;

                  <div className="text-center">
                    <p className="font-semibold text-[#D0EDFC]">{client.name}</p>
                    <p className="text-sm text-[#4C97D2]">Crédito: {client.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#2A7ABF] to-[#4C97D2] hover:from-[#4C97D2] hover:to-[#2A7ABF] text-white font-bold px-12 py-6 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("https://app.finova.com.co/auth/register", "_blank")}
            >
              <Heart className="w-6 h-6 mr-3 animate-pulse" />
              Únete a nuestra familia
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
