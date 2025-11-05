"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { setCookie } from "cookies-next";
import { useState, useTransition } from "react";

const locales = [
  { code: "en", label: "English", flag: "/usa.png" },
  // { code: "ar", label: "العربية", flag: "/ksa.png" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const handleChange = (newLocale: string) => {
    if (newLocale === locale) return;

    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");
    const paramsString = searchParams.toString();
    const queryString = paramsString ? `?${paramsString}` : "";
    const newPath = `/${newLocale}${pathWithoutLocale}${queryString}`;

    setCookie("NEXT_LOCALE", newLocale, { path: "/" });

    startTransition(() => {
      router.replace(newPath);
    });
    setOpen(false);
  };

  const currentLocale = locales.find((l) => l.code === locale);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-700"
      >
        <img src={currentLocale?.flag} alt="flag" className="w-5 h-5 rounded" />
        <span>{currentLocale?.label}</span>
        <span className="ml-2">▼</span>
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
          {locales.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => handleChange(code)}
              className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-gray-700"
              disabled={isPending}
            >
              <img src={flag} alt={label} className="w-5 h-5 rounded" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
