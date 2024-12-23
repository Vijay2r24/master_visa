/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_color: "#F8F9F9",
        header_color: "#16161A",
        primary_color: "#E20835",
        card_color: "#F3F3F3",
        subtext_color: "#667085",
        header_text_color: "#CACED7",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
