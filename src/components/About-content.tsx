"use client";

import { Shield, Users, Target, Zap, Lock, Globe } from "lucide-react";
import TechBackground from "./tech-background";
import { useTranslations, useLocale } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const locale = useLocale();
  const isRTL = locale === "ar";

  // Font class based on language
  const fontClass = isRTL ? "font-almarai" : "";
  const textAlignment = isRTL ? "text-right" : "text-left";

  return (
    <div className="min-h-screen bg-[#171717]" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={textAlignment}>
              <h1
                className={`text-5xl font-bold mb-6 leading-tight ${fontClass}`}
              >
                {t("hero.title.line1")}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primrycolor-light to-blue-400">
                  {t("hero.title.line2")}
                </span>
              </h1>
              <p
                className={`text-xl text-purple-100 mb-8 leading-relaxed ${fontClass}`}
              >
                {t("hero.description")}
              </p>
              <div
                className={`flex flex-wrap gap-4 ${
                  isRTL ? "justify-end" : "justify-start"
                }`}
              >
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className={`text-sm ${fontClass}`}>
                    {t("hero.badges.0")}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Lock className="w-5 h-5 text-blue-400" />
                  <span className={`text-sm ${fontClass}`}>
                    {t("hero.badges.1")}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform rotate-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-semibold mb-2 ${fontClass}`}>
                    {t("hero.cards.0.title")}
                  </h3>
                  <p className={`text-sm text-purple-200 ${fontClass}`}>
                    {t("hero.cards.0.description")}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform -rotate-2 mt-8">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-semibold mb-2 ${fontClass}`}>
                    {t("hero.cards.1.title")}
                  </h3>
                  <p className={`text-sm text-purple-200 ${fontClass}`}>
                    {t("hero.cards.1.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <TechBackground
          density={0.8}
          opacity={0.65}
          color="#005b95"
          className="z-20"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-30">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={textAlignment}>
              <h2
                className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primrycolor-light to-blue-400 mb-6 ${fontClass}`}
              >
                {t("mission.title.line1")}
                <br />
                {t("mission.title.line2")}
                <br />
                <span className="text-white">{t("mission.title.line3")}</span>
              </h2>
              <div
                className={`w-20 h-1 bg-blue-500 mb-4 rounded-full ${
                  isRTL ? "ml-auto" : "mr-auto"
                }`}
              ></div>

              <p
                className={`text-xl text-slate-300 mb-6 leading-relaxed ${fontClass}`}
              >
                {t("mission.description.line1")}
              </p>
              <p
                className={`text-xl text-slate-300 leading-relaxed ${fontClass}`}
              >
                {t("mission.description.line2")}
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primrycolor-dark via-primrycolor-dark to-primrycolor-light rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className={`text-3xl font-bold mb-2 ${fontClass}`}>
                      100%
                    </div>
                    <div className={`text-purple-200 ${fontClass}`}>
                      {t("mission.stats.0")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold mb-2 ${fontClass}`}>
                      24/7
                    </div>
                    <div className={`text-purple-200 ${fontClass}`}>
                      {t("mission.stats.1")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold mb-2 ${fontClass}`}>
                      {t("mission.stats.2.value")}
                    </div>
                    <div className={`text-purple-200 ${fontClass}`}>
                      {t("mission.stats.2.label")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold mb-2 ${fontClass}`}>
                      2024
                    </div>
                    <div className={`text-purple-200 ${fontClass}`}>
                      {t("mission.stats.3")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${fontClass}`}>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${fontClass}`}>
              {t("values.title.line1")}{" "}
              <span className="text-primrycolor-light">
                {t("values.title.line2")}
              </span>{" "}
              {t("values.title.line3")}
            </h2>
            <div className="w-20 h-1 mb-4 bg-blue-500 mx-auto rounded-full"></div>
            <p className={`text-xl text-purple-200 ${fontClass}`}>
              {t("values.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  {index === 0 && <Shield className="w-8 h-8 text-white" />}
                  {index === 1 && <Users className="w-8 h-8 text-white" />}
                  {index === 2 && <Lock className="w-8 h-8 text-white" />}
                  {index === 3 && <Target className="w-8 h-8 text-white" />}
                  {index === 4 && <Zap className="w-8 h-8 text-white" />}
                  {index === 5 && <Globe className="w-8 h-8 text-white" />}
                </div>
                <h3
                  className={`text-2xl font-bold mb-4 ${fontClass} ${textAlignment}`}
                >
                  {t(`values.items.${index}.title`)}
                </h3>
                <p
                  className={`text-purple-200 leading-relaxed ${fontClass} ${textAlignment}`}
                >
                  {t(`values.items.${index}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3
                className={`text-3xl font-bold mb-6 ${fontClass} ${textAlignment}`}
              >
                {t("missionVision.mission.title")}
              </h3>
              <p
                className={`text-purple-100 leading-relaxed ${fontClass} ${textAlignment}`}
              >
                {t("missionVision.mission.description")}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3
                className={`text-3xl font-bold mb-6 ${fontClass} ${textAlignment}`}
              >
                {t("missionVision.vision.title")}
              </h3>
              <p
                className={`text-purple-100 leading-relaxed ${fontClass} ${textAlignment}`}
              >
                {t("missionVision.vision.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-4xl font-bold text-slate-300 mb-6 ${fontClass}`}>
            {t("cta.title")}
          </h2>
          <p
            className={`text-xl text-slate-300 mb-10 leading-relaxed ${fontClass}`}
          >
            {t("cta.description")}
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <button className="bg-gradient-to-r from-primrycolor-dark to-primrycolor-light text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              {t("cta.buttons.0")}
            </button>
            <button className="border-2 border-primrycolor-light text-primrycolor-light px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primrycolor-light hover:text-white transition-all duration-300">
              {t("cta.buttons.1")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
