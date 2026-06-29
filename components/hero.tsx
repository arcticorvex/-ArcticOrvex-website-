import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-16 sm:px-6">
      {/* subtle brand glow — the one memorable element */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,89,36,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <span className="inline-flex items-center rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.05em] text-cyan">
          Registered MSME · Ministry of MSME, India
        </span>

        <h1 className="mt-8 max-w-4xl text-balance font-display text-[1.875rem] font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
          We Build and Teach <span className="text-brand">Robust</span> Infrastructure.
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
          Production-grade AWS deployment, enterprise Linux administration, and IT consultancy that keeps systems
          online.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3.5 text-sm font-medium tracking-wide text-black transition-colors hover:bg-brand-dark"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <p className="mt-16 font-display text-sm font-medium uppercase tracking-[0.05em] text-text-muted">
          No fluff. Just architecture.
        </p>
      </div>
    </section>
  )
}
