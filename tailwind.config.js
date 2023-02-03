/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      keyframes: {
        cursorScaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.8)" },
        },
        cursorScaleDown: {
          "0%": { transform: "scale(1.8)" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "cursor-scale-up": ".3s cursorScaleUp forwards",
        "cursor-scale-down": ".3s cursorScaleDown forwards",
        "fade-in": ".3s fadeIn forwards",
        "fade-out": ".3s fadeOut forwards",
      },
    },
  },
  plugins: [],
};
