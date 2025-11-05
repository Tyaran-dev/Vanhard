"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function MouseFollower() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: 0, y: 0 }); // mouse target
  const posRef = useRef({ x: 0, y: 0 }); // current dot position
  const rafRef = useRef<number>();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true); // control fade

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setVisible(true); // show again when mouse comes back
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const onLeave = () => {
      setVisible(false); // hide when mouse leaves window
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    const step = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${
          posRef.current.x - 12
        }px, ${posRef.current.y - 12}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={dotRef}
      className={`pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 rounded-full border-2 border-blue-500 shadow-[0_0_12px_#3b82f6] will-change-transform transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />,
    document.body
  );
}
