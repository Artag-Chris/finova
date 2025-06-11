import { CreditSimulator } from "@/components/credit-simulator"
import { AgentSection } from "@/components/agent-section"
import { TrustElements } from "@/components/trust-elements"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <CreditSimulator />
        <AgentSection />
        <TrustElements />
      </main>
      <Footer />
    </>
  )
}
