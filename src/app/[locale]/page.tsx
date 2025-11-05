"use client";
import { useState } from "react";
import Hero from "@/src/components/hero";
import TrustedBy from "@/src/components/trusted-by";
import FeatureShowcase from "@/src/components/feature-showcase";
import DifferenceAccordion from "@/src/components/difference-accordion";
import ExplorePlatform from "@/src/components/explore-platform";
import Reviews from "@/src/components/reviews";
import CtaBanner from "@/src/components/cta-banner";
import Testimonials from "@/src/components/testimonials";
import PricingSection from "@/src/components/pricing-section";
import ServicesSection from "@/src/components/services-section";
import FullScreenSlider from "../../components/hero/FullScreenSlider";
import LoadingScreen from "../../components/feedback/Loading";
import PinnedSlider from "../../components/hero/PinnedSlider";
import ControlFreedomSection from "../../components/hero/ControlFreedomSection";
import { useTranslations } from "next-intl";
import ProcessWorkflow from "@/src/components/hero/ProcessWorkflow";
import WhatSetsUsApart from "@/src/components/hero/WhatSetsUsApart";
import LogoLoop from "@/src/components/Logoloop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import LoadingIntro from "@/src/components/feedback/LoadingIntro";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {/* Content (rendered immediately but hidden while loading) */}
      <div className="transition-opacity duration-500 ">
        <FullScreenSlider />
        <PinnedSlider />
        <ControlFreedomSection />
        <ExplorePlatform />
        <ProcessWorkflow />
        {/* other content */}
      </div>

      {/* Loader overlay */}
      {isLoading && <LoadingIntro onComplete={() => setIsLoading(false)} />}
    </div>
  );
}
