/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-b": "var(--text-b)",
        "dark-b": "var(--dark-b)",
        "light-b": "var(--light-b)",
        "white": "var(--white)",
        "grey-t": "var(--grey-t)"
      },

      fontFamily: {
        intertight: ['Inter Tight', "sans-serif"],
        inter: ['Inter', "sans-serif"]
       }
    },
  },
  plugins: [],
}
