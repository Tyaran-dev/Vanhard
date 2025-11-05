"use client";
import { useNavItems } from "@/src/constants/index"; // Import the hook
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MobileNavbar from "./CreativeMobileNavbar";
import Image from "next/image";
import LanguageSwitcher from "./translate/LanguageSwitcher";
import { useLocale } from "next-intl";

const NavBar = () => {
  const navItems = useNavItems(); // Use the hook
  const locale = useLocale(); // Get current locale
  const isArabic = locale === "ar";
  const navContainerRef = useRef(null);
  const linksRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className={`fixed inset-x-0 z-50 h-20 border-none transition-all duration-700 sm:inset-x-6 backdrop-blur-md ${
        isArabic ? "font-almarai" : "font-antonio"
      }`} // Apply font conditionally
      dir={isArabic ? "rtl" : "ltr"} // Set direction
    >
      <header className="absolute top-1/2 w-full  p-8 -translate-y-1/2 ">
        <nav className="flex size-full items-center  justify-between ">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <Image
              src="/logo-van.png"
              alt="logo"
              className="w-48 md:w-72 h-12 md:h-16"
              width={500}
              height={500}
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  ref={linksRef}
                  className="nav-hover-btn text-lg  mx-8  hover:p-2 p-4 "
                >
                  <span className="inline-block">{item.title}</span>
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <MobileNavbar />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;

              // <LanguageSwitcher />

