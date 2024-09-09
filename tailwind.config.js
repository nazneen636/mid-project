/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'cormorant': ["Cormorant", 'serif'],
      'open-sans': ["Open Sans", 'sans-serif'],
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
    extend: {},
  },
  plugins: [],
}