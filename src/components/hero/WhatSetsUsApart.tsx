import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, DollarSign, Server, UserCheck, FileText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhatSetsUsApart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const features = [
    {
      icon: DollarSign,
      title: "No Subscriptions or Hidden Fees",
      description:
        "Transparent pricing with no recurring costs or surprise charges",
    },
    {
      icon: Shield,
      title: "Zero Trust and Privacy by Default",
      description:
        "Built-in security and privacy protection from the ground up",
    },
    {
      icon: Server,
      title: "Your Environment, Your Control",
      description:
        "All systems installed in your environment — not hosted by us",
    },
    {
      icon: UserCheck,
      title: "Full Ownership of Data and Services",
      description:
        "Complete control and ownership of your data and infrastructure",
    },
    {
      icon: FileText,
      title: "Clean Documentation & Handoff",
      description:
        "Delivered with comprehensive technical documentation and credentials",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate cards with stagger
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-background relative mt-24">
      <div className="container mx-auto px-6">
        <div ref={containerRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Sets Us Apart
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional service delivery with complete transparency and
              client control
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className="group"
                >
                  <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 h-full hover:-translate-y-2">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-process group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
