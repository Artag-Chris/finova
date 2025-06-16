"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowLeft, Sparkles, Heart } from "lucide-react"
import Image from "next/image"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProfessionalAnimatedBackground } from "@/components/animetedBackground"


export default function Page() {
  const backButtonRef = useRef<HTMLButtonElement>(null)
  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null)
  const [hoveredButton, setHoveredButton] = useState<number | null>(null)

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

      // ========================================
      // ANIMACIÓN DE TEXTO SCROLL
      // ========================================

      // 1. Establecer estado inicial: todos los textos empiezan opacos (grises)
      scrollTextRefs.current.forEach((textRef) => {
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
      {/* Animated Background */}
      <ProfessionalAnimatedBackground opacity={0.8} intensity="high" />

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
                background: "linear-gradient(to bottom, rgba(18, 39, 75, 0.3), rgba(18, 39, 75, 0.7))",
              }}
            ></div>
          </div>
        </div>

        {/* Text content */}
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

      {/* Sección de texto animado con scroll */}
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
            Aliados que no retroceden: transformamos tus batallas crediticias en victorias estratégicas Nuestra métrica
            de éxito: verte alcanzar cada meta financiera con precisión y poder
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4C97D2] to-transparent mx-auto mt-8"></div>
        </div>
      </div>

      {/* ========================================
         SECCIÓN DE AGENTES MEJORADA
          ======================================== */}
      <div className="relative z-10">
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
                {/* Contenido de texto */}
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

                    {/* ========================================
                       BOTÓN MEJORADO CON ANIMACIONES PREMIUM
                        ======================================== */}
                    <div className="relative">
                      <Button
                        size="lg"
                        className="relative overflow-hidden group/btn
                          bg-gradient-to-r from-[#2A7ABF] to-[#4C97D2] 
                          hover:from-[#4C97D2] hover:to-[#2A7ABF] 
                          text-white font-semibold px-8 py-4 rounded-2xl text-lg 
                          transition-all duration-700 ease-out
                          transform hover:scale-[1.08] hover:-translate-y-1
                          hover:shadow-[0_20px_40px_rgba(42,122,191,0.4)]
                          border-2 border-white/20 hover:border-[#D0EDFC]/50
                          backdrop-blur-sm
                          before:absolute before:inset-0 before:bg-gradient-to-r 
                          before:from-transparent before:via-white/20 before:to-transparent
                          before:translate-x-[-100%] before:skew-x-12
                          hover:before:translate-x-[100%] before:transition-transform before:duration-1000
                          after:absolute after:inset-0 after:bg-gradient-to-r
                          after:from-[#D0EDFC]/0 after:via-[#D0EDFC]/10 after:to-[#D0EDFC]/0
                          after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500"
                        onMouseEnter={() => setHoveredButton(index)}
                        onMouseLeave={() => setHoveredButton(null)}
                        onClick={() =>
                          window.open(
                            `https://wa.me/573226962139?text=${encodeURIComponent(
                              `¡Hola ${agent.name}! Me interesa conocer más sobre los créditos de Finova.`,
                            )}`,
                            "_blank",
                          )
                        }
                      >
                        {/* Partículas flotantes en hover */}
                        {hoveredButton === index && (
                          <>
                            <div className="absolute top-2 left-4 w-1 h-1 bg-[#D0EDFC] rounded-full animate-ping opacity-75"></div>
                            <div className="absolute top-4 right-6 w-1 h-1 bg-white rounded-full animate-ping delay-300 opacity-60"></div>
                            <div className="absolute bottom-3 left-8 w-1 h-1 bg-[#4C97D2] rounded-full animate-ping delay-500 opacity-80"></div>
                            <div className="absolute bottom-2 right-4 w-1 h-1 bg-[#D0EDFC] rounded-full animate-ping delay-700 opacity-70"></div>
                          </>
                        )}

                        {/* Contenido del botón */}
                        <div className="relative z-10 flex items-center">
                          <MessageCircle
                            className={`w-5 h-5 mr-3 transition-all duration-500 ease-out
                              ${hoveredButton === index ? "rotate-12 scale-110" : ""}
                              group-hover/btn:drop-shadow-[0_0_8px_rgba(208,237,252,0.8)]`}
                          />
                          <span
                            className={`transition-all duration-300 
                              ${hoveredButton === index ? "tracking-wider" : ""}`}
                          >
                            Conecta con {agent.name}
                          </span>

                          {/* Iconos adicionales en hover */}
                          <div
                            className={`ml-2 transition-all duration-500 ease-out transform
                              ${hoveredButton === index ? "translate-x-0 opacity-100" : "translate-x-[-10px] opacity-0"}`}
                          >
                            <Heart className="w-4 h-4 text-pink-300 animate-pulse" />
                          </div>
                        </div>

                        {/* Efecto de ondas en hover */}
                        <div
                          className={`absolute inset-0 rounded-2xl transition-all duration-700
                            ${hoveredButton === index ? "animate-pulse" : ""}
                            bg-gradient-to-r from-[#2A7ABF]/20 via-[#4C97D2]/20 to-[#2A7ABF]/20`}
                        ></div>
                      </Button>

                      {/* Tooltip elegante */}
                      {hoveredButton === index && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20">
                          <div className="bg-[#12274B]/90 backdrop-blur-sm text-[#D0EDFC] text-sm px-3 py-1 rounded-lg border border-[#4C97D2]/30 animate-fadeIn">
                            <div className="flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              <span>¡Respuesta en 2 minutos!</span>
                            </div>
                            {/* Flecha del tooltip */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#12274B]/90"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* ========================================
                   IMAGEN MEJORADA CON ANIMACIONES PREMIUM
                    ======================================== */}
                <div
                  className={`relative group/image ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  onMouseEnter={() => setHoveredAgent(index)}
                  onMouseLeave={() => setHoveredAgent(null)}
                >
                  {/* Aura exterior animada */}
                  <div
                    className={`absolute -inset-8 transition-all duration-1000 ease-out
                      ${hoveredAgent === index ? "opacity-100 scale-110" : "opacity-60 scale-100"}
                      bg-gradient-to-r from-[#2A7ABF]/15 via-[#4C97D2]/20 to-[#D0EDFC]/15 
                      rounded-[3rem] blur-3xl animate-pulse`}
                  ></div>

                  {/* Marco con gradiente animado */}
                  <div
                    className={`absolute -inset-2 transition-all duration-700 ease-out
                      ${hoveredAgent === index ? "opacity-100 rotate-1" : "opacity-70 rotate-0"}
                      bg-gradient-to-r from-[#2A7ABF]/30 via-[#4C97D2]/40 to-[#D0EDFC]/30 
                      rounded-[2.5rem] blur-xl`}
                  ></div>

                  {/* Contenedor principal de la imagen */}
                  <div className="relative overflow-hidden rounded-3xl">
                    {/* Imagen principal */}
                    <Image
                      src={agent.image || "/placeholder.svg"}
                      alt={agent.name}
                      className={`w-full h-[500px] lg:h-[600px] object-cover 
                        transition-all duration-700 ease-out
                        ${hoveredAgent === index ? "scale-110 rotate-1" : "scale-100 rotate-0"}
                        border-4 border-white/20 hover:border-[#D0EDFC]/50
                        filter hover:brightness-110 hover:contrast-105`}
                      width={1200}
                      height={600}
                    />

                    {/* Overlay con gradiente dinámico */}
                    <div
                      className={`absolute inset-0 transition-all duration-700 ease-out
                        ${hoveredAgent === index ? "opacity-30" : "opacity-60"}
                        bg-gradient-to-t from-[#12274B]/70 via-transparent to-transparent`}
                    ></div>

                    {/* Efecto de brillo que se mueve */}
                    <div
                      className={`absolute inset-0 transition-all duration-1000 ease-out
                        ${hoveredAgent === index ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"}
                        bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        skew-x-12 transform`}
                    ></div>

                    {/* Partículas flotantes en la imagen */}
                    {hoveredAgent === index && (
                      <>
                        <div className="absolute top-8 left-8 w-2 h-2 bg-[#D0EDFC] rounded-full animate-bounce opacity-80"></div>
                        <div className="absolute top-16 right-12 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
                        <div className="absolute bottom-20 left-12 w-1.5 h-1.5 bg-[#4C97D2] rounded-full animate-pulse delay-500"></div>
                        <div className="absolute bottom-8 right-8 w-1 h-1 bg-[#D0EDFC] rounded-full animate-bounce delay-700"></div>
                      </>
                    )}

                    {/* Badge flotante con el nombre */}
                    <div
                      className={`absolute bottom-6 left-6 transition-all duration-500 ease-out
                        ${hoveredAgent === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                        bg-[#12274B]/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl
                        border border-[#4C97D2]/30 shadow-lg`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                        <span className="font-semibold text-sm">{agent.name}</span>
                        <Heart className="w-3 h-3 text-pink-300" />
                      </div>
                    </div>
                  </div>

                  {/* Elementos decorativos mejorados */}
                  <div
                    className={`absolute -top-6 -right-6 transition-all duration-700 ease-out
                      ${hoveredAgent === index ? "scale-125 opacity-100" : "scale-100 opacity-60"}
                      w-32 h-32 bg-[#D0EDFC]/10 rounded-full blur-2xl animate-pulse`}
                  ></div>
                  <div
                    className={`absolute -bottom-6 -left-6 transition-all duration-700 ease-out delay-200
                      ${hoveredAgent === index ? "scale-125 opacity-100" : "scale-100 opacity-60"}
                      w-40 h-40 bg-[#4C97D2]/10 rounded-full blur-2xl animate-pulse`}
                  ></div>

                  {/* Círculos orbitales */}
                  {hoveredAgent === index && (
                    <>
                      <div className="absolute top-1/4 -right-4 w-3 h-3 bg-[#D0EDFC]/60 rounded-full animate-spin-slow"></div>
                      <div className="absolute bottom-1/4 -left-4 w-2 h-2 bg-[#4C97D2]/60 rounded-full animate-spin-slow delay-1000"></div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TestimonialsSection />
    </section>
  )
}
