import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    cursor: {
      scrollCursor: 'url("/images/scroll.png"), auto',
    },
    extend: {
      backgroundImage: {
        pattern: "url('/images/dotted.svg')",
        dots: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23ffffff22'/%3E%3C/svg%3E\")",
        grid: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23ffffff22' stroke-width='1'/%3E%3C/svg%3E\")",
        // Diagonal stripes
        stripes:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M0 10L10 0H0z' fill='%23ffffff22'/%3E%3C/svg%3E\")",
        // Crosshatch
        cross:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath d='M0 10h20M10 0v20' stroke='%23ffffff22' stroke-width='1'/%3E%3C/svg%3E\")",
        // Triangles
        triangles:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='17.3'%3E%3Cpath d='M0 17.3L10 0l10 17.3z' fill='%23ffffff11'/%3E%3C/svg%3E\")",
        // Plus signs
        plus: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M8 0h4v20H8zM0 8h20v4H0z' fill='%23ffffff22'/%3E%3C/svg%3E\")",
        hex: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34.64' height='30'%3E%3Cpath d='M17.32 0l17.32 10v20l-17.32 10L0 30V10z' fill='none' stroke='%23ffffff22' stroke-width='1'/%3E%3C/svg%3E\")",
        matrix:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='20'%3E%3Ctext x='0' y='15' font-size='14' fill='%23ffffff22' font-family='monospace'%3E0101%3C/text%3E%3C/svg%3E\")",
      },
      transitionDuration: {
        long: "1500ms", // 1.5 seconds
        "extra-long": "2000ms", // 2 seconds
      },
      fontFamily: {
        antonio: ["var(--font-antonio)", "sans-serif"],
        magistral: ["var(--font-magistral)", "sans-serif"],
        almarai: ["var(--font-almarai)", "sans-serif"],
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        primrycolor: {
          light: "#005b95",
          dark: "#132149",
        },
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
        gray: {
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
          DEFAULT: "#86868b",
        },
        zinc: "#101010",
        cream: "#e9e9e9",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwindcss-animate")],
};

export default config;
