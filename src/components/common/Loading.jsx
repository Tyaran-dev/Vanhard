import React, { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import AnimatedTitle from "@/components/common/AnimatedTitle";
import Image from "next/image";

const Loading = ({ loading }) => {
  const [animationDone, setAnimationDone] = useState(false);

  // 👇 Apply hidden/offset states BEFORE first paint to avoid flashes
  useLayoutEffect(() => {
    gsap.set(".logo", { opacity: 0, y: -100 });
    gsap.set(".logo-name", { opacity: 0, y: 100 });
  }, []);

  // 👇 Animate logo and text on mount
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setAnimationDone(true),
    });

    tl.to(".logo", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
    }).to(
      ".logo-name",
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      },
      "-=1"
    );
  }, []);

  // 👇 Fade out loader once `loading` is false
  useEffect(() => {
    if (!loading && animationDone) {
      gsap.to(".loading-page", {
        opacity: 0,
        display: "none",
        duration: 1,
        ease: "power2.out",
      });
    } else if (loading) {
      gsap.set(".loading-page", { opacity: 1, display: "flex" });
    }
  }, [loading, animationDone]);

  return (
    <div className="loading-page z-[999999] fixed top-0 left-0 bg-black h-full w-full flex flex-col gap-6 items-center justify-center text-[#191654]">
      <Image
        src="/images/loading.svg"
        alt="logo"
        className="w-40 h-40 logo opacity-0"
        width={105}
        height={105}
        // 👈 DO NOT add any inline transform/opacity
      />

      <div className="name-container h-[30px]">
        <div className="special-font logo-name text-[20px] tracking-[12px] ml-[20px] font-extrabold">
          <AnimatedTitle
            title="<b>stations</b>"
            containerClass="mt-5 !text-cyan text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
