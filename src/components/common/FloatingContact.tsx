"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MessageCircle, Mail, Phone, X, Send, Calendar } from "lucide-react";
import Link from "next/link";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mainButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation for main button
      gsap.fromTo(
        mainButtonRef.current,
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 1,
        }
      );

      // Floating animation
      gsap.to(mainButtonRef.current, {
        y: -8,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Open animation
      gsap.set(overlayRef.current, { display: "block" });
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );

      gsap.fromTo(
        menuRef.current,
        {
          scale: 0,
          opacity: 0,
          y: 20,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        }
      );

      //   // Stagger animation for menu items
      //   gsap.fromTo(
      //     ".contact-item",
      //     {
      //       opacity: 0,
      //       x: 20,
      //       scale: 0.8,
      //     },
      //     {
      //       opacity: 1,
      //       x: 0,
      //       scale: 1,
      //       duration: 0.3,
      //       stagger: 0.1,
      //       delay: 0.2,
      //       ease: "power2.out",
      //     }
      //   );
    } else {
      // Close animation
      gsap.to(menuRef.current, {
        scale: 0,
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        },
      });
    }
  }, [isOpen]);

  const handleMainButtonClick = () => {
    setIsOpen(!isOpen);

    // Button rotation animation
    gsap.to(mainButtonRef.current, {
      rotation: isOpen ? 0 : 45,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleContactClick = (type: "email" | "whatsapp") => {
    if (type === "email") {
      window.location.href = "mailto:contact@yourcompany.com";
    } else if (type === "whatsapp") {
      window.open(
        "https://wa.me/+12162721651?text=Hello! I would like to know more about your services.",
        "_blank"
      );
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 hidden"
        onClick={() => setIsOpen(false)}
      />

      {/* Floating Contact Container */}
      <div ref={containerRef} className="fixed bottom-6 right-6 z-50">
        {/* Contact Menu */}
        <div
          ref={menuRef}
          className="absolute bottom-20 right-0 bg-gradient-to-br from-primrycolor-dark via-primrycolor-dark to-primrycolor-light rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[280px] opacity-0"
        >
          {/* Header */}
          <div className="text-center mb-4 pb-4 border-b border-gray-100">
            <h3 className="text-lg font-bold text-slate-200 mb-1">
              Get in Touch
            </h3>
            <p className="text-sm text-slate-200">
              Choose your preferred contact method
            </p>
          </div>

          {/* Contact Options */}
          <div className="space-y-3">
            {/* Email Option */}
            <button
              onClick={() => handleContactClick("email")}
              className="contact-item w-full flex items-center gap-4 p-4 rounded-xl  border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-slate-200 group-hover:text-blue-700 transition-colors">
                  Email Us
                </h4>
                <p className="text-sm text-slate-200">contact@vanhard.com</p>
              </div>
              <Send className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
            </button>

            {/* WhatsApp Option */}
            <button
              onClick={() => handleContactClick("whatsapp")}
              className="contact-item w-full flex items-center gap-4 p-4 rounded-xl border border-green-100 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-slate-200 group-hover:text-green-700 transition-colors">
                  WhatsApp
                </h4>
                <p className="text-sm text-slate-200">
                  Quick response guaranteed
                </p>
              </div>
              <Send className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" />
            </button>

            {/* Phone Option */}
            <button
              onClick={() => (window.location.href = "tel:+1 (216) 272-1651")}
              className="contact-item w-full flex items-center gap-4 p-4 rounded-xl border border-purple-100 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-slate-200 group-hover:text-purple-700 transition-colors">
                  Call Us
                </h4>
                <p className="text-sm text-slate-200">+1 (216) 272-1651</p>
              </div>
              <Send className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </div>

          {/* Schedule Appointment Option */}
          <Link href="https://vanhard.net/apps/appointments/pub/twbM2CzBVDzltVbt/form">
            <button className="contact-item w-full flex items-center gap-4 p-4 rounded-xl border border-orange-100 hover:from-orange-100 hover:to-amber-100 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-slate-200 group-hover:text-orange-700 transition-colors">
                  Schedule Appointment
                </h4>
                <p className="text-sm text-slate-200">Book a consultation</p>
              </div>
              <Send className="w-4 h-4 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </Link>

          {/* Footer */}
          <div className="text-center mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              We typically respond within 2 hours
            </p>
          </div>
        </div>

        {/* Main Floating Button */}
        <button
          ref={mainButtonRef}
          onClick={handleMainButtonClick}
          className="relative  w-16 h-16 bg-gradient-to-br from-primrycolor-dark via-primrycolor-dark to-primrycolor-light rounded-full shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 group overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primrycolor-dark via-primrycolor-dark to-primrycolor-light rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Button Content */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {isOpen ? (
              <X className="w-7 h-7 text-white transition-transform duration-300" />
            ) : (
              <MessageCircle className="w-7 h-7 text-white transition-transform duration-300" />
            )}
          </div>

          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />

          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-violet-400 animate-ping opacity-20" />
        </button>

        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xs font-bold text-white">!</span>
        </div>
      </div>
    </>
  );
}
