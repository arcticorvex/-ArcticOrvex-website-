import { ShieldCheck, Cpu, GitBranch, BookOpen } from "lucide-react"

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Registered MSME",
    description: "UDYAM-PB-21-0033869, Ministry of MSME, Government of India. A real, accountable entity.",
  },
  {
    icon: Cpu,
    title: "Engineering-first",
    description: "Founded and run by engineers. Decisions are made on architecture, not sales decks.",
  },
  {
    icon: GitBranch,
    title: "Production-grade",
    description: "Automation, hardening, and security configs built for systems that stay online under load.",
  },
  {
    icon: BookOpen,
    title: "We build and teach",
    description: "We deploy infrastructure and pass on the practical knowledge to keep it running.",
  },
]

export function WhyArcticOrvex() {
  return (
    <section id="why" className="border-y border-border bg-surface px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <header className="lg:sticky lg:top-24 lg:self-start">
            <span className="font-display text-sm font-medium uppercase tracking-[0.05em] text-cyan">
              Why ArcticOrvex
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
              Stable infrastructure matters.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-secondary">
              An engineering-first IT company. We build and teach robust infrastructure — and let the work speak.
            </p>
          </header>

          <div className="liquid-card grid gap-px overflow-hidden border border-border bg-transparent sm:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-surface-2 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-foreground">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
