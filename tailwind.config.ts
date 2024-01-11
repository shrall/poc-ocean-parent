import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        ocean: "url('/images/background.png')",
      },
      colors: {
        ocean: {
          primary: {
            10: "#005CAA",
            20: "#144E83",
            30: "#00335E",
          },
          secondary: {
            10: "#E6F3FF",
            20: "#00B5F0",
            30: "#0094D5",
          },
          dark: {
            10: "#868E96",
            20: "#495057",
            30: "#2F3336",
          },
          light: {
            10: "#FFFFFF",
            20: "#F4F8FC",
            30: "#E9ECEF",
            40: "#CFCFCF",
          },
          danger: {
            10: "#FFD9D3",
            20: "#CD1923",
          },
          warning: {
            10: "#FFE592",
            20: "#885403",
          },
          success: {
            10: "#C2FFC5",
            20: "#009649",
          },
          orange: "#F37C30",
          yellow: "#FFBC0D",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
