"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Server,
  Settings,
  Shield,
  FileText,
  HeadphonesIcon,
  ArrowRight,
  Zap,
  CheckCircle,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const ProcessWorkflow = () => {
  const t = useTranslations("ProcessWorkflow");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const connectorsRef = useRef<HTMLDivElement[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: t("steps.0.title"),
      description: t("steps.0.description"),
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20",
    },
    {
      number: "02",
      title: t("steps.1.title"),
      description: t("steps.1.description"),
      icon: Settings,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/20",
    },
    {
      number: "03",
      title: t("steps.2.title"),
      description: t("steps.2.description"),
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-500/30",
      glowColor: "shadow-emerald-500/20",
    },
    {
      number: "04",
      title: t("steps.3.title"),
      description: t("steps.3.description"),
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30",
      glowColor: "shadow-orange-500/20",
    },
    {
      number: "05",
      title: t("steps.4.title"),
      description: t("steps.4.description"),
      icon: HeadphonesIcon,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/30",
      glowColor: "shadow-indigo-500/20",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Put all steps stacked on top of each other
      gsap.set(stepsRef.current, {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        margin: "0 auto",
        yPercent: 100, // start pushed down
        opacity: 0,
      });

      // Stacked timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000", // controls scroll distance
          scrub: true,
          pin: true,
        },
      });

      stepsRef.current.forEach((step, i) => {
        tl.to(
          step,
          {
            yPercent: 0,
            opacity: 1,
            zIndex: i + 1,
            duration: 0.8,
            ease: "power3.out",
          },
          i
        ); // each step animates at its index position in timeline
      });
    });

    return () => ctx.revert();
  }, []);

  // Font class based on language
  const fontClass = isRTL ? "font-almarai" : "";
  const textAlignment = isRTL ? "text-right" : "text-left";

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-32 bg-[#171717] min-h-screen relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 ">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-transparent via-blue-500/5 to-transparent rounded-full animate-spin-slow"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={containerRef} className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={titleRef} className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-blue-400" />
              <span
                className={`text-blue-400 font-semibold text-lg tracking-wider uppercase ${fontClass}`}
              >
                {t("header.subtitle")}
              </span>
            </div>
            <h2
              className={`text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6 leading-tight ${fontClass}`}
            >
              {t("header.title")}
            </h2>
            <p
              className={`text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed ${fontClass}`}
            >
              {t("header.description")}
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Central timeline line */}
            <div
              className={`absolute ${
                isRTL ? "right-1/2" : "left-1/2"
              } transform ${
                isRTL ? "translate-x-1/2" : "-translate-x-1/2"
              } w-1 h-full bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full hidden lg:block`}
            ></div>

            <div className="space-y-12 lg:space-y-24">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className="relative">
                    {/* Connector for mobile */}
                    {index < steps.length - 1 && (
                      <div
                        ref={(el) => {
                          if (el) connectorsRef.current[index] = el;
                        }}
                        className={`absolute ${
                          isRTL ? "right-8" : "left-8"
                        } top-32 w-0.5 h-12 bg-gradient-to-b from-gray-600 to-transparent lg:hidden`}
                      ></div>
                    )}

                    <div
                      ref={(el) => {
                        if (el) stepsRef.current[index] = el;
                      }}
                      className={`group relative ${
                        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                      } flex flex-col lg:flex lg:items-center lg:gap-16`}
                    >
                      {/* Step Content */}
                      <div className={`flex-1 `}>
                        <div
                          className={`relative bg-blur backdrop-blur-lg p-8 border-gray-700/50 shadow-blue-500/5 border rounded-lg shadow-md ${step.glowColor} hover:shadow-3xl transition-all duration-500 group-hover:scale-105 group-hover:border`}
                        >
                          {/* Glow effect */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br bg-[#171717] rounded-2xl `}
                          ></div>

                          <div className="relative z-10">
                            <div
                              className={`flex items-center gap-4 mb-6 ${
                                isEven ? "lg:justify-end" : "lg:justify-start"
                              } ${isRTL ? "flex-row-reverse" : ""}`}
                            >
                              <div
                                className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                              >
                                <Icon className="w-8 h-8 text-white" />
                              </div>
                              <div
                                className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20 ${fontClass}`}
                              >
                                {step.number}
                              </div>
                            </div>

                            <h3
                              className={`text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300 ${fontClass} ${textAlignment}`}
                            >
                              {step.title}
                            </h3>

                            <p
                              className={`text-slate-200 text-lg leading-relaxed mb-6 ${fontClass} ${textAlignment}`}
                            >
                              {step.description}
                            </p>

                            <div
                              className={`flex items-center gap-2 text-sm font-semibold ${step.color
                                .replace("from-", "text-")
                                .replace(" to-cyan-500", "")
                                .replace(" to-pink-500", "")
                                .replace(" to-teal-500", "")
                                .replace(" to-red-500", "")
                                .replace(" to-purple-500", "")} ${
                                isEven ? "lg:justify-end" : "lg:justify-start"
                              } ${isRTL ? "flex-row-reverse" : ""}`}
                            >
                              <CheckCircle className="w-5 h-5" />
                              <span className={fontClass}>
                                {t("stepComplete", { number: step.number })} 
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Central Timeline Node */}
                      <div
                        className={`hidden lg:flex absolute ${
                          isRTL ? "right-1/2" : "left-1/2"
                        } transform ${
                          isRTL ? "translate-x-1/2" : "-translate-x-1/2"
                        } w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg z-20`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-ping opacity-20"></div>
                      </div>

                      {/* Arrow connector */}
                      {index < steps.length - 1 && (
                        <div
                          className={`hidden lg:block absolute ${
                            isRTL ? "right-1/2" : "left-1/2"
                          } transform ${
                            isRTL ? "translate-x-1/2" : "-translate-x-1/2"
                          } top-full mt-8`}
                        >
                          <ArrowRight
                            className={`w-6 h-6 text-gray-600 ${
                              isRTL ? "-rotate-90" : "rotate-90"
                            }`}
                          />
                        </div>
                      )}

                      {/* Mobile step indicator */}
                      <div
                        className={`lg:hidden absolute ${
                          isRTL ? "right-0" : "left-0"
                        } top-0 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 flex items-center justify-center`}
                      >
                        <span
                          className={`text-white font-bold text-lg ${fontClass}`}
                        >
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className={`text-white font-semibold ${fontClass}`}>
                {t("cta.text")}
              </span>
              <ArrowRight
                className={`w-5 h-5 text-blue-400 ${isRTL ? "rotate-180" : ""}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessWorkflow;
