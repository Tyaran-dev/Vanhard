import { useTranslations } from "next-intl";
import {
  Cloud,
  Shield,
  Globe,
  Lock,
  Mail,
  Monitor,
  Key,
  Users,
  Crown,
  Package,
  GraduationCap,
  Server,
} from "lucide-react";

export const useNavItems = () => {
  const t = useTranslations("Navigation");

  return [
    { id: "01", title: <b>{t("home")}</b>, link: "/" },
    { id: "02", title: <b>{t("about")}</b>, link: "/about" },
    { id: "03", title: <b>{t("services")}</b>, link: "/services" },
    { id: "04", title: <b>{t("pricing")}</b>, link: "/pricing" },
    { id: "05", title: <b>{t("contact")}</b>, link: "/contact-us" },
  ];
};

export const useServices = () => {
  const t = useTranslations("Services");

  return [
    {
      icon: Cloud,
      title: t("0.title"),
      description: t("0.description"),
      features: t.raw("0.features"),
      price: t("0.price"),
      color: "from-primrycolor-light to-primrycolor-dark",
      accent: "blue",
    },
    {
      icon: Key,
      title: t("1.title"),
      description: t("1.description"),
      features: t.raw("1.features"),
      price: t("1.price"),
      color: "from-primrycolor-light to-primrycolor-dark",
      accent: "purple",
    },
    {
      icon: Globe,
      title: t("2.title"),
      description: t("2.description"),
      features: t.raw("2.features"),
      price: t("2.price"),
      color: "from-primrycolor-light to-primrycolor-dark",
      accent: "emerald",
    },
    {
      icon: Shield,
      title: t("3.title"),
      description: t("3.description"),
      features: t.raw("3.features"),
      price: t("3.price"),
      color: "from-primrycolor-light to-primrycolor-dark",
      accent: "orange",
    },
    {
      icon: Mail,
      title: t("4.title"),
      description: t("4.description"),
      features: t.raw("4.features"),
      price: t("4.price"),
      color: "from-primrycolor-light to-primrycolor-dark",
      accent: "indigo",
    },
    {
      icon: Monitor,
      title: t("5.title"),
      description: t("5.description"),
      features: t.raw("5.features"),
      price: t("5.price"),
      color: "from-primrycolor-light to-primrycolor-dark",
      accent: "cyan",
    },
    {
      icon: Lock,
      title: t("6.title"),
      description: t("6.description"),
      features: t.raw("6.features"),
      price: t("6.price"),
      color: "from-primrycolor-light to-primrycolor-dark",
      accent: "slate",
    },
  ];
};

// Individual Services Hook
export const useIndividualServices = () => {
  const t = useTranslations("PricingServices");

  return [
    {
      name: t("individual.0.name"),
      price: 700,
      icon: Cloud,
      description: t("individual.0.description"),
    },
    {
      name: t("individual.1.name"),
      price: 900,
      icon: Users,
      description: t("individual.1.description"),
    },
    {
      name: t("individual.2.name"),
      price: 750,
      icon: Globe,
      description: t("individual.2.description"),
    },
    {
      name: t("individual.3.name"),
      price: 600,
      icon: Shield,
      description: t("individual.3.description"),
    },
    {
      name: t("individual.4.name"),
      price: 900,
      icon: Server,
      description: t("individual.4.description"),
    },
    {
      name: t("individual.5.name"),
      price: 1200,
      icon: Package,
      description: t("individual.5.description"),
    },
    {
      name: t("individual.6.name"),
      price: "500 - 1,000",
      icon: Lock,
      description: t("individual.6.description"),
    },
  ];
};

// Packages Hook
export const usePackages = () => {
  const t = useTranslations("PricingServices");

  return [
    {
      name: t("packages.0.name"),
      icon: Cloud,
      price: 750,
      originalPrice: 1600,
      description: t("packages.0.description"),
      includes: t.raw("packages.0.includes"),
      features: t.raw("packages.0.features"),
      popular: false,
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      savings: 850,
    },
    {
      name: t("packages.1.name"),
      icon: Users,
      price: 950,
      originalPrice: 1450,
      description: t("packages.1.description"),
      includes: t.raw("packages.1.includes"),
      features: t.raw("packages.1.features"),
      popular: true,
      color: "from-emerald-500 to-teal-400",
      savings: 500,
    },
    {
      name: t("packages.2.name"),
      icon: Shield,
      price: 1400,
      originalPrice: 2750,
      description: t("packages.2.description"),
      includes: t.raw("packages.2.includes"),
      features: t.raw("packages.2.features"),
      popular: false,
      color: "from-purple-500 to-pink-400",
      savings: 1350,
    },
    {
      name: t("packages.3.name"),
      icon: Crown,
      price: 2200,
      originalPrice: 4750,
      description: t("packages.3.description"),
      includes: t.raw("packages.3.includes"),
      features: t.raw("packages.3.features"),
      popular: false,
      color: "from-amber-500 to-orange-400",
      savings: 2550,
    },
    {
      name: t("packages.4.name"),
      icon: GraduationCap,
      price: 2500,
      originalPrice: 2200,
      description: t("packages.4.description"),
      includes: t.raw("packages.4.includes"),
      features: t.raw("packages.4.features"),
      popular: false,
      color: "from-indigo-500 to-purple-400",
      savings: 0,
    },
  ];
};
