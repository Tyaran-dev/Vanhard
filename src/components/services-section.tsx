"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { GoShieldCheck } from "react-icons/go";
import { LuUserCheck } from "react-icons/lu";
import { LuCpu } from "react-icons/lu";
import { RiMailCheckLine } from "react-icons/ri";
import { LuFileCheck2 } from "react-icons/lu";
import { LuRadar } from "react-icons/lu";
import { MdOutlineChevronRight } from "react-icons/md";

import { motion } from "framer-motion";
import TechBackground from "@/src/components/tech-background";

type Service = {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  points: string[];
};

const SERVICES: Service[] = [
  {
    title: "Managed Detection & Response",
    desc: "24×7 monitoring with human‑led triage and guided remediation.",
    icon: LuRadar,
    points: ["Noise‑reduced alerts", "Playbook response", "Weekly summaries"],
  },
  {
    title: "Identity Protection",
    desc: "Prevent account takeover with continuous identity risk scoring.",
    icon: LuUserCheck,
    points: ["MFA hygiene", "Suspicious login patterns", "Role anomalies"],
  },
  {
    title: "Endpoint Security",
    desc: "Harden devices and respond to threats across your fleet.",
    icon: LuCpu,
    points: ["Posture checks", "Isolation actions", "Agent health"],
  },
  {
    title: "Email Security",
    desc: "Catch phishing and misconfigurations before they reach users.",
    icon: RiMailCheckLine,
    points: [
      "DMARC & SPF checks",
      "Malicious link detection",
      "Awareness prompts",
    ],
  },
  {
    title: "Compliance & Reporting",
    desc: "On‑demand evidence and reports to prove value and compliance.",
    icon: LuFileCheck2,
    points: ["Policy tracking", "Audit artifacts", "Client‑ready PDFs"],
  },
  {
    title: "Managed Hardening",
    desc: "Opinionated baselines that standardize your tenants.",
    icon: GoShieldCheck,
    points: ["Secure defaults", "Drift detection", "One‑click fixes"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20">
      <TechBackground
        density={0.85}
        opacity={0.5}
        color="rgba(139,92,246,0.6)"
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services that drive outcomes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Bundle the platform with proven services to deliver measurable
            security improvements.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl bg-gradient-to-b from-purple-100/40 to-transparent p-[1px]"
              >
                <Card className="group h-full rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-purple-100 text-purple-700 transition-transform group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </span>
                      <CardTitle className="text-lg">{s.title}</CardTitle>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {s.desc}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span
                            className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-600"
                            aria-hidden
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="mt-4 px-0">
                      Learn more
                      <MdOutlineChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button size="lg">See full services catalog</Button>
        </div>
      </div>
    </section>
  );
}
