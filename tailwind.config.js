/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: ['motion-safe'],
      fontFamily: {
        akaya: ["Akaya Teivigala", "cursive", "Paprika", "cursive"],
        aboreto: ["Aboreto", "cursive"],
        roboto: ["Roboto Flex", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
