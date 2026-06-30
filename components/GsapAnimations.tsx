"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function GsapAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "power3.out" } })

      tl.from(".animate-hero-badge", { opacity: 0, y: -20, duration: 0.8, ease: "power3.out" })
        .from(
          ".animate-hero-title",
          { opacity: 0, y: 40, duration: 1.1, ease: "power4.out" },
          "-=0.6"
        )
        .from(
          ".animate-hero-copy",
          { opacity: 0, y: 28, duration: 0.9, ease: "power3.out" },
          "-=0.75"
        )
        .from(
          ".animate-hero-cta",
          { opacity: 0, y: 24, scale: 0.96, duration: 0.9, ease: "power3.out" },
          "-=0.7"
        )
        .from(
          ".animate-hero-footer",
          { opacity: 0, y: 20, duration: 0.75, ease: "power3.out" },
          "-=0.7"
        )

      gsap.utils.toArray(".animate-section-title").forEach((title) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 32,
          duration: 0.9,
          ease: "power3.out",
        })
      })

      gsap.utils.toArray(".animate-card").forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 28,
          duration: 0.9,
          ease: "power3.out",
          delay: index * 0.08,
        })
      })
    }, document.body)

    return () => ctx.revert()
  }, [])

  return null
}
