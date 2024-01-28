/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        darkSlateGray: "hsl(234, 29%, 20%)",
        charcoalGray: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        pureWhite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
