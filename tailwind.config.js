/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(255,253,252)",
      },
      keyframes: {
        slideRightInfinite: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "slide-right-infinite": "20s slideRightInfinite linear infinite",
      },
    },
  },
  plugins: [],
};
