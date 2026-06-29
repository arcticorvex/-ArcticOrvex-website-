import { Cloud, Server, Network, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Cloud,
    accent: "cyan" as const,
    title: "AWS & Cloud",
    description:
      "We break down Amazon Web Services into practical deployment paths. No theory overload — just architecture, automation, and security configs.",
  },
  {
    icon: Server,
    accent: "teal" as const,
    title: "Linux Administration",
    description:
      "From configuration management to server hardening. We handle enterprise Linux environments to keep your backend fast and automated.",
  },
  {
    icon: Network,
    accent: "cyan" as const,
    title: "IT Consultancy",
    description:
      "Registered computer consultancy. We solve technical bottlenecks, manage networks, and keep infrastructure stable.",
  },
]

const accentStyles = {
  cyan: { chip: "bg-cyan/10 text-cyan", link: "text-cyan" },
  teal: { chip: "bg-teal/10 text-teal", link: "text-teal" },
}

export function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <span className="font-display text-sm font-medium uppercase tracking-[0.05em] text-cyan">
            What we do
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            Systems that don&apos;t just run — they scale.
          </h2>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const accent = accentStyles[service.accent]
            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-xl border border-border bg-surface p-8 transition-colors hover:border-brand"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${accent.chip}`}>
                  <service.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium text-foreground">{service.title}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-text-secondary">{service.description}</p>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-brand ${accent.link}`}
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
