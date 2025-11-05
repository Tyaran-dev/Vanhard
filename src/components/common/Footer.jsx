"use client";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  const links = [
    { name: "Home", link: "" },
    { name: "About", link: "about-us" },
    { name: "Contact", link: "contact" },
    { name: "", link: "terms-of-service" },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/x_stations_team?fbclid=IwZXh0bgNhZW0CMTAAAR0RiPuSGJmI1ogNSaoIBzPOLE3bZiIyHwWrd5iGKh7y5hYkBudIwyWAH2A_aem_koOqq3WlJ44S9MUzCoMQ1w",
    },
    {
      name: "YouTube ↗",
      icon: <CiYoutube />,
      href: "https://www.youtube.com/@X_stations",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      href: "https://www.tiktok.com/@x_stations?fbclid=IwZXh0bgNhZW0CMTAAAR27b5QcWd7ADg7nr6oOktr51nct1Xzmf80Ee2NCACM3yrNy0l0maJHRZ3U_aem_HMTEO_aZoiXcA16YCf-7nA",
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      href: "https://x.com/x_stations_tm?fbclid=IwZXh0bgNhZW0CMTAAAR1qSr2A0E4TFYo8ZLZ8PrQouOxZ-xrLYYQf9swEr_ZrOHjrMl68r6cC5wM_aem_uyVrGMram66mWAAWKBnMZA",
    },
  ];

  const contactInfo = [
    { name: "Discord", href: "#" },
    { name: "X", href: "#" },
    { name: "Youtube", href: "#" },
    { name: "Medium", href: "#" },
  ];

  return (
    <footer className="w-full  flex flex-col justify-between bg-[#000] !h-[800px] text-black py-12 px-6 md:px-12">
      <div></div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
          {/* Logo */}
          <div className="flex-shrink-0 self-center md:self-start">
            <Image
              src="/images/logo_cyan.png"
              alt="Project Poster"
              className="object-cover group-hover:scale-105 duration-1000 hover:rounded-2xl rounded-2xl"
              width={200}
              height={200}
            />
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-24 justify-between flex-grow">
            <div className="flex flex-col text-cream items-center font-bold special-font">
              <span className="text-base mb-4 capitalize text-cream">
                Explore
              </span>
              {links.map((link, index) => (
                <Link
                  href={`/${link.link}`}
                  key={index}
                  className=" relative justify-start overflow-hidden font-medium transition-all hover:scale-125 rounded  group py-1.5 px-2.5"
                >
                  <span className="w-56 h-48 rounded  bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 "></span>
                  <span className="font-robert-medium relative w-full  text-sm md:text-xl transition-colors duration-300 ease-in-out group-hover:text-white ">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col  items-center font-bold special-font">
              <span className="text-base mb-4 capitalize text-cream">
                Explore
              </span>
              {socialMedia.map((link, index) => (
                <Link
                  href={`${link.href}`}
                  key={index}
                  className=" relative justify-start overflow-hidden font-medium transition-all hover:scale-125 rounded  group py-1.5 px-2.5"
                >
                  <span className="w-56 h-48 rounded  bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 "></span>
                  <span className="font-robert-medium relative w-full text-cream text-sm md:text-2xl transition-colors duration-300 ease-in-out group-hover:text-white ">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col  items-center font-bold special-font">
              <span className="text-base mb-4 capitalize text-cream">
                follow us
              </span>
              {links.map((link, index) => (
                <Link
                  href={`/${link.link}`}
                  key={index}
                  className=" relative justify-start overflow-hidden font-medium transition-all hover:scale-125 rounded  group py-1.5 px-2.5"
                >
                  <span className="w-56 h-48 rounded  bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 "></span>
                  <span className="font-robert-medium relative w-full text-cream text-sm md:text-2xl transition-colors duration-300 ease-in-out group-hover:text-white ">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
      </div>
      <div className="mt-20 container text-cream mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-xs opacity-60">ZENTRY 2024. ALL RIGHTS RESERVED</p>
        <Link
          href="privacy-policy"
          className="text-xs opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          Privacy Police | Terms of Service
        </Link>
      </div>
    </footer>
  );
}
