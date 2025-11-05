"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Star, ArrowRight, Package, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import TechBackground from "@/src/components/tech-background";
import { useTranslations, useLocale } from "next-intl";
import { usePackages, useIndividualServices } from "@/src/constants/index";

gsap.registerPlugin(ScrollTrigger);

export default function PricingPage() {
  const t = useTranslations("PricingPage");

  const locale = useLocale();
  const isRTL = locale === "ar";
  const packages = usePackages();
  const individualServices = useIndividualServices();

  const heroRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [showIndividual, setShowIndividual] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated background particles
      gsap.set(".particle", { opacity: 0 });
      gsap.to(".particle", {
        opacity: 0.4,
        duration: 2,
        stagger: 0.1,
        ease: "power2.out",
      });

      gsap.to(".particle", {
        y: -30,
        x: 15,
        rotation: 360,
        duration: 10,
        ease: "none",
        repeat: -1,
        stagger: 0.3,
      });

      // Hero animations with enhanced effects
      const tl = gsap.timeline();

      tl.fromTo(
        ".pricing-hero-title",
        { opacity: 0, y: 60, rotationX: 90 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          ".pricing-hero-subtitle",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          ".pricing-toggle",
          { opacity: 0, scale: 0.8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );

      // Pricing cards animation
      gsap.fromTo(
        ".pricing-card",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotationY: 45,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Individual services animation
      gsap.fromTo(
        ".service-item",
        { opacity: 0, x: -50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-list",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Popular badge animation
      gsap.fromTo(
        ".popular-badge",
        { scale: 0, rotation: -15 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%",
          },
        }
      );

      // Floating animation for pricing cards
      gsap.to(".pricing-card", {
        y: -8,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.4,
      });
    }, [heroRef, pricingRef, particlesRef]);

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
      <section ref={heroRef} className="relative pt-24 pb-14 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h2
            className={`pricing-hero-title text-4xl md:text-7xl font-black mb-8 ${fontClass}`}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              {t("hero.title.line1")}
            </span>
            <span className="text-slate-200"> {t("hero.title.line2")}</span>
          </h2>
          <p
            className={`pricing-hero-subtitle md:text-2xl text-slate-200 max-w-4xl mx-auto mb-16 leading-relaxed ${fontClass}`}
          >
            {t("hero.subtitle.line1")}
            <span className="md:text-primrycolor-light font-semibold">
              {t("hero.subtitle.highlight")}
            </span>
          </p>

          {/* Enhanced Pricing Toggle */}
          <div
            className={`pricing-toggle flex items-center justify-center gap-6 mb-16 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <span
              className={`md:text-lg font-semibold transition-all duration-300 ${
                !showIndividual ? "text-white scale-110" : "text-gray-400"
              } ${fontClass}`}
            >
              {t("toggle.bundled")}
            </span>
            <button
              onClick={() => setShowIndividual(!showIndividual)}
              className={`relative w-14 h-6 md:w-20 md:h-10 rounded-full transition-all duration-300 shadow-lg ${
                showIndividual
                  ? "bg-gradient-to-r from-primrycolor-light to-primrycolor-dark shadow-blue-500/25"
                  : "bg-gray-700 shadow-gray-700/25"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 md:w-8 md:h-8 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                  showIndividual
                    ? isRTL
                      ? "translate-x-1"
                      : "translate-x-11"
                    : isRTL
                    ? "translate-x-11"
                    : "translate-x-1"
                }`}
              >
                {showIndividual ? (
                  <Package className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                ) : (
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primrycolor-light" />
                )}
              </div>
            </button>
            <span
              className={`text-lg font-semibold transition-all duration-300 ${
                showIndividual ? "text-white scale-110" : "text-gray-400"
              } ${fontClass}`}
            >
              {t("toggle.individual")}
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Content */}
      <section ref={pricingRef} className="py-24 px-4">
        <TechBackground
          density={0.8}
          opacity={0.65}
          color="#005b95"
          className="z-20"
        />
        <div className="max-w-7xl mx-auto">
          {!showIndividual ? (
            /* Package Pricing */
            <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`pricing-card relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 group overflow-hidden ${
                    pkg.popular
                      ? "border-primrycolor-light scale-105 shadow-2xl shadow-purple-500/10"
                      : "border-gray-800 hover:border-gray-600"
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="popular-badge absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-primrycolor-light to-primrycolor-dark text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                        <Star className="w-4 h-4" />
                        {t("packages.popularBadge")}
                      </div>
                    </div>
                  )}

                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-3xl`} />

                  {/* Animated border */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r bg-primrycolor-light opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${pkg.color} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Package Name */}
                  <h3
                    className={`text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 ${fontClass} ${textAlignment}`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-slate-300 mb-6 leading-relaxed text-lg transition-colors duration-300 ${fontClass} ${textAlignment}`}
                  >
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className={`mb-6 ${textAlignment}`}>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-black text-white">
                        ${pkg.price.toLocaleString()}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {t("packages.oneTime")}
                      </span>
                    </div>
                    {pkg.savings > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 line-through">
                          ${pkg.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-sm text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded-full">
                          {t("packages.save")} ${pkg.savings.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4
                      className={`font-bold text-white mb-3 flex items-center gap-2 ${fontClass} ${textAlignment}`}
                    >
                      <Package className="w-4 h-4 text-blue-400" />
                      {t("packages.includes")}
                    </h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={`text-sm text-slate-400 flex items-center gap-2 group-hover:text-gray-200 transition-colors duration-300 ${
                            isRTL ? "flex-row-reverse" : ""
                          }`}
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                          <span className={fontClass}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-center gap-3 text-sm text-gray-400 group-hover:text-slate-200 transition-colors duration-300 ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className={fontClass}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${fontClass} ${
                      pkg.popular
                        ? "bg-gradient-to-r from-primrycolor-light to-primrycolor-dark text-white hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105"
                        : "bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600 hover:scale-105"
                    }`}
                  >
                    {t("packages.cta")}
                  </button>

                  {/* Hover accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Enhanced Individual Services Pricing */
            <div className="max-w-5xl mx-auto">
              <div className={`text-center mb-16 ${fontClass}`}>
                <h2
                  className={`text-5xl font-bold text-white mb-4 ${fontClass}`}
                >
                  {t("individual.title.line1")}{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {t("individual.title.line2")}
                  </span>
                </h2>
                <p className={`text-xl text-slate-300 ${fontClass}`}>
                  {t("individual.subtitle")}
                </p>
              </div>

              <div className="services-list bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-primrycolor-light to-primrycolor-dark p-8">
                  <div
                    className={`flex items-center gap-3 mb-2 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                    <h3
                      className={`text-2xl font-bold text-white ${fontClass}`}
                    >
                      {t("individual.header.title")}
                    </h3>
                  </div>
                  <p className={`text-blue-100 ${fontClass}`}>
                    {t("individual.header.subtitle")}
                  </p>
                </div>

                {/* Services List */}
                <div className="divide-y divide-gray-800">
                  {individualServices.map((service, index) => (
                    <div
                      key={index}
                      className="service-item group p-8 hover:bg-gray-800/50 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div
                        className={`relative flex items-center justify-between ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`flex items-center gap-4 ${
                            isRTL ? "flex-row-reverse" : ""
                          }`}
                        >
                          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <service.icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <div className={textAlignment}>
                            <h4
                              className={`font-bold text-white text-lg group-hover:text-blue-300 transition-colors duration-300 ${fontClass}`}
                            >
                              {service.name}
                            </h4>
                            <p
                              className={`text-gray-400 text-sm group-hover:text-slate-200 transition-colors duration-300 ${fontClass}`}
                            >
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <div className={textAlignment}>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-white group-hover:text-blue-300 transition-colors duration-300">
                              $
                              {typeof service.price === "number"
                                ? service.price.toLocaleString()
                                : service.price}
                            </span>
                          </div>
                          <p
                            className={`text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 ${fontClass}`}
                          >
                            {t("individual.oneTime")}
                          </p>
                        </div>
                      </div>

                      {/* Hover accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  ))}
                </div>

                {/* Footer CTA */}
                <div className="p-8 bg-gray-800/30 backdrop-blur-sm text-center border-t border-gray-800">
                  <div
                    className={`flex items-center justify-center gap-2 mb-4 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <p className={`font-medium ${fontClass}`}>
                      {t("individual.footer.note")}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowIndividual(false)}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-primrycolor-light to-primrycolor-dark text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                  >
                    <Sparkles className="w-5 h-5" />
                    {t("individual.footer.cta")}
                    <ArrowRight
                      className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-blue-900/20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className={`text-5xl font-bold text-white mb-16 ${fontClass}`}>
            {t("valueProposition.title.line1")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t("valueProposition.title.line2")}
            </span>{" "}
            {t("valueProposition.title.line3")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3
                  className={`text-xl font-bold text-white mb-4 ${fontClass}`}
                >
                  {t(`valueProposition.items.${index}.title`)}
                </h3>
                <p className={`text-gray-400 leading-relaxed ${fontClass}`}>
                  {t(`valueProposition.items.${index}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-5xl font-bold text-center text-white mb-16 ${fontClass}`}
          >
            {t("faq.title.line1")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t("faq.title.line2")}
            </span>
          </h2>
          <div className="space-y-6">
            {[0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-primrycolor-light transition-all duration-300 group"
              >
                <h3
                  className={`text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 ${fontClass} ${textAlignment}`}
                >
                  {t(`faq.items.${index}.question`)}
                </h3>
                <p
                  className={`text-gray-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 ${fontClass} ${textAlignment}`}
                >
                  {t(`faq.items.${index}.answer`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className={`text-5xl md:text-6xl font-bold mb-8 ${fontClass}`}>
            <span className="text-white">{t("finalCta.title.line1")}</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {t("finalCta.title.line2")}
            </span>
          </h2>
          <p
            className={`text-xl text-slate-200 mb-12 leading-relaxed ${fontClass}`}
          >
            {t("finalCta.subtitle")}
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primrycolor-light to-primrycolor-dark text-white px-10 py-5 rounded-lg font-bold text-lg shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              {t("finalCta.buttons.primary")}
              <ArrowRight
                className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${
                  isRTL ? "rotate-180" : ""
                }`}
              />
            </Link>

            <Link href="https://vanhard.net/apps/appointments/pub/twbM2CzBVDzltVbt/form">
              <button className="inline-flex items-center justify-center gap-3 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-600 hover:border-blue-400 text-slate-200 hover:text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-500/10 transition-all duration-300">
                <Star className="w-5 h-5" />
                {t("finalCta.buttons.secondary")}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
