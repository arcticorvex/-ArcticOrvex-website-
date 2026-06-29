"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface-2/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2" aria-label="ArcticOrvex Technologies home">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-brand text-[15px] font-bold text-black">
            A
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Arctic<span className="text-brand">Orvex</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-text-secondary transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-md bg-brand px-5 py-2.5 text-sm font-medium tracking-wide text-black transition-colors hover:bg-brand-dark md:inline-block"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-surface-2 md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-[15px] font-medium text-text-secondary transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-brand px-3 py-2.5 text-center text-sm font-medium tracking-wide text-black"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
