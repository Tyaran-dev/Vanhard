"use client";

import { useState, useEffect } from "react";
import { Cloud, Shield, Lock, ArrowRight, ChevronUp } from "lucide-react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    {
      id: 1,
      number: "01",
      title: "Private Cloud Workspace",
      description:
        "Your own fully private online workspace for storing, sharing, and collaborating securely—no third-party cloud providers involved.",
      icon: Cloud,
    },
    {
      id: 2,
      number: "02",
      title: "Unified Identity & Access",
      description:
        "One secure login for all your internal systems, with custom permissions, roles, and multi-layer authentication.",
      icon: Shield,
    },
    {
      id: 3,
      number: "03",
      title: "Secure Remote Access",
      description:
        "Access desktops, servers, or files securely via your browser from anywhere in the world—with full control and audit trails.",
      icon: Lock,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
            <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">
              Vanguard Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block">PRODUCTION-READY ENVIRONMENTS</span>
            <span className="block">THAT YOU OWN AND CONTROL</span>
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Animated Background Glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : ""
                    }`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Service Number */}
                    <div className="mb-6">
                      <span
                        className={`text-8xl font-bold transition-all duration-500 ${
                          isHovered ? "text-blue-400" : "text-gray-600"
                        }`}
                      >
                        {service.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                          isHovered
                            ? "border-blue-400 bg-blue-400/10"
                            : "border-gray-600"
                        }`}
                      >
                        <IconComponent
                          className={`w-8 h-8 transition-colors duration-500 ${
                            isHovered ? "text-blue-400" : "text-gray-400"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                        isHovered ? "text-white" : "text-gray-200"
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-500 ${
                        isHovered ? "text-gray-300" : "text-gray-400"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : ""
                    }`}
                  ></div>
                </div>

                {/* Floating Animation */}
                <div
                  className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 blur-xl transition-all duration-500 ${
                    isHovered ? "opacity-100" : ""
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Take Ownership Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-start justify-between mb-12">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                <span className="block">TAKE OWNERSHIP OF YOUR</span>
                <span className="block">DIGITAL ENVIRONMENT</span>
              </h2>
            </div>
            <div className="lg:w-1/3 flex justify-end lg:justify-end">
              <button className="group flex items-center bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 text-sm">
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">
                YOUR INFRASTRUCTURE, INSTALLED BY EXPERTS
              </span>
            </div>
            <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
              Deploy private workspaces, secure login systems, and browser-based
              access with zero third-party dependence.
            </p>
          </div>
        </div>

        {/* Moving Text Strip */}
        <div className="relative overflow-hidden py-12 mb-20">
          <div className="flex animate-scroll whitespace-nowrap text-6xl md:text-8xl lg:text-[10rem] font-bold text-gray-600/20 leading-none">
            <div className="flex items-center">
              <span className="mr-20">.OUD.</span>
              <span className="mr-20">YOUR RULES.</span>
              <span className="mr-20">YOUR CLOUD.</span>
              <span className="mr-20">.OUD.</span>
              <span className="mr-20">YOUR RULES.</span>
              <span className="mr-20">YOUR CLOUD.</span>
              <span className="mr-20">.OUD.</span>
              <span className="mr-20">YOUR RULES.</span>
              <span className="mr-20">YOUR CLOUD.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/90 border-t border-gray-800/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            {/* Logo */}
            <div className="md:col-span-1">
              <div className="text-lg font-bold text-white">VANHARD</div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                QUICK LINKS
              </h4>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xs"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xs"
                  >
                    SERVICES
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xs"
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xs"
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                CONTACT INFO
              </h4>
              <div>
                <p className="text-gray-400 text-xs">
                  <span className="text-white font-medium">E:</span>{" "}
                  info@vanhard.com
                </p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                SOCIALS
              </h4>
              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 block text-xs"
                >
                  in
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800/30">
            <p className="text-gray-500 text-xs mb-4 md:mb-0 order-2 md:order-1">
              © 2024 VANHARD LLC. ALL RIGHTS RESERVED.
            </p>

            {/* Scroll to Top Button */}
            {showScrollTop && (
              <div className="flex items-center order-1 md:order-2">
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center mr-3 hover:bg-blue-400/10 transition-colors duration-300"
                >
                  <ChevronUp className="w-5 h-5 text-blue-400" />
                </button>
                <button
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-xs tracking-wider uppercase"
                >
                  SCROLL TOP
                </button>
              </div>
            )}
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Circle */}
    </div>
  );
}
