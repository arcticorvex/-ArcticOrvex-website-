import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyArcticOrvex } from "@/components/why-arcticorvex"
import { Process } from "@/components/process"
import { FinalCta, Footer } from "@/components/final-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyArcticOrvex />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
