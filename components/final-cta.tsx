import { ArrowRight, ExternalLink, GitBranch, Mail, MapPin } from "lucide-react"

export function FinalCta() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="contact-card liquid-card relative overflow-hidden px-6 py-14 sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,89,36,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
              Let&apos;s keep your systems online.
            </h2>
            <p className="mt-5 text-pretty text-[15px] leading-relaxed text-text-secondary sm:text-lg">
              Production-grade AWS deployment, enterprise Linux admin, and IT consultancy. Tell us what you&apos;re
              running.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:contact.tarunmehra@gmail.com"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand px-7 py-3.5 text-sm font-medium tracking-wide text-black transition-colors hover:bg-brand-dark"
              >
                Email us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:contact.tarunmehra@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4" />
                contact.arcticorvex.online
              </a>
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm text-text-muted">
              <MapPin className="h-4 w-4" />
              Mallpur, SBS Nagar, Punjab, India
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-brand text-[15px] font-bold text-black">
              A
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              Arctic<span className="text-brand">Orvex</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
            ArcticOrvex Technologies. An engineering-first IT company. We build and teach robust infrastructure.
          </p>
        </div>

        <dl className="grid gap-x-12 gap-y-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-text-muted">Registration</dt>
            <dd className="mt-1 text-text-secondary">UDYAM-PB-21-0033869</dd>
          </div>
          <div>
            <dt className="text-text-muted">Type</dt>
            <dd className="mt-1 text-text-secondary">Registered Micro Enterprise (MSME)</dd>
          </div>
          <div>
            <dt className="text-text-muted">Ministry</dt>
            <dd className="mt-1 text-text-secondary">Ministry of MSME, Govt. of India</dd>
          </div>
          <div>
            <dt className="text-text-muted">Website</dt>
            <dd className="mt-1 text-text-secondary">arcticorvex.online</dd>
          </div>
        </dl>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} ArcticOrvex Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/arcticorvex"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-brand"
            >
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/company/arcticorvex"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-brand"
            >
              <ExternalLink className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
//we jsut want to commit this file for now