/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        aqua: {
          DEFAULT: "#1CBDB9",
        },
        sea: {
          DEFAULT: "#C0F5E8",
        },

        ash: {
          DEFAULT: "#E0E0E0",
        },
      },
      spacing: {
        13: "3.25rem",
      },
    },
  },
  plugins: [],
};
