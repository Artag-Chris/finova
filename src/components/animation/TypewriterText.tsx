"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function TypewriterText() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const text = "Transparencia • Cercanía • Confianza"

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530) // Slightly irregular blinking for more human feel

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentIndex < text.length) {
      // Variable typing speed for more human feel
      const getTypingDelay = () => {
        const char = text[currentIndex]
        if (char === " ") return 100 // Shorter pause for spaces
        if (char === "•") return 200 // Slightly longer for bullet points
        // Random variation between 80-150ms for natural typing rhythm
        return Math.random() * 70 + 80
      }

      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, getTypingDelay())

      return () => clearTimeout(timeout)
    } else {
      // When finished typing, pause and then restart
      const restartTimeout = setTimeout(() => {
        setDisplayedText("")
        setCurrentIndex(0)
      }, 2500) // Pause before restarting

      return () => clearTimeout(restartTimeout)
    }
  }, [currentIndex, text])

  return (
    <div className="relative inline-block">
      <span className="text-[#12274B] font-medium">
        {displayedText}
        <motion.span
          className={`inline-block w-0.5 h-5 bg-[#12274B] ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}
          animate={{
            opacity: showCursor ? 1 : 0,
          }}
          transition={{
            duration: 0.1,
          }}
        />
      </span>
    </div>
  )
}
