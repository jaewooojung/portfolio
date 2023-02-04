/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        slideRightInfinite: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "cursor-scale-up": ".3s cursorScaleUp forwards",
        "cursor-scale-down": ".3s cursorScaleDown forwards",
        "fade-in": ".3s fadeIn forwards",
        "fade-out": ".3s fadeOut forwards",
        "slide-right-infinite": "20s slideRightInfinite linear infinite",
      },
    },
  },
  plugins: [],
};
