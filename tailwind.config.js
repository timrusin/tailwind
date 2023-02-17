/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   spanky: "rgb(240, 114, 10)"
      // }
      colors: {
        spanky: {
          50: "rgb(240, 114, 10, .25)",
          100: "rgb(240, 114, 10, .4)",
          200: "rgb(240, 114, 10, .5)",
          400: "rgb(240, 114, 10, 1)"
        }
      }
    },
  },
  plugins: [],
}