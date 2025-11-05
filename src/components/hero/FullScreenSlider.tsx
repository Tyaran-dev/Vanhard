"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";
import LightRays from "../backgrounds/LightRays";
import Threads from "../backgrounds/Threads";

export default function FullScreenSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const t = useTranslations("FullScreenSlider");

  const totalSlides = 2;

  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      if (slide) {
        gsap.set(slide, {
          opacity: index === 0 ? 1 : 0,
          scale: index === 0 ? 1 : 0.95,
          y: index === 0 ? 0 : 50,
        });
      }
    });

    if (slideRefs.current[0]) {
      gsap.fromTo(
        slideRefs.current[0].children,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;

    const currentSlideEl = slideRefs.current[currentSlide];
    const nextSlideEl = slideRefs.current[index];

    if (currentSlideEl && nextSlideEl) {
      const tl = gsap.timeline();

      tl.to(currentSlideEl.children, {
        opacity: 0,
        y: -50,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.in",
      })
        .to(currentSlideEl, { opacity: 0, scale: 0.95, duration: 0.4 }, "-=0.4")
        .set(nextSlideEl, { opacity: 1, scale: 1, y: 0 })
        .fromTo(
          nextSlideEl.children,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
        );

      thumbnailRefs.current.forEach((thumb, i) => {
        if (thumb) {
          gsap.to(thumb, {
            scale: i === index ? 1.05 : 1,
            opacity: i === index ? 1 : 0.7,
            duration: 1,
          });
        }
      });
    }

    setCurrentSlide(index);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % totalSlides);
  const prevSlide = () =>
    goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);

  return (
    <div className="relative h-screen w-full overflow-hidden ">
      {/* Backgrounds */}
      <div className="absolute inset-0">
        {/* <LightRays
          raysOrigin="top-center"
          raysColor="#005b95"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        /> */}

        {/* Slide 1 background */}
        <div
          style={{ backgroundImage: "url(/images/Hero-slider/slide1.jpg)" }}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000  ${
            currentSlide === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Slide 2 background */}
        <div
          style={{ backgroundImage: "url(/images/Hero-slider/slide-3.jpg)" }}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            currentSlide === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* Slides */}
      <div ref={sliderRef} className="relative h-full">
        {/* Slide 1 content */}
        <div
          ref={(el) => (slideRefs.current[0] = el)}
          className="absolute opacity-0 pointer-events-none inset-0 flex justify-center items-center md:items-center md:justify-start px-8 md:px-16 "
        >
          <div className=" space-y-6 text-center ">
            <h1 className="text-5xl  md:text-8xl font-bold text-white leading-tight">
              <div>{t("slide1.title.line1")}</div>
              <div className="text-white">{t("slide1.title.line2")}</div>
            </h1>
            <div className="flex items-center space-x-4 text-sm text-slate-100">
              <span>{t("slide1.tags.0")}</span>
              <div className="w-px h-4 bg-gray-500"></div>
              <span>{t("slide1.tags.1")}</span>
            </div>
            <button className="mt-8 px-8 py-4 bg-primrycolor-light rounded-lg text-white font-semibold">
              {t("slide1.button")}
            </button>
          </div>
        </div>

        {/* Slide 2 content */}
        <div
          ref={(el) => (slideRefs.current[1] = el)}
          className="absolute inset-0 opacity-0 pointer-events-none flex justify-center items-center md:items-center md:justify-start px-8 md:px-16 "
        >
          <div className=" space-y-6 text-center ">
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
              <div>{t("slide2.title.line1")}</div>
              <div className="text-white">{t("slide2.title.line2")}</div>
            </h1>
            <div className="flex items-center space-x-4 text-sm text-slate-100">
              <span>{t("slide2.tags.0")}</span>
              <div className="w-px h-4 bg-gray-500"></div>
              <span>{t("slide2.tags.1")}</span>
            </div>
            <button className="mt-8 px-8 py-4 bg-primrycolor-light rounded-lg text-white font-semibold">
              {t("slide2.button")}
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 flex gap-2">
        <div
          ref={(el) => (thumbnailRefs.current[0] = el)}
          className={`flex-1 h-16 md:h-32 bg-cover bg-center cursor-pointer`}
          style={{ backgroundImage: "url(/images/Hero-slider/slide1.jpg)" }}
          onClick={() => goToSlide(0)}
        ></div>

        <div
          ref={(el) => (thumbnailRefs.current[1] = el)}
          className={`flex-1 h-16 md:h-32 bg-cover bg-center cursor-pointer`}
          style={{ backgroundImage: "url(/images/Hero-slider/slide-3.jpg)" }}
          onClick={() => goToSlide(1)}
        ></div>
      </div>

      {/* Progress dots */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === i ? "bg-blue-400 scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
