"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadingProps {
  text: string;
}

export default function AnimatedHeading({ text }: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const letters = headingRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { color: "#000" },
      {
        duration: 0.6,
        stagger: 0.05, // delay per letter
        ease: "power3.out",
        color: "#fff",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", // when top of heading hits 80% of viewport
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <h2 ref={headingRef} className="text-4xl  font-bold flex flex-wrap">
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
}
