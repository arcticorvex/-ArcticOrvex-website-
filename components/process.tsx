const steps = [
  {
    number: "01",
    title: "Assess",
    description: "We map your current setup — servers, networks, deployment paths — and find the bottlenecks.",
  },
  {
    number: "02",
    title: "Architect",
    description: "A concrete plan: cloud architecture, automation, and security configs built for your load.",
  },
  {
    number: "03",
    title: "Deploy",
    description: "We implement production-grade infrastructure with hardening and automation in place.",
  },
  {
    number: "04",
    title: "Hand off",
    description: "We document and teach your team how to keep it running. No lock-in, no black boxes.",
  },
]

export function Process() {
  return (
    <section id="process" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <span className="font-display text-sm font-medium uppercase tracking-[0.05em] text-cyan">
            How we work
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            Four steps. No hand-holding.
          </h2>
        </header>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.number} className="bg-surface p-7">
              <span className={`font-display text-3xl font-bold ${i % 2 === 0 ? "text-cyan" : "text-teal"}`}>
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-xl font-medium text-foreground">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
