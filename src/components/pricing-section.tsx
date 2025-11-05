"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Switch } from "@/src/components/ui/switch";
import { Label } from "@/src/components/ui/label";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";
import { FiZap } from "react-icons/fi";
import { LuCrown } from "react-icons/lu";

import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
import TechBackground from "@/src/components/tech-background";

type Plan = {
  name: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  cta: string;
  popular?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    tagline: "Secure the basics for smaller tenants",
    priceMonthly: 29,
    priceYearly: 24,
    features: [
      "Unified dashboard",
      "Email security checks",
      "Basic alerting",
      "5 runbook automations",
      "Community support",
    ],
    cta: "Start free",
    icon: GoShieldCheck,
  },
  {
    name: "Pro",
    tagline: "Most MSPs start here",
    priceMonthly: 79,
    priceYearly: 63,
    features: [
      "All Starter features",
      "Identity risk scoring",
      "Noise‑reduced detections",
      "Unlimited automations",
      "SLA support",
    ],
    cta: "Get Pro",
    popular: true,
    icon: FiZap,
  },
  {
    name: "Enterprise",
    tagline: "Advanced scale and controls",
    priceMonthly: 149,
    priceYearly: 119,
    features: [
      "All Pro features",
      "Multi‑tenant reporting",
      "Custom playbooks",
      "SSO and SCIM",
      "Dedicated success",
    ],
    cta: "Talk to sales",
    icon: LuCrown,
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-20">
      <TechBackground
        density={0.75}
        opacity={0.45}
        color="rgba(99,102,241,0.6)"
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-muted-foreground">
            Choose a plan that fits your clients today and scales as you grow.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border bg-white/60 px-4 py-2 backdrop-blur">
            <span className={cn("text-sm", !yearly && "font-semibold")}>
              Monthly
            </span>
            <Switch id="billing" checked={yearly} onCheckedChange={setYearly} />
            <div className="flex items-center gap-2">
              <Label
                htmlFor="billing"
                className={cn(
                  "cursor-pointer text-sm",
                  yearly && "font-semibold"
                )}
              >
                Yearly
              </Label>
              <Badge
                variant="secondary"
                className="rounded-full bg-purple-100 text-purple-700"
              >
                Save up to 20%
              </Badge>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, idx) => {
            const Icon = plan.icon ?? GoShieldCheck;
            const price = yearly ? plan.priceYearly : plan.priceMonthly;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <Card
                  className={cn(
                    "relative overflow-hidden border",
                    plan.popular &&
                      "border-purple-500/50 shadow-lg shadow-purple-500/10"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute right-3 top-3">
                      <Badge className="rounded-full bg-purple-600 text-white">
                        Most popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-purple-100 text-purple-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {plan.tagline}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold tracking-tight">
                        ${price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        /tech/mo
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {yearly ? "Billed annually" : "Billed monthly"}
                    </p>

                    <ul className="mt-6 space-y-3 text-sm">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <GoShieldCheck className="mt-0.5 h-4 w-4 text-purple-600" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="mt-6 w-full"> {plan.cta} </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Prices shown are estimates. Final pricing may vary by region and
          usage.
        </p>
      </div>
    </section>
  );
}
