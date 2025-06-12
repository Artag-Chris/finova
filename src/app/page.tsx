import { HeroSection } from "@/components/hero-section"
import { TrustElements } from "@/components/trust-elements"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import BenefitsSection from "@/components/benefits-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <BenefitsSection />
        <TrustElements />
      </main>
      <Footer />
    </>
  )
}
