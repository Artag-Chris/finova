import { motion, AnimatePresence } from "framer-motion"
import { Clock, Zap, Shield, Users } from "lucide-react"
import React from "react"
import { useState, useEffect } from "react"

interface TextItem {
  text: string
  icon: React.ElementType
}

const items: TextItem[] = [
  { text: "Respuesta en 60 segundos", icon: Clock },
  { text: "Proceso 100% Digital", icon: Zap },
  { text: "Datos Seguros", icon: Shield },
  { text: "Atención Personalizada", icon: Users },
]

export function AnimatedTextWithIcon() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center gap-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
          style={{
            background: 'linear-gradient(145deg, #E8E8E8, #D1D1D1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '1px 1px 2px rgba(255,255,255,0.1)'
          }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            className="text-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
          >
            {React.createElement(items[currentIndex].icon, {
              className: "w-4 h-4",
              style: {
                filter: 'drop-shadow(1px 1px 1px rgba(255,255,255,0.3))'
              }
            })}
          </motion.div>

          {/* Text */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="font-medium tracking-wide"
          >
            {items[currentIndex].text}
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}