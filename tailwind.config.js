/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      main: "#2C2C54",
      secondary: "#474787",
      terciary: "#E4E4DE",
      text: "#ECECEC",
    },
    screens: {
      sm: "475px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
