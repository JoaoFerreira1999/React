/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        '700': '700px',
      },
      inset: {
        '15px': '252px',
      }
    },
  },
  plugins: [],
}
