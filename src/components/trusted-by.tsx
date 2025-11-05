"use client"

import Image from "next/image"
import Slider from "@/src/components/slider"

const logos = [
  { name: "Sonic One", src: "/abstract-geometric-shapes.png" },
  { name: "SecureOps", src: "/abstract-geometric-shapes.png" },
  { name: "VectorNet", src: "/abstract-geometric-shapes.png" },
  { name: "Priviguard", src: "/abstract-geometric-shapes.png" },
  { name: "Climb", src: "/abstract-geometric-shapes.png" },
  { name: "NX Networks", src: "/abstract-geometric-shapes.png" },
  { name: "Aegis", src: "/abstract-geometric-shapes.png" },
  { name: "SkyLayer", src: "/abstract-geometric-shapes.png" },
  // duplicate a few for smoother looping feel
  { name: "Sonic One", src: "/abstract-geometric-shapes.png" },
  { name: "SecureOps", src: "/abstract-geometric-shapes.png" },
]

export default function TrustedBy() {
  return (
    <section className="py-10 bg-[#171717]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by innovative MSPs
        </p>

        <Slider ariaLabel="Trusted by logos" autoplay interval={2200} scrollBy={220} className="mx-auto max-w-6xl">
          {logos.map((l, i) => (
            <div
              key={`${l.name}-${i}`}
              className="snap-start"
              style={{ flex: "0 0 180px" }}
              aria-label={l.name}
            >
              <div className="flex h-16 items-center justify-center rounded-lg border bg-white/70 px-4 grayscale opacity-80">
                <Image
                  src={l.src || "/placeholder.svg"}
                  alt={`${l.name} logo`}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
