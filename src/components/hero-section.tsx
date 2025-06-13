"use client"

import { Button } from "@/components/ui/button"
import {
  ShieldCheck,
  Users,
  Calculator,
  BarChartIcon as ChartNoAxesCombined,
  ArrowRight,
  PenIcon as UserPen,
  Handshake,
} from "lucide-react"
import { CreditSimulator } from "@/components/credit-simulator"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { AnimatedTextWithIcon } from "./animation/AnimatedTextWithIcon"
import { TypewriterText } from "./animation/TypewriterText"
import { useMediaQuery } from "@/hooks/use-media-query"


export function HeroSection() {
  const backgroundRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Configuración de animaciones
  const pulsingAnimation = {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  // Datos de beneficios
  const benefits = [
    {
      icon: ShieldCheck,
      text: "100% Transparente",
      color: "from-[#12274B] to-[#D0EDFC]",
      animation: {
        rotate: [0, -10, 10, 0],
        transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
      },
    },
    {
      icon: Users,
      text: "Asesoría Humana",
      color: "from-[#12274B] to-[#D0EDFC]",
      animation: {
        scale: [1, 1.1, 1],
        transition: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
      },
    },
    {
      icon: Calculator,
      text: "Sin Comisiones",
      color: "from-[#12274B] to-[#D0EDFC]",
      animation: {
        y: [0, -2, 0],
        transition: { duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
      },
    },
    {
      icon: ChartNoAxesCombined,
      text: "Tasas Justas",
      color: "from-[#12274B] to-[#D0EDFC]",
      animation: {
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
        transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
      },
    },
  ]

  // Efecto para inicializar y animar el fondo
  useEffect(() => {
    const canvas = backgroundRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar el tamaño del canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Crear partículas
    const particlesArray: Particle[] = []
    const numberOfParticles = isMobile ? 30 : 50

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(208, 237, 252, ${Math.random() * 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas!.width) this.x = 0
        else if (this.x < 0) this.x = canvas!.width
        if (this.y > canvas!.height) this.y = 0
        else if (this.y < 0) this.y = canvas!.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Inicializar partículas
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Función para dibujar líneas entre partículas cercanas
    function connect() {
      if (!ctx) return
      let opacityValue = 1
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < (canvas!.width / 7) * (canvas!.height / 7)) {
            opacityValue = 1 - distance / 100
            ctx.strokeStyle = `rgba(208, 237, 252, ${opacityValue * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Función de animación
    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas!.width, canvas!.height)

      // Dibujar gradiente de fondo
      const gradient = ctx.createLinearGradient(0, 0, canvas!.width, canvas!.height)
      gradient.addColorStop(0, "#2A7ABF")
      gradient.addColorStop(1, "#12274B")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas!.width, canvas!.height)

      // Actualizar y dibujar partículas
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      connect()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isMobile])

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Fondo animado con canvas */}
      <canvas ref={backgroundRef} className="absolute inset-0 w-full h-full" />

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white space-y-6 md:space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-[#12274B]/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium border border-[#12274B]/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="w-2 h-2 bg-[#D0EDFC] rounded-full" animate={pulsingAnimation} />
              <AnimatedTextWithIcon />
            </motion.div>

            {/* Main heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                CRÉDITOS
                <br />
                <span className="text-[#D0EDFC] relative">
                  TRANSPARENTES
                  <motion.div
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#D0EDFC] via-[#12274B] to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Typewriter text */}
            <div className="flex items-center gap-2 sm:gap-4 text-[#D0EDFC] text-sm sm:text-base md:text-lg">
              <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <TypewriterText />
            </div>

            {/* Description */}
            <motion.div
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="font-medium">Financiación ágil 100% online:</span>
              <ul className="mt-2 space-y-1 list-inside">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 text-sm mt-1">•</span>
                  <span>Desde tu casa a tu cuenta en horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 text-sm mt-1">•</span>
                  <span>Sin letra pequeña, sin esperas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 text-sm mt-1">•</span>
                  <span>Te guiamos con claridad en cada paso</span>
                </li>
              </ul>
            </motion.div>

            {/* Benefits grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                      transition: {
                        duration: 3 + index * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      },
                    }}
                  >
                    {/* Card */}
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                      {/* Glass background */}
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />

                      {/* Content */}
                      <div className="relative flex items-center gap-2 sm:gap-3 p-2 sm:p-4">
                        {/* Icon container */}
                        <motion.div
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg`}
                          animate={benefit.animation}
                        >
                          <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        </motion.div>

                        {/* Text with metallic effect */}
                        <span
                          className="text-sm sm:text-base font-semibold tracking-wide"
                          style={{
                            background: "linear-gradient(145deg, #E8E8E8, #C0C0C0)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: "1px 1px 2px rgba(255,255,255,0.1)",
                            filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
                          }}
                        >
                          {benefit.text}
                        </span>
                      </div>

                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="pt-4 sm:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-[#12274B] to-[#2A7ABF] hover:from-[#2A7ABF] hover:to-[#12274B] text-white font-bold 
                px-4 sm:px-6 md:px-8 
                py-2 sm:py-3 md:py-4 
                text-sm sm:text-base md:text-lg 
                rounded-full shadow-2xl hover:shadow-[#12274B]/25 transition-all duration-500 transform hover:scale-105 border-2 border-white/20
                w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3"
                onClick={() => window.open("https://app.finova.com.co/auth/register", "_blank")}
                aria-label="Registrarse en Finova"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <UserPen className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300 text-amber-400" />
                <span className="whitespace-nowrap">Comienza aquí: fácil, claro y seguro</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 text-amber-400" />
              </Button>
            </motion.div>
          </div>

          {/* Credit Simulator */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:mt-0 mt-4"
          >
            <CreditSimulator />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
