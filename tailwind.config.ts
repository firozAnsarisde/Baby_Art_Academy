import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF6EC",
        cream: "#F1E7D3",
        mehndi: {
          50: "#EEF2ED",
          100: "#D7E0D4",
          300: "#8CA88C",
          500: "#4C6B4F",
          600: "#3A5940",
          700: "#2C4632",
          800: "#213626",
          900: "#182A1C",
        },
        terracotta: {
          50: "#F7E9E0",
          100: "#EFCFBB",
          300: "#CA8E64",
          500: "#B0623B",
          600: "#96502F",
          700: "#7A4026",
        },
        gold: {
          300: "#E3C787",
          500: "#C79A4B",
          600: "#A87E39",
        },
        charcoal: {
          DEFAULT: "#2A251F",
          light: "#4A423A",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-karla)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
      },
      boxShadow: {
        soft: "0 12px 40px -18px rgba(42, 37, 31, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
