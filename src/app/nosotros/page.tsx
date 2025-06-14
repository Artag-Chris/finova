"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Page() {
  const backButtonRef = useRef<HTMLButtonElement>(null)

  const handleGoBack = () => {
    window.history.back()
  }
  const sectionRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const lineRef = useRef<HTMLSpanElement>(null)
  const agentRefs = useRef<(HTMLDivElement | null)[]>([])
  const clientsRef = useRef<HTMLDivElement>(null)

  // Referencias para la nueva sección de texto animado
  const scrollTextSectionRef = useRef<HTMLDivElement>(null)
  const scrollTextRefs = useRef<(HTMLParagraphElement | null)[]>([])

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
      image: "/feliz 3.jpg",
      story:
        "6 años dedicados a educar y empoderar a nuestros clientes. Cada pregunta es una oportunidad de generar confianza.",
      quote: "No hay 'pregunta tonta': explícame y buscaremos juntos",
      rating: 5.0,
    },
  ]

  // Textos para la sección animada
  const scrollTexts = [
    {
      text: `"Cercanía que se siente, confianza que se vive"`,
      emphasis: "confianza",
      number: "",
    },
    {
      text: `"Juntos en cada paso de tu crecimiento"`,
      emphasis: "Juntos",
      number: "",
    },
    {
      text: `"Honestidad que construye historias"`,
      emphasis: "Honestidad",
      number: "",
    },

  ];

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

      // ========================================
      // ANIMACIÓN DE TEXTO SCROLL (NUEVA SECCIÓN)
      // ========================================

      // 1. Establecer estado inicial: todos los textos empiezan opacos (grises)
      scrollTextRefs.current.forEach((textRef,) => {
        if (textRef) {
          // Estado inicial
          gsap.set(textRef, {
            opacity: 0,
            x: -50,
            scale: 0.9,
          })

          // Crear ScrollTrigger para cada texto
          ScrollTrigger.create({
            trigger: textRef,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            onEnter: () => {
              gsap.to(textRef, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                stagger: {
                  amount: 0.3,
                  from: "start",
                },
              })
            },
            onLeaveBack: () => {
              gsap.to(textRef, {
                opacity: 0.3,
                x: -50,
                scale: 0.9,
                duration: 0.8,
              })
            },
          })
        }
      })


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
      {/* Formas orgánicas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-20 bg-[#D0EDFC] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#4C97D2]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#2A7ABF]/10 rounded-full blur-2xl"></div>
      </div>

      {/* Botón de volver */}
      <div className="absolute top-6 left-6 z-20">
        <Button
          ref={backButtonRef}
          variant="ghost"
          size="sm"
          onClick={handleGoBack}
          className="text-white hover:text-[#D0EDFC] hover:bg-white/10 transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Volver
        </Button>
      </div>

      {/* Hero Section */}
      {/* ========================================
         imagen
          ======================================== */}
      <div className="container mx-auto px-4 py-20 relative">
        {/* Image container - positioned absolutely */}
        <div className="absolute right-0 top-[30%] w-[70%] h-full z-0">
          <div className="relative w-full h-[60vh]">
            <Image
              ref={heroImageRef}
              src="/empleados.jpg"
              alt="Equipo Finova trabajando"
              fill
              className="object-cover rounded-3xl"
              priority
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
              }}
            />
            {/* Subtle gradient overlay without the blue tint */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))",
              }}
            ></div>
          </div>
        </div>

        {/* ========================================
         TEXTO 
          ======================================== */}
        <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
          <div className="lg:col-span-12 space-y-8">
            <h1 ref={titleRef} className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight">
              <span className="word block">Nuestra</span>
              <span className="word block">
                <span className="text-[#D0EDFC]">familia</span>
              </span>
              <span className="word flex items-center">
                <span
                  ref={lineRef}
                  className="text-[#4C97D2] mr-4 inline-block"
                  style={{ transform: "translateX(-20px)" }}
                >
                  —
                </span>
                <span className="text-[#4C97D2]">Finova.</span>
              </span>
            </h1>

            <div className="max-w-2xl">
              <p ref={subtitleRef} className="text-xl lg:text-2xl text-white/100 leading-relaxed">
                &ldquo;Detrás de cada crédito, hay corazones que trabajan unidos
                <br />
                Nos enorgullece acompañarte: con cuidado artesanal, paciencia de aliado y la certeza de que tu éxito es
                también el nuestro.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
         TEXTO ANIMADO CON SCROLL
          ======================================== */}
      <div ref={scrollTextSectionRef} className="container mx-auto px-4 py-32">
        <div className="flex justify-end">
          <div className="max-w-4xl w-full space-y-16">
            {scrollTexts.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  scrollTextRefs.current[index] = el as HTMLDivElement
                }}
                className="relative group cursor-default"
              >
                {/* Número de sección */}
                <span className="absolute -left-24 top-1/2 -translate-y-1/2 text-4xl font-bold text-white/10 transition-all duration-300 group-hover:text-white/20">
                  {item.number}
                </span>

                {/* Texto principal */}
                <div className="relative overflow-hidden">
                  <h3 className="text-5xl lg:text-7xl font-light tracking-tight text-white/90">
                    {item.text.split(item.emphasis).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="font-bold bg-gradient-to-r from-[#D0EDFC] to-white bg-clip-text text-transparent">
                            {item.emphasis}
                          </span>
                        )}
                      </span>
                    ))}
                  </h3>
                </div>

                {/* Línea decorativa */}
                <div className="absolute -left-16 top-1/2 w-12 h-[1px] bg-white/20 transform -translate-y-1/2 transition-all duration-300 group-hover:w-14 group-hover:bg-white/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Header for Agents Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl lg:text-7xl font-bold">
            Conoce a algunos miembros de
            <br />
            <span className="text-[#D0EDFC]">nuestra familia en Finova</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Aliados que no retroceden: transformamos tus batallas crediticias en victorias estratégicas
            Nuestra métrica de éxito: verte alcanzar cada meta financiera con precisión y poder
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4C97D2] to-transparent mx-auto mt-8"></div>
        </div>
      </div>

      {/* ========================================
         tajetas de agente
          ======================================== */}
      {/* Agents Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-32">
          {agents.map((agent, index) => (
            <div
              key={index}
              ref={(el) => {
                agentRefs.current[index] = el
              }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="space-y-4">
                  <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white to-[#D0EDFC] bg-clip-text text-transparent">
                    {agent.name}
                  </h2>
                  <p className="text-xl text-[#4C97D2] font-semibold tracking-wide">{agent.role}</p>
                </div>

                <div className="space-y-8">
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed">{agent.story}</p>

                  <blockquote className="relative">
                    <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D0EDFC] via-[#4C97D2] to-transparent"></div>
                    <p className="pl-6 py-4 text-xl lg:text-2xl font-medium text-[#D0EDFC] italic">
                      &ldquo;{agent.quote}&rdquo;
                    </p>
                  </blockquote>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#2A7ABF] to-[#4C97D2] hover:from-[#4C97D2] hover:to-[#2A7ABF] 
                text-white font-semibold px-8 py-4 rounded-2xl text-lg 
                transition-all duration-500 transform hover:scale-105 hover:shadow-xl
                border border-white/10 backdrop-blur-sm group"
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
                    Conecta con {agent.name}
                  </Button>
                </div>
              </div>

              <div
                className={`relative group ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2A7ABF]/20 to-[#4C97D2]/20 rounded-[2rem] blur-2xl transition-all duration-500 group-hover:opacity-100 opacity-75"></div>
                <div className="relative">
                  <Image
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl
                transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(208,237,252,0.3)]
                border-2 border-white/10"
                    width={1200}
                    height={600}
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#12274B]/40 via-transparent to-transparent 
              transition-opacity duration-500 group-hover:opacity-50"></div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D0EDFC]/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#4C97D2]/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TestimonialsSection/>
    </section>
  )
}
