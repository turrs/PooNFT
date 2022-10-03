/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#151922",
        purple: "#2E253E",
        gray: "#8991A3",
        red: "#FE2C55",
        green: "#84DA18",
      },
    },
  },
  plugins: [],
};
