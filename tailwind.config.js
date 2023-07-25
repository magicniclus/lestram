/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        house: "url('/images/background/background_house.png')",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        heavy: ["Heebo", "sans-serif"],
        vidaloka: ["Vidaloka", "serif"],
        raleway: ["Raleway", "sans-serif"], // Ajoutez cette ligne
      },
      colors: {
        blue: "#1E2849",
        or: "#C8A84D",
        orLight: "#DBC586",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
