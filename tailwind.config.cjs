/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      colors: {
        black: "#f1edee",
        glass: "rgba(255,255,255,0.15)",
      },
    },
    screens: {
      ss: "480px",
      sm: "600px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
  },
  plugins: [],
};
