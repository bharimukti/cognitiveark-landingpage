const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Valorant", ...defaultTheme.fontFamily.sans],
        sans: ["Futura", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "3xl": "1800px",
      },
      colors: {
        primary: "#fbec97",
        secondary: "#7cd7d6",
      },
    },
  },
  plugins: [],
};
