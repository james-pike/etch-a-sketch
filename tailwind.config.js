/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
        secondary: colors.red,
      },
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
