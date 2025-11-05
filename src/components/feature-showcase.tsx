"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { ShieldCheck, Search, TrendingUp } from 'lucide-react'
import { motion } from "framer-motion"
import TechBackground from "@/src/components/tech-background"

const bullets = [
  {
    icon: ShieldCheck,
    title: "Evolving Cyber Threats",
    text: "Harden clients with continuous controls and instant posture insights.",
  },
  {
    icon: Search,
    title: "Incident Detection",
    text: "Unified alerts reduce noise with context to accelerate investigations.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    text: "Package security as a service with repeatable, profitable outcomes.",
  },
]

export default function FeatureShowcase() {
  return (
    <section className="relative py-16">
      <TechBackground density={0.9} opacity={0.5} color="rgba(139,92,246,0.6)" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-2 md:px-6">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl">Built To Solve Real‑World MSP Challenges</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-3">
              {bullets.map((b, i) => (
                <motion.div
                  key={i}
                  className="rounded-lg border bg-muted/30 p-4"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <b.icon className="mb-3 h-5 w-5 text-purple-600" aria-hidden="true" />
                  <h3 className="mb-1 font-medium">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.text}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-white/60 p-3 shadow-lg">
            <Image
              src="/neon-cyber-coder.png"
              width={700}
              height={420}
              alt="Analyst working on laptop"
              className="h-auto w-full rounded-xl border object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
