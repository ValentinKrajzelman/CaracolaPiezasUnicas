/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      principal: ['Questrial', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        principal: ['Questrial', 'sans-serif'],
        secundario: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
