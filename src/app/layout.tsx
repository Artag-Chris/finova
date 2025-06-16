import type { Metadata } from "next"
// Importamos Open Sans en lugar de Geist
import { Open_Sans } from "next/font/google"
import "./globals.css"

// Configuración de Open Sans con subsets para mejor rendimiento
const openSans = Open_Sans({
  subsets: ["latin"],
  // Incluimos los weights que necesitamos
  weight: ["300", "400", "500", "600", "700", "800"],
  // Variable para usar con CSS
  variable: "--font-open-sans",
  // Ajuste de display para optimizar CLS
  display: "swap",
})

// SEO Optimizado - Metadata completa
export const metadata: Metadata = {
  // Título principal - mantener entre 50-60 caracteres
  title: "Finova | Créditos Transparentes y Confiables en Colombia",
  // Títulos alternativos para diferentes contextos
  alternates: {
    canonical: "https://finova.com.co",
  },
  // Descripción optimizada - mantener entre 150-160 caracteres
  description: "Soluciones financieras transparentes y accesibles en Colombia. Créditos personalizados, tasas competitivas y asesoría experta para hacer realidad tus proyectos.",
  // Keywords relevantes para SEO
  keywords: [
    "créditos colombia",
    "préstamos personales",
    "financiamiento empresarial",
    "créditos transparentes",
    "asesoría financiera",
    "tasas competitivas",
    "finova",
    "soluciones financieras",
  ],
  // Configuración Open Graph para redes sociales
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://finova.com.co",
    title: "Finova | Soluciones Financieras Confiables",
    description: "Créditos transparentes y justos para todos en Colombia. Hacemos realidad tus proyectos con las mejores tasas del mercado.",
    siteName: "Finova",
    images: [
      {
        url: "/LOGO FINOVA_Mesa de trabajo 1.png", // Asegúrate de tener esta imagen en public/
        width: 1200,
        height: 630,
        alt: "Finova - Soluciones Financieras",
      },
    ],
  },
  // Configuración para Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Finova | Créditos Transparentes",
    description: "Soluciones financieras personalizadas y transparentes en Colombia.",
    images: ["/LOGOFOOTER.png"], // Asegúrate de tener esta imagen
  },
  // Configuración de iconos mejorada
  icons: {
    icon: [
      { url: "./LOGO.ico", sizes: "any" },
      { url: "./LOGOFOOTER.png", type: "image/svg+xml" },
    ],
    apple: [
      { url: "./apple-icon.png", sizes: "180x180" },
    ],
  },
  // Información de contacto y ubicación
  authors: [{ name: "Finova", url: "https://finova.com.co" }],
  generator: "Next.js",
  applicationName: "Finova",
  referrer: "origin-when-cross-origin",
  creator: "Finova",
  publisher: "Finova",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Metadatos adicionales
  verification: {
    google: "tu-código-de-verificación-google",
  },
  category: "finance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}