"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const t = useTranslations("ProcessSection");

  const slides = [
    {
      id: 1,
      step: t("step1.step"),
      title: t("step1.title"),
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
      bgColor: "#171717",
    },
    {
      id: 2,
      step: t("step2.step"),
      title: t("step2.title"),
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      bgColor: "#111",
    },
    {
      id: 3,
      step: t("step3.step"),
      title: t("step3.title"),
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      bgColor: "red",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the carousel section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalSlides = slides.length;
          const slideIndex = Math.min(
            Math.floor(progress * totalSlides),
            totalSlides - 1
          );
          const slideProgress = (progress * totalSlides) % 1;

          // Update cards based on scroll progress
          cardsRef.current.forEach((card, index) => {
            if (!card) return;

            let scale = 0.8;
            let opacity = 0.3;
            let x = 0;
            let y = 0;
            let z = 1;
            let rotateY = 0;

            if (index < slideIndex) {
              // Previous cards - move to left and stack
              x = -400 - index * 50;
              y = index * 20;
              scale = 0.7 - index * 0.1;
              opacity = 0.2;
              rotateY = -15;
              z = 1;
            } else if (index === slideIndex) {
              // Current active card - center stage
              scale = 1;
              opacity = 1;
              x = slideProgress * -200;
              z = 10;
              rotateY = slideProgress * -10;
            } else if (index === slideIndex + 1) {
              // Next card coming in
              scale = 0.85 + slideProgress * 0.15;
              opacity = 0.4 + slideProgress * 0.6;
              x = 300 - slideProgress * 300;
              rotateY = 15 - slideProgress * 15;
              z = 5;
            } else {
              // Future cards - stack to the right
              x = 400 + (index - slideIndex - 1) * 50;
              y = (index - slideIndex - 1) * 20;
              scale = 0.7;
              opacity = 0.2;
              rotateY = 15;
              z = 1;
            }

            gsap.set(card, {
              scale,
              opacity,
              x: `${x}px`,
              y: `${y}px`,
              zIndex: z,
              rotationY: rotateY,
              transformOrigin: "center center",
            });
          });

          // Update background
          if (backgroundRef.current) {
            const currentBg = slides[slideIndex].bgColor;
            backgroundRef.current.className = `absolute inset-0  ${currentBg} transition-all duration-1000 bg-dots`;
          }
        },
      });

      // Initial setup - all cards stacked to the right
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        if (index === 0) {
          gsap.set(card, {
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0,
            zIndex: 10,
            rotationY: 0,
          });
        } else {
          gsap.set(card, {
            scale: 0.7,
            opacity: 0.2,
            x: 400 + (index - 1) * 50,
            y: (index - 1) * 20,
            zIndex: 1,
            rotationY: 15,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Pinned Carousel Section */}
      <section ref={sectionRef} className="relative h-screen overflow-hidden ">
        <div className="flex flex-col text-center m-4 md:m-24">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            {t("mainHeading.line1")}{" "}
            <span className="text-primrycolor-light">
              {t("mainHeading.line2")}
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xl md:text-3xl font-semibold md:mb-8 text-primary-foreground/90">
            {t("subheading")}
          </h2>
          <div className="w-20 h-1 my-3 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        {/* Dynamic Background */}
        <div ref={backgroundRef} className="absolute inset-0 bg-[#171717]" />

        {/* Cards Container */}
        <div
          ref={containerRef}
          className="relative h-full  flex items-start justify-center"
          style={{ perspective: "1200px" }}
        >
          <div className="relative w-full max-w-7xl mx-auto px-8">
            <div className="relative h-[600px] flex items-center justify-center">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="absolute md:w-[600px] h-[500px] rounded-2xl overflow-hidden shadow-2xl transform-gpu cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Card Content */}
                  <div className="relative h-full bg-gray-800 rounded-2xl overflow-hidden border border-gray-600/30">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-8">
                      {/* Step Badge */}
                      <div className="self-start">
                        <span className="inline-block bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                          {slide.step}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="text-left">
                        <h2 className="text-4xl font-bold tracking-wide leading-tight">
                          {slide.title}
                        </h2>
                      </div>

                      {/* Navigation Arrows */}
                      <div className="flex justify-between items-end">
                        <button className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all duration-300 group border border-white/20">
                          <svg
                            className="w-5 h-5 group-hover:scale-110 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>

                        <button className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all duration-300 group border border-white/20">
                          <svg
                            className="w-5 h-5 group-hover:scale-110 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-white/40 transition-all duration-500 hover:bg-white/70 cursor-pointer"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
