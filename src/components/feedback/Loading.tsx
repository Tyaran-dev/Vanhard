"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const loadingRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);
  const loadingTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the loading screen
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: onComplete,
        });
      },
    });

    // Initial setup
    gsap.set([logoRef.current, progressRef.current], {
      opacity: 0,
      y: 30,
    });

    gsap.set(progressBarRef.current, {
      width: "0%",
    });

    // Animation sequence
    tl
      // Fade in logo
      .to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      // Fade in progress section
      .to(
        progressRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      )
      // Animate progress bar and percentage
      .to(
        progressBarRef.current,
        {
          width: "100%",
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      .to(
        { progress: 0 },
        {
          progress: 100,
          duration: 2,
          ease: "power2.inOut",
          onUpdate: function () {
            const progress = Math.round(this.targets()[0].progress);
            if (percentageRef.current) {
              percentageRef.current.textContent = `${progress}%`;
            }
          },
        },
        "-=2"
      );
  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-50 bg-gray-900 flex flex-col items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="loadingPattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1" fill="rgba(59,130,246,0.3)" />
              <circle cx="10" cy="15" r="0.5" fill="rgba(168,85,247,0.2)" />
              <circle cx="50" cy="45" r="0.5" fill="rgba(34,197,94,0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#loadingPattern)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div ref={logoRef} className="mb-32">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-white rotate-45 rounded-sm"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
              VANHARD
            </h1>
          </div>
          <div className="w-24 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* Progress Section */}
        <div ref={progressRef} className="w-full max-w-md mx-auto">
          {/* Progress Bar Container */}
          <div className="relative mb-8">
            <div className="w-full h-0.5 bg-gray-700 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              ></div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rotate-45 rounded-sm opacity-60"></div>
              <span className="font-medium">VANHARD</span>
            </div>

            <span ref={percentageRef} className="font-mono text-white text-lg">
              0%
            </span>

            <span ref={loadingTextRef} className="font-medium">
              Loading ...
            </span>
          </div>
        </div>
      </div>

      {/* Subtle animated elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse"></div>
      <div
        className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/30 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-500/30 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
}
