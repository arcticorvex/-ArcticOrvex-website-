import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16 text-center sm:px-6">
      {/* subtle brand glow — the one memorable element */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,89,36,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <span className="inline-flex items-center justify-center rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-cyan font-mono">
          Registered MSME · Ministry of MSME, India
        </span>

        <h1 className="heading mx-auto mt-8 max-w-4xl text-balance text-[2.5rem] font-[800] leading-[1.02] tracking-[-0.02em] text-foreground sm:text-[4.25rem] lg:text-[5rem]">
          We Build and Teach <span className="text-brand">Robust</span> Infrastructure.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-text-secondary sm:text-lg">
          Production-grade AWS deployment, enterprise Linux administration, and IT consultancy that keeps systems online.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-black transition-colors hover:bg-brand-dark"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <p className="mt-16 font-mono text-sm font-medium uppercase tracking-[0.05em] text-text-muted">
          No fluff. Just architecture.
        </p>
      </div>
    </section>
  )
}
