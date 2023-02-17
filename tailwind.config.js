/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    //if you needed to build a custom "design system" you can add new themes
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },

    extend: {
      //first customization simply creating a new color:
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