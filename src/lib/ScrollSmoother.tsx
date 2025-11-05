"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 0.4, // adjust for smoother / lighter
      smoothTouch: 0.1, // improve mobile scrolling
      effects: true, // allow data-speed & effects
    });

    // cleanup on unmount
    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="overflow-hidden">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
