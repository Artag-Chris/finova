"use client"

import { Button } from "@/components/ui/button"
import { Clock, Shield, Users, Zap, Calculator, TrendingUp, ArrowRight } from "lucide-react"
import { CreditSimulator } from "@/components/credit-simulator"
import { useRef } from "react"
// Importamos Framer Motion para las animaciones
import { motion } from "framer-motion"
import { AnimatedTextWithIcon } from "./animation/AnimatedTextWithIcon"
import { TypewriterText } from "./animation/TypewriterText"

export function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  // 🎨 CONFIGURACIÓN DE ANIMACIONES - Aquí puedes modificar las animaciones
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const rotatingAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    },
  }

  const pulsingAnimation = {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const slidingAnimation = {
    x: [-100, 100, -100],
    transition: {
      duration: 15,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const breathingAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <section className="relative overflow-hidden bg-[#2A7ABF] min-h-screen flex items-center">
      {/* 🌟 FONDO ANIMADO - Aquí están todos los elementos animados del fondo */}
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
        {/* ⚡ LÍNEAS ANIMADAS - Se mueven horizontalmente */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-0.5 bg-gradient-to-r from-[#12274B] to-transparent opacity-40"
          animate={slidingAnimation}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-0.5 bg-gradient-to-l from-[#12274B] to-transparent opacity-40"
          animate={{
            x: [100, -100, 100],
            transition: {
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-48 h-0.5 bg-gradient-to-r from-transparent via-[#12274B] to-transparent opacity-40"
          animate={slidingAnimation}
        />

        {/* 🔄 MARCOS GEOMÉTRICOS ROTANDO - Rotan continuamente */}
        <motion.div
          className="absolute top-32 right-32 w-16 h-16 border-2 border-[#12274B]/30"
          animate={rotatingAnimation}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-12 h-12 border border-[#12274B]/40"
          animate={{
            rotate: [0, -360],
            transition: {
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
        />

        {/* ✨ CÍRCULOS Y PUNTOS PULSANTES - Cambian de tamaño y opacidad */}
        <motion.div className="absolute top-60 left-1/4 w-2 h-2 bg-[#12274B] rounded-full" animate={pulsingAnimation} />
        <motion.div
          className="absolute bottom-60 right-1/3 w-1 h-1 bg-[#4C97D2] rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
            transition: {
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-3 h-3 bg-[#D0EDFC]/60 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
            transition: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        />

        {/* 📐 LÍNEAS DIAGONALES FLOTANTES - Se mueven verticalmente */}
        <motion.div
          className="absolute top-0 left-1/3 w-0.5 h-32 bg-gradient-to-b from-[#12274B] to-transparent rotate-12 opacity-50"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-0.5 h-24 bg-gradient-to-t from-[#D0EDFC] to-transparent -rotate-12"
          animate={{
            y: [10, -10, 10],
            transition: {
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        />

        {/* 🎯 ELEMENTOS TIPO HUD ANIMADOS - Rotan y se mueven */}
        <motion.div
          className="absolute top-24 left-1/2 transform -translate-x-1/2"
          animate={{
            rotate: [0, 5, -5, 0],
            y: [-5, 5, -5],
            transition: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <div className="flex items-center gap-2 opacity-30">
            <motion.div
              className="w-8 h-0.5 bg-[#12274B]"
              animate={{
                scaleX: [1, 1.2, 1],
                transition: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            />
            <motion.div className="w-2 h-2 border border-[#12274B] rotate-45" animate={rotatingAnimation} />
            <motion.div
              className="w-4 h-0.5 bg-[#D0EDFC]"
              animate={{
                scaleX: [1, 0.8, 1],
                transition: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                },
              }}
            />
          </div>
        </motion.div>

        {/* 📊 BARRAS DE PROGRESO ANIMADAS - Crecen y se contraen */}
        <motion.div className="absolute bottom-20 left-10 opacity-20" animate={floatingAnimation}>
          <div className="space-y-1">
            <motion.div
              className="w-16 h-1 bg-[#12274B] rounded-full"
              animate={{
                scaleX: [1, 1.3, 1],
                transition: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            />
            <motion.div
              className="w-12 h-1 bg-[#D0EDFC] rounded-full"
              animate={{
                scaleX: [1, 1.5, 1],
                transition: {
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.3,
                },
              }}
            />
            <motion.div
              className="w-20 h-1 bg-[#4C97D2]/60 rounded-full"
              animate={{
                scaleX: [1, 1.2, 1],
                transition: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.6,
                },
              }}
            />
          </div>
        </motion.div>

        {/* 🌊 FORMAS ORGÁNICAS CON BLUR ANIMADAS - Respiran y se mueven */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
          animate={breathingAnimation}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-48 h-24 bg-[#12274B]/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-10, 10, -10],
            transition: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-40 bg-white/3 rounded-full blur-lg transform rotate-45"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [45, 50, 45],
            transition: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />

        {/* 🆕 NUEVOS ELEMENTOS ANIMADOS CON COLOR OSCURO */}

        {/* Círculos grandes flotantes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-6 h-6 border-2 border-[#12274B]/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            transition: {
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />

        {/* Líneas cruzadas animadas */}
        <motion.div
          className="absolute bottom-1/4 left-1/3"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            transition: {
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
        >
          <div className="w-8 h-0.5 bg-[#12274B]/30"></div>
          <div className="w-0.5 h-8 bg-[#12274B]/30 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        </motion.div>

        {/* Puntos orbitales */}
        <motion.div
          className="absolute top-1/3 left-1/2 w-4 h-4"
          animate={{
            rotate: [0, 360],
            transition: {
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
        >
          <div className="absolute top-0 left-0 w-1 h-1 bg-[#12274B] rounded-full"></div>
          <div className="absolute top-0 right-0 w-1 h-1 bg-[#4C97D2] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#D0EDFC] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#12274B] rounded-full"></div>
        </motion.div>

        {/* Ondas expansivas */}
        <motion.div
          className="absolute top-3/4 right-1/3 w-12 h-12 border border-[#12274B]/10 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
            transition: {
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
            },
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-8 h-8 border border-[#12274B]/20 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.7, 0, 0.7],
            transition: {
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
              delay: 1,
            },
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="text-white space-y-8">
            {/* Badge con animación sutil */}
            <motion.div
              className="inline-flex items-center gap-3 bg-[#12274B]/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium border border-[#12274B]/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="w-2 h-2 bg-[#D0EDFC] rounded-full" animate={pulsingAnimation} />
              <AnimatedTextWithIcon />
              <motion.div
                className="w-8 h-0.5 bg-[#12274B] rounded-full opacity-60"
                animate={{
                  scaleX: [1, 1.2, 1],
                  transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              />
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                CRÉDITOS
                <br />
                <span className="text-[#D0EDFC] relative">
                  TRANSPARENTES
                  <motion.div
                    className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#D0EDFC] via-[#12274B] to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
                <br />
                <span className="text-4xl lg:text-5xl text-white/90">Y CERCANOS</span>
              </h1>

              <div className="flex items-center gap-4 text-[#D0EDFC] text-lg">
                <Zap className="w-5 h-5" style={{ color: "#12274B" }} />
                <TypewriterText />
              </div>
            </motion.div>

            <motion.p
              className="text-xl text-white/90 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sin letra pequeña, sin sorpresas. Te acompañamos con honestidad total en cada paso de tu crédito.
            </motion.p>

            {/* Beneficios con animación de entrada */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: Shield, text: "100% Transparente", color: "from-[#D0EDFC] to-[#12274B]" },
                { icon: Users, text: "Asesoría Humana", color: "from-[#12274B] to-[#4C97D2]" },
                { icon: Calculator, text: "Sin Comisiones", color: "from-[#D0EDFC] to-[#12274B]" },
                { icon: TrendingUp, text: "Tasas Justas", color: "from-[#12274B] to-[#D0EDFC]" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-4 py-3 border border-[#12274B]/20 hover:bg-white/10 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Botón flotante principal con animación */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-[#12274B] to-[#2A7ABF] hover:from-[#2A7ABF] hover:to-[#12274B] text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-[#12274B]/25 transition-all duration-500 transform hover:scale-105 border-2 border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Zap className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Solicitar con Transparencia Total
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </div>

          {/* Simulador de crédito con animación de entrada */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CreditSimulator />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
