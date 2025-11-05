import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { Antonio, Almarai } from "next/font/google";
import SmoothScrollWrapper from "../../lib/ScrollSmoother";
import Navbar from "@/src/components/common/Navbar";
import MouseTracker from "../../lib/MouseTracker";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/src/components/site-footer";
import FloatingContact from "@/src/components/common/FloatingContact";

export const metadata: Metadata = {
  title: "VANHARD",
  description: "VAANHARD LLC",
  generator: "vanhard",
  icons: {
    icon: "/favicon.png",
  },
};

const magistralBlack = localFont({
  src: "../fonts/Magistral-Black-Regular.ttf",
  variable: "--font-magistral",
  display: "swap",
});

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-antonio",
});

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const locale = params.locale;
  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      className={`${antonio.variable} ${magistralBlack.variable} ${almarai.variable}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <head></head>
      <body
        className={`scroll-smooth bg-[#171717] ${
          isArabic ? "font-almarai" : "font-antonio"
        }`}
      >
        <NextIntlClientProvider locale={locale}>
          {/* <MouseTracker /> */}
          <Navbar />
          <FloatingContact />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
