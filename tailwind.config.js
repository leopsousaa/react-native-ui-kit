/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/css");

module.exports = {
  content: ["./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
};
