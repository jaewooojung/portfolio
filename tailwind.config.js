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
        slideRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideUpFadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "80%": {
            opacity: 1,
            // transform:
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "slide-right-infinite": "20s slideRight linear infinite",
        "modal-fade-out": "3s fadeOut ease-in forwards",
        "slide-up-fade-in": ".5s slideUpFadeIn ease-out forwards",
        "project-detail-slide-left": ".5s slideLeft forwards",
      },
    },
  },
  plugins: [],
};
