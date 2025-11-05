"use client";
import { navItems } from "@/src/constants";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/joy/Box";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import gsap from "gsap";
import LanguageSwitcher from "./translate/LanguageSwitcher";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navItemsRef = useRef([]);
  const tl = useRef(null);

  // Initialize timeline
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    // Set initial state
    if (menuRef.current) {
      gsap.set(menuRef.current, {
        yPercent: -100,
        opacity: 0,
      });
    }

    // Set initial state for nav items
    if (navItemsRef.current.length > 0) {
      gsap.set(navItemsRef.current, {
        y: 50,
        opacity: 0,
      });
    }
  }, []);

  // Open menu animation
  const openMenu = () => {
    if (!tl.current || !menuRef.current) return;

    tl.current.clear();

    tl.current
      .to(menuRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      })
      .to(
        navItemsRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      );

    tl.current.play();
  };

  // Close menu animation
  const closeMenu = () => {
    if (!tl.current || !menuRef.current) return;

    tl.current.clear();

    tl.current
      .to(navItemsRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      })
      .to(
        menuRef.current,
        {
          yPercent: -100,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
          onComplete: () => setIsMenuOpen(false),
        },
        "-=0.1"
      );

    tl.current.play();
  };

  // Handle menu toggle
  const handleMenuToggle = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      setIsMenuOpen(true);
    }
  };

  // Handle menu open
  useEffect(() => {
    if (isMenuOpen) {
      // Small delay to ensure DOM is ready
      requestAnimationFrame(() => {
        openMenu();
      });
    }
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <Box>
      {/* Menu toggle button */}
      <button
        onClick={handleMenuToggle}
        className="cursor-pointer p-2 hover:opacity-70 transition-opacity"
        aria-label="Open menu"
      >
        <CiMenuFries color="#fff" className="w-6 h-6" />
      </button>

      {/* Menu container - covers full screen */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 w-full h-full z-50 bg-cream text-black"
          style={{
            transform: "translateY(-100%)",
            opacity: 0,
          }}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-black/10">
              <div className="flex gap-6">
                <button className="text-sm font-medium hover:opacity-70 transition-opacity">
                  PRODUCTS
                </button>
                <button className="text-sm font-medium hover:opacity-70 transition-opacity">
                  WHITEPAPER
                </button>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Close menu"
              >
                <IoCloseOutline className="h-8 w-8" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex items-center justify-center px-8">
              <ul className="space-y-8 w-full max-w-md">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    ref={(el) => (navItemsRef.current[index] = el)}
                    className="group"
                  >
                    <a
                      href={item.link}
                      className="flex special-font items-baseline gap-4 text-4xl md:text-5xl text-slate-900 font-bold hover:opacity-70 transition-opacity"
                      onClick={closeMenu}
                    >
                      <span className="text-sm opacity-50 min-w-[2rem]">
                        {item.id}
                      </span>
                      <span className="relative flex-1">
                        {item.title}
                        <span className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                          ↗
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
                {/* <LanguageSwitcher /> */}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-8 border-t border-black/10">
              <a
                href="#"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                Media Kit
              </a>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
}
