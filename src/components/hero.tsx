"use client";

import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import TechBackground from "@/src/components/tech-background";
import { useParallaxTilt } from "@/src/hooks/use-parallax-tilt";


export default function Hero() {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useParallaxTilt(8);

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex">
      {/* {" "}
      <TechBackground
        density={1.1}
        opacity={0.6}
        color="rgba(99,102,241,0.7)"
      /> */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-12 md:grid-cols-2 md:gap-8 md:px-6 md:pb-16 md:pt-16">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#005b95]">
            For MSPs
          </p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl text-slate-200">
            Unified Cybersecurity Platform
            <br />
            That Puts MSPs in Control
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            One console to detect, protect, and respond across your clients.
            Built for speed, visibility, and growth.
          </p>

          <motion.div
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Button size="lg">Get started</Button>
            <Button size="lg" variant="outline">
              Book a demo
            </Button>
          </motion.div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-purple-500 text-purple-500" />
              <Star className="h-4 w-4 fill-purple-500 text-purple-500" />
              <Star className="h-4 w-4 fill-purple-500 text-purple-500" />
              <Star className="h-4 w-4 fill-purple-500 text-purple-500" />
              <Star className="h-4 w-4 text-purple-500" />
            </div>
            <span>4.0 on G2 • Loved by MSPs</span>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white/40 to-white/10 p-3 shadow-lg backdrop-blur"
            style={{ rotateX, rotateY }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
   
            {/* <Image
              src="/cybersecurity-pipeline.png"
              width={800}
              height={480}
              alt="Unified pipeline visualization"
              className="h-auto w-full rounded-xl border object-cover"
              priority
            /> */}
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-purple-500/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
