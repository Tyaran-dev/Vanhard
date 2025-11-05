"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { FaChevronRight } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbUsersMinus } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { LuCircleGauge } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { LuRadar } from "react-icons/lu";
import TechBackground from "@/src/components/tech-background";
import Lottie from "lottie-react";
import timeline from "@/public/animations/timeline.json";
import database from "@/public/animations/database.json";
import earthandConnections from "@/public/animations/Earth and Connections.json";
import wifiRouterAnimation from "@/public/animations/Wifi Router Animation.json";

type Item = {
  id: string;
  label: string;
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  previewSrc?: string; // for images
  previewAnimation?: object; // for Lottie JSON
  previewAlt: string;
};

const items: Item[] = [
  {
    id: "controls",
    label: "Natively‑Built Security Controls",
    title: "Natively‑Built Security Controls",
    desc: "Continuous posture checks and enforcement across identities, endpoints, email, and SaaS. Keep tenants compliant and hardened by default.",
    icon: IoShieldCheckmarkOutline,
    previewAnimation: timeline,
    previewAlt: "Security controls pipeline",
  },
  {
    id: "identity",
    label: "Identity‑Centric Unified Platform",
    title: "Identity‑Centric Unified Platform",
    desc: "Surface human risk and MFA hygiene issues, correlate suspicious sign‑ins, and stop account takeover with identity‑first telemetry.",
    icon: TbUsersMinus,
    previewAnimation: database,
    previewAlt: "Identity centric dashboard",
  },
  {
    id: "mdr",
    label: "AI‑Powered, Human‑Led MDR",
    title: "AI‑Powered, Human‑Led MDR",
    desc: "24×7 monitoring with contextual triage. AI reduces noise and human analysts validate critical events so you focus on what matters.",
    icon: FaRobot,
    previewSrc: "/animations/hero.json",
    previewAnimation: earthandConnections,
    previewAlt: "MDR unified alerts",
  },
  {
    id: "efficiency",
    label: "Operational Efficiency",
    title: "Operational Efficiency",
    desc: "Opinionated workflows and runbooks standardize response, shrink MTTR, and make new technicians productive quickly.",
    icon: LuCircleGauge,
    previewSrc: "/animations/hero.json",
    previewAnimation: wifiRouterAnimation,
    previewAlt: "Operations and workflows preview",
  },
  {
    id: "built-for-msps",
    label: "Built for MSPs",
    title: "Built for MSPs",
    desc: "Multi‑tenant reporting, policy baselines, and packaging to productize security across every client consistently.",
    icon: LuWrench,
    previewSrc: "/animations/hero.json",
    previewAlt: "MSP multi‑tenant view",
  },
  {
    id: "threat-hunting",
    label: "Expert Threat Hunting",
    title: "Expert Threat Hunting",
    desc: "Proactive hunts across cross‑client signals and behaviors uncover stealthy threats before they turn into incidents.",
    icon: LuRadar,
    previewSrc: "/animations/hero.json",
    previewAlt: "Threat hunting visualization",
  },
];

export default function DifferenceAccordion() {
  const [active, setActive] = useState<string>(items[2].id); // default open like the screenshot focus

  const current = items.find((i) => i.id === active) ?? items[0];
  const CurrentIcon = current.icon;

  return (
    <section className="relative py-16">
      {/* Tech themed animated background */}
      <TechBackground density={0.85} opacity={0.45} color="#005b95" />

      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 md:grid-cols-2 md:px-6">
        {/* Left: Heading + Accordion list */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-[#005b95]">
            The Guardz Difference
          </p>
          <h2 className="mt-1 !text-4xl text-slate-200 font-bold sm:text-3xl">
            A Cybersecurity Platform
            <br /> That Connects the Dots
          </h2>

          <div className="mt-2 max-w-prose text-lg text-muted-foreground text-slate-300">
            A unified cybersecurity platform provides one perimeter, working
            together in one place to eliminate vendor sprawl. Unlike platforms
            that connect 3rd‑party tools, a truly unified platform has native
            controls, normalized data, and a single taxonomy.
          </div>

          <Accordion
            type="single"
            collapsible
            value={active}
            onValueChange={(v) => setActive(v)}
            className="mt-6 space-y-3"
          >
            {items.map((item) => {
              const Icon = item.icon;
              const isOpen = active === item.id;
              return (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-none"
                >
                  <AccordionTrigger className="group flex w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 py-2.5 text-left text-sm hover:no-underline data-[state=open]:ring-1 data-[state=open]:ring-purple-500/30">
                    <span className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-purple-100 text-purple-700">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {item.label}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-0">
                    <div className="mt-2 rounded-xl border bg-white p-4">
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                      <div className="mt-3">
                        <Button variant="link" className="px-0 text-purple-700">
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Right: Preview panel that changes with selection */}
        <div className="relative">
          <Card className="sticky top-24 overflow-hidden">
            <CardHeader className="flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-purple-100 text-purple-700">
                  <CurrentIcon className="h-5 w-5" />
                </span>
                <CardTitle className="text-xl text-slate-200">{current.title}</CardTitle>
              </div>
              <span className="text-md text-slate-200 text-muted-foreground">
                Live preview
              </span>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-hidden rounded-xl border ">
                <Lottie
                  animationData={current.previewAnimation}
                  loop={true}
                  className="w-full h-[420px] "
                />
                {/* <Image
                  src={current.previewSrc || "/placeholder.svg"}
                  alt={current.previewAlt}
                  width={700}
                  height={420}
                  className="h-auto w-full object-cover opacity-95"
                /> */}
                {/* top gradient tint */}
                {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-purple-500/20 to-transparent" /> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
