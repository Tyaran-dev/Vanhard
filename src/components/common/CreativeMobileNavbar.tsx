"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { useNavItems } from "@/src/constants/index";
import Image from "next/image";
import LanguageSwitcher from "./translate/LanguageSwitcher";
import { useLocale } from "next-intl";

const iconMap = {
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
};

const CreativeMobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = useNavItems();
  const locale = useLocale();
  const isArabic = locale === "ar";

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.documentElement.style.height = "100%";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    };
  }, [isOpen]);

  // Auto-cycle through nav items for visual effect
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % navItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isOpen, navItems.length]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      x: isArabic ? 50 : -50,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    closed: {
      clipPath: isArabic ? "circle(0% at 0% 0%)" : "circle(0% at 100% 0%)",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    open: {
      clipPath: "circle(150% at 100% 0%)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        className={`fixed top-6 z-50 w-14 h-14 bg-transparent rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow duration-300 ${
          isArabic ? "left-6" : "right-6"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        variants={buttonVariants}
        animate={isOpen ? "open" : "closed"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />

            {/* Menu Container */}
            <motion.div
              className="fixed inset-0 z-40 bg-black h-screen"
              variants={backgroundVariants}
              initial="closed"
              animate="open"
              exit="closed"
              dir={isArabic ? "rtl" : "ltr"}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <motion.div
                className={`relative h-full flex flex-col justify-between p-8 pt-20 bg-gradient-to-br from-primrycolor-dark via-primrycolor-dark to-primrycolor-light ${
                  isArabic ? "font-almarai" : "font-antonio"
                }`}
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {/* Header */}
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-8"
                >
                  <Image
                    src="/logo-light.png"
                    alt="logo"
                    className="w-48 md:w-72 h-12 md:h-16 mx-auto"
                    width={500}
                    height={500}
                  />
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
                </motion.div>

                {/* Navigation Items */}
                <nav className="flex-1 flex items-center">
                  <ul className="w-full space-y-6">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.id}
                        variants={itemVariants}
                        className="group"
                        onHoverStart={() => setActiveIndex(index)}
                      >
                        <a
                          href={item.link}
                          onClick={handleNavClick}
                          className="block relative"
                        >
                          <motion.div
                            className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                              activeIndex === index
                                ? "bg-white/10 backdrop-blur-sm border border-white/20"
                                : "hover:bg-white/5"
                            }`}
                            whileHover={{ x: isArabic ? -10 : 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div
                              className={`flex items-center ${
                                isArabic ? "space-x-reverse" : "space-x-4"
                              }`}
                            >
                              <span className="text-primrycolor-light text-sm font-mono">
                                {item.id}
                              </span>
                              <div
                                className={
                                  isArabic ? "text-right" : "text-left"
                                }
                              >
                                <h3 className="text-white text-xl uppercase font-bold group-hover:text-purple-300 transition-colors">
                                  {item.title}
                                </h3>
                                {item.description && (
                                  <p className="text-gray-400 text-sm">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                            <motion.div
                              className="text-white/60 group-hover:text-white transition-colors"
                              whileHover={{ rotate: 45 }}
                            >
                              <ArrowUpRight className="w-6 h-6" />
                            </motion.div>
                          </motion.div>
                        </a>
                      </motion.li>
                    ))}
                    <motion.li variants={itemVariants}>
                      <div className="flex justify-center pt-4">
                        {/* <LanguageSwitcher /> */}
                      </div>
                    </motion.li>
                  </ul>
                </nav>

                {/* Footer */}
                <motion.div variants={itemVariants} className="space-y-6">
                  {/* Social Links - Uncomment if needed */}
                  {/* 
                  <div className={`flex justify-center ${isArabic ? "space-x-reverse" : ""} space-x-6`}>
                    {socialLinks.map((social, index) => {
                      const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                      return (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <IconComponent className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                  */}

                  {/* Contact Info */}
                  <div
                    className={`text-center text-gray-400 text-sm ${
                      isArabic ? "text-right" : "text-center"
                    }`}
                  >
                    <p>hello@company.com</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CreativeMobileNavbar;
