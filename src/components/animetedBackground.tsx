"use client"

import { useEffect, useRef } from "react"
import type { JSX } from "react/jsx-runtime"

interface ProfessionalAnimatedBackgroundProps {
    opacity?: number
    intensity?: "low" | "medium" | "high"
}

type IntensityConfig = {
    shapes: number
    orbs: number
    lines: number
    speed: number
}

type ShapeType =
    | "spiral"
    | "rose"
    | "lemniscate"
    | "cardioid"
    | "astroid"
    | "cycloid"
    | "epicycloid"
    | "hypocycloid"
    | "deltoid"
    | "nephroid"

interface TrailPoint {
    x: number
    y: number
    opacity: number
}

export function ProfessionalAnimatedBackground({
    opacity = 0.6,
    intensity = "medium",
}: ProfessionalAnimatedBackgroundProps): JSX.Element {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Configuración responsive
        const resizeCanvas = (): void => {
            const dpr: number = window.devicePixelRatio || 1

            // Usar el tamaño de la ventana en lugar de getBoundingClientRect
            canvas.width = window.innerWidth * dpr
            canvas.height = window.innerHeight * dpr

            ctx.scale(dpr, dpr)
            canvas.style.width = `${window.innerWidth}px`
            canvas.style.height = `${window.innerHeight}px`
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Configuración de intensidad
        const intensityConfig: Record<"low" | "medium" | "high", IntensityConfig> = {
            low: { shapes: 15, orbs: 8, lines: 5, speed: 0.3 },
            medium: { shapes: 25, orbs: 12, lines: 8, speed: 0.5 },
            high: { shapes: 35, orbs: 16, lines: 12, speed: 0.8 },
        }

        const config: IntensityConfig = intensityConfig[intensity]
        let animationId: number

        // ========================================
        // CLASE PARA FORMAS TRIGONOMÉTRICAS
        // ========================================
        class TrigonometricShape {
            public x: number
            public y: number
            public size: number
            public rotation: number
            public rotationSpeed: number
            public speedX: number
            public speedY: number
            public shapeType: ShapeType
            public color: string
            public opacity: number
            public pulsePhase: number
            public pulseSpeed: number
            public vertices: number
            public amplitude: number
            public frequency: number

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.size = 20 + Math.random() * 80
                this.rotation = Math.random() * Math.PI * 2
                this.rotationSpeed = (Math.random() - 0.5) * 0.02 * config.speed
                this.speedX = (Math.random() - 0.5) * 0.8 * config.speed
                this.speedY = (Math.random() - 0.5) * 0.6 * config.speed

                // Tipos de formas trigonométricas
                const shapeTypes: ShapeType[] = [
                    "spiral",
                    "rose",
                    "lemniscate",
                    "cardioid",
                    "astroid",
                    "cycloid",
                    "epicycloid",
                    "hypocycloid",
                    "deltoid",
                    "nephroid",
                ]
                this.shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)]

                // Colores de la paleta Finova
                const colors: string[] = [
                    "rgba(208, 237, 252, 0.12)", // #D0EDFC
                    "rgba(42, 122, 191, 0.08)", // #2A7ABF
                    "rgba(76, 151, 210, 0.06)", // #4C97D2
                    "rgba(18, 39, 75, 0.10)", // #12274B
                ]
                this.color = colors[Math.floor(Math.random() * colors.length)]
                this.opacity = 0.1 + Math.random() * 0.3

                this.pulsePhase = Math.random() * Math.PI * 2
                this.pulseSpeed = 0.01 + Math.random() * 0.02
                this.vertices = 3 + Math.floor(Math.random() * 8) // 3-10 vértices
                this.amplitude = 0.3 + Math.random() * 0.7
                this.frequency = 1 + Math.random() * 4
            }

            public update(): void {
                this.x += this.speedX
                this.y += this.speedY
                this.rotation += this.rotationSpeed
                this.pulsePhase += this.pulseSpeed

                // Rebote suave en los bordes con margen
                const margin: number = this.size
                if (this.x < -margin) this.x = canvas!.width + margin
                if (this.x > canvas!.width + margin) this.x = -margin
                if (this.y < -margin) this.y = canvas!.height + margin
                if (this.y > canvas!.height + margin) this.y = -margin
            }

            public draw(): void {
                ctx!.save()
                ctx!.translate(this.x, this.y)
                ctx!.rotate(this.rotation)

                // Efecto de pulso
                const pulseScale: number = 1 + Math.sin(this.pulsePhase) * 0.2
                ctx!.scale(pulseScale, pulseScale)

                ctx!.globalAlpha = this.opacity
                ctx!.strokeStyle = this.color
                ctx!.fillStyle = this.color.replace(/[\d.]+\)$/g, `${this.opacity * 0.3})`)
                ctx!.lineWidth = 1.5

                ctx!.beginPath()

                switch (this.shapeType) {
                    case "spiral":
                        this.drawSpiral()
                        break
                    case "rose":
                        this.drawRose()
                        break
                    case "lemniscate":
                        this.drawLemniscate()
                        break
                    case "cardioid":
                        this.drawCardioid()
                        break
                    case "astroid":
                        this.drawAstroid()
                        break
                    case "cycloid":
                        this.drawCycloid()
                        break
                    case "epicycloid":
                        this.drawEpicycloid()
                        break
                    case "hypocycloid":
                        this.drawHypocycloid()
                        break
                    case "deltoid":
                        this.drawDeltoid()
                        break
                    case "nephroid":
                        this.drawNephroid()
                        break
                }

                ctx!.stroke()
                ctx!.fill()
                ctx!.restore()
            }

            // Espiral de Arquímedes
            private drawSpiral(): void {
                const turns: number = 3
                for (let t = 0; t <= turns * Math.PI * 2; t += 0.1) {
                    const r: number = (this.size / (turns * 2)) * t
                    const x: number = r * Math.cos(t)
                    const y: number = r * Math.sin(t)
                    if (t === 0) ctx!.moveTo(x, y)
                    else ctx!.lineTo(x, y)
                }
            }

            // Rosa matemática
            private drawRose(): void {
                const k: number = this.vertices
                for (let t = 0; t <= Math.PI * 2; t += 0.05) {
                    const r: number = this.size * Math.cos(k * t) * this.amplitude
                    const x: number = r * Math.cos(t)
                    const y: number = r * Math.sin(t)
                    if (t === 0) ctx!.moveTo(x, y)
                    else ctx!.lineTo(x, y)
                }
            }

            // Lemniscata (infinito)
            private drawLemniscate(): void {
                for (let t = 0; t <= Math.PI * 2; t += 0.05) {
                    const r: number = this.size * Math.sqrt(Math.abs(Math.cos(2 * t))) * this.amplitude
                    const x: number = r * Math.cos(t)
                    const y: number = r * Math.sin(t)
                    if (t === 0) ctx!.moveTo(x, y)
                    else ctx!.lineTo(x, y)
                }
            }

            // Cardioide (corazón)
            private drawCardioid(): void {
                for (let t = 0; t <= Math.PI * 2; t += 0.05) {
                    const r: number = this.size * (1 - Math.cos(t)) * this.amplitude * 0.5
                    const x: number = r * Math.cos(t)
                    const y: number = r * Math.sin(t)
                    if (t === 0) ctx!.moveTo(x, y)
                    else ctx!.lineTo(x, y)
                }
            }

            // Astroide (estrella de 4 puntas)
            private drawAstroid(): void {
                for (let t = 0; t <= Math.PI * 2; t += 0.05) {
                    const x: number = this.size * Math.pow(Math.cos(t), 3) * this.amplitude
                    const y: number = this.size * Math.pow(Math.sin(t), 3) * this.amplitude
                    if (t === 0) ctx!.moveTo(x, y)
                    else ctx!.lineTo(x, y)
                }
            }

            // Cicloide
            private drawCycloid(): void {
                const r: number = this.size * 0.3
                for (let t = 0; t <= Math.PI * 4; t += 0.1) {
                    const x: number = r * (t - Math.sin(t)) * this.amplitude
                    const y: number = r * (1 - Math.cos(t)) * this.amplitude
                    if (t === 0) ctx!.moveTo(x - this.size, y - this.size)
                    else ctx!.lineTo(x - this.size, y - this.size)
                }
            }

            // Epicicloide
            private drawEpicycloid(): void {
                const R: number = this.size * 0.4
                const r: number = R / this.vertices
                for (let t = 0; t <= Math.PI * 2 * this.vertices; t += 0.05) {
                    const x: number = (R + r) * Math.cos(t) - r * Math.cos(((R + r) * t) / r)
                    const y: number = (R + r) * Math.sin(t) - r * Math.sin(((R + r) * t) / r)
                    if (t === 0) ctx!.moveTo(x * this.amplitude, y * this.amplitude)
                    else ctx!.lineTo(x * this.amplitude, y * this.amplitude)
                }
            }

            // Hipocicloide
            private drawHypocycloid(): void {
                const R: number = this.size * 0.5
                const r: number = R / this.vertices
                for (let t = 0; t <= Math.PI * 2 * this.vertices; t += 0.05) {
                    const x: number = (R - r) * Math.cos(t) + r * Math.cos(((R - r) * t) / r)
                    const y: number = (R - r) * Math.sin(t) - r * Math.sin(((R - r) * t) / r)
                    if (t === 0) ctx!.moveTo(x * this.amplitude, y * this.amplitude)
                    else ctx!.lineTo(x * this.amplitude, y * this.amplitude)
                }
            }

            // Deltoide (hipocicloide de 3 cúspides)
            private drawDeltoid(): void {
                const R: number = this.size * 0.5
                const r: number = R / 3
                for (let t = 0; t <= Math.PI * 6; t += 0.05) {
                    const x: number = (R - r) * Math.cos(t) + r * Math.cos(((R - r) * t) / r)
                    const y: number = (R - r) * Math.sin(t) - r * Math.sin(((R - r) * t) / r)
                    if (t === 0) ctx!.moveTo(x * this.amplitude, y * this.amplitude)
                    else ctx!.lineTo(x * this.amplitude, y * this.amplitude)
                }
            }

            // Nefroide (hipocicloide de 2 cúspides)
            private drawNephroid(): void {
                const R: number = this.size * 0.5
                const r: number = R / 2
                for (let t = 0; t <= Math.PI * 4; t += 0.05) {
                    const x: number = (R - r) * Math.cos(t) + r * Math.cos(((R - r) * t) / r)
                    const y: number = (R - r) * Math.sin(t) - r * Math.sin(((R - r) * t) / r)
                    if (t === 0) ctx!.moveTo(x * this.amplitude, y * this.amplitude)
                    else ctx!.lineTo(x * this.amplitude, y * this.amplitude)
                }
            }
        }

        // ========================================
        // CLASE PARA ORBES FLOTANTES MEJORADOS
        // ========================================
        class FloatingOrb {
            public x: number
            public y: number
            public radius: number
            public speedX: number
            public speedY: number
            public color: string
            public opacity: number
            public pulsePhase: number
            public pulseSpeed: number
            public trailPoints: TrailPoint[]

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.radius = 15 + Math.random() * 40
                this.speedX = (Math.random() - 0.5) * 0.6 * config.speed
                this.speedY = (Math.random() - 0.5) * 0.4 * config.speed

                const colors: string[] = ["rgba(208, 237, 252, 0.06)", "rgba(42, 122, 191, 0.04)", "rgba(76, 151, 210, 0.03)"]
                this.color = colors[Math.floor(Math.random() * colors.length)]
                this.opacity = 0.08 + Math.random() * 0.15
                this.pulsePhase = Math.random() * Math.PI * 2
                this.pulseSpeed = 0.015 + Math.random() * 0.01
                this.trailPoints = []
            }

            public update(): void {
                // Guardar posición anterior para el trail
                this.trailPoints.push({ x: this.x, y: this.y, opacity: this.opacity })
                if (this.trailPoints.length > 8) {
                    this.trailPoints.shift()
                }

                this.x += this.speedX
                this.y += this.speedY
                this.pulsePhase += this.pulseSpeed

                // Actualizar opacidad del trail
                this.trailPoints.forEach((point: TrailPoint) => {
                    point.opacity *= 0.9
                })

                // Rebote suave
                if (this.x < -this.radius) this.x = canvas!.width + this.radius
                if (this.x > canvas!.width + this.radius) this.x = -this.radius
                if (this.y < -this.radius) this.y = canvas!.height + this.radius
                if (this.y > canvas!.height + this.radius) this.y = -this.radius
            }

            public draw(): void {
                ctx!.save()

                // Dibujar trail
                this.trailPoints.forEach((point: TrailPoint, index: number) => {
                    const trailRadius: number = this.radius * (index / this.trailPoints.length) * 0.5
                    const baseColor = this.color.split(',').slice(0, -1).join(',')
                    const gradient: CanvasGradient = ctx!.createRadialGradient(
                        point.x,
                        point.y,
                        0,
                        point.x,
                        point.y,
                        trailRadius
                    )

                    gradient.addColorStop(0, `${baseColor}, ${point.opacity * 0.3})`)
                    gradient.addColorStop(1, `${baseColor}, 0)`)

                    ctx!.fillStyle = gradient
                    ctx!.beginPath()
                    ctx!.arc(point.x, point.y, trailRadius, 0, Math.PI * 2)
                    ctx!.fill()
                })

                // Dibujar orbe principal
                const pulseScale: number = 1 + Math.sin(this.pulsePhase) * 0.15
                const currentRadius: number = this.radius * pulseScale
                const baseColor = this.color.split(',').slice(0, -1).join(',')

                const gradient: CanvasGradient = ctx!.createRadialGradient(
                    this.x,
                    this.y,
                    0,
                    this.x,
                    this.y,
                    currentRadius
                )

                gradient.addColorStop(0, `${baseColor}, ${this.opacity})`)
                gradient.addColorStop(0.7, `${baseColor}, ${this.opacity * 0.4})`)
                gradient.addColorStop(1, `${baseColor}, 0)`)

                ctx!.fillStyle = gradient
                ctx!.beginPath()
                ctx!.arc(this.x, this.y, currentRadius, 0, Math.PI * 2)
                ctx!.fill()
                ctx!.restore()
            }
        }
        // ========================================
        // CLASE PARA LÍNEAS CONECTORAS DINÁMICAS
        // ========================================
        class DynamicLine {
            public startX: number
            public startY: number
            public endX: number
            public endY: number
            public progress: number
            public speed: number
            public color: string
            public opacity: number
            public maxOpacity: number
            public waveAmplitude: number
            public waveFrequency: number
            public wavePhase: number

            constructor() {
                this.startX = Math.random() * canvas!.width
                this.startY = Math.random() * canvas!.height
                this.endX = Math.random() * canvas!.width
                this.endY = Math.random() * canvas!.height
                this.progress = 0
                this.speed = 0.003 + Math.random() * 0.007
                this.color = "rgba(208, 237, 252, 0.2)"
                this.opacity = 0
                this.maxOpacity = 0.08 + Math.random() * 0.12
                this.waveAmplitude = 5 + Math.random() * 15
                this.waveFrequency = 0.02 + Math.random() * 0.03
                this.wavePhase = Math.random() * Math.PI * 2
            }

            public update(): void {
                this.progress += this.speed
                this.wavePhase += 0.02

                // Efecto de aparición y desaparición suave
                if (this.progress < 0.2) {
                    this.opacity = (this.progress / 0.2) * this.maxOpacity
                } else if (this.progress > 0.8) {
                    this.opacity = ((1 - this.progress) / 0.2) * this.maxOpacity
                } else {
                    this.opacity = this.maxOpacity
                }

                // Reiniciar con nuevas posiciones
                if (this.progress >= 1) {
                    this.startX = Math.random() * canvas!.width
                    this.startY = Math.random() * canvas!.height
                    this.endX = Math.random() * canvas!.width
                    this.endY = Math.random() * canvas!.height
                    this.progress = 0
                }
            }

            public draw(): void {
                if (this.opacity <= 0) return

                ctx!.save()
                ctx!.globalAlpha = this.opacity
                ctx!.strokeStyle = this.color
                ctx!.lineWidth = 1
                ctx!.lineCap = "round"

                ctx!.beginPath()

                // Dibujar línea ondulada
                const steps: number = 50
                for (let i = 0; i <= steps; i++) {
                    const t: number = i / steps
                    if (t > this.progress) break

                    const x: number = this.startX + (this.endX - this.startX) * t
                    const y: number = this.startY + (this.endY - this.startY) * t

                    // Añadir ondulación perpendicular
                    const distance: number = Math.sqrt(
                        Math.pow(this.endX - this.startX, 2) + Math.pow(this.endY - this.startY, 2),
                    )
                    const perpX: number = -(this.endY - this.startY) / distance
                    const perpY: number = (this.endX - this.startX) / distance

                    const wave: number = Math.sin(t * Math.PI * 4 + this.wavePhase) * this.waveAmplitude * Math.sin(t * Math.PI)
                    const finalX: number = x + perpX * wave
                    const finalY: number = y + perpY * wave

                    if (i === 0) ctx!.moveTo(finalX, finalY)
                    else ctx!.lineTo(finalX, finalY)
                }

                ctx!.stroke()
                ctx!.restore()
            }
        }

        // Crear elementos
        const shapes: TrigonometricShape[] = []
        const orbs: FloatingOrb[] = []
        const lines: DynamicLine[] = []

        // Inicializar formas trigonométricas
        for (let i = 0; i < config.shapes; i++) {
            shapes.push(new TrigonometricShape())
        }

        // Inicializar orbes
        for (let i = 0; i < config.orbs; i++) {
            orbs.push(new FloatingOrb())
        }

        // Inicializar líneas
        for (let i = 0; i < config.lines; i++) {
            lines.push(new DynamicLine())
        }

        // ========================================
        // FUNCIÓN DE ANIMACIÓN PRINCIPAL
        // ========================================
        function animate(): void {
            // Limpiar canvas
            ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

            // Fondo base con gradiente mejorado
            const bgGradient: CanvasGradient = ctx!.createLinearGradient(0, 0, 0, canvas!.height)
            bgGradient.addColorStop(0, "rgba(18, 39, 75, 0.98)") // #12274B
            bgGradient.addColorStop(0.3, "rgba(15, 31, 61, 0.99)") // Intermedio
            bgGradient.addColorStop(0.7, "rgba(12, 25, 50, 0.99)") // Intermedio
            bgGradient.addColorStop(1, "rgba(8, 18, 35, 1)") // Más oscuro

            ctx!.fillStyle = bgGradient
            ctx!.fillRect(0, 0, canvas!.width, canvas!.height)

            // Dibujar líneas dinámicas (fondo)
            lines.forEach((line: DynamicLine) => {
                line.update()
                line.draw()
            })

            // Dibujar orbes con trail (medio)
            orbs.forEach((orb: FloatingOrb) => {
                orb.update()
                orb.draw()
            })

            // Dibujar formas trigonométricas (frente)
            shapes.forEach((shape: TrigonometricShape) => {
                shape.update()
                shape.draw()
            })

            animationId = requestAnimationFrame(animate)
        }

        // Iniciar animación
        animate()

        // Cleanup
        return (): void => {
            window.removeEventListener("resize", resizeCanvas)
            if (animationId) {
                cancelAnimationFrame(animationId)
            }
        }
    }, [intensity])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0"
            style={{
                opacity,
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                transform: 'translate3d(0,0,0)',
                backfaceVisibility: 'hidden',
                willChange: 'transform',
            }}
        />
    )
}
