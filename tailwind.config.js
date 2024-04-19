/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      main: "#fafafa",
      secondary: "#131614",
      text: "#0F253E",
      black: "#010B13",
      white: "#FFFFFB",
      beige: "#D1C0A8",
      purple: "#CACFF9",
      pink: "#F5CBD9",
      mauve: "#E0CDE9",
      gray: "#464655",
      green: "#00ff87",
      blue: "#45caff",
      cyan: "#60efff",
      battleshipgray: "#93E5AB",
      teal: {
        400: "#2dd4bf",
        500: "#16CAB8",
        800: "#115e59",
      },
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
