"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/src/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

type SliderProps = {
  children: React.ReactNode;
  className?: string;
  /** Pixels to scroll per step. Defaults to the container width for "page" scroll. */
  scrollBy?: number;
  /** Enable autoplay that advances to the next slide periodically. */
  autoplay?: boolean;
  /** Autoplay interval in ms (default 3000). */
  interval?: number;
  /** Optional accessible label for the region. */
  ariaLabel?: string;
  /** Show/hide arrow controls (default true). */
  controls?: boolean;
};

export default function Slider({
  children,
  className,
  scrollBy,
  autoplay = false,
  interval = 3000,
  ariaLabel,
  controls = true,
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);

  const next = () => {
    const el = trackRef.current;
    if (!el) return;
    const step = scrollBy ?? el.clientWidth;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    if (atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  const prev = () => {
    const el = trackRef.current;
    if (!el) return;
    const step = scrollBy ?? el.clientWidth;
    const atStart = el.scrollLeft <= 2;
    if (atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      if (!isHover) next();
    }, interval);
    return () => clearInterval(id);
  }, [autoplay, interval, isHover]);

  return (
    <section
      className={cn("relative", className)}
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Edge fade masks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent"
      />

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="group"
      >
        {children}
      </div>

      {controls && (
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-2">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="pointer-events-auto h-8 w-8 rounded-full bg-white/80 backdrop-blur"
            aria-label="Previous"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="pointer-events-auto h-8 w-8 rounded-full bg-white/80 backdrop-blur"
            aria-label="Next"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </section>
  );
}
