"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/src/lib/utils"

type TechBackgroundProps = {
  className?: string
  /**
   * Density of particles, higher = more particles.
   * 0.8 is light, 1 is default, 1.2 is dense.
   */
  density?: number
  /** 0..1 global opacity of the nodes/lines layer */
  opacity?: number
  /** Color of lines/points */
  color?: string
  /** Show grid underlay */
  showGrid?: boolean
  /** Rounded mask radius in pixels (for card-like sections) */
  rounded?: number
}

/**
 * Animated tech background with:
 * - optional CSS grid underlay
 * - animated “nodes and links” canvas
 * Respects prefers-reduced-motion.
 */
export default function TechBackground({
  className,
  density = 1,
  opacity = 0.8,
  color = "rgba(124, 58, 237, 0.7)", // purple-600
  showGrid = true,
  rounded,
}: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    const reduce = mql.matches

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = Math.max(1, window.devicePixelRatio || 1)
      const w = parent.clientWidth
      const h = parent.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      setupParticles()
    }

    type P = { x: number; y: number; vx: number; vy: number }
    let pts: P[] = []
    const setupParticles = () => {
      const area = (canvas.width / (window.devicePixelRatio || 1)) * (canvas.height / (window.devicePixelRatio || 1))
      // about 1 particle per 18,000 px^2 baseline, scaled by density
      const count = Math.max(12, Math.min(140, Math.floor((area / 18000) * density)))
      pts = new Array(count).fill(0).map(() => ({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }))
    }

    const step = () => {
      if (!ctx) return
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      ctx.clearRect(0, 0, w, h)

      // points
      ctx.globalAlpha = opacity
      ctx.fillStyle = color
      const maxDist = Math.min(160, Math.max(90, Math.min(w, h) * 0.3))
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        if (!reduce) {
          p.x += p.vx
          p.y += p.vy
        }
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.hypot(dx, dy)
          if (dist < maxDist) {
            const a = (1 - dist / maxDist) * 0.6 * opacity
            ctx.strokeStyle = color
            ctx.globalAlpha = a
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
        ctx.globalAlpha = opacity
      }

      rafRef.current = requestAnimationFrame(step)
    }

    resize()
    // static render if reduced motion
    if (reduce) {
      step()
      return
    }

    rafRef.current = requestAnimationFrame(step)
    window.addEventListener("resize", resize)
    const onChange = () => {
      // re-run to honor motion preference change
      cancelAnimationFrame(rafRef.current || 0)
      resize()
      if (!mql.matches) rafRef.current = requestAnimationFrame(step)
      else step()
    }
    mql.addEventListener?.("change", onChange)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
      mql.removeEventListener?.("change", onChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, density, opacity])

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        rounded ? "rounded-[var(--radius)]" : "",
        className,
      )}
      style={
        rounded
          ? ({
              // pass radius to CSS var for rounded mask above
              ["--radius" as any]: `${rounded}px`,
            } as React.CSSProperties)
          : undefined
      }
      aria-hidden="true"
    >
      {showGrid && (
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="[background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:24px_24px] [background-position:center]" />
        </div>
      )}
      {/* soft radial glows */}
      <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full  blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full  blur-3xl" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
