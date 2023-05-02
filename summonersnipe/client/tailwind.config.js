/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'gray': '#31313C',
        'background-dark': '#1C1C1F',
        'main-blue': '#5383E8',
      }
    },
  },
  plugins: [],
}

