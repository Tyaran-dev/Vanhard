"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface LoadingIntroProps {
  onComplete?: () => void;
}

export default function LoadingIntro({ onComplete }: LoadingIntroProps) {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);
  const loadingTextRef = useRef<HTMLSpanElement>(null);
  const bottomLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    // Initial setup - hide everything
    gsap.set([logoRef.current, progressRef.current, bottomLogoRef.current], {
      opacity: 0,
      y: 30,
    });

    gsap.set(progressBarRef.current, {
      width: "0%",
    });

    // Animation sequence
    tl
      // Fade in container
      .to(containerRef.current, {
        opacity: 1,
        duration: 0.5,
      })
      // Animate logo in
      .to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
      // Animate progress section in
      .to(
        progressRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      // Animate bottom logo in
      .to(
        bottomLogoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // Progress bar animation
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress > 100) progress = 100;

      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.3,
        ease: "power2.out",
      });

      if (percentageRef.current) {
        gsap.to(percentageRef.current, {
          textContent: `${Math.floor(progress)}%`,
          duration: 0.3,
          snap: { textContent: 1 },
        });
      }

      if (progress >= 100) {
        clearInterval(progressInterval);

        // Exit animation after reaching 100%
        setTimeout(() => {
          const exitTl = gsap.timeline({
            onComplete: () => {
              setIsVisible(false);
              onComplete?.();
            },
          });

          exitTl
            .to([logoRef.current, progressRef.current], {
              opacity: 0,
              y: -30,
              duration: 0.6,
              ease: "power2.in",
            })
            .to(
              bottomLogoRef.current,
              {
                opacity: 0,
                y: -20,
                duration: 0.4,
                ease: "power2.in",
              },
              "-=0.3"
            )
            .to(
              containerRef.current,
              {
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
              },
              "-=0.2"
            );
        }, 500);
      }
    }, 200);

    // Cleanup
    return () => {
      clearInterval(progressInterval);
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-primrycolor-dark flex flex-col items-center justify-center opacity-0"
    >
      {/* Main Logo */}
      <div ref={logoRef} className="mb-32">
        <Image
          src="/logo-van.png"
          alt="logo"
          className="w-48 md:w-72 h-12 md:h-16"
          width={500}
          height={500}
        />
        <div className="w-full h-1 bg-white mt-2"></div>
      </div>

      {/* Progress Section */}
      <div
        ref={progressRef}
        className="absolute bottom-20 left-0 right-0 px-8 md:px-16"
      >
        <div className="flex items-center justify-between mb-4">
          {/* Bottom Left Logo */}
          <div ref={bottomLogoRef}>
            <span className="text-white text-sm font-medium tracking-wider">
              VANHARD
            </span>
          </div>

          {/* Progress Percentage */}
          <div className="flex items-center space-x-8">
            <span
              ref={percentageRef}
              className="text-white text-lg font-medium"
            >
              0%
            </span>
            <span
              ref={loadingTextRef}
              className="text-white text-sm tracking-wider"
            >
              Loading ...
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-0.5 bg-gray-700 relative overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-white/10 rounded-full"></div>
      </div>
    </div>
  );
}
