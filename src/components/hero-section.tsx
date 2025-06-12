"use client"

import { Button } from "@/components/ui/button"
import { ShieldCheck, Users, Calculator, ChartNoAxesCombined, ArrowRight, UserPen, Handshake } from "lucide-react"
import { CreditSimulator } from "@/components/credit-simulator"
import { useRef } from "react"
import { motion } from "framer-motion"
import { AnimatedTextWithIcon } from "./animation/AnimatedTextWithIcon"
import { TypewriterText } from "./animation/TypewriterText"

export function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  // Animations configuration
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
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

  // Benefits data
  const benefits = [
    {
      icon: ShieldCheck,
      text: "100% Transparente",
      color: "from-[#12274B] to-[#D0EDFC]", //aqui se cambia el background
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

  return (
    <section className="relative overflow-hidden bg-[#2A7ABF] min-h-screen flex items-center">
      {/* Background animations */}
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden opacity-50">
        {/* ... existing background animations ... */}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-[#12274B]/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium border border-[#12274B]/30"
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
              </h1>
            </motion.div>

            {/* Typewriter text */}
            <div className="flex items-center gap-4 text-[#D0EDFC] text-lg">
              <Handshake className="w-5 h-5 text-amber-400" />
              <TypewriterText />
            </div>

            {/* Description */}
            <motion.p
              className="text-xl text-white/90 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="">
                Financiación ágil 100% online:
              </span>
              <br />
              - desde tu casa a tu cuenta en horas
              Sin letra pequeña,
              <br /> - sin esperas. Te guiamos con claridad en cada paso <br />- desde la solicitud hasta el desembolso express.
            </motion.p>

            {/* Benefits grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
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
                    <div className="relative overflow-hidden rounded-2xl">
                      {/* Glass background */}
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />

                      {/* Content */}
                      <div className="relative flex items-center gap-3 p-4">
                        {/* Icon container */}
                        <motion.div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg`}
                          animate={benefit.animation}
                        >
                          <benefit.icon className="w-5 h-5 text-amber-400" />
                        </motion.div>

                        {/* Text with metallic effect */}
                        <span
                          className="text-base font-semibold tracking-wide "
                          style={{
                            background: 'linear-gradient(145deg, #E8E8E8, #C0C0C0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '1px 1px 2px rgba(255,255,255,0.1)',
                            filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.2))'
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
              className="pt-8"
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
                onClick={() => window.open('https://app.finova.com.co/auth/register', '_blank')}
                // Add these attributes for better accessibility and security
                aria-label="Registrarse en Finova"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <UserPen className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300 text-amber-400" />
                <span className="whitespace-nowrap">
                  Comienza aquí: fácil, claro y seguro
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 text-amber-400" />
              </Button>
            </motion.div>
          </div>

          {/* Credit Simulator */}
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