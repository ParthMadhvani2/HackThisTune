module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#000000",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#E3ACF9",
      cardbg: "#CADEFC",
      search: "#674188",
      // active: "#E3ACF9",
      light: "#121212",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
