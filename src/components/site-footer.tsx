"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Shield,
  Server,
  Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    // GSAP animations
    const ctx = gsap.context(() => {
      // Animate logo
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: logoRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate columns
      columnsRef.current.forEach((column, index) => {
        if (column) {
          gsap.fromTo(
            column,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: column,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Animate bottom section
      if (bottomRef.current) {
        gsap.fromTo(
          bottomRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bottomRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@vanhard.com" },
    { icon: Phone, label: "Phone", value: "+1 (216) 272-1651" },
    {
      icon: MapPin,
      label: "Location",
      value: "Secure Infrastructure Solutions",
    },
  ];

  const services = [
    "System Hardening",
    "Infrastructure Setup",
    "Security Configuration",
    "Documentation & Support",
    "Privacy Implementation",
  ];

  // const socialLinks = [
  //   { icon: Github, label: "GitHub", href: "#" },
  //   { icon: Linkedin, label: "LinkedIn", href: "#" },
  //   { icon: Twitter, label: "Twitter", href: "#" },
  // ];

  return (
    <footer
      ref={footerRef}
      className="bg-[#171717] text-slate-200 relative w-full border-t border-gray-600/50 mt-auto"
    >
      {/* Solid background overlay */}
      <div className="absolute inset-0 bg-[#171717] z-0"></div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-20 h-20 border border-blue-500/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-blue-500/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-blue-500/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 md:mb-12 w-full">
          <div
            ref={(el) => {
              if (el) columnsRef.current[0] = el;
            }}
            className="md:col-span-2 lg:col-span-1 order-1"
          >
            <div ref={logoRef} className="mb-6">
              <Link
                href="/"
                className="flex items-center justify-center md:justify-start gap-3 mb-4"
              >
                <Image
                  src="/logo-blue.svg"
                  alt="VANHARD Logo"
                  width={350}
                  height={150}
                  className="w-48  lg:w-64 h-auto"
                  priority
                />
              </Link>
              <p className="text-slate-300 leading-relaxed text-base md:text-lg text-center md:text-left">
                Professional system installation and security services with
                complete client control and transparency.
              </p>
            </div>

            <div className="flex items-center gap-2 opacity-60 mt-6 justify-center md:justify-start">
              <Lock className="w-4 h-4 text-blue-400" />
              <div className="flex-1 h-px bg-gradient-to-r from-blue-400/40 to-transparent"></div>
              <Server className="w-4 h-4 text-blue-400" />
            </div>
          </div>

          {/* Services */}
          <div
            ref={(el) => {
              if (el) columnsRef.current[1] = el;
            }}
            className="order-3 md:order-2 lg:order-2"
          >
            <h4 className="text-xl md:text-2xl font-semibold mb-6 text-white text-center md:text-left">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors duration-300 flex-shrink-0"></div>
                  <span className="text-slate-300 text-lg group-hover:text-white transition-colors duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            ref={(el) => {
              if (el) columnsRef.current[2] = el;
            }}
            className="order-4 md:order-3 lg:order-3"
          >
            <h4 className="text-xl md:text-2xl font-semibold mb-6 text-white text-center md:text-left">
              Contact
            </h4>
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-500/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-300 flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-slate-400 text-sm mb-1">
                        {item.label}
                      </div>
                      <div className="text-white text-lg group-hover:text-blue-300 transition-colors duration-300 break-words">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div
            ref={(el) => {
              if (el) columnsRef.current[3] = el;
            }}
            className="md:col-span-2 lg:col-span-1 order-2 md:order-4 lg:order-4"
          >
            <h4 className="text-xl md:text-2xl font-semibold mb-6 text-white text-center md:text-left">
              Connect
            </h4>

            {/* Social Links */}
            <div className="flex gap-4 mb-8 justify-center md:justify-start">
              {/* {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-14 h-14 bg-blue-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-500/20 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })} */}
            </div>

            {/* Newsletter */}
            <div className="bg-blue-500/5 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h5 className="font-semibold mb-3 text-white text-lg text-center md:text-left">
                Stay Updated
              </h5>
              <p className="text-slate-300 text-base mb-4 text-center md:text-left">
                Get security insights and updates
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50"
                />
                <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-300 text-base font-medium whitespace-nowrap hover:scale-105 transform transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
            
          </div>
          
        </div>
     {/* Bottom Section */}
        <div ref={bottomRef} className="border-t border-gray-600/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-base text-center md:text-left">
              © 2024 VANHARD. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-base flex-wrap justify-center">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
              >
                Security
              </a>
            </div>
          </div>
        </div>
   
      </div>
    </footer>
  );
};

export default Footer;
