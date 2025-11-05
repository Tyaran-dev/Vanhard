"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  Lock,
  Zap,
  Globe,
  Server,
  Users,
  Mail,
  Monitor,
  Key,
  HardDrive,
} from "lucide-react";
import TechBackground from "@/src/components/tech-background";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function VanhardSection() {
  const t = useTranslations("VanhardSection");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const services = [
    {
      icon: HardDrive,
      title: t("services.0.title"),
      description: t("services.0.description"),
    },
    {
      icon: Users,
      title: t("services.1.title"),
      description: t("services.1.description"),
    },
    {
      icon: Globe,
      title: t("services.2.title"),
      description: t("services.2.description"),
    },
    {
      icon: Shield,
      title: t("services.3.title"),
      description: t("services.3.description"),
    },
    {
      icon: Mail,
      title: t("services.4.title"),
      description: t("services.4.description"),
    },
    {
      icon: Monitor,
      title: t("services.5.title"),
      description: t("services.5.description"),
    },
  ];

  const coreValues = [
    { icon: Lock, title: t("coreValues.0"), color: "text-blue-600" },
    { icon: Key, title: t("coreValues.1"), color: "text-green-600" },
    { icon: Zap, title: t("coreValues.2"), color: "text-purple-600" },
    { icon: Server, title: t("coreValues.3"), color: "text-orange-600" },
    { icon: Globe, title: t("coreValues.4"), color: "text-teal-600" },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkMobile, 100);
    };

    window.addEventListener("resize", handleResize);

    const ctx = gsap.context(() => {
      if (isMobile) {
        gsap.set(".value-card, .service-card, .floating-icon", {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          x: 0,
        });

        const fadeElements = [
          ...(valuesRef.current?.querySelectorAll(".value-card") || []),
          ...(servicesRef.current?.querySelectorAll(".service-card") || []),
          ...(missionRef.current?.children || []),
        ];

        gsap.fromTo(
          fadeElements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      } else {
        // Hero animation
        gsap.fromTo(
          heroRef.current?.children || [],
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          }
        );

        // Core values animation
        gsap.fromTo(
          valuesRef.current?.querySelectorAll(".value-card") || [],
          {
            opacity: 0,
            scale: 0.8,
            y: 30,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Services animation
        gsap.fromTo(
          servicesRef.current?.querySelectorAll(".service-card") || [],
          {
            opacity: 0,
            x: -50,
            rotationY: -15,
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Mission section animation
        gsap.fromTo(
          missionRef.current?.children || [],
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: missionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Floating animation for icons (desktop only)
        gsap.to(".floating-icon", {
          y: -5,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.2,
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [isMobile]);

  const techBackgroundProps = isMobile
    ? { density: 0.2, opacity: 0.2 }
    : { density: 0.8, opacity: 0.65 };

  // Font class based on language
  const fontClass = isRTL ? "font-almarai" : "font-antonio";
  const textAlignment = isRTL ? "text-right" : "text-left";

  return (
    <div className="bg-[#171717]" dir={isRTL ? "rtl" : "ltr"}>
      {!isMobile && (
        <TechBackground
          {...techBackgroundProps}
          color="#005b95"
          className="z-20"
        />
      )}

      <section
        ref={sectionRef}
        className="min-h-screen relative bg-black/20 pb-12 border-t-4 border-primrycolor-light"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div ref={heroRef} className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 m-4 bg-primrycolor-light rounded-lg floating-icon shadow-2xl shadow-blue-500/25">
              <Server className="w-10 h-10 text-white" />
            </div>
            <h2
              className={`text-5xl md:text-6xl font-bold bg-primrycolor-light bg-clip-text text-transparent mb-6 ${fontClass}`}
            >
              {t("companyName")}
            </h2>
            <p
              className={`md:text-[22px] text-slate-200 max-w-4xl mx-auto leading-relaxed mb-8 ${fontClass}`}
            >
              {t("heroDescription")}
            </p>
            <div className="inline-block font-bold text-lg px-6 py-3 bg-primrycolor-light backdrop-blur-sm rounded-lg shadow-lg">
              <span
                className={`text-sm font-medium text-slate-200 ${fontClass}`}
              >
                {t("established")}
              </span>
            </div>
          </div>

          {/* Core Values */}
          <div ref={valuesRef} className="mb-20">
            <h2
              className={`text-3xl md:text-7xl font-bold text-center text-white mb-12 ${fontClass}`}
            >
              {t("coreValuesTitle.line1")}{" "}
              <span className="text-primrycolor-light text-6xl">
                {t("coreValuesTitle.line2")}
              </span>{" "}
              {t("coreValuesTitle.line3")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="value-card group">
                    <div className="bg-primrycolor-light/20 h-44 bg-blur backdrop-blur-lg rounded-lg p-6 text-center hover:bg-gray-800/90 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 border border-gray-700/50">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 text-primrycolor-light bg-slate-200 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3
                        className={`font-semibold text-lg text-white leading-tight ${fontClass}`}
                      >
                        {value.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mission & Vision */}
          <div ref={missionRef} className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-blur backdrop-blur-lg rounded-lg p-8 border-2 border-gray-700/50 shadow-xl shadow-blue-500/5">
              <div
                className={`flex items-center mb-6 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 bg-primrycolor-light/20 bg-blur backdrop-blur-lg rounded-xl flex items-center justify-center ${
                    isRTL ? "ml-4" : "mr-4"
                  }`}
                >
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3
                  className={`text-2xl font-bold text-white ${fontClass} ${textAlignment}`}
                >
                  {t("mission.title")}
                </h3>
              </div>
              <p
                className={`text-slate-200 leading-relaxed text-base md:text-lg ${fontClass} ${textAlignment}`}
              >
                {t("mission.description")}
              </p>
            </div>

            <div className="bg-blur backdrop-blur-lg rounded-lg p-8 border-2 border-gray-700/50 shadow-xl shadow-blue-500/5">
              <div
                className={`flex items-center mb-6 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 bg-primrycolor-light/20 bg-blur backdrop-blur-lg rounded-xl flex items-center justify-center ${
                    isRTL ? "ml-4" : "mr-4"
                  }`}
                >
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3
                  className={`text-2xl font-bold text-white ${fontClass} ${textAlignment}`}
                >
                  {t("vision.title")}
                </h3>
              </div>
              <p
                className={`text-slate-200 leading-relaxed text-lg ${fontClass} ${textAlignment}`}
              >
                {t("vision.description")}
              </p>
            </div>
          </div>

          {/* Service Catalog */}
          <div ref={servicesRef}>
            <h2
              className={`text-3xl md:text-7xl font-bold text-center text-white mb-4 ${fontClass}`}
            >
              {t("servicesTitle")}
            </h2>
            <div className="w-20 h-1 my-3 bg-blue-500 mx-auto rounded-full"></div>

            <p
              className={`text-center text-lg text-gray-400 mb-12 mx-auto ${fontClass}`}
            >
              {t("servicesDescription")}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="service-card group">
                    <div className="border-2 backdrop-blur-sm rounded-2xl shadow-md shadow-blue-500/5 p-8 h-full hover:bg-gray-800/90 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 border-gray-700/50 relative overflow-hidden">
                      <div
                        className={`absolute top-0 ${
                          isRTL
                            ? "left-0 -translate-x-16"
                            : "right-0 translate-x-16"
                        } w-32 h-32 bg-gradient-to-br from-primrycolor-light/20 to-primrycolor-dark/20 rounded-full -translate-y-16 group-hover:scale-150 transition-transform duration-700`}
                      ></div>

                      <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primrycolor-light/20 bg-blur backdrop-blur-lg rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        <h3
                          className={`text-2xl font-bold text-gray-200 mb-4 group-hover:text-slate-200 transition-colors duration-300 ${fontClass} ${textAlignment}`}
                        >
                          {service.title}
                        </h3>

                        <p
                          className={`text-gray-200 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 ${fontClass} ${textAlignment}`}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-primrycolor-dark to-primrycolor-light"></div>
              <div className="relative z-10">
                <h3 className={`text-4xl font-bold mb-4 ${fontClass}`}>
                  {t("cta.title")}
                </h3>
                <p
                  className={`text-xl text-blue-100 mb-8 mx-auto ${fontClass}`}
                >
                  {t("cta.description")}
                </p>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  {t("cta.button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
