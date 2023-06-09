/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'principal':['"Nunito", sans-serif']
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('flowbite/plugin')],
}

