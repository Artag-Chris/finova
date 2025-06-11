import { HeroSection } from "@/components/hero-section"
import { AgentSection } from "@/components/agent-section"
import { TrustElements } from "@/components/trust-elements"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <AgentSection />
        <TrustElements />
      </main>
      <Footer />
    </>
  )
}
