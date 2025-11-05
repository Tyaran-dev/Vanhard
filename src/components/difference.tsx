"use client";

import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import TechBackground from "@/src/components/tech-background";

const items = [
  {
    key: "controls",
    label: "Security Controls",
    title: "Never‑be‑still Security Controls",
    text: "Continuous monitoring and enforcement across identities, devices, and SaaS to keep clients compliant and secure.",
  },
  {
    key: "identity",
    label: "Identity‑Centric",
    title: "Identity‑Centric Unified Platform",
    text: "Correlate human risk, MFA hygiene, and access anomalies to stop account takeovers.",
  },
  {
    key: "mdr",
    label: "Human‑led MDR",
    title: "AI Powered, Human‑led MDR",
    text: "24×7 eyes on glass with contextual triage so you only see what matters.",
  },
  {
    key: "automation",
    label: "Automation",
    title: "Documented Automation",
    text: "Opinionated runbooks to standardize response across tenants and technicians.",
  },
  {
    key: "threat",
    label: "Threat Hunting",
    title: "Expert Threat Hunting",
    text: "Proactive hunts uncover hidden risks using behavior analytics and cross‑client signal.",
  },
];

export default function Difference() {
  return (
    <section className="relative py-20">
      <TechBackground
        density={0.8}
        opacity={0.45}
        color="rgba(99,102,241,0.6)"
      />

      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-wider text-purple-600">
            The Guardz Difference
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            A Cybersecurity Platform That Connects the Dots
          </h2>

          <Tabs defaultValue={items[0].key} className="mt-6">
            <TabsList className="flex w-full flex-wrap gap-2 bg-transparent p-0">
              {items.map((i) => (
                <TabsTrigger
                  key={i.key}
                  value={i.key}
                  className="rounded-full border bg-white px-4 py-2 text-sm data-[state=active]:border-purple-600 data-[state=active]:bg-purple-50"
                >
                  {i.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              {items.map((i) => (
                <TabsContent key={i.key} value={i.key} className="mt-6">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>{i.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="max-w-prose text-muted-foreground">
                          {i.text}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Unified Alert View</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/dark-ui-alerts-table.png"
                width={700}
                height={420}
                alt="Unified alerts screenshot"
                className="h-auto w-full rounded-lg border object-cover"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
