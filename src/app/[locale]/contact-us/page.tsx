"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  CheckCircle,
  Shield,
  Zap,
  Award,
  Calendar,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@vanhard.com",
      secondary: "Response within 24 hours",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (216) 272-1651",
      secondary: "Mon-Fri, 9 AM - 6 PM EST",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Secure Infrastructure HQ",
      secondary: "Professional consultations available",
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
    },
    {
      icon: Clock,
      title: "Support Hours",
      primary: "24/7 Emergency Support",
      secondary: "Critical infrastructure support",
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "No Hidden Costs",
      desc: "Transparent pricing with no subscriptions or surprise charges. What you see is what you pay.",
    },
    {
      icon: Zap,
      title: "Your Environment",
      desc: "All systems installed in your infrastructure with full control and ownership.",
    },
    {
      icon: Award,
      title: "Expert Documentation",
      desc: "Comprehensive technical documentation and complete knowledge transfer.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      // Contact cards animation
      gsap.fromTo(
        contactCardsRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: contactCardsRef.current[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Features animation
      gsap.fromTo(
        featuresRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Info section animation
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submitBtn = e.currentTarget.querySelector('button[type="submit"]');
    gsap.to(submitBtn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Message Sent Successfully! We'll get back to you within 24 hours.");

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      service: "general",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      ``
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div ref={heroRef}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Ready to secure your infrastructure? Let's discuss your project
              requirements and create a tailored solution.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-white/40"></div>
              <MessageSquare className="w-8 h-8" />
              <div className="w-16 h-px bg-white/40"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Cards */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) contactCardsRef.current[index] = el;
                  }}
                  className="group glass-effect rounded-xl card-hover"
                >
                  <div className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${info.color} ${info.hoverColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-100 font-medium mb-1">
                      {info.primary}
                    </p>
                    <p className="text-gray-400 text-sm">{info.secondary}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Contact Form & Info Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div ref={formRef}>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-200 text-gradient mb-4">
                  Start Your Project
                </h2>
                <p className="text-xl text-slate-200">
                  Tell us about your infrastructure needs and we'll create a
                  custom solution for you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-sm font-medium text-gray-300"
                    >
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="h-12 w-full px-3 rounded-md border border-gray-600 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-medium text-gray-300"
                    >
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                      className="h-12 w-full px-3 rounded-md border border-gray-600 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300"
                  >
                    <Building className="w-4 h-4" />
                    Company (Optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    className="h-12 w-full px-3 rounded-md border border-gray-600 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-gray-300"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full h-12 px-3 rounded-md border border-gray-600 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="infrastructure">Infrastructure Setup</option>
                    <option value="security">Security Hardening</option>
                    <option value="documentation">
                      Documentation Services
                    </option>
                    <option value="support">Ongoing Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your infrastructure requirements..."
                    rows={6}
                    required
                    className="w-full p-3 rounded-md border border-gray-600 bg-gray-800 text-gray-100 resize-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-all duration-300 rounded-md text-white disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 inline mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div ref={mapRef}>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-200 text-gradient mb-4">
                  Why Choose VANHARD?
                </h2>
                <p className="text-xl text-gray-400 mb-6">
                  Professional infrastructure services with complete
                  transparency and client control.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-6">
                {features.map((feature, i) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={i}
                      ref={(el) => {
                        if (el) featuresRef.current[i] = el;
                      }}
                      className="glass-effect rounded-xl p-6 card-hover"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-100 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Card */}
              <div className="mt-8 p-8 glass-effect rounded-2xl border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-400 mb-6">
                  Join the growing number of organizations that trust VANHARD
                  for their infrastructure needs.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-2 border-gray-900"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full border-2 border-gray-900"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-2 border-gray-900"></div>
                  </div>
                  <div>
                    <p className="text-sm font-mediumtext-gray-100 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      50+ Happy Clients
                    </p>
                    <p className="text-xs text-gray-400">
                      Secured infrastructure worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
