"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  Lock,
  ArrowRight,
  CheckCircle,
  Server,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";
import Link from "next/link";
import TechBackground from "@/src/components/tech-background";
import { useServices } from "@/src/constants";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const services = useServices();
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated background particles
      gsap.set(".particle", { opacity: 0 });
      gsap.to(".particle", {
        opacity: 0.6,
        duration: 2,
        stagger: 0.1,
        ease: "power2.out",
      });

      gsap.to(".particle", {
        y: -20,
        x: 10,
        rotation: 360,
        duration: 8,
        ease: "none",
        repeat: -1,
        stagger: 0.5,
      });

      // Hero animations with enhanced effects
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 60, rotationX: 90 },
          { opacity: 1, y: 0, rotationX: 0, duration: 1.2, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.6"
        );

      // Services cards with staggered reveal
      gsap.fromTo(
        ".service-card",
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
          rotationY: 45,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating animation for service cards
      gsap.to(".service-card", {
        y: -8,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

      // Benefits section animation
      gsap.fromTo(
        ".benefit-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".benefits-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // CTA section animation
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, [heroRef, servicesRef, particlesRef]);

    return () => ctx.revert();
  }, []);

  // Font class based on language
  const fontClass = isRTL ? "font-almarai" : "";
  const textAlignment = isRTL ? "text-right" : "text-left";

  return (
    <div
      className="min-h-screen bg-[#171717] text-white overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 px-4 bg-black/20">
        <div className="relative max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className={`text-sm font-medium text-blue-300 ${fontClass}`}>
              {t("hero.badge")}
            </span>
          </div>

          {/* Title */}
          <h2
            className={`hero-title text-5xl md:text-6xl font-black mb-8 ${fontClass}`}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              {t("hero.title")}
            </span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>

          {/* Subtitle */}
          <p
            className={`hero-subtitle text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto mb-12 leading-relaxed ${fontClass}`}
          >
            {t("hero.subtitle.line1")}
            <span className="text-primrycolor-light font-semibold">
              {t("hero.subtitle.highlight")}
            </span>{" "}
            {t("hero.subtitle.line2")}
          </p>

          {/* CTA */}
          <div
            className={`hero-cta flex flex-col sm:flex-row gap-4 justify-center ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-3 bg-gradient-to-br from-primrycolor-light via-primrycolor-light to-primrycolor-dark text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
            >
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              {t("hero.cta.primary")}
              <ArrowRight
                className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${
                  isRTL ? "rotate-180" : ""
                }`}
              />
            </Link>
            <Link href="https://vanhard.net/apps/appointments/pub/twbM2CzBVDzltVbt/form">
              <button className="inline-flex items-center gap-3 border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300">
                <Star className="w-5 h-5" />
                {t("hero.cta.secondary")}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 px-4 bg-[#171717]">
        <TechBackground
          density={0.8}
          opacity={0.65}
          color="#005b95"
          className="z-20"
        />
        <div className="max-w-7xl mx-auto">
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-500 overflow-hidden"
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Animated border */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                {/* Price Badge */}
                <div
                  className={`absolute top-6 ${
                    isRTL ? "left-6" : "right-6"
                  } z-10`}
                >
                  <span className="bg-gray-800/80 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-full text-sm font-bold border border-gray-700">
                    {service.price}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 leading-tight ${fontClass} ${textAlignment}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-slate-300 mb-6 leading-relaxed text-sm md:text-[16px] tracking-wide group-hover:text-slate-200 transition-colors duration-300 ${fontClass} ${textAlignment}`}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-center gap-3 text-sm md:text-base text-gray-400 group-hover:text-slate-200 transition-colors duration-300 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className={fontClass}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="benefits-section py-24 px-4 relative">
        <div className="absolute inset-0 bg-[#171717]" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className={`text-5xl font-bold text-white mb-16 ${fontClass}`}>
            {t("benefits.title.line1")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t("benefits.title.line2")}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="benefit-card bg-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold text-white mb-4 ${fontClass}`}>
                {t("benefits.items.0.title")}
              </h3>
              <p className={`text-gray-400 leading-relaxed ${fontClass}`}>
                {t("benefits.items.0.description")}
              </p>
            </div>
            <div className="benefit-card bg-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold text-white mb-4 ${fontClass}`}>
                {t("benefits.items.1.title")}
              </h3>
              <p className={`text-gray-400 leading-relaxed ${fontClass}`}>
                {t("benefits.items.1.description")}
              </p>
            </div>
            <div className="benefit-card bg-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold text-white mb-4 ${fontClass}`}>
                {t("benefits.items.2.title")}
              </h3>
              <p className={`text-gray-400 leading-relaxed ${fontClass}`}>
                {t("benefits.items.2.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
